import { Story, Meta } from '@storybook/react';
import { SEO, SEOProps } from './seo';
import { Helmet } from 'react-helmet';

export default {
  component: SEO,
  title: 'others/SEO',
  argTypes: {},
} as Meta;

const Template: Story<SEOProps> = (args) => (
  <Helmet>
    <SEO {...args} />
  </Helmet>
);

export const Primary = Template.bind({});
Primary.args = {};
