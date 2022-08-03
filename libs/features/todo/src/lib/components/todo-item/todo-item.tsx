import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  TodoItem: {
    color: 'pink',
  },
});

export interface TodoItemProps {
  children: React.ReactNode;
}

export function TodoItem(props: TodoItemProps) {
  const { children } = props;
  return <Text style={styles.TodoItem}>{children}</Text>;
}

export default TodoItem;
