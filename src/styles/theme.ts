import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: {
      100: '#e6f7ff',
      500: '#46D4FF',
      600: '#03ade0',
    },
    secondary: {
      500: '#006EFF',
      600: '#0061E1',
    },
    text: {
      400: '#717171',
      500: '#131816',
    },
    gray: {
      100: '#F9FAFB',
      200: '#F4F6F8',
      300: '#DFE3E8',
      400: '#C4CDD5',
      500: '#919EAB',
      600: '#637381',
      700: '#454F5B',
      800: '#212B36',
      900: '#161C24',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'primary.500',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
      },
      button: {
        color: 'white',
      },
      input: {
        _placeholder: {
          color: 'gray.100',
        },
      },
      _disabled: {
        cursor: 'not-allowed',
      },
    },
  },
});
