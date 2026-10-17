import { describe, it, expect, beforeEach } from 'vitest';
import { createTestDatabase } from '../src/db/adapter';
import {
  queryStockHistory,
  queryMarketIndex,
  queryCompanyFundamentals,
  insertListedCompany,
  insertDailyStockQuote,
  insertDailyMarketIndex
} from '../src/db/queries/stocks';

describe('Capital Markets & DSE Equities Query Engine', () => {
  let db: any;

  beforeEach(async () => {
    db = createTestDatabase();

    await insertListedCompany(db, {
      symbol: 'SQURPHARMA',
      name: 'Square Pharmaceuticals PLC',
      sector: 'Pharmaceuticals & Chemicals',
      category: 'A',
      is_shariah: 1,
      paid_up_capital_mn: 8864.5
    });

    await insertDailyStockQuote(db, {
      symbol: 'SQURPHARMA',
      trade_date: '2026-10-15',
      open: 215.0,
      high: 218.5,
      low: 214.2,
      close: 217.8,
      volume: 450200,
      value_mn: 98.15
    });

    await insertDailyStockQuote(db, {
      symbol: 'SQURPHARMA',
      trade_date: '2026-10-14',
      open: 212.0,
      high: 215.5,
      low: 211.0,
      close: 214.8,
      volume: 380100,
      value_mn: 81.65
    });

    await insertDailyMarketIndex(db, {
      index_name: 'DSEX',
      trade_date: '2026-10-15',
      index_value: 5850.45,
      change_points: 24.3,
      change_percent: 0.42,
      total_turnover_bdt_crore: 654.8
    });
  });

  it('queries stock history by exact symbol in descending order', async () => {
    const res = await queryStockHistory(db, { symbol: 'SQURPHARMA' });
    expect(res.length).toBe(2);
    expect(res[0].trade_date).toBe('2026-10-15');
    expect(res[0].close).toBe(217.8);
  });

  it('resolves common company name aliases to trade symbols', async () => {
    const res = await queryStockHistory(db, { symbol: 'Square Pharmaceuticals' });
    expect(res.length).toBe(2);
    expect(res[0].symbol).toBe('SQURPHARMA');
  });

  it('retrieves company fundamentals and Shariah compliance status', async () => {
    const fundamentals = await queryCompanyFundamentals(db, { symbol: 'SQURPHARMA' });
    expect(fundamentals).not.toBeNull();
    expect(fundamentals?.name).toBe('Square Pharmaceuticals PLC');
    expect(fundamentals?.is_shariah).toBe(1);
    expect(fundamentals?.sector).toBe('Pharmaceuticals & Chemicals');
  });

  it('retrieves benchmark index daily history', async () => {
    const res = await queryMarketIndex(db, { index_name: 'DSEX' });
    expect(res.length).toBe(1);
    expect(res[0].index_value).toBe(5850.45);
    expect(res[0].total_turnover_bdt_crore).toBe(654.8);
  });
});
