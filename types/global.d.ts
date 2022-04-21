declare module '*.json';
declare module 'moment/min/moment-with-locales';
declare module '@emotion/primitives';

type Subtract<T, V> = Pick<T, Exclude<keyof T, keyof V>>;
type RetrieveAsyncFunc<T extends (...args: any[]) => any> =
  ReturnType<T> extends Promise<infer U> ? U : never;
type RemoveKeys<T, K extends Array<keyof T>> = Pick<
  T,
  Exclude<keyof T, K[keyof K]>
>;
type RequireProperty<T, P extends keyof T> = T & { [K in P]-?: T[P] };
type NoUndefinedField<T> = {
  [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>;
};

type Cons<H, T> = T extends readonly any[]
  ? ((h: H, ...t: T) => void) extends (...r: infer R) => void
    ? R
    : never
  : never;

type Prev = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  ...0[]
];

type Paths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends Record<string, any>
  ? {
      [K in keyof T]-?:
        | [K]
        | (Paths<T[K], Prev[D]> extends infer P
            ? P extends []
              ? never
              : Cons<K, P>
            : never);
    }[keyof T]
  : [];

type Leaves<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends Record<string, any>
  ? { [K in keyof T]-?: Cons<K, Leaves<T[K], Prev[D]>> }[keyof T]
  : [];

type Maybe<T> = T | Partial<T> | null | undefined;
