declare module '*.json';
declare module 'moment/min/moment-with-locales';

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
