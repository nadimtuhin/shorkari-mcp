# Change Proposal: init-edge-mcp-core

## Why
AI agents connecting to Bangladesh government data require a reliable, sub-5ms edge interface that never fails due to foreign IP blocks, downstream downtime, or broken SSL certs. We need the foundational Cloudflare Worker MCP runtime and D1 SQLite storage layer to host all domain connectors.

## What Changes
- Set up Cloudflare Worker TypeScript project with `@modelcontextprotocol/sdk`.
- Implement Streamable HTTP (SSE) endpoint at `/mcp` supporting JSON-RPC 2.0 (`tools/list`, `tools/call`).
- Configure Cloudflare D1 serverless SQLite schema and typed query executor.
- Provide health-check and metadata endpoint at `/health` and `/v1/meta`.

## Capabilities

### New Capabilities
- `mcp-server-transport`: Exposes the Model Context Protocol over Cloudflare Workers Fetch and SSE handlers.
- `d1-storage-layer`: Manages SQLite tables, migrations, and parameterized query execution on Cloudflare D1.

### Modified Capabilities
None.

## Impact
Enables remote AI assistants (Claude Desktop, Cursor, ChatGPT) and local stdio clients to connect to the unified Bangladesh data catalog.
