# Design: add-banking-routing

## Context
A BEFTN routing number is a 9-digit string (`BBBZZRRRC`): 3-digit bank code, 2-digit district code, 3-digit branch code, and 1 check digit. Bangladesh Bank clearing systems register 96 settlement endpoints that cannot receive customer transfers. Our storage flags these explicitly.

## Goals
- Provide sub-5ms lookup for any 9-digit routing number or branch name.
- Enforce the `payable = 1` filter to safeguard against invalid payment destinations.
- Support fuzzy matching on common bank abbreviations (e.g. "EBL", "SCB", "IBBL", "BRAC").

## Non-Goals
- Real-time balance checking or account holder verification (requires core banking API).

## Decisions
1. **Direct Ingestion of MdHRShohel Dataset:**
   - *Decision:* Seed directly from `MdHRShohel/bd-bank-routing/data/banks.json`.
   - *Alternative Considered:* Scraping Bangladesh Bank's FID website directly.
   - *Rationale:* MdHRShohel's dataset traces every row to primary bank source PDFs, reconciles bank-code collisions, and is released under CC0.
2. **SQLite Compound Text Index:**
   - *Decision:* Index `(bank_name, branch_name)` and `(district, bank_name)`.
   - *Rationale:* Instant partial string lookups (`LIKE '%DHANMONDI%'`) without full table scans.

## Risks / Trade-offs
- *Risk:* New bank branches opened during the year.
- *Mitigation:* Monthly refresh workflow against bank directory releases.

## Extension Seams
- Future SWIFT BIC code enrichment for international cross-border wires.
