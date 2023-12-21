import { OutputBaseDto } from '.';

export interface OutputFileDto extends OutputBaseDto {
	filename: string;

	mimetype: string;

	path: string;

	size: number;

	visibility_id?: number;

	description?: string;
}

export interface OutputFileVisibilityGroupDto extends OutputBaseDto {
	name: Uppercase<string>;

	description: string;

	users_count: number;

	files_count: number;
}
