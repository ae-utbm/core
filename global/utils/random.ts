// Crypto is a node native module, use webpack's node polyfill to use it in the browser
import * as crypto from 'crypto';

/**
 * Safely generates a random integer between the given range.
 * @param {number} max Maximum value **included** in the range @default 12
 * @param {number} min Minimum value **included** in the range @default 0
 * @returns {number} The generated integer
 */
export function randomInt(max: number = 12, min: number = 0): number {
	if (max === min) return min;
	if (max < min) [max, min] = [min, max];

	const range = max - min + 1;
	const byteCount = Math.ceil(Math.log2(range) / 8); // Number of bytes needed to represent the range

	let randomNumber = 0;
	do {
		const randomBytes = crypto.randomBytes(byteCount);
		randomNumber = randomBytes.readUIntBE(0, byteCount);
	} while (randomNumber >= range);

	return randomNumber + min;
}
