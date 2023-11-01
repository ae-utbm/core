import type { email } from '../../../global/@types';

export interface ISignInDTO {
	/** The user's email */
	email: email;

	/** The user's password */
	password: string;
}

export interface ITokenDTO {
	/** The JWT Token */
	token: string;

	/** The user id */
	user_id: number;
}
