import type { Join, CamelCase } from 'type-fest';
import type { SplitIncludingDelimiters } from 'type-fest/source/delimiter-case';
import type { StringDigit, UpperCaseCharacters } from 'type-fest/source/internal';

type TitleCaseJoin<Parts extends readonly string[]> = Parts extends [
	`${infer FirstPart}`,
	`${infer SecondPart}`,
	...infer Rest,
]
	? FirstPart extends StringDigit
		? `${Capitalize<FirstPart>}${TitleCase<
				Join<[SecondPart, Rest extends string[] | number[] ? Join<Rest, ''> : ''], ''>
		  >}`
		: `${Capitalize<FirstPart>} ${TitleCase<
				Join<[SecondPart, Rest extends string[] | number[] ? Join<Rest, ''> : ''], ''>
		  >}`
	: Parts extends [`${infer FirstPart}`, ...infer Rest]
	? `${Capitalize<FirstPart>}${Rest extends string ? Rest : TitleCaseJoin<Rest>}`
	: Parts extends [string | number]
	? Parts extends [string]
		? Capitalize<Parts[0]>
		: `${Parts[0]}`
	: '';

/**
 * Converts a string literal to title case.
 * @see https://github.com/sindresorhus/type-fest/pull/303
 *
 * @example
 * ```ts
 * import type { TitleCase } from '@types';
 * // Simple
 * const someVariable: TitleCase<'thisIsASpecialProperty'> = 'This is a Special Property';
 * ```
 */
export type TitleCase<K> = K extends string
	? TitleCaseJoin<SplitIncludingDelimiters<CamelCase<K>, UpperCaseCharacters | StringDigit>>
	: K;
