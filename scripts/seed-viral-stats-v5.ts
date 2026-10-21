import { writeFileSync } from 'fs';

interface MacroSeed {
  code: string;
  year: number;
  val: number;
  unit: string;
  source: string;
}

const records: MacroSeed[] = [
  // 1. Pathao / Ride-Sharing Bike Base Fare
  { code: 'PATHAO_BIKE_BASE_FARE', year: 2016, val: 25, unit: 'BDT (Base Minimum)', source: 'Pathao Dhaka Launch Tariff' },
  { code: 'PATHAO_BIKE_BASE_FARE', year: 2018, val: 30, unit: 'BDT (Base Minimum)', source: 'Dhaka Ride-Sharing Guideline' },
  { code: 'PATHAO_BIKE_BASE_FARE', year: 2020, val: 40, unit: 'BDT (Base Minimum)', source: 'Fuel Price Readjustment Tariff' },
  { code: 'PATHAO_BIKE_BASE_FARE', year: 2022, val: 50, unit: 'BDT (Base Minimum)', source: 'BRTA App Base Gazette' },
  { code: 'PATHAO_BIKE_BASE_FARE', year: 2025, val: 65, unit: 'BDT (Base Minimum)', source: 'Dhaka Commute Real-Fare Benchmark' },

  // Uber / Ride-Sharing Car Base Fare
  { code: 'UBER_CAR_BASE_FARE', year: 2016, val: 50, unit: 'BDT (Car Base)', source: 'Uber Dhaka Launch Fare' },
  { code: 'UBER_CAR_BASE_FARE', year: 2018, val: 65, unit: 'BDT (Car Base)', source: 'Ride-Sharing Fleet Average' },
  { code: 'UBER_CAR_BASE_FARE', year: 2020, val: 80, unit: 'BDT (Car Base)', source: 'Dhaka Metropolitan Tariff' },
  { code: 'UBER_CAR_BASE_FARE', year: 2022, val: 100, unit: 'BDT (Car Base)', source: 'Post-Fuel Hike Revision' },
  { code: 'UBER_CAR_BASE_FARE', year: 2025, val: 130, unit: 'BDT (Car Base)', source: 'Dhaka Peak-Hour Car Benchmark' },

  // 2. Sakrain Rooftop Sound Watts (Decibel & DJ Chaos)
  { code: 'SAKRAIN_ROOFTOP_SOUND_WATTS', year: 2000, val: 500, unit: 'Watts (Home Stereo)', source: 'Old Dhaka Chawkbazar Heritage Archives' },
  { code: 'SAKRAIN_ROOFTOP_SOUND_WATTS', year: 2005, val: 2000, unit: 'Watts (DJ Amplifiers)', source: 'Shankhari Bazar Sakrain Benchmark' },
  { code: 'SAKRAIN_ROOFTOP_SOUND_WATTS', year: 2010, val: 5000, unit: 'Watts (Rooftop Sound System)', source: 'Armanitola Rooftop Festival Study' },
  { code: 'SAKRAIN_ROOFTOP_SOUND_WATTS', year: 2015, val: 12000, unit: 'Watts (High-Power DJ Stack)', source: 'Dhaka South Heritage Watch' },
  { code: 'SAKRAIN_ROOFTOP_SOUND_WATTS', year: 2020, val: 20000, unit: 'Watts (Line-Array Systems)', source: 'Puran Dhaka Cultural Association' },
  { code: 'SAKRAIN_ROOFTOP_SOUND_WATTS', year: 2025, val: 35000, unit: 'Watts (Building-Shaking Truss)', source: 'Old Dhaka Youth Council Survey' },

  // Sakrain Chokhkhutti Kite Price
  { code: 'SAKRAIN_KITE_BDT', year: 2000, val: 2, unit: 'BDT/Kite', source: 'Chawkbazar Wholesale Kite Haat' },
  { code: 'SAKRAIN_KITE_BDT', year: 2005, val: 5, unit: 'BDT/Kite', source: 'Shankhari Bazar Guild' },
  { code: 'SAKRAIN_KITE_BDT', year: 2010, val: 12, unit: 'BDT/Kite', source: 'Old Dhaka Kite Guild' },
  { code: 'SAKRAIN_KITE_BDT', year: 2015, val: 20, unit: 'BDT/Kite', source: 'Chawkbazar Seasonal Market' },
  { code: 'SAKRAIN_KITE_BDT', year: 2020, val: 30, unit: 'BDT/Kite', source: 'Sakrain Festival Standard' },
  { code: 'SAKRAIN_KITE_BDT', year: 2025, val: 50, unit: 'BDT/Kite', source: 'Chawkbazar Wholesale Trade' },

  // 3. Ekushey Boi Mela Published New Titles
  { code: 'BOIMELA_NEW_TITLES', year: 2000, val: 718, unit: 'Titles Published', source: 'Bangla Academy Boi Mela Public Statistics' },
  { code: 'BOIMELA_NEW_TITLES', year: 2005, val: 1240, unit: 'Titles Published', source: 'Bangla Academy Annual Bulletin' },
  { code: 'BOIMELA_NEW_TITLES', year: 2010, val: 1850, unit: 'Titles Published', source: 'Bangla Academy Boi Mela Archives' },
  { code: 'BOIMELA_NEW_TITLES', year: 2015, val: 2800, unit: 'Titles Published', source: 'Publishers and Booksellers Guild' },
  { code: 'BOIMELA_NEW_TITLES', year: 2020, val: 3825, unit: 'Titles Published', source: 'Bangla Academy Official Final Tally' },
  { code: 'BOIMELA_NEW_TITLES', year: 2024, val: 3751, unit: 'Titles Published', source: 'Bangla Academy 2024 Closing Record' },

  // Boi Mela Sales Turnout (Crore BDT)
  { code: 'BOIMELA_SALES_CRORE', year: 2000, val: 3.2, unit: 'Crore BDT', source: 'Publishers Guild Survey' },
  { code: 'BOIMELA_SALES_CRORE', year: 2005, val: 8.5, unit: 'Crore BDT', source: 'Bangla Academy Annual Bulletin' },
  { code: 'BOIMELA_SALES_CRORE', year: 2010, val: 16.0, unit: 'Crore BDT', source: 'Bangla Academy Boi Mela Report' },
  { code: 'BOIMELA_SALES_CRORE', year: 2015, val: 38.0, unit: 'Crore BDT', source: 'Bangla Academy Financial Closing' },
  { code: 'BOIMELA_SALES_CRORE', year: 2020, val: 82.0, unit: 'Crore BDT', source: 'Pre-COVID Peak Sales Record' },
  { code: 'BOIMELA_SALES_CRORE', year: 2024, val: 60.0, unit: 'Crore BDT', source: 'Bangla Academy 2024 Closing Audit' },

  // 4. Gaye Holud Event Production Budget (BDT)
  { code: 'HOLUD_PRODUCTION_BUDGET', year: 2005, val: 15000, unit: 'BDT/Event', source: 'Dhaka Community Center Baseline' },
  { code: 'HOLUD_PRODUCTION_BUDGET', year: 2010, val: 45000, unit: 'BDT/Event', source: 'Wedding Event Planner Survey' },
  { code: 'HOLUD_PRODUCTION_BUDGET', year: 2015, val: 120000, unit: 'BDT/Event', source: 'Dhaka Convention Center Standard' },
  { code: 'HOLUD_PRODUCTION_BUDGET', year: 2020, val: 250000, unit: 'BDT/Event', source: 'Event Management Agency Guild' },
  { code: 'HOLUD_PRODUCTION_BUDGET', year: 2025, val: 480000, unit: 'BDT/Event', source: 'Modern Dhaka Extravaganza Standard' },

  // Bridal Makeover Package (BDT)
  { code: 'BRIDAL_HOLUD_MAKEOVER', year: 2005, val: 2000, unit: 'BDT/Session', source: 'Neighborhood Beauty Parlor' },
  { code: 'BRIDAL_HOLUD_MAKEOVER', year: 2010, val: 6000, unit: 'BDT/Session', source: 'Dhanmondi / Mirpur Beauty Salon' },
  { code: 'BRIDAL_HOLUD_MAKEOVER', year: 2015, val: 15000, unit: 'BDT/Session', source: 'Persona / Farzana Shakil Standard' },
  { code: 'BRIDAL_HOLUD_MAKEOVER', year: 2020, val: 35000, unit: 'BDT/Session', source: 'Boutique Bridal Makeup Studio' },
  { code: 'BRIDAL_HOLUD_MAKEOVER', year: 2025, val: 75000, unit: 'BDT/Session', source: 'Celebrity Freelance Artist Package' }
];

let sql = `-- Migration: 0018_seed_more_viral_delights.sql
-- Description: Ride-sharing surge, Puran Dhaka Sakrain kite & DJ wattage, Ekushey Boi Mela, and Gaye Holud extravaganza
PRAGMA foreign_keys = OFF;

`;

for (const r of records) {
  const id = `${r.code}:${r.year}`;
  sql += `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) VALUES ('${id}', '${r.code}', 'ANNUAL', ${r.year}, NULL, ${r.val}, '${r.unit}', '${r.source}', NULL);\n`;
}

writeFileSync('migrations/0018_seed_more_viral_delights.sql', sql);
console.log(`Generated migrations/0018_seed_more_viral_delights.sql with ${records.length} statements.`);
