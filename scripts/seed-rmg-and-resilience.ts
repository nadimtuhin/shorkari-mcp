import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

export const RMG_EXPORTS_SERIES = [
  { y: 2024, v: 47.10, u: 'Billion USD', s: 'Export Promotion Bureau (EPB) / BGMEA' },
  { y: 2023, v: 46.99, u: 'Billion USD', s: 'Export Promotion Bureau (EPB) / BGMEA' },
  { y: 2022, v: 42.61, u: 'Billion USD', s: 'Export Promotion Bureau (EPB) / BGMEA' },
  { y: 2020, v: 27.95, u: 'Billion USD', s: 'EPB / BGMEA (COVID-19 Global Supply Chain Shock)' },
  { y: 2018, v: 30.61, u: 'Billion USD', s: 'Export Promotion Bureau (EPB)' },
  { y: 2015, v: 25.49, u: 'Billion USD', s: 'Export Promotion Bureau (EPB)' },
  { y: 2010, v: 12.49, u: 'Billion USD', s: 'Export Promotion Bureau (EPB)' },
  { y: 2005, v: 6.42, u: 'Billion USD', s: 'Export Promotion Bureau (EPB)' },
  { y: 2000, v: 4.86, u: 'Billion USD', s: 'Export Promotion Bureau (EPB)' },
  { y: 1995, v: 2.23, u: 'Billion USD', s: 'Export Promotion Bureau (EPB)' },
  { y: 1990, v: 0.866, u: 'Billion USD', s: 'Export Promotion Bureau (EPB)' },
  { y: 1984, v: 0.032, u: 'Billion USD', s: 'Export Promotion Bureau (EPB) - Early Dawn' }
];

export const RMG_MIN_WAGE_SERIES = [
  { y: 2023, v: 12500, u: 'BDT/Month', s: 'Ministry of Labour & Minimum Wage Board Gazette' },
  { y: 2018, v: 8000, u: 'BDT/Month', s: 'Minimum Wage Board Gazette' },
  { y: 2013, v: 5300, u: 'BDT/Month', s: 'Minimum Wage Board (Post-Rana Plaza Revision)' },
  { y: 2010, v: 3000, u: 'BDT/Month', s: 'Minimum Wage Board Gazette' },
  { y: 2006, v: 1662, u: 'BDT/Month', s: 'Minimum Wage Board Gazette' },
  { y: 1994, v: 930, u: 'BDT/Month', s: 'First National Garments Minimum Wage' }
];

export const RICE_PRODUCTION_SERIES = [
  { y: 2024, v: 40.20, u: 'Million Metric Tons', s: 'BBS Agricultural Statistics & DAE (Aman, Boro, Aus)' },
  { y: 2023, v: 39.10, u: 'Million Metric Tons', s: 'BBS / Dept of Agricultural Extension (DAE)' },
  { y: 2020, v: 37.60, u: 'Million Metric Tons', s: 'BBS / Dept of Agricultural Extension' },
  { y: 2015, v: 34.71, u: 'Million Metric Tons', s: 'BBS Agricultural Wing' },
  { y: 2010, v: 32.25, u: 'Million Metric Tons', s: 'BBS Agricultural Wing' },
  { y: 2005, v: 27.27, u: 'Million Metric Tons', s: 'BBS Agricultural Wing' },
  { y: 2000, v: 25.08, u: 'Million Metric Tons', s: 'BBS Agricultural Wing' },
  { y: 1990, v: 17.85, u: 'Million Metric Tons', s: 'BBS Agricultural Wing' },
  { y: 1980, v: 13.90, u: 'Million Metric Tons', s: 'BBS Agricultural Statistics' },
  { y: 1971, v: 10.60, u: 'Million Metric Tons', s: 'Post-Liberation Baseline (Kissinger Basket Case Era)' }
];

export const CYCLONE_FATALITIES_SERIES = [
  { y: 2024, v: 16, u: 'Lives Lost', s: 'Cyclone Remal (DDM / CPP Early Evacuation: 800,000)' },
  { y: 2023, v: 0, u: 'Lives Lost', s: 'Cyclone Mocha (Zero fatalities in BD coastal mainland)' },
  { y: 2022, v: 35, u: 'Lives Lost', s: 'Cyclone Sitrang (Dept of Disaster Management)' },
  { y: 2020, v: 26, u: 'Lives Lost', s: 'Super Cyclone Amphan (2.4M evacuated to 14,000 shelters)' },
  { y: 2019, v: 17, u: 'Lives Lost', s: 'Very Severe Cyclone Fani' },
  { y: 2016, v: 26, u: 'Lives Lost', s: 'Cyclone Roanu' },
  { y: 2013, v: 17, u: 'Lives Lost', s: 'Cyclone Mahasen' },
  { y: 2009, v: 190, u: 'Lives Lost', s: 'Severe Cyclone Aila' },
  { y: 2007, v: 3406, u: 'Lives Lost', s: 'Category 5 Cyclone Sidr (3.2M evacuated, 70k volunteers)' },
  { y: 1997, v: 550, u: 'Lives Lost', s: 'Sitakunda Cyclone' },
  { y: 1991, v: 138882, u: 'Lives Lost', s: '1991 Bangladesh Cyclone (Gorky, Winds 225 km/h)' },
  { y: 1985, v: 11069, u: 'Lives Lost', s: 'Urir Char Cyclone' },
  { y: 1970, v: 300000, u: 'Lives Lost', s: '1970 Great Bhola Cyclone (Cat 4 surge, sparked liberation anger)' }
];

export const CYCLONE_SHELTERS_SERIES = [
  { y: 2024, v: 14200, u: 'Multi-Purpose Shelters', s: 'Ministry of Disaster Management and Relief' },
  { y: 2020, v: 12400, u: 'Multi-Purpose Shelters', s: 'MoDMR Multi-Purpose Cyclone Shelters' },
  { y: 2015, v: 6200, u: 'Multi-Purpose Shelters', s: 'MoDMR / Red Crescent CPP' },
  { y: 2010, v: 3900, u: 'Multi-Purpose Shelters', s: 'Dept of Disaster Management' },
  { y: 2000, v: 1850, u: 'Shelters', s: 'Disaster Management Bureau' },
  { y: 1991, v: 500, u: 'Shelters', s: 'Red Crescent / Gov Post-1991 Inventory' },
  { y: 1970, v: 42, u: 'Shelters', s: 'Pre-Independence Coastal Infrastructure' }
];

export function generateSql(): string[] {
  const sql: string[] = ['PRAGMA foreign_keys = OFF;'];

  for (const item of RMG_EXPORTS_SERIES) {
    const id = `RMG_EXPORTS_USD_BN:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'RMG_EXPORTS_USD_BN', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s.replace(/'/g, "''")}', NULL);`
    );
  }

  for (const item of RMG_MIN_WAGE_SERIES) {
    const id = `RMG_MIN_WAGE_BDT:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'RMG_MIN_WAGE_BDT', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s.replace(/'/g, "''")}', NULL);`
    );
  }

  for (const item of RICE_PRODUCTION_SERIES) {
    const id = `RICE_PRODUCTION_MN_TONS:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'RICE_PRODUCTION_MN_TONS', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s.replace(/'/g, "''")}', NULL);`
    );
  }

  for (const item of CYCLONE_FATALITIES_SERIES) {
    const id = `CYCLONE_FATALITIES:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'CYCLONE_FATALITIES', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s.replace(/'/g, "''")}', NULL);`
    );
  }

  for (const item of CYCLONE_SHELTERS_SERIES) {
    const id = `CYCLONE_SHELTERS_COUNT:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'CYCLONE_SHELTERS_COUNT', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s.replace(/'/g, "''")}', NULL);`
    );
  }

  sql.push('PRAGMA foreign_keys = ON;');
  return sql;
}

export function run() {
  const sql = generateSql();
  const outPath = resolve(process.cwd(), 'migrations/0012_seed_rmg_resilience.sql');
  writeFileSync(outPath, sql.join('\n'), 'utf8');
  console.log(`Generated ${sql.length - 2} SQL records into ${outPath}`);
}

if (import.meta.main) {
  run();
}
