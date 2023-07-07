import type { email } from '@types';

import { Collection } from '@mikro-orm/core';
import { BaseEntityLogged } from '../base-entity';
import { FileEntity } from '../files';

export interface UserPictureEntity<TUser> extends FileEntity {
	/** The file's owner */
	user: TUser;
}

export interface UserBannerEntity<TUser> extends FileEntity {
	/** The file's owner */
	user: TUser;
}

export interface UserVisibilityEntity<TUser> extends BaseEntityLogged {
	/** The concerned user */
	user: TUser;

	email: boolean;
	birthday: boolean;
	nickname: boolean;
	gender: boolean;
	pronouns: boolean;

	secondary_email: boolean;
	phone: boolean;
	parent_contact: boolean;

	cursus: boolean;
	specialty: boolean;
	promotion: boolean;
}

export interface UserEntity<TPicture, TBanner, TPromo, TPerm, TRole, TSub, TLog> extends BaseEntityLogged {
	/** The user's email */
	email: email;

	/** The email verification */
	email_verified: boolean;

	/** The email verification token */
	email_verification?: string;

	/** The user's password */
	password: string;

	/** The user's birthday */
	birthday: Date;

	/** The user's first name */
	first_name: string;

	/** The user's last name */
	last_name: string;

	/** The user's nickname */
	nickname?: string;

	/** The user's gender */
	gender?: string;

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

	/** The user's cursus */
	// TODO: might be a good idea to create a new entity for this
	cursus?: string;

	/** The user's specialty at UTBM */
	// TODO: might be a good idea to create a new entity for this
	specialty?: string;

	/** The user's promotion */
	promotion?: TPromo;

	/** The user's subscription on the association */
	subscriptions?: Collection<TSub>;

	/** The user's subscription number */
	subscriber_account?: string;

	/** The user's permissions */
	permissions: Collection<TPerm>;

	/** The user's roles (sets of permissions) */
	roles: Collection<TRole>;

	/** The user's logs */
	logs: Collection<TLog>;
}
