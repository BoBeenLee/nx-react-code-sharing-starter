import { render } from '@testing-library/react';

import TodoItem from './todo-item';

describe('TodoItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodoItem>Helloworld</TodoItem>);
    expect(baseElement).toBeTruthy();
  });
});
