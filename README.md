# bdmcp (সরকারি MCP)

> **The Open Public Intelligence & Data Connector for Bangladesh.**
> Unofficial Model Context Protocol (MCP) server connecting AI assistants (Claude, Cursor, ChatGPT, Codex, Pi, Hermes) to verified Bangladesh government data, macroeconomic time series, daily commodity prices, banking infrastructure, and national legislation.

Inspired by Singapore's [`gahmen-mcp`](https://github.com/aniruddha-adhikary/gahmen-mcp) by [Aniruddha Adhikary](https://github.com/aniruddha-adhikary).

---

## 🇧🇩 Why `bdmcp`?

In Bangladesh, public data is fractured across outdated portals, scanned PDFs in legacy ANSI fonts (SutonnyMJ), and servers protected by aggressive WAFs. 

`bdmcp` unifies these sources into a single, high-performance edge database running on Cloudflare Workers and D1 SQLite. It provides sub-5ms verified ground truth for AI assistants without runtime scraping failures.

```
AI Assistant (Claude / Cursor / ChatGPT)
                  │
                  ▼ (JSON-RPC over Streamable-HTTP or stdio)
       ┌────────────────────────┐
       │   `bdmcp`              │
       │   Cloudflare Edge      │
       └──────────┬─────────────┘
                  │
     ┌────────────┼─────────────┬─────────────┐
     ▼            ▼             ▼             ▼
Macro & CPI    Daily Food     Banking &      Laws of
Inflation      Commodities    Routing        Bangladesh
(1960-2025)    (DAM Markets)  (63 Banks)     (1,484 Acts)
```

---

## 📦 What the Connector Can Do

| Tool | Source Domain | Capabilities |
| :--- | :--- | :--- |
| `get_inflation_history` | World Bank + Bangladesh Bank / BBS | Query official annual and monthly CPI and inflation rates from 1960 to 2025 with base-year disambiguation. |
| `get_commodity_price` | Dept. of Agricultural Marketing (`market.dam.gov.bd`) | Live and historical wholesale/retail prices of rice, onion, egg, oil, and lentils across 64 districts. |
| `get_macro_snapshot` | Central Bank & Global Indicators | Latest gross and BPM6 usable foreign reserves, monthly remittances, GDP growth %, and policy rates. |
| `lookup_bank_routing` | BEFTN Registry (63 Banks, 11,426 Branches) | Instant fuzzy search for bank routing numbers, branch codes, SWIFT codes, and district locations. |
| `lookup_location` | Survey & Administrative Hierarchy | Resolve 8 divisions, 64 districts, 494 upazilas, postcodes, and local bazars with bilingual (EN/BN) support. |
| `search_laws` | Ministry of Law (`bdlaws.minlaw.gov.bd`) | Search 1,484 Bangladesh Acts and Ordinances (1836–present) by title, year, section count, or repealed status. |

---

## 🚀 Quick Start

### 1. Claude Desktop / Cursor (Remote Streamable-HTTP)

Add to your `claude_desktop_config.json` or Cursor MCP settings:

```json
{
  "mcpServers": {
    "bdmcp": {
      "type": "streamableHttp",
      "url": "https://bdmcp.nadimtuhin.com/mcp"
    }
  }
}
```

### 2. Terminal & Local CLI Agents (stdio)

Run directly via `npx` (no installation or API keys required):

```bash
npx -y bdmcp
```

Or configure in your local agent settings:

```json
{
  "mcpServers": {
    "bdmcp": {
      "command": "npx",
      "args": ["-y", "bdmcp"]
    }
  }
}
```

---

## 🏛️ Ground-Truth Sources & Credits

This project stands on the shoulders of vetted community datasets and official public sources:

*   **Macroeconomics & Historical Inflation:** [World Bank Indicators API](https://data.worldbank.org/country/bangladesh) (`FP.CPI.TOTL.ZG`, `NY.GDP.MKTP.KD.ZG`, `FI.RES.TOTL.CD`) & [Bangladesh Bank](https://bb.org.bd).
*   **Bank Routing Numbers & Branches:** [`MdHRShohel/bd-bank-routing`](https://github.com/MdHRShohel/bd-bank-routing) (CC0 1.0) — 63 institutions, 11,426 branches.
*   **Administrative Hierarchy & Geo:** [`ifahimreza/bangladesh-geojson`](https://github.com/ifahimreza/bangladesh-geojson) (MIT) — Divisions, districts, upazilas, postcodes, and bazars.
*   **Laws of Bangladesh:** [`sakhadib/Bangladesh-Legal-Acts-Dataset`](https://github.com/sakhadib/Bangladesh-Legal-Acts-Dataset) (CC-BY-SA 4.0) — 1,484 acts scraped from `bdlaws.minlaw.gov.bd`.
*   **Daily Commodity Prices:** [Department of Agricultural Marketing](http://market.dam.gov.bd/) (DAM).

---

## 📐 Architecture & Roadmap

See detailed specifications in the repository:
*   [`PLAN.md`](./PLAN.md) — Implementation blueprint, Cloudflare D1 schema, and phased tasks.
*   [`docs/SPEC.md`](./docs/SPEC.md) — Technical edge primitives, Bengali numeral normalization, and tool schemas.
*   [`docs/DOMAIN.md`](./docs/DOMAIN.md) — Domain glossary (BPM6, BEFTN, CPI rebasing gotchas, district aliases).
*   [`openspec/`](./openspec/) — OpenSpec epics, capabilities, and feature breakdowns.

---

## 📄 License

MIT © [Nadim Tuhin](https://github.com/nadimtuhin)
