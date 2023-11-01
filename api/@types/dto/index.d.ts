export * from './auth';
export * from './files';
export * from './logs';
export * from './permissions';
export * from './promotions';
export * from './roles';
export * from './users';

export interface IBaseResponseDTO {
	/** The entity ID */
	id: number;

	/** The entity updated date */
	updated: Date;

	/** The entity created date */
	created: Date;
}

export interface IMessageResponseDTO {
	/** The message */
	message: string;

	/** The status code */
	statusCode: number;
}

export interface IErrorResponseDTO extends IMessageResponseDTO {
	/** The error */
	error: string;
}
