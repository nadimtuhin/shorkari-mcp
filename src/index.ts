import { wrapD1 } from './db/adapter';
import { queryInflationHistory, queryMacroSnapshot } from './db/queries/macro';
import { queryBankBranches } from './db/queries/banks';
import { queryLocation } from './db/queries/geo';

export interface Env {
  DB: any;
}

const SERVER_INFO = {
  name: 'shorkari-mcp',
  version: '0.1.0'
};

const TOOLS = [
  {
    name: 'get_inflation_history',
    description: 'Retrieve official Bangladesh inflation rates and CPI trends (1960–present) with base-year disambiguation.',
    inputSchema: {
      type: 'object',
      properties: {
        start_year: { type: 'integer', description: 'Earliest year to include (default: 2015)' },
        end_year: { type: 'integer', description: 'Latest year to include' }
      }
    }
  },
  {
    name: 'get_macro_snapshot',
    description: 'Get current key macroeconomic indicators: GDP growth, gross and BPM6 usable reserves, remittances.',
    inputSchema: {
      type: 'object',
      properties: {}
    }
  },
  {
    name: 'lookup_bank_routing',
    description: 'Search Bangladesh bank routing numbers (BEFTN), branch names, and districts across 63 banks.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: '9-digit routing number or branch/bank search string' },
        district: { type: 'string', description: 'Optional district filter' },
        payable_only: { type: 'boolean', description: 'Only return branches that accept credit transfers (default: true)' }
      },
      required: ['query']
    }
  },
  {
    name: 'lookup_location',
    description: 'Resolve Bangladesh administrative hierarchy (Division, District, Upazila, Postal Code) by name or 4-digit post code in English or Bangla.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Post code or location name in English or Bangla (e.g. "1209", "Dhanmondi", "সিলেট")' },
        limit: { type: 'integer', description: 'Maximum results to return (default: 10)' }
      },
      required: ['query']
    }
  }
];

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ status: 'ok', name: SERVER_INFO.name, version: SERVER_INFO.version }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/mcp' && request.method === 'POST') {
      let body: any;
      try {
        body = await request.json();
      } catch {
        return new Response(JSON.stringify({ jsonrpc: '2.0', error: { code: -32700, message: 'Parse error' } }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      const { id, method, params } = body;
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);

      if (method === 'initialize') {
        return new Response(
          JSON.stringify({
            jsonrpc: '2.0',
            id,
            result: {
              protocolVersion: '2024-11-05',
              serverInfo: SERVER_INFO,
              capabilities: {
                tools: {}
              }
            }
          }),
          { headers: { 'Content-Type': 'application/json' } }
        );
      }

      if (method === 'tools/list') {
        return new Response(
          JSON.stringify({
            jsonrpc: '2.0',
            id,
            result: {
              tools: TOOLS
            }
          }),
          { headers: { 'Content-Type': 'application/json' } }
        );
      }

      if (method === 'tools/call') {
        const toolName = params?.name;
        const toolArgs = params?.arguments || {};

        try {
          if (toolName === 'get_inflation_history') {
            const data = await queryInflationHistory(db, toolArgs);
            return new Response(
              JSON.stringify({
                jsonrpc: '2.0',
                id,
                result: {
                  content: [{ type: 'text', text: JSON.stringify(data, null, 2) }]
                }
              }),
              { headers: { 'Content-Type': 'application/json' } }
            );
          }

          if (toolName === 'get_macro_snapshot') {
            const data = await queryMacroSnapshot(db);
            return new Response(
              JSON.stringify({
                jsonrpc: '2.0',
                id,
                result: {
                  content: [{ type: 'text', text: JSON.stringify(data, null, 2) }]
                }
              }),
              { headers: { 'Content-Type': 'application/json' } }
            );
          }

          if (toolName === 'lookup_bank_routing') {
            const data = await queryBankBranches(db, toolArgs);
            return new Response(
              JSON.stringify({
                jsonrpc: '2.0',
                id,
                result: {
                  content: [{ type: 'text', text: JSON.stringify(data, null, 2) }]
                }
              }),
              { headers: { 'Content-Type': 'application/json' } }
            );
          }

          if (toolName === 'lookup_location') {
            const data = await queryLocation(db, toolArgs);
            return new Response(
              JSON.stringify({
                jsonrpc: '2.0',
                id,
                result: {
                  content: [{ type: 'text', text: JSON.stringify(data, null, 2) }]
                }
              }),
              { headers: { 'Content-Type': 'application/json' } }
            );
          }

          return new Response(
            JSON.stringify({
              jsonrpc: '2.0',
              id,
              error: { code: -32601, message: `Tool not found: ${toolName}` }
            }),
            { status: 404, headers: { 'Content-Type': 'application/json' } }
          );
        } catch (err: any) {
          return new Response(
            JSON.stringify({
              jsonrpc: '2.0',
              id,
              error: { code: -32603, message: err.message || 'Internal error' }
            }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
          );
        }
      }

      return new Response(
        JSON.stringify({ jsonrpc: '2.0', id, error: { code: -32601, message: `Method not found: ${method}` } }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response('Not Found', { status: 404 });
  }
};
