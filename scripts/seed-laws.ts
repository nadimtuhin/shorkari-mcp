import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { LegalActRecord } from '../src/db/queries/laws';
import { toAsciiDigits } from '../src/utils/bangla';

const LAWS_CSV_URL =
  'https://media.githubusercontent.com/media/sakhadib/Bangladesh-Legal-Acts-Dataset/main/Data/filtered_act_list.csv';

export function parseCsvLine(line: string): string[] {
  const fields: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      fields.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  fields.push(current.trim());
  return fields;
}

export function parseActsCsv(csvText: string): LegalActRecord[] {
  const lines = csvText.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length <= 1) return [];

  const records: LegalActRecord[] = [];

  for (let i = 1; i < lines.length; i++) {
    const row = parseCsvLine(lines[i]);
    if (row.length < 6) continue;

    const [title, actNo, yearStr, actLink, _fullText, isRepealedStr] = row;
    const asciiYear = toAsciiDigits(yearStr);
    const year = parseInt(asciiYear, 10);
    if (isNaN(year)) continue;

    const match = actLink.match(/act-(\d+)\.html/);
    const id = match ? `act-${match[1]}` : `act-${year}-${actNo}`;
    const isRepealed = isRepealedStr.toLowerCase() === 'true' ? 1 : 0;

    records.push({
      id,
      act_no: actNo,
      year,
      title_en: title,
      title_bn: null,
      is_repealed: isRepealed,
      sections_count: null,
      source_url: actLink
    });
  }

  return records;
}

export async function fetchActsDataset(): Promise<LegalActRecord[]> {
  console.log('[seed-laws] Fetching legal acts CSV from sakhadib/Bangladesh-Legal-Acts-Dataset...');
  const res = await fetch(LAWS_CSV_URL);
  if (!res.ok) throw new Error(`Failed to fetch laws CSV: ${res.statusText}`);
  const csv = await res.text();
  return parseActsCsv(csv);
}

export async function run() {
  const isDryRun = process.argv.includes('--dry-run');
  console.log(`[seed-laws] Starting legal acts seed pipeline (dry-run: ${isDryRun})...`);

  const records = await fetchActsDataset();
  console.log(`[seed-laws] Parsed ${records.length} legal acts.`);

  if (isDryRun) {
    console.log('[seed-laws] Dry-run complete. No files written.');
    return;
  }

  const sqlStatements: string[] = ['PRAGMA foreign_keys = OFF;'];

  for (const act of records) {
    const safeTitle = act.title_en.replace(/'/g, "''");
    const safeActNo = act.act_no.replace(/'/g, "''");
    const safeUrl = act.source_url.replace(/'/g, "''");

    sqlStatements.push(
      `INSERT OR REPLACE INTO legal_acts (id, act_no, year, title_en, title_bn, is_repealed, sections_count, source_url) ` +
      `VALUES ('${act.id}', '${safeActNo}', ${act.year}, '${safeTitle}', NULL, ${act.is_repealed}, NULL, '${safeUrl}');`
    );
  }

  sqlStatements.push('PRAGMA foreign_keys = ON;');

  const outPath = resolve(process.cwd(), 'migrations/0003_seed_laws.sql');
  writeFileSync(outPath, sqlStatements.join('\n'), 'utf8');
  console.log(`[seed-laws] Successfully wrote ${sqlStatements.length} statements to ${outPath}`);
}

if (import.meta.main) {
  run().catch((err) => {
    console.error('[seed-laws] Failed:', err);
    process.exit(1);
  });
}
