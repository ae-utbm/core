import 'jest-extended';

export * from './api';

export type aspect_ratio = `${number}:${number}`;
export type email = `${string}@${string}.${string}`;

// eslint-disable-next-line @typescript-eslint/ban-types
export type Abstract<T> = Function & { prototype: T };
export type Constructor<T> = new (...args: unknown[]) => T;
export type Class<T> = Abstract<T> | Constructor<T>;

export type KeysOf<T extends object> = Array<keyof T>;

declare global {
	declare namespace jest {
		interface Expect {
			/**
			 * Ensures that a value is an instance of a class.
			 * @param classType The class that the value is expected to be an instance of.
			 *
			 * @overload
			 * ```ts
			 * jest.Expect.any(classType: any): any;
			 * ```
			 *
			 * @example
			 * expect("string").any(String);
			 */
			any<T>(classType: Class<T>): T;
		}
	}
}
