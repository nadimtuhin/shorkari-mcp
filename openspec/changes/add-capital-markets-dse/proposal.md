# Change Proposal: add-capital-markets-dse

## Why
Financial analysts, economic researchers, and AI agents analyzing Bangladesh's macroeconomic health need access to Dhaka Stock Exchange (DSE) historical price performance (OHLCV), benchmark indices (DSEX, DS30, DSES Shariah), market P/E ratios, and company fundamentals without relying on fragile live scraping during assistant conversations.

## What Changes
- Add D1 tables `stock_quotes_daily`, `market_indices_daily`, and `listed_companies`.
- Ingest historical DSE end-of-day price series (OHLCV: Open, High, Low, Close, Volume, Value) and benchmark indices.
- Implement MCP tools:
  - `get_stock_history`: Query historical OHLCV data for listed companies (e.g. SQURPHARMA, GP, BATBC, ISLAMIBANK).
  - `get_market_indices`: Query historical DSEX, DS30, and DSES index performance and total daily turnover.
  - `get_company_fundamentals`: Retrieve sector, P/E ratio, 52-week range, paid-up capital, and Shariah index status.
- Add daily EOD sync action to append new trading day closes.

## Capabilities

### New Capabilities
- `stock-quotes-history`: Time-series query engine for DSE listed equities OHLCV data.
- `market-indices`: Historical benchmark index tracking for DSEX, DS30, and DSES (Shariah).

### Modified Capabilities
None.

## Impact
Enables AI assistants to answer complex financial questions, calculate historical stock returns, track Shariah compliance (DSES), and correlate macroeconomic inflation trends with capital market movements.
