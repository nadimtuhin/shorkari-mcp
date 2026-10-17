# Specification: stock-quotes-history

## ADDED Requirements

### Requirement: Query company historical OHLCV data
The system SHALL retrieve daily Open, High, Low, Close, Volume, and Value records for any valid DSE trading code within a specified date window.

#### Scenario: User queries stock price history by symbol
- **WHEN** client invokes `get_stock_history` with `symbol: "GP"` and date range
- **THEN** system returns an ordered array of daily OHLCV records
- **AND** records include `trade_date`, `open`, `high`, `low`, `close`, `volume`, and `value_mn`

### Requirement: Resolve company name aliases to trade codes
The system SHALL resolve common Bangladeshi corporate names to official DSE trading symbols.

#### Scenario: User queries by company name
- **WHEN** client passes `symbol: "Square Pharmaceuticals"`
- **THEN** system resolves the query to trade code `SQURPHARMA` and returns the price series

### Requirement: Retrieve company fundamentals and Shariah compliance
The system SHALL return sector classification, paid-up capital, category, and DSES Shariah index membership.

#### Scenario: Client checks Shariah index status
- **WHEN** client calls `get_company_fundamentals` with `symbol: "ISLAMIBANK"`
- **THEN** response indicates `is_shariah: true` and sector `Bank`
