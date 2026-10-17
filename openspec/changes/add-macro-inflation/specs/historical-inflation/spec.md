# Specification: historical-inflation

## ADDED Requirements

### Requirement: Query annual historical inflation
The system SHALL retrieve official annual inflation percentages from 1960 to the latest completed year.

#### Scenario: Client queries multi-year inflation
- **WHEN** client invokes `get_inflation_history` with `start_year: 2015` and `end_year: 2024`
- **THEN** system returns 10 yearly records containing inflation rate and source citation

### Requirement: Return base-year metadata on CPI index queries
The system SHALL tag any CPI index number with its active base-year period (`2021-22` or `2005-06`).

#### Scenario: Client inspects CPI index series
- **WHEN** client requests monthly CPI figures across the April 2023 transition
- **THEN** pre-April 2023 rows specify `base_year: "2005-06"`
- **AND** post-April 2023 rows specify `base_year: "2021-22"`
