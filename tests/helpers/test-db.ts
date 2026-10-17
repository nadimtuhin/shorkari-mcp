import { Database } from 'bun:sqlite';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { DatabaseExecutor } from '../../src/db/adapter';

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
