import { describe, it, expect, beforeEach } from 'vitest';
import worker from '../src/index';
import { createTestDatabase } from './helpers/test-db';
import { insertMacroIndicator } from '../src/db/queries/macro';
import { insertBankBranch } from '../src/db/queries/banks';
import { insertLegalAct } from '../src/db/queries/laws';

describe('MCP Worker Protocol E2E', () => {
  let db: any;
  let mockEnv: any;

  beforeEach(async () => {
    db = createTestDatabase();
    mockEnv = { DB: db };

    await insertMacroIndicator(db, {
      id: 'CPI:2024', series_id: 'INFLATION_CPI_ANNUAL', frequency: 'ANNUAL',
      period_year: 2024, value: 10.46, unit: '%', source_agency: 'World Bank', base_year: '2021-22'
    });

    await insertMacroIndicator(db, {
      id: 'CPI:M:2024-07', series_id: 'INFLATION_CPI_MONTHLY', frequency: 'MONTHLY',
      period_year: 2024, period_month: 7, value: 11.66, unit: '%', source_agency: 'BBS', base_year: '2021-22'
    });

    await insertBankBranch(db, {
      routing_number: '010010048', bank_code: '010', bank_name: 'AGRANI BANK PLC',
      branch_name: 'BADHAL BAZAR', district: 'BAGERHAT', payable: 1, updated_at: '2026-09-06'
    });

    await insertLegalAct(db, {
      id: 'act-1994-18',
      act_no: '18',
      year: 1994,
      title_en: 'The Companies Act, 1994',
      title_bn: 'কোম্পানি আইন, ১৯৯৪',
      is_repealed: 0,
      sections_count: 404,
      source_url: 'http://bdlaws.minlaw.gov.bd/act-18.html'
    });
  });

  it('handles health check at /health', async () => {
    const req = new Request('http://localhost/health');
    const res = await worker.fetch(req, mockEnv as any, {} as any);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.status).toBe('ok');
    expect(json.name).toBe('bdmcp');
  });

  it('handles MCP initialize handshake over /mcp', async () => {
    const req = new Request('http://localhost/mcp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'initialize', params: {} })
    });
    const res = await worker.fetch(req, mockEnv as any, {} as any);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.result.serverInfo.name).toBe('bdmcp');
    expect(json.result.serverInfo.version).toBe('0.1.0');
  });

  it('lists registered tools upon tools/list', async () => {
    const req = new Request('http://localhost/mcp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 2, method: 'tools/list', params: {} })
    });
    const res = await worker.fetch(req, mockEnv as any, {} as any);
    expect(res.status).toBe(200);
    const json = await res.json();
    const toolNames = json.result.tools.map((t: any) => t.name);
    expect(toolNames).toContain('get_inflation_history');
    expect(toolNames).toContain('lookup_bank_routing');
    expect(toolNames).toContain('get_macro_snapshot');
    expect(toolNames).toContain('search_laws');
  });

  it('executes get_inflation_history through tools/call', async () => {
    const req = new Request('http://localhost/mcp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 3,
        method: 'tools/call',
        params: {
          name: 'get_inflation_history',
          arguments: { start_year: 2020 }
        }
      })
    });
    const res = await worker.fetch(req, mockEnv as any, {} as any);
    expect(res.status).toBe(200);
    const json = await res.json();
    const content = JSON.parse(json.result.content[0].text);
    expect(content.length).toBe(1);
    expect(content[0].period_year).toBe(2024);
    expect(content[0].inflation_rate).toBe(10.46);
    expect(content[0].base_year).toBe('2021-22');
  });

  it('executes lookup_bank_routing through tools/call', async () => {
    const req = new Request('http://localhost/mcp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 4,
        method: 'tools/call',
        params: {
          name: 'lookup_bank_routing',
          arguments: { query: '010010048' }
        }
      })
    });
    const res = await worker.fetch(req, mockEnv as any, {} as any);
    expect(res.status).toBe(200);
    const json = await res.json();
    const content = JSON.parse(json.result.content[0].text);
    expect(content.length).toBe(1);
    expect(content[0].bank_name).toBe('AGRANI BANK PLC');
  });

  it('executes search_laws through tools/call', async () => {
    const req = new Request('http://localhost/mcp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 5,
        method: 'tools/call',
        params: {
          name: 'search_laws',
          arguments: { query: 'Companies' }
        }
      })
    });
    const res = await worker.fetch(req, mockEnv as any, {} as any);
    expect(res.status).toBe(200);
    const json = await res.json();
    const content = JSON.parse(json.result.content[0].text);
    expect(content.length).toBe(1);
    expect(content[0].title_en).toBe('The Companies Act, 1994');
    expect(content[0].year).toBe(1994);
  });

  it('serves interactive dashboard at GET /', async () => {
    const req = new Request('http://localhost/');
    const res = await worker.fetch(req, mockEnv as any, {} as any);
    expect(res.status).toBe(200);
    expect(res.headers.get('Content-Type')).toContain('text/html');
    const html = await res.text();
    expect(html).toContain('bdmcp');
    expect(html).toContain('Inflation');
  });

  it('executes get_inflation_history with frequency MONTHLY through tools/call', async () => {
    const req = new Request('http://localhost/mcp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 31,
        method: 'tools/call',
        params: {
          name: 'get_inflation_history',
          arguments: { start_year: 2024, frequency: 'MONTHLY' }
        }
      })
    });
    const res = await worker.fetch(req, mockEnv as any, {} as any);
    expect(res.status).toBe(200);
    const json = await res.json() as any;
    const content = JSON.parse(json.result.content[0].text);
    expect(content.length).toBe(1);
    expect(content[0].period_year).toBe(2024);
    expect(content[0].period_month).toBe(7);
    expect(content[0].inflation_rate).toBe(11.66);
  });

  it('serves aggregated data at GET /api/stats', async () => {
    const req = new Request('http://localhost/api/stats');
    const res = await worker.fetch(req, mockEnv as any, {} as any);
    expect(res.status).toBe(200);
    expect(res.headers.get('Content-Type')).toContain('application/json');
    const data = await res.json() as any;
    expect(data.inflation).toBeInstanceOf(Array);
    expect(data.branches_count).toBeGreaterThanOrEqual(1);
    expect(data.laws_count).toBeGreaterThanOrEqual(1);
  });

  it('serves monthly and annual data at GET /api/inflation', async () => {
    const req = new Request('http://localhost/api/inflation?frequency=monthly');
    const res = await worker.fetch(req, mockEnv as any, {} as any);
    expect(res.status).toBe(200);
    expect(res.headers.get('Content-Type')).toContain('application/json');
    const data = await res.json() as any;
    expect(data.length).toBe(1);
    expect(data[0].inflation_rate).toBe(11.66);
  });

  it('serves commodity prices at GET /api/commodities', async () => {
    const req = new Request('http://localhost/api/commodities');
    const res = await worker.fetch(req, mockEnv as any, {} as any);
    expect(res.status).toBe(200);
    expect(res.headers.get('Content-Type')).toContain('application/json');
  });

  it('serves geography breakdown at GET /api/geography', async () => {
    const req = new Request('http://localhost/api/geography');
    const res = await worker.fetch(req, mockEnv as any, {} as any);
    expect(res.status).toBe(200);
    expect(res.headers.get('Content-Type')).toContain('application/json');
    const data = await res.json() as any;
    expect(data.divisions).toBeDefined();
  });

  it('serves remittance & reserve statistics at GET /api/remittance', async () => {
    const req = new Request('http://localhost/api/remittance');
    const res = await worker.fetch(req, mockEnv as any, {} as any);
    expect(res.status).toBe(200);
    expect(res.headers.get('Content-Type')).toContain('application/json');
    const data = await res.json() as any;
    expect(data.remittance).toBeInstanceOf(Array);
  });

  it('serves gold, fuel, and tong statistics at GET /api/gold, /api/fuel, /api/tong, /api/rickshaw, /api/fish', async () => {
    const resGold = await worker.fetch(new Request('http://localhost/api/gold'), mockEnv as any, {} as any);
    expect(resGold.status).toBe(200);

    const resFuel = await worker.fetch(new Request('http://localhost/api/fuel'), mockEnv as any, {} as any);
    expect(resFuel.status).toBe(200);

    const resTong = await worker.fetch(new Request('http://localhost/api/tong'), mockEnv as any, {} as any);
    expect(resTong.status).toBe(200);

    const resRickshaw = await worker.fetch(new Request('http://localhost/api/rickshaw'), mockEnv as any, {} as any);
    expect(resRickshaw.status).toBe(200);

    const resFish = await worker.fetch(new Request('http://localhost/api/fish'), mockEnv as any, {} as any);
    expect(resFish.status).toBe(200);

    const resBiye = await worker.fetch(new Request('http://localhost/api/biye'), mockEnv as any, {} as any);
    expect(resBiye.status).toBe(200);

    const resNet = await worker.fetch(new Request('http://localhost/api/internet'), mockEnv as any, {} as any);
    expect(resNet.status).toBe(200);

    const resRent = await worker.fetch(new Request('http://localhost/api/rent'), mockEnv as any, {} as any);
    expect(resRent.status).toBe(200);

    const resCricket = await worker.fetch(new Request('http://localhost/api/cricket'), mockEnv as any, {} as any);
    expect(resCricket.status).toBe(200);
    const cricket = await resCricket.json() as any;
    expect(cricket.legends).toBeDefined();
    expect(cricket.historic_wins).toBeDefined();

    const resRivers = await worker.fetch(new Request('http://localhost/api/rivers'), mockEnv as any, {} as any);
    expect(resRivers.status).toBe(200);
    const rivers = await resRivers.json() as any;
    expect(rivers.summary.transboundary_count).toBe(57);

    const resHolidays = await worker.fetch(new Request('http://localhost/api/holidays'), mockEnv as any, {} as any);
    expect(resHolidays.status).toBe(200);
    const holidays = await resHolidays.json() as any;
    expect(holidays.holidays.length).toBeGreaterThanOrEqual(10);

    const resDemo = await worker.fetch(new Request('http://localhost/api/demographics'), mockEnv as any, {} as any);
    expect(resDemo.status).toBe(200);

    const resGrid = await worker.fetch(new Request('http://localhost/api/grid'), mockEnv as any, {} as any);
    expect(resGrid.status).toBe(200);

    const resForex = await worker.fetch(new Request('http://localhost/api/forex'), mockEnv as any, {} as any);
    expect(resForex.status).toBe(200);
    const forex = await resForex.json() as any;
    expect(forex.majorCurrencies).toBeDefined();

    const resBcs = await worker.fetch(new Request('http://localhost/api/bcs'), mockEnv as any, {} as any);
    expect(resBcs.status).toBe(200);
    const bcs = await resBcs.json() as any;
    expect(bcs.comparisons).toBeDefined();

    const resBach = await worker.fetch(new Request('http://localhost/api/bachelor'), mockEnv as any, {} as any);
    expect(resBach.status).toBe(200);
    const bach = await resBach.json() as any;
    expect(bach.syndicate).toBeDefined();

    const resCng = await worker.fetch(new Request('http://localhost/api/cng'), mockEnv as any, {} as any);
    expect(resCng.status).toBe(200);
    const cng = await resCng.json() as any;
    expect(cng.rejections).toBeDefined();

    const resBiryani = await worker.fetch(new Request('http://localhost/api/biryani'), mockEnv as any, {} as any);
    expect(resBiryani.status).toBe(200);

    const resLs = await worker.fetch(new Request('http://localhost/api/loadshedding'), mockEnv as any, {} as any);
    expect(resLs.status).toBe(200);

    const resBus = await worker.fetch(new Request('http://localhost/api/localbus'), mockEnv as any, {} as any);
    expect(resBus.status).toBe(200);

    const resFresh = await worker.fetch(new Request('http://localhost/api/freshers'), mockEnv as any, {} as any);
    expect(resFresh.status).toBe(200);

    const resBpl = await worker.fetch(new Request('http://localhost/api/bpl'), mockEnv as any, {} as any);
    expect(resBpl.status).toBe(200);

    const resQurbani = await worker.fetch(new Request('http://localhost/api/qurbani'), mockEnv as any, {} as any);
    expect(resQurbani.status).toBe(200);

    const resAdmission = await worker.fetch(new Request('http://localhost/api/admission'), mockEnv as any, {} as any);
    expect(resAdmission.status).toBe(200);

    const resPaan = await worker.fetch(new Request('http://localhost/api/paan'), mockEnv as any, {} as any);
    expect(resPaan.status).toBe(200);

    const resPassport = await worker.fetch(new Request('http://localhost/api/passport'), mockEnv as any, {} as any);
    expect(resPassport.status).toBe(200);

    const resMeds = await worker.fetch(new Request('http://localhost/api/medicines?query=Napa'), mockEnv as any, {} as any);
    expect(resMeds.status).toBe(200);

    const resTax = await worker.fetch(new Request('http://localhost/api/tax?income=800000'), mockEnv as any, {} as any);
    expect(resTax.status).toBe(200);

    const resTariffs = await worker.fetch(new Request('http://localhost/api/tariffs?cnf=1000'), mockEnv as any, {} as any);
    expect(resTariffs.status).toBe(200);

    const resLand = await worker.fetch(new Request('http://localhost/api/land?value=5000000'), mockEnv as any, {} as any);
    expect(resLand.status).toBe(200);

    const resVeh = await worker.fetch(new Request('http://localhost/api/vehicles?cc=1500'), mockEnv as any, {} as any);
    expect(resVeh.status).toBe(200);

    const resIncorp = await worker.fetch(new Request('http://localhost/api/incorporation?capital=1000000'), mockEnv as any, {} as any);
    expect(resIncorp.status).toBe(200);

    const resExams = await worker.fetch(new Request('http://localhost/api/exams?exam=HSC'), mockEnv as any, {} as any);
    expect(resExams.status).toBe(200);
  });

  it('serves SEO assets: /robots.txt, /llms.txt, and /sitemap.xml with security headers', async () => {
    const resRobots = await worker.fetch(new Request('http://localhost/robots.txt'), mockEnv as any, {} as any);
    expect(resRobots.status).toBe(200);
    expect(await resRobots.text()).toContain('Sitemap:');
    expect(resRobots.headers.get('Strict-Transport-Security')).toBeDefined();

    const resLlms = await worker.fetch(new Request('http://localhost/llms.txt'), mockEnv as any, {} as any);
    expect(resLlms.status).toBe(200);
    expect(await resLlms.text()).toContain('# bdmcp');

    const resSitemap = await worker.fetch(new Request('http://localhost/sitemap.xml'), mockEnv as any, {} as any);
    expect(resSitemap.status).toBe(200);
    expect(await resSitemap.text()).toContain('<urlset');
  });

  it('serves dedicated section routes (e.g. /inflation, /banking, /laws, /geography, /purchasing-power, /remittance, /gold, /cha-index, /energy, /rickshaw, /fish-index, /transit, /biye-index, /internet, /rent, /eid-transit, /cricket, /demographics, /rivers, /grid, /holidays, /forex, /fuchka, /traffic, /jaljot, /rmg, /cyclones, /heritage, /agriculture, /megaprojects, /about, /contact)', async () => {
    for (const path of [
      '/inflation', '/banking', '/laws', '/commodities', '/purchasing-power',
      '/gold', '/cha-index', '/energy', '/rickshaw', '/fish-index', '/transit',
      '/biye-index', '/internet', '/rent', '/eid-transit',
      '/cricket', '/demographics', '/rivers', '/grid', '/holidays', '/forex',
      '/fuchka', '/traffic', '/jaljot', '/rmg', '/cyclones', '/heritage',
      '/agriculture', '/megaprojects',
      '/bcs', '/bachelor', '/cng', '/biryani',
      '/loadshedding', '/localbus', '/freshers', '/bpl',
      '/qurbani', '/admission', '/paan', '/passport',
      '/pathao', '/sakrain', '/boimela', '/holud',
      '/medicines', '/tax', '/tariffs', '/land', '/vehicles', '/incorporation', '/exams',
      '/remittance', '/geography', '/stocks', '/agent', '/about', '/contact'
    ]) {
      const req = new Request(`http://localhost${path}`);
      const res = await worker.fetch(req, mockEnv as any, {} as any);
      expect(res.status).toBe(200);
      expect(res.headers.get('Content-Type')).toContain('text/html');
      const text = await res.text();
      expect(text).toContain('BDMCP');
    }
  });
});
