# Tasks: init-edge-mcp-core

## 1. Project Scaffolding
- [ ] 1.1 Create `package.json`, `tsconfig.json`, and `wrangler.toml` for Cloudflare Worker.
- [ ] 1.2 Install `@modelcontextprotocol/sdk`, `zod`, and `vitest`.
- [ ] 1.3 Add npm test and build scripts.

## 2. D1 Storage & Schema Migration
- [ ] 2.1 Author `migrations/0001_initial_schema.sql` with tables for macro, stocks, banks, geo, and commodities.
- [ ] 2.2 Implement type-safe D1 query executor in `src/db/client.ts`.
- [ ] 2.3 Add unit tests verifying parameterized queries and SQL injection prevention.

## 3. MCP Protocol Runtime & SSE Handler
- [ ] 3.1 Implement MCP Server initialization with protocol version `2024-11-05` in `src/mcp/server.ts`.
- [ ] 3.2 Wire `tools/list` and `tools/call` JSON-RPC dispatchers with Zod parameter parsing.
- [ ] 3.3 Create Cloudflare Worker `fetch` handler with `/mcp` (Streamable HTTP) and `/health` endpoints.
- [ ] 3.4 Author end-to-end integration test validating MCP client handshake and tool listing.

## Later (not v1)
- [ ] Multi-tenant API key rate-limiting.
- [ ] WebSocket duplex transport for legacy desktop agents.
