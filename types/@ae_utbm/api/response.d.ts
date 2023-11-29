import { email } from '../../global/@types/index';

export interface JWTPayload {
	/** The user id */
	sub: number;

	/** The user email */
	email: email;

	iat: number;

	/** The expiration of the token */
	exp: number;
}
