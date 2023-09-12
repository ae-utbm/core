/**
 * Base entity used for all entities,
 * containing the primary key and the creation and update dates
 */
export interface BaseEntity {
	/** The primary key */
	id: number;

	/** The creation date */
	created_at: Date;

	/** The last update date */
	updated_at: Date;
}
