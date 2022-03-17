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

export const once = <R>(func: (...rest: any[]) => R) => {
  let isCalled = false,
    result: R | null = null;
  return (...rest: any[]): R => {
    if (isCalled) {
      return result!;
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

export const isEmpty = <T>(obj: T | null | undefined) => {
  if (obj === undefined || obj === null) {
    return true;
  }
  const res = obj as any;
  return JSON.stringify(res) === JSON.stringify({}) || res === '' || res === [];
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

interface Omit {
  <T extends object, K extends [...(keyof T)[]]>(obj: T, ...keys: K): {
    [K2 in Exclude<keyof T, K[number]>]: T[K2];
  };
}

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
  (func: any) =>
  async (...args: any[]) => {
    try {
      return await func(...args);
    } catch (error) {
      // NOTHING
    }
  };

export function delay(seconds = 500) {
  return new Promise((resolve, __) => {
    setTimeout(() => {
      resolve();
    }, seconds);
  });
}

export function isJSON(str: string) {
  try {
    const obj = JSON.parse(str);
    if (obj && typeof obj === 'object' && obj !== null) {
      return true;
    }
  } catch (err) {
    // NOTHING
  }
  return false;
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
  iterable: Array<T | null | undefined> | null | undefined
) => {
  if (!iterable) {
    return [];
  }
  return iterable.filter(
    (i) => i !== null && i !== undefined && (i as any) !== ''
  ) as T[];
};

export const mergeRefs =
  <T>(...refs: Array<React.Ref<T>>) =>
  (ref: T) => {
    refs.forEach((resolvableRef) => {
      if (typeof resolvableRef === 'function') {
        resolvableRef(ref);
      } else {
        (resolvableRef as any).current = ref;
      }
    });
  };
