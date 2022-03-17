import { Story, Meta } from '@storybook/react';
import styled from '@emotion/styled';
import { Bold8, Bold10, Bold12, Bold13, Bold14 } from './typography';

export default {
  title: 'Typography',
} as Meta;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Template: Story = () => {
  return (
    <Container>
      <Bold8>Bold8</Bold8>
      <Bold10>Bold10</Bold10>
      <Bold12>Bold12</Bold12>
      <Bold13>Bold13</Bold13>
      <Bold14>Bold14</Bold14>
    </Container>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
