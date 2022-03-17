import { render } from '@testing-library/react';

import XEIcon from './xeicon';

describe('XEIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<XEIcon />);
    expect(baseElement).toBeTruthy();
  });
});
