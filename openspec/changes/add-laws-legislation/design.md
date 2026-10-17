# Design: add-laws-legislation

## Context
`bdlaws.minlaw.gov.bd` hosts all published legislation of Bangladesh. The community repo `sakhadib/Bangladesh-Legal-Acts-Dataset` contains full JSON structures of 1,484 acts spanning British colonial statutes (1836+), Pakistan-era acts, and independent Bangladesh legislation.

## Goals
- Serve instant metadata searches over 1,484 acts in sub-5ms from D1 SQLite.
- Provide direct URLs to full text on `bdlaws.minlaw.gov.bd`.
- Support filtering by active vs repealed status.

## Non-Goals
- Full-text storage of multi-hundred-page penal code bodies in D1 (statute metadata and section counts in D1; full section bodies linked via URL or external blob storage).

## Decisions
1. **Lightweight Metadata Indexing in D1:**
   - *Decision:* Index `(id, act_no, year, title_en, title_bn, is_repealed, sections_count, source_url)`.
   - *Alternative Considered:* Storing full act text in D1 SQLite.
   - *Rationale:* Keeps total database size under 20MB while providing complete lookup capabilities for AI agents.

## Risks / Trade-offs
- *Risk:* Post-2024 newly enacted gazette acts.
- *Mitigation:* BG Press crawler integration in future phase.

## Extension Seams
- Act section lookup (`get_law_section`) via Cloudflare R2 act blob store.
