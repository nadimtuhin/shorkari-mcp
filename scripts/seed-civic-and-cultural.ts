import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

export const LIFE_EXPECTANCY_SERIES = [
  { y: 2024, v: 72.4, u: 'Years', s: 'BBS SVRS Report (vs 46.5 in 1971)' },
  { y: 2020, v: 72.6, u: 'Years', s: 'BBS / World Bank WDI' },
  { y: 2015, v: 71.2, u: 'Years', s: 'BBS / World Bank WDI' },
  { y: 2010, v: 69.8, u: 'Years', s: 'BBS / World Bank WDI' },
  { y: 2000, v: 65.3, u: 'Years', s: 'BBS / World Bank WDI' },
  { y: 1990, v: 58.4, u: 'Years', s: 'BBS / World Bank WDI' },
  { y: 1980, v: 53.8, u: 'Years', s: 'BBS / World Bank WDI' },
  { y: 1971, v: 46.5, u: 'Years', s: 'UN Population Division / BBS' }
];

export const FERTILITY_RATE_SERIES = [
  { y: 2024, v: 2.14, u: 'Births/Woman', s: 'BBS SVRS Report (Near replacement level 2.1)' },
  { y: 2020, v: 2.20, u: 'Births/Woman', s: 'BBS / World Bank WDI' },
  { y: 2015, v: 2.30, u: 'Births/Woman', s: 'BBS / World Bank WDI' },
  { y: 2010, v: 2.50, u: 'Births/Woman', s: 'BBS / World Bank WDI' },
  { y: 2000, v: 3.20, u: 'Births/Woman', s: 'BBS / World Bank WDI' },
  { y: 1990, v: 4.50, u: 'Births/Woman', s: 'BBS / World Bank WDI' },
  { y: 1980, v: 6.10, u: 'Births/Woman', s: 'BBS / World Bank WDI' },
  { y: 1970, v: 6.90, u: 'Births/Woman', s: 'UN Population Division' }
];

export const LITERACY_RATE_SERIES = [
  { y: 2024, v: 76.8, u: 'Percent (%)', s: 'BBS Statistical Pocketbook (Age 7+)' },
  { y: 2022, v: 74.8, u: 'Percent (%)', s: 'BBS Population Census' },
  { y: 2015, v: 64.6, u: 'Percent (%)', s: 'UNESCO / BBS' },
  { y: 2011, v: 58.8, u: 'Percent (%)', s: 'BBS Population Census' },
  { y: 2001, v: 47.5, u: 'Percent (%)', s: 'BBS Population Census' },
  { y: 1991, v: 35.3, u: 'Percent (%)', s: 'BBS Population Census' },
  { y: 1981, v: 29.2, u: 'Percent (%)', s: 'BBS Population Census' },
  { y: 1974, v: 16.8, u: 'Percent (%)', s: 'First Population Census of Bangladesh' }
];

export const POWER_GRID_SERIES = [
  { y: 2025, v: 29500.0, u: 'Megawatts (MW)', s: 'BPDB Official Grid Statistics' },
  { y: 2023, v: 28134.0, u: 'Megawatts (MW)', s: 'BPDB Official Grid Statistics' },
  { y: 2020, v: 20383.0, u: 'Megawatts (MW)', s: 'BPDB Official Grid Statistics' },
  { y: 2015, v: 11532.0, u: 'Megawatts (MW)', s: 'BPDB Official Grid Statistics' },
  { y: 2010, v: 5823.0, u: 'Megawatts (MW)', s: 'BPDB Official Grid Statistics' },
  { y: 2005, v: 5275.0, u: 'Megawatts (MW)', s: 'BPDB Official Grid Statistics' },
  { y: 2000, v: 4005.0, u: 'Megawatts (MW)', s: 'BPDB Official Grid Statistics' }
];

export const SUNDARBANS_TIGER_SERIES = [
  { y: 2024, v: 125.0, u: 'Tigers', s: 'Forest Dept / UNDP Camera Trapping Census' },
  { y: 2018, v: 114.0, u: 'Tigers', s: 'Forest Dept Camera Trapping Census' },
  { y: 2015, v: 106.0, u: 'Tigers', s: 'Forest Dept First Camera Trapping Census' }
];

export function generateV4Sql(): string[] {
  const sql: string[] = ['PRAGMA foreign_keys = OFF;'];

  for (const item of LIFE_EXPECTANCY_SERIES) {
    const id = `DEMO_LIFE_EXPECTANCY_YEARS:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'DEMO_LIFE_EXPECTANCY_YEARS', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s}', NULL);`
    );
  }

  for (const item of FERTILITY_RATE_SERIES) {
    const id = `DEMO_TOTAL_FERTILITY_RATE:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'DEMO_TOTAL_FERTILITY_RATE', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s}', NULL);`
    );
  }

  for (const item of LITERACY_RATE_SERIES) {
    const id = `DEMO_LITERACY_RATE_PCT:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'DEMO_LITERACY_RATE_PCT', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s}', NULL);`
    );
  }

  for (const item of POWER_GRID_SERIES) {
    const id = `POWER_GRID_CAPACITY_MW:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'POWER_GRID_CAPACITY_MW', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s}', NULL);`
    );
  }

  for (const item of SUNDARBANS_TIGER_SERIES) {
    const id = `TIGER_SUNDARBANS_CENSUS:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'TIGER_SUNDARBANS_CENSUS', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s}', NULL);`
    );
  }

  sql.push('PRAGMA foreign_keys = ON;');
  return sql;
}

export function run() {
  const sql = generateV4Sql();
  const outPath = resolve(process.cwd(), 'migrations/0010_seed_civic_and_cultural.sql');
  writeFileSync(outPath, sql.join('\n'), 'utf8');
  console.log(`[seed-civic-and-cultural] Wrote ${sql.length} statements to ${outPath}`);
}

if (import.meta.main) {
  run();
}
