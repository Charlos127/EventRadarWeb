import React from 'react';

import { Story } from '@storybook/react';

import {
  Button as ChackraButton,
  ButtonProps as ChackraButtonProps,
} from './Button';

export default {
  title: 'Chakra/Form/Button',
  component: ChackraButton,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

const Template: Story<ChackraButtonProps> = args => <ChackraButton {...args} />;

export const Button = Template.bind({});
Button.args = {
  disabled: false,
  children: 'Button Text',
};
