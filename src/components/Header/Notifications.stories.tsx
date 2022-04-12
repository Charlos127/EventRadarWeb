import React from 'react';

import { Story } from '@storybook/react';

import { Notifications as HDNNotifications } from './Notifications';

export default {
  title: 'HDN Chakra/Header/Notifications',
  component: HDNNotifications,
};

const Template: Story = args => <HDNNotifications {...args} />;

export const Notifications = Template.bind({});
Notifications.args = {};
