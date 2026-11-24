import { describe, it, expect } from 'bun:test';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const readme = readFileSync(resolve(process.cwd(), 'README.md'), 'utf8');
const configs = [...readme.matchAll(/```json\n([\s\S]*?)```/g)].map((m) => JSON.parse(m[1]));

describe('README MCP client config', () => {
  it('only uses transport types that MCP clients recognise', () => {
    for (const cfg of configs) {
      for (const server of Object.values<any>(cfg.mcpServers ?? {})) {
        if (server.type !== undefined) expect(['stdio', 'sse', 'http']).toContain(server.type);
      }
    }
  });

  it('does not tell users to npx a package that is not published (bdmcp 404s on npm)', () => {
    expect(readme).not.toMatch(/npx\s+-y\s+bdmcp\b/);
    for (const cfg of configs) {
      for (const server of Object.values<any>(cfg.mcpServers ?? {})) {
        expect(server.args ?? []).not.toContain('bdmcp');
      }
    }
  });

  it('points the stdio config at the CLI that ships in this repo', () => {
    expect(existsSync(resolve(process.cwd(), 'bin/cli.ts'))).toBe(true);
    const stdio = configs.flatMap((c) => Object.values<any>(c.mcpServers ?? {})).filter((s) => s.command);
    expect(stdio.length).toBeGreaterThan(0);
    for (const s of stdio) expect(s.args.some((a: string) => a.endsWith('bin/cli.ts'))).toBe(true);
  });
});
