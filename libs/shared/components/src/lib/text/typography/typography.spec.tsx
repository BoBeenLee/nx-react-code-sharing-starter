import { render } from '@testing-library/react';

import { Bold10 } from './typography';

describe('Typography', () => {
  it('should render successfully Bold10', () => {
    const { baseElement } = render(<Bold10 />);
    expect(baseElement).toBeTruthy();
  });
});
