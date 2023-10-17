import type { BaseEntity } from '../base-entity';

export interface FileVisibilityGroupEntity<TUser extends object> extends BaseEntity {
	/** The visibility group's name */
	name: Uppercase<string>;

	/** The visibility group's description */
	description: string;

	/** The visibility group's users */
	users: Collection<TUser>;

	/** The visibility group's files */
	files: Collection<FileEntity<this>>;
}

export interface FileEntity<TVisibility, TOwner> extends BaseEntity {
	/** The file's description */
	description?: string;

	/** The file's filename */
	filename: string;

	/** The file's mimetype */
	mimetype: string;

	/** The file's path */
	path: string;

	/** The file's size */
	size: number;

	/** The file's visibility, if null, the file is public */
	visibility?: TVisibility;

	/** The file's owner */
	owner: TOwner;
}
