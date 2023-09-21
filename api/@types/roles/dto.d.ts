import type { UserEntity } from '../users';

import { PERMISSION_NAMES } from '../permissions';

export interface RolePostDto {
	/** Name of the role, capitalized */
	name: Uppercase<string>;

	/** Permissions of the role */
	permissions: PERMISSION_NAMES[];
}

export interface RolePatchDto extends RolePostDto {
	/** ID of the role */
	id: number;
}

export interface RoleEditUserDto {
	/** ID of the user */
	id: number;

	/** Expiration date of the role for that user */
	expires: Date;
}

export interface RoleUsersResponseDto extends Pick<UserEntity, 'first_name' | 'last_name' | 'nickname'> {
	/** Expiration date of the role for that user */
	role_expires: Date;

	// Because Pick doesn't work with optional properties
	nickname?: string;
}
