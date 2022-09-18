import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Toggle } from './Toggle';
// import Toggle from './Toggle';

// import '../../../styles/inputfield.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Toggle',
  component: Toggle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Toggle>;
// }

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;
// const Template = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  primary: true,
  label: 'Label',
}
// const figmaUrl = 'https://www.figma.com/file/M0GRfjcIleAgPBOvBi4ELh/Engine-Designsystem?node-id=36%3A7623'
// Default.parameters = {
//   design: {
//     type: 'figma',
//     url: figmaUrl
//   }
// }

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
