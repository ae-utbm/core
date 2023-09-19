import { randomInt } from '../utils';

describe('.randomInt()', () => {
	it('should generate a random integer between the given range', () => {
		expect(randomInt(0, 0)).toBe(0);

		for (let i = 0; i < 32; i++) {
			const n = randomInt(32, i);
			expect(n).toBeGreaterThanOrEqual(i);
			expect(n).toBeLessThanOrEqual(32);
		}

		for (let i = 0; i < 32; i++) {
			const n = randomInt();
			expect(n).toBeGreaterThanOrEqual(0);
			expect(n).toBeLessThanOrEqual(12);
		}

		const swapped = randomInt(0, 10);
		expect(swapped).toBeGreaterThanOrEqual(0);
		expect(swapped).toBeLessThanOrEqual(10);
	});
});
