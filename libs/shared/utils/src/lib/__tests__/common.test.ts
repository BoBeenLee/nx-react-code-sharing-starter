import { cond, uniqueId, omit, once, sortedObject } from '../common';

describe('common test', () => {
  test('cond test', () => {
    const siteMetadataMap = cond([
      {
        key: { isProduction: false },
        value: {
          description: 'development',
        },
      },
      {
        key: { isProduction: true },
        value: {
          description: 'production',
        },
      },
    ]);
    expect(siteMetadataMap({ isProduction: false })).toEqual({
      description: 'development',
    });
    expect(siteMetadataMap({ isProduction: true })).toEqual({
      description: 'production',
    });
  });

  test('sortedObject test', () => {
    expect(JSON.stringify(sortedObject({ a: 1, b: 2 }))).toEqual(
      JSON.stringify(sortedObject({ b: 2, a: 1 }))
    );
  });
  test('sorting test', () => {
    const arr = ['4', '1', '2', '3'];
    expect(
      arr.sort((a: string, b: string) => {
        return a > b ? 1 : -1;
      })
    ).toEqual(['1', '2', '3', '4']);
  });

  test('uniqueId test', () => {
    const test0 = uniqueId('test');
    const test1 = uniqueId('test');
    const test20 = uniqueId('test2');

    expect(test0).toEqual('test0');
    expect(test1).toEqual('test1');
    expect(test20).toEqual('test20');
  });

  test('omit test', () => {
    const data = { a: 1, b: 2, c: 3 };
    const res = omit(data, 'a', 'b');
    expect(res.c).toEqual(3);
  });

  test('once test', () => {
    const add = (a: number, b: number) => {
      return a + b;
    };
    const res = once(add);
    expect(res(1, 2)).toEqual(3);
    expect(res(1, 2)).toEqual(3);
  });
});
