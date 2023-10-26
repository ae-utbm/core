import type { PromotionEntity, PromotionPictureEntity } from './entities';
import type { BaseResponseDto } from '../response';

export interface PromotionResponseDto extends BaseResponseDto {
	/** Promotion number */
	number: number;

	/** Users in promotion */
	users: number;

	/** Promotion picture data */
	picture?: PromotionPictureEntity<PromotionEntity>;
}
