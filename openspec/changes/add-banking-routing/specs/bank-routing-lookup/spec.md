# Specification: bank-routing-lookup

## ADDED Requirements

### Requirement: Search bank branch by routing number
The system SHALL return exact bank and branch details when queried with a valid 9-digit BEFTN routing number.

#### Scenario: User queries known routing number
- **WHEN** client invokes `lookup_bank_routing` with `query: "010010048"`
- **THEN** system returns bank `AGRANI BANK PLC`, branch `BADHAL BAZAR`, district `BAGERHAT`
- **AND** `payable` status is `true`

### Requirement: Search branches by bank and district
The system SHALL return matching branches when queried with bank name, branch name, or district.

#### Scenario: User queries branches in a specific area
- **WHEN** client invokes `lookup_bank_routing` with `query: "Dhanmondi"` and `district: "DHAKA"`
- **THEN** system returns matching branches across all banks in Dhanmondi, Dhaka

### Requirement: Flag non-payable settlement endpoints
The system SHALL warn when a queried branch is a non-payable settlement endpoint.

#### Scenario: Client queries a non-payable clearing endpoint
- **WHEN** client looks up a non-payable routing code
- **THEN** response explicitly marks `payable: false` and includes a warning
