import { describe, it, expect } from 'vitest';
import { toAsciiDigits, parseBnFloat, parseBnRange } from '../src/utils/bangla';

describe('Bengali Numeral Normalizer', () => {
  it('converts Bengali digits to standard ASCII digits', () => {
    expect(toAsciiDigits('০১২৩৪৫৬৭৮৯')).toBe('0123456789');
    expect(toAsciiDigits('দাম: ১২০.৫০ টাকা')).toBe('দাম: 120.50 টাকা');
  });

  it('parses Bengali formatted numbers into floats', () => {
    expect(parseBnFloat('১,২৫০.৫০')).toBe(1250.5);
    expect(parseBnFloat('৭৫')).toBe(75.0);
    expect(parseBnFloat('invalid')).toBe(null);
  });

  it('parses price range strings into min and max numbers', () => {
    expect(parseBnRange('৭২.০০ - ৭৫.০০')).toEqual({ min: 72.0, max: 75.0 });
    expect(parseBnRange('১০০ - ১২০')).toEqual({ min: 100.0, max: 120.0 });
    expect(parseBnRange('৫০.০০')).toEqual({ min: 50.0, max: 50.0 });
    expect(parseBnRange('')).toBe(null);
  });
});
