import type { base64, imageURL } from '../@types';

export {};

declare global {
	interface ArrayBuffer {
		/**
		 * Convert the ArrayBuffer to a base64 string
		 * @param {string} type The type of the file (@default 'image')
		 * @param {string} extension The extension of the file (@default 'webp')
		 * @returns {string} The base64 string
		 */
		toBase64(type?: string, extension?: string): base64;

		/**
		 * Convert the ArrayBuffer to a blob URL (imageURL)
		 * @see https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
		 *
		 * @param type The type of the file (@default 'image')
		 * @param extension The extension of the file (@default 'webp')
		 */
		toImageURL(type?: string, extension?: string): imageURL;

		/**
		 * Convert the ArrayBuffer to a JSON object
		 * @returns {object} The JSON object
		 */
		toJSON<T>(): T;
	}
}

if (!ArrayBuffer.prototype.toBase64) {
	ArrayBuffer.prototype.toBase64 = function toBase64(type = 'image', extension = 'webp'): base64 {
		let binary = '';
		const bytes = new Uint8Array(this);
		const len = bytes.byteLength;

		for (let i = 0; i < len; i++) {
			binary += String.fromCharCode(bytes[i]);
		}

		return `data:${type}/${extension};base64,${window.btoa(binary)}`;
	};
}

// Not testable on NodeJS
/* istanbul ignore next */
if (!ArrayBuffer.prototype.toImageURL) {
	ArrayBuffer.prototype.toImageURL = function toImageURL(type = 'image', extension = 'webp'): imageURL {
		const bytes = new Uint8Array(this);
		const blob = new Blob([bytes], { type: `${type}/${extension}` });

		const urlCreator = window.URL || window.webkitURL;
		return urlCreator.createObjectURL(blob) as imageURL;
	};
}

// Not easily testable on NodeJS
/* istanbul ignore next */
if (!ArrayBuffer.prototype.toJSON) {
	ArrayBuffer.prototype.toJSON = function toJSON<T>(): T {
		try {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			return JSON.parse(String.fromCharCode.apply(null, new Uint8Array(this) as unknown as number[]));
		} catch (error) {
			if (error instanceof SyntaxError) throw new SyntaxError('The ArrayBuffer cannot be converted to JSON');
			throw error;
		}
	};
}
