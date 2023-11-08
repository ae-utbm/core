import type { KeysRecursiveOf } from '#types';
import type { UnionToIntersection } from 'type-fest';

export {};

declare global {
	interface Object {
		/**
		 * Deep merge two or more objects into the first one
		 * @param target The object to merge into
		 * @param sources The objects to merge into the target
		 *
		 * @example
		 * Object.merge({ a: 1, b: 2 }, { b: 3, c: 4 }) // { a: 1, b: 3, c: 4 }
		 * @example
		 * Object.merge({ a: 1, b: { c: 2, d: 3 } }, { b: { d: 4, e: 5 } }) // { a: 1, b: { c: 2, d: 4, e: 5 } }
		 */
		merge<T extends Record<string, unknown>, U extends Record<string, unknown>[]>(
			target: T,
			...sources: U
		): T & UnionToIntersection<U[number]>;

		merge<T extends Record<string, unknown>>(target: T): T;
		merge<T extends Record<string, unknown>, U extends Record<string, unknown>[]>(
			target: T,
			...sources: U
		): (T & UnionToIntersection<U[number]>) | T;

		/**
		 * Check if the given item is a JS Object
		 * @param {unknown} item to be tested
		 * @returns {boolean} true if the item is a JS Object
		 *
		 * @example
		 * Object.isObject({}) // true
		 * @example
		 * Object.isObject({ a: 1 }) // true
		 * @example
		 * Object.isObject({ a: 1, b: {} }) // true
		 * @example
		 * Object.isObject([]) // false
		 */
		isObject(item: unknown): boolean;

		/**
		 * Get keys of an object recursively
		 * @returns {Array<string>} Recursive keys of the object
		 *
		 * @example Object.keysRecursive({ a: 1, b: { c: 2, d: 3 } }) // ['a', 'b.c', 'b.d']
		 */
		keysRecursive<T extends Record<string, unknown>>(target: T): KeysRecursiveOf<T>[];
	}
}

if (!Object.prototype.isObject) {
	Object.defineProperty(Object.prototype, 'isObject', {
		value: (item: unknown): boolean => {
			return item !== undefined && item !== null && typeof item === 'object' && !Array.isArray(item);
		},
		configurable: true,
		writable: true,
	});
}

if (!Object.prototype.merge) {
	Object.defineProperty(Object.prototype, 'merge', {
		value: <T extends Record<string, unknown>, U extends Record<string, unknown>[]>(
			target: T,
			...sources: U
		): (T & UnionToIntersection<U[number]>) | T => {
			if (!sources.length) return target;
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			const source: Record<string, unknown> = sources.shift()!;

			if (Object.isObject(target) && Object.isObject(source)) {
				for (const key in source) {
					if (Object.isObject(source[key])) {
						if (!(target as Record<string, object>)[key]) Object.assign(target, { [key]: {} });

						Object.merge(target[key] as Record<string, unknown>, source[key] as Record<string, unknown>);
					} else Object.assign(target, { [key]: source[key] });
				}
			}

			return Object.merge(target, ...sources);
		},
		configurable: true,
		writable: true,
	});
}

if (!Object.prototype.keysRecursive) {
	Object.defineProperty(Object.prototype, 'keysRecursive', {
		value: <T extends Record<string, unknown>>(target: T): KeysRecursiveOf<T>[] => {
			const keys: string[] = [];

			for (const key in target) {
				if (Object.isObject(target[key])) {
					const nestedKeys = Object.keysRecursive(target[key] as Record<string, unknown>);
					keys.push(...nestedKeys.map((nestedKey) => `${key}.${nestedKey}`));
				} else keys.push(key);
			}

			return keys as KeysRecursiveOf<T>[];
		},
		configurable: true,
		writable: true,
	});
}
