# Change Proposal: add-administrative-geo

## Why
AI agents analyzing logistics, regional demographics, or user addresses in Bangladesh require an authoritative administrative hierarchy mapping Divisions, Districts, Upazilas, and Postcodes, with bilingual support (English and Bangla) and historical district aliases.

## What Changes
- Ingest 8 divisions, 64 districts, 494 upazilas, 1,349 postcodes, and bazars from `ifahimreza/bangladesh-geojson`.
- Map 2018 official English transliteration changes (Chittagong -> Chattogram, Bogra -> Bogura, Barisal -> Barishal, etc.).
- Implement MCP tool `lookup_location` resolving names, postcodes, and geocoordinates.

## Capabilities

### New Capabilities
- `geo-hierarchy-lookup`: Bilingual search and hierarchy resolver for administrative boundaries and postal codes.

### Modified Capabilities
None.

## Impact
Enables automated address parsing, postal code lookups, and regional filtering for ecommerce, supply chain, and government services.
