import { BaseEntity } from '../base-entity';

export interface FileEntity extends BaseEntity {
	/** The file's filename */
	filename: string;

	/** The file's mimetype */
	mimetype: string;

	/** The file's path */
	path: string;

	/** The file's size */
	size: number;

	/** The file's visibility */
	visibility: string;

	/** The file's description */
	description?: string;
}
