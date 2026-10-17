# Specification: dam-market-crawler

## ADDED Requirements

### Requirement: Parse HTML daily price tables
The crawler SHALL extract commodity names, units, and price ranges from `market.dam.gov.bd` HTML tables.

#### Scenario: Crawler ingests live report HTML
- **WHEN** crawler fetches the daily report page
- **THEN** it parses table rows and identifies commodity names in English and Bengali
- **AND** strips whitespace and HTML formatting tags

### Requirement: Normalize Bengali numerals and ranges
The crawler SHALL convert Bengali numeric characters (`০-৯`) and range strings into floating point minimum and maximum numbers.

#### Scenario: Crawler encounters price range string
- **WHEN** raw price cell contains `"৭২.০০ - ৭৫.০০"`
- **THEN** crawler extracts `min: 72.0` and `max: 75.0`
