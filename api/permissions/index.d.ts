export * from './entity';
export * from './dto';

import { PERMISSIONS } from './perms';

/**
 * How permissions are registered in the API
 *
 * @warning Do not use this type to define PERMISSIONS, as it would break
 * the type safety of the decorator (it would allow to pass any string)
 */
export interface Permission {
	/**
	 * Name of the permission, in uppercase
	 */
	name: Uppercase<string>;

	/**
	 * Description of the permission
	 */
	description: string;
}

/**
 * List of available permissions throughout the API
 */
export type PERMISSION_NAMES = (typeof PERMISSIONS)[number]['name'];
