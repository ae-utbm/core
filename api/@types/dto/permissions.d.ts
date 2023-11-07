import { OutputBaseDto, PERMISSION_NAMES } from '..';

export interface InputCreatePermissionDto {
	/** The user OR role to add the permission to */
	id: number;

	/** The permission's name */
	permission: PERMISSION_NAMES;

	/** The expiration date */
	expires: Date;
}

export interface InputUpdatePermissionDto {
	/** The permission's id */
	id: number;

	/** The permission's name */
	name: PERMISSION_NAMES;

	/** The permission's expiration date */
	expires: Date;

	/** Whether the permission is revoked or not */
	revoked: boolean;
}

export interface OutputPermissionDto extends OutputBaseDto {
	/** Permission name */
	name: PERMISSION_NAMES;

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
	permissions: PERMISSION_NAMES[];
}
