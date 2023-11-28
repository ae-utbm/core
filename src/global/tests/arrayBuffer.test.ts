/** @jest-environment jsdom */
import '../utils';

describe('ArrayBuffer (unit)', () => {
	describe('.toBase64()', () => {
		it('should return a base64 string', () => {
			const arrayBuffer = new ArrayBuffer(16);

			const view = new Uint8Array(arrayBuffer);
			for (let i = 0; i < view.length; i++) {
				view[i] = i;
			}

			expect(arrayBuffer.toBase64()).toBe('data:image/webp;base64,AAECAwQFBgcICQoLDA0ODw==');
			expect(arrayBuffer.toBase64('image', 'png')).toBe('data:image/png;base64,AAECAwQFBgcICQoLDA0ODw==');
		});
	});
});
