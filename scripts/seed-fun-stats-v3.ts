import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

export const KACCHI_SERIES = [
  { y: 2025, v: 26500.0, u: 'BDT/dega', s: 'Old Dhaka Catering Barometer (Serves ~30-35)' },
  { y: 2023, v: 22000.0, u: 'BDT/dega', s: 'Old Dhaka Catering Barometer' },
  { y: 2020, v: 16500.0, u: 'BDT/dega', s: 'Old Dhaka Catering Barometer' },
  { y: 2015, v: 12000.0, u: 'BDT/dega', s: 'Old Dhaka Catering Barometer' },
  { y: 2010, v: 7500.0, u: 'BDT/dega', s: 'Old Dhaka Catering Barometer' },
  { y: 2005, v: 4000.0, u: 'BDT/dega', s: 'Old Dhaka Catering Barometer' },
  { y: 2000, v: 2500.0, u: 'BDT/dega', s: 'Old Dhaka Catering Barometer' }
];

export const DATA_PRICE_SERIES = [
  { y: 2025, v: 14.0, u: 'BDT/GB', s: 'BTRC / Operator Median Tariff' },
  { y: 2024, v: 16.0, u: 'BDT/GB', s: 'BTRC / Operator Median Tariff' },
  { y: 2022, v: 20.0, u: 'BDT/GB', s: 'BTRC / Operator Median Tariff' },
  { y: 2020, v: 28.0, u: 'BDT/GB', s: 'BTRC / Operator Median Tariff' },
  { y: 2018, v: 45.0, u: 'BDT/GB', s: 'BTRC / Operator Median Tariff' },
  { y: 2016, v: 95.0, u: 'BDT/GB', s: 'BTRC / Operator Median Tariff' },
  { y: 2014, v: 180.0, u: 'BDT/GB', s: 'BTRC / Operator Median Tariff' },
  { y: 2010, v: 350.0, u: 'BDT/GB', s: 'BTRC / Operator Median Tariff' }
];

export const INTERNET_USERS_SERIES = [
  { y: 2025, v: 136.5, u: 'Million Users', s: 'BTRC Official Statistics' },
  { y: 2024, v: 131.2, u: 'Million Users', s: 'BTRC Official Statistics' },
  { y: 2022, v: 121.8, u: 'Million Users', s: 'BTRC Official Statistics' },
  { y: 2020, v: 102.4, u: 'Million Users', s: 'BTRC Official Statistics' },
  { y: 2018, v: 86.2, u: 'Million Users', s: 'BTRC Official Statistics' },
  { y: 2015, v: 54.1, u: 'Million Users', s: 'BTRC Official Statistics' },
  { y: 2012, v: 28.4, u: 'Million Users', s: 'BTRC Official Statistics' },
  { y: 2010, v: 18.6, u: 'Million Users', s: 'BTRC Official Statistics' }
];

export const DHANMONDI_RENT_SERIES = [
  { y: 2025, v: 38000.0, u: 'BDT/month', s: 'REHAB / Dhaka Rental Survey (1200 sqft)' },
  { y: 2020, v: 32000.0, u: 'BDT/month', s: 'REHAB / Dhaka Rental Survey' },
  { y: 2015, v: 25000.0, u: 'BDT/month', s: 'REHAB / Dhaka Rental Survey' },
  { y: 2010, v: 18500.0, u: 'BDT/month', s: 'REHAB / Dhaka Rental Survey' },
  { y: 2005, v: 12000.0, u: 'BDT/month', s: 'REHAB / Dhaka Rental Survey' },
  { y: 2000, v: 8000.0, u: 'BDT/month', s: 'REHAB / Dhaka Rental Survey' }
];

export const MIRPUR_RENT_SERIES = [
  { y: 2025, v: 20000.0, u: 'BDT/month', s: 'REHAB / Dhaka Rental Survey (1000 sqft)' },
  { y: 2020, v: 16500.0, u: 'BDT/month', s: 'REHAB / Dhaka Rental Survey' },
  { y: 2015, v: 13500.0, u: 'BDT/month', s: 'REHAB / Dhaka Rental Survey' },
  { y: 2010, v: 9000.0, u: 'BDT/month', s: 'REHAB / Dhaka Rental Survey' },
  { y: 2005, v: 5500.0, u: 'BDT/month', s: 'REHAB / Dhaka Rental Survey' },
  { y: 2000, v: 3500.0, u: 'BDT/month', s: 'REHAB / Dhaka Rental Survey' }
];

export function generateV3Sql(): string[] {
  const sql: string[] = ['PRAGMA foreign_keys = OFF;'];

  for (const k of KACCHI_SERIES) {
    const id = `WEDDING_KACCHI_DEGA_BDT:${k.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'WEDDING_KACCHI_DEGA_BDT', 'ANNUAL', ${k.y}, NULL, ${k.v}, '${k.u}', '${k.s}', NULL);`
    );
  }

  for (const d of DATA_PRICE_SERIES) {
    const id = `INTERNET_MOBILE_DATA_1GB_BDT:${d.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'INTERNET_MOBILE_DATA_1GB_BDT', 'ANNUAL', ${d.y}, NULL, ${d.v}, '${d.u}', '${d.s}', NULL);`
    );
  }

  for (const u of INTERNET_USERS_SERIES) {
    const id = `INTERNET_SUBSCRIBERS_MILLIONS:${u.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'INTERNET_SUBSCRIBERS_MILLIONS', 'ANNUAL', ${u.y}, NULL, ${u.v}, '${u.u}', '${u.s}', NULL);`
    );
  }

  for (const dr of DHANMONDI_RENT_SERIES) {
    const id = `RENT_DHANMONDI_APT_BDT:${dr.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'RENT_DHANMONDI_APT_BDT', 'ANNUAL', ${dr.y}, NULL, ${dr.v}, '${dr.u}', '${dr.s}', NULL);`
    );
  }

  for (const mr of MIRPUR_RENT_SERIES) {
    const id = `RENT_MIRPUR_APT_BDT:${mr.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'RENT_MIRPUR_APT_BDT', 'ANNUAL', ${mr.y}, NULL, ${mr.v}, '${mr.u}', '${mr.s}', NULL);`
    );
  }

  sql.push('PRAGMA foreign_keys = ON;');
  return sql;
}

export function run() {
  const sql = generateV3Sql();
  const outPath = resolve(process.cwd(), 'migrations/0009_seed_fun_stats_v3.sql');
  writeFileSync(outPath, sql.join('\n'), 'utf8');
  console.log(`[seed-fun-stats-v3] Wrote ${sql.length} statements to ${outPath}`);
}

if (import.meta.main) {
  run();
}
