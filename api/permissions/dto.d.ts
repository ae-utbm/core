import { PERMISSION_NAMES } from '.';

export interface PermissionDto {
	show_revoked: boolean;
	show_expired: boolean;
}

export interface PermissionsPostDto {
	/** The user OR role to add the permission to */
	id: number;

	/** The permission's name */
	permission: PERMISSION_NAMES;

	/** The expiration date */
	expires: Date;
}

export interface PermissionPatchDto {
	/** The permission's id */
	id: number;

	/** The permission's name */
	name: PERMISSION_NAMES;

	/** The permission's expiration date */
	expires: Date;

	/** Whether the permission is revoked or not */
	revoked: boolean;
}
