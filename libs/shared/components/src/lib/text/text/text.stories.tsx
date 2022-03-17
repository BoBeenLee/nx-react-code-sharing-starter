import { Story, Meta } from '@storybook/react';
import { RNText, TextProps } from './text';

export default {
  component: RNText,
  title: 'Text',
} as Meta;

const Template: Story<TextProps> = (args) => <RNText {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
