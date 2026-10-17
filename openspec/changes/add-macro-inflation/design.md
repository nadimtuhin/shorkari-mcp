# Design: add-macro-inflation

## Context
Bangladesh's national inflation numbers are compiled by the Bangladesh Bureau of Statistics (BBS) and published via Bangladesh Bank. A critical pitfall is that in April 2023, BBS shifted the base year from 2005-06 to 2021-22, changing the raw index level. To provide seamless historic queries, we store normalized percent inflation figures alongside explicit base labels.

## Goals
- Provide zero-friction access to 1960–present annual inflation rates and recent monthly point-to-point numbers.
- Differentiate Gross Reserves from IMF BPM6 liquid reserves.
- Return explicit data provenance (World Bank WDI, Bangladesh Bank, BBS).

## Non-Goals
- Forecasting or speculative inflation modeling (historical empirical data only).

## Decisions
1. **World Bank Indicators API as Primary Annual Anchor:**
   - *Decision:* Ingest annual historical data from World Bank API (`FP.CPI.TOTL.ZG`, `NY.GDP.MKTP.KD.ZG`).
   - *Alternative Considered:* Scraping 30 years of scanned BBS PDF bulletins.
   - *Rationale:* Official World Bank WDI dataset is already verified, clean, machine-readable, and free from OCR noise.
2. **Dual Series Storage:**
   - *Decision:* Maintain `series_id` partition keys (`INFLATION_CPI_ANNUAL`, `INFLATION_CPI_MONTHLY`, `RESERVES_BPM6_USD`).
   - *Alternative Considered:* Single monolithic wide table.
   - *Rationale:* Easy addition of future series (e.g. food inflation, non-food inflation, wage rate index).

## Risks / Trade-offs
- *Risk:* Bangladesh Bank monthly inflation page is behind Fortinet WAF.
- *Mitigation:* Monthly figures are synced through resilient workers and cached permanently in D1.

## Extension Seams
- Wage Rate Index (WRI) and sectoral inflation breakdowns can be added to `macro_indicators` table using new `series_id` tags.
