import '../utils';

describe('Array (unit)', () => {
	describe('.remove()', () => {
		it('should remove the specified items from the array', () => {
			const array = [1, 2, 3, 4, 5];
			expect(array.remove(1, 2, 3)).toEqual([4, 5]);
		});

		it('should not remove anything if the specified items are not in the array', () => {
			const array = [1, 2, 3, 4, 5];
			expect(array.remove(6, 7, 8)).toEqual([1, 2, 3, 4, 5]);
			expect([].remove(1, 2, 3)).toEqual([]);
		});

		it('should remove any duplicates', () => {
			const array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
			expect(array.remove(1, 2, 3)).toEqual([4, 5, 4, 5]);
		});
	});

	describe('.unique()', () => {
		it('should remove any duplicates', () => {
			const array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
			expect(array.unique()).toEqual([1, 2, 3, 4, 5]);
		});

		it('should not remove anything if there are no duplicates', () => {
			const array = [1, 2, 3, 4, 5];
			expect(array.unique()).toEqual([1, 2, 3, 4, 5]);
		});

		it('should return an empty array if the input array is empty', () => {
			expect([].unique()).toEqual([]);
		});
	});

	describe('.isUniform()', () => {
		it('should return true if all objects in the array have the same type', () => {
			expect([].isUniform()).toBe(true);
			expect([{ a: 1 }, { a: 2 }].isUniform()).toBe(true);
		});

		it('should return false if not all objects in the array have the same type', () => {
			expect([{ a: 1 }, { a: 2, b: 'unexpected' }].isUniform()).toBe(false);
			expect(
				[
					{ a: 1, c: 2 },
					{ a: 3, b: 'unexpected' },
				].isUniform(),
			).toBe(false);
		});
	});
});
