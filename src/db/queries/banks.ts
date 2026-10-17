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

export async function queryBankBranches(
  db: DatabaseExecutor,
  opts: { query: string; district?: string; payable_only?: boolean; limit?: number }
) {
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
