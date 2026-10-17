# Change Proposal: add-macro-inflation

## Why
AI agents analyzing the Bangladeshi economy need authoritative inflation numbers, Consumer Price Index (CPI) metrics, foreign exchange reserves, remittances, and GDP growth without getting hallucinated numbers or falling into the April 2023 BBS base-year transition trap.

## What Changes
- Ingest 66 years of World Bank annual Bangladesh inflation data (1960–present) and central bank monthly releases.
- Implement explicit base-year labeling (`base: "2021-22"` vs `base: "2005-06"`).
- Implement MCP tools:
  - `get_inflation_history`: Query annual or monthly CPI and inflation rates with date bounds.
  - `get_macro_snapshot`: Retrieve current gross and BPM6 reserves, inward remittances, GDP growth, and policy rate.

## Capabilities

### New Capabilities
- `macro-indicators`: Edge query engine for national economic metrics (GDP, reserves, remittances).
- `historical-inflation`: Time series data store for Bangladesh Consumer Price Index and inflation.

### Modified Capabilities
None.

## Impact
Allows models to reason over multi-decade economic trends in Bangladesh, calculate real wage adjustments, and provide accurate economic citations.
