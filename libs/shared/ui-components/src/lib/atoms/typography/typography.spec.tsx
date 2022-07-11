import { render } from '@testing-library/react';

import { Bold } from './typography';

describe('Typography', () => {
  it('should render successfully Bold10', () => {
    const { baseElement } = render(<Bold.Bold10>test</Bold.Bold10>);
    expect(baseElement).toBeTruthy();
  });
});
