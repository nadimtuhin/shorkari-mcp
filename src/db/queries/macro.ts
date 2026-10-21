import type { DatabaseExecutor } from '../adapter';

export interface MacroRecord {
  id: string;
  series_id: string;
  frequency: string;
  period_year: number;
  period_month?: number | null;
  value: number;
  unit: string;
  source_agency: string;
  base_year?: string | null;
}

export async function insertMacroIndicator(db: DatabaseExecutor, rec: MacroRecord) {
  await db.run(
    `INSERT OR REPLACE INTO macro_indicators 
     (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [rec.id, rec.series_id, rec.frequency, rec.period_year, rec.period_month ?? null, rec.value, rec.unit, rec.source_agency, rec.base_year ?? null]
  );
}

export async function queryInflationHistory(
  db: DatabaseExecutor,
  opts: { start_year?: number; end_year?: number; frequency?: 'ANNUAL' | 'MONTHLY' } = {}
) {
  const start = opts.start_year ?? 1960;
  const end = opts.end_year ?? new Date().getFullYear();
  const freq = opts.frequency === 'MONTHLY' ? 'MONTHLY' : 'ANNUAL';
  const seriesId = freq === 'MONTHLY' ? 'INFLATION_CPI_MONTHLY' : 'INFLATION_CPI_ANNUAL';

  return db.all<any>(
    `SELECT period_year, period_month, value as inflation_rate, unit, source_agency, base_year 
     FROM macro_indicators 
     WHERE series_id = ? AND period_year BETWEEN ? AND ? 
     ORDER BY period_year DESC, period_month DESC`,
    [seriesId, start, end]
  );
}

export async function queryMacroSnapshot(db: DatabaseExecutor) {
  const latestInflation = await db.get<any>(
    "SELECT value FROM macro_indicators WHERE series_id = 'INFLATION_CPI_ANNUAL' ORDER BY period_year DESC LIMIT 1"
  );
  const latestReserves = await db.get<any>(
    "SELECT value FROM macro_indicators WHERE series_id = 'RESERVES_BPM6_USD' ORDER BY period_year DESC, period_month DESC LIMIT 1"
  );
  return {
    latest_inflation_rate: latestInflation?.value ?? null,
    reserves_bpm6_usd: latestReserves?.value ?? null
  };
}
