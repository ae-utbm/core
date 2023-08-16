import type { PERMISSION_NAMES } from '.';

/**
 * This file contains all the permissions available in the API.
 *! Please note that permissions are not stored in the database, they are hardcoded.
 */
export const PERMISSIONS = [
	{
		name: 'ROOT',
		description: 'As access to everything',
	},

	// LOGS
	{
		name: 'CAN_READ_LOGS_OF_USER',
		description: 'Can read logs of users',
	},
	{
		name: 'CAN_DELETE_LOGS_OF_USER',
		description: 'Can delete logs of users',
	},

	// PERMISSIONS
	{
		name: 'CAN_EDIT_PERMISSIONS_OF_USER',
		description: 'Can assign/remove permissions of users',
	},
	{
		name: 'CAN_EDIT_PERMISSIONS_OF_ROLE',
		description: 'Can assign/remove permissions of existing roles',
	},
	{
		name: 'CAN_READ_PERMISSIONS_OF_USER',
		description: 'Can read permissions users',
	},
	{
		name: 'CAN_READ_PERMISSIONS_OF_ROLE',
		description: 'Can read permissions roles',
	},

	// ROLES
	{
		name: 'CAN_EDIT_ROLE',
		description: 'Can edit/create roles',
	},
	{
		name: 'CAN_READ_ROLE',
		description: 'Can read all roles that exist',
	},

	// USERS
	{
		name: 'CAN_EDIT_USER',
		description: 'Can create a new user or edit an existing one',
	},
	{
		name: 'CAN_DELETE_USER',
		description: 'Can delete users',
	},
	{
		name: 'CAN_READ_USER',
		description: 'Can read filtered information of users',
	},
	{
		name: 'CAN_READ_USER_PRIVATE',
		description: 'Can read all information of users',
	},

	// PROMOTIONS
	{
		name: 'CAN_READ_PROMOTION',
		description: "Can read a promotion's information",
	},
	{
		name: 'CAN_EDIT_PROMOTION',
		description: 'Can edit a promotion (name, description, etc.)',
	},

	// FILES
	{
		name: 'CAN_READ_FILE',
		description: 'Can read any file',
	},
] as const;

export const PERMISSIONS_NAMES: PERMISSION_NAMES[] = PERMISSIONS.map((p) => p.name);
