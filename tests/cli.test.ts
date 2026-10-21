import { describe, it, expect } from 'vitest';
import { spawn } from 'node:child_process';
import dns from 'node:dns';
try {
  dns.setDefaultResultOrder('ipv4first');
} catch {}
import { resolve } from 'node:path';

describe('Stdio CLI Wrapper', () => {
  it('handles tools/list over stdio', async () => {
    const cliPath = resolve(process.cwd(), 'bin/cli.ts');
    const proc = spawn('bun', ['run', cliPath], {
      stdio: ['pipe', 'pipe', 'pipe'],
      env: { ...process.env, BDMCP_URL: 'https://bdmcp.nadimtuhin.com/mcp' }
    });

    const outputPromise = new Promise<string>((resolve, reject) => {
      let stdout = '';
      proc.stdout.on('data', chunk => {
        stdout += chunk.toString();
        if (stdout.includes('\n')) {
          resolve(stdout.trim());
        }
      });
      proc.stderr.on('data', chunk => {
        // stderr is okay for logs
      });
      proc.on('error', reject);
    });

    proc.stdin.write(JSON.stringify({ jsonrpc: '2.0', method: 'tools/list', id: 1 }) + '\n');

    const output = await outputPromise;
    proc.kill();

    const response = JSON.parse(output);
    expect(response.jsonrpc).toBe('2.0');
    expect(response.id).toBe(1);
    expect(response.result).toBeDefined();
    expect(response.result.tools).toBeInstanceOf(Array);
    const toolNames = response.result.tools.map((t: any) => t.name);
    expect(toolNames).toContain('get_inflation_history');
    expect(toolNames).toContain('lookup_bank_routing');
    expect(toolNames).toContain('search_laws');
  });
});
