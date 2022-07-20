import { render } from '@testing-library/react';

import SEO from './seo';

describe('SEO', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SEO asPath="/" />
    );
    expect(baseElement).toBeTruthy();
  });
});
