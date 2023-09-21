import { email } from '../../global/@types';

export interface BaseResponseDto {
	/** The entity ID */
	id: number;

	/** The entity updated date */
	updated: Date;

	/** The entity created date */
	created: Date;
}

export interface MessageResponseDto {
	/** The message */
	message: string;

	/** The status code */
	statusCode: number;
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
