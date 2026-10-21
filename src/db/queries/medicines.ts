import type { DatabaseExecutor } from '../adapter';
import { ESSENTIAL_MEDICINES, type MedicineItem } from '../../data/medicines';

export interface MedicineQueryParams {
  query?: string;
  generic_name?: string;
  manufacturer?: string;
  therapeutic_class?: string;
  limit?: number;
}

export async function queryMedicines(
  db?: DatabaseExecutor | null,
  params: MedicineQueryParams = {}
): Promise<{
  count: number;
  results: MedicineItem[];
  substitutes_available: boolean;
}> {
  const limit = params.limit || 20;

  if (db) {
    try {
      let sql = 'SELECT * FROM medicines WHERE 1=1';
      const args: any[] = [];

      if (params.query) {
        sql += ' AND (brand_name LIKE ? OR generic_name LIKE ? OR indications LIKE ?)';
        const pattern = `%${params.query}%`;
        args.push(pattern, pattern, pattern);
      }

      if (params.generic_name) {
        sql += ' AND generic_name LIKE ?';
        args.push(`%${params.generic_name}%`);
      }

      if (params.manufacturer) {
        sql += ' AND manufacturer LIKE ?';
        args.push(`%${params.manufacturer}%`);
      }

      if (params.therapeutic_class) {
        sql += ' AND therapeutic_class LIKE ?';
        args.push(`%${params.therapeutic_class}%`);
      }

      sql += ' ORDER BY brand_name ASC LIMIT ?';
      args.push(limit);

      const rows = await db.all<MedicineItem>(sql, args);
      if (rows && rows.length > 0) {
        return {
          count: rows.length,
          results: rows,
          substitutes_available: rows.length > 0
        };
      }
    } catch {
      // Fallback to in-memory dataset
    }
  }

  // In-memory fallback
  let list = [...ESSENTIAL_MEDICINES];
  const q = params.query ? params.query.toLowerCase() : '';
  const gen = params.generic_name ? params.generic_name.toLowerCase() : '';
  const mfg = params.manufacturer ? params.manufacturer.toLowerCase() : '';
  const tc = params.therapeutic_class ? params.therapeutic_class.toLowerCase() : '';

  if (q) {
    list = list.filter(m =>
      m.brand_name.toLowerCase().includes(q) ||
      m.generic_name.toLowerCase().includes(q) ||
      m.indications.toLowerCase().includes(q)
    );
  }

  if (gen) {
    list = list.filter(m => m.generic_name.toLowerCase().includes(gen));
  }

  if (mfg) {
    list = list.filter(m => m.manufacturer.toLowerCase().includes(mfg));
  }

  if (tc) {
    list = list.filter(m => m.therapeutic_class.toLowerCase().includes(tc));
  }

  const sliced = list.slice(0, limit);
  return {
    count: sliced.length,
    results: sliced,
    substitutes_available: sliced.length > 0
  };
}
