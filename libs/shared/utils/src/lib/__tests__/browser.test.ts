import { makeWindowOpenDimension } from '../browser';

describe('broswer', () => {
  it('should makeWindowOpenDimension', () => {
    expect(makeWindowOpenDimension()).toBe(
      'titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=700,width=1200,top=34,left=88'
    );
  });
});
