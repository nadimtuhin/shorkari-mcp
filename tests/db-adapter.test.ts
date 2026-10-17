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
