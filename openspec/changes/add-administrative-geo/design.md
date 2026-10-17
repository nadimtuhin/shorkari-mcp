# Design: add-administrative-geo

## Context
Bangladesh has 4 primary administrative tiers: 8 Divisions (বিভাগ), 64 Districts (জেলা), 494 Upazilas (উপজেলা), and 4,540+ Unions / Urban Thanas. In 2018, the National Implementation Committee for Administrative Reorganisation-Reform (NICAR) updated English spellings of 5 districts. Both historic and current spellings must resolve reliably.

## Goals
- Resolve any Bangladesh postal code, upazila, district, or division in English or Bangla.
- Transparently alias pre-2018 district spellings.
- Provide centroid latitude and longitude for mapping.

## Non-Goals
- Full polygon GeoJSON boundary serving (coordinates and hierarchy only).

## Decisions
1. **Relational Normalization over Raw GeoJSON:**
   - *Decision:* Split raw GeoJSON into relational tables (`divisions`, `districts`, `upazilas`, `postcodes`).
   - *Alternative Considered:* Storing raw GeoJSON blobs.
   - *Rationale:* Allows instant SQL joins and sub-millisecond filtering by parent division/district.
2. **Bilingual Search Matching:**
   - *Decision:* Search queries run against both `name` and `bn_name` columns simultaneously.
   - *Rationale:* User queries frequently mix scripts (e.g. "Dhanmondi" vs "ধানমন্ডি").

## Risks / Trade-offs
- *Risk:* Ambiguous upazila names across different districts (e.g. Sadar upazilas).
- *Mitigation:* Results always return the parent district and division context.

## Extension Seams
- Integration of BBS 2022 Census population and literacy counts into district and upazila tables.
