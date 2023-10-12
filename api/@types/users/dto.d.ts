import { UserVisibilityEntity } from './entities';
import { BaseEntity } from '../base-entity';
import { PERMISSION_NAMES } from '../permissions';

export interface UserVisibilityPatchDto extends Omit<UserVisibilityEntity<unknown>, 'user' | keyof BaseEntity> {}

export interface UserSignInDto {
	/** The user's email */
	email: string;

	/** The user's password */
	password: string;
}

export interface UserRolesGetDto extends BaseEntity {
	/** Name of the role */
	name: Uppercase<string>;

	/** Date of expiration of the role on that user */
	expires: Date;

	/** True if the role has been revoked */
	revoked: boolean;

	/** List of permissions in that role */
	permissions: Array<PERMISSION_NAMES>;
}

export interface UserPostDto {
	/** The user's email */
	email: string;

	/** The user's password */
	password: string;

	/** The user's birth date */
	birth_date: Date;

	/** The user's first name */
	first_name: string;

	/** The user's last name */
	last_name: string;
}

export interface UserPatchDto extends UserPostDto {
	/** The user's id */
	id: number;

	/** The user's email */
	email?: string;

	/** The user's password */
	password?: string;

	/** The user's birth date */
	birth_date?: Date;

	/** The user's first name */
	first_name?: string;

	/** The user's last name */
	last_name?: string;

	/** The user's nickname */
	nickname?: string;

	/** The user's gender */
	gender?: string;

	/** The user's pronouns */
	pronouns?: string;

	/** The user's secondary email (for communication) */
	secondary_email?: string;

	/** The user's phone number */
	phone?: string;

	/** The user's parent contact (for minors only) */
	parent_contact?: string;

	// TODO: (KEY: 1) Make a PR to implement cursus & specialty in the API
	// /** The user's cursus */
	// cursus?: string;

	// /** The user's specialty at UTBM */
	// specialty?: string;

	/** The user's promotion */
	promotion?: number;
}

export interface UserTokenDto {
	/** The access token, used to identify ourself */
	token: string;

	/** The user's id */
	user_id: number;
}
