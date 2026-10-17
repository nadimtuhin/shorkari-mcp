# Change Proposal: add-laws-legislation

## Why
Legal compliance, corporate structuring, and policy analysis in Bangladesh require querying national legislation. Sakhawat Adib's legal acts dataset already parsed 1,484 acts from the Ministry of Law's portal (`bdlaws.minlaw.gov.bd`), but it is not currently accessible to edge AI assistants.

## What Changes
- Ingest index of 1,484 Bangladesh Acts and Ordinances (1836 to present) into Cloudflare D1.
- Track enactment year, act number, English/Bangla title, active vs repealed status, and official gazette URLs.
- Implement MCP tool `search_laws` for semantic and keyword queries across Bangladeshi statutes.

## Capabilities

### New Capabilities
- `laws-search`: Search and citation tool for Bangladesh Acts, Ordinances, and statutes.

### Modified Capabilities
None.

## Impact
AI assistants can cite correct statutory laws, check whether an act has been repealed, and reference official legislative texts.
