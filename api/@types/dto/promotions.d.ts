import type { IBaseResponseDTO, IFileGetDTO } from '.';

export interface IPromotionResponseDTO extends IBaseResponseDTO {
	/** Promotion number */
	number: number;

	/** Users in promotion */
	users_count: number;

	/** Promotion picture id */
	picture_id?: number;
}

export interface IPromotionPictureResponseDTO extends IFileGetDTO {
	picture_promotion_id: number;
}
