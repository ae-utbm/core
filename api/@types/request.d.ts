import type { UserEntity } from './users';

export type RequestWithUser = Request & {
	user: UserEntity<TPicture, TBanner, TPromo, TPerm, TRole, TSub, TLog, TVisibility>;
};
