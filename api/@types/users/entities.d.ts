import type { email } from '#types/api';
import type { BaseEntityLogged } from '../base-entity';
import type { FileEntity } from '../files';
import type { Collection } from '@mikro-orm/core';

import { USER_GENDER } from '../../constants/genders';

export interface UserPictureEntity<TUser> extends FileEntity {
	/** The file's owner */
	picture_user: TUser;
}

export interface UserBannerEntity<TUser> extends FileEntity {
	/** The file's owner */
	banner_user: TUser;
}

export interface UserVisibilityEntity<TUser> extends BaseEntityLogged {
	/** The concerned user */
	user: TUser;

	email: boolean;
	birth_date: boolean;
	gender: boolean;
	pronouns: boolean;

	secondary_email: boolean;
	phone: boolean;
	parent_contact: boolean;

	cursus: boolean;
	specialty: boolean;
	promotion: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface UserEntity<TPicture, TBanner, TPromo, TPerm, TRole, TSub, TLog, TVisibility> extends BaseEntityLogged {
	/** The user's email */
	email: email;

	/** The email verification */
	email_verified: boolean;

	/** The email verification token */
	email_verification?: string;

	/** The user's password */
	password: string;

	/** The user's birth_date */
	birth_date: Date;

	/** The user's first name */
	first_name: string;

	/** The user's last name */
	last_name: string;

	/** The user's nickname */
	nickname?: string;

	/** The user's gender */
	gender?: (typeof USER_GENDER)[number];

	/** The user's pronouns */
	pronouns?: string;

	/** The user's secondary email (for communication) */
	secondary_email?: string;

	/** The user's phone number */
	phone?: string;

	/** The user's parent contact (for minors only) */
	parent_contact?: string;

	/** The user's profile picture */
	picture?: TPicture;

	/** The user's profile banner */
	banner?: TBanner;

	// TODO: use an entity relation with both cursus and specialty (called semester ?)
	//* Should be a One to Many relation (one user can have multiple semester)
	/** The user's cursus */
	// cursus?: string;

	/** The user's specialty at UTBM */
	// specialty?: string;

	/** The user's promotion */
	promotion?: TPromo;

	/** The user's subscription on the association */
	// subscriptions?: Collection<TSub>;

	/** The user's subscription number */
	// subscriber_account?: string;

	/** The user's permissions */
	permissions?: Collection<TPerm>;

	/** The user's roles (sets of permissions) */
	roles?: Collection<TRole>;

	/** The user's logs */
	logs?: Collection<TLog>;

	/** The user's files visibility groups */
	files_visibility_groups?: Collection<TVisibility>;
}
