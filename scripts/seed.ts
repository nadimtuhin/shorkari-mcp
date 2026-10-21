import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

async function fetchWorldBankSeries(indicator: string, seriesId: string, unit: string) {
  console.log(`[seed] Fetching World Bank indicator: ${indicator}...`);
  const url = `https://api.worldbank.org/v2/country/BGD/indicator/${indicator}?format=json&per_page=100`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
  const data = (await res.json()) as any;
  const rows = data[1] || [];

  return rows
    .filter((r: any) => r.value !== null)
    .map((r: any) => {
      const year = parseInt(r.date, 10);
      const baseYear = year >= 2023 ? '2021-22' : '2005-06';
      return {
        id: `${seriesId}:${year}`,
        series_id: seriesId,
        frequency: 'ANNUAL',
        period_year: year,
        period_month: null,
        value: Number(r.value.toFixed(2)),
        unit,
        source_agency: 'World Bank (WDI)',
        base_year: baseYear
      };
    });
}

async function fetchBankBranches() {
  console.log('[seed] Fetching Bangladesh Bank routing dataset (MdHRShohel)...');
  const url = 'https://raw.githubusercontent.com/MdHRShohel/bd-bank-routing/main/data/banks.json';
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
  const data = (await res.json()) as any;

  const branches: any[] = [];
  const checkDate = data.generated || '2026-09-06';

  for (const bank of data.banks) {
    for (const br of bank.branches) {
      const dist = (br.district || '').replace(/'/g, "''");
      branches.push({
        routing_number: br.routing,
        bank_code: bank.code,
        bank_name: (bank.name || '').replace(/'/g, "''"),
        branch_name: (br.name || '').replace(/'/g, "''"),
        district: dist,
        payable: bank.payable ? 1 : 0,
        swift_code: null,
        updated_at: checkDate
      });
    }
  }
  return branches;
}

async function fetchGeoHierarchy() {
  console.log('[seed] Fetching Administrative Geocodes (ifahimreza)...');
  const baseUrl = 'https://raw.githubusercontent.com/ifahimreza/bangladesh-geojson/master/src/data';
  const [divsRes, distsRes, upazilasRes, postcodesRes] = await Promise.all([
    fetch(`${baseUrl}/bd-divisions.json`).then(r => r.json() as Promise<any>),
    fetch(`${baseUrl}/bd-districts.json`).then(r => r.json() as Promise<any>),
    fetch(`${baseUrl}/bd-upazilas.json`).then(r => r.json() as Promise<any>),
    fetch(`${baseUrl}/bd-postcodes.json`).then(r => r.json() as Promise<any>)
  ]);

  return {
    divisions: divsRes.divisions || divsRes,
    districts: distsRes.districts || distsRes,
    upazilas: upazilasRes.upazilas || upazilasRes,
    postcodes: postcodesRes.postcodes || postcodesRes
  };
}

async function run() {
  const isDryRun = process.argv.includes('--dry-run');
  console.log(`[seed] Starting seed data pipeline (dry-run: ${isDryRun})...`);

  const [inflation, gdp, branches, geo] = await Promise.all([
    fetchWorldBankSeries('FP.CPI.TOTL.ZG', 'INFLATION_CPI_ANNUAL', '%'),
    fetchWorldBankSeries('NY.GDP.MKTP.KD.ZG', 'GDP_GROWTH_ANNUAL', '%'),
    fetchBankBranches(),
    fetchGeoHierarchy()
  ]);

  console.log(`[seed] Ingested:`);
  console.log(` - Inflation records: ${inflation.length}`);
  console.log(` - GDP Growth records: ${gdp.length}`);
  console.log(` - Bank branches: ${branches.length}`);
  console.log(` - Divisions: ${geo.divisions.length}`);
  console.log(` - Districts: ${geo.districts.length}`);
  console.log(` - Upazilas: ${geo.upazilas.length}`);
  console.log(` - Postcodes: ${geo.postcodes.length}`);

  if (isDryRun) {
    console.log('[seed] Dry run complete. No files written.');
    return;
  }

  const sqlStatements: string[] = ['PRAGMA foreign_keys = OFF;'];

  // 1. Divisions first
  for (const d of geo.divisions) {
    sqlStatements.push(
      `INSERT OR REPLACE INTO divisions (id, name, bn_name, lat, long) ` +
      `VALUES ('${d.id}', '${(d.name || '').replace(/'/g, "''")}', '${(d.bn_name || '').replace(/'/g, "''")}', ${d.lat || 'NULL'}, ${d.long || 'NULL'});`
    );
  }

  // 2. Districts second
  for (const d of geo.districts) {
    sqlStatements.push(
      `INSERT OR REPLACE INTO districts (id, division_id, name, bn_name, lat, long) ` +
      `VALUES ('${d.id}', '${d.division_id}', '${(d.name || '').replace(/'/g, "''")}', '${(d.bn_name || '').replace(/'/g, "''")}', ${d.lat || 'NULL'}, ${d.long || 'NULL'});`
    );
  }

  // 3. Upazilas third
  for (const u of geo.upazilas) {
    sqlStatements.push(
      `INSERT OR REPLACE INTO upazilas (id, district_id, name, bn_name) ` +
      `VALUES ('${u.id}', '${u.district_id}', '${(u.name || '').replace(/'/g, "''")}', '${(u.bn_name || '').replace(/'/g, "''")}');`
    );
  }

  // 4. Postcodes fourth
  for (const p of geo.postcodes) {
    sqlStatements.push(
      `INSERT INTO postcodes (division_id, district_id, upazila, post_office, post_code) ` +
      `VALUES ('${p.division_id}', '${p.district_id}', '${(p.upazila || '').replace(/'/g, "''")}', '${(p.postOffice || '').replace(/'/g, "''")}', '${p.postCode || ''}');`
    );
  }

  // 5. Macro indicators
  for (const m of [...inflation, ...gdp]) {
    sqlStatements.push(
      `INSERT OR REPLACE INTO macro_indicators (id, series_id, frequency, period_year, period_month, value, unit, source_agency, base_year) ` +
      `VALUES ('${m.id}', '${m.series_id}', '${m.frequency}', ${m.period_year}, NULL, ${m.value}, '${m.unit}', '${m.source_agency}', '${m.base_year}');`
    );
  }

  // 6. Bank branches
  for (const b of branches) {
    sqlStatements.push(
      `INSERT OR REPLACE INTO bank_branches (routing_number, bank_code, bank_name, branch_name, district, payable, swift_code, updated_at) ` +
      `VALUES ('${b.routing_number}', '${b.bank_code}', '${b.bank_name}', '${b.branch_name}', '${b.district}', ${b.payable}, NULL, '${b.updated_at}');`
    );
  }

  sqlStatements.push('PRAGMA foreign_keys = ON;');

  const outPath = resolve(process.cwd(), 'migrations/0002_seed_data.sql');
  writeFileSync(outPath, sqlStatements.join('\n'), 'utf8');
  console.log(`[seed] Wrote ${sqlStatements.length} SQL statements to ${outPath}`);
}

run().catch((err) => {
  console.error('[seed] Pipeline error:', err);
  process.exit(1);
});
