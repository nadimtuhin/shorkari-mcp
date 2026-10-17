# Design: init-edge-mcp-core

## Context
Standard MCP servers run locally via stdio or on dedicated Docker containers. For a public intelligence service covering a whole nation, serverless edge deployment on Cloudflare Workers allows global sub-10ms response times, 100,000 daily free requests, and zero server maintenance.

## Goals
- Provide spec-compliant JSON-RPC 2.0 MCP protocol handling on Cloudflare Workers.
- Support Streamable HTTP transport for web/remote assistants and compatibility with stdio proxies.
- Provide a zero-latency SQLite query engine via Cloudflare D1.

## Non-Goals
- Real-time proxying of live government website requests during tool execution.
- Complex user authentication or paid tier rate-limiting (open public intelligence).

## Decisions
1. **Cloudflare D1 vs Remote Postgres/Turso:**
   - *Decision:* Use Cloudflare D1.
   - *Alternative Considered:* Turso or Supabase.
   - *Rationale:* D1 runs directly in the Worker isolate with 0 network hops, eliminating connection pool overhead and cost.
2. **Streamable HTTP over WebSocket:**
   - *Decision:* Use HTTP POST + SSE (`/mcp`).
   - *Alternative Considered:* WebSocket MCP.
   - *Rationale:* Native support in modern Claude Desktop, Cursor, and ChatGPT without stateful connection drops.
3. **Zod for Schema Enforcement:**
   - *Decision:* Validate every tool parameter with Zod before database dispatch.
   - *Alternative Considered:* Manual if-checks.
   - *Rationale:* Automatic JSON-schema generation for MCP tool capability declarations.

## Risks / Trade-offs
- *Risk:* Cloudflare Worker 128MB memory ceiling.
- *Mitigation:* Datasets are held in D1 on disk, queried with pagination limits (`limit <= 50`), keeping Worker isolate memory usage under 15MB.

## Extension Seams
- Tool registry uses a modular plugin map `Record<string, MCPToolHandler>` so subsequent changes can register domain tools without altering the core transport loop.
