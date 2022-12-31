import type * as React from 'react';

interface Omit {
  <T extends object, K extends [...(keyof T)[]]>(obj: T, ...keys: K): {
    [K2 in Exclude<keyof T, K[number]>]: T[K2];
  };
}

export const sortedObject = <T extends object>(obj: T) => {
  const keys = Object.keys(obj).sort() as Array<keyof T>;
  return keys.reduce((res, key) => {
    return {
      ...res,
      [key]: obj[key],
    };
  }, {}) as T;
};

export const cond = <K extends object, T>(
  conds: Array<{ key: K; value: T }>,
  defaultValue?: T
) => {
  return (key: K) => {
    const targetKey = JSON.stringify(sortedObject(key));
    return (
      conds.find((item) => JSON.stringify(sortedObject(item.key)) === targetKey)
        ?.value ?? defaultValue
    );
  };
};

export const uniqueId = (() => {
  const ids: { [key in string]: number } = {};
  return (prefix: string) => {
    if (ids[prefix] === undefined) {
      ids[prefix] = 0;
      return `${prefix}${ids[prefix]}`;
    }
    ids[prefix] += 1;
    return `${prefix}${ids[prefix]}`;
  };
})();

export const once = <P, R>(func: (...rest: P[]) => R) => {
  let isCalled = false,
    result: R | null = null;
  return (...rest: P[]): R => {
    if (isCalled) {
      return result as R;
    }
    isCalled = true;
    result = func(...rest);
    return result;
  };
};

export const isNumber = (num: string) => Number.isInteger(Number(num));

export const defaultNumber = (num: string, defaultValue: number) => {
  return isNumber(num) ? Number(num) : defaultValue;
};

export const isEmpty = <T>(obj: T | null | undefined | '' | []) => {
  if (obj === undefined || obj === null || obj === '') {
    return true;
  }
  if (Array.isArray(obj) && 'length' in obj) {
    return obj.length === 0;
  }
  return JSON.stringify(obj) === JSON.stringify({});
};

export const defaultEmpty = <T>(obj: T | null | undefined, defaultValue: T) => {
  if (isEmpty(obj)) {
    return defaultValue;
  }
  return obj ?? defaultValue;
};

export const identity = <T>(value?: T) => {
  return value;
};

export const omit: Omit = (obj, ...keys) => {
  const ret = {} as {
    [K in keyof typeof obj]: typeof obj[K];
  };
  let key: keyof typeof obj;
  for (key in obj) {
    if (!keys.includes(key)) {
      ret[key] = obj[key];
    }
  }
  return ret;
};

export const times = <T>(size: number, func: (index: number) => T): T[] => {
  const res = [];
  for (let i = 0; i < size; i++) {
    res.push(func(i));
  }
  return res;
};

export const enhanceNoError =
  (func: (...args: unknown[]) => unknown) =>
  async (...args: unknown[]) => {
    try {
      return await func(...args);
    } catch (error) {
      // NOTHING
    }
  };

export function delay(seconds = 500) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, seconds);
  });
}

export const getValue = <T>(func: () => T, defaultValue: T) => {
  try {
    return func();
  } catch (error) {
    return defaultValue;
  }
};

export const filterNull = <T>(iterable: Array<T | null> | null) => {
  if (!iterable) {
    return [];
  }
  return iterable.filter((i) => i !== null) as T[];
};

export const filterEmpty = <T>(
  iterable: Array<T | null | undefined | ''> | null | undefined
): Array<T> => {
  if (iterable === null || iterable === undefined || iterable.length === 0) {
    return [];
  }
  const res = iterable.filter(
    (i): i is T => ![null, undefined, ''].some((key) => key === i)
  );
  return res;
};

export const mergeRefs =
  <T>(...refs: Array<React.Ref<T>>) =>
  (ref: T) => {
    refs.forEach((resolvableRef) => {
      if (typeof resolvableRef === 'function') {
        resolvableRef(ref);
      } else if (resolvableRef !== null) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (resolvableRef as any).current = ref;
      }
    });
  };
