import getRandomValues from 'get-random-values';

/**
 * Generates a cryptographically secure unsigned integer.
 *
 * @returns A cryptographically secure unsigned integer.
 * @throws {Error} If no secure random number generator is available.
 */
export function secureRandomUint(): number {
  const buf = new Uint8Array(4);
  const dv = new DataView(buf.buffer);
  getRandomValues(buf);
  return dv.getUint32(0);
}
