import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

export interface CommoditySeedItem {
  price_date: string;
  market_name: string;
  district: string;
  commodity_en: string;
  commodity_bn: string;
  category: string;
  unit: string;
  wholesale_min: number;
  wholesale_max: number;
  retail_min: number;
  retail_max: number;
}

export const COMMODITY_DATA: CommoditySeedItem[] = [
  // --- Eggs (Farm Brown / ডিম) ---
  {
    price_date: '2025-07-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Egg (Farm Brown)',
    commodity_bn: 'ফার্মের লাল ডিম',
    category: 'Poultry & Eggs',
    unit: '4 pcs (হালি)',
    wholesale_min: 46.0,
    wholesale_max: 48.0,
    retail_min: 52.0,
    retail_max: 55.0
  },
  {
    price_date: '2025-07-15',
    market_name: 'Reazuddin Bazar',
    district: 'Chattogram',
    commodity_en: 'Egg (Farm Brown)',
    commodity_bn: 'ফার্মের লাল ডিম',
    category: 'Poultry & Eggs',
    unit: '4 pcs (হালি)',
    wholesale_min: 47.0,
    wholesale_max: 49.0,
    retail_min: 53.0,
    retail_max: 56.0
  },
  {
    price_date: '2024-10-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Egg (Farm Brown)',
    commodity_bn: 'ফার্মের লাল ডিম',
    category: 'Poultry & Eggs',
    unit: '4 pcs (হালি)',
    wholesale_min: 52.0,
    wholesale_max: 55.0,
    retail_min: 58.0,
    retail_max: 62.0
  },
  {
    price_date: '2022-10-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Egg (Farm Brown)',
    commodity_bn: 'ফার্মের লাল ডিম',
    category: 'Poultry & Eggs',
    unit: '4 pcs (হালি)',
    wholesale_min: 38.0,
    wholesale_max: 40.0,
    retail_min: 42.0,
    retail_max: 45.0
  },
  {
    price_date: '2020-10-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Egg (Farm Brown)',
    commodity_bn: 'ফার্মের লাল ডিম',
    category: 'Poultry & Eggs',
    unit: '4 pcs (হালি)',
    wholesale_min: 28.0,
    wholesale_max: 30.0,
    retail_min: 32.0,
    retail_max: 34.0
  },

  // --- Beef (গরুর মাংস) ---
  {
    price_date: '2025-07-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Beef',
    commodity_bn: 'গরুর মাংস',
    category: 'Meat',
    unit: 'kg',
    wholesale_min: 710.0,
    wholesale_max: 730.0,
    retail_min: 750.0,
    retail_max: 780.0
  },
  {
    price_date: '2025-07-15',
    market_name: 'Khatunganj',
    district: 'Chattogram',
    commodity_en: 'Beef',
    commodity_bn: 'গরুর মাংস',
    category: 'Meat',
    unit: 'kg',
    wholesale_min: 720.0,
    wholesale_max: 740.0,
    retail_min: 760.0,
    retail_max: 800.0
  },
  {
    price_date: '2024-10-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Beef',
    commodity_bn: 'গরুর মাংস',
    category: 'Meat',
    unit: 'kg',
    wholesale_min: 720.0,
    wholesale_max: 740.0,
    retail_min: 750.0,
    retail_max: 800.0
  },
  {
    price_date: '2022-10-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Beef',
    commodity_bn: 'গরুর মাংস',
    category: 'Meat',
    unit: 'kg',
    wholesale_min: 620.0,
    wholesale_max: 640.0,
    retail_min: 650.0,
    retail_max: 680.0
  },
  {
    price_date: '2020-10-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Beef',
    commodity_bn: 'গরুর মাংস',
    category: 'Meat',
    unit: 'kg',
    wholesale_min: 520.0,
    wholesale_max: 540.0,
    retail_min: 550.0,
    retail_max: 580.0
  },

  // --- Chicken - Broiler (ব্রয়লার মুরগি) ---
  {
    price_date: '2025-07-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Chicken (Broiler)',
    commodity_bn: 'ব্রয়লার মুরগি',
    category: 'Meat',
    unit: 'kg',
    wholesale_min: 165.0,
    wholesale_max: 175.0,
    retail_min: 180.0,
    retail_max: 195.0
  },
  {
    price_date: '2025-07-15',
    market_name: 'Reazuddin Bazar',
    district: 'Chattogram',
    commodity_en: 'Chicken (Broiler)',
    commodity_bn: 'ব্রয়লার মুরগি',
    category: 'Meat',
    unit: 'kg',
    wholesale_min: 170.0,
    wholesale_max: 180.0,
    retail_min: 185.0,
    retail_max: 200.0
  },
  {
    price_date: '2024-10-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Chicken (Broiler)',
    commodity_bn: 'ব্রয়লার মুরগি',
    category: 'Meat',
    unit: 'kg',
    wholesale_min: 180.0,
    wholesale_max: 190.0,
    retail_min: 195.0,
    retail_max: 210.0
  },
  {
    price_date: '2022-10-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Chicken (Broiler)',
    commodity_bn: 'ব্রয়লার মুরগি',
    category: 'Meat',
    unit: 'kg',
    wholesale_min: 150.0,
    wholesale_max: 160.0,
    retail_min: 165.0,
    retail_max: 175.0
  },
  {
    price_date: '2020-10-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Chicken (Broiler)',
    commodity_bn: 'ব্রয়লার মুরগি',
    category: 'Meat',
    unit: 'kg',
    wholesale_min: 110.0,
    wholesale_max: 120.0,
    retail_min: 125.0,
    retail_max: 135.0
  },

  // --- Chicken - Sonali (সোনালী মুরগি) ---
  {
    price_date: '2025-07-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Chicken (Sonali)',
    commodity_bn: 'সোনালী মুরগি',
    category: 'Meat',
    unit: 'kg',
    wholesale_min: 270.0,
    wholesale_max: 285.0,
    retail_min: 295.0,
    retail_max: 320.0
  },
  {
    price_date: '2024-10-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Chicken (Sonali)',
    commodity_bn: 'সোনালী মুরগি',
    category: 'Meat',
    unit: 'kg',
    wholesale_min: 290.0,
    wholesale_max: 310.0,
    retail_min: 320.0,
    retail_max: 340.0
  },
  {
    price_date: '2022-10-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Chicken (Sonali)',
    commodity_bn: 'সোনালী মুরগি',
    category: 'Meat',
    unit: 'kg',
    wholesale_min: 240.0,
    wholesale_max: 255.0,
    retail_min: 260.0,
    retail_max: 280.0
  },
  {
    price_date: '2020-10-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Chicken (Sonali)',
    commodity_bn: 'সোনালী মুরগি',
    category: 'Meat',
    unit: 'kg',
    wholesale_min: 190.0,
    wholesale_max: 205.0,
    retail_min: 210.0,
    retail_max: 230.0
  },

  // --- Onion - Local (দেশি পেঁয়াজ) ---
  {
    price_date: '2025-07-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Onion (Local)',
    commodity_bn: 'দেশি পেঁয়াজ',
    category: 'Spices',
    unit: 'kg',
    wholesale_min: 75.0,
    wholesale_max: 80.0,
    retail_min: 85.0,
    retail_max: 95.0
  },
  {
    price_date: '2024-10-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Onion (Local)',
    commodity_bn: 'দেশি পেঁয়াজ',
    category: 'Spices',
    unit: 'kg',
    wholesale_min: 110.0,
    wholesale_max: 120.0,
    retail_min: 130.0,
    retail_max: 140.0
  },
  {
    price_date: '2022-10-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Onion (Local)',
    commodity_bn: 'দেশি পেঁয়াজ',
    category: 'Spices',
    unit: 'kg',
    wholesale_min: 40.0,
    wholesale_max: 45.0,
    retail_min: 50.0,
    retail_max: 55.0
  },
  {
    price_date: '2020-10-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Onion (Local)',
    commodity_bn: 'দেশি পেঁয়াজ',
    category: 'Spices',
    unit: 'kg',
    wholesale_min: 65.0,
    wholesale_max: 75.0,
    retail_min: 80.0,
    retail_max: 90.0
  },

  // --- Potato (আলু) ---
  {
    price_date: '2025-07-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Potato',
    commodity_bn: 'আলু',
    category: 'Vegetables',
    unit: 'kg',
    wholesale_min: 28.0,
    wholesale_max: 32.0,
    retail_min: 35.0,
    retail_max: 40.0
  },
  {
    price_date: '2024-10-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Potato',
    commodity_bn: 'আলু',
    category: 'Vegetables',
    unit: 'kg',
    wholesale_min: 50.0,
    wholesale_max: 55.0,
    retail_min: 60.0,
    retail_max: 65.0
  },
  {
    price_date: '2020-10-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Potato',
    commodity_bn: 'আলু',
    category: 'Vegetables',
    unit: 'kg',
    wholesale_min: 28.0,
    wholesale_max: 32.0,
    retail_min: 35.0,
    retail_max: 40.0
  },

  // --- Rice - Miniket (মিনিকেট চাল) ---
  {
    price_date: '2025-07-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Rice (Miniket)',
    commodity_bn: 'মিনিকেট চাল',
    category: 'Grains & Rice',
    unit: 'kg',
    wholesale_min: 68.0,
    wholesale_max: 72.0,
    retail_min: 74.0,
    retail_max: 78.0
  },
  {
    price_date: '2024-10-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Rice (Miniket)',
    commodity_bn: 'মিনিকেট চাল',
    category: 'Grains & Rice',
    unit: 'kg',
    wholesale_min: 66.0,
    wholesale_max: 70.0,
    retail_min: 72.0,
    retail_max: 76.0
  },
  {
    price_date: '2020-10-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Rice (Miniket)',
    commodity_bn: 'মিনিকেট চাল',
    category: 'Grains & Rice',
    unit: 'kg',
    wholesale_min: 48.0,
    wholesale_max: 52.0,
    retail_min: 54.0,
    retail_max: 58.0
  },

  // --- Soybean Oil (সয়াবিন তেল) ---
  {
    price_date: '2025-07-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Soybean Oil (Bottled)',
    commodity_bn: 'বোতলজাত সয়াবিন তেল',
    category: 'Edible Oil',
    unit: 'liter',
    wholesale_min: 160.0,
    wholesale_max: 164.0,
    retail_min: 167.0,
    retail_max: 172.0
  },
  {
    price_date: '2024-10-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Soybean Oil (Bottled)',
    commodity_bn: 'বোতলজাত সয়াবিন তেল',
    category: 'Edible Oil',
    unit: 'liter',
    wholesale_min: 162.0,
    wholesale_max: 166.0,
    retail_min: 168.0,
    retail_max: 175.0
  },
  {
    price_date: '2020-10-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Soybean Oil (Bottled)',
    commodity_bn: 'বোতলজাত সয়াবিন তেল',
    category: 'Edible Oil',
    unit: 'liter',
    wholesale_min: 100.0,
    wholesale_max: 104.0,
    retail_min: 108.0,
    retail_max: 112.0
  },

  // --- Lentil - Red Local (দেশি মসুর ডাল) ---
  {
    price_date: '2025-07-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Lentil (Masur Local)',
    commodity_bn: 'দেশি মসুর ডাল',
    category: 'Pulses',
    unit: 'kg',
    wholesale_min: 130.0,
    wholesale_max: 136.0,
    retail_min: 140.0,
    retail_max: 150.0
  },
  {
    price_date: '2020-10-15',
    market_name: 'Karwan Bazar',
    district: 'Dhaka',
    commodity_en: 'Lentil (Masur Local)',
    commodity_bn: 'দেশি মসুর ডাল',
    category: 'Pulses',
    unit: 'kg',
    wholesale_min: 90.0,
    wholesale_max: 95.0,
    retail_min: 100.0,
    retail_max: 110.0
  }
];

export function generateCommoditySql(): string[] {
  const sql: string[] = ['PRAGMA foreign_keys = OFF;'];
  for (const c of COMMODITY_DATA) {
    sql.push(
      `INSERT INTO commodity_prices (price_date, market_name, district, commodity_en, commodity_bn, category, unit, wholesale_min, wholesale_max, retail_min, retail_max) ` +
      `VALUES ('${c.price_date}', '${c.market_name}', '${c.district}', '${c.commodity_en}', '${c.commodity_bn}', '${c.category}', '${c.unit}', ${c.wholesale_min}, ${c.wholesale_max}, ${c.retail_min}, ${c.retail_max});`
    );
  }
  sql.push('PRAGMA foreign_keys = ON;');
  return sql;
}

export function run() {
  const sql = generateCommoditySql();
  const outPath = resolve(process.cwd(), 'migrations/0005_seed_commodities.sql');
  writeFileSync(outPath, sql.join('\n'), 'utf8');
  console.log(`[seed-commodities] Wrote ${sql.length} statements to ${outPath}`);
}

if (import.meta.main) {
  run();
}
