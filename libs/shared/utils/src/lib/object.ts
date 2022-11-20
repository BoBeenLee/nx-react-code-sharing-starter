export function callValue<T>(supplier: () => T, defaultValue: T) {
  try {
    const value = supplier();
    return value || defaultValue;
  } catch (err) {
    //   console.error(supplier);
    return defaultValue;
  }
}

export function getKeys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}
