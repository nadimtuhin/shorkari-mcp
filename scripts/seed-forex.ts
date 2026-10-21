import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

export const FOREX_USD_BDT_SERIES = [
  { y: 2025, v: 122.50, u: 'BDT/USD', s: 'Bangladesh Bank Interbank Mid-Rate' },
  { y: 2024, v: 118.00, u: 'BDT/USD', s: 'Bangladesh Bank (Crawling Peg Band: 117-119)' },
  { y: 2023, v: 110.25, u: 'BDT/USD', s: 'Bangladesh Bank / BAFEDA Interbank Rate' },
  { y: 2022, v: 95.50, u: 'BDT/USD', s: 'Bangladesh Bank (Post-Ukraine War FX volatility)' },
  { y: 2020, v: 84.85, u: 'BDT/USD', s: 'Bangladesh Bank Interbank Rate' },
  { y: 2015, v: 77.95, u: 'BDT/USD', s: 'Bangladesh Bank Interbank Rate' },
  { y: 2010, v: 69.65, u: 'BDT/USD', s: 'Bangladesh Bank Interbank Rate' },
  { y: 2005, v: 64.30, u: 'BDT/USD', s: 'Bangladesh Bank Interbank Rate' },
  { y: 2000, v: 52.15, u: 'BDT/USD', s: 'Bangladesh Bank Interbank Rate' },
  { y: 1995, v: 40.30, u: 'BDT/USD', s: 'Bangladesh Bank Interbank Rate' },
  { y: 1990, v: 35.70, u: 'BDT/USD', s: 'Bangladesh Bank Interbank Rate' },
  { y: 1985, v: 28.00, u: 'BDT/USD', s: 'Bangladesh Bank Interbank Rate' },
  { y: 1980, v: 16.30, u: 'BDT/USD', s: 'Bangladesh Bank Interbank Rate' },
  { y: 1975, v: 12.00, u: 'BDT/USD', s: 'Bangladesh Bank Official Parity Rate' },
  { y: 1971, v: 7.80, u: 'BDT/USD', s: 'Initial Post-Liberation Parity (1971)' }
];

export const MAJOR_CURRENCIES_2025 = [
  { currency: "US Dollar (USD)", symbol: "$", bdt_rate: 122.50, kerb_rate: 125.00, change_10yr: "+57.2%" },
  { currency: "British Pound (GBP)", symbol: "£", bdt_rate: 158.20, kerb_rate: 161.00, change_10yr: "+34.5%" },
  { currency: "Euro (EUR)", symbol: "€", bdt_rate: 133.40, kerb_rate: 136.00, change_10yr: "+51.8%" },
  { currency: "Saudi Riyal (SAR)", symbol: "﷼", bdt_rate: 32.65, kerb_rate: 33.30, change_10yr: "+57.0%" },
  { currency: "UAE Dirham (AED)", symbol: "د.إ", bdt_rate: 33.35, kerb_rate: 34.00, change_10yr: "+57.3%" },
  { currency: "Malaysian Ringgit (MYR)", symbol: "RM", bdt_rate: 27.80, kerb_rate: 28.50, change_10yr: "+39.0%" },
  { currency: "Indian Rupee (INR)", symbol: "₹", bdt_rate: 1.43, kerb_rate: 1.47, change_10yr: "+18.2%" }
];

export function generateForexSql(): string[] {
  const sql: string[] = ['PRAGMA foreign_keys = OFF;'];

  for (const item of FOREX_USD_BDT_SERIES) {
    const id = `FOREX_USD_BDT_ANNUAL:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'FOREX_USD_BDT_ANNUAL', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s}', NULL);`
    );
  }

  sql.push('PRAGMA foreign_keys = ON;');
  return sql;
}

export function run() {
  const sql = generateForexSql();
  const outPath = resolve(process.cwd(), 'migrations/0011_seed_forex.sql');
  writeFileSync(outPath, sql.join('\n'), 'utf8');
  console.log(`[seed-forex] Wrote ${sql.length} statements to ${outPath}`);
}

if (import.meta.main) {
  run();
}
