import { BaseEntity } from '../base-entity';
import { PermissionName } from '../permissions';

/**
 * Entity used to store permissions attached to users
 * (used to check if a user has the required permissions to access a route)
 */
export class PermissionEntity<TUser> extends BaseEntity {
	/** Name of the permission, in caps */
	name: PermissionName;

	/** Determine wether the permission is still active */
	revoked: boolean;

	/** Specify when the permission should expires */
	expires: Date;

	/** Specify to which user the permission is attached */
	user: TUser;
}
