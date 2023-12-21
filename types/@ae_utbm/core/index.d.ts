export * from '../../../src/index';
export * from '../api';

// CORE TYPES
export type aspect_ratio = `${number}:${number}`;
export type base64 = `data:${string}/${string};base64,${string}`;
export type email = `${string}@${string}.${string}`;
export type imageURL = `blob:${URL}${string}`;
export type URL = `${string}://${string}.${string}`;

export type KeysOf<T extends object> = Array<keyof T>;

import { PERMISSIONS, GENDERS } from '../../../src/constants/index';
export type Permissions = (typeof PERMISSIONS)[number]['name'];
export type Genders = (typeof GENDERS)[number];

// recursive keys of an object
export type IsAny<T> = unknown extends T ? ([keyof T] extends [never] ? false : true) : false;
export type PathImpl<T, Key extends keyof T> = Key extends string
	? IsAny<T[Key]> extends true
		? never
		: T[Key] extends Record<string, unknown>
		?
				| `${Key}.${PathImpl<T[Key], Exclude<keyof T[Key], keyof unknown[]>> & string}`
				| `${Key}.${Exclude<keyof T[Key], keyof unknown[]> & string}`
		: never
	: never;
export type PathImpl2<T> = PathImpl<T, keyof T> | keyof T;
export type Path<T> = keyof T extends string
	? PathImpl2<T> extends infer P
		? P extends string | keyof T
			? P
			: keyof T
		: keyof T
	: never;
