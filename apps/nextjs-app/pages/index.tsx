import { test } from '@nx-react-code-sharing/shared-apis';
import { Bold } from '@nx-react-code-sharing/shared-ui-components';
import {
  todosByOrderDESCSelector,
  useTodoStore,
} from '@nx-react-code-sharing/features-todo';
import { useEffect } from 'react';
import { env } from '../libs/env';


export function Index() {
  const todos = useTodoStore(todosByOrderDESCSelector);

  useEffect(() => {
    const fetchTest = async () => {
      const testData = await test<{
        status: string;
      }>({
        url: '/api/healthz',
      });
      console.log(testData);
    };
    fetchTest();
  }, []);

  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <Bold.Bold20>
              <span> Hello there, </span>
              Welcome nx-react-code-sharing 👋 Todo List (API_URL={env.API_URL})
            </Bold.Bold20>
            <ul>
              {todos.map((todo) => (
                <li key={todo.id}>{todo.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
