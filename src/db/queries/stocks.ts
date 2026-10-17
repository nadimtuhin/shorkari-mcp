import type { DatabaseExecutor } from '../adapter';

export interface ListedCompanyRecord {
  symbol: string;
  name: string;
  sector: string;
  category?: string | null;
  is_shariah?: number;
  paid_up_capital_mn?: number | null;
}

export interface StockQuoteRecord {
  id?: number;
  symbol: string;
  trade_date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  value_mn: number;
}

export interface MarketIndexRecord {
  id?: number;
  index_name: string;
  trade_date: string;
  index_value: number;
  change_points?: number | null;
  change_percent?: number | null;
  total_turnover_bdt_crore?: number | null;
}

export async function insertListedCompany(db: DatabaseExecutor, comp: ListedCompanyRecord) {
  await db.run(
    `INSERT OR REPLACE INTO listed_companies 
     (symbol, name, sector, category, is_shariah, paid_up_capital_mn) 
     VALUES (?, ?, ?, ?, ?, ?)`,
    [comp.symbol, comp.name, comp.sector, comp.category ?? null, comp.is_shariah ?? 0, comp.paid_up_capital_mn ?? null]
  );
}

export async function insertDailyStockQuote(db: DatabaseExecutor, quote: StockQuoteRecord) {
  await db.run(
    `INSERT OR REPLACE INTO stock_quotes_daily 
     (symbol, trade_date, open, high, low, close, volume, value_mn) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [quote.symbol, quote.trade_date, quote.open, quote.high, quote.low, quote.close, quote.volume, quote.value_mn]
  );
}

export async function insertDailyMarketIndex(db: DatabaseExecutor, idx: MarketIndexRecord) {
  await db.run(
    `INSERT OR REPLACE INTO market_indices_daily 
     (index_name, trade_date, index_value, change_points, change_percent, total_turnover_bdt_crore) 
     VALUES (?, ?, ?, ?, ?, ?)`,
    [idx.index_name, idx.trade_date, idx.index_value, idx.change_points ?? null, idx.change_percent ?? null, idx.total_turnover_bdt_crore ?? null]
  );
}

const COMMON_ALIASES: Record<string, string> = {
  'square pharma': 'SQURPHARMA',
  'square pharmaceuticals': 'SQURPHARMA',
  'grameenphone': 'GP',
  'beximco': 'BEXIMCO',
  'beximco pharma': 'BXPHARMA',
  'islami bank': 'ISLAMIBANK',
  'brac bank': 'BRACBANK',
  'olympic': 'OLYMPIC',
  'batbc': 'BATBC',
  'british american tobacco': 'BATBC',
  'renata': 'RENATA',
  'walton': 'WALTONHIL',
  'marico': 'MARICO',
  'lhbl': 'LHBL',
  'lafarge': 'LHBL'
};

export function resolveStockSymbol(input: string): string {
  const clean = input.trim().toLowerCase();
  return COMMON_ALIASES[clean] || input.trim().toUpperCase();
}

export async function queryStockHistory(
  db: DatabaseExecutor,
  opts: { symbol: string; start_date?: string; end_date?: string; limit?: number }
) {
  const sym = resolveStockSymbol(opts.symbol);
  const limit = Math.min(opts.limit ?? 30, 365);
  const start = opts.start_date ?? '1990-01-01';
  const end = opts.end_date ?? '2099-12-31';

  return db.all<StockQuoteRecord>(
    `SELECT symbol, trade_date, open, high, low, close, volume, value_mn 
     FROM stock_quotes_daily 
     WHERE symbol = ? AND trade_date BETWEEN ? AND ? 
     ORDER BY trade_date DESC LIMIT ?`,
    [sym, start, end, limit]
  );
}

export async function queryMarketIndex(
  db: DatabaseExecutor,
  opts: { index_name: string; start_date?: string; end_date?: string; limit?: number }
) {
  const name = opts.index_name.trim().toUpperCase();
  const limit = Math.min(opts.limit ?? 30, 365);
  const start = opts.start_date ?? '1990-01-01';
  const end = opts.end_date ?? '2099-12-31';

  return db.all<MarketIndexRecord>(
    `SELECT index_name, trade_date, index_value, change_points, change_percent, total_turnover_bdt_crore 
     FROM market_indices_daily 
     WHERE index_name = ? AND trade_date BETWEEN ? AND ? 
     ORDER BY trade_date DESC LIMIT ?`,
    [name, start, end, limit]
  );
}

export async function queryCompanyFundamentals(db: DatabaseExecutor, opts: { symbol: string }) {
  const sym = resolveStockSymbol(opts.symbol);
  return db.get<ListedCompanyRecord>(
    `SELECT symbol, name, sector, category, is_shariah, paid_up_capital_mn 
     FROM listed_companies 
     WHERE symbol = ?`,
    [sym]
  );
}
