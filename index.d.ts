export * from './api';

export type AspectRatio = `${number}:${number}`;
export type Email = `${string}@${string}.${string}`;

export type Class<T> = new (...args: unknown[]) => T;
export type ObjectKeysArray<T extends object> = Array<keyof T>;
