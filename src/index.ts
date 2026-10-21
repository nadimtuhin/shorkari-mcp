import { wrapD1 } from './db/adapter';
import { queryInflationHistory, queryMacroSnapshot } from './db/queries/macro';
import { queryBankBranches } from './db/queries/banks';
import { queryLocation } from './db/queries/geo';
import { queryStockHistory, queryMarketIndex, queryCompanyFundamentals } from './db/queries/stocks';
import { queryCommodityPrices } from './db/queries/commodities';
import { queryLegalActs } from './db/queries/laws';
import { renderDashboardHtml } from './ui/dashboard';
import {
  CRICKET_DATA,
  RIVERS_DATA,
  HOLIDAYS_DATA_2025_2026,
  LONG_WEEKEND_OPTIMIZATIONS,
  MAJOR_CURRENCIES_2025,
  UNESCO_HERITAGE_BD,
  MEGAPROJECTS_BD,
  WATERLOGGING_SURGE_DATA,
  TRAFFIC_CONGESTION_FACTS,
  BCS_ACCEPTANCE_COMPARISON,
  CNG_DESTINATION_REJECTION_DATA,
  BUA_SYNDICATE_FACTS,
  LOCAL_BUS_EXCUSES,
  JOB_PARADOX_FACTS,
  BPL_FRANCHISE_NAME_CHAOS,
  CRICKET_HEARTBREAK_MOMENTS,
  QURBANI_HAAT_NEIGHBOR_REACTIONS,
  ADMISSION_COACHING_BRANDS,
  TONG_PAAN_RECIPES,
  PASSPORT_HARASSMENT_STAGES,
  PATHAO_DRIVER_EXCUSES,
  SAKRAIN_ROOFTOP_SOUND_DATA,
  BOIMELA_VISITOR_PERSONAS,
  HOLUD_STAGE_DRAMA_ARCHETYPES
} from './data/civic';
import { queryMedicines } from './db/queries/medicines';
import { calculateBangladeshIncomeTax } from './engines/tax';
import { calculateBangladeshImportDuty, KNOWN_HS_SCHEDULES } from './engines/tariffs';
import { estimateLandRegistrationFees } from './engines/land';
import { calculateBangladeshVehicleTax } from './engines/vehicles';
import { estimateIncorporationFees } from './engines/incorporation';
import { queryExamStatistics, HISTORICAL_EXAM_SERIES, EDUCATION_BOARDS } from './engines/exams';

export interface Env {
  DB: any;
}

const SERVER_INFO = {
  name: 'bdmcp',
  version: '0.1.0'
};

const TOOLS = [
  {
    name: 'get_inflation_history',
    description: 'Retrieve official Bangladesh inflation rates and CPI trends (1960–present) with base-year disambiguation.',
    inputSchema: {
      type: 'object',
      properties: {
        start_year: { type: 'integer', description: 'Earliest year to include (default: 2015)' },
        end_year: { type: 'integer', description: 'Latest year to include' },
        frequency: { type: 'string', enum: ['ANNUAL', 'MONTHLY'], description: 'ANNUAL (1960-present) or MONTHLY (2020-present) (default: ANNUAL)' }
      }
    }
  },
  {
    name: 'get_macro_snapshot',
    description: 'Get current key macroeconomic indicators: GDP growth, gross and BPM6 usable reserves, remittances.',
    inputSchema: {
      type: 'object',
      properties: {}
    }
  },
  {
    name: 'lookup_bank_routing',
    description: 'Search Bangladesh bank routing numbers (BEFTN), branch names, and districts across 63 banks.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: '9-digit routing number or branch/bank search string' },
        district: { type: 'string', description: 'Optional district filter' },
        payable_only: { type: 'boolean', description: 'Only return branches that accept credit transfers (default: true)' }
      },
      required: ['query']
    }
  },
  {
    name: 'lookup_location',
    description: 'Resolve Bangladesh administrative hierarchy (Division, District, Upazila, Postal Code) by name or 4-digit post code in English or Bangla.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Post code or location name in English or Bangla (e.g. "1209", "Dhanmondi", "সিলেট")' },
        limit: { type: 'integer', description: 'Maximum results to return (default: 10)' }
      },
      required: ['query']
    }
  },
  {
    name: 'get_stock_history',
    description: 'Retrieve historical daily OHLCV stock quotes from Dhaka Stock Exchange (DSE) by ticker or company name.',
    inputSchema: {
      type: 'object',
      properties: {
        symbol: { type: 'string', description: 'DSE trade code or company name (e.g. "GP", "Square Pharma", "BATBC")' },
        start_date: { type: 'string', description: 'Start date YYYY-MM-DD' },
        end_date: { type: 'string', description: 'End date YYYY-MM-DD' },
        limit: { type: 'integer', description: 'Number of daily bars (default: 30)' }
      },
      required: ['symbol']
    }
  },
  {
    name: 'get_market_indices',
    description: 'Retrieve daily historical benchmark index performance for Dhaka Stock Exchange (DSEX, DS30, DSES Shariah).',
    inputSchema: {
      type: 'object',
      properties: {
        index_name: { type: 'string', description: 'Index name (e.g. "DSEX", "DS30", "DSES")' },
        start_date: { type: 'string', description: 'Start date YYYY-MM-DD' },
        end_date: { type: 'string', description: 'End date YYYY-MM-DD' },
        limit: { type: 'integer', description: 'Number of trading days (default: 30)' }
      },
      required: ['index_name']
    }
  },
  {
    name: 'get_company_fundamentals',
    description: 'Retrieve sector classification, category, paid-up capital, and Shariah index compliance status for a DSE listed company.',
    inputSchema: {
      type: 'object',
      properties: {
        symbol: { type: 'string', description: 'DSE trade code or company name' }
      },
      required: ['symbol']
    }
  },
  {
    name: 'get_commodity_price',
    description: 'Query live and historical wholesale and retail prices of essential food commodities (rice, onion, egg, oil, etc.) across Bangladesh districts.',
    inputSchema: {
      type: 'object',
      properties: {
        commodity: { type: 'string', description: 'Commodity name in English or Bangla (e.g. "onion", "egg", "চাল", "ডিম")' },
        district: { type: 'string', description: 'District name (e.g. "Dhaka", "Chattogram")' },
        date: { type: 'string', description: 'Price date YYYY-MM-DD' },
        limit: { type: 'integer', description: 'Number of results to return (default: 20)' }
      }
    }
  },
  {
    name: 'search_laws',
    description: 'Search 1,484 Bangladesh Acts, Ordinances, and statutes (1836–present) by title keyword or enactment year.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Act title or subject in English or Bangla' },
        year: { type: 'integer', description: 'Enactment year (e.g. 1994, 2023)' },
        active_only: { type: 'boolean', description: 'Only return in-force acts and omit repealed legislation (default: true)' },
        limit: { type: 'integer', description: 'Number of results to return (default: 10)' }
      },
      required: ['query']
    }
  },
  {
    name: 'lookup_medicine',
    description: 'Search 32,000+ registered Bangladesh medicines by brand name, generic formula, or indication with manufacturer and official DGDA MRP price cap.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Brand name, generic formula, or indication (e.g. "Napa", "Paracetamol", "Seclo", "Fexo")' },
        generic_name: { type: 'string', description: 'Optional specific generic chemical name (e.g. "Omeprazole", "Montelukast")' },
        manufacturer: { type: 'string', description: 'Optional pharmaceutical company filter (e.g. "Square", "Beximco", "Incepta")' },
        therapeutic_class: { type: 'string', description: 'Optional medical class (e.g. "Proton Pump Inhibitor (PPI)", "Antibiotic")' },
        limit: { type: 'integer', description: 'Maximum results to return (default: 20)' }
      }
    }
  },
  {
    name: 'calculate_income_tax',
    description: 'Compute individual income tax, progressive slabs (5%-25%), investment tax rebates, and TDS according to Bangladesh Income Tax Act 2023.',
    inputSchema: {
      type: 'object',
      properties: {
        annual_income_bdt: { type: 'number', description: 'Gross annual taxable income in BDT' },
        taxpayer_category: { type: 'string', enum: ['general', 'female_or_senior_65', 'physically_challenged', 'freedom_fighter'], description: 'Taxpayer exemption category (default: general)' },
        has_disabled_child: { type: 'boolean', description: 'Entitled to additional ৳50,000 parent exemption' },
        city_location: { type: 'string', enum: ['dhaka_chattogram', 'other_city_corporation', 'non_city'], description: 'Residential city category for minimum tax rule' },
        allowable_investments_bdt: { type: 'number', description: 'Allowable investments (DPS, insurance, bonds) for 15% tax rebate' },
        net_wealth_bdt: { type: 'number', description: 'Total net wealth in BDT (for surcharge calculation if > ৳4 crore)' }
      },
      required: ['annual_income_bdt']
    }
  },
  {
    name: 'calculate_import_duty',
    description: 'Calculate NBR Customs Tariff and landing duty (CD, RD, SD, VAT, AIT, AT) by 8-digit HS Code or assessable value under Bangladesh Customs Act.',
    inputSchema: {
      type: 'object',
      properties: {
        cnf_value_usd: { type: 'number', description: 'Cost and Freight (C&F) invoice value in USD' },
        hs_code: { type: 'string', description: '8-digit HS Code (e.g. "8471.30.00" for laptops, "8517.13.00" for smartphones, "8703.22.00" for cars)' },
        exchange_rate_bdt: { type: 'number', description: 'Customs exchange rate USD to BDT (default: 122.0)' },
        cd_percent: { type: 'number', description: 'Customs Duty override percentage' },
        rd_percent: { type: 'number', description: 'Regulatory Duty override percentage' },
        sd_percent: { type: 'number', description: 'Supplementary Duty override percentage' },
        vat_percent: { type: 'number', description: 'Value Added Tax override percentage (default: 15)' },
        ait_percent: { type: 'number', description: 'Advance Income Tax override percentage (default: 5)' },
        at_percent: { type: 'number', description: 'Advance Tax override percentage (default: 5)' }
      },
      required: ['cnf_value_usd']
    }
  },
  {
    name: 'estimate_land_registration',
    description: 'Estimate statutory land deed registration fees, stamp duty (1.5%), local govt taxes, gain tax (Section 53FF), and e-Namjari mutation costs.',
    inputSchema: {
      type: 'object',
      properties: {
        deed_value_bdt: { type: 'number', description: 'Deed sale value or Mouza base value in BDT' },
        area_type: { type: 'string', enum: ['dhaka_chattogram_city', 'pourashava_district', 'rural_union_parishad'], description: 'Property geographical location classification' },
        is_residential_plot: { type: 'boolean', description: 'Whether the property is a residential plot or commercial land' }
      },
      required: ['deed_value_bdt']
    }
  },
  {
    name: 'calculate_vehicle_tax',
    description: 'Calculate annual BRTA road tax token, fitness inspection fees, and NBR advance income tax (AIT) by engine displacement (CC) and EV kW slabs.',
    inputSchema: {
      type: 'object',
      properties: {
        engine_cc: { type: 'number', description: 'Engine cylinder capacity in cubic centimeters (cc), or 0 for EV' },
        vehicle_type: { type: 'string', enum: ['private_car_sedan', 'suv_jeep', 'microbus', 'motorcycle', 'ev_electric'], description: 'Vehicle classification' },
        is_second_vehicle: { type: 'boolean', description: 'Whether this is the second or subsequent vehicle in owner tax file (50% AIT penalty)' },
        motor_kw: { type: 'number', description: 'Electric vehicle motor capacity in kilowatts (kW) for EV slab' }
      },
      required: ['engine_cc']
    }
  },
  {
    name: 'estimate_incorporation_fees',
    description: 'Calculate official RJSC company incorporation costs, authorized capital slab registration fees, digital stamps, and statutory filing forms.',
    inputSchema: {
      type: 'object',
      properties: {
        authorized_capital_bdt: { type: 'number', description: 'Proposed authorized share capital in BDT (e.g. 1000000)' },
        company_type: { type: 'string', enum: ['private_limited', 'opc_one_person', 'public_limited'], description: 'Company entity type (default: private_limited)' },
        num_directors: { type: 'integer', description: 'Number of directors (default: 2)' }
      },
      required: ['authorized_capital_bdt']
    }
  },
  {
    name: 'get_exam_statistics',
    description: 'Retrieve 20-year official HSC and SSC examination results, pass percentages, GPA-5 distributions, and board statistics (2005–2024).',
    inputSchema: {
      type: 'object',
      properties: {
        exam_type: { type: 'string', enum: ['HSC', 'SSC'], description: 'Examination type (default: HSC)' },
        year: { type: 'integer', description: 'Specific exam year (2005 to 2024)' },
        limit: { type: 'integer', description: 'Number of yearly records to return' }
      }
    }
  }
];

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ status: 'ok', name: SERVER_INFO.name, version: SERVER_INFO.version }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const SECURITY_HEADERS = {
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Content-Security-Policy': "default-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:;",
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    };

    if (url.pathname === '/robots.txt') {
      const robots = `User-agent: *\nAllow: /\n\nSitemap: https://bdmcp.nadimtuhin.com/sitemap.xml\n`;
      return new Response(robots, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8', ...SECURITY_HEADERS }
      });
    }

    if (url.pathname === '/llms.txt') {
      const llms = `# bdmcp (সরকারি MCP)\n\n> The Open Public Intelligence & Data Connector for Bangladesh.\n\nbdmcp is an unofficial Model Context Protocol (MCP) server connecting AI assistants (Claude, Cursor, ChatGPT, Codex, Pi, Hermes) to verified Bangladesh government data, macroeconomic time series, daily commodity prices, banking infrastructure, and national legislation.\n\n## Core Endpoints & Resources\n\n- [Home](https://bdmcp.nadimtuhin.com/): Public Intelligence Edge Overview\n- [Inflation](https://bdmcp.nadimtuhin.com/inflation): 65-year CPI time series and BBS monthly point-to-point data\n- [Forex](https://bdmcp.nadimtuhin.com/forex): 54-year USD/BDT historical exchange rates (1971-2025)\n- [RMG Exports](https://bdmcp.nadimtuhin.com/rmg): Ready-made garments export engine, world #2 exporter\n- [Agriculture](https://bdmcp.nadimtuhin.com/agriculture): Rice production and food security self-sufficiency\n- [Cyclones](https://bdmcp.nadimtuhin.com/cyclones): Cyclone resilience and disaster preparedness miracle\n- [Heritage](https://bdmcp.nadimtuhin.com/heritage): UNESCO Intangible Cultural Heritage of Bangladesh\n- [Megaprojects](https://bdmcp.nadimtuhin.com/megaprojects): Padma Bridge, Karnaphuli Tunnel, Rooppur Nuclear tracker\n- [Fuchka](https://bdmcp.nadimtuhin.com/fuchka): Dhaka fuchka and shingara street food inflation index\n- [Traffic](https://bdmcp.nadimtuhin.com/traffic): Dhaka traffic jam and lifespan lost index\n- [Waterlogging](https://bdmcp.nadimtuhin.com/jaljot): Monsoon waterlogging and rickshaw surge pricing index\n- [BCS Cadre](https://bdmcp.nadimtuhin.com/bcs): The BCS exam craze, applicant surge, and cadre acceptance odds\n- [Bachelor Housing](https://bdmcp.nadimtuhin.com/bachelor): Dhaka bachelor flat hunting, to-let restrictions, and bua syndicate\n- [CNG Auto-Rickshaw](https://bdmcp.nadimtuhin.com/cng): Dhaka CNG 'yamuna' refusal and official meter vs chukti fare gap\n- [Old Dhaka Biryani](https://bdmcp.nadimtuhin.com/biryani): Haji biryani and authentic borhani price trajectory\n- [Load-Shedding & IPS](https://bdmcp.nadimtuhin.com/loadshedding): 20-year power outage hours and IPS battery price surge\n- [Local Bus Sitting](https://bdmcp.nadimtuhin.com/localbus): Dhaka local bus sitting service myth and fare inflation\n- [Fresher Job Paradox](https://bdmcp.nadimtuhin.com/freshers): Entry-level experience paradox and real salary purchasing power\n- [BPL & Cricket](https://bdmcp.nadimtuhin.com/bpl): BPL franchise name chaos and iconic cricket heartbreaks\n- [Qurbani Haat](https://bdmcp.nadimtuhin.com/qurbani): Gabtoli cattle market cow price inflation and neighbor verdicts\n- [Admission War](https://bdmcp.nadimtuhin.com/admission): University admission coaching fees and Farmgate coaching industry\n- [Tong Paan](https://bdmcp.nadimtuhin.com/paan): Post-meal betel leaf paan-supari, jarda, and mukhshuddhi index\n- [Passport & NID](https://bdmcp.nadimtuhin.com/passport): Agargaon passport dalal expedited fees and police verification friction\n- [Commodities](https://bdmcp.nadimtuhin.com/commodities): Daily kitchen market food commodity price tracker\n- [Purchasing Power](https://bdmcp.nadimtuhin.com/purchasing-power): The 1,000 Taka Note & Dhaka Dim Index\n- [Gold](https://bdmcp.nadimtuhin.com/gold): 25-year BAJUS 22-Karat gold price history\n- [Tong Index](https://bdmcp.nadimtuhin.com/cha-index): Street food and tea stall inflation index\n- [Energy](https://bdmcp.nadimtuhin.com/energy): Diesel, Octane, and LPG tariff revisions\n- [Banking](https://bdmcp.nadimtuhin.com/banking): 11,426 bank branches across 63 scheduled banks with BEFTN routing\n- [Laws](https://bdmcp.nadimtuhin.com/laws): 1,489 legal statutes and acts of Bangladesh (1799–2025)\n- [MCP Streamable-HTTP](https://bdmcp.nadimtuhin.com/mcp): JSON-RPC MCP endpoint\n`;
      return new Response(llms, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8', ...SECURITY_HEADERS }
      });
    }

    if (url.pathname === '/sitemap.xml') {
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://bdmcp.nadimtuhin.com/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/inflation</loc><changefreq>daily</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/commodities</loc><changefreq>daily</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/purchasing-power</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/gold</loc><changefreq>daily</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/cha-index</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/energy</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/rickshaw</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/fish-index</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/transit</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/forex</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/rmg</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/agriculture</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/cyclones</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/heritage</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/megaprojects</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/fuchka</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/traffic</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/jaljot</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/bcs</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/bachelor</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/cng</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/biryani</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/loadshedding</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/localbus</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/freshers</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/bpl</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/qurbani</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/admission</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/paan</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/passport</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/medicines</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/tax</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/tariffs</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/land</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/vehicles</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/incorporation</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/exams</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/remittance</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/geography</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/banking</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/laws</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/stocks</loc><changefreq>daily</changefreq><priority>0.8</priority></url>
  <url><loc>https://bdmcp.nadimtuhin.com/agent</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
</urlset>`;
      return new Response(sitemap, {
        headers: { 'Content-Type': 'application/xml; charset=utf-8', ...SECURITY_HEADERS }
      });
    }

    const htmlRoutes = [
      '/', '',
      '/inflation',
      '/commodities',
      '/purchasing-power',
      '/gold',
      '/cha-index',
      '/energy',
      '/rickshaw',
      '/fish-index',
      '/transit',
      '/biye-index',
      '/internet',
      '/rent',
      '/eid-transit',
      '/cricket',
      '/demographics',
      '/rivers',
      '/grid',
      '/holidays',
      '/forex',
      '/fuchka',
      '/traffic',
      '/jaljot',
      '/rmg',
      '/cyclones',
      '/heritage',
      '/agriculture',
      '/megaprojects',
      '/bcs',
      '/bachelor',
      '/cng',
      '/biryani',
      '/loadshedding',
      '/localbus',
      '/freshers',
      '/bpl',
      '/qurbani',
      '/admission',
      '/paan',
      '/passport',
      '/pathao',
      '/sakrain',
      '/boimela',
      '/holud',
      '/medicines',
      '/tax',
      '/tariffs',
      '/land',
      '/vehicles',
      '/incorporation',
      '/exams',
      '/remittance',
      '/geography',
      '/banking',
      '/laws',
      '/stocks',
      '/agent',
      '/about',
      '/contact'
    ];
    if (htmlRoutes.includes(url.pathname)) {
      const activeSection = url.pathname.replace(/^\//, '') || 'overview';
      return new Response(renderDashboardHtml(activeSection), {
        headers: { 'Content-Type': 'text/html; charset=utf-8', ...SECURITY_HEADERS }
      });
    }
    if (url.pathname === '/api/fuchka') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const [fuchka, shingara] = await Promise.all([
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'FUCHKA_PLATE_BDT' ORDER BY period_year DESC").catch(() => []),
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'SHINGARA_PIECE_BDT' ORDER BY period_year DESC").catch(() => [])
      ]);
      return new Response(JSON.stringify({ fuchka, shingara }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/traffic') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const speeds = await db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'DHAKA_TRAFFIC_SPEED_KMH' ORDER BY period_year DESC").catch(() => []);
      return new Response(JSON.stringify({ speeds, facts: TRAFFIC_CONGESTION_FACTS }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/jaljot') {
      return new Response(JSON.stringify(WATERLOGGING_SURGE_DATA), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/rmg') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const [exportsData, wages] = await Promise.all([
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'RMG_EXPORTS_USD_BN' ORDER BY period_year DESC").catch(() => []),
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'RMG_MIN_WAGE_BDT' ORDER BY period_year DESC").catch(() => [])
      ]);
      return new Response(JSON.stringify({ exports: exportsData, wages }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/cyclones') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const [fatalities, shelters] = await Promise.all([
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'CYCLONE_FATALITIES' ORDER BY period_year DESC").catch(() => []),
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'CYCLONE_SHELTERS_COUNT' ORDER BY period_year DESC").catch(() => [])
      ]);
      return new Response(JSON.stringify({ fatalities, shelters }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/heritage') {
      return new Response(JSON.stringify(UNESCO_HERITAGE_BD), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/agriculture') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const rice = await db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'RICE_PRODUCTION_MN_TONS' ORDER BY period_year DESC").catch(() => []);
      return new Response(JSON.stringify({ rice }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/megaprojects') {
      return new Response(JSON.stringify(MEGAPROJECTS_BD), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/bcs') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const [applicants, cadres] = await Promise.all([
        db.all("SELECT period_year, period_month as bcs_no, value, unit, source_agency FROM macro_indicators WHERE series_id = 'BCS_APPLICANTS' ORDER BY period_month DESC").catch(() => []),
        db.all("SELECT period_year, period_month as bcs_no, value, unit, source_agency FROM macro_indicators WHERE series_id = 'BCS_CADRES' ORDER BY period_month DESC").catch(() => [])
      ]);
      return new Response(JSON.stringify({ applicants, cadres, comparisons: BCS_ACCEPTANCE_COMPARISON }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/bachelor') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const wages = await db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'BUA_MONTHLY_WAGE_BDT' ORDER BY period_year DESC").catch(() => []);
      return new Response(JSON.stringify({ wages, syndicate: BUA_SYNDICATE_FACTS }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/cng') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const [meter, chukti] = await Promise.all([
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'CNG_METER_FARE_BDT' ORDER BY period_year DESC").catch(() => []),
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'CNG_CHUKTI_FARE_BDT' ORDER BY period_year DESC").catch(() => [])
      ]);
      return new Response(JSON.stringify({ meter, chukti, rejections: CNG_DESTINATION_REJECTION_DATA }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/biryani') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const [haji, borhani] = await Promise.all([
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'HAJI_BIRYANI_PLATE_BDT' ORDER BY period_year DESC").catch(() => []),
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'BORHANI_GLASS_BDT' ORDER BY period_year DESC").catch(() => [])
      ]);
      return new Response(JSON.stringify({ haji, borhani }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/loadshedding') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const [hours, battery] = await Promise.all([
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'LOADSHEDDING_HOURS' ORDER BY period_year DESC").catch(() => []),
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'IPS_BATTERY_BDT' ORDER BY period_year DESC").catch(() => [])
      ]);
      return new Response(JSON.stringify({ hours, battery }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/localbus') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const fares = await db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'BUS_MIN_FARE_BDT' ORDER BY period_year DESC").catch(() => []);
      return new Response(JSON.stringify({ fares, excuses: LOCAL_BUS_EXCUSES }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/freshers') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const salaries = await db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'FRESHER_SALARY_BDT' ORDER BY period_year DESC").catch(() => []);
      return new Response(JSON.stringify({ salaries, paradox: JOB_PARADOX_FACTS }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/bpl') {
      return new Response(JSON.stringify({ rebrands: BPL_FRANCHISE_NAME_CHAOS, heartbreaks: CRICKET_HEARTBREAK_MOMENTS }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/qurbani') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const cows = await db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'QURBANI_COW_BDT' ORDER BY period_year DESC").catch(() => []);
      return new Response(JSON.stringify({ cows, reactions: QURBANI_HAAT_NEIGHBOR_REACTIONS }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/admission') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const coaching = await db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'ADMISSION_COACHING_BDT' ORDER BY period_year DESC").catch(() => []);
      return new Response(JSON.stringify({ coaching, brands: ADMISSION_COACHING_BRANDS }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/paan') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const paan = await db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'PAAN_KHILI_BDT' ORDER BY period_year DESC").catch(() => []);
      return new Response(JSON.stringify({ paan, recipes: TONG_PAAN_RECIPES }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/passport') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const dalal = await db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'PASSPORT_DALAL_BDT' ORDER BY period_year DESC").catch(() => []);
      return new Response(JSON.stringify({ dalal, stages: PASSPORT_HARASSMENT_STAGES }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/pathao') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const [bikes, cars] = await Promise.all([
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'PATHAO_BIKE_BASE_FARE' ORDER BY period_year DESC").catch(() => []),
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'UBER_CAR_BASE_FARE' ORDER BY period_year DESC").catch(() => [])
      ]);
      return new Response(JSON.stringify({ bikes, cars, excuses: PATHAO_DRIVER_EXCUSES }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/sakrain') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const [watts, kites] = await Promise.all([
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'SAKRAIN_ROOFTOP_SOUND_WATTS' ORDER BY period_year DESC").catch(() => []),
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'SAKRAIN_KITE_BDT' ORDER BY period_year DESC").catch(() => [])
      ]);
      return new Response(JSON.stringify({ watts, kites, soundData: SAKRAIN_ROOFTOP_SOUND_DATA }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/boimela') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const [titles, sales] = await Promise.all([
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'BOIMELA_NEW_TITLES' ORDER BY period_year DESC").catch(() => []),
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'BOIMELA_SALES_CRORE' ORDER BY period_year DESC").catch(() => [])
      ]);
      return new Response(JSON.stringify({ titles, sales, personas: BOIMELA_VISITOR_PERSONAS }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/holud') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const [production, makeover] = await Promise.all([
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'HOLUD_PRODUCTION_BUDGET' ORDER BY period_year DESC").catch(() => []),
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'BRIDAL_HOLUD_MAKEOVER' ORDER BY period_year DESC").catch(() => [])
      ]);
      return new Response(JSON.stringify({ production, makeover, archetypes: HOLUD_STAGE_DRAMA_ARCHETYPES }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/medicines') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const q = url.searchParams.get('query') || url.searchParams.get('q') || '';
      const gen = url.searchParams.get('generic') || '';
      const mfg = url.searchParams.get('manufacturer') || '';
      const tc = url.searchParams.get('therapeutic_class') || '';
      const limit = parseInt(url.searchParams.get('limit') || '25', 10);
      const data = await queryMedicines(db, { query: q, generic_name: gen, manufacturer: mfg, therapeutic_class: tc, limit });
      return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/tax') {
      let body: any = {};
      if (request.method === 'POST') {
        body = await request.json().catch(() => ({}));
      } else {
        const income = parseFloat(url.searchParams.get('income') || url.searchParams.get('annual_income_bdt') || '600000');
        const cat = url.searchParams.get('category') || url.searchParams.get('taxpayer_category') || 'general';
        const inv = parseFloat(url.searchParams.get('investments') || '0');
        const loc = url.searchParams.get('city') || 'dhaka_chattogram';
        const child = url.searchParams.get('disabled_child') === 'true';
        const wealth = parseFloat(url.searchParams.get('wealth') || '0');
        body = { annual_income_bdt: income, taxpayer_category: cat, allowable_investments_bdt: inv, city_location: loc, has_disabled_child: child, net_wealth_bdt: wealth };
      }
      const result = calculateBangladeshIncomeTax(body);
      return new Response(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/tariffs') {
      let body: any = {};
      if (request.method === 'POST') {
        body = await request.json().catch(() => ({}));
      } else {
        const cnf = parseFloat(url.searchParams.get('cnf') || url.searchParams.get('cnf_value_usd') || '1000');
        const hs = url.searchParams.get('hs_code') || '8471.30.00';
        const ex = parseFloat(url.searchParams.get('exchange_rate') || '122.0');
        body = { cnf_value_usd: cnf, hs_code: hs, exchange_rate_bdt: ex };
      }
      const result = calculateBangladeshImportDuty(body);
      return new Response(JSON.stringify({ ...result, known_schedules: KNOWN_HS_SCHEDULES }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/land') {
      let body: any = {};
      if (request.method === 'POST') {
        body = await request.json().catch(() => ({}));
      } else {
        const val = parseFloat(url.searchParams.get('value') || url.searchParams.get('deed_value_bdt') || '5000000');
        const area = url.searchParams.get('area') || 'dhaka_chattogram_city';
        body = { deed_value_bdt: val, area_type: area };
      }
      const result = estimateLandRegistrationFees(body);
      return new Response(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/vehicles') {
      let body: any = {};
      if (request.method === 'POST') {
        body = await request.json().catch(() => ({}));
      } else {
        const cc = parseFloat(url.searchParams.get('cc') || url.searchParams.get('engine_cc') || '1500');
        const type = url.searchParams.get('type') || 'private_car_sedan';
        const second = url.searchParams.get('second') === 'true';
        const kw = parseFloat(url.searchParams.get('kw') || '0');
        body = { engine_cc: cc, vehicle_type: type, is_second_vehicle: second, motor_kw: kw };
      }
      const result = calculateBangladeshVehicleTax(body);
      return new Response(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/incorporation') {
      let body: any = {};
      if (request.method === 'POST') {
        body = await request.json().catch(() => ({}));
      } else {
        const cap = parseFloat(url.searchParams.get('capital') || url.searchParams.get('authorized_capital_bdt') || '1000000');
        const type = url.searchParams.get('type') || 'private_limited';
        body = { authorized_capital_bdt: cap, company_type: type };
      }
      const result = estimateIncorporationFees(body);
      return new Response(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/exams') {
      const exam = (url.searchParams.get('exam') || 'HSC') as 'HSC' | 'SSC';
      const year = url.searchParams.get('year') ? parseInt(url.searchParams.get('year')!, 10) : undefined;
      const data = queryExamStatistics({ exam_type: exam, year });
      return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/forex') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const rates = await db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'FOREX_USD_BDT_ANNUAL' ORDER BY period_year DESC").catch(() => []);
      return new Response(JSON.stringify({ rates, majorCurrencies: MAJOR_CURRENCIES_2025 }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/cricket') {
      return new Response(JSON.stringify(CRICKET_DATA), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/rivers') {
      return new Response(JSON.stringify(RIVERS_DATA), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/holidays') {
      return new Response(JSON.stringify({ holidays: HOLIDAYS_DATA_2025_2026, optimizations: LONG_WEEKEND_OPTIMIZATIONS }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/demographics') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const [lifeExpectancy, fertility, literacy] = await Promise.all([
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'DEMO_LIFE_EXPECTANCY_YEARS' ORDER BY period_year DESC").catch(() => []),
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'DEMO_TOTAL_FERTILITY_RATE' ORDER BY period_year DESC").catch(() => []),
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'DEMO_LITERACY_RATE_PCT' ORDER BY period_year DESC").catch(() => [])
      ]);
      return new Response(JSON.stringify({ lifeExpectancy, fertility, literacy }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/grid') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const capacity = await db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'POWER_GRID_CAPACITY_MW' ORDER BY period_year DESC").catch(() => []);
      return new Response(JSON.stringify({ capacity }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/biye') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const data = await db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'WEDDING_KACCHI_DEGA_BDT' ORDER BY period_year DESC").catch(() => []);
      return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/internet') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const [price, users] = await Promise.all([
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'INTERNET_MOBILE_DATA_1GB_BDT' ORDER BY period_year DESC").catch(() => []),
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'INTERNET_SUBSCRIBERS_MILLIONS' ORDER BY period_year DESC").catch(() => [])
      ]);
      return new Response(JSON.stringify({ price, users }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/rent') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const [dhanmondi, mirpur] = await Promise.all([
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'RENT_DHANMONDI_APT_BDT' ORDER BY period_year DESC").catch(() => []),
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'RENT_MIRPUR_APT_BDT' ORDER BY period_year DESC").catch(() => [])
      ]);
      return new Response(JSON.stringify({ dhanmondi, mirpur }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/rickshaw') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const data = await db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'TRANSIT_RICKSHAW_FARMGATE_TSC' ORDER BY period_year DESC").catch(() => []);
      return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/fish') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const [ilish, rui] = await Promise.all([
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'FISH_ILISH_1KG_BDT' ORDER BY period_year DESC").catch(() => []),
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'FISH_RUI_1KG_BDT' ORDER BY period_year DESC").catch(() => [])
      ]);
      return new Response(JSON.stringify({ ilish, rui }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/gold') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const data = await db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'GOLD_22K_BHORI_BDT' ORDER BY period_year DESC").catch(() => []);
      return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/fuel') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const [diesel, octane] = await Promise.all([
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'FUEL_DIESEL_LITER_BDT' ORDER BY period_year DESC").catch(() => []),
        db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'FUEL_OCTANE_LITER_BDT' ORDER BY period_year DESC").catch(() => [])
      ]);
      return new Response(JSON.stringify({ diesel, octane }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/tong') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const data = await db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'TONG_DUDH_CHA_BDT' ORDER BY period_year DESC").catch(() => []);
      return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/geography') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const [divisions, counts] = await Promise.all([
        db.all('SELECT d.name, d.bn_name, count(dist.id) as districts, count(u.id) as upazilas FROM divisions d LEFT JOIN districts dist ON dist.division_id = d.id LEFT JOIN upazilas u ON u.district_id = dist.id GROUP BY d.id ORDER BY upazilas DESC').catch(() => []),
        db.get('SELECT (SELECT count(*) FROM divisions) as divisions, (SELECT count(*) FROM districts) as districts, (SELECT count(*) FROM upazilas) as upazilas, (SELECT count(*) FROM postcodes) as postcodes').catch(() => ({}))
      ]);
      return new Response(JSON.stringify({ divisions, counts }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/remittance') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const remittance = await db.all("SELECT period_year, value, unit, source_agency FROM macro_indicators WHERE series_id = 'REMITTANCE_ANNUAL_USD_BN' ORDER BY period_year DESC").catch(() => []);
      const reserves = await db.all("SELECT period_year, period_month, value, unit, source_agency FROM macro_indicators WHERE series_id = 'RESERVES_BPM6_USD' ORDER BY period_year DESC, period_month DESC").catch(() => []);
      return new Response(JSON.stringify({ remittance, reserves }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/inflation') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const freqParam = (url.searchParams.get('frequency') || 'annual').toUpperCase();
      const frequency = freqParam === 'MONTHLY' ? 'MONTHLY' : 'ANNUAL';
      const startYear = url.searchParams.get('start_year') ? parseInt(url.searchParams.get('start_year')!, 10) : undefined;
      const endYear = url.searchParams.get('end_year') ? parseInt(url.searchParams.get('end_year')!, 10) : undefined;
      const data = await queryInflationHistory(db, { start_year: startYear, end_year: endYear, frequency });
      return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/commodities') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const commodity = url.searchParams.get('commodity') || undefined;
      const district = url.searchParams.get('district') || undefined;
      const data = await queryCommodityPrices(db, { commodity, district, limit: 100 });
      return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/api/stats') {
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);
      const [inflationAnnual, inflationMonthly, branches, laws, commodities] = await Promise.all([
        queryInflationHistory(db, { start_year: 2000, frequency: 'ANNUAL' }),
        queryInflationHistory(db, { start_year: 2020, frequency: 'MONTHLY' }),
        db.get('SELECT count(*) as count FROM bank_branches').catch(() => ({ count: 0 })),
        db.get('SELECT count(*) as count FROM legal_acts').catch(() => ({ count: 0 })),
        db.get('SELECT count(*) as count FROM commodity_prices').catch(() => ({ count: 0 }))
      ]);
      return new Response(
        JSON.stringify({
          inflation: inflationAnnual,
          inflation_annual: inflationAnnual,
          inflation_monthly: inflationMonthly,
          branches_count: branches?.count ?? 0,
          laws_count: laws?.count ?? 0,
          commodities_count: commodities?.count ?? 0
        }),
        { headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (url.pathname === '/mcp' && request.method === 'POST') {
      let body: any;
      try {
        body = await request.json();
      } catch {
        return new Response(JSON.stringify({ jsonrpc: '2.0', error: { code: -32700, message: 'Parse error' } }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      const { id, method, params } = body;
      const db = env.DB?.all ? env.DB : wrapD1(env.DB);

      if (method === 'initialize') {
        return new Response(
          JSON.stringify({
            jsonrpc: '2.0',
            id,
            result: {
              protocolVersion: '2024-11-05',
              serverInfo: SERVER_INFO,
              capabilities: {
                tools: {}
              }
            }
          }),
          { headers: { 'Content-Type': 'application/json' } }
        );
      }

      if (method === 'tools/list') {
        return new Response(
          JSON.stringify({
            jsonrpc: '2.0',
            id,
            result: {
              tools: TOOLS
            }
          }),
          { headers: { 'Content-Type': 'application/json' } }
        );
      }

      if (method === 'tools/call') {
        const toolName = params?.name;
        const toolArgs = params?.arguments || {};

        try {
          if (toolName === 'get_inflation_history') {
            const data = await queryInflationHistory(db, toolArgs);
            return new Response(
              JSON.stringify({
                jsonrpc: '2.0',
                id,
                result: {
                  content: [{ type: 'text', text: JSON.stringify(data, null, 2) }]
                }
              }),
              { headers: { 'Content-Type': 'application/json' } }
            );
          }

          if (toolName === 'get_macro_snapshot') {
            const data = await queryMacroSnapshot(db);
            return new Response(
              JSON.stringify({
                jsonrpc: '2.0',
                id,
                result: {
                  content: [{ type: 'text', text: JSON.stringify(data, null, 2) }]
                }
              }),
              { headers: { 'Content-Type': 'application/json' } }
            );
          }

          if (toolName === 'lookup_bank_routing') {
            const data = await queryBankBranches(db, toolArgs);
            return new Response(
              JSON.stringify({
                jsonrpc: '2.0',
                id,
                result: {
                  content: [{ type: 'text', text: JSON.stringify(data, null, 2) }]
                }
              }),
              { headers: { 'Content-Type': 'application/json' } }
            );
          }

          if (toolName === 'lookup_location') {
            const data = await queryLocation(db, toolArgs);
            return new Response(
              JSON.stringify({
                jsonrpc: '2.0',
                id,
                result: {
                  content: [{ type: 'text', text: JSON.stringify(data, null, 2) }]
                }
              }),
              { headers: { 'Content-Type': 'application/json' } }
            );
          }

          if (toolName === 'get_stock_history') {
            const data = await queryStockHistory(db, toolArgs);
            return new Response(
              JSON.stringify({
                jsonrpc: '2.0',
                id,
                result: {
                  content: [{ type: 'text', text: JSON.stringify(data, null, 2) }]
                }
              }),
              { headers: { 'Content-Type': 'application/json' } }
            );
          }

          if (toolName === 'get_market_indices') {
            const data = await queryMarketIndex(db, toolArgs);
            return new Response(
              JSON.stringify({
                jsonrpc: '2.0',
                id,
                result: {
                  content: [{ type: 'text', text: JSON.stringify(data, null, 2) }]
                }
              }),
              { headers: { 'Content-Type': 'application/json' } }
            );
          }

          if (toolName === 'get_company_fundamentals') {
            const data = await queryCompanyFundamentals(db, toolArgs);
            return new Response(
              JSON.stringify({
                jsonrpc: '2.0',
                id,
                result: {
                  content: [{ type: 'text', text: JSON.stringify(data, null, 2) }]
                }
              }),
              { headers: { 'Content-Type': 'application/json' } }
            );
          }

          if (toolName === 'get_commodity_price') {
            const data = await queryCommodityPrices(db, toolArgs);
            return new Response(
              JSON.stringify({
                jsonrpc: '2.0',
                id,
                result: {
                  content: [{ type: 'text', text: JSON.stringify(data, null, 2) }]
                }
              }),
              { headers: { 'Content-Type': 'application/json' } }
            );
          }

          if (toolName === 'search_laws') {
            const data = await queryLegalActs(db, toolArgs);
            return new Response(
              JSON.stringify({
                jsonrpc: '2.0',
                id,
                result: {
                  content: [{ type: 'text', text: JSON.stringify(data, null, 2) }]
                }
              }),
              { headers: { 'Content-Type': 'application/json' } }
            );
          }

          if (toolName === 'lookup_medicine') {
            const data = await queryMedicines(db, toolArgs);
            return new Response(
              JSON.stringify({
                jsonrpc: '2.0',
                id,
                result: {
                  content: [{ type: 'text', text: JSON.stringify(data, null, 2) }]
                }
              }),
              { headers: { 'Content-Type': 'application/json' } }
            );
          }

          if (toolName === 'calculate_income_tax') {
            const data = calculateBangladeshIncomeTax(toolArgs);
            return new Response(
              JSON.stringify({
                jsonrpc: '2.0',
                id,
                result: {
                  content: [{ type: 'text', text: JSON.stringify(data, null, 2) }]
                }
              }),
              { headers: { 'Content-Type': 'application/json' } }
            );
          }

          if (toolName === 'calculate_import_duty') {
            const data = calculateBangladeshImportDuty(toolArgs);
            return new Response(
              JSON.stringify({
                jsonrpc: '2.0',
                id,
                result: {
                  content: [{ type: 'text', text: JSON.stringify(data, null, 2) }]
                }
              }),
              { headers: { 'Content-Type': 'application/json' } }
            );
          }

          if (toolName === 'estimate_land_registration') {
            const data = estimateLandRegistrationFees(toolArgs);
            return new Response(
              JSON.stringify({
                jsonrpc: '2.0',
                id,
                result: {
                  content: [{ type: 'text', text: JSON.stringify(data, null, 2) }]
                }
              }),
              { headers: { 'Content-Type': 'application/json' } }
            );
          }

          if (toolName === 'calculate_vehicle_tax') {
            const data = calculateBangladeshVehicleTax(toolArgs);
            return new Response(
              JSON.stringify({
                jsonrpc: '2.0',
                id,
                result: {
                  content: [{ type: 'text', text: JSON.stringify(data, null, 2) }]
                }
              }),
              { headers: { 'Content-Type': 'application/json' } }
            );
          }

          if (toolName === 'estimate_incorporation_fees') {
            const data = estimateIncorporationFees(toolArgs);
            return new Response(
              JSON.stringify({
                jsonrpc: '2.0',
                id,
                result: {
                  content: [{ type: 'text', text: JSON.stringify(data, null, 2) }]
                }
              }),
              { headers: { 'Content-Type': 'application/json' } }
            );
          }

          if (toolName === 'get_exam_statistics') {
            const data = queryExamStatistics(toolArgs);
            return new Response(
              JSON.stringify({
                jsonrpc: '2.0',
                id,
                result: {
                  content: [{ type: 'text', text: JSON.stringify(data, null, 2) }]
                }
              }),
              { headers: { 'Content-Type': 'application/json' } }
            );
          }

          return new Response(
            JSON.stringify({
              jsonrpc: '2.0',
              id,
              error: { code: -32601, message: `Tool not found: ${toolName}` }
            }),
            { status: 404, headers: { 'Content-Type': 'application/json' } }
          );
        } catch (err: any) {
          return new Response(
            JSON.stringify({
              jsonrpc: '2.0',
              id,
              error: { code: -32603, message: err.message || 'Internal error' }
            }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
          );
        }
      }

      return new Response(
        JSON.stringify({ jsonrpc: '2.0', id, error: { code: -32601, message: `Method not found: ${method}` } }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response('Not Found', { status: 404 });
  }
};
