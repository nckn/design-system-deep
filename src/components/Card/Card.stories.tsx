import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';

// import '../../../styles/inputfield.scss';
export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'Label',
}
