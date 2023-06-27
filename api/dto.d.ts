export interface MessageResponseDto {
	/** The message */
	message: string;
}

export interface BaseResponseDto {
	/** The entity ID */
	id: number;

	/** The entity updated date */
	updated_at: Date;

	/** The entity created date */
	created_at: Date;
}
