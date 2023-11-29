import { OutputBaseDto, Permissions } from '..';

export interface InputCreatePermissionDto {
	/** The user OR role to add the permission to */
	id: number;

	/** The permission's name */
	permission: Permissions;

	/** The expiration date */
	expires: Date;
}

export interface InputUpdatePermissionDto {
	/** The permission's id */
	id: number;

	/** The permission's name */
	name: Permissions;

	/** The permission's expiration date */
	expires: Date;

	/** Whether the permission is revoked or not */
	revoked: boolean;
}

export interface OutputPermissionDto extends OutputBaseDto {
	/** Permission name */
	name: Permissions;

	/** Whether the permission is revoked or not */
	revoked: boolean;

	/** The permission's expiration date */
	expires: Date;

	/** The user ID who has the permission */
	user_id: number;
}

export interface OutputPermissionsOfRoleDto {
	/** The Role ID */
	id: number;

	/** Permissions within the role */
	permissions: Permissions[];
}
