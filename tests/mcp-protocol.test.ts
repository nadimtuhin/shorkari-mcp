import { describe, it, expect } from 'bun:test';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import worker from '../src/index';
import { createTestDatabase } from './helpers/test-db';

function workerFetch(env: any) {
  return (input: any, init?: any) => worker.fetch(new Request(input, init), env);
}

function rpc(body: unknown, env: any) {
  return worker.fetch(
    new Request('http://localhost/mcp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json, text/event-stream' },
      body: JSON.stringify(body)
    }),
    env
  );
}

describe('MCP Streamable HTTP compliance', () => {
  it('accepts notifications with 202 and no JSON-RPC response body', async () => {
    const env = { DB: createTestDatabase() };
    const res = await rpc({ jsonrpc: '2.0', method: 'notifications/initialized' }, env);
    expect(res.status).toBe(202);
    expect(await res.text()).toBe('');
  });

  it('answers ping with an empty result', async () => {
    const env = { DB: createTestDatabase() };
    const res = await rpc({ jsonrpc: '2.0', id: 3, method: 'ping' }, env);
    expect(res.status).toBe(200);
    expect((await res.json()) as any).toEqual({ jsonrpc: '2.0', id: 3, result: {} });
  });

  it('answers GET /mcp with 405 since no server-initiated SSE stream is offered', async () => {
    const env = { DB: createTestDatabase() };
    const res = await worker.fetch(new Request('http://localhost/mcp', { method: 'GET' }), env);
    expect(res.status).toBe(405);
  });

  it('lets the official MCP SDK client connect, list tools and call one', async () => {
    const env = { DB: createTestDatabase() };
    const client = new Client({ name: 'test', version: '0.0.0' });
    const errors: unknown[] = [];
    client.onerror = (e) => errors.push(e);
    const transport = new StreamableHTTPClientTransport(new URL('http://localhost/mcp'), {
      fetch: workerFetch(env) as any
    });
    await client.connect(transport);
    const { tools } = await client.listTools();
    expect(tools.map((t) => t.name)).toContain('search_laws');
    const out: any = await client.callTool({ name: 'lookup_location', arguments: { query: 'Dhaka' } });
    expect(out.isError).toBeFalsy();
    await client.close();
    expect(errors).toEqual([]);
  });
});

describe('MCP tool error reporting', () => {
  it('returns tool execution failures as a result with isError instead of a JSON-RPC error', async () => {
    const failing = async () => {
      throw new Error('D1_ERROR: no such table: legal_acts');
    };
    const env = { DB: { all: failing, get: failing, run: failing } };
    const res = await rpc(
      { jsonrpc: '2.0', id: 7, method: 'tools/call', params: { name: 'search_laws', arguments: { query: 'Companies' } } },
      env
    );
    expect(res.status).toBe(200);
    const json: any = await res.json();
    expect(json.id).toBe(7);
    expect(json.error).toBeUndefined();
    expect(json.result.isError).toBe(true);
    expect(json.result.content[0].type).toBe('text');
    expect(json.result.content[0].text).toContain('no such table');
  });
});
