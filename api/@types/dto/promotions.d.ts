import type { OutputBaseDto } from '.';

export interface OutputPromotionDto extends OutputBaseDto {
	/** Promotion number */
	number: number;

	/** Users in promotion */
	users_count: number;

	/** Promotion picture id */
	picture_id?: number;
}
