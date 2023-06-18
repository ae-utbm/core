export interface UserSignInDto {
	/** The user's email */
	email: string;

	/** The user's password */
	password: string;
}

export interface UserPostDto {
	/** The user's email */
	email: string;

	/** The user's password */
	password: string;

	/** The user's birthday */
	birthday: Date;

	/** The user's first name */
	first_name: string;

	/** The user's last name */
	last_name: string;
}

export interface UserPatchDto extends UserPostDto {
	/** The user's id */
	id: number;

	/** The user's nickname */
	nickname?: string;

	/** The user's gender */
	gender?: string;

	/** The user's cursus */
	cursus?: string;

	/** The user's promotion */
	promotion?: number;
}

export interface UserTokenDto {
	/** The access token, used to identify ourself */
	token: string;

	/** The user's id */
	user_id: number;
}
