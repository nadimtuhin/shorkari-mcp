import type { DatabaseExecutor } from '../adapter';

export interface LegalActRecord {
  id: string;
  act_no: string;
  year: number;
  title_en: string;
  title_bn?: string | null;
  is_repealed?: number;
  sections_count?: number | null;
  source_url: string;
}

export async function insertLegalAct(db: DatabaseExecutor, act: LegalActRecord) {
  await db.run(
    `INSERT OR REPLACE INTO legal_acts 
     (id, act_no, year, title_en, title_bn, is_repealed, sections_count, source_url) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [act.id, act.act_no, act.year, act.title_en, act.title_bn ?? null, act.is_repealed ?? 0, act.sections_count ?? null, act.source_url]
  );
}

export async function queryLegalActs(
  db: DatabaseExecutor,
  opts: { query: string; year?: number; active_only?: boolean; limit?: number }
) {
  const q = opts.query.trim();
  const limit = Math.min(opts.limit ?? 10, 50);
  const whereClauses: string[] = ['(title_en LIKE ? OR title_bn LIKE ?)'];
  const params: any[] = [`%${q}%`, `%${q}%`];

  if (opts.year) {
    whereClauses.push('year = ?');
    params.push(opts.year);
  }

  if (opts.active_only !== false) {
    whereClauses.push('is_repealed = 0');
  }

  const whereSql = whereClauses.join(' AND ');
  params.push(limit);

  return db.all<LegalActRecord>(
    `SELECT id, act_no, year, title_en, title_bn, is_repealed, sections_count, source_url 
     FROM legal_acts 
     WHERE ${whereSql} 
     ORDER BY year DESC, act_no ASC LIMIT ?`,
    params
  );
}
