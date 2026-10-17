# Specification: geo-hierarchy-lookup

## ADDED Requirements

### Requirement: Resolve location hierarchy by postal code
The system SHALL return the post office name, upazila, district, and division when queried with a valid 4-digit postal code.

#### Scenario: Client queries postal code
- **WHEN** client invokes `lookup_location` with `query: "1209"`
- **THEN** system returns post office `Jigatola`, upazila `Dhanmondi`, district `Dhaka`, division `Dhaka`

### Requirement: Search location by Bangla or English name
The system SHALL match administrative units regardless of whether the query is in Latin or Bengali script.

#### Scenario: Client queries location in Bengali script
- **WHEN** client invokes `lookup_location` with `query: "সিলেট"`
- **THEN** system returns division and district records for Sylhet

### Requirement: Support historic transliteration aliases
The system SHALL map pre-2018 district spellings to official designations.

#### Scenario: Client queries legacy spelling
- **WHEN** client invokes `lookup_location` with `query: "Chittagong"`
- **THEN** system resolves record to `Chattogram` and includes historical alias note
