import { BaseEntity } from '../base-entity';

export interface LogEntity<TUser> extends Omit<BaseEntity, 'updated_at'> {
	/** The user who made the action */
	user: TUser;

	/** The action made by the user */
	action: string;

	/** The ip address of the user */
	ip: string;

	/** The user agent of the user */
	user_agent: string;

	/** The route used by the user */
	route: string;

	/** The method used by the user */
	method: string;

	/** The body of the request */
	body: string;

	/** The query of the request */
	query: string;

	/** The params of the request */
	params: string;

	/** The response of the request */
	response?: string;

	/** The status code of the response */
	status_code?: number;

	/** The error of the response */
	error?: string;

	/** The error stack of the response */
	error_stack?: string;

	/** The error message of the response */
	error_message?: string;
}
