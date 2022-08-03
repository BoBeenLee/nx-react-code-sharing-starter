import { Story, Meta } from '@storybook/react';
import { StyleSheet } from 'react-native';
import { Bold } from './typography';

export default {
  title: 'Typography',
} as Meta;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
});

const Template: Story = () => {
  return (
    <div style={styles.container}>
      <Bold.Bold8>Bold.Bold8</Bold.Bold8>
      <Bold.Bold10>Bold.Bold10</Bold.Bold10>
      <Bold.Bold12>Bold.Bold12</Bold.Bold12>
      <Bold.Bold13>Bold.Bold13</Bold.Bold13>
      <Bold.Bold14>Bold.Bold14</Bold.Bold14>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
