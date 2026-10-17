# Specification: market-indices

## ADDED Requirements

### Requirement: Query benchmark index historical time series
The system SHALL return daily closing values, points change, and percentage change for DSE benchmark indices (`DSEX`, `DS30`, `DSES`).

#### Scenario: Client requests DSEX broad market index history
- **WHEN** client invokes `get_market_indices` with `index: "DSEX"`
- **THEN** system returns daily rows with `date`, `index_value`, `change_points`, and `change_percent`

### Requirement: Track daily market turnover and trade volume
The system SHALL provide total daily market turnover in BDT Crore, total trades count, and total volume traded.

#### Scenario: Client requests market turnover on a specific date
- **WHEN** client queries market stats for a valid trading date
- **THEN** system returns `total_turnover_bdt_crore`, `total_trades`, and `total_volume`
