import React from 'react';

import { Story } from '@storybook/react';

import { Button as HDNButton, ButtonProps as HDNButtonProps } from './Button';

export default {
  title: 'HDN Chakra/Form/Button',
  component: HDNButton,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

const Template: Story<HDNButtonProps> = args => <HDNButton {...args} />;

export const Button = Template.bind({});
Button.args = {
  disabled: false,
  children: 'Button Text',
};
