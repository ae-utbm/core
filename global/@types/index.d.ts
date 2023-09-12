export type aspect_ratio = `${number}:${number}`;
export type email = `${string}@${string}.${string}`;

export type KeysOf<T extends object> = Array<keyof T>;
