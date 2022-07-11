import { Story, Meta } from '@storybook/react';
import styled from '@emotion/styled';
import { Bold } from './typography';

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
      <Bold.Bold8>Bold.Bold8</Bold.Bold8>
      <Bold.Bold10>Bold.Bold10</Bold.Bold10>
      <Bold.Bold12>Bold.Bold12</Bold.Bold12>
      <Bold.Bold13>Bold.Bold13</Bold.Bold13>
      <Bold.Bold14>Bold.Bold14</Bold.Bold14>
    </Container>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
