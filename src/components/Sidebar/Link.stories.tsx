import React from 'react';
import { RiDashboardFill } from 'react-icons/ri';

import { Story } from '@storybook/react';

import { Link as HDNLink, LinkProps as HDNLinkProps } from './Link';

export default {
  title: 'HDN Chakra/Sidebar/Link',
  component: HDNLink,
  argTypes: {
    href: { control: 'text' },
    children: { control: 'text' },
    icon: {
      options: ['RiDashboardFill', 'FaLock', 'FaUser'],
      control: 'select',
    },
  },
};

const Template: Story<HDNLinkProps> = args => {
  return <HDNLink {...args} icon={RiDashboardFill} />;
};

export const Link = Template.bind({});
Link.args = {
  href: 'http://hdn.digital/',
  children: 'Link Text',
  icon: RiDashboardFill,
};
