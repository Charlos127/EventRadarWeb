import React, { ReactNode } from 'react';

import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

export interface ButtonProps extends ChakraButtonProps {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <ChakraButton colorScheme={rest.disabled ? 'gray' : 'primary'} {...rest}>
      {children}
    </ChakraButton>
  );
}
