import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

export const RICKSHAW_SERIES = [
  { y: 2025, v: 110.0, u: 'BDT/trip', s: 'Dhaka Rickshaw Survey (Farmgate-TSC)' },
  { y: 2023, v: 90.0, u: 'BDT/trip', s: 'Dhaka Rickshaw Survey' },
  { y: 2020, v: 60.0, u: 'BDT/trip', s: 'Dhaka Rickshaw Survey' },
  { y: 2015, v: 40.0, u: 'BDT/trip', s: 'Dhaka Rickshaw Survey' },
  { y: 2010, v: 25.0, u: 'BDT/trip', s: 'Dhaka Rickshaw Survey' },
  { y: 2005, v: 15.0, u: 'BDT/trip', s: 'Dhaka Rickshaw Survey' },
  { y: 2000, v: 10.0, u: 'BDT/trip', s: 'Dhaka Rickshaw Survey' }
];

export const ILISH_FISH_SERIES = [
  { y: 2025, v: 1850.0, u: 'BDT/kg', s: 'DAM / Karwan Bazar (1kg Ilish)' },
  { y: 2024, v: 2100.0, u: 'BDT/kg', s: 'DAM / Karwan Bazar' },
  { y: 2022, v: 1500.0, u: 'BDT/kg', s: 'DAM / Karwan Bazar' },
  { y: 2020, v: 1300.0, u: 'BDT/kg', s: 'DAM / Karwan Bazar' },
  { y: 2015, v: 1000.0, u: 'BDT/kg', s: 'DAM / Karwan Bazar' },
  { y: 2010, v: 650.0, u: 'BDT/kg', s: 'DAM / Karwan Bazar' },
  { y: 2005, v: 350.0, u: 'BDT/kg', s: 'DAM / Karwan Bazar' },
  { y: 2000, v: 200.0, u: 'BDT/kg', s: 'DAM / Karwan Bazar' }
];

export const RUI_FISH_SERIES = [
  { y: 2025, v: 400.0, u: 'BDT/kg', s: 'DAM / Karwan Bazar (Rui 2-3kg)' },
  { y: 2023, v: 360.0, u: 'BDT/kg', s: 'DAM / Karwan Bazar' },
  { y: 2020, v: 280.0, u: 'BDT/kg', s: 'DAM / Karwan Bazar' },
  { y: 2015, v: 230.0, u: 'BDT/kg', s: 'DAM / Karwan Bazar' },
  { y: 2010, v: 180.0, u: 'BDT/kg', s: 'DAM / Karwan Bazar' },
  { y: 2000, v: 80.0, u: 'BDT/kg', s: 'DAM / Karwan Bazar' }
];

export function generateV2Sql(): string[] {
  const sql: string[] = ['PRAGMA foreign_keys = OFF;'];

  for (const r of RICKSHAW_SERIES) {
    const id = `TRANSIT_RICKSHAW_FARMGATE_TSC:${r.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'TRANSIT_RICKSHAW_FARMGATE_TSC', 'ANNUAL', ${r.y}, NULL, ${r.v}, '${r.u}', '${r.s}', NULL);`
    );
  }

  for (const f of ILISH_FISH_SERIES) {
    const id = `FISH_ILISH_1KG_BDT:${f.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'FISH_ILISH_1KG_BDT', 'ANNUAL', ${f.y}, NULL, ${f.v}, '${f.u}', '${f.s}', NULL);`
    );
  }

  for (const rui of RUI_FISH_SERIES) {
    const id = `FISH_RUI_1KG_BDT:${rui.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'FISH_RUI_1KG_BDT', 'ANNUAL', ${rui.y}, NULL, ${rui.v}, '${rui.u}', '${rui.s}', NULL);`
    );
  }

  sql.push('PRAGMA foreign_keys = ON;');
  return sql;
}

export function run() {
  const sql = generateV2Sql();
  const outPath = resolve(process.cwd(), 'migrations/0008_seed_fun_stats_v2.sql');
  writeFileSync(outPath, sql.join('\n'), 'utf8');
  console.log(`[seed-fun-stats-v2] Wrote ${sql.length} statements to ${outPath}`);
}

if (import.meta.main) {
  run();
}
