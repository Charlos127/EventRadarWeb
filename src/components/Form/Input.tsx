/* eslint-disable react/no-children-prop */
import React, {
  ReactElement,
  forwardRef,
  ForwardRefRenderFunction,
  cloneElement,
  useState,
} from 'react';
import { FieldError } from 'react-hook-form';

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

export interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  icon?: ReactElement;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, icon = null, error = null, ...rest },
  ref,
) => {
  const [isActiveIcon, setIsActiveIcon] = useState(false);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      {icon ? (
        <InputGroup>
          <InputLeftElement
            height="12"
            pointerEvents="none"
            children={cloneElement(icon, {
              color: isActiveIcon ? 'primary.500' : 'gray.300',
              transition: 'color 0.2s',
            })}
          />
          <ChakraInput
            id={name}
            name={name}
            color="gray.900"
            borderColor="gray.300"
            borderWidth="2px"
            _placeholder={{
              color: 'gray.500',
            }}
            _hover={{
              borderColor: 'gray.400',
            }}
            _focus={{
              borderColor: 'primary.500',
            }}
            onFocus={() => setIsActiveIcon(true)}
            onBlur={() => setIsActiveIcon(false)}
            variant="outline"
            size="lg"
            ref={ref}
            {...rest}
          />
        </InputGroup>
      ) : (
        <ChakraInput
          id={name}
          name={name}
          color="gray.900"
          borderColor="gray.300"
          borderWidth="2px"
          _placeholder={{
            color: 'gray.500',
          }}
          _hover={{
            borderColor: 'gray.400',
          }}
          _focus={{
            borderColor: 'primary.500',
          }}
          variant="outline"
          size="lg"
          ref={ref}
          {...rest}
        />
      )}

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
