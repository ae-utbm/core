export * from './api';

export type email = `${string}@${string}.${string}`;
export type ObjectKeysArray<T extends object> = Array<keyof T>;
