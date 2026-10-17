import { describe, it, expect, beforeEach } from 'vitest';
import { createTestDatabase } from './helpers/test-db';
import { queryCommodityPrices, insertCommodityPrice } from '../src/db/queries/commodities';

describe('Commodity Market Pricing Query Engine', () => {
  let db: any;

  beforeEach(async () => {
    db = createTestDatabase();

    await insertCommodityPrice(db, {
      price_date: '2026-10-17',
      market_name: 'Karwan Bazar',
      district: 'Dhaka',
      commodity_en: 'Onion (Local)',
      commodity_bn: 'দেশি পেঁয়াজ',
      category: 'Spices',
      unit: 'kg',
      wholesale_min: 55.0,
      wholesale_max: 58.0,
      retail_min: 60.0,
      retail_max: 65.0
    });

    await insertCommodityPrice(db, {
      price_date: '2026-10-17',
      market_name: 'Khatunganj',
      district: 'Chattogram',
      commodity_en: 'Soybean Oil',
      commodity_bn: 'সয়াবিন তেল',
      category: 'Oil',
      unit: 'liter',
      wholesale_min: 155.0,
      wholesale_max: 158.0,
      retail_min: 163.0,
      retail_max: 165.0
    });
  });

  it('queries commodity price by English keyword and district', async () => {
    const res = await queryCommodityPrices(db, { commodity: 'onion', district: 'Dhaka' });
    expect(res.length).toBe(1);
    expect(res[0].commodity_en).toBe('Onion (Local)');
    expect(res[0].retail_min).toBe(60.0);
    expect(res[0].retail_max).toBe(65.0);
  });

  it('queries commodity price by Bengali keyword', async () => {
    const res = await queryCommodityPrices(db, { commodity: 'পেঁয়াজ' });
    expect(res.length).toBe(1);
    expect(res[0].commodity_bn).toBe('দেশি পেঁয়াজ');
  });
});
