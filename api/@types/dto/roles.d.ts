import type { IBaseUserDTO, PERMISSION_NAMES } from '..';

export interface IRolePostDTO {
	/** Name of the role, capitalized */
	name: Uppercase<string>;

	/** Permissions of the role */
	permissions: PERMISSION_NAMES[];
}

export interface IRolePatchDTO extends IRolePostDTO {
	/** ID of the role */
	id: number;
}

export interface IRoleEditUserDTO {
	/** ID of the user */
	id: number;

	/** Expiration date of the role for that user */
	expires: Date;
}

export interface IRoleUsersResponseDTO extends IBaseUserDTO {
	/** Expiration date of the role for that user */
	role_expires: Date;

	// Because Pick doesn't work with optional properties
	nickname?: string;
}

export interface IRoleGetDTO {
	/** Role name */
	name: Uppercase<string>;

	/** Determine wether the role is still active */
	revoked: boolean;

	/** Specify what permissions the role has */
	permissions: PERMISSION_NAMES[];

	/** Specify to which user the role is attached */
	users_count: number;
}
