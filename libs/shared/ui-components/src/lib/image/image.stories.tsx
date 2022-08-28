import { getImages } from '@nx-react-code-sharing/images';
import { Story, Meta } from '@storybook/react';
import { Image, ImageProps } from './image';

export default {
  component: Image,
  title: 'Image',
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  style: {
    width: 100,
    height: 100,
  },
  source: {
    uri: getImages().iconImages.storybook,
  },
};
