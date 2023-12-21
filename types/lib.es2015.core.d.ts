/// <reference lib="es2015.core" />

/**
 * Improve type definitions for Object.keys
 */
interface ObjectConstructor {
	/**
	 * Returns the names of the enumerable string properties and methods of an object.
	 * @param {T} object - Object that contains the properties and methods.
	 */
	keys<T extends object>(object: T): Array<keyof T>;
}
