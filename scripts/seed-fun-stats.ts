import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

export const GOLD_SERIES = [
  { y: 2025, v: 142000, u: 'BDT/bhori', s: 'BAJUS (22-Karat)' },
  { y: 2024, v: 135000, u: 'BDT/bhori', s: 'BAJUS (22-Karat)' },
  { y: 2023, v: 101000, u: 'BDT/bhori', s: 'BAJUS (22-Karat)' },
  { y: 2022, v: 84000, u: 'BDT/bhori', s: 'BAJUS (22-Karat)' },
  { y: 2021, v: 73000, u: 'BDT/bhori', s: 'BAJUS (22-Karat)' },
  { y: 2020, v: 72000, u: 'BDT/bhori', s: 'BAJUS (22-Karat)' },
  { y: 2018, v: 48000, u: 'BDT/bhori', s: 'BAJUS (22-Karat)' },
  { y: 2015, v: 42000, u: 'BDT/bhori', s: 'BAJUS (22-Karat)' },
  { y: 2012, v: 56000, u: 'BDT/bhori', s: 'BAJUS (22-Karat)' },
  { y: 2010, v: 36000, u: 'BDT/bhori', s: 'BAJUS (22-Karat)' },
  { y: 2008, v: 24000, u: 'BDT/bhori', s: 'BAJUS (22-Karat)' },
  { y: 2005, v: 12500, u: 'BDT/bhori', s: 'BAJUS (22-Karat)' },
  { y: 2002, v: 8500, u: 'BDT/bhori', s: 'BAJUS (22-Karat)' },
  { y: 2000, v: 6500, u: 'BDT/bhori', s: 'BAJUS (22-Karat)' }
];

export const FUEL_DIESEL = [
  { y: 2025, v: 105.5, u: 'BDT/liter', s: 'BPC' },
  { y: 2024, v: 106.75, u: 'BDT/liter', s: 'BPC' },
  { y: 2023, v: 109.0, u: 'BDT/liter', s: 'BPC' },
  { y: 2022, v: 109.0, u: 'BDT/liter', s: 'BPC' },
  { y: 2021, v: 80.0, u: 'BDT/liter', s: 'BPC' },
  { y: 2020, v: 65.0, u: 'BDT/liter', s: 'BPC' },
  { y: 2015, v: 68.0, u: 'BDT/liter', s: 'BPC' },
  { y: 2010, v: 44.0, u: 'BDT/liter', s: 'BPC' },
  { y: 2005, v: 30.0, u: 'BDT/liter', s: 'BPC' },
  { y: 2000, v: 15.0, u: 'BDT/liter', s: 'BPC' }
];

export const FUEL_OCTANE = [
  { y: 2025, v: 125.0, u: 'BDT/liter', s: 'BPC' },
  { y: 2024, v: 128.0, u: 'BDT/liter', s: 'BPC' },
  { y: 2023, v: 130.0, u: 'BDT/liter', s: 'BPC' },
  { y: 2022, v: 130.0, u: 'BDT/liter', s: 'BPC' },
  { y: 2021, v: 89.0, u: 'BDT/liter', s: 'BPC' },
  { y: 2020, v: 89.0, u: 'BDT/liter', s: 'BPC' },
  { y: 2015, v: 99.0, u: 'BDT/liter', s: 'BPC' },
  { y: 2010, v: 67.0, u: 'BDT/liter', s: 'BPC' },
  { y: 2005, v: 40.0, u: 'BDT/liter', s: 'BPC' },
  { y: 2000, v: 25.0, u: 'BDT/liter', s: 'BPC' }
];

export const TONG_CHA = [
  { y: 2025, v: 12.0, u: 'BDT/cup', s: 'Tong Survey' },
  { y: 2023, v: 10.0, u: 'BDT/cup', s: 'Tong Survey' },
  { y: 2020, v: 8.0, u: 'BDT/cup', s: 'Tong Survey' },
  { y: 2015, v: 6.0, u: 'BDT/cup', s: 'Tong Survey' },
  { y: 2010, v: 5.0, u: 'BDT/cup', s: 'Tong Survey' },
  { y: 2005, v: 3.0, u: 'BDT/cup', s: 'Tong Survey' },
  { y: 2000, v: 2.0, u: 'BDT/cup', s: 'Tong Survey' }
];

export function generateFunStatsSql(): string[] {
  const sql: string[] = ['PRAGMA foreign_keys = OFF;'];

  for (const g of GOLD_SERIES) {
    const id = `GOLD_22K_BHORI_BDT:${g.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'GOLD_22K_BHORI_BDT', 'ANNUAL', ${g.y}, NULL, ${g.v}, '${g.u}', '${g.s}', NULL);`
    );
  }

  for (const f of FUEL_DIESEL) {
    const id = `FUEL_DIESEL_LITER_BDT:${f.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'FUEL_DIESEL_LITER_BDT', 'ANNUAL', ${f.y}, NULL, ${f.v}, '${f.u}', '${f.s}', NULL);`
    );
  }

  for (const o of FUEL_OCTANE) {
    const id = `FUEL_OCTANE_LITER_BDT:${o.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'FUEL_OCTANE_LITER_BDT', 'ANNUAL', ${o.y}, NULL, ${o.v}, '${o.u}', '${o.s}', NULL);`
    );
  }

  for (const t of TONG_CHA) {
    const id = `TONG_DUDH_CHA_BDT:${t.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'TONG_DUDH_CHA_BDT', 'ANNUAL', ${t.y}, NULL, ${t.v}, '${t.u}', '${t.s}', NULL);`
    );
  }

  sql.push('PRAGMA foreign_keys = ON;');
  return sql;
}

export function run() {
  const sql = generateFunStatsSql();
  const outPath = resolve(process.cwd(), 'migrations/0007_seed_fun_stats.sql');
  writeFileSync(outPath, sql.join('\n'), 'utf8');
  console.log(`[seed-fun-stats] Wrote ${sql.length} statements to ${outPath}`);
}

if (import.meta.main) {
  run();
}
