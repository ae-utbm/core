/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/ban-types */

// API types
export * from './i18n';
export * from './response';

//--- Global types override for the API only ---//
import type { email } from '../../global/@types/index';
import type { HttpStatus, RequestMethod } from '@nestjs/common';
import type { Class, TitleCase } from 'type-fest';

import { USER_GENDER } from '../constants/genders';
import { PERMISSIONS } from '../constants/perms';

import 'jest-extended';

// API types
export * from './dto';
export * from './i18n';

export type PERMISSION_NAMES = (typeof PERMISSIONS)[number]['name'];
export type GENDERS = (typeof USER_GENDER)[number];

export interface JWTPayload {
	/** The user ID */
	sub: number;

	/** The user email */
	email: email;

	iat: number;

	/** The expiration of the token */
	exp: number;
}

//--- Global types override for the API only ---//
declare global {
	// @ts-ignore
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
			(name: number | string | Function | FunctionLike, fn: EmptyFunction): void;
		}

		interface It {
			(name: `when ${string}` | `should ${string}`, fn?: ProvidesCallback, timeout?: number): void;

			/** @deprecated */
			(name: string, fn?: ProvidesCallback, timeout?: number): void;
		}
	}
}

type ProvidesCallback = (done: unknown) => Promise<unknown> | void;
type FunctionLike = (...args: unknown[]) => unknown;
type EmptyFunction = () => unknown;

type StatusMessages_ = {
	[Key in keyof typeof HttpStatus]: `${(typeof HttpStatus)[Key]} : ${TitleCase<Key>}`;
};
type StatusMessages = StatusMessages_[keyof StatusMessages_];
export type HttpStatusNames = TitleCase<keyof typeof HttpStatus>;
