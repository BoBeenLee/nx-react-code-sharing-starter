import { Story, Meta } from '@storybook/react';
import { XEIcon, XEIconProps } from './xeicon';

export default {
  component: XEIcon,
  title: 'XEIcon',
} as Meta;

const Template: Story<XEIconProps> = (args) => <XEIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
