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
