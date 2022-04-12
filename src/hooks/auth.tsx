import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

import { httpClient } from '~/services/api-client';
import localStorage from '~/services/localStorage';

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  loading: boolean;
  user: any;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('token');
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
    async ({ username, password }: SignInCredentials) => {
      setLoading(true);

      const response = await httpClient<{ token: string; user: any }>({
        url: '/auth',
        method: 'post',
        body: { username, password },
      });

      if (response.isSucceeded && response.body) {
        const { token, user } = response.body;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        setData({ token, user });
      }

      setLoading(false);
    },
    [],
  );

  const signOut = useCallback(() => {
    localStorage.clear();

    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        loading,
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
