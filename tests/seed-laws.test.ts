import { describe, it, expect } from 'vitest';
import { parseActsCsv } from '../scripts/seed-laws';

describe('Legal Acts Dataset Transformer', () => {
  const sampleCsv = `Act Title,Act No,Act Year,Act Link,full_text,is_repealed
"THE [***] WILLS AND INTESTACY REGULATION, 1799",V,1799,http://bdlaws.minlaw.gov.bd/act-1315.html,http://bdlaws.minlaw.gov.bd/act-print-1315.html,False
"The Districts Act, 1836",XXI,1836,http://bdlaws.minlaw.gov.bd/act-1.html,http://bdlaws.minlaw.gov.bd/act-print-1.html,False
"The Companies Act, 1913",VII,1913,http://bdlaws.minlaw.gov.bd/act-103.html,http://bdlaws.minlaw.gov.bd/act-print-103.html,True`;

  it('parses act rows correctly including quoted titles and commas', () => {
    const records = parseActsCsv(sampleCsv);
    expect(records.length).toBe(3);

    expect(records[0]).toEqual({
      id: 'act-1315',
      act_no: 'V',
      year: 1799,
      title_en: 'THE [***] WILLS AND INTESTACY REGULATION, 1799',
      title_bn: null,
      is_repealed: 0,
      sections_count: null,
      source_url: 'http://bdlaws.minlaw.gov.bd/act-1315.html'
    });

    expect(records[1].id).toBe('act-1');
    expect(records[1].year).toBe(1836);
    expect(records[1].is_repealed).toBe(0);

    expect(records[2].id).toBe('act-103');
    expect(records[2].year).toBe(1913);
    expect(records[2].is_repealed).toBe(1);
  });

  it('normalizes Bengali numerals in act year and act no', () => {
    const csv = `Act Title,Act No,Act Year,Act Link,full_text,is_repealed
"Code of Criminal Procedure (Amendment) Ordinance, 2025",৩৬,২০২৫,http://bdlaws.minlaw.gov.bd/act-1549.html,http://bdlaws.minlaw.gov.bd/act-print-1549.html,False`;
    const records = parseActsCsv(csv);
    expect(records.length).toBe(1);
    expect(records[0].id).toBe('act-1549');
    expect(records[0].year).toBe(2025);
    expect(records[0].act_no).toBe('৩৬');
    expect(records[0].is_repealed).toBe(0);
  });
});
