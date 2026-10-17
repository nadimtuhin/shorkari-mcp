# Specification: daily-commodity-prices

## ADDED Requirements

### Requirement: Query daily commodity price by item and district
The system SHALL return current retail and wholesale price ranges when queried by commodity name and optional district.

#### Scenario: Client queries price of onion in Dhaka
- **WHEN** client invokes `get_commodity_price` with `commodity: "onion"` and `district: "Dhaka"`
- **THEN** system returns matching records for local and imported onion
- **AND** response includes `retail_min`, `retail_max`, `unit`, and `price_date`

### Requirement: Query price trend across dates
The system SHALL return historical prices for an item over a specified date range.

#### Scenario: Client checks potato price movement
- **WHEN** client requests price history for "potato" over the past 30 days
- **THEN** system returns daily price records ordered chronologically
