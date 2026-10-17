# Tasks: add-laws-legislation

## 1. Data Parsing & Ingestion
- [ ] 1.1 Download and transform act metadata from `sakhadib/Bangladesh-Legal-Acts-Dataset` in `scripts/seed-laws.ts`.
- [ ] 1.2 Seed 1,484 act records into D1 `legal_acts` table.
- [ ] 1.3 Assert title and year indexes exist.

## 2. Query Handlers & MCP Tool
- [ ] 2.1 Implement `queryLegalActs` with keyword and `is_repealed` filters in `src/db/queries.ts`.
- [ ] 2.2 Register MCP tool `search_laws` with Zod parameter validation.
- [ ] 2.3 Author unit tests verifying title search, year filtering, and status checking.

## Later (not v1)
- [ ] Ingest full section texts into Cloudflare R2 object store.
- [ ] BG Press extra-gazette crawler for newly passed ordinances.
