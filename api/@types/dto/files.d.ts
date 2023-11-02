import { IBaseResponseDTO } from '.';

export interface IFileGetDTO extends IBaseResponseDTO {
	filename: string;

	mimetype: string;

	path: string;

	size: number;

	visibility_id?: number;

	description?: string;
}

export class IFileVisibilityGroupGetDTO extends IBaseResponseDTO {
	name: Uppercase<string>;

	description: string;

	users_count: number;

	files_count: number;
}
