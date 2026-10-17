# Specification: laws-search

## ADDED Requirements

### Requirement: Search acts by title keyword
The system SHALL return matching acts when queried with title keywords in English or Bangla.

#### Scenario: Client searches for cyber legislation
- **WHEN** client invokes `search_laws` with `query: "Cyber Security"`
- **THEN** system returns Cyber Security Act metadata with year and official link

### Requirement: Filter by active vs repealed status
The system SHALL filter out repealed statutes when `active_only: true` is requested.

#### Scenario: Client searches active companies law
- **WHEN** client calls `search_laws` with `query: "Companies"` and `active_only: true`
- **THEN** system returns Companies Act, 1994 and omits repealed 1913 act
