import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

export const LOADSHEDDING_SERIES = [
  { y: 2025, v: 1.8, u: 'Hours/Day (Avg)', s: 'BPDB Dispatch Log (Seasonal Summer Average)' },
  { y: 2023, v: 4.2, u: 'Hours/Day (Avg)', s: 'BPDB / Power Grid Co (LNG Import Dollar Crunch & Coal Stock Shortage)' },
  { y: 2022, v: 3.8, u: 'Hours/Day (Avg)', s: 'Cabinet-Enforced Area-Wise Scheduled Outages (Ukraine War Gas Spike)' },
  { y: 2019, v: 0.5, u: 'Hours/Day (Avg)', s: 'Pre-Crisis Base Load Grid Era' },
  { y: 2015, v: 2.0, u: 'Hours/Day (Avg)', s: 'Quick Rental Transition Era' },
  { y: 2010, v: 5.5, u: 'Hours/Day (Avg)', s: 'Major Power Crisis Era (Demand 6,000 MW, Supply 4,000 MW)' },
  { y: 2006, v: 8.5, u: 'Hours/Day (Avg)', s: 'Kansat Protests & Peak Historical Blackout Era (1,500 MW Deficit)' }
];

export const IPS_BATTERY_SERIES = [
  { y: 2025, v: 28000, u: 'BDT (150Ah Battery)', s: 'Rahimafrooz / Hamko Deep Cycle IPS Battery Benchmark' },
  { y: 2023, v: 24000, u: 'BDT (150Ah Battery)', s: 'Post-Dollar Surge Lead-Acid Battery Tariff' },
  { y: 2020, v: 17500, u: 'BDT (150Ah Battery)', s: 'Standard Retail Benchmark' },
  { y: 2015, v: 13000, u: 'BDT (150Ah Battery)', s: 'Standard Retail Benchmark' },
  { y: 2010, v: 8500, u: 'BDT (150Ah Battery)', s: 'Early Solar & IPS Boom' },
  { y: 2005, v: 4500, u: 'BDT (150Ah Battery)', s: 'Baseline Local Tubular Battery Standard' }
];

export const LOCAL_BUS_MIN_FARE_SERIES = [
  { y: 2025, v: 10.0, u: 'BDT (Minimum Base Fare)', s: 'BRTA Mandated Minimum Base Fare (Sitting Service Reality)' },
  { y: 2022, v: 10.0, u: 'BDT (Minimum Base Fare)', s: 'BRTA Fuel-Hike Fare Revision Gazette' },
  { y: 2021, v: 8.0, u: 'BDT (Minimum Base Fare)', s: 'BRTA Fare Revision' },
  { y: 2015, v: 7.0, u: 'BDT (Minimum Base Fare)', s: 'BRTA Gazetted Base Fare' },
  { y: 2010, v: 5.0, u: 'BDT (Minimum Base Fare)', s: 'Dhaka Metropolitan Transport Committee' },
  { y: 2005, v: 3.5, u: 'BDT (Minimum Base Fare)', s: 'Pre-CNG Conversion Era' },
  { y: 2000, v: 2.0, u: 'BDT (Minimum Base Fare)', s: 'Two-Taka Base Era (2৳ দিয়ে পুরা মিরপুর)' }
];

export const FRESHER_SALARY_SERIES = [
  { y: 2025, v: 26000, u: 'BDT/Month', s: 'Average Entry-Level Graduate Corporate/SWE Salary (Dhaka)' },
  { y: 2020, v: 22000, u: 'BDT/Month', s: 'Graduate Salary Benchmark' },
  { y: 2015, v: 18000, u: 'BDT/Month', s: 'Graduate Salary Benchmark' },
  { y: 2010, v: 15000, u: 'BDT/Month', s: 'Graduate Salary Benchmark' },
  { y: 2005, v: 10000, u: 'BDT/Month', s: 'Graduate Salary Benchmark' }
];

export function generateSql(): string[] {
  const sql: string[] = ['PRAGMA foreign_keys = OFF;'];

  for (const item of LOADSHEDDING_SERIES) {
    const id = `LOADSHEDDING_HOURS:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'LOADSHEDDING_HOURS', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s.replace(/'/g, "''")}', NULL);`
    );
  }

  for (const item of IPS_BATTERY_SERIES) {
    const id = `IPS_BATTERY_BDT:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'IPS_BATTERY_BDT', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s.replace(/'/g, "''")}', NULL);`
    );
  }

  for (const item of LOCAL_BUS_MIN_FARE_SERIES) {
    const id = `BUS_MIN_FARE_BDT:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'BUS_MIN_FARE_BDT', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s.replace(/'/g, "''")}', NULL);`
    );
  }

  for (const item of FRESHER_SALARY_SERIES) {
    const id = `FRESHER_SALARY_BDT:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'FRESHER_SALARY_BDT', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s.replace(/'/g, "''")}', NULL);`
    );
  }

  sql.push('PRAGMA foreign_keys = ON;');
  return sql;
}

export function run() {
  const sql = generateSql();
  const outPath = resolve(process.cwd(), 'migrations/0015_seed_even_more_viral.sql');
  writeFileSync(outPath, sql.join('\n'), 'utf8');
  console.log(`Generated ${sql.length - 2} SQL records into ${outPath}`);
}

if (import.meta.main) {
  run();
}
