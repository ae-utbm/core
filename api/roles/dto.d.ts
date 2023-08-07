import { PERMISSION_NAMES } from '../permissions';

export interface RolePostDto {
	name: Uppercase<string>;
	permissions: PERMISSION_NAMES[];
	expires: Date;
}

export interface RolePatchDto extends RolePostDto {
	id: number;
}
