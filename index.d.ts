import 'jest-extended';

export * from './api';

export type AspectRatio = `${number}:${number}`;
export type Email = `${string}@${string}.${string}`;

export type Class<T> = new (...args: unknown[]) => T;
export type ObjectKeysArray<T extends object> = Array<keyof T>;

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
