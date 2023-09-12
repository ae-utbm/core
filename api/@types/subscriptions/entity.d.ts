import { BaseEntity } from '../base-entity';

export interface SubscriptionEntity<TUser> extends BaseEntity {
	/** Specify to which user the subscription is attached */
	user: TUser;

	/** What kind of plan the user subscribed to */
	plan: string;

	/** When does the subscription expires */
	expires: Date;
}
