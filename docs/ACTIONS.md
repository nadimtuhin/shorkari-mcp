# BDMCP MCP — Agent Workable Actions (Red-Green TDD Playbook)

> **Execution Directive for AI Agents:**
> Follow each action in strict order.
> Rule: Write the failing test first (RED), execute test runner to verify it fails with the expected error, write the minimal code to pass (GREEN), run the test to verify it passes, then commit. Never skip the red phase.

---

## Action 1: Project Scaffolding & Test Harness Setup

### Objective
Initialize a minimal Bun + TypeScript project configured with `@modelcontextprotocol/sdk`, `zod`, and `vitest`.

### Files
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `wrangler.toml`
- Create: `tests/sanity.test.ts`

### Step 1: Write failing test (RED)
```typescript
// tests/sanity.test.ts
import { describe, it, expect } from 'vitest';

describe('Test Harness Sanity', () => {
  it('verifies test environment is active', () => {
    const environment: string = process.env.NODE_ENV || 'test';
    expect(environment).toBe('test');
  });
});
```

### Step 2: Run test (Verify RED)
```bash
bun test tests/sanity.test.ts
```
*Expected Failure:* `error: Cannot find package "vitest"` or config missing.

### Step 3: Implement minimal configuration (GREEN)
1. Write `package.json`:
```json
{
  "name": "bdmcp",
  "version": "0.1.0",
  "description": "Unofficial Model Context Protocol server for Bangladesh public data",
  "main": "src/index.ts",
  "type": "module",
  "bin": {
    "bdmcp": "./bin/cli.ts"
  },
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest",
    "build": "wrangler deploy --dry-run",
    "deploy": "wrangler deploy"
  },
  "dependencies": {
    "@modelcontextprotocol/sdk": "^1.6.0",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@cloudflare/workers-types": "^4.20250224.0",
    "better-sqlite3": "^11.8.1",
    "@types/better-sqlite3": "^7.6.12",
    "typescript": "^5.7.3",
    "vitest": "^3.0.7",
    "wrangler": "^3.111.0"
  }
}
```
2. Write `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "skipLibCheck": true,
    "types": ["@cloudflare/workers-types", "vitest/globals"]
  },
  "include": ["src/**/*", "tests/**/*", "scripts/**/*"]
}
```
3. Write `wrangler.toml`:
```toml
name = "bdmcp"
main = "src/index.ts"
compatibility_date = "2024-11-05"
compatibility_flags = ["nodejs_compat"]

[[d1_databases]]
binding = "DB"
database_name = "bdmcp_production"
database_id = "shorkari-d1-local"
```
4. Install dependencies:
```bash
bun install
```

### Step 4: Run test (Verify GREEN)
```bash
bun test tests/sanity.test.ts
```
*Expected Output:* `1 passed`.

### Step 5: Commit
```bash
git add package.json tsconfig.json wrangler.toml bun.lock tests/sanity.test.ts
git commit -m "chore: setup project scaffolding with MCP SDK and test harness"
```

---

## Action 2: Bengali Numeral & Price Range Normalizer (Unit TDD)

### Objective
Implement pure functions to normalize Bengali digits (`০-৯`), strip currency commas, and parse hyphenated price ranges (`"৭২.০০ - ৭৫.০০"`).

### Files
- Test: `tests/bangla.test.ts`
- Create: `src/utils/bangla.ts`

### Step 1: Write failing test (RED)
```typescript
// tests/bangla.test.ts
import { describe, it, expect } from 'vitest';
import { toAsciiDigits, parseBnFloat, parseBnRange } from '../src/utils/bangla';

describe('Bengali Numeral Normalizer', () => {
  it('converts Bengali digits to standard ASCII digits', () => {
    expect(toAsciiDigits('০১২৩৪৫৬৭৮৯')).toBe('0123456789');
    expect(toAsciiDigits('দাম: ১২০.৫০ টাকা')).toBe('দাম: 120.50 টাকা');
  });

  it('parses Bengali formatted numbers into floats', () => {
    expect(parseBnFloat('১,২৫০.৫০')).toBe(1250.5);
    expect(parseBnFloat('৭৫')).toBe(75.0);
    expect(parseBnFloat('invalid')).toBe(null);
  });

  it('parses price range strings into min and max numbers', () => {
    expect(parseBnRange('৭২.০০ - ৭৫.০০')).toEqual({ min: 72.0, max: 75.0 });
    expect(parseBnRange('১০০ - ১২০')).toEqual({ min: 100.0, max: 120.0 });
    expect(parseBnRange('৫০.০০')).toEqual({ min: 50.0, max: 50.0 });
    expect(parseBnRange('')).toBe(null);
  });
});
```

### Step 2: Run test (Verify RED)
```bash
bun test tests/bangla.test.ts
```
*Expected Failure:* `Cannot find module '../src/utils/bangla'`.

### Step 3: Implement minimal code (GREEN)
```typescript
// src/utils/bangla.ts
const BN_DIGIT_MAP: Record<string, string> = {
  '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4',
  '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9'
};

export function toAsciiDigits(input: string): string {
  return input.replace(/[০-৯]/g, (digit) => BN_DIGIT_MAP[digit] || digit);
}

export function parseBnFloat(input: string): number | null {
  if (!input) return null;
  const ascii = toAsciiDigits(input).replace(/,/g, '').trim();
  const match = ascii.match(/-?\d+(\.\d+)?/);
  if (!match) return null;
  const num = parseFloat(match[0]);
  return isNaN(num) ? null : num;
}

export function parseBnRange(input: string): { min: number; max: number } | null {
  if (!input) return null;
  const ascii = toAsciiDigits(input).replace(/,/g, '').trim();
  const parts = ascii.split(/\s*-\s*/);
  if (parts.length === 1) {
    const val = parseBnFloat(parts[0]);
    return val !== null ? { min: val, max: val } : null;
  }
  const min = parseBnFloat(parts[0]);
  const max = parseBnFloat(parts[1]);
  if (min === null || max === null) return null;
  return { min: Math.min(min, max), max: Math.max(min, max) };
}
```

### Step 4: Run test (Verify GREEN)
```bash
bun test tests/bangla.test.ts
```
*Expected Output:* `3 passed`.

### Step 5: Commit
```bash
git add src/utils/bangla.ts tests/bangla.test.ts
git commit -m "feat(utils): add Bengali numeral and price range parser with unit tests"
```

---

## Action 3: Database Schema Migration & D1 In-Memory Adapter

### Objective
Create the initial SQLite DDL migration file and a typed query runner that works against both Cloudflare D1 and `better-sqlite3` during local unit tests.

### Files
- Create: `migrations/0001_initial_schema.sql`
- Create: `src/db/adapter.ts`
- Test: `tests/db-adapter.test.ts`

### Step 1: Write failing test (RED)
```typescript
// tests/db-adapter.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { createTestDatabase } from '../src/db/adapter';

describe('Database Adapter Seam', () => {
  let db: any;

  beforeEach(() => {
    db = createTestDatabase();
  });

  it('initializes schema without syntax errors', async () => {
    const tables = await db.all("SELECT name FROM sqlite_master WHERE type='table'");
    const names = tables.map((t: any) => t.name);
    expect(names).toContain('macro_indicators');
    expect(names).toContain('bank_branches');
    expect(names).toContain('commodity_prices');
    expect(names).toContain('districts');
  });

  it('prevents SQL injection via parameterized queries', async () => {
    await db.run(
      "INSERT INTO macro_indicators (id, series_id, frequency, period_year, value, unit, source_agency) VALUES (?, ?, ?, ?, ?, ?, ?)",
      ["TEST:1", "INFLATION", "ANNUAL", 2024, 9.8, "%", "BBS"]
    );
    const rows = await db.all("SELECT * FROM macro_indicators WHERE period_year = ?", [2024]);
    expect(rows.length).toBe(1);
    expect(rows[0].value).toBe(9.8);
  });
});
```

### Step 2: Run test (Verify RED)
```bash
bun test tests/db-adapter.test.ts
```
*Expected Failure:* `Cannot find module '../src/db/adapter'`.

### Step 3: Implement minimal code (GREEN)
1. Create `migrations/0001_initial_schema.sql` with the DDL from `PLAN.md`.
2. Implement `src/db/adapter.ts`:
```typescript
// src/db/adapter.ts
import Database from 'better-sqlite3';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export interface DatabaseExecutor {
  all<T = any>(sql: string, params?: any[]): Promise<T[]>;
  get<T = any>(sql: string, params?: any[]): Promise<T | null>;
  run(sql: string, params?: any[]): Promise<{ changes: number; lastInsertRowid: number | bigint }>;
}

export function createTestDatabase(): DatabaseExecutor {
  const sqlite = new Database(':memory:');
  const schemaPath = resolve(process.cwd(), 'migrations/0001_initial_schema.sql');
  const schema = readFileSync(schemaPath, 'utf8');
  sqlite.exec(schema);

  return {
    async all<T = any>(sql: string, params: any[] = []): Promise<T[]> {
      return sqlite.prepare(sql).all(...params) as T[];
    },
    async get<T = any>(sql: string, params: any[] = []): Promise<T | null> {
      const res = sqlite.prepare(sql).get(...params);
      return (res as T) ?? null;
    },
    async run(sql: string, params: any[] = []) {
      const info = sqlite.prepare(sql).run(...params);
      return { changes: info.changes, lastInsertRowid: info.lastInsertRowid };
    }
  };
}

export function wrapD1(d1: D1Database): DatabaseExecutor {
  return {
    async all<T = any>(sql: string, params: any[] = []): Promise<T[]> {
      const stmt = d1.prepare(sql).bind(...params);
      const res = await stmt.all<T>();
      return res.results;
    },
    async get<T = any>(sql: string, params: any[] = []): Promise<T | null> {
      const stmt = d1.prepare(sql).bind(...params);
      return (await stmt.first<T>()) ?? null;
    },
    async run(sql: string, params: any[] = []) {
      const stmt = d1.prepare(sql).bind(...params);
      const res = await stmt.run();
      return { changes: res.meta.changes, lastInsertRowid: res.meta.last_row_id };
    }
  };
}
```

### Step 4: Run test (Verify GREEN)
```bash
bun test tests/db-adapter.test.ts
```
*Expected Output:* `2 passed`.

### Step 5: Commit
```bash
git add migrations/0001_initial_schema.sql src/db/adapter.ts tests/db-adapter.test.ts
git commit -m "feat(db): add initial schema migration and unified D1/SQLite adapter"
```

---

## Action 4: Macro & Inflation Query Engine (TDD)

### Objective
Implement `queryInflationHistory` and `queryMacroSnapshot` queries with date filtering and base-year assertions.

### Files
- Test: `tests/macro-queries.test.ts`
- Create: `src/db/queries/macro.ts`

### Step 1: Write failing test (RED)
```typescript
// tests/macro-queries.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { createTestDatabase } from '../src/db/adapter';
import { queryInflationHistory, queryMacroSnapshot, insertMacroIndicator } from '../src/db/queries/macro';

describe('Macro Indicators Query Engine', () => {
  let db: any;

  beforeEach(async () => {
    db = createTestDatabase();
    await insertMacroIndicator(db, {
      id: 'CPI:2024', series_id: 'INFLATION_CPI_ANNUAL', frequency: 'ANNUAL',
      period_year: 2024, value: 10.46, unit: '%', source_agency: 'World Bank', base_year: '2021-22'
    });
    await insertMacroIndicator(db, {
      id: 'CPI:2022', series_id: 'INFLATION_CPI_ANNUAL', frequency: 'ANNUAL',
      period_year: 2022, value: 7.7, unit: '%', source_agency: 'World Bank', base_year: '2005-06'
    });
    await insertMacroIndicator(db, {
      id: 'RES:BPM6:2026-09', series_id: 'RESERVES_BPM6_USD', frequency: 'MONTHLY',
      period_year: 2026, period_month: 9, value: 31198.9, unit: 'USD_MN', source_agency: 'Bangladesh Bank'
    });
  });

  it('filters inflation history by year range in descending order', async () => {
    const results = await queryInflationHistory(db, { start_year: 2020, end_year: 2025 });
    expect(results.length).toBe(2);
    expect(results[0].period_year).toBe(2024);
    expect(results[0].base_year).toBe('2021-22');
  });

  it('retrieves latest macro snapshot across indicators', async () => {
    const snapshot = await queryMacroSnapshot(db);
    expect(snapshot.reserves_bpm6_usd).toBe(31198.9);
    expect(snapshot.latest_inflation_rate).toBe(10.46);
  });
});
```

### Step 2: Run test (Verify RED)
```bash
bun test tests/macro-queries.test.ts
```
*Expected Failure:* `Cannot find module '../src/db/queries/macro'`.

### Step 3: Implement minimal code (GREEN)
```typescript
// src/db/queries/macro.ts
import type { DatabaseExecutor } from '../adapter';

export interface MacroRecord {
  id: string;
  series_id: string;
  frequency: string;
  period_year: number;
  period_month?: number | null;
  value: number;
  unit: string;
  source_agency: string;
  base_year?: string | null;
}

export async function insertMacroIndicator(db: DatabaseExecutor, rec: MacroRecord) {
  await db.run(
    `INSERT OR REPLACE INTO macro_indicators 
     (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [rec.id, rec.series_id, rec.frequency, rec.period_year, rec.period_month ?? null, rec.value, rec.unit, rec.source_agency, rec.base_year ?? null]
  );
}

export async function queryInflationHistory(db: DatabaseExecutor, opts: { start_year?: number; end_year?: number } = {}) {
  const start = opts.start_year ?? 1960;
  const end = opts.end_year ?? new Date().getFullYear();
  return db.all<MacroRecord>(
    `SELECT period_year, period_month, value as inflation_rate, unit, source_agency, base_year 
     FROM macro_indicators 
     WHERE series_id = 'INFLATION_CPI_ANNUAL' AND period_year BETWEEN ? AND ? 
     ORDER BY period_year DESC`,
    [start, end]
  );
}

export async function queryMacroSnapshot(db: DatabaseExecutor) {
  const latestInflation = await db.get<any>(
    "SELECT value FROM macro_indicators WHERE series_id = 'INFLATION_CPI_ANNUAL' ORDER BY period_year DESC LIMIT 1"
  );
  const latestReserves = await db.get<any>(
    "SELECT value FROM macro_indicators WHERE series_id = 'RESERVES_BPM6_USD' ORDER BY period_year DESC, period_month DESC LIMIT 1"
  );
  return {
    latest_inflation_rate: latestInflation?.value ?? null,
    reserves_bpm6_usd: latestReserves?.value ?? null
  };
}
```

### Step 4: Run test (Verify GREEN)
```bash
bun test tests/macro-queries.test.ts
```
*Expected Output:* `2 passed`.

### Step 5: Commit
```bash
git add src/db/queries/macro.ts tests/macro-queries.test.ts
git commit -m "feat(queries): add macro and inflation query handlers with TDD"
```

---

## Action 5: Bank Routing & Branch Search Engine (TDD)

### Objective
Implement `queryBankBranches` supporting 9-digit exact routing number match, bank name search, and payable status filtering.

### Files
- Test: `tests/bank-queries.test.ts`
- Create: `src/db/queries/banks.ts`

### Step 1: Write failing test (RED)
```typescript
// tests/bank-queries.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { createTestDatabase } from '../src/db/adapter';
import { queryBankBranches, insertBankBranch } from '../src/db/queries/banks';

describe('Bank Routing Query Engine', () => {
  let db: any;

  beforeEach(async () => {
    db = createTestDatabase();
    await insertBankBranch(db, {
      routing_number: '010010048', bank_code: '010', bank_name: 'AGRANI BANK PLC',
      branch_name: 'BADHAL BAZAR', district: 'BAGERHAT', payable: 1, updated_at: '2026-09-06'
    });
    await insertBankBranch(db, {
      routing_number: '999010011', bank_code: '999', bank_name: 'SETTLEMENT CLEARING',
      branch_name: 'CLEARING HUB', district: 'DHAKA', payable: 0, updated_at: '2026-09-06'
    });
  });

  it('finds branch by exact 9-digit routing number', async () => {
    const res = await queryBankBranches(db, { query: '010010048' });
    expect(res.length).toBe(1);
    expect(res[0].bank_name).toBe('AGRANI BANK PLC');
    expect(res[0].payable).toBe(1);
  });

  it('filters out non-payable branches when requested', async () => {
    const all = await queryBankBranches(db, { query: 'CLEARING', payable_only: false });
    expect(all.length).toBe(1);
    const payables = await queryBankBranches(db, { query: 'CLEARING', payable_only: true });
    expect(payables.length).toBe(0);
  });
});
```

### Step 2: Run test (Verify RED)
```bash
bun test tests/bank-queries.test.ts
```
*Expected Failure:* `Cannot find module '../src/db/queries/banks'`.

### Step 3: Implement minimal code (GREEN)
```typescript
// src/db/queries/banks.ts
import type { DatabaseExecutor } from '../adapter';

export interface BankBranchRecord {
  routing_number: string;
  bank_code: string;
  bank_name: string;
  branch_name: string;
  district: string;
  payable: number;
  swift_code?: string | null;
  updated_at: string;
}

export async function insertBankBranch(db: DatabaseExecutor, br: BankBranchRecord) {
  await db.run(
    `INSERT OR REPLACE INTO bank_branches 
     (routing_number, bank_code, bank_name, branch_name, district, payable, swift_code, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [br.routing_number, br.bank_code, br.bank_name, br.branch_name, br.district, br.payable, br.swift_code ?? null, br.updated_at]
  );
}

export async function queryBankBranches(db: DatabaseExecutor, opts: { query: string; district?: string; payable_only?: boolean; limit?: number }) {
  const q = opts.query.trim();
  const limit = Math.min(opts.limit ?? 10, 50);
  const payableFilter = opts.payable_only !== false ? 'AND payable = 1' : '';

  if (/^\d{9}$/.test(q)) {
    return db.all<BankBranchRecord>(
      `SELECT * FROM bank_branches WHERE routing_number = ? ${payableFilter}`,
      [q]
    );
  }

  const districtClause = opts.district ? 'AND district = ?' : '';
  const params: any[] = [`%${q}%`, `%${q}%`];
  if (opts.district) params.push(opts.district.toUpperCase());
  params.push(limit);

  return db.all<BankBranchRecord>(
    `SELECT * FROM bank_branches 
     WHERE (bank_name LIKE ? OR branch_name LIKE ?) ${districtClause} ${payableFilter}
     ORDER BY bank_name, branch_name LIMIT ?`,
    params
  );
}
```

### Step 4: Run test (Verify GREEN)
```bash
bun test tests/bank-queries.test.ts
```
*Expected Output:* `2 passed`.

### Step 5: Commit
```bash
git add src/db/queries/banks.ts tests/bank-queries.test.ts
git commit -m "feat(queries): add bank routing and branch search with payable filter"
```

---

## Action 6: MCP Streamable-HTTP Protocol Handler (E2E TDD)

### Objective
Implement the Cloudflare Worker request handler exposing MCP protocol endpoints (`tools/list` and `tools/call`) over HTTP POST.

### Files
- Test: `tests/mcp-worker.e2e.test.ts`
- Create: `src/index.ts`

### Step 1: Write failing test (RED)
```typescript
// tests/mcp-worker.e2e.test.ts
import { describe, it, expect } from 'vitest';
import worker from '../src/index';

describe('MCP Worker Protocol E2E', () => {
  it('handles MCP initialize handshake', async () => {
    const req = new Request('http://localhost/mcp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'initialize', params: {} })
    });
    const res = await worker.fetch(req, {} as any, {} as any);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.result.serverInfo.name).toBe('bdmcp');
  });

  it('lists registered tools upon tools/list', async () => {
    const req = new Request('http://localhost/mcp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 2, method: 'tools/list', params: {} })
    });
    const res = await worker.fetch(req, {} as any, {} as any);
    const json = await res.json();
    const toolNames = json.result.tools.map((t: any) => t.name);
    expect(toolNames).toContain('get_inflation_history');
    expect(toolNames).toContain('lookup_bank_routing');
  });
});
```

### Step 2: Run test (Verify RED)
```bash
bun test tests/mcp-worker.e2e.test.ts
```
*Expected Failure:* `Cannot find module '../src/index'`.

### Step 3: Implement minimal code (GREEN)
Implement `src/index.ts` connecting `@modelcontextprotocol/sdk` to Worker `fetch` handler.

### Step 4: Run test (Verify GREEN)
```bash
bun test tests/mcp-worker.e2e.test.ts
```
*Expected Output:* `2 passed`.

### Step 5: Commit
```bash
git add src/index.ts tests/mcp-worker.e2e.test.ts
git commit -m "feat(mcp): implement Worker MCP endpoint with tools/list and initialize"
```
