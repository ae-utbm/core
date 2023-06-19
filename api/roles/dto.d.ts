import { PermissionName } from '../permissions';

export interface RolePostDto {
	name: Uppercase<string>;
	permissions: PermissionName[];
	expires: Date;
}

export interface RolePatchDto extends RolePostDto {
	id: number;
}
