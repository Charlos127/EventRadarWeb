import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ChakraProvider } from '@chakra-ui/react';

import { AppProvider } from './hooks';
import Routes from './routes';
import history from './services/history';
import { theme } from './styles/theme';

import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <ToastContainer />
      <AppProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </AppProvider>
    </ChakraProvider>
  );
}
