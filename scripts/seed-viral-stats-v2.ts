import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

export const BCS_EXAM_SERIES = [
  { y: 2024, applicants: 338000, cadres: 3140, bcs_no: 46, s: 'BPSC 46th BCS Circular' },
  { y: 2022, applicants: 350716, cadres: 1710, bcs_no: 44, s: 'BPSC 44th BCS Final Statistics' },
  { y: 2021, applicants: 435190, cadres: 2064, bcs_no: 43, s: 'BPSC 43rd BCS Final Statistics' },
  { y: 2019, applicants: 475266, cadres: 2520, bcs_no: 41, s: 'BPSC 41st BCS Record Applicants' },
  { y: 2018, applicants: 412532, cadres: 1963, bcs_no: 40, s: 'BPSC 40th BCS Final Gazette' },
  { y: 2017, applicants: 346440, cadres: 2204, bcs_no: 38, s: 'BPSC 38th BCS Final Gazette' },
  { y: 2016, applicants: 261322, cadres: 1226, bcs_no: 37, s: 'BPSC 37th BCS Statistics' },
  { y: 2014, applicants: 244107, cadres: 2158, bcs_no: 35, s: 'BPSC 35th BCS Baseline' }
];

export const BUA_WAGE_SERIES = [
  { y: 2025, v: 4800, u: 'BDT/Month', s: 'Dhaka Bachelor Flat (3-4 Members, 2 Meals/Day) Benchmark' },
  { y: 2020, v: 3500, u: 'BDT/Month', s: 'Dhaka City Bachelor Benchmark' },
  { y: 2015, v: 2600, u: 'BDT/Month', s: 'Dhaka City Bachelor Benchmark' },
  { y: 2010, v: 1800, u: 'BDT/Month', s: 'Dhaka City Bachelor Benchmark' },
  { y: 2005, v: 1000, u: 'BDT/Month', s: 'Dhaka City Bachelor Benchmark' },
  { y: 2000, v: 600, u: 'BDT/Month', s: 'Dhaka City Bachelor Benchmark (Millennium Era)' }
];

export const HAJI_BIRYANI_SERIES = [
  { y: 2025, v: 260, u: 'BDT/Plate', s: 'Nazira Bazar Haji Biryani (Mutton Tehari)' },
  { y: 2023, v: 220, u: 'BDT/Plate', s: 'Nazira Bazar Standard' },
  { y: 2020, v: 180, u: 'BDT/Plate', s: 'Nazira Bazar Standard' },
  { y: 2015, v: 140, u: 'BDT/Plate', s: 'Nazira Bazar Standard' },
  { y: 2010, v: 100, u: 'BDT/Plate', s: 'Nazira Bazar Standard' },
  { y: 2005, v: 65, u: 'BDT/Plate', s: 'Nazira Bazar Standard' },
  { y: 2000, v: 45, u: 'BDT/Plate', s: 'Nazira Bazar Standard' },
  { y: 1995, v: 30, u: 'BDT/Plate', s: 'Nazira Bazar Standard' },
  { y: 1990, v: 20, u: 'BDT/Plate', s: 'Nazira Bazar 1990s Nostalgia Rate' }
];

export const BORHANI_SERIES = [
  { y: 2025, v: 60, u: 'BDT/Glass (250ml)', s: 'Old Dhaka Authentic Spiced Borhani' },
  { y: 2020, v: 45, u: 'BDT/Glass (250ml)', s: 'Old Dhaka Standard' },
  { y: 2015, v: 35, u: 'BDT/Glass (250ml)', s: 'Old Dhaka Standard' },
  { y: 2010, v: 25, u: 'BDT/Glass (250ml)', s: 'Old Dhaka Standard' },
  { y: 2005, v: 15, u: 'BDT/Glass (250ml)', s: 'Old Dhaka Standard' },
  { y: 2000, v: 10, u: 'BDT/Glass (250ml)', s: 'Old Dhaka Standard' }
];

export const CNG_FARE_GAP_SERIES = [
  { y: 2025, meter: 190, chukti: 500, u: 'BDT (10km Route)', s: 'BRTA 2015 Gazette vs Street Reality (Farmgate to Gulshan/Uttara)' },
  { y: 2020, meter: 170, chukti: 400, u: 'BDT (10km Route)', s: 'BRTA Meter vs Street Reality' },
  { y: 2015, meter: 150, chukti: 320, u: 'BDT (10km Route)', s: 'BRTA 2015 Gazette Enactment Benchmark' },
  { y: 2010, meter: 110, chukti: 220, u: 'BDT (10km Route)', s: 'Pre-2015 Meter Revision' },
  { y: 2005, meter: 65, chukti: 110, u: 'BDT (10km Route)', s: 'Early Four-Stroke CNG Era' }
];

export function generateSql(): string[] {
  const sql: string[] = ['PRAGMA foreign_keys = OFF;'];

  for (const item of BCS_EXAM_SERIES) {
    const idApp = `BCS_APPLICANTS:${item.bcs_no}`;
    const idCad = `BCS_CADRES:${item.bcs_no}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${idApp}', 'BCS_APPLICANTS', 'ANNUAL', ${item.y}, ${item.bcs_no}, ${item.applicants}, 'Candidates', '${item.s.replace(/'/g, "''")}', '${item.bcs_no}th BCS');`
    );
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${idCad}', 'BCS_CADRES', 'ANNUAL', ${item.y}, ${item.bcs_no}, ${item.cadres}, 'Cadres Recommended', '${item.s.replace(/'/g, "''")}', '${item.bcs_no}th BCS');`
    );
  }

  for (const item of BUA_WAGE_SERIES) {
    const id = `BUA_MONTHLY_WAGE_BDT:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'BUA_MONTHLY_WAGE_BDT', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s.replace(/'/g, "''")}', NULL);`
    );
  }

  for (const item of HAJI_BIRYANI_SERIES) {
    const id = `HAJI_BIRYANI_PLATE_BDT:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'HAJI_BIRYANI_PLATE_BDT', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s.replace(/'/g, "''")}', NULL);`
    );
  }

  for (const item of BORHANI_SERIES) {
    const id = `BORHANI_GLASS_BDT:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'BORHANI_GLASS_BDT', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s.replace(/'/g, "''")}', NULL);`
    );
  }

  for (const item of CNG_FARE_GAP_SERIES) {
    const idMeter = `CNG_METER_FARE_BDT:${item.y}`;
    const idChukti = `CNG_CHUKTI_FARE_BDT:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${idMeter}', 'CNG_METER_FARE_BDT', 'ANNUAL', ${item.y}, NULL, ${item.meter}, '${item.u}', '${item.s.replace(/'/g, "''")}', NULL);`
    );
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${idChukti}', 'CNG_CHUKTI_FARE_BDT', 'ANNUAL', ${item.y}, NULL, ${item.chukti}, '${item.u}', '${item.s.replace(/'/g, "''")}', NULL);`
    );
  }

  sql.push('PRAGMA foreign_keys = ON;');
  return sql;
}

export function run() {
  const sql = generateSql();
  const outPath = resolve(process.cwd(), 'migrations/0014_seed_more_viral.sql');
  writeFileSync(outPath, sql.join('\n'), 'utf8');
  console.log(`Generated ${sql.length - 2} SQL records into ${outPath}`);
}

if (import.meta.main) {
  run();
}
