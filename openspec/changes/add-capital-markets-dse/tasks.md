# Tasks: add-capital-markets-dse

## 1. Schema & Migration
- [ ] 1.1 Add `stock_quotes_daily`, `market_indices_daily`, and `listed_companies` tables to migrations.
- [ ] 1.2 Create compound indexes on `(symbol, trade_date DESC)` and `(index_name, trade_date DESC)`.

## 2. Ingestion & Historical Seeding
- [ ] 2.1 Build `scripts/seed-dse-history.ts` to ingest historical DSE EOD prices and benchmark indices.
- [ ] 2.2 Create company symbol alias resolver dictionary (e.g. "Beximco" -> "BEXIMCO", "Grameenphone" -> "GP").

## 3. Query Handlers & MCP Tools
- [ ] 3.1 Implement `queryStockHistory` and `queryMarketIndex` in `src/db/queries.ts`.
- [ ] 3.2 Register `get_stock_history`, `get_market_indices`, and `get_company_fundamentals` MCP tools.
- [ ] 3.3 Author unit tests for symbol resolution, date range filtering, and empty result handling.

## 4. EOD Daily Synchronization
- [ ] 4.1 Write `scrapers/dse_eod_sync.ts` to pull daily closing prices from DSE archive table.
- [ ] 4.2 Add scheduled GitHub Action running on trading days at 15:30 BST.

## Later (not v1)
- [ ] Intraday 15-minute delayed snapshot bars.
- [ ] Chittagong Stock Exchange (CSE) cross-listing data.
