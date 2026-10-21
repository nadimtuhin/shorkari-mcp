import { ESSENTIAL_MEDICINES } from '../src/data/medicines';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

let sql = `-- 0017_seed_medicines.sql
CREATE TABLE IF NOT EXISTS medicines (
    id TEXT PRIMARY KEY,
    brand_name TEXT NOT NULL,
    generic_name TEXT NOT NULL,
    dosage_form TEXT NOT NULL,
    strength TEXT NOT NULL,
    manufacturer TEXT NOT NULL,
    price_bdt REAL NOT NULL,
    pack_size TEXT NOT NULL,
    therapeutic_class TEXT NOT NULL,
    indications TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_medicines_brand ON medicines(brand_name);
CREATE INDEX IF NOT EXISTS idx_medicines_generic ON medicines(generic_name);
CREATE INDEX IF NOT EXISTS idx_medicines_manufacturer ON medicines(manufacturer);

`;

for (const m of ESSENTIAL_MEDICINES) {
  const brand = m.brand_name.replace(/'/g, "''");
  const gen = m.generic_name.replace(/'/g, "''");
  const form = m.dosage_form.replace(/'/g, "''");
  const str = m.strength.replace(/'/g, "''");
  const mfg = m.manufacturer.replace(/'/g, "''");
  const pack = m.pack_size.replace(/'/g, "''");
  const tc = m.therapeutic_class.replace(/'/g, "''");
  const ind = m.indications.replace(/'/g, "''");

  sql += `INSERT OR REPLACE INTO medicines (id, brand_name, generic_name, dosage_form, strength, manufacturer, price_bdt, pack_size, therapeutic_class, indications) VALUES ('${m.id}', '${brand}', '${gen}', '${form}', '${str}', '${mfg}', ${m.price_bdt}, '${pack}', '${tc}', '${ind}');\n`;
}

const outPath = resolve(process.cwd(), 'migrations/0017_seed_medicines.sql');
writeFileSync(outPath, sql, 'utf-8');
console.log(`Generated ${outPath} with ${ESSENTIAL_MEDICINES.length} medicine records.`);
