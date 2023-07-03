import type { PermissionName } from '.';

/**
 * This file contains all the permissions available in the API.
 *! Please note that permissions are not stored in the database, they are hardcoded.
 */
export const PERMISSIONS = [
	{
		name: 'ROOT',
		description: 'As access to everything',
	},

	// PERMISSIONS
	{
		name: 'CAN_EDIT_PERMISSIONS_OF_USER',
		description: 'Can assign/remove permissions of a user',
	},
	{
		name: 'CAN_EDIT_PERMISSIONS_OF_ROLE',
		description: 'Can assign/remove permissions of an existing role',
	},
	{
		name: 'CAN_READ_PERMISSIONS_OF_USER',
		description: 'Can read permissions of a user',
	},
	{
		name: 'CAN_READ_PERMISSIONS_OF_ROLE',
		description: 'Can read permissions of a role',
	},

	// ROLES
	{
		name: 'CAN_CREATE_ROLE',
		description: 'Can create a new role',
	},
	{
		name: 'CAN_EDIT_ROLE',
		description: 'Can edit roles',
	},
	{
		name: 'CAN_VIEW_ALL_ROLES',
		description: 'Can view all roles existing',
	},
	{
		name: 'CAN_VIEW_USERS_OF_ROLE',
		description: 'Can view all users in roles',
	},
	{
		name: 'CAN_EDIT_USERS_OF_ROLE',
		description: 'Can edit users in roles',
	},
	{
		name: 'CAN_VIEW_USER_ROLES',
		description: 'Can read roles of a user',
	},

	// USERS
	{
		name: 'CAN_CREATE_USER',
		description: 'Can create a new user',
	},
	{
		name: 'CAN_UPDATE_USER',
		description: 'Can update users',
	},
	{
		name: 'CAN_DELETE_USER',
		description: 'Can delete users',
	},
	{
		name: 'CAN_READ_USER_PUBLIC',
		description: 'Can read public information of users',
	},
	{
		name: 'CAN_READ_USER_PRIVATE',
		description: 'Can read all information of users',
	},

	// PROMOTIONS
	{
		name: 'CAN_VIEW_USERS_IN_PROMOTION',
		description: 'Can view all users in a promotion',
	},
	{
		name: 'CAN_READ_PROMOTION',
		description: "Can read a promotion's information",
	},
	{
		name: 'CAN_EDIT_PROMOTION',
		description: 'Can edit a promotion (name, description, etc.)',
	},
] as const;

export const PERMISSIONS_NAMES: PermissionName[] = PERMISSIONS.map((p) => p.name);
