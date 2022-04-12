import React from 'react';
import { FaUser } from 'react-icons/fa';

import { Icon } from '@chakra-ui/react';
import { Story } from '@storybook/react';

import { Input as HDNInput, InputProps as HDNInputProps } from './Input';

export default {
  title: 'HDN Chakra/Form/Input',
  component: HDNInput,
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

const Template: Story<HDNInputProps> = args => {
  return <HDNInput {...args} icon={<Icon as={FaUser} />} />;
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
