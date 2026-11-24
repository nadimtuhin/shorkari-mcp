import { describe, it, expect, beforeEach } from 'vitest';
import { createTestDatabase } from './helpers/test-db';
import { queryLegalActs, insertLegalAct } from '../src/db/queries/laws';

describe('Laws of Bangladesh Query Engine', () => {
  let db: any;

  beforeEach(async () => {
    db = createTestDatabase();

    await insertLegalAct(db, {
      id: 'act-1994-18',
      act_no: '18',
      year: 1994,
      title_en: 'The Companies Act, 1994',
      title_bn: 'কোম্পানি আইন, ১৯৯৪',
      is_repealed: 0,
      sections_count: 404,
      source_url: 'http://bdlaws.minlaw.gov.bd/act-18.html'
    });

    await insertLegalAct(db, {
      id: 'act-1913-07',
      act_no: '07',
      year: 1913,
      title_en: 'The Companies Act, 1913',
      title_bn: 'কোম্পানি আইন, ১৯১৩',
      is_repealed: 1,
      sections_count: 290,
      source_url: 'http://bdlaws.minlaw.gov.bd/act-7.html'
    });

    await insertLegalAct(db, {
      id: 'act-2023-38',
      act_no: '38',
      year: 2023,
      title_en: 'Cyber Security Act, 2023',
      title_bn: 'সাইবার নিরাপত্তা আইন, ২০২৩',
      is_repealed: 0,
      sections_count: 60,
      source_url: 'http://bdlaws.minlaw.gov.bd/act-38.html'
    });
  });

  it('searches acts by English title keyword', async () => {
    const res = await queryLegalActs(db, { query: 'Cyber' });
    expect(res.length).toBe(1);
    expect(res[0].title_en).toBe('Cyber Security Act, 2023');
    expect(res[0].year).toBe(2023);
  });

  it('filters out repealed acts when active_only is true', async () => {
    const activeOnly = await queryLegalActs(db, { query: 'Companies', active_only: true });
    expect(activeOnly.length).toBe(1);
    expect(activeOnly[0].year).toBe(1994);

    const all = await queryLegalActs(db, { query: 'Companies', active_only: false });
    expect(all.length).toBe(2);
  });
});

describe('Laws search with decomposed Bangla nukta letters', () => {
  it('finds an act whose stored Bangla title uses precomposed য়', async () => {
    const db = createTestDatabase();
    // "আয়কর আইন, ২০২৩" (Income Tax Act 2023) with য় stored as U+09DF
    const titleBn = 'আয়কর আইন, ২০২৩';
    await insertLegalAct(db, {
      id: 'act-2023-12', act_no: '12', year: 2023, title_en: 'The Income Tax Act, 2023',
      title_bn: titleBn, is_repealed: 0, sections_count: 350, source_url: 'http://bdlaws.minlaw.gov.bd/act-1430.html'
    });
    const res = await queryLegalActs(db, { query: 'আয়কর'.normalize('NFC') });
    expect(res.length).toBe(1);
    expect(res[0].title_bn).toBe(titleBn);
  });
});
