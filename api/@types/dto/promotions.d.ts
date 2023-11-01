import type { IBaseResponseDTO, IFileGetDTO } from '.';

export interface IPromotionResponseDTO extends IBaseResponseDTO {
	/** Promotion number */
	number: number;

	/** Users in promotion */
	users: number;

	/** Promotion picture id */
	picture?: number;
}

export interface IPromotionPictureResponseDTO extends IFileGetDTO {
	picture_promotion: number;
}
