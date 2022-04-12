import React from 'react';

import { Story } from '@storybook/react';

import { Header as HDNHeader } from '.';

export default {
  title: 'HDN Chakra/Header/Header',
  component: HDNHeader,
};

const Template: Story = args => <HDNHeader {...args} />;

export const Header = Template.bind({});
Header.args = {};
