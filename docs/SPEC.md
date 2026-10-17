# Shorkari MCP — Technical Specification & Edge Primitives

## 1. Bengali Data Normalization Engine (`src/utils/bangla.ts`)

A major source of failure in Bangladeshi data extraction is mixed Bengali numeral scripts, comma groupings, and legacy ASCII fonts. The MCP data pipeline enforces strict normalization at the boundary.

### 1.1 Digit Mapping Table
```typescript
const BN_TO_EN_DIGITS: Record<string, string> = {
  '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4',
  '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9'
};

const EN_TO_BN_DIGITS: Record<string, string> = {
  '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
  '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
};
```

### 1.2 Boundary Cleaning Rules
1. **Bangla to Float:**
   `parseBnFloat("১,২৫০.৫০")` -> Strips commas, maps digits -> `1250.50`.
2. **Range Normalizer:**
   Government commodity tables often report price ranges like `"৭২.০০ - ৭৫.০০"` or `"৭২ - ৭৫"`.
   `parseBnRange("৭২.০০ - ৭৫.০০")` -> `{ min: 72.0, max: 75.0 }`.
3. **Bilingual Search Indexing:**
   Search queries for banks, locations, or commodities must match either script.
   Every indexed record maintains both `name_en` and `name_bn` with case-insensitive, accent-insensitive SQLite FTS or `LIKE` queries.

---

## 2. Fast Edge Ingestion & Seed Pipeline (`scripts/seed.ts`)

Instead of scraping live endpoints during runtime, the seed pipeline builds the complete foundational SQLite database in one deterministic pass:

```typescript
// scripts/seed.ts outline
import { writeFileSync } from 'node:fs';

async function fetchWorldBankInflation() {
  const url = "https://api.worldbank.org/v2/country/BGD/indicator/FP.CPI.TOTL.ZG?format=json&per_page=100";
  const res = await fetch(url);
  const [, data] = await res.json();
  return data
    .filter((d: any) => d.value !== null)
    .map((d: any) => ({
      series_id: "INFLATION_CPI_ANNUAL",
      frequency: "ANNUAL",
      year: parseInt(d.date, 10),
      month: null,
      value: d.value,
      unit: "%",
      source: "World Bank (WDI)"
    }));
}

async function fetchBankBranches() {
  const url = "https://raw.githubusercontent.com/MdHRShohel/bd-bank-routing/main/data/banks.json";
  const res = await fetch(url);
  const data = await res.json();
  // Flattens 63 banks into 11,426 branch rows
  const branches = [];
  for (const bank of data.banks) {
    for (const br of bank.branches) {
      branches.push({
        routing_number: br.routing,
        bank_code: bank.code,
        bank_name: bank.name,
        branch_name: br.name,
        district: br.district,
        payable: bank.payable ? 1 : 0
      });
    }
  }
  return branches;
}

async function fetchGeoHierarchy() {
  const baseUrl = "https://raw.githubusercontent.com/ifahimreza/bangladesh-geojson/master/src/data";
  const [divs, dists, upazilas, postcodes] = await Promise.all([
    fetch(`${baseUrl}/bd-divisions.json`).then(r => r.json()),
    fetch(`${baseUrl}/bd-districts.json`).then(r => r.json()),
    fetch(`${baseUrl}/bd-upazilas.json`).then(r => r.json()),
    fetch(`${baseUrl}/bd-postcodes.json`).then(r => r.json()),
  ]);
  return { divs, dists, upazilas, postcodes };
}
```

---

## 3. Resilience Strategy: BB WAF Fallback

When querying central bank data (`bb.org.bd`):
1. **Primary Layer:** Pre-computed and historical data served from Cloudflare D1 (0% failure rate, sub-5ms latency).
2. **Secondary Ingestion (GitHub Actions):** If GitHub Actions runner IP is blocked by Fortinet WAF:
   - Runner falls back to the **World Bank Indicators API** (which updates annually and mirrors official BB CPI data).
   - If monthly granularity is needed, runner delegates to a homelab runner via Tailscale with a residential Bangladeshi IP (`desktop-6q2aoqi`).

---

## 4. MCP Tools & Schema Definition

```typescript
import { z } from 'zod';

export const ToolSchemas = {
  get_inflation_history: {
    description: "Retrieve official Bangladesh inflation rates and CPI trends from 1960 to present.",
    parameters: z.object({
      start_year: z.number().int().min(1960).max(2030).default(2015),
      end_year: z.number().int().min(1960).max(2030).optional(),
      frequency: z.enum(["ANNUAL", "MONTHLY"]).default("ANNUAL"),
    }),
  },
  get_commodity_price: {
    description: "Get daily wholesale and retail prices of essential food and commodities in Bangladesh.",
    parameters: z.object({
      commodity: z.string().optional().describe("e.g. onion, egg, soybean oil, rice, dal"),
      district: z.string().optional().describe("e.g. Dhaka, Chittagong, Sylhet"),
    }),
  },
  lookup_bank_routing: {
    description: "Search Bangladesh bank routing numbers (BEFTN), branch names, and districts across 63 banks.",
    parameters: z.object({
      query: z.string().describe("Bank name, branch name, or 9-digit routing number"),
      district: z.string().optional(),
      limit: z.number().int().min(1).max(50).default(10),
    }),
  },
  lookup_location: {
    description: "Resolve Bangladesh administrative hierarchy (Division, District, Upazila, Postal Code) by name or code.",
    parameters: z.object({
      query: z.string().describe("Post code or location name in English or Bangla"),
    }),
  },
  get_macro_snapshot: {
    description: "Get latest key macroeconomic indicators: GDP growth, Foreign Reserves (BPM6), Remittance inflows.",
    parameters: z.object({}),
  }
};
```

---

## 5. Deployment & Distribution Architecture

1. **Cloudflare Worker:**
   - Deployed globally via `wrangler deploy`.
   - Free plan: Handles up to 100,000 requests/day with zero compute cost.
   - Streamable HTTP endpoint: `https://shorkari.workers.dev/mcp`.
2. **Local NPM CLI Wrapper (`shorkari-mcp`):**
   - For Claude Desktop or local CLI agents that require stdio:
     ```json
     {
       "mcpServers": {
         "shorkari": {
           "command": "npx",
           "args": ["-y", "shorkari-mcp"]
         }
       }
     }
     ```
   - The CLI connects via lightweight stdio transport proxying to the Cloudflare Worker edge or running embedded SQLite.
