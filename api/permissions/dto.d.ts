import { PermissionName } from '.';

export interface PermissionDto {
	show_revoked: boolean;
	show_expired: boolean;
}

export interface PermissionsPostDto {
	/** The user OR role to add the permission to */
	id: number;

	/** The permission's name */
	permission: PermissionName;

	/** The expiration date */
	expires: Date;
}

export interface PermissionPatchDto {
	/** The permission's id */
	id: number;

	/** The permission's name */
	name: PermissionName;

	/** The permission's expiration date */
	expires: Date;

	/** Whether the permission is revoked or not */
	revoked: boolean;
}
