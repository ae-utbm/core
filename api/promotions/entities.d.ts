import { BaseEntity } from '../base-entity';
import { FileEntity } from '../files/entity';
import { Collection } from '@mikro-orm/core';

export interface PromotionEntity<TPicture, TUser> extends BaseEntity {
	/** What number is this promotion */
	number: number;

	/** Users in that promotion */
	users: Collection<TUser>;

	/** Picture of the promotion */
	picture?: TPicture;
}

export interface PromotionPictureEntity<TPromo> extends FileEntity {
	/** Promotion to which the picture is attached */
	promotion: TPromo;
}
