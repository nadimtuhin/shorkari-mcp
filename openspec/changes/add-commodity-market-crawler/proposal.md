# Change Proposal: add-commodity-market-crawler

## Why
Staple food price inflation (rice, onion, egg, edible oil, potato) is the most critical everyday economic concern in Bangladesh. The Department of Agricultural Marketing (DAM) publishes daily prices across 64 districts, but data is trapped in raw HTML tables with Bengali digits and volatile server response times.

## What Changes
- Build a resilient scraper for `market.dam.gov.bd` with automated Bengali numeral translation.
- Store daily wholesale and retail price ranges across 64 districts in Cloudflare D1.
- Implement MCP tool `get_commodity_price` supporting queries by commodity name, district, and date.
- Configure daily GitHub Actions crawler running at 08:30 AM BST.

## Capabilities

### New Capabilities
- `daily-commodity-prices`: Edge query tool for national essential food and commodity pricing.
- `dam-market-crawler`: Daily automated extraction engine for Department of Agricultural Marketing reports.

### Modified Capabilities
None.

## Impact
AI assistants can accurately track kitchen market prices (বাজার দর), detect regional price arbitrage between producer and consumer districts, and analyze food inflation in real time.
