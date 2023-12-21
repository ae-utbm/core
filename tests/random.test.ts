import { randomInt } from '../src/core/utils';

describe('.randomInt()', () => {
	it('should generate a random integer between the given range', () => {
		expect(randomInt(0, 0)).toBe(0);

		for (let i = 0; i < 24; i++) {
			const n = randomInt(24, i);
			expect(n).toBeGreaterThanOrEqual(i);
			expect(n).toBeLessThanOrEqual(24);
		}

		for (let i = 0; i < 24; i++) {
			const n = randomInt();
			expect(n).toBeGreaterThanOrEqual(0);
			expect(n).toBeLessThanOrEqual(12);
		}

		const swapped = randomInt(0, 10);
		expect(swapped).toBeGreaterThanOrEqual(0);
		expect(swapped).toBeLessThanOrEqual(10);
	});
});
