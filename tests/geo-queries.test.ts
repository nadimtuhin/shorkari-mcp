import { describe, it, expect, beforeEach } from 'vitest';
import { createTestDatabase } from './helpers/test-db';
import { queryLocation, insertDivision, insertDistrict, insertUpazila, insertPostcode } from '../src/db/queries/geo';

describe('Location Hierarchy Query Engine', () => {
  let db: any;

  beforeEach(async () => {
    db = createTestDatabase();
    await insertDivision(db, { id: '3', name: 'Dhaka', bn_name: 'ঢাকা', lat: 23.71, long: 90.4 });
    await insertDistrict(db, { id: '1', division_id: '3', name: 'Dhaka', bn_name: 'ঢাকা', lat: 23.81, long: 90.41 });
    await insertUpazila(db, { id: '1', district_id: '1', name: 'Dhanmondi', bn_name: 'ধানমন্ডি' });
    await insertPostcode(db, { division_id: '3', district_id: '1', upazila: 'Dhanmondi', post_office: 'Jigatola', post_code: '1209' });
  });

  it('resolves location hierarchy by 4-digit postal code', async () => {
    const res = await queryLocation(db, { query: '1209' });
    expect(res.postcodes.length).toBe(1);
    expect(res.postcodes[0].post_office).toBe('Jigatola');
    expect(res.postcodes[0].district_name).toBe('Dhaka');
  });

  it('searches location by English name', async () => {
    const res = await queryLocation(db, { query: 'Dhanmondi' });
    expect(res.upazilas.length).toBe(1);
    expect(res.upazilas[0].name).toBe('Dhanmondi');
  });

  it('searches location by Bengali script', async () => {
    const res = await queryLocation(db, { query: 'ধানমন্ডি' });
    expect(res.upazilas.length).toBe(1);
    expect(res.upazilas[0].bn_name).toBe('ধানমন্ডি');
  });
});

describe('Location queries with Bangla input variants', () => {
  // Mymensingh in Bangla with য় as the single precomposed code point U+09DF, as in migrations/0002_seed_data.sql
  const MYMENSINGH_BN = '\u09AE\u09DF\u09AE\u09A8\u09B8\u09BF\u0982\u09B9';
  let db: any;

  beforeEach(async () => {
    db = createTestDatabase();
    // Seed data stores ড়/ঢ়/য় as precomposed code points (U+09DC/U+09DD/U+09DF).
    await insertDivision(db, { id: '8', name: 'Mymensingh', bn_name: MYMENSINGH_BN });
    await insertDistrict(db, { id: '10', division_id: '8', name: 'Mymensingh', bn_name: MYMENSINGH_BN });
    await insertUpazila(db, { id: '77', district_id: '10', name: 'Gouripur', bn_name: 'গৌরীপুর' });
    await insertPostcode(db, { division_id: '8', district_id: '10', upazila: 'Mymensingh Sadar', post_office: 'Mymensingh', post_code: '2200' });
  });

  it('resolves a postal code typed with Bangla digits', async () => {
    const res = await queryLocation(db, { query: '২২০০' });
    expect(res.postcodes.length).toBe(1);
    expect(res.postcodes[0].post_office).toBe('Mymensingh');
  });

  it('matches names whose nukta letters arrive decomposed (Unicode NFC form)', async () => {
    const nfc = MYMENSINGH_BN.normalize('NFC');
    expect(nfc).not.toBe(MYMENSINGH_BN);
    const res = await queryLocation(db, { query: nfc });
    expect(res.districts.length).toBe(1);
    expect(res.districts[0].name).toBe('Mymensingh');
  });
});
