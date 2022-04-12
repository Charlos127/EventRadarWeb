import React from 'react';

import { Story } from '@storybook/react';

import { Search as HDNSearch } from './Search';

export default {
  title: 'HDN Chakra/Sidebar/Search',
  component: HDNSearch,
};

const Template: Story = args => <HDNSearch {...args} />;

export const Search = Template.bind({});
Search.args = {};
