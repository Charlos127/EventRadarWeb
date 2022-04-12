import React from 'react';

import { Story } from '@storybook/react';

import {
  Section as HDNSection,
  SectionProps as HDNSectionProps,
} from './Section';

export default {
  title: 'HDN Chakra/Sidebar/Section',
  component: HDNSection,
};

const Template: Story<HDNSectionProps> = args => (
  <HDNSection {...args}>
    <span>Section Children 1</span>
    <span>Section Children 2</span>
    <span>Section Children 3</span>
  </HDNSection>
);

export const Section = Template.bind({});
Section.args = {};
