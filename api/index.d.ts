import type { email } from '@types';

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
	email: email;

	iat: number;

	/** The expiration of the token */
	exp: number;
}
