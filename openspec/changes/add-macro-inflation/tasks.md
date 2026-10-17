# Tasks: add-macro-inflation

## 1. Ingestion & Seed Builder
- [ ] 1.1 Implement World Bank API fetcher in `scripts/seed-macro.ts` for inflation and GDP series.
- [ ] 1.2 Seed historical annual series into D1 `macro_indicators` table.
- [ ] 1.3 Add seed verification test asserting record count >= 60.

## 2. Database Queries & MCP Tools
- [ ] 2.1 Implement `queryInflationHistory` with year and frequency filtering in `src/db/queries.ts`.
- [ ] 2.2 Implement `queryLatestMacroSnapshot` returning reserves, remittances, and inflation.
- [ ] 2.3 Register MCP tools `get_inflation_history` and `get_macro_snapshot`.
- [ ] 2.4 Author unit tests validating tool responses against test fixtures.

## 3. Monthly Central Bank Ingestion
- [ ] 3.1 Create script `scrapers/bb_monthly_sync.ts` to update latest monthly inflation and reserves.
- [ ] 3.2 Add error handling and fallback for WAF rate-limiting.

## Later (not v1)
- [ ] District-level urban vs rural CPI breakdown.
- [ ] Wage Rate Index (WRI) sectoral indexing.
