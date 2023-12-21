/// <reference lib="es5" />

/**
 * Fix "wrong" type definitions for toLowerCase and toUpperCase methods in lib.es5.d.ts
 * @see https://github.com/microsoft/TypeScript/issues/44268
 */
interface String {
	/** Converts all the alphabetic characters in a string to lowercase. */
	toLowerCase(): Lowercase<string>;

	/** Converts all alphabetic characters to lowercase, taking into account the host environment's current locale. */
	toLocaleLowerCase(locales?: string | string[]): Lowercase<string>;

	/** Converts all the alphabetic characters in a string to uppercase. */
	toUpperCase(): Uppercase<string>;

	/** Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale. */
	toLocaleUpperCase(locales?: string | string[]): Uppercase<string>;
}

interface JSON {
	parse<T>(text: string, reviver?: <K, L>(this: K, key: string, value: L) => unknown): T;
}
