const BN_DIGIT_MAP: Record<string, string> = {
  '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4',
  '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9'
};

export function toAsciiDigits(input: string): string {
  if (!input) return '';
  return input.replace(/[০-৯]/g, (digit) => BN_DIGIT_MAP[digit] || digit);
}

export function parseBnFloat(input: string): number | null {
  if (!input) return null;
  const ascii = toAsciiDigits(input).replace(/,/g, '').trim();
  const match = ascii.match(/-?\d+(\.\d+)?/);
  if (!match) return null;
  const num = parseFloat(match[0]);
  return isNaN(num) ? null : num;
}

export function parseBnRange(input: string): { min: number; max: number } | null {
  if (!input) return null;
  const ascii = toAsciiDigits(input).replace(/,/g, '').trim();
  const parts = ascii.split(/\s*-\s*/);
  if (parts.length === 1) {
    const val = parseBnFloat(parts[0]);
    return val !== null ? { min: val, max: val } : null;
  }
  const min = parseBnFloat(parts[0]);
  const max = parseBnFloat(parts[1]);
  if (min === null || max === null) return null;
  return { min: Math.min(min, max), max: Math.max(min, max) };
}
