# Specification: d1-storage-layer

## ADDED Requirements

### Requirement: Execute parameterized SQLite queries
The D1 storage layer SHALL execute parameterized SQL queries to prevent SQL injection and return typed result rows.

#### Scenario: Execute valid read query
- **WHEN** query executor receives a SQL statement with parameters
- **THEN** it executes against the bound D1 database instance
- **AND** returns typed rows in sub-10ms

### Requirement: Handle database migration and bootstrapping
The storage layer SHALL apply schema migrations deterministically from `migrations/*.sql`.

#### Scenario: Bootstrap clean database
- **WHEN** migrations are executed on an empty D1 instance
- **THEN** all tables (`macro_indicators`, `commodity_prices`, `bank_branches`, `divisions`, `districts`, `upazilas`, `legal_acts`) and indexes are created without error
