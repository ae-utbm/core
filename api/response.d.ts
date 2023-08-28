import { email } from '..';

export interface BaseResponseDto {
	/** The entity ID */
	id: number;

	/** The entity updated date */
	updated_at: Date;

	/** The entity created date */
	created_at: Date;
}

export interface MessageResponseDto {
	/** The message */
	message: string;
}

export interface JWTPayload {
	/** The user id */
	sub: number;
	/** The user email */
	email: email;

	iat: number;

	/** The expiration of the token */
	exp: number;
}
