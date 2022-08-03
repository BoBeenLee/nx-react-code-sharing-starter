import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  TodoItem: {
    color: 'pink',
  },
});

export interface TodoItemProps {}

export function TodoItem(props: TodoItemProps) {
  return <Text style={styles.TodoItem}>hello world</Text>;
}

export default TodoItem;
