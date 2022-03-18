import styled from '@emotion/styled';
import { Bold20 } from '@nx-react-code-sharing/shared-components';
import {
  todosByOrderDESCSelector,
  useTodoStore,
} from '@nx-react-code-sharing/shared/stores';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  const todos = useTodoStore(todosByOrderDESCSelector);
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <Bold20>
              <span> Hello there, </span>
              Welcome nx-react-code-sharing 👋 Todo List
            </Bold20>
            <ul>
              {todos.map((todo) => (
                <li key={todo.id}>{todo.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
