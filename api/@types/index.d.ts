// API types
export * from './base-entity';
export * from './files';
export * from './i18n';
export * from './logs';
export * from './permissions';
export * from './promotions';
export * from './request';
export * from './response';
export * from './roles';
export * from './subscriptions';
export * from './users';

//--- Global types override for the API only ---//
import type { HttpStatus, RequestMethod } from '@nestjs/common';
import type { Class, TitleCase } from 'type-fest';

import 'jest-extended';

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

		interface Describe {
			(
				name:
					| `${string} (e2e)` // Entity (e2e)
					| `${string} (unit)` // Entity (unit)
					| `.${string}()` // .method()
					| `(${keyof typeof RequestMethod}) /${string}` // (GET) /routes
					| StatusMessages, // 200 : Ok
				fn: EmptyFunction,
			): void;

			/** @deprecated */
			// eslint-disable-next-line @typescript-eslint/ban-types
			(name: number | string | Function | FunctionLike, fn: EmptyFunction): void;
		}

		interface It {
			(name: `when ${string}` | `should ${string}`, fn?: ProvidesCallback, timeout?: number): void;

			/** @deprecated */
			(name: string, fn?: ProvidesCallback, timeout?: number): void;
		}
	}
}

type StatusMessages_ = {
	[Key in keyof typeof HttpStatus]: `${(typeof HttpStatus)[Key]} : ${TitleCase<Key>}`;
};
type StatusMessages = StatusMessages_[keyof StatusMessages_];
