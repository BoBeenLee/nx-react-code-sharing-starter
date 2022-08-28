import { render } from '@testing-library/react';

import Images from './images';

describe('Images', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Images />);
    expect(baseElement).toBeTruthy();
  });
});
