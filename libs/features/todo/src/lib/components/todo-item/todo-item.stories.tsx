import { Story, Meta } from '@storybook/react';
import { TodoItem, TodoItemProps } from './todo-item';

export default {
  component: TodoItem,
  title: 'TodoItem',
  argTypes: {},
} as Meta;

const Template: Story<TodoItemProps> = (args) => <TodoItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
