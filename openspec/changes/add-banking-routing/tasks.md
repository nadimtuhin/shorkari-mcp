# Tasks: add-banking-routing

## 1. Data Ingestion & Transformation
- [ ] 1.1 Download and parse `banks.json` from `MdHRShohel/bd-bank-routing` in `scripts/seed-banks.ts`.
- [ ] 1.2 Flatten bank and branch arrays into normalized records for D1 SQLite.
- [ ] 1.3 Assert exactly 11,426 branches across 63 banks are transformed.

## 2. Query Handlers & MCP Tool
- [ ] 2.1 Implement `queryBankBranches` with 9-digit exact match and fuzzy name search in `src/db/queries.ts`.
- [ ] 2.2 Register MCP tool `lookup_bank_routing` with Zod schema validation.
- [ ] 2.3 Author unit tests verifying exact routing query, partial branch query, and payable flag checks.

## Later (not v1)
- [ ] Direct routing number check digit mathematical validator.
- [ ] Mobile Financial Services (bKash, Nagad, Rocket) wallet routing prefixes.
