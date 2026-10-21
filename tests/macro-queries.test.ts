import { describe, it, expect, beforeEach } from 'vitest';
import { createTestDatabase } from './helpers/test-db';
import { queryInflationHistory, queryMacroSnapshot, insertMacroIndicator } from '../src/db/queries/macro';

describe('Macro Indicators Query Engine', () => {
  let db: any;

  beforeEach(async () => {
    db = createTestDatabase();
    await insertMacroIndicator(db, {
      id: 'CPI:2024', series_id: 'INFLATION_CPI_ANNUAL', frequency: 'ANNUAL',
      period_year: 2024, value: 10.46, unit: '%', source_agency: 'World Bank', base_year: '2021-22'
    });
    await insertMacroIndicator(db, {
      id: 'CPI:2022', series_id: 'INFLATION_CPI_ANNUAL', frequency: 'ANNUAL',
      period_year: 2022, value: 7.7, unit: '%', source_agency: 'World Bank', base_year: '2005-06'
    });
    await insertMacroIndicator(db, {
      id: 'RES:BPM6:2026-09', series_id: 'RESERVES_BPM6_USD', frequency: 'MONTHLY',
      period_year: 2026, period_month: 9, value: 31198.9, unit: 'USD_MN', source_agency: 'Bangladesh Bank'
    });
    await insertMacroIndicator(db, {
      id: 'CPI:M:2024-07', series_id: 'INFLATION_CPI_MONTHLY', frequency: 'MONTHLY',
      period_year: 2024, period_month: 7, value: 11.66, unit: '%', source_agency: 'BBS', base_year: '2021-22'
    });
    await insertMacroIndicator(db, {
      id: 'CPI:M:2024-06', series_id: 'INFLATION_CPI_MONTHLY', frequency: 'MONTHLY',
      period_year: 2024, period_month: 6, value: 9.72, unit: '%', source_agency: 'BBS', base_year: '2021-22'
    });
  });

  it('filters inflation history by year range in descending order', async () => {
    const results = await queryInflationHistory(db, { start_year: 2020, end_year: 2025 });
    expect(results.length).toBe(2);
    expect(results[0].period_year).toBe(2024);
    expect(results[0].base_year).toBe('2021-22');
  });

  it('queries month-by-month inflation when frequency is MONTHLY', async () => {
    const monthly = await queryInflationHistory(db, { start_year: 2024, end_year: 2024, frequency: 'MONTHLY' });
    expect(monthly.length).toBe(2);
    expect(monthly[0].period_month).toBe(7);
    expect(monthly[0].inflation_rate).toBe(11.66);
    expect(monthly[1].period_month).toBe(6);
    expect(monthly[1].inflation_rate).toBe(9.72);
  });

  it('retrieves latest macro snapshot across indicators', async () => {
    const snapshot = await queryMacroSnapshot(db);
    expect(snapshot.reserves_bpm6_usd).toBe(31198.9);
    expect(snapshot.latest_inflation_rate).toBe(10.46);
  });
});
