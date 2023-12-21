import type { email } from '../../../global/@types/index';
import type { OutputBaseDto, OutputFileDto } from '.';
import type { Genders, Permissions } from '..';

export interface InputRegisterUserAdminDto {
	/** The user's email */
	email: email;

	/** The user's birth date */
	birth_date: Date;

	/** The user's first name */
	first_name: string;

	/** The user's last name */
	last_name: string;
}

export interface InputRegisterUsersAdminDto {
	users: InputRegisterUserAdminDto[];
}

export interface InputRegisterUserDto extends InputRegisterUserAdminDto {
	/** The user's password */
	password: string;
}

// We extends InputRegisterUserAdminDto as the password is not included as it should be updated
// with the password endpoint
export interface InputUpdateUserDto extends Partial<InputRegisterUserAdminDto> {
	/** User gender */
	gender?: Genders;

	/** User's pronouns */
	pronouns?: string;

	/** User's promotion ID */
	promotion?: number;

	/** User's secondary email */
	secondary_email?: email;

	/** User's phone number */
	phone?: string;

	/** User's parent contact */
	parents_phone?: string;
}

export interface InputUpdateUsersDto {
	users: InputUpdateUserDto[];
}

export interface OutputBaseUserDto extends OutputBaseDto {
	/** User's first name */
	first_name: string;

	/** User's last name */
	last_name: string;

	/** User's nickname */
	nickname?: string;
}

export interface OutputUserDto extends OutputBaseUserDto {
	/** User full name (first name + last name) */
	full_name: string;

	/** User's profile picture ID */
	picture_id?: number;

	/** User's banner picture ID */
	banner_id?: number;

	/** User's email */
	email?: email;

	/** True if the email has been verified */
	email_verified?: boolean;

	/** True if the user is a minor */
	is_minor: boolean;

	/** User's birth date */
	birth_date?: Date;

	/** User's age */
	age: number;

	/** User gender */
	gender?: Genders;

	/** User's pronouns */
	pronouns?: string;

	/** User's promotion ID */
	promotion?: number;

	/** User's phone number */
	last_seen?: Date;

	/** True if the user is subscribed */
	subscribed: boolean; // TODO: (KEY: 2) Make a PR to implement subscriptions in the API

	/** User's secondary email */
	secondary_email?: email;

	/** User's phone number */
	phone?: string;

	/** User's parent contact */
	parents_phone?: string;

	/** Date of verification of the user, null if not verified */
	verified?: Date;
}

export interface OutputUserRoleDto extends OutputBaseDto {
	/** Name of the role */
	name: Uppercase<string>;

	/** Date of expiration of the role on that user */
	expires: Date;

	/** True if the role has been revoked */
	revoked: boolean;

	/** List of permissions in that role */
	permissions: Array<Permissions>;
}

export interface OutputUserVisibilityDto {
	/** The User ID */
	user_id: number;

	/** User's email visibility */
	email: boolean;

	/** User's secondary email visibility */
	secondary_email: boolean;

	/** User's birth date visibility */
	birth_date: boolean;

	/** User's gender visibility */
	gender: boolean;

	/** User's pronouns visibility */
	pronouns: boolean;

	/** User's promotion visibility */
	promotion: boolean;

	/** User's phone visibility */
	phone: boolean;

	/** User's parent contact visibility */
	parents_phone: boolean;
}

export type InputUpdateUserVisibilityDto = Omit<OutputUserVisibilityDto, 'user_id'>;

export interface OutputUserPictureDto extends OutputFileDto {
	/** User owner ID */
	picture_user_id: number;
}

export interface OutputUserBannerDto extends OutputFileDto {
	/** User owner ID */
	banner_user_id: number;
}
