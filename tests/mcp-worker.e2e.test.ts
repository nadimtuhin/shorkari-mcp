import { describe, it, expect, beforeEach } from 'vitest';
import worker from '../src/index';
import { createTestDatabase } from './helpers/test-db';
import { insertMacroIndicator } from '../src/db/queries/macro';
import { insertBankBranch } from '../src/db/queries/banks';

describe('MCP Worker Protocol E2E', () => {
  let db: any;
  let mockEnv: any;

  beforeEach(async () => {
    db = createTestDatabase();
    mockEnv = { DB: db };

    await insertMacroIndicator(db, {
      id: 'CPI:2024', series_id: 'INFLATION_CPI_ANNUAL', frequency: 'ANNUAL',
      period_year: 2024, value: 10.46, unit: '%', source_agency: 'World Bank', base_year: '2021-22'
    });

    await insertBankBranch(db, {
      routing_number: '010010048', bank_code: '010', bank_name: 'AGRANI BANK PLC',
      branch_name: 'BADHAL BAZAR', district: 'BAGERHAT', payable: 1, updated_at: '2026-09-06'
    });
  });

  it('handles health check at /health', async () => {
    const req = new Request('http://localhost/health');
    const res = await worker.fetch(req, mockEnv as any, {} as any);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.status).toBe('ok');
    expect(json.name).toBe('shorkari-mcp');
  });

  it('handles MCP initialize handshake over /mcp', async () => {
    const req = new Request('http://localhost/mcp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'initialize', params: {} })
    });
    const res = await worker.fetch(req, mockEnv as any, {} as any);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.result.serverInfo.name).toBe('shorkari-mcp');
    expect(json.result.serverInfo.version).toBe('0.1.0');
  });

  it('lists registered tools upon tools/list', async () => {
    const req = new Request('http://localhost/mcp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 2, method: 'tools/list', params: {} })
    });
    const res = await worker.fetch(req, mockEnv as any, {} as any);
    expect(res.status).toBe(200);
    const json = await res.json();
    const toolNames = json.result.tools.map((t: any) => t.name);
    expect(toolNames).toContain('get_inflation_history');
    expect(toolNames).toContain('lookup_bank_routing');
    expect(toolNames).toContain('get_macro_snapshot');
  });

  it('executes get_inflation_history through tools/call', async () => {
    const req = new Request('http://localhost/mcp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 3,
        method: 'tools/call',
        params: {
          name: 'get_inflation_history',
          arguments: { start_year: 2020 }
        }
      })
    });
    const res = await worker.fetch(req, mockEnv as any, {} as any);
    expect(res.status).toBe(200);
    const json = await res.json();
    const content = JSON.parse(json.result.content[0].text);
    expect(content.length).toBe(1);
    expect(content[0].period_year).toBe(2024);
    expect(content[0].inflation_rate).toBe(10.46);
    expect(content[0].base_year).toBe('2021-22');
  });

  it('executes lookup_bank_routing through tools/call', async () => {
    const req = new Request('http://localhost/mcp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 4,
        method: 'tools/call',
        params: {
          name: 'lookup_bank_routing',
          arguments: { query: '010010048' }
        }
      })
    });
    const res = await worker.fetch(req, mockEnv as any, {} as any);
    expect(res.status).toBe(200);
    const json = await res.json();
    const content = JSON.parse(json.result.content[0].text);
    expect(content.length).toBe(1);
    expect(content[0].bank_name).toBe('AGRANI BANK PLC');
  });
});
