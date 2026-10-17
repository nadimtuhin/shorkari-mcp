# Specification: macro-indicators

## ADDED Requirements

### Requirement: Retrieve latest macroeconomic snapshot
The system SHALL return the latest available values for GDP growth rate, gross reserves, BPM6 usable reserves, monthly remittance inflow, and central bank policy repo rate.

#### Scenario: Client requests macroeconomic summary
- **WHEN** client invokes `get_macro_snapshot`
- **THEN** system returns an object containing current indicators with report dates and citations
- **AND** both gross and BPM6 reserves are explicitly differentiated

### Requirement: Query time-series for specific indicator
The system SHALL retrieve historical time series for any valid series identifier (e.g. `GDP_GROWTH_ANNUAL`, `RESERVES_BPM6_USD`).

#### Scenario: Client requests GDP growth history
- **WHEN** client requests series `GDP_GROWTH_ANNUAL` between 2000 and 2025
- **THEN** system returns sorted array of yearly percentage points
