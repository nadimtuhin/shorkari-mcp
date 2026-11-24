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

### 1. Remote server (Streamable HTTP)

The hosted endpoint is `https://bdmcp.nadimtuhin.com/mcp`.

Claude Code:

```bash
claude mcp add --transport http bdmcp https://bdmcp.nadimtuhin.com/mcp
```

Cursor (`~/.cursor/mcp.json`) and other clients that accept a URL:

```json
{
  "mcpServers": {
    "bdmcp": {
      "url": "https://bdmcp.nadimtuhin.com/mcp"
    }
  }
}
```

### 2. Local stdio bridge (Claude Desktop and other stdio-only clients)

`bdmcp` is not published to npm yet, so `npx bdmcp` will not work. Clone the repository and point your client at the bundled stdio wrapper, which forwards JSON-RPC to the hosted endpoint (Node.js 22.18+ runs the TypeScript file directly; `bun` works too):

```bash
git clone https://github.com/nadimtuhin/shorkari-mcp.git
```

```json
{
  "mcpServers": {
    "bdmcp": {
      "command": "node",
      "args": ["/absolute/path/to/shorkari-mcp/bin/cli.ts"]
    }
  }
}
```

Optional environment variables: `BDMCP_URL` (endpoint, defaults to the hosted server) and `BDMCP_TIMEOUT_MS` (per-request timeout, default `30000`).

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
