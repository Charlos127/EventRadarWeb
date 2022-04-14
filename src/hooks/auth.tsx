import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { httpClient } from '~/services/api-client';
import localStorage from '~/services/localStorage';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  isLoading: boolean;
  user: any;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(() => {
    // const token = localStorage.getItem('token');
    const token = 'auschuahsc';
    const userStorage = localStorage.getItem('user');

    if (token && userStorage) {
      const user = JSON.parse(userStorage);

      return {
        token,
        user,
      };
    }

    return {};
  });

  const signIn = useCallback(
    async ({ email, password }: SignInCredentials) => {
      setIsLoading(true);

      // const response = await httpClient<{ token: string; user: any }>({
      //   url: '/auth',
      //   method: 'post',
      //   body: { email, password },
      // });

      // if (response.isSucceeded && response.body) {
      //   const { token, user } = response.body;
      //   localStorage.setItem('token', token);
      //   localStorage.setItem('user', JSON.stringify(user));
      //   setData({ token, user });
      // }

      if (email === 'user@gmail.com' && password === '123') {
        const user = {
          email: 'user@gmail.com',
          name: 'user',
          state: 'SP',
          city: 'Campinas',
          userType: 'user',
        };
        localStorage.setItem('user', JSON.stringify(user));
        setData({ user, token: '' });
        setIsLoading(false);
        history.push('/home');
      } else if (email === 'host@gmail.com' && password === '123') {
        const user = {
          email: 'host@gmail.com',
          name: 'host',
          state: 'SP',
          city: 'Campinas',
          userType: 'host',
        };
        localStorage.setItem('user', JSON.stringify(user));
        setData({ user, token: '' });
        setIsLoading(false);
        history.push('/home');
      } else {
        toast.error('Login ou senha inválidos');
      }

      setIsLoading(false);
    },
    [history],
  );

  const signOut = useCallback(() => {
    localStorage.clear();

    setData({});
    history.push('/');
  }, [history]);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        isLoading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export { AuthProvider, useAuth };
