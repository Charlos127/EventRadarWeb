import React from 'react';

import { Story } from '@storybook/react';

import { Sidebar as HDNSidebar } from '.';

export default {
  title: 'HDN Chakra/Sidebar/Sidebar',
  component: HDNSidebar,
};

const Template: Story = args => <HDNSidebar {...args} />;

export const Sidebar = Template.bind({});
Sidebar.args = {};
