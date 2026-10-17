# Design: add-commodity-market-crawler

## Context
DAM (`market.dam.gov.bd`) compiles daily market prices from district marketing officers. Prices are rendered in Kalpurush Bengali font with numeric strings like `"৭২.০০ - ৭৫.০০"` and commodity categories (Grains, Pulses, Spices, Vegetables, Fish, Meat).

## Goals
- Parse HTML daily reports into structured records `{ commodity_en, commodity_bn, wholesale_min, wholesale_max, retail_min, retail_max, unit, district, date }`.
- Normalize Bengali numerals and ranges into standard IEEE floats.
- Keep historical price records in D1 with indexed queries.

## Non-Goals
- Live instant scraping on user prompt (batch EOD ingestion to protect user response speed).

## Decisions
1. **Normalization at Extraction Time:**
   - *Decision:* Convert all Bengali digits to ASCII floats before inserting into SQLite.
   - *Rationale:* Allows standard SQL numeric comparisons (`WHERE retail_max <= 100`) and aggregations.
2. **Scheduled GitHub Action Runner:**
   - *Decision:* Run daily crawler on GitHub Actions runner with retry.
   - *Rationale:* Zero infrastructure cost; captures morning market reports reliably.

## Risks / Trade-offs
- *Risk:* DAM website schema changes or downtime.
- *Mitigation:* Scraper includes schema assertions and falls back to previous day's verified baseline if the upstream site is down.

## Extension Seams
- Future cross-referencing with Trading Corporation of Bangladesh (TCB) open-market truck sale prices.
