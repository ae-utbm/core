import type { OutputBaseUserDto, PERMISSION_NAMES } from '..';

export interface InputCreateRoleDto {
	/** Name of the role, capitalized */
	name: Uppercase<string>;

	/** Permissions of the role */
	permissions: PERMISSION_NAMES[];
}

export interface InputUpdateRoleDto extends InputCreateRoleDto {
	/** ID of the role */
	id: number;
}

export interface InputUpdateRoleUserDto {
	/** ID of the user */
	id: number;

	/** Expiration date of the role for that user */
	expires: Date;
}

export interface InputUpdateRoleUsersDto {
	/** User role edition */
	users: InputUpdateRoleUserDto[];
}

export interface InputDeleteRoleUsersDto {
	/** Users ID's */
	users: number[];
}

export interface OutputRoleUserDto extends OutputBaseUserDto {
	/** Expiration date of the role for that user */
	role_expires: Date;
}

export interface OutputRoleDto {
	/** Role name */
	name: Uppercase<string>;

	/** Determine wether the role is still active */
	revoked: boolean;

	/** Specify what permissions the role has */
	permissions: PERMISSION_NAMES[];

	/** Specify to which user the role is attached */
	users_count: number;
}
