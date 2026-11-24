#!/usr/bin/env node
import dns from 'node:dns';
try {
  dns.setDefaultResultOrder('ipv4first');
} catch {}
import { createInterface } from 'node:readline';

const ENDPOINT = process.env.BDMCP_URL || 'https://bdmcp.nadimtuhin.com/mcp';
const parsedTimeout = Number(process.env.BDMCP_TIMEOUT_MS);
const TIMEOUT_MS = Number.isFinite(parsedTimeout) && parsedTimeout > 0 ? parsedTimeout : 30000;

const rl = createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', async (line) => {
  const trimmed = line.trim();
  if (!trimmed) return;

  let parsed: any;
  try {
    parsed = JSON.parse(trimmed);
  } catch {
    process.stderr.write(`[bdmcp-cli] Failed to parse input JSON: ${trimmed}\n`);
    return;
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'bdmcp-cli/0.1.0'
      },
      body: JSON.stringify(parsed),
      signal: AbortSignal.timeout(TIMEOUT_MS)
    });

    if (!res.ok) {
      if (parsed.id !== undefined) {
        process.stdout.write(
          JSON.stringify({
            jsonrpc: '2.0',
            id: parsed.id,
            error: {
              code: -32603,
              message: `Upstream error: HTTP ${res.status} ${res.statusText}`
            }
          }) + '\n'
        );
      }
      return;
    }

    if (res.status === 202 || parsed.id === undefined) return;

    const data = await res.json();
    process.stdout.write(JSON.stringify(data) + '\n');
  } catch (err: any) {
    if (parsed.id !== undefined) {
      process.stdout.write(
        JSON.stringify({
          jsonrpc: '2.0',
          id: parsed.id,
          error: {
            code: -32603,
            message:
              err?.name === 'TimeoutError'
                ? `Request to ${ENDPOINT} timed out after ${TIMEOUT_MS}ms`
                : `Failed to connect to ${ENDPOINT}: ${err?.message || String(err)}`
          }
        }) + '\n'
      );
    }
  }
});
