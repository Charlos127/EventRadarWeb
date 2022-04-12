import React from 'react';
import { FaUser } from 'react-icons/fa';

import { Icon } from '@chakra-ui/react';
import { Story } from '@storybook/react';

import { Input as ChakraInput, InputProps as ChakraInputProps } from './Input';

export default {
  title: 'Chakra/Form/Input',
  component: ChakraInput,
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    error: { control: 'object', raw: true },
    icon: {
      options: ['FaLock', 'FaUser'],
      control: 'select',
    },
  },
};

const Template: Story<ChakraInputProps> = args => {
  return <ChakraInput {...args} icon={<Icon as={FaUser} />} />;
};

export const Input = Template.bind({});
Input.args = {
  name: 'username',
  label: 'Usuário',
  error: {
    type: 'validate',
    message: 'Nome de usuário inválido',
  },
  icon: <Icon as={FaUser} />,
};
