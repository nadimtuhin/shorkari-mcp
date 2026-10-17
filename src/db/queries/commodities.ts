import type { DatabaseExecutor } from '../adapter';

export interface CommodityPriceRecord {
  id?: number;
  price_date: string;
  market_name: string;
  district: string;
  commodity_en: string;
  commodity_bn: string;
  category: string;
  unit: string;
  wholesale_min?: number | null;
  wholesale_max?: number | null;
  retail_min: number;
  retail_max: number;
}

export async function insertCommodityPrice(db: DatabaseExecutor, item: CommodityPriceRecord) {
  await db.run(
    `INSERT INTO commodity_prices 
     (price_date, market_name, district, commodity_en, commodity_bn, category, unit, wholesale_min, wholesale_max, retail_min, retail_max)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      item.price_date,
      item.market_name,
      item.district,
      item.commodity_en,
      item.commodity_bn,
      item.category,
      item.unit,
      item.wholesale_min ?? null,
      item.wholesale_max ?? null,
      item.retail_min,
      item.retail_max
    ]
  );
}

export async function queryCommodityPrices(
  db: DatabaseExecutor,
  opts: { commodity?: string; district?: string; date?: string; limit?: number }
) {
  const limit = Math.min(opts.limit ?? 20, 100);
  const whereClauses: string[] = [];
  const params: any[] = [];

  if (opts.commodity) {
    const q = opts.commodity.trim();
    whereClauses.push('(commodity_en LIKE ? OR commodity_bn LIKE ?)');
    params.push(`%${q}%`, `%${q}%`);
  }

  if (opts.district) {
    whereClauses.push('district LIKE ?');
    params.push(`%${opts.district.trim()}%`);
  }

  if (opts.date) {
    whereClauses.push('price_date = ?');
    params.push(opts.date);
  }

  const whereSql = whereClauses.length > 0 ? `WHERE ${whereClauses.join(' AND ')}` : '';
  params.push(limit);

  return db.all<CommodityPriceRecord>(
    `SELECT price_date, market_name, district, commodity_en, commodity_bn, category, unit, wholesale_min, wholesale_max, retail_min, retail_max 
     FROM commodity_prices 
     ${whereSql} 
     ORDER BY price_date DESC, commodity_en ASC LIMIT ?`,
    params
  );
}
