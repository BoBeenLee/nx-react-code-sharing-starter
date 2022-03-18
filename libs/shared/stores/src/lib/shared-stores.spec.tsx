import { render } from '@testing-library/react';

import SharedStores from './shared-stores';

describe('SharedStores', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedStores />);
    expect(baseElement).toBeTruthy();
  });
});
