import { describe, it, expect } from 'bun:test';
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';
import { resolve } from 'node:path';

describe('Stdio CLI wrapper timeout', () => {
  it('returns a JSON-RPC error when the upstream never responds', async () => {
    // A TCP server that accepts connections but never answers the HTTP request.
    const sockets: any[] = [];
    const server = createServer((s) => sockets.push(s));
    await new Promise<void>((r) => server.listen(0, '127.0.0.1', () => r()));
    const port = (server.address() as any).port;

    const proc = spawn('bun', ['run', resolve(process.cwd(), 'bin/cli.ts')], {
      stdio: ['pipe', 'pipe', 'pipe'],
      env: { ...process.env, BDMCP_URL: `http://127.0.0.1:${port}/mcp`, BDMCP_TIMEOUT_MS: '300' }
    });

    try {
      const line = await new Promise<string>((res, rej) => {
        let out = '';
        const timer = setTimeout(() => rej(new Error('CLI produced no response within 4s')), 4000);
        proc.stdout.on('data', (c) => {
          out += c.toString();
          if (out.includes('\n')) {
            clearTimeout(timer);
            res(out.trim());
          }
        });
        proc.on('error', rej);
        proc.stdin.write(JSON.stringify({ jsonrpc: '2.0', id: 9, method: 'tools/list' }) + '\n');
      });

      const msg = JSON.parse(line);
      expect(msg.id).toBe(9);
      expect(msg.error.code).toBe(-32603);
      expect(msg.error.message).toMatch(/timed out/i);
    } finally {
      proc.kill();
      sockets.forEach((s) => s.destroy());
      server.close();
    }
  }, 10000);
});
