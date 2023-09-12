import type { BaseResponseDto, PromotionEntity, PromotionPictureEntity } from '#types/api';

export interface PromotionResponseDto extends BaseResponseDto {
	/** Promotion number */
	number: number;

	/** Users in promotion */
	users: number;

	/** Promotion picture data */
	picture?: PromotionPictureEntity<PromotionEntity>;
}
