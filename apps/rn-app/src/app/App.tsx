/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

// @ts-ignore
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';

import { Bold } from '@nx-react-code-sharing/shared-ui-components';
import {
  todosByOrderDESCSelector,
  useTodoStore,
} from '@nx-react-code-sharing/features-todo';
import { env } from '../libs/env';

export const App = () => {
  const todos = useTodoStore(todosByOrderDESCSelector);
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.section}>
            <Text style={styles.textLg}>Hello there,</Text>
            <Bold.Bold8 testID="heading">
              Welcome RnApp 👋 Todo List (API_URL={env.API_URL})
            </Bold.Bold8>
          </View>
          <View style={styles.todos}>
            {todos.map((todo) => (
              <Bold.Bold12 key={todo.id}>{todo.name}</Bold.Bold12>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  textLg: {
    fontSize: 24,
  },
  scrollView: {
    backgroundColor: '#ffffff',
  },
  section: {
    marginVertical: 24,
    marginHorizontal: 12,
  },
  todos: {
    flexDirection: 'column',
  },
});

export default App;
