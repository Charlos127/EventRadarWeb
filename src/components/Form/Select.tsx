/* eslint-disable react/no-children-prop */
import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from '@chakra-ui/react';

export interface SelectProps extends ChakraSelectProps {
  name: string;
  label?: string;
  data?: {
    id: string;
    name: string;
  }[];
  error?: FieldError;
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { name, label, error = null, data = [], ...rest },
  ref,
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraSelect
        id={name}
        name={name}
        color="gray.900"
        borderColor="gray.300"
        borderWidth="2px"
        placeholder="Selecione uma opção"
        _placeholder={{
          color: 'gray.300',
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
      >
        {data.map(value => (
          <option key={value.id} value={value?.id}>
            {value?.name}
          </option>
        ))}
      </ChakraSelect>

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Select = forwardRef(SelectBase);
