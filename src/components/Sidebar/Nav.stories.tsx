import React from 'react';

import { Story } from '@storybook/react';

import { Nav as HDNNav } from './Nav';

export default {
  title: 'HDN Chakra/Sidebar/Nav',
  component: HDNNav,
};

const Template: Story = args => <HDNNav {...args} />;

export const Nav = Template.bind({});
Nav.args = {};
