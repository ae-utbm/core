export * from './constants/index';
export * from './utils/index';

// Apply all overrides to the global scope
// -> Such as the `Array.prototype` overrides @see `./utils/array.ts`
import './utils/index';
