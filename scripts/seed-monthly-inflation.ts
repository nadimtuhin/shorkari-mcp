import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

// BBS Official Monthly Point-to-Point General Inflation (%) 2020-01 to 2025-07
export const MONTHLY_INFLATION_DATA = [
  // 2025
  { y: 2025, m: 7, v: 8.77, base: '2021-22' },
  { y: 2025, m: 6, v: 8.95, base: '2021-22' },
  { y: 2025, m: 5, v: 9.15, base: '2021-22' },
  { y: 2025, m: 4, v: 9.42, base: '2021-22' },
  { y: 2025, m: 3, v: 9.65, base: '2021-22' },
  { y: 2025, m: 2, v: 9.87, base: '2021-22' },
  { y: 2025, m: 1, v: 10.22, base: '2021-22' },
  // 2024
  { y: 2024, m: 12, v: 10.89, base: '2021-22' },
  { y: 2024, m: 11, v: 11.38, base: '2021-22' },
  { y: 2024, m: 10, v: 10.87, base: '2021-22' },
  { y: 2024, m: 9, v: 9.92, base: '2021-22' },
  { y: 2024, m: 8, v: 10.49, base: '2021-22' },
  { y: 2024, m: 7, v: 11.66, base: '2021-22' },
  { y: 2024, m: 6, v: 9.72, base: '2021-22' },
  { y: 2024, m: 5, v: 9.89, base: '2021-22' },
  { y: 2024, m: 4, v: 9.74, base: '2021-22' },
  { y: 2024, m: 3, v: 9.81, base: '2021-22' },
  { y: 2024, m: 2, v: 9.67, base: '2021-22' },
  { y: 2024, m: 1, v: 9.86, base: '2021-22' },
  // 2023
  { y: 2023, m: 12, v: 9.41, base: '2021-22' },
  { y: 2023, m: 11, v: 9.49, base: '2021-22' },
  { y: 2023, m: 10, v: 9.93, base: '2021-22' },
  { y: 2023, m: 9, v: 9.63, base: '2021-22' },
  { y: 2023, m: 8, v: 9.92, base: '2021-22' },
  { y: 2023, m: 7, v: 9.69, base: '2021-22' },
  { y: 2023, m: 6, v: 9.74, base: '2021-22' },
  { y: 2023, m: 5, v: 9.94, base: '2021-22' },
  { y: 2023, m: 4, v: 9.24, base: '2021-22' },
  { y: 2023, m: 3, v: 9.33, base: '2021-22' },
  { y: 2023, m: 2, v: 8.78, base: '2021-22' },
  { y: 2023, m: 1, v: 8.57, base: '2021-22' },
  // 2022
  { y: 2022, m: 12, v: 8.71, base: '2005-06' },
  { y: 2022, m: 11, v: 8.85, base: '2005-06' },
  { y: 2022, m: 10, v: 8.91, base: '2005-06' },
  { y: 2022, m: 9, v: 9.10, base: '2005-06' },
  { y: 2022, m: 8, v: 9.52, base: '2005-06' },
  { y: 2022, m: 7, v: 7.48, base: '2005-06' },
  { y: 2022, m: 6, v: 7.56, base: '2005-06' },
  { y: 2022, m: 5, v: 7.42, base: '2005-06' },
  { y: 2022, m: 4, v: 6.29, base: '2005-06' },
  { y: 2022, m: 3, v: 6.22, base: '2005-06' },
  { y: 2022, m: 2, v: 6.17, base: '2005-06' },
  { y: 2022, m: 1, v: 5.86, base: '2005-06' },
  // 2021
  { y: 2021, m: 12, v: 6.05, base: '2005-06' },
  { y: 2021, m: 11, v: 5.98, base: '2005-06' },
  { y: 2021, m: 10, v: 5.70, base: '2005-06' },
  { y: 2021, m: 9, v: 5.59, base: '2005-06' },
  { y: 2021, m: 8, v: 5.54, base: '2005-06' },
  { y: 2021, m: 7, v: 5.36, base: '2005-06' },
  { y: 2021, m: 6, v: 5.64, base: '2005-06' },
  { y: 2021, m: 5, v: 5.26, base: '2005-06' },
  { y: 2021, m: 4, v: 5.56, base: '2005-06' },
  { y: 2021, m: 3, v: 5.47, base: '2005-06' },
  { y: 2021, m: 2, v: 5.32, base: '2005-06' },
  { y: 2021, m: 1, v: 5.02, base: '2005-06' },
  // 2020
  { y: 2020, m: 12, v: 5.29, base: '2005-06' },
  { y: 2020, m: 11, v: 5.52, base: '2005-06' },
  { y: 2020, m: 10, v: 6.44, base: '2005-06' },
  { y: 2020, m: 9, v: 5.97, base: '2005-06' },
  { y: 2020, m: 8, v: 5.68, base: '2005-06' },
  { y: 2020, m: 7, v: 5.53, base: '2005-06' },
  { y: 2020, m: 6, v: 6.02, base: '2005-06' },
  { y: 2020, m: 5, v: 5.35, base: '2005-06' },
  { y: 2020, m: 4, v: 5.96, base: '2005-06' },
  { y: 2020, m: 3, v: 5.48, base: '2005-06' },
  { y: 2020, m: 2, v: 5.46, base: '2005-06' },
  { y: 2020, m: 1, v: 5.57, base: '2005-06' }
];

export function generateMonthlyInflationSql(): string[] {
  const sql: string[] = ['PRAGMA foreign_keys = OFF;'];
  for (const d of MONTHLY_INFLATION_DATA) {
    const id = `INFLATION_CPI_MONTHLY:${d.y}-${String(d.m).padStart(2, '0')}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'INFLATION_CPI_MONTHLY', 'MONTHLY', ${d.y}, ${d.m}, ${d.v}, '%', 'BBS (Bangladesh Bureau of Statistics)', '${d.base}');`
    );
  }
  sql.push('PRAGMA foreign_keys = ON;');
  return sql;
}

export function run() {
  const sql = generateMonthlyInflationSql();
  const outPath = resolve(process.cwd(), 'migrations/0004_seed_monthly_inflation.sql');
  writeFileSync(outPath, sql.join('\n'), 'utf8');
  console.log(`[seed-monthly-inflation] Wrote ${sql.length} statements to ${outPath}`);
}

if (import.meta.main) {
  run();
}
