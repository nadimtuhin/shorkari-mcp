import { describe, it, expect } from 'vitest';
import dns from 'node:dns';
try {
  dns.setDefaultResultOrder('ipv4first');
} catch {}

const DOMAIN = 'https://bdmcp.nadimtuhin.com';

describe('Live Domain E2E (bdmcp.nadimtuhin.com)', () => {
  it('GET / returns HTML dashboard with 200 OK', async () => {
    const res = await fetch(`${DOMAIN}/`);
    expect(res.status).toBe(200);
    expect(res.headers.get('content-type')).toContain('text/html');
    const html = await res.text();
    expect(html).toContain('bdmcp');
    expect(html).toContain('Annual Inflation Rate');
  });

  it('GET /api/stats returns verified public data counts', async () => {
    const res = await fetch(`${DOMAIN}/api/stats`);
    expect(res.status).toBe(200);
    const data = await res.json() as any;
    expect(data.branches_count).toBe(11426);
    expect(data.laws_count).toBe(1489);
    expect(data.inflation.length).toBeGreaterThanOrEqual(25);
  });

  it('POST /mcp handles tools/list', async () => {
    const res = await fetch(`${DOMAIN}/mcp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 10, method: 'tools/list', params: {} })
    });
    expect(res.status).toBe(200);
    const data = await res.json() as any;
    const toolNames = data.result.tools.map((t: any) => t.name);
    expect(toolNames).toContain('search_laws');
    expect(toolNames).toContain('lookup_bank_routing');
    expect(toolNames).toContain('get_inflation_history');
  });

  it('POST /mcp executes search_laws against remote D1', async () => {
    const res = await fetch(`${DOMAIN}/mcp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 11,
        method: 'tools/call',
        params: {
          name: 'search_laws',
          arguments: { query: 'Companies' }
        }
      })
    });
    expect(res.status).toBe(200);
    const data = await res.json() as any;
    const content = JSON.parse(data.result.content[0].text);
    expect(content.length).toBeGreaterThan(0);
    expect(content[0].source_url).toContain('bdlaws.minlaw.gov.bd');
  });

  it('GET /api/inflation returns month-by-month and year-by-year inflation series', async () => {
    const res = await fetch(`${DOMAIN}/api/inflation?frequency=monthly`);
    expect(res.status).toBe(200);
    const data = await res.json() as any;
    expect(data.length).toBeGreaterThanOrEqual(60);
    expect(data[0].period_month).toBeDefined();
    expect(data[0].source_agency).toContain('BBS');
  });

  it('serves dedicated statistics pages with 200 OK and navigation links', async () => {
    const pages = ['/inflation', '/banking', '/laws', '/commodities', '/purchasing-power', '/gold', '/cha-index', '/energy', '/remittance', '/geography', '/stocks', '/agent'];
    await Promise.all(pages.map(async (page) => {
      const res = await fetch(`${DOMAIN}${page}`);
      expect(res.status).toBe(200);
      const text = await res.text();
      expect(text).toContain('bdmcp');
      expect(text).toContain('/inflation');
      expect(text).toContain('/banking');
      expect(text).toContain('/laws');
      expect(text).toContain('/commodities');
      expect(text).toContain('/purchasing-power');
      expect(text).toContain('/gold');
      expect(text).toContain('/cha-index');
      expect(text).toContain('/energy');
      expect(text).toContain('/remittance');
      expect(text).toContain('/geography');
    }));
  }, 15000);

  it('GET /api/gold, /api/fuel, and /api/tong return verified historical data', async () => {
    const resGold = await fetch(`${DOMAIN}/api/gold`);
    expect(resGold.status).toBe(200);
    const gold = await resGold.json() as any;
    expect(gold.length).toBeGreaterThanOrEqual(10);
    expect(gold[0].value).toBeGreaterThanOrEqual(100000);

    const resFuel = await fetch(`${DOMAIN}/api/fuel`);
    expect(resFuel.status).toBe(200);
    const fuel = await resFuel.json() as any;
    expect(fuel.diesel.length).toBeGreaterThanOrEqual(8);
    expect(fuel.octane.length).toBeGreaterThanOrEqual(8);

    const resTong = await fetch(`${DOMAIN}/api/tong`);
    expect(resTong.status).toBe(200);
    const tong = await resTong.json() as any;
    expect(tong.length).toBeGreaterThanOrEqual(5);

    const resBiye = await fetch(`${DOMAIN}/api/biye`);
    expect(resBiye.status).toBe(200);
    const biye = await resBiye.json() as any;
    expect(biye.length).toBeGreaterThanOrEqual(6);

    const resNet = await fetch(`${DOMAIN}/api/internet`);
    expect(resNet.status).toBe(200);
    const net = await resNet.json() as any;
    expect(net.price.length).toBeGreaterThanOrEqual(6);
    expect(net.users.length).toBeGreaterThanOrEqual(6);

    const resRent = await fetch(`${DOMAIN}/api/rent`);
    expect(resRent.status).toBe(200);
    const rent = await resRent.json() as any;
    expect(rent.dhanmondi.length).toBeGreaterThanOrEqual(5);
    expect(rent.mirpur.length).toBeGreaterThanOrEqual(5);

    const resCricket = await fetch(`${DOMAIN}/api/cricket`);
    expect(resCricket.status).toBe(200);
    const cricket = await resCricket.json() as any;
    expect(cricket.legends.length).toBe(4);
    expect(cricket.historic_wins.length).toBeGreaterThanOrEqual(5);

    const resRivers = await fetch(`${DOMAIN}/api/rivers`);
    expect(resRivers.status).toBe(200);
    const rivers = await resRivers.json() as any;
    expect(rivers.summary.transboundary_count).toBe(57);

    const resHolidays = await fetch(`${DOMAIN}/api/holidays`);
    expect(resHolidays.status).toBe(200);
    const holidays = await resHolidays.json() as any;
    expect(holidays.holidays.length).toBeGreaterThanOrEqual(10);

    const resDemo = await fetch(`${DOMAIN}/api/demographics`);
    expect(resDemo.status).toBe(200);
    const demo = await resDemo.json() as any;
    expect(demo.lifeExpectancy.length).toBeGreaterThanOrEqual(5);

    const resGrid = await fetch(`${DOMAIN}/api/grid`);
    expect(resGrid.status).toBe(200);
    const grid = await resGrid.json() as any;
    expect(grid.capacity.length).toBeGreaterThanOrEqual(5);

    const resForex = await fetch(`${DOMAIN}/api/forex`);
    expect(resForex.status).toBe(200);
    const forex = await resForex.json() as any;
    expect(forex.rates.length).toBeGreaterThanOrEqual(10);
    expect(forex.majorCurrencies.length).toBeGreaterThanOrEqual(5);
  }, 15000);

  it('GET /api/geography returns full 8-division and upazila counts', async () => {
    const res = await fetch(`${DOMAIN}/api/geography`);
    expect(res.status).toBe(200);
    const data = await res.json() as any;
    expect(data.divisions.length).toBe(8);
    expect(data.counts.divisions).toBe(8);
    expect(data.counts.districts).toBe(64);
    expect(data.counts.upazilas).toBe(494);
    expect(data.counts.postcodes).toBe(1349);
  });

  it('GET /api/remittance returns 35-year remittance series and BPM6 reserves', async () => {
    const res = await fetch(`${DOMAIN}/api/remittance`);
    expect(res.status).toBe(200);
    const data = await res.json() as any;
    expect(data.remittance.length).toBeGreaterThanOrEqual(20);
    expect(data.reserves.length).toBeGreaterThanOrEqual(5);
  });
});
