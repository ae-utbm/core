import '../utils';

describe('Object (unit)', () => {
	describe('.isObject()', () => {
		it('should return true if the given item is a JS Object', () => {
			expect(Object.isObject({})).toBe(true);
			expect(Object.isObject({ a: 1 })).toBe(true);
			expect(Object.isObject({ a: 1, b: {} })).toBe(true);
		});

		it('should return false if the given item is not a JS Object', () => {
			expect(Object.isObject([])).toBe(false);
			expect(Object.isObject('')).toBe(false);
			expect(Object.isObject(1)).toBe(false);
			expect(Object.isObject(true)).toBe(false);
			expect(Object.isObject(null)).toBe(false);
			expect(Object.isObject(undefined)).toBe(false);
		});
	});

	describe('.merge()', () => {
		it('should merge two or more objects into the first one', () => {
			expect(Object.merge({ a: 1, b: 2 }, { b: 3, c: { d: 1 } })).toEqual({ a: 1, b: 3, c: { d: 1 } });
			expect(Object.merge({}, { a: 1 })).toEqual({ a: 1 });
			expect(Object.merge({ a: 1 }, {})).toEqual({ a: 1 });
			expect(Object.merge({ a: true }, { b: '2' }, { c: 3 })).toEqual({ a: true, b: '2', c: 3 });
		});
	});

	describe('.keysRecursive()', () => {
		it('should return all the keys of an object and its nested objects', () => {
			const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
			expect(Object.keysRecursive(obj)).toEqual(['a', 'b.c', 'b.d.e']);
		});
	});
});
