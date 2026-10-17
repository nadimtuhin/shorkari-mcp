# Shorkari MCP (সরকারি MCP) — Implementation & Architecture Plan

> **Goal:** Build the open-source, edge-hosted Model Context Protocol (MCP) server for Bangladesh public data — macroeconomic indicators, historical inflation, daily commodity prices, banking/routing infrastructure, administrative geocodes, and national legislation.
>
> **Inspiration:** `gahmen-mcp` (Singapore GovTech MCP by Aniruddha Adhikary).
>
> **Runtime Target:** Cloudflare Workers (Streamable-HTTP `/mcp` + REST `/v1`) + Node/Bun stdio CLI (`npx shorkari-mcp`). Storage backed by Cloudflare D1 (Serverless SQLite) and Cloudflare R2.

---

## 1. System Architecture

```
                  ┌──────────────────────────────────────────────┐
                  │          Public & Open Data Sources          │
                  └──────────────────────┬───────────────────────┘
                                         │
        ┌────────────────────────────────┼──────────────────────────────┐
        ▼                                ▼                              ▼
┌──────────────────┐           ┌──────────────────┐           ┌──────────────────┐
│ Instant Datasets │           │  Live Scrapers   │           │   OCR Pipeline   │
│ (Zero Crawlers)  │           │ (GitHub Actions) │           │  (Future Phase)  │
│ - World Bank API │           │ - DAM Commodity  │           │ - DGHS Dengue    │
│ - MdHRShohel     │           │   Daily Market   │           │ - NBR Tariff     │
│ - ifahimreza     │           │ - BB/BBS Monthly │           │ - BG Press       │
│ - sakhadib Acts  │           │   Inflation WAF  │           │   Gazettes       │
└────────┬─────────┘           └────────┬─────────┘           └────────┬─────────┘
         │                              │                              │
         └──────────────────────┬───────┴──────────────────────────────┘
                                │
                                ▼
               ┌─────────────────────────────────┐
               │    Raw Normalization Engine     │
               │  - Bijoy (ANSI) -> UTF-8 Bangla │
               │  - Type Casting & Deduplication │
               │  - Schema Validation (Zod)      │
               └────────────────┬────────────────┘
                                │
                                ▼
               ┌─────────────────────────────────┐
               │   Cloudflare D1 (SQLite Edge)   │
               │   + Raw Artifacts in GitHub/R2  │
               └────────────────┬────────────────┘
                                │
                                ▼
       ┌──────────────────────────────────────────────────┐
       │             `shorkari-mcp` Server                │
       │  Cloudflare Worker running TypeScript MCP SDK    │
       ├─────────────────────────┬────────────────────────┤
       │  Remote Streamable-HTTP │    Local stdio Proxy   │
       │   SSE (/mcp) for Claude │   `npx shorkari-mcp`   │
       │   Cursor, ChatGPT, etc. │   for Terminal Agents  │
       └─────────────────────────┴────────────────────────┘
```

---

## 2. Source Registry & Data Strategy

### 2.1 Reusable Instant Datasets (No Crawlers Needed)

| Domain | Upstream Source & Repository | License | Size / Count | Key Fields |
| :--- | :--- | :--- | :--- | :--- |
| **Historical Inflation (1960–2025)** | World Bank Indicators API (`FP.CPI.TOTL.ZG`) | CC BY-4.0 | 66 annual records | `year`, `value`, `indicator_id`, `indicator_name` |
| **Macro Indicators (1960–2025)** | World Bank API (`NY.GDP.MKTP.KD.ZG`, `FI.RES.TOTL.CD`, `BX.TRF.PWKR.CD.DT`) | CC BY-4.0 | 250+ time points | GDP growth %, Forex reserves (USD), Inward remittances |
| **Banking & Routing Numbers** | `github.com/MdHRShohel/bd-bank-routing` (`data/banks.json`) | CC0 1.0 | 63 banks, 11,426 branches | `routing`, `bank_code`, `bank_name`, `branch_name`, `district` |
| **Administrative Geocodes & Postcodes** | `github.com/ifahimreza/bangladesh-geojson` (`src/data/`) | MIT | 8 divisions, 64 districts, 494 upazilas, 1,349 postcodes | `id`, `name`, `bn_name`, `lat`, `long`, `post_code`, `district_id` |
| **National Bazars / Markets** | `ifahimreza/bangladesh-geojson` (`src/data/bd-bazars.geojson`) | MIT | 1,000+ local markets | Coordinates, market names in English and Bangla |
| **Laws of Bangladesh** | `github.com/sakhadib/Bangladesh-Legal-Acts-Dataset` | CC-BY-SA | 1,484 acts (1836–present) | `act_id`, `act_no`, `year`, `title_en`, `title_bn`, `status`, `sections_count` |

### 2.2 Live Scheduled Scrapers (Moving Targets)

1. **Daily Essential Commodity Prices (Wholesale & Retail):**
   * **Source:** Department of Agricultural Marketing (`market.dam.gov.bd`).
   * **Protocol:** HTTPS GET to `https://market.dam.gov.bd/` and `/market_daily_price_report`.
   * **Cadence:** Daily at 08:30 AM BST via GitHub Actions.
   * **Data Tracked:** Rice (Coarse, Medium, Fine), Wheat/Ata, Lentils (Masur, Mung, Gram), Edible Oils (Soybean, Palm), Meat (Beef, Mutton, Broiler Hen), Eggs, Onions, Garlic, Ginger, Potato, Green Chili, Salt, Sugar across 64 districts.
2. **Monthly Central Bank Macro & Inflation Releases:**
   * **Source:** Bangladesh Bank Economic Data (`bb.org.bd/en/index.php/econdata/inflation`).
   * **Cadence:** Monthly (on the 5th business day of each month).
   * **Handling BB WAF:** Scraped from a resilient GitHub Action or homelab worker with header emulation, saving the monthly point-to-point and 12-month moving average figures (Base 2021-22).

---

## 3. Database Schema (Cloudflare D1 / SQLite)

```sql
-- 1. Macroeconomic and Inflation Time Series
CREATE TABLE macro_indicators (
    id TEXT PRIMARY KEY,               -- e.g. "FP.CPI.TOTL.ZG:2024"
    series_id TEXT NOT NULL,           -- "INFLATION_CPI_ANNUAL", "GDP_GROWTH_ANNUAL", "RESERVES_USD", "REMITTANCE_USD"
    frequency TEXT NOT NULL,           -- "ANNUAL", "MONTHLY", "DAILY"
    period_year INTEGER NOT NULL,
    period_month INTEGER,              -- NULL for annual series
    value REAL NOT NULL,
    unit TEXT NOT NULL,                -- "%", "USD", "BDT"
    source_agency TEXT NOT NULL,       -- "World Bank", "Bangladesh Bank", "BBS"
    base_year TEXT,                    -- "2021-22", "2005-06", NULL
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_macro_series_period ON macro_indicators(series_id, period_year DESC, period_month DESC);

-- 2. Daily Commodity and Pricing Index
CREATE TABLE commodity_prices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    price_date DATE NOT NULL,
    market_name TEXT NOT NULL,         -- e.g. "Karwan Bazar", "Chawk Bazar", "National Average"
    district TEXT NOT NULL,
    commodity_en TEXT NOT NULL,        -- e.g. "Onion (Local)", "Egg (Red)", "Soybean Oil"
    commodity_bn TEXT NOT NULL,        -- e.g. "দেশি পেঁয়াজ", "ডিম (লাল)"
    category TEXT NOT NULL,            -- "Grains", "Oil", "Protein", "Spices", "Vegetables"
    unit TEXT NOT NULL,                -- "kg", "liter", "dozen", "piece"
    wholesale_min REAL,
    wholesale_max REAL,
    retail_min REAL NOT NULL,
    retail_max REAL NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_commodity_date_name ON commodity_prices(price_date DESC, commodity_en);
CREATE INDEX idx_commodity_district ON commodity_prices(district, price_date DESC);

-- 3. Banks, Branches, and Routing Infrastructure
CREATE TABLE bank_branches (
    routing_number TEXT PRIMARY KEY,   -- 9-digit BEFTN routing code (e.g. "010010048")
    bank_code TEXT NOT NULL,           -- 3-digit bank identifier
    bank_name TEXT NOT NULL,           -- e.g. "AGRANI BANK PLC"
    branch_name TEXT NOT NULL,         -- e.g. "BADHAL BAZAR"
    district TEXT NOT NULL,            -- e.g. "BAGERHAT"
    payable INTEGER DEFAULT 1,         -- 1 = payable/valid settlement, 0 = non-payable
    swift_code TEXT,
    updated_at DATE NOT NULL
);
CREATE INDEX idx_bank_district ON bank_branches(district, bank_name);
CREATE INDEX idx_bank_name ON bank_branches(bank_name);

-- 4. Administrative Geocodes & Geography
CREATE TABLE divisions (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    bn_name TEXT NOT NULL,
    lat REAL,
    long REAL
);

CREATE TABLE districts (
    id TEXT PRIMARY KEY,
    division_id TEXT NOT NULL REFERENCES divisions(id),
    name TEXT NOT NULL,
    bn_name TEXT NOT NULL,
    lat REAL,
    long REAL
);

CREATE TABLE upazilas (
    id TEXT PRIMARY KEY,
    district_id TEXT NOT NULL REFERENCES districts(id),
    name TEXT NOT NULL,
    bn_name TEXT NOT NULL
);

CREATE TABLE postcodes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    division_id TEXT NOT NULL REFERENCES divisions(id),
    district_id TEXT NOT NULL REFERENCES districts(id),
    upazila TEXT NOT NULL,
    post_office TEXT NOT NULL,
    post_code TEXT NOT NULL
);
CREATE INDEX idx_postcodes_code ON postcodes(post_code);
CREATE INDEX idx_postcodes_district ON postcodes(district_id);

-- 5. Laws of Bangladesh Index
CREATE TABLE legal_acts (
    id TEXT PRIMARY KEY,               -- e.g. "act-1860-45"
    act_no TEXT NOT NULL,
    year INTEGER NOT NULL,
    title_en TEXT NOT NULL,
    title_bn TEXT,
    is_repealed INTEGER DEFAULT 0,
    sections_count INTEGER,
    source_url TEXT NOT NULL
);
CREATE INDEX idx_legal_acts_year ON legal_acts(year DESC);
CREATE INDEX idx_legal_acts_title ON legal_acts(title_en);
```

---

## 4. MCP Server Specification (`shorkari-mcp`)

The MCP server exposes high-signal tools designed for AI agents (Claude, Cursor, ChatGPT, Codex, Pi, Hermes) needing verified Bangladeshi ground truth.

### Tool 1: `get_inflation_history`
*   **Description:** Get historical Consumer Price Index (CPI) and annual/monthly inflation rates for Bangladesh dating back to 1960.
*   **Parameters:**
    *   `start_year` (optional integer, default: 2015)
    *   `end_year` (optional integer, default: current year)
    *   `frequency` (optional enum: `"ANNUAL"`, `"MONTHLY"`, default: `"ANNUAL"`)
*   **Returns:** Array of `{ year, month, inflation_rate, cpi_index, base_year, source }`.

### Tool 2: `get_commodity_price`
*   **Description:** Query live and historical daily market prices of essential commodities (rice, onion, egg, oil, etc.) across Bangladesh districts.
*   **Parameters:**
    *   `commodity` (optional string, e.g. "onion", "egg", "rice", "পেঁয়াজ")
    *   `district` (optional string, e.g. "Dhaka", "Chittagong", "Bogura")
    *   `date` (optional string YYYY-MM-DD, default: latest available)
*   **Returns:** Array of `{ commodity, district, retail_range, wholesale_range, unit, date }`.

### Tool 3: `get_macro_snapshot`
*   **Description:** Retrieve the latest authoritative macroeconomic indicators for Bangladesh: GDP growth, gross and BPM6 foreign exchange reserves, monthly remittance inflow, and exchange rate.
*   **Parameters:** None.
*   **Returns:** JSON summary object with citations and latest update timestamps.

### Tool 4: `lookup_bank_routing`
*   **Description:** Search BEFTN bank routing numbers, branches, bank codes, and SWIFT details across all 63 scheduled and private banks in Bangladesh.
*   **Parameters:**
    *   `query` (string, required — routing number, branch name, or bank name)
    *   `district` (optional string)
    *   `limit` (optional integer, default: 10)
*   **Returns:** Array of `{ routing_number, bank_name, branch_name, district, payable }`.

### Tool 5: `lookup_location`
*   **Description:** Resolve administrative hierarchy, upazila, district, division, and postal codes from English or Bangla names.
*   **Parameters:**
    *   `query` (string, required — e.g. "Dhanmondi", "1209", "মিরপুর", "Sylhet")
*   **Returns:** Hierarchy objects with geocoordinates and postal codes.

### Tool 6: `search_laws`
*   **Description:** Search the catalog of 1,484 Bangladesh Acts and Ordinances (1836–present) by title, year, or subject.
*   **Parameters:**
    *   `query` (string, required)
    *   `year` (optional integer)
    *   `active_only` (optional boolean, default: true)
*   **Returns:** Matching legal acts with official citations and links to full gazette texts.

---

## 5. Bite-Sized Implementation Tasks

### Task 1: Initialize Project Scaffolding
- **Objective:** Create `package.json`, `tsconfig.json`, `wrangler.toml`, and install dependencies (`@modelcontextprotocol/sdk`, `zod`, `vitest`).
- **Files:** `package.json`, `tsconfig.json`, `wrangler.toml`
- **Verification:** `bun test` passes with 0 failures.
- **Commit:** `chore: initialize Cloudflare Worker project with MCP SDK and Vitest`

### Task 2: Implement Bengali Numeral & Range Normalizer (`src/utils/bangla.ts`)
- **Objective:** Pure function utilities to convert Bengali numbers, comma-separated currency values, and price ranges.
- **Files:**
  - Create: `src/utils/bangla.ts`
  - Test: `tests/bangla.test.ts`
- **Step 1 (Test):** Test `toAsciiDigits("১২৩৪.৫০")` -> `"1234.50"`, `parseBnFloat("১,২৫০.৫০")` -> `1250.50`, `parseBnRange("৭২.০০ - ৭৫.০০")` -> `{ min: 72, max: 75 }`.
- **Step 2 (Implementation):** Implement string translation mappings.
- **Step 3 (Verify):** `bun test tests/bangla.test.ts` -> PASS.
- **Commit:** `feat: add Bengali numeral and price range normalization utilities`

### Task 3: Ingestion & Seed Builder Script (`scripts/seed.ts`)
- **Objective:** Script that pulls World Bank inflation, MdHRShohel bank routing, and ifahimreza geojson, transforming them into `migrations/0001_initial_schema.sql` and `migrations/0002_seed_data.sql`.
- **Files:**
  - Create: `scripts/seed.ts`
  - Create: `migrations/0001_initial_schema.sql`
  - Test: `tests/seed.test.ts`
- **Step 1 (Test):** Verify transformer turns World Bank payload into valid SQLite insert statements.
- **Step 2 (Implementation):** Fetch raw JSONs, normalize, output parameterized SQL statements.
- **Step 3 (Verify):** `bun run scripts/seed.ts --dry-run` outputs verified row counts (66 inflation rows, 11,426 branch rows, 494 upazila rows).
- **Commit:** `feat: implement seed script and SQL migrations`

### Task 4: D1 Database Query Layer (`src/db/queries.ts`)
- **Objective:** Type-safe SQL query functions targeting D1 SQLite for inflation, bank routing, geocodes, and commodities.
- **Files:**
  - Create: `src/db/queries.ts`
  - Test: `tests/queries.test.ts` (using in-memory SQLite / `better-sqlite3`)
- **Step 1 (Test):** Test `queryInflation(db, 2015, 2024)` returns ordered array; test `queryBankBranches(db, "Agrani", "Dhaka")` returns matches.
- **Step 2 (Implementation):** Implement indexed SQL select queries.
- **Step 3 (Verify):** `bun test tests/queries.test.ts` -> PASS.
- **Commit:** `feat: add typed D1 database query handlers`

### Task 5: MCP Tool Handlers & SSE Edge Server (`src/index.ts`)
- **Objective:** Expose MCP tools (`get_inflation_history`, `lookup_bank_routing`, `lookup_location`, `get_macro_snapshot`) over Streamable-HTTP (`/mcp`) on Cloudflare Workers.
- **Files:**
  - Create: `src/index.ts`
  - Test: `tests/mcp-server.test.ts`
- **Step 1 (Test):** Spin up mock fetch against worker, send MCP JSON-RPC `tools/list` and `tools/call`, assert protocol schema response.
- **Step 2 (Implementation):** Connect `@modelcontextprotocol/sdk` Server to Workers `fetch` handler.
- **Step 3 (Verify):** `bun test tests/mcp-server.test.ts` -> PASS.
- **Commit:** `feat: implement Cloudflare Worker MCP server with Streamable HTTP`

### Task 6: Daily Commodity Scraper (`scrapers/dam_commodity.ts`)
- **Objective:** Robust scraper for `market.dam.gov.bd` with fixture testing and automated number parsing.
- **Files:**
  - Create: `scrapers/dam_commodity.ts`
  - Test: `tests/dam_scraper.test.ts` (with saved HTML fixture)
- **Step 1 (Test):** Feed real DAM HTML snippet, verify extraction of rice, egg, and onion prices with min/max ranges.
- **Step 2 (Implementation):** Use regex/HTML parser + `parseBnRange` from `bangla.ts`.
- **Step 3 (Verify):** `bun test tests/dam_scraper.test.ts` -> PASS.
- **Commit:** `feat: add Department of Agricultural Marketing commodity scraper`

### Task 7: GitHub Actions Daily Crawler Workflow
- **Objective:** Automated daily ingestion pipeline committing to SQLite / pushing D1 updates.
- **Files:**
  - Create: `.github/workflows/daily-sync.yml`
- **Commit:** `ci: add scheduled GitHub Action for daily commodity sync`

### Task 8: Stdio CLI Wrapper (`bin/cli.ts` / `npx shorkari-mcp`)
- **Objective:** Lightweight bridge connecting local AI clients (stdio) to the remote edge server or bundled SQLite database.
- **Files:**
  - Create: `bin/cli.ts`
- **Verify:** `echo '{"jsonrpc":"2.0","method":"tools/list","id":1}' | bun run bin/cli.ts` returns tools list.
- **Commit:** `feat: add stdio CLI wrapper for npx execution`
