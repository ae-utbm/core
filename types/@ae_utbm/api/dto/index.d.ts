export * from './auth';
export * from './files';
export * from './logs';
export * from './permissions';
export * from './promotions';
export * from './roles';
export * from './users';

export interface OutputBaseDto {
	/** The entity ID */
	id: number;

	/** The entity updated date */
	updated: Date;

	/** The entity created date */
	created: Date;
}

export interface OutputResponseDto {
	/** The message */
	message: string;

	/** The status code */
	statusCode: number;
}

export interface OutputErrorResponseDto extends OutputResponseDto {
	/** The errors (if there is more than one) */
	errors: string[];
}
