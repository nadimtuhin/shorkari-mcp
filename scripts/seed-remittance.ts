import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

export const REMITTANCE_DATA = [
  { y: 2025, v: 26.85, u: 'USD_BN', s: 'Bangladesh Bank' },
  { y: 2024, v: 23.91, u: 'USD_BN', s: 'Bangladesh Bank' },
  { y: 2023, v: 21.92, u: 'USD_BN', s: 'Bangladesh Bank' },
  { y: 2022, v: 21.28, u: 'USD_BN', s: 'Bangladesh Bank' },
  { y: 2021, v: 22.07, u: 'USD_BN', s: 'Bangladesh Bank' },
  { y: 2020, v: 21.75, u: 'USD_BN', s: 'Bangladesh Bank' },
  { y: 2019, v: 18.33, u: 'USD_BN', s: 'Bangladesh Bank' },
  { y: 2018, v: 15.54, u: 'USD_BN', s: 'Bangladesh Bank' },
  { y: 2017, v: 13.53, u: 'USD_BN', s: 'Bangladesh Bank' },
  { y: 2016, v: 13.61, u: 'USD_BN', s: 'Bangladesh Bank' },
  { y: 2015, v: 15.31, u: 'USD_BN', s: 'Bangladesh Bank' },
  { y: 2014, v: 14.93, u: 'USD_BN', s: 'Bangladesh Bank' },
  { y: 2013, v: 13.83, u: 'USD_BN', s: 'Bangladesh Bank' },
  { y: 2012, v: 14.16, u: 'USD_BN', s: 'Bangladesh Bank' },
  { y: 2011, v: 12.17, u: 'USD_BN', s: 'Bangladesh Bank' },
  { y: 2010, v: 11.00, u: 'USD_BN', s: 'Bangladesh Bank' },
  { y: 2008, v: 8.98, u: 'USD_BN', s: 'Bangladesh Bank' },
  { y: 2005, v: 3.85, u: 'USD_BN', s: 'Bangladesh Bank' },
  { y: 2000, v: 1.96, u: 'USD_BN', s: 'Bangladesh Bank' },
  { y: 1995, v: 1.20, u: 'USD_BN', s: 'Bangladesh Bank' },
  { y: 1990, v: 0.76, u: 'USD_BN', s: 'Bangladesh Bank' }
];

export const RESERVES_DATA = [
  { y: 2025, m: 7, v: 20.48, u: 'USD_BN', s: 'Bangladesh Bank (IMF BPM6)' },
  { y: 2025, m: 1, v: 19.98, u: 'USD_BN', s: 'Bangladesh Bank (IMF BPM6)' },
  { y: 2024, m: 10, v: 19.82, u: 'USD_BN', s: 'Bangladesh Bank (IMF BPM6)' },
  { y: 2024, m: 6, v: 13.78, u: 'USD_BN', s: 'Bangladesh Bank (IMF BPM6)' },
  { y: 2023, m: 12, v: 16.75, u: 'USD_BN', s: 'Bangladesh Bank (IMF BPM6)' },
  { y: 2022, m: 12, v: 26.00, u: 'USD_BN', s: 'Bangladesh Bank (IMF BPM6)' },
  { y: 2021, m: 8, v: 40.70, u: 'USD_BN', s: 'Bangladesh Bank (IMF BPM6 Peak)' }
];

export function generateRemittanceSql(): string[] {
  const sql: string[] = ['PRAGMA foreign_keys = OFF;'];
  for (const r of REMITTANCE_DATA) {
    const id = `REMITTANCE_ANNUAL_USD_BN:${r.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'REMITTANCE_ANNUAL_USD_BN', 'ANNUAL', ${r.y}, NULL, ${r.v}, '${r.u}', '${r.s}', NULL);`
    );
  }
  for (const res of RESERVES_DATA) {
    const id = `RESERVES_BPM6_USD:${res.y}-${String(res.m).padStart(2, '0')}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'RESERVES_BPM6_USD', 'MONTHLY', ${res.y}, ${res.m}, ${res.v}, '${res.u}', '${res.s}', NULL);`
    );
  }
  sql.push('PRAGMA foreign_keys = ON;');
  return sql;
}

export function run() {
  const sql = generateRemittanceSql();
  const outPath = resolve(process.cwd(), 'migrations/0006_seed_remittance.sql');
  writeFileSync(outPath, sql.join('\n'), 'utf8');
  console.log(`[seed-remittance] Wrote ${sql.length} statements to ${outPath}`);
}

if (import.meta.main) {
  run();
}
