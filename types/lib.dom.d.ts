/// <reference lib="dom" />

interface Storage {
	getItem<T extends string>(key: string): T | null;
	setItem<T extends string>(key: string, value: T): void;
}
