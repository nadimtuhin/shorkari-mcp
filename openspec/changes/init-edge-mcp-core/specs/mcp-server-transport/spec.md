# Specification: mcp-server-transport

## ADDED Requirements

### Requirement: Handle MCP initialize handshake
The MCP server SHALL respond to `initialize` JSON-RPC requests with server metadata, supported protocol version, and declared capabilities.

#### Scenario: Assistant client initializes session
- **WHEN** client sends a POST request to `/mcp` with method `initialize`
- **THEN** server returns status 200 with `protocolVersion: "2024-11-05"`
- **AND** response includes `serverInfo: { name: "shorkari-mcp", version: "0.1.0" }`

### Requirement: Enumerate available tools
The MCP server SHALL return the list of registered tools with valid JSON-schema input definitions upon receiving `tools/list`.

#### Scenario: Client queries available tools
- **WHEN** client sends `tools/list` JSON-RPC method
- **THEN** server returns an array of tools with names, descriptions, and inputSchema

### Requirement: Execute declared tool calls
The MCP server SHALL validate arguments against the tool's input schema and return formatted content blocks upon receiving `tools/call`.

#### Scenario: Client calls a valid tool
- **WHEN** client invokes a registered tool name with valid arguments
- **THEN** server executes handler and returns `content: [{ type: "text", text: "..." }]`

#### Scenario: Client calls with invalid arguments
- **WHEN** client invokes a registered tool with malformed parameters
- **THEN** server returns a JSON-RPC error with code `-32602` (Invalid params)
