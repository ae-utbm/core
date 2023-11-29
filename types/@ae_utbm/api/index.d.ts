/* eslint-disable import/no-unresolved */

// API types
export * from './response';
export * from './dto';

import type { email } from '../core';

export interface JWTPayload {
	/** The user ID */
	sub: number;

	/** The user email */
	email: email;

	iat: number;

	/** The expiration of the token */
	exp: number;
}
