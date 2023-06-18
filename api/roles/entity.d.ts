import { BaseEntity } from '../base-entity';

export interface RoleEntity<TPerm, TUser> extends BaseEntity {
	/** Name of the role, in caps */
	name: string;

	/** Determine wether the role is still active */
	revoked: boolean;

	/** Specify when the role should expires */
	expires: Date;

	/** List of permissions for that role */
	permissions: Collection<TPerm>;

	/** Users with that role **/
	users: Collection<TUser>;
}
