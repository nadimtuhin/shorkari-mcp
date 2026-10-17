import { Database } from 'bun:sqlite';
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
  sqlite.run(schema);

  return {
    async all<T = any>(sql: string, params: any[] = []): Promise<T[]> {
      const stmt = sqlite.prepare(sql);
      return stmt.all(...params) as T[];
    },
    async get<T = any>(sql: string, params: any[] = []): Promise<T | null> {
      const stmt = sqlite.prepare(sql);
      const res = stmt.get(...params);
      return (res as T) ?? null;
    },
    async run(sql: string, params: any[] = []) {
      const stmt = sqlite.prepare(sql);
      const info = stmt.run(...params);
      return { changes: info.changes, lastInsertRowid: info.lastInsertRowid };
    }
  };
}

export function wrapD1(d1: any): DatabaseExecutor {
  return {
    async all<T = any>(sql: string, params: any[] = []): Promise<T[]> {
      const stmt = d1.prepare(sql).bind(...params);
      const res = await stmt.all();
      return res.results as T[];
    },
    async get<T = any>(sql: string, params: any[] = []): Promise<T | null> {
      const stmt = d1.prepare(sql).bind(...params);
      return (await stmt.first()) ?? null;
    },
    async run(sql: string, params: any[] = []) {
      const stmt = d1.prepare(sql).bind(...params);
      const res = await stmt.run();
      return { changes: res.meta?.changes ?? 0, lastInsertRowid: res.meta?.last_row_id ?? 0 };
    }
  };
}
