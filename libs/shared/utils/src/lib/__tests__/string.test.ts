import { traverseObjectKeys, traverseObjectSliceStr } from '../string';

describe('string', () => {
  it('traverseObjectKeys', () => {
    traverseObjectKeys(
      {
        a: 1,
        b: '1',
        c: null,
        d: undefined,
      },
      (key) => key.length <= 40
    );

    traverseObjectKeys(
      {
        a: [
          'test',
          'test1',
          'sdkfndsajk;fsanfkasndfk;adfadskfd;sdnfksdfa;lsfndkfnds;kldalfndas;klfadsfndslf;kadsnfl;adsknkldfnaskfnasd;',
        ],
      },
      (key) => key.length <= 40
    );
  });

  it('traverseObjectSliceStr', () => {
    expect(
      traverseObjectSliceStr(
        {
          a: 1,
          b: 'test',
          c: '12345623948290432432084092348903423',
          d: ['dsa;lfsalnsd', 'kadsf;alsdnfasf;asnkf;'],
          e: null,
          f: undefined,
          h: {
            a: 1,
            b: 'test',
            c: '12345623948290432432084092348903423',
            d: ['dsa;lfsalnsd', 'kadsf;alsdnfasf;asnkf;'],
            e: null,
            f: undefined,
          },
        },
        10
      )
    ).toEqual({
      a: 1,
      b: 'test',
      c: '1234562394',
      d: ['dsa;lfsaln', 'kadsf;alsd'],
      e: null,
      f: undefined,
      h: {
        a: 1,
        b: 'test',
        c: '1234562394',
        d: ['dsa;lfsaln', 'kadsf;alsd'],
        e: null,
        f: undefined,
      },
    });
  });
});
