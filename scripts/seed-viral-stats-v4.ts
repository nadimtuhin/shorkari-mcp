import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

export const QURBANI_COW_SERIES = [
  { y: 2025, v: 125000, u: 'BDT (Medium Deshi Cow ~180-200kg)', s: 'Gabtoli & Aftabnagar Qurbani Haat Average' },
  { y: 2022, v: 95000, u: 'BDT (Medium Deshi Cow)', s: 'Gabtoli Cattle Market Benchmark' },
  { y: 2020, v: 75000, u: 'BDT (Medium Deshi Cow)', s: 'COVID-Era Online Cattle Market & Gabtoli' },
  { y: 2015, v: 50000, u: 'BDT (Medium Deshi Cow)', s: 'Dhaka City Cattle Market Benchmark' },
  { y: 2010, v: 32000, u: 'BDT (Medium Deshi Cow)', s: 'Dhaka City Cattle Market Benchmark' },
  { y: 2005, v: 20000, u: 'BDT (Medium Deshi Cow)', s: 'Gabtoli Cattle Market Benchmark' },
  { y: 2000, v: 12000, u: 'BDT (Medium Deshi Cow)', s: 'Gabtoli Millennium Era Benchmark' }
];

export const ADMISSION_COACHING_SERIES = [
  { y: 2025, v: 28000, u: 'BDT/Course Package', s: 'UCC, Focus, Retina, Medico Farmgate Comprehensive Package' },
  { y: 2020, v: 19500, u: 'BDT/Course Package', s: 'Farmgate Admission Coaching Benchmark' },
  { y: 2015, v: 14000, u: 'BDT/Course Package', s: 'Farmgate Admission Coaching Benchmark' },
  { y: 2010, v: 8500, u: 'BDT/Course Package', s: 'Farmgate Admission Coaching Benchmark' },
  { y: 2005, v: 4000, u: 'BDT/Course Package', s: 'Farmgate Coaching Era Baseline' }
];

export const PAAN_KHILI_SERIES = [
  { y: 2025, v: 15.0, u: 'BDT/Khili (Shada Paan)', s: 'Dhaka Neighborhood Tong Standard (Misti Paan: 25-50৳)' },
  { y: 2020, v: 8.0, u: 'BDT/Khili (Shada Paan)', s: 'Dhaka Neighborhood Tong Standard' },
  { y: 2015, v: 6.0, u: 'BDT/Khili (Shada Paan)', s: 'Dhaka Neighborhood Tong Standard' },
  { y: 2010, v: 4.0, u: 'BDT/Khili (Shada Paan)', s: 'Dhaka Neighborhood Tong Standard' },
  { y: 2005, v: 2.0, u: 'BDT/Khili (Shada Paan)', s: 'Tong Standard' },
  { y: 2000, v: 1.0, u: 'BDT/Khili (Shada Paan)', s: '1 Taka Paan Golden Age' }
];

export const PASSPORT_DALAL_SERIES = [
  { y: 2025, v: 11500, u: 'BDT (Total Dalal Expedited Package)', s: 'Agargaon / Uttara e-Passport 48-Page Dalal Rate' },
  { y: 2020, v: 8500, u: 'BDT (Total Dalal Expedited Package)', s: 'Initial e-Passport Rollout Dalal Tariff' },
  { y: 2015, v: 6000, u: 'BDT (Total Dalal Expedited Package)', s: 'Machine Readable Passport (MRP) Rush Era' },
  { y: 2010, v: 4200, u: 'BDT (Total Dalal Expedited Package)', s: 'Manual Blue Passport Transition to MRP' },
  { y: 2005, v: 2500, u: 'BDT (Total Dalal Expedited Package)', s: 'Manual Hand-Written Passport Era' }
];

export function generateSql(): string[] {
  const sql: string[] = ['PRAGMA foreign_keys = OFF;'];

  for (const item of QURBANI_COW_SERIES) {
    const id = `QURBANI_COW_BDT:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'QURBANI_COW_BDT', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s.replace(/'/g, "''")}', NULL);`
    );
  }

  for (const item of ADMISSION_COACHING_SERIES) {
    const id = `ADMISSION_COACHING_BDT:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'ADMISSION_COACHING_BDT', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s.replace(/'/g, "''")}', NULL);`
    );
  }

  for (const item of PAAN_KHILI_SERIES) {
    const id = `PAAN_KHILI_BDT:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'PAAN_KHILI_BDT', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s.replace(/'/g, "''")}', NULL);`
    );
  }

  for (const item of PASSPORT_DALAL_SERIES) {
    const id = `PASSPORT_DALAL_BDT:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'PASSPORT_DALAL_BDT', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s.replace(/'/g, "''")}', NULL);`
    );
  }

  sql.push('PRAGMA foreign_keys = ON;');
  return sql;
}

export function run() {
  const sql = generateSql();
  const outPath = resolve(process.cwd(), 'migrations/0016_seed_qurbani_passport_viral.sql');
  writeFileSync(outPath, sql.join('\n'), 'utf8');
  console.log(`Generated ${sql.length - 2} SQL records into ${outPath}`);
}

if (import.meta.main) {
  run();
}
