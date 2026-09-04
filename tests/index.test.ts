import { secureRandomUint } from 'secure-random-uint';
import { describe, expect, it } from 'vitest';

describe('secureRandomUint', () => {
  it('returns an unsigned integer', () => {
    for (let i = 0; i < 1000; i++) {
      const uint = secureRandomUint();
      expect(Number.isInteger(uint)).toBe(true);
      expect(uint).toBeGreaterThanOrEqual(0);
      expect(uint).toBeLessThanOrEqual(4_294_967_295);
    }
  });
});
