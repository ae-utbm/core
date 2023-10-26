import type { BaseEntity } from '../base-entity';
import type { PERMISSION_NAMES } from '../permissions';

export interface RoleEntity<TUser> extends BaseEntity {
	/** Name of the role, in caps */
	name: string;

	/** Determine wether the role is still active */
	revoked: boolean;

	/** List of permissions for that role */
	permissions: Array<PERMISSION_NAMES>;

	/** Users with that role **/
	users: Collection<TUser>;
}
