import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

export const FUCHKA_SERIES = [
  { y: 2025, v: 100, u: 'BDT/Plate (10 pcs)', s: 'Dhanmondi / TSC / Bailey Road Street Food Average' },
  { y: 2024, v: 85, u: 'BDT/Plate (10 pcs)', s: 'Dhaka Street Food Benchmark' },
  { y: 2022, v: 70, u: 'BDT/Plate (10 pcs)', s: 'Post-COVID Edible Oil & Chickpea Price Surge' },
  { y: 2020, v: 60, u: 'BDT/Plate (10 pcs)', s: 'Dhaka City Street Benchmark' },
  { y: 2018, v: 50, u: 'BDT/Plate (10 pcs)', s: 'Dhaka City Street Benchmark' },
  { y: 2015, v: 40, u: 'BDT/Plate (10 pcs)', s: 'Dhaka City Street Benchmark' },
  { y: 2010, v: 25, u: 'BDT/Plate (10 pcs)', s: 'Dhaka City Street Benchmark' },
  { y: 2005, v: 15, u: 'BDT/Plate (10 pcs)', s: 'Dhaka City Street Benchmark' },
  { y: 2000, v: 10, u: 'BDT/Plate (10 pcs)', s: 'Dhaka City Street Benchmark (Millennium Parity)' }
];

export const DHAKA_TRAFFIC_SPEED_SERIES = [
  { y: 2024, v: 4.8, u: 'km/h', s: 'BUET Accident Research Institute (ARI) / World Bank Study (Slower than walking: 5 km/h)' },
  { y: 2020, v: 6.8, u: 'km/h', s: 'Dhaka Transport Coordination Authority (DTCA)' },
  { y: 2015, v: 9.5, u: 'km/h', s: 'World Bank Urban Transport Report' },
  { y: 2010, v: 15.0, u: 'km/h', s: 'Strategic Transport Plan (STP) Dhaka' },
  { y: 2004, v: 21.0, u: 'km/h', s: 'Dhaka Urban Transport Project (DUTP) Baseline' }
];

export const SHINGARA_SERIES = [
  { y: 2025, v: 10.0, u: 'BDT/Piece', s: 'Dhaka Neighborhood Tong & Sweetshop Benchmark' },
  { y: 2023, v: 8.0, u: 'BDT/Piece', s: 'Dhaka Neighborhood Benchmark' },
  { y: 2020, v: 7.0, u: 'BDT/Piece', s: 'Dhaka Neighborhood Benchmark' },
  { y: 2015, v: 5.0, u: 'BDT/Piece', s: 'Dhaka University DU TSC / BUET Cafeteria Standard' },
  { y: 2010, v: 4.0, u: 'BDT/Piece', s: 'Dhaka Neighborhood Benchmark' },
  { y: 2005, v: 2.5, u: 'BDT/Piece', s: 'Dhaka Neighborhood Benchmark' },
  { y: 2000, v: 1.5, u: 'BDT/Piece', s: 'Campus Adda Standard' },
  { y: 1995, v: 1.0, u: 'BDT/Piece', s: '1 Taka 1 Shingara Golden Era' }
];

export function generateSql(): string[] {
  const sql: string[] = ['PRAGMA foreign_keys = OFF;'];

  for (const item of FUCHKA_SERIES) {
    const id = `FUCHKA_PLATE_BDT:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'FUCHKA_PLATE_BDT', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s.replace(/'/g, "''")}', NULL);`
    );
  }

  for (const item of DHAKA_TRAFFIC_SPEED_SERIES) {
    const id = `DHAKA_TRAFFIC_SPEED_KMH:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'DHAKA_TRAFFIC_SPEED_KMH', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s.replace(/'/g, "''")}', NULL);`
    );
  }

  for (const item of SHINGARA_SERIES) {
    const id = `SHINGARA_PIECE_BDT:${item.y}`;
    sql.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${id}', 'SHINGARA_PIECE_BDT', 'ANNUAL', ${item.y}, NULL, ${item.v}, '${item.u}', '${item.s.replace(/'/g, "''")}', NULL);`
    );
  }

  sql.push('PRAGMA foreign_keys = ON;');
  return sql;
}

export function run() {
  const sql = generateSql();
  const outPath = resolve(process.cwd(), 'migrations/0013_seed_viral_stats.sql');
  writeFileSync(outPath, sql.join('\n'), 'utf8');
  console.log(`Generated ${sql.length - 2} SQL records into ${outPath}`);
}

if (import.meta.main) {
  run();
}
