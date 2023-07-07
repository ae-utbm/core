import type { Email } from '@types';
import type { Request as ExpressRequest } from 'express';

export * from './files';
export * from './logs';
export * from './permissions';
export * from './promotions';
export * from './roles';
export * from './subscriptions';
export * from './users';

export * from './dto';
export * from './base-entity';

export * from './i18n';

export interface JWTPayload {
	/** The user id */
	sub: number;
	/** The user email */
	email: Email;

	iat: number;

	/** The expiration of the token */
	exp: number;
}

export type Request = ExpressRequest & { user: User };
