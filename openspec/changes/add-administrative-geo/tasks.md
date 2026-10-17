# Tasks: add-administrative-geo

## 1. Data Parsing & Ingestion
- [ ] 1.1 Ingest divisions, districts, upazilas, and postcodes in `scripts/seed-geo.ts`.
- [ ] 1.2 Build pre-2018 alias translation table in `src/utils/geo-aliases.ts`.
- [ ] 1.3 Verify database migration creates indexes on `post_code` and bilingual names.

## 2. Query Handlers & MCP Tool
- [ ] 2.1 Implement `queryLocationHierarchy` in `src/db/queries.ts`.
- [ ] 2.2 Register MCP tool `lookup_location` with bilingual query parsing.
- [ ] 2.3 Author unit tests verifying post code search, Bengali query search, and alias resolution.

## Later (not v1)
- [ ] Union Parisad (UP) granular mapping.
- [ ] GeoJSON polygon boundary export.
