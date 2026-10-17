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
