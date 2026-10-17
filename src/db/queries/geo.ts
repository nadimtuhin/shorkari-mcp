import type { DatabaseExecutor } from '../adapter';

export interface DivisionRecord {
  id: string;
  name: string;
  bn_name: string;
  lat?: number | null;
  long?: number | null;
}

export interface DistrictRecord {
  id: string;
  division_id: string;
  name: string;
  bn_name: string;
  lat?: number | null;
  long?: number | null;
}

export interface UpazilaRecord {
  id: string;
  district_id: string;
  name: string;
  bn_name: string;
}

export interface PostcodeRecord {
  id?: number;
  division_id: string;
  district_id: string;
  upazila: string;
  post_office: string;
  post_code: string;
}

export async function insertDivision(db: DatabaseExecutor, d: DivisionRecord) {
  await db.run(
    'INSERT OR REPLACE INTO divisions (id, name, bn_name, lat, long) VALUES (?, ?, ?, ?, ?)',
    [d.id, d.name, d.bn_name, d.lat ?? null, d.long ?? null]
  );
}

export async function insertDistrict(db: DatabaseExecutor, d: DistrictRecord) {
  await db.run(
    'INSERT OR REPLACE INTO districts (id, division_id, name, bn_name, lat, long) VALUES (?, ?, ?, ?, ?, ?)',
    [d.id, d.division_id, d.name, d.bn_name, d.lat ?? null, d.long ?? null]
  );
}

export async function insertUpazila(db: DatabaseExecutor, u: UpazilaRecord) {
  await db.run(
    'INSERT OR REPLACE INTO upazilas (id, district_id, name, bn_name) VALUES (?, ?, ?, ?)',
    [u.id, u.district_id, u.name, u.bn_name]
  );
}

export async function insertPostcode(db: DatabaseExecutor, p: PostcodeRecord) {
  await db.run(
    'INSERT INTO postcodes (division_id, district_id, upazila, post_office, post_code) VALUES (?, ?, ?, ?, ?)',
    [p.division_id, p.district_id, p.upazila, p.post_office, p.post_code]
  );
}

const HISTORIC_ALIASES: Record<string, string> = {
  chittagong: 'chattogram',
  bogra: 'bogura',
  jessore: 'jashore',
  barisal: 'barishal',
  comilla: 'cumilla'
};

export async function queryLocation(db: DatabaseExecutor, opts: { query: string; limit?: number }) {
  let q = opts.query.trim().toLowerCase();
  const limit = Math.min(opts.limit ?? 10, 50);

  if (HISTORIC_ALIASES[q]) {
    q = HISTORIC_ALIASES[q];
  }

  // Exact 4-digit postal code match
  if (/^\d{4}$/.test(q)) {
    const postcodes = await db.all<any>(
      `SELECT p.post_code, p.post_office, p.upazila, d.name as district_name, d.bn_name as district_bn, div.name as division_name 
       FROM postcodes p 
       JOIN districts d ON p.district_id = d.id 
       JOIN divisions div ON p.division_id = div.id 
       WHERE p.post_code = ? LIMIT ?`,
      [q, limit]
    );
    return { postcodes, upazilas: [], districts: [] };
  }

  const [postcodes, upazilas, districts] = await Promise.all([
    db.all<any>(
      `SELECT p.post_code, p.post_office, p.upazila, d.name as district_name 
       FROM postcodes p 
       JOIN districts d ON p.district_id = d.id 
       WHERE p.post_office LIKE ? OR p.upazila LIKE ? LIMIT ?`,
      [`%${q}%`, `%${q}%`, limit]
    ),
    db.all<any>(
      `SELECT u.id, u.name, u.bn_name, d.name as district_name 
       FROM upazilas u 
       JOIN districts d ON u.district_id = d.id 
       WHERE u.name LIKE ? OR u.bn_name LIKE ? LIMIT ?`,
      [`%${q}%`, `%${q}%`, limit]
    ),
    db.all<any>(
      `SELECT d.id, d.name, d.bn_name, d.lat, d.long, div.name as division_name 
       FROM districts d 
       JOIN divisions div ON d.division_id = div.id 
       WHERE d.name LIKE ? OR d.bn_name LIKE ? LIMIT ?`,
      [`%${q}%`, `%${q}%`, limit]
    )
  ]);

  return { postcodes, upazilas, districts };
}
