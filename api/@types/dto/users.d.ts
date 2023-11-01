import type { IBaseResponseDTO, IFileGetDTO } from '.';
import type { PERMISSION_NAMES } from '..';

export interface ICreateUserDTO {
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

export interface ICreateUserByAdminDTO extends ICreateUserDTO {
	/** Pregenerated password */
	password: string;
}

export interface IBaseUserDTO extends IBaseResponseDTO {
	/** User's first name */
	first_name: string;

	/** User's last name */
	last_name: string;

	/** User's nickname */
	nickname?: string;
}

export interface IUserGetDTO extends IBaseUserDTO {
	picture?: number;
	banner?: number;
	email: email;
	email_verified: boolean;
	birth_date: Date;
	gender?: (typeof USER_GENDER)[number];
	pronouns?: string;
	promotion?: number;
	last_seen?: Date;
	subscribed: boolean; // TODO: (KEY: 2) Make a PR to implement subscriptions in the API
	secondary_email?: email;
	phone?: string;
	parent_contact?: string;
	verified?: Date;
}

export interface IUserRoleGetDTO extends IBaseResponseDTO {
	/** Name of the role */
	name: Uppercase<string>;

	/** Date of expiration of the role on that user */
	expires: Date;

	/** True if the role has been revoked */
	revoked: boolean;

	/** List of permissions in that role */
	permissions: Array<PERMISSION_NAMES>;
}

export interface IUserPatchDTO extends IUserGetDTO {}

export interface IUserVisibilityGetDTO {
	user: number;
	email: boolean;
	secondary_email: boolean;
	birth_date: boolean;
	gender: boolean;
	pronouns: boolean;
	promotion: boolean;
	phone: boolean;
	parent_contact: boolean;
}

export interface IUserVisibilityPatchDTO extends IUserVisibilityGetDTO {}

export interface IUserPictureResponseDTO extends IFileGetDTO {
	picture_user: number;
}

export interface IUserBannerResponseDTO extends IFileGetDTO {
	banner_user: number;
}
