export type aspect_ratio = `${number}:${number}`;
export type base64 = `data:${string}/${string};base64,${string}`;
export type email = `${string}@${string}.${string}`;
export type imageURL = `blob:${URL}${string}`;
export type URL = `${string}://${string}.${string}`;

export type KeysOf<T extends object> = Array<keyof T>;
export type KeysRecursiveOf<T> = T extends object
	? {
			[K in keyof T]: K extends symbol
				? never
				:
						| K
						| (T[K] extends object
								? `${K extends symbol ? never : K}.${KeysRecursiveOf<T[K]>}`
								: `${K extends symbol ? never : K}`);
	  }[keyof T]
	: '';
