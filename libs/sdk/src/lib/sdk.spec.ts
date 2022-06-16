import { SDK } from './sdk';

describe('sdk', () => {
  it('should work', () => {
    const sdk = new SDK();
    expect(sdk.loggedInUserId).toEqual(undefined);
  });
});
