import React from 'react';

import { Story } from '@storybook/react';

import { Logo as HDNLogo } from './Logo';

export default {
  title: 'HDN Chakra/Header/Logo',
  component: HDNLogo,
};

const Template: Story = args => <HDNLogo {...args} />;

export const Logo = Template.bind({});
Logo.args = {};
