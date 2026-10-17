# Design: add-capital-markets-dse

## Context
DSE listed equities encompass ~400 instruments across 22 sectors. While live scraping tools like `bdshare` hit `dsebd.org` on every call, doing so during an AI assistant turn causes 5-15s latency and triggers IP blocks. We store historical EOD data in Cloudflare D1 with compound indexes on `(symbol, trade_date DESC)`.

## Goals
- Serve historical daily OHLCV stock quotes with sub-5ms latency from D1.
- Track benchmark index values (DSEX, DS30, DSES Shariah) and total market turnover.
- Provide fundamentals metadata (Sector, Category A/B/N/Z, Shariah membership).

## Non-Goals
- Intraday second-by-second orderbook / tick data (EOD daily bars only).
- Live trade execution or brokerage integration.

## Decisions
1. **End-of-Day (EOD) Aggregation vs Tick-level:**
   - *Decision:* Store daily OHLCV bars.
   - *Alternative Considered:* Intraday 1-minute bars.
   - *Rationale:* Keeps storage within D1 limits (<100MB for 10+ years across top 100 instruments) while fulfilling 99% of economic and investment research prompts.
2. **Corporate Action Adjustment Flag:**
   - *Decision:* Store raw close price and record dividend/bonus/split events as metadata.
   - *Alternative Considered:* Automatically backward-adjust historical prices.
   - *Rationale:* Preserves official reported history required for tax filings and audit workpapers.
3. **Fuzzy Symbol Matching:**
   - *Decision:* Allow querying by common names ("Grameenphone" -> `GP`, "Square Pharma" -> `SQURPHARMA`).
   - *Alternative Considered:* Strict ticker symbols only.
   - *Rationale:* AI assistants and end-users frequently reference company names rather than exact DSE trade codes.

## Risks / Trade-offs
- *Risk:* DSE trading halts or holiday gaps in time series.
- *Mitigation:* Queries return explicit trading date lists; missing weekend/holiday rows are expected in financial calendars.

## Extension Seams
- Fundamental ratios table (`eps`, `nav`, `pe_ratio`) can be updated from company quarterly filings without breaking the daily price schema.
