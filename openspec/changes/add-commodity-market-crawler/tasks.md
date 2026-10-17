# Tasks: add-commodity-market-crawler

## 1. Bengali Parser Utilities
- [ ] 1.1 Implement `toAsciiDigits`, `parseBnFloat`, and `parseBnRange` in `src/utils/bangla.ts`.
- [ ] 1.2 Write unit tests for Bengali numeral strings and edge cases (single values, missing ranges).

## 2. Crawler Implementation
- [ ] 2.1 Build `scrapers/dam_commodity.ts` using fetch and Cheerio HTML table parser.
- [ ] 2.2 Create fixture test `tests/dam_scraper.test.ts` testing real DAM HTML snapshot.
- [ ] 2.3 Implement D1 SQLite insertion script for daily price rows.

## 3. Query Handlers & MCP Tool
- [ ] 3.1 Implement `queryCommodityPrices` with commodity and district filters in `src/db/queries.ts`.
- [ ] 3.2 Register MCP tool `get_commodity_price` with Zod schema.
- [ ] 3.3 Author end-to-end tool query tests.

## 4. Automation Workflow
- [ ] 4.1 Create `.github/workflows/daily-sync.yml` running daily at 08:30 AM BST.

## Later (not v1)
- [ ] TCB (Trading Corporation of Bangladesh) truck sale price sync.
- [ ] Seasonal price anomaly alert flags.
