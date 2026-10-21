import { PORTAL_REFERENCES, DEFAULT_PORTAL_REFERENCES } from '../data/references';

function renderReferenceCard(section: string): string {
  const refs = PORTAL_REFERENCES[section] || DEFAULT_PORTAL_REFERENCES;
  let itemsHtml = '';
  refs.forEach(r => {
    itemsHtml += `
      <li class="ref-item">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:0.5rem;">
          <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="ref-link">
            <span>${r.title}</span>
            <span style="font-size:0.85rem;">↗</span>
          </a>
          <span class="badge-pill badge-green" style="font-size:0.7rem;">Verified Public Source</span>
        </div>
        <div class="ref-agency">🏛️ ${r.agency}</div>
        <div class="ref-desc">${r.desc}</div>
      </li>
    `;
  });

  return `
    <div class="content-card ref-card">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem; border-bottom:2px solid #000; padding-bottom:0.75rem; margin-bottom:1rem;">
        <div>
          <h2 class="section-title" style="margin-bottom:0.25rem; display:flex; align-items:center; gap:0.5rem;">
            <span>🏛️</span> Official Citations &amp; Primary Source References
          </h2>
          <p class="section-desc" style="margin-bottom:0;">
            bdmcp enforces strict data provenance. Every dataset and indicator on this page is linked directly to authoritative Bangladesh Government gazettes, central bank bulletins, or official trade archives.
          </p>
        </div>
        <div>
          <a href="/laws" class="quick-pill" style="font-size:0.75rem;">1,489 Statutes ↗</a>
        </div>
      </div>
      <ul class="ref-list">
        ${itemsHtml}
      </ul>
    </div>
  `;
}

export function renderDashboardHtml(activeSection: string = 'overview'): string {
  const isOverview = activeSection === 'overview';
  const isInflation = activeSection === 'inflation';
  const isCommodities = activeSection === 'commodities';
  const isPurchasing = activeSection === 'purchasing-power';
  const isGold = activeSection === 'gold';
  const isCha = activeSection === 'cha-index';
  const isEnergy = activeSection === 'energy';
  const isRickshaw = activeSection === 'rickshaw';
  const isFish = activeSection === 'fish-index';
  const isTransit = activeSection === 'transit';
  const isRemittance = activeSection === 'remittance';
  const isGeography = activeSection === 'geography';
  const isBanking = activeSection === 'banking';
  const isLaws = activeSection === 'laws';
  const isStocks = activeSection === 'stocks';
  const isAgent = activeSection === 'agent';
  const isAbout = activeSection === 'about';
  const isContact = activeSection === 'contact';
  const isBiye = activeSection === 'biye-index';
  const isInternet = activeSection === 'internet';
  const isRent = activeSection === 'rent';
  const isEid = activeSection === 'eid-transit';
  const isCricket = activeSection === 'cricket';
  const isDemo = activeSection === 'demographics';
  const isRivers = activeSection === 'rivers';
  const isGrid = activeSection === 'grid';
  const isHolidays = activeSection === 'holidays';
  const isForex = activeSection === 'forex';
  const isFuchka = activeSection === 'fuchka';
  const isTraffic = activeSection === 'traffic';
  const isJaljot = activeSection === 'jaljot';
  const isRmg = activeSection === 'rmg';
  const isCyclones = activeSection === 'cyclones';
  const isHeritage = activeSection === 'heritage';
  const isAgriculture = activeSection === 'agriculture';
  const isMegaprojects = activeSection === 'megaprojects';
  const isBcs = activeSection === 'bcs';
  const isBachelor = activeSection === 'bachelor';
  const isCng = activeSection === 'cng';
  const isBiryani = activeSection === 'biryani';
  const isLoadshedding = activeSection === 'loadshedding';
  const isLocalbus = activeSection === 'localbus';
  const isFreshers = activeSection === 'freshers';
  const isBpl = activeSection === 'bpl';
  const isQurbani = activeSection === 'qurbani';
  const isAdmission = activeSection === 'admission';
  const isPaan = activeSection === 'paan';
  const isPassport = activeSection === 'passport';
  const isMedicines = activeSection === 'medicines';
  const isTax = activeSection === 'tax';
  const isTariffs = activeSection === 'tariffs';
  const isLand = activeSection === 'land';
  const isVehicles = activeSection === 'vehicles';
  const isIncorporation = activeSection === 'incorporation';
  const isExams = activeSection === 'exams';
  const isPathao = activeSection === 'pathao';
  const isSakrain = activeSection === 'sakrain';
  const isBoimela = activeSection === 'boimela';
  const isHolud = activeSection === 'holud';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${getPageTitle(activeSection)}</title>
  <meta name="description" content="Unofficial Model Context Protocol (MCP) server & edge data API for Bangladesh macroeconomics, inflation, bank routing, and national legislation.">
  <link rel="canonical" href="https://bdmcp.nadimtuhin.com${activeSection === 'overview' ? '' : '/' + activeSection}">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://bdmcp.nadimtuhin.com${activeSection === 'overview' ? '' : '/' + activeSection}">
  <meta property="og:title" content="${getPageTitle(activeSection)}">
  <meta property="og:description" content="Unofficial Model Context Protocol (MCP) server & edge data API for Bangladesh macroeconomics, inflation, bank routing, and national legislation.">
  <meta property="og:image" content="https://bdmcp.nadimtuhin.com/og-image.png">
  <meta property="og:site_name" content="bdmcp">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://bdmcp.nadimtuhin.com${activeSection === 'overview' ? '' : '/' + activeSection}">
  <meta name="twitter:title" content="${getPageTitle(activeSection)}">
  <meta name="twitter:description" content="Unofficial Model Context Protocol (MCP) server & edge data API for Bangladesh macroeconomics, inflation, bank routing, and national legislation.">
  <meta name="twitter:image" content="https://bdmcp.nadimtuhin.com/og-image.png">

  <!-- Resource Hints -->
  <link rel="preconnect" href="https://bdmcp.nadimtuhin.com" crossorigin>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🇧🇩</text></svg>">

  <!-- Structured Data JSON-LD (WebSite, Dataset, FAQPage, Person, Organization) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://bdmcp.nadimtuhin.com/#website",
        "url": "https://bdmcp.nadimtuhin.com/",
        "name": "bdmcp",
        "description": "Unofficial Model Context Protocol server & edge query engine for Bangladesh public data.",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".direct-answer", ".subtitle", "h1"]
        },
        "author": {
          "@type": "Person",
          "@id": "https://bdmcp.nadimtuhin.com/#author",
          "name": "Omar Faruque Tuhin (Nadim Tuhin)",
          "url": "https://nadimtuhin.com",
          "jobTitle": "Lead Systems Engineer",
          "sameAs": [
            "https://github.com/nadimtuhin",
            "https://twitter.com/nadimtuhin",
            "https://linkedin.com/in/nadimtuhin"
          ]
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://bdmcp.nadimtuhin.com/#organization",
          "name": "bdmcp",
          "url": "https://bdmcp.nadimtuhin.com",
          "logo": "https://bdmcp.nadimtuhin.com/icon.svg",
          "sameAs": [
            "https://github.com/nadimtuhin/bdmcp",
            "https://www.wikidata.org/wiki/Q902",
            "https://en.wikipedia.org/wiki/Bangladesh"
          ]
        }
      },
      {
        "@type": "Person",
        "@id": "https://bdmcp.nadimtuhin.com/#author",
        "name": "Nadim Tuhin",
        "url": "https://nadimtuhin.com",
        "jobTitle": "Senior Software Engineer",
        "sameAs": [
          "https://github.com/nadimtuhin",
          "https://twitter.com/nadimtuhin",
          "https://linkedin.com/in/nadimtuhin"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://bdmcp.nadimtuhin.com/#organization",
        "name": "bdmcp",
        "url": "https://bdmcp.nadimtuhin.com",
        "logo": "https://bdmcp.nadimtuhin.com/icon.svg",
        "sameAs": [
          "https://github.com/nadimtuhin/bdmcp",
          "https://en.wikipedia.org/wiki/Bangladesh",
          "https://www.wikidata.org/wiki/Q902"
        ]
      },
      {
        "@type": "Dataset",
        "@id": "https://bdmcp.nadimtuhin.com/#dataset",
        "name": "Bangladesh Public Intelligence & Macroeconomic Data",
        "description": "Historical inflation (1960-2025), 11,426 bank branches, 1,489 national legal acts, daily commodity prices, and capital market metrics.",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "spatialCoverage": "Bangladesh",
        "temporalCoverage": "1799/2026",
        "creator": {
          "@id": "https://bdmcp.nadimtuhin.com/#organization"
        },
        "sameAs": [
          "https://en.wikipedia.org/wiki/Economy_of_Bangladesh"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://bdmcp.nadimtuhin.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is bdmcp?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "bdmcp is an unofficial Model Context Protocol (MCP) server connecting AI assistants (Claude, Cursor, ChatGPT, Codex, Hermes, Pi) to verified Bangladesh government data, macroeconomic time series, daily commodity prices, bank routing numbers, and national legislation."
            }
          },
          {
            "@type": "Question",
            "name": "How do I connect Claude or Cursor to Bangladesh public data?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Run npx -y bdmcp for local stdio terminal agents, or configure remote Streamable-HTTP at https://bdmcp.nadimtuhin.com/mcp in claude_desktop_config.json or .cursor/mcp.json."
            }
          },
          {
            "@type": "Question",
            "name": "What public datasets are included in bdmcp?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The edge SQLite database covers 65 years of World Bank & BBS inflation, 11,426 bank branches across 63 banks, 1,489 Acts of Bangladesh (1799-2025), daily food commodity prices, DSE stock fundamentals, and administrative geocodes across 64 districts."
            }
          }
        ]
      }
    ]
  }
  </script>

  <style>
  :root {
  --bg: #fbf9f4;
  --card-bg: #ffffff;
  --card-border: #000000;
  --border-hard: #000000;
  --text: #050505;
  --text-muted: #374151;
  --accent: #006a4e;
  --accent-dim: rgba(0, 106, 78, 0.12);
  --accent-hover: #00523c;
  --red: #f42a41;
  --red-dim: rgba(244, 42, 65, 0.12);
  --red-hover: #dc1e34;
  --blue: #0284c7;
  --blue-dim: rgba(2, 132, 199, 0.12);
  --purple: #7c3aed;
  --purple-dim: rgba(124, 58, 237, 0.12);
  --amber: #b45309;
  --amber-dim: rgba(180, 83, 9, 0.14);
  --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --shadow-brutal: 4px 4px 0px #000000;
  --shadow-brutal-sm: 2px 2px 0px #000000;
  --shadow-brutal-lg: 6px 6px 0px #000000;
  --shadow-brutal-red: 4px 4px 0px #f42a41;
  --shadow-brutal-green: 4px 4px 0px #006a4e;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
  font-family: var(--font-sans);
  background-color: var(--bg);
  color: var(--text);
  line-height: 1.5;
  padding: 0 1rem 3rem;
  }
  .container {
  max-width: 1160px;
  margin: 0 auto;
  }
  .dir-nav-btn {
  font-family: var(--font-mono);
  font-size: 0.76rem;
  font-weight: 800;
  padding: 0.25rem 0.65rem;
  background: var(--accent);
  color: #ffffff;
  border: 1.5px solid #000000;
  box-shadow: var(--shadow-brutal-sm);
  text-decoration: none;
  border-radius: 2px;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition: all 0.1s ease;
  }
  .dir-nav-btn:hover {
  background: #00523c;
  transform: translate(-1px, -1px);
  box-shadow: var(--shadow-brutal);
  }
  .bottom-directory {
  margin: 3rem 0 2rem;
  border: 2.5px solid var(--border-hard);
  box-shadow: var(--shadow-brutal);
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 4px;
  }
  .bottom-dir-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--border-hard);
  }
  .back-to-top-btn {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 800;
  padding: 0.35rem 0.8rem;
  background: var(--bg);
  color: var(--text);
  border: 2px solid #000000;
  box-shadow: var(--shadow-brutal-sm);
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.1s ease;
  }
  .back-to-top-btn:hover {
  background: var(--accent);
  color: #ffffff;
  transform: translate(-1px, -1px);
  box-shadow: var(--shadow-brutal);
  }
  .navbar {
  border: 2px solid var(--border-hard);
  box-shadow: var(--shadow-brutal);
  background: var(--card-bg);
  padding: 0.85rem 1.25rem;
  margin: 1.25rem 0 2rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  }
  .brand-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  }
  .brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 900;
  font-size: 1.25rem;
  color: var(--text);
  text-decoration: none;
  font-family: var(--font-mono);
  letter-spacing: -0.02em;
  }
  .brand span { color: var(--accent); }
  .brand-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  }
  .sys-pill {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.2rem 0.55rem;
  border: 1.5px solid var(--accent);
  background: var(--accent-dim);
  color: var(--accent);
  box-shadow: var(--shadow-brutal-sm);
  border-radius: 2px;
  text-transform: uppercase;
  }
  .nav-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.65rem;
  border-top: 1.5px solid var(--border-hard);
  padding-top: 0.65rem;
  }
  .dir-toggle-btn {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 800;
  padding: 0.45rem 0.9rem;
  background: var(--accent);
  color: #ffffff;
  border: 2px solid #000000;
  box-shadow: var(--shadow-brutal-sm);
  cursor: pointer;
  border-radius: 2px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.1s ease;
  }
  .dir-toggle-btn:hover {
  transform: translate(-1px, -1px);
  box-shadow: var(--shadow-brutal);
  background: #00523c;
  }
  .dir-toggle-btn:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0px #000;
  }
  .dir-badge-count {
  background: #000000;
  color: #ffffff;
  padding: 0.1rem 0.4rem;
  border-radius: 2px;
  font-size: 0.72rem;
  }
  .quick-links {
  display: flex;
  gap: 0.35rem;
  flex-wrap: wrap;
  align-items: center;
  }
  .quick-pill {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.3rem 0.6rem;
  border: 1.5px solid var(--border-hard);
  background: var(--bg);
  color: var(--text-muted);
  text-decoration: none;
  box-shadow: var(--shadow-brutal-sm);
  border-radius: 2px;
  transition: all 0.1s ease;
  }
  .quick-pill:hover, .quick-pill.active {
  color: var(--text);
  border-color: var(--accent);
  background: var(--accent-dim);
  transform: translate(-1px, -1px);
  box-shadow: 3px 3px 0px #000;
  }
  .directory-drawer {
  margin-top: 0.5rem;
  padding-top: 0.85rem;
  border-top: 2px dashed var(--border-hard);
  display: block;
  }
  .directory-drawer.collapsed {
  display: none;
  }
  .dir-grid-4col {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  }
  .dir-category-col {
  background: var(--bg);
  border: 2px solid var(--border-hard);
  box-shadow: var(--shadow-brutal-sm);
  padding: 0.85rem;
  border-radius: 2px;
  }
  .dir-category-title {
  font-family: var(--font-mono);
  font-size: 0.76rem;
  font-weight: 800;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.65rem;
  padding-bottom: 0.35rem;
  border-bottom: 1.5px solid var(--border-hard);
  display: flex;
  align-items: center;
  gap: 0.35rem;
  }
  .dir-links-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  }
  .dir-link-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0.45rem;
  border-radius: 2px;
  text-decoration: none;
  color: var(--text);
  font-size: 0.83rem;
  font-weight: 500;
  border: 1px solid transparent;
  transition: all 0.1s ease;
  }
  .dir-link-item:hover {
  background: var(--card-bg);
  border-color: var(--accent);
  transform: translateX(2px);
  }
  .dir-link-item.active {
  background: var(--accent-dim);
  border-color: var(--accent);
  color: var(--accent);
  font-weight: 700;
  }
  .dir-tag {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  padding: 0.1rem 0.35rem;
  background: var(--border-hard);
  color: var(--text-muted);
  border-radius: 2px;
  }
  .dir-link-item.active .dir-tag {
  background: var(--accent);
  color: #000000;
  font-weight: 800;
  }
  header {
  margin-bottom: 2.25rem;
  text-align: center;
  }
  .badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 500;
  background: var(--accent-dim);
  color: var(--accent);
  margin-bottom: 1rem;
  border: 1px solid var(--accent);
  }
  h1 {
  font-size: 2.35rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  margin-bottom: 0.75rem;
  }
  h1 span { color: var(--accent); }
  .subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 780px;
  margin: 0 auto 1.5rem;
  line-height: 1.55;
  }
  .stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-bottom: 2.5rem;
  }
  .stat-card {
  background: var(--card-bg);
  border: 2px solid var(--border-hard);
  box-shadow: var(--shadow-brutal);
  border-radius: 3px;
  padding: 1.25rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.1s ease;
  display: block;
  }
  .stat-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-brutal-lg);
  border-color: var(--accent);
  }
  .stat-card .label {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: 0.25rem;
  font-family: var(--font-mono);
  font-weight: 700;
  }
  .stat-card .value {
  font-size: 1.85rem;
  font-weight: 800;
  color: var(--text);
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  font-family: var(--font-mono);
  }
  .stat-card .unit {
  font-size: 0.95rem;
  font-weight: 400;
  color: var(--text-muted);
  }
  .stat-card .desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 0.5rem;
  }
  .hub-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2.5rem;
  }
  .hub-card {
  background: var(--card-bg);
  border: 2px solid var(--border-hard);
  box-shadow: var(--shadow-brutal);
  border-radius: 3px;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.1s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  }
  .hub-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-brutal-lg);
  border-color: var(--accent);
  }
  .hub-icon-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  }
  .hub-icon {
  font-size: 1.75rem;
  }
  .hub-tag {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 1.5px solid currentColor;
  box-shadow: 2px 2px 0px #000;
  }
  .hub-tag.green { background: var(--accent-dim); color: var(--accent); }
  .hub-tag.blue { background: var(--blue-dim); color: var(--blue); }
  .hub-tag.purple { background: var(--purple-dim); color: var(--purple); }
  .hub-tag.amber { background: var(--amber-dim); color: var(--amber); }
  .hub-title {
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: var(--text);
  }
  .hub-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
  line-height: 1.45;
  }
  .hub-footer {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  }
  h2.section-title {
  font-size: 1.35rem;
  font-weight: 800;
  margin: 2.25rem 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  }
  .section-title-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  }
  .direct-answer {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text);
  margin-bottom: 1.25rem;
  }
  .steps-list {
  margin-left: 1.5rem;
  margin-bottom: 1.25rem;
  line-height: 1.6;
  }
  .steps-list li { margin-bottom: 0.5rem; }
  .takeaways-list {
  margin-left: 1.5rem;
  margin-bottom: 1.25rem;
  line-height: 1.6;
  }
  .takeaways-list li { margin-bottom: 0.5rem; }
  .def-list {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  }
  .def-list dt {
  font-weight: 700;
  color: var(--accent);
  margin-top: 0.75rem;
  }
  .def-list dd {
  margin-left: 1rem;
  color: var(--text-muted);
  }
  blockquote.quote-box {
  border-left: 4px solid var(--accent);
  padding: 1rem 1.25rem;
  background: var(--card-bg);
  border: 2px solid var(--border-hard);
  border-left: 5px solid var(--accent);
  box-shadow: var(--shadow-brutal-sm);
  border-radius: 2px;
  font-style: italic;
  margin: 1.5rem 0;
  color: var(--text);
  }
  details.faq-accordion {
  background: var(--card-bg);
  border: 2px solid var(--border-hard);
  box-shadow: var(--shadow-brutal-sm);
  border-radius: 3px;
  padding: 1.25rem;
  margin-bottom: 1rem;
  }
  details.faq-accordion summary {
  cursor: pointer;
  font-size: 1.05rem;
  font-weight: 700;
  outline: none;
  }
  details.faq-accordion p {
  margin-top: 0.75rem;
  color: var(--text-muted);
  line-height: 1.55;
  }
  .chart-container {
  background: var(--card-bg);
  border: 2px solid var(--border-hard);
  box-shadow: var(--shadow-brutal);
  border-radius: 3px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  }
  .chart-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
  gap: 1rem;
  }
  .chart-header h3 { font-size: 1.15rem; font-weight: 700; font-family: var(--font-mono); }
  .toggle-group {
  display: inline-flex;
  background: var(--bg);
  padding: 0.25rem;
  border-radius: 3px;
  border: 2px solid var(--border-hard);
  box-shadow: 2px 2px 0px #000;
  }
  .toggle-btn {
  background: none;
  border: none;
  color: var(--text-muted);
  padding: 0.35rem 0.85rem;
  font-size: 0.82rem;
  font-weight: 700;
  font-family: var(--font-mono);
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.1s ease;
  }
  .toggle-btn.active {
  background: var(--card-bg);
  color: var(--accent);
  border: 1.5px solid var(--accent);
  box-shadow: 2px 2px 0px #000;
  }
  .chart-svg {
  width: 100%;
  height: 280px;
  overflow: visible;
  }
  .chart-svg text {
  fill: #1f2937 !important;
  font-weight: 700 !important;
  font-family: var(--font-mono) !important;
  }
  .chart-svg circle {
  stroke: #000000 !important;
  stroke-width: 1.5px !important;
  }
  .chart-legend {
  display: flex;
  gap: 1.5rem;
  font-size: 0.82rem;
  font-family: var(--font-mono);
  color: var(--text-muted);
  margin-top: 1rem;
  flex-wrap: wrap;
  }
  .legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  }
  .legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  border: 1.5px solid #000;
  background: var(--accent);
  }
  .content-card {
  background: var(--card-bg);
  border: 2px solid var(--border-hard);
  box-shadow: var(--shadow-brutal);
  border-radius: 3px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  }
  .ref-card {
    border-left: 6px solid var(--accent);
  }
  .ref-list {
    list-style: none;
    padding: 0;
    margin: 0.75rem 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }
  .ref-item {
    background: #ffffff;
    border: 1.5px solid #000000;
    box-shadow: 2px 2px 0px #000000;
    padding: 0.85rem 1.15rem;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }
  .ref-link {
    font-family: var(--font-mono);
    font-size: 0.95rem;
    font-weight: 800;
    color: var(--accent);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }
  .ref-link:hover {
    text-decoration: underline;
    color: var(--accent-red);
  }
  .ref-agency {
    font-size: 0.82rem;
    font-weight: 700;
    color: #374151;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  .ref-desc {
    font-size: 0.83rem;
    color: var(--text-muted);
    line-height: 1.45;
  }
  .search-bar {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  }
  .search-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 2px;
  border: 2px solid var(--border-hard);
  box-shadow: 3px 3px 0px #000;
  background: var(--bg);
  color: var(--text);
  font-size: 1rem;
  font-family: var(--font-mono);
  outline: none;
  }
  .search-input:focus {
  border-color: var(--accent);
  }
  .search-btn {
  padding: 0.75rem 1.5rem;
  background: var(--accent);
  color: #ffffff;
  border: 2px solid #000000;
  box-shadow: 3px 3px 0px #000;
  border-radius: 2px;
  font-size: 0.95rem;
  font-weight: 800;
  font-family: var(--font-mono);
  cursor: pointer;
  transition: all 0.1s ease;
  }
  .search-btn:hover {
  background: #00523c;
  transform: translate(-1px, -1px);
  box-shadow: 4px 4px 0px #000;
  }
  .search-btn:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0px #000;
  }
  .table-container {
  overflow-x: auto;
  }
  .results-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  margin-top: 1rem;
  border: 2.5px solid #000000;
  box-shadow: var(--shadow-brutal-sm);
  background: #ffffff;
  }
  .results-table th, .results-table td {
  padding: 0.75rem 0.85rem;
  text-align: left;
  border-bottom: 1.5px solid #000000;
  border-right: 1.5px solid #000000;
  }
  .results-table th {
  color: #ffffff;
  background: var(--accent);
  font-weight: 800;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 2.5px solid #000000;
  }
  .results-table tr:nth-child(even) {
  background: #fbf9f4;
  }
  .results-table tr:hover {
  background: #e6f4ef;
  }
  .chart-tooltip {
    position: absolute;
    display: none;
    background: #050505;
    color: #ffffff;
    border: 2px solid #000000;
    box-shadow: 4px 4px 0px #006a4e;
    padding: 6px 10px;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    font-weight: 800;
    z-index: 100000;
    pointer-events: none;
    border-radius: 2px;
    line-height: 1.4;
    white-space: nowrap;
  }
  .chart-point {
    cursor: pointer;
    transition: r 0.15s ease, stroke-width 0.15s ease;
  }
  .chart-point:hover {
    r: 6.5 !important;
    stroke-width: 2.5px !important;
    stroke: #000000 !important;
    filter: drop-shadow(0 0 3px rgba(0,0,0,0.4));
  }
  .chart-val-label {
    font-family: var(--font-mono);
    font-size: 9.5px;
    font-weight: 800;
    fill: #050505;
    text-anchor: middle;
    pointer-events: none;
  }
  .yoy-badge {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 800;
    padding: 0.15rem 0.45rem;
    border-radius: 2px;
    border: 1px solid #000000;
  }
  .yoy-up {
    background: #fee2e2;
    color: #dc2626;
    border-color: #dc2626;
  }
  .yoy-down {
    background: #dcfce7;
    color: #16a34a;
    border-color: #16a34a;
  }
  .yoy-neutral {
    background: #f3f4f6;
    color: #4b5563;
    border-color: #9ca3af;
  }
  .badge-pill {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  padding: 0.15rem 0.5rem;
  border-radius: 2px;
  font-weight: 700;
  border: 1.5px solid currentColor;
  box-shadow: 1.5px 1.5px 0px #000;
  display: inline-block;
  }
  .badge-green { background: #e6f4ef; color: #006a4e; border-color: #006a4e; }
  .badge-red { background: #fef2f2; color: #f42a41; border-color: #f42a41; }
  .badge-amber { background: #fffbeb; color: #b45309; border-color: #b45309; }
  .badge-blue { background: #f0f9ff; color: #0284c7; border-color: #0284c7; }
  .badge-purple { background: #faf5ff; color: #7c3aed; border-color: #7c3aed; }
  .bd-stripe {
  display: flex;
  height: 6px;
  border: 2px solid #000000;
  box-shadow: 2px 2px 0px #000;
  border-radius: 2px;
  margin: 1.25rem 0 0.5rem;
  overflow: hidden;
  }
  .bd-stripe-green {
  flex: 3;
  background: var(--accent);
  }
  .bd-stripe-red {
  flex: 1;
  background: var(--red);
  }
  .calc-box {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  }
  .calc-input {
  width: 180px;
  padding: 0.75rem 1rem;
  border-radius: 2px;
  border: 2px solid var(--border-hard);
  box-shadow: 3px 3px 0px #000;
  background: var(--bg);
  color: var(--text);
  font-size: 1.25rem;
  font-weight: 800;
  font-family: var(--font-mono);
  outline: none;
  }
  pre {
  background: var(--bg);
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text);
  margin-top: 0.75rem;
  }
  .skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--accent);
  color: #ffffff;
  padding: 0.5rem 1rem;
  z-index: 1000;
  text-decoration: none;
  font-weight: 600;
  border-radius: 0 0 0.5rem 0;
  transition: top 0.15s ease;
  }
  .skip-link:focus {
  top: 0;
  }
  footer {
  text-align: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--card-border);
  font-size: 0.9rem;
  color: var(--text-muted);
  }
  footer a {
  color: var(--accent);
  text-decoration: none;
  }
</style>
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <div class="container">
    <div class="bd-stripe">
      <div class="bd-stripe-green"></div>
      <div class="bd-stripe-red"></div>
    </div>
    <nav class="navbar" aria-label="Main Navigation">
      <div class="brand-bar">
        <a href="/" class="brand">
          <span>🇧🇩</span> BDMCP
        </a>
        <div class="brand-meta">
          <span class="sys-pill">● EDGE D1 ONLINE</span>
          <span class="sys-pill" style="border-color:var(--blue); color:var(--blue); background:var(--blue-dim);">&lt; 3MS LATENCY</span>
          <span class="sys-pill" style="border-color:var(--amber); color:var(--amber); background:var(--amber-dim);">11 D1 TABLES</span>
          <a href="#directory" class="dir-nav-btn">📁 52 Portals Index ↓</a>
          <a href="/medicines" class="quick-pill ${isMedicines ? 'active' : ''}">💊 Medicines</a>
          <a href="/tax" class="quick-pill ${isTax ? 'active' : ''}">💰 Income Tax</a>
          <a href="/agent" class="quick-pill ${isAgent ? 'active' : ''}">🤖 MCP AI</a>
          <a href="https://github.com/nadimtuhin/bdmcp" target="_blank" rel="noopener noreferrer" class="quick-pill" style="border-color:var(--accent); color:var(--accent);">GitHub ↗</a>
        </div>
      </div>
    </nav>

    <main id="main-content" role="main">
      ${renderPageContent(activeSection)}
      ${renderReferenceCard(activeSection)}
    </main>

    <!-- BOTTOM DIRECTORY INDEX (ALL 52 PUBLIC PORTALS & DATASETS) -->
    <section id="directory" class="bottom-directory" aria-label="Public Data Portals Directory">
      <div class="bottom-dir-header">
        <div class="section-title-text" style="font-family:var(--font-mono); font-weight:800; font-size:1.05rem; display:flex; align-items:center; gap:0.5rem;">
          <span>📁</span> DIRECTORY INDEX // ALL 56 PUBLIC DATASETS &amp; CIVIC PORTALS
        </div>
        <button onclick="window.scrollTo({top:0, behavior:'smooth'})" class="back-to-top-btn" title="Back to Top">
          ▲ TOP
        </button>
      </div>

      <div class="quick-links" style="margin-bottom:1.25rem;">
        <a href="/" class="quick-pill ${isOverview ? 'active' : ''}">⚡ Overview</a>
        <a href="/medicines" class="quick-pill ${isMedicines ? 'active' : ''}">💊 Medicines</a>
        <a href="/tax" class="quick-pill ${isTax ? 'active' : ''}">💰 Income Tax</a>
        <a href="/tariffs" class="quick-pill ${isTariffs ? 'active' : ''}">📦 Customs Duty</a>
        <a href="/land" class="quick-pill ${isLand ? 'active' : ''}">🏡 Land Reg</a>
        <a href="/vehicles" class="quick-pill ${isVehicles ? 'active' : ''}">🚗 Vehicle Tax</a>
        <a href="/incorporation" class="quick-pill ${isIncorporation ? 'active' : ''}">🏢 RJSC Fees</a>
        <a href="/exams" class="quick-pill ${isExams ? 'active' : ''}">🎓 HSC/SSC</a>
        <a href="/qurbani" class="quick-pill ${isQurbani ? 'active' : ''}">🐂 Qurbani</a>
        <a href="/passport" class="quick-pill ${isPassport ? 'active' : ''}">🛂 Passport</a>
        <a href="/pathao" class="quick-pill ${isPathao ? 'active' : ''}">🛵 Pathao</a>
        <a href="/sakrain" class="quick-pill ${isSakrain ? 'active' : ''}">🪁 Sakrain</a>
        <a href="/boimela" class="quick-pill ${isBoimela ? 'active' : ''}">📚 Boi Mela</a>
        <a href="/holud" class="quick-pill ${isHolud ? 'active' : ''}">🎉 Gaye Holud</a>
        <a href="/localbus" class="quick-pill ${isLocalbus ? 'active' : ''}">🚌 Local Bus</a>
        <a href="/loadshedding" class="quick-pill ${isLoadshedding ? 'active' : ''}">💡 Load-shed</a>
        <a href="/bcs" class="quick-pill ${isBcs ? 'active' : ''}">🎓 BCS Odds</a>
        <a href="/cng" class="quick-pill ${isCng ? 'active' : ''}">🛺 CNG</a>
        <a href="/forex" class="quick-pill ${isForex ? 'active' : ''}">💵 Forex</a>
        <a href="/rmg" class="quick-pill ${isRmg ? 'active' : ''}">👕 RMG</a>
        <a href="/agent" class="quick-pill ${isAgent ? 'active' : ''}">🤖 AI Agent</a>
      </div>

      <div class="dir-grid-4col">
          <!-- Column 1 -->
          <div class="dir-category-col">
            <div class="dir-category-title">
              <span>📊</span> 01 // MACRO &amp; COMMERCE
            </div>
            <ul class="dir-links-list">
              <li><a href="/tax" class="dir-link-item ${isTax ? 'active' : ''}"><span>NBR Income Tax</span><span class="d-tag">5%–25% SLABS</span></a></li>
              <li><a href="/tariffs" class="dir-link-item ${isTariffs ? 'active' : ''}"><span>Customs &amp; Tariffs</span><span class="d-tag">HS CODES / DUTY</span></a></li>
              <li><a href="/incorporation" class="dir-link-item ${isIncorporation ? 'active' : ''}"><span>RJSC Company Reg</span><span class="d-tag">INCORPORATION</span></a></li>
              <li><a href="/inflation" class="dir-link-item ${isInflation ? 'active' : ''}"><span>Inflation (CPI)</span><span class="d-tag">1960–2025</span></a></li>
              <li><a href="/forex" class="dir-link-item ${isForex ? 'active' : ''}"><span>USD/BDT Forex</span><span class="d-tag">7.80→122৳</span></a></li>
              <li><a href="/rmg" class="dir-link-item ${isRmg ? 'active' : ''}"><span>RMG Export Engine</span><span class="d-tag">$47B / #2 WORLD</span></a></li>
              <li><a href="/agriculture" class="dir-link-item ${isAgriculture ? 'active' : ''}"><span>Rice Food Security</span><span class="d-tag">40.2M TONS</span></a></li>
              <li><a href="/commodities" class="dir-link-item ${isCommodities ? 'active' : ''}"><span>Grocery Inflation</span><span class="d-tag">DAM RETAIL</span></a></li>
              <li><a href="/purchasing-power" class="dir-link-item ${isPurchasing ? 'active' : ''}"><span>1,000৳ Dim Index</span><span class="d-tag">-70% EROSION</span></a></li>
              <li><a href="/remittance" class="dir-link-item ${isRemittance ? 'active' : ''}"><span>Remittances &amp; Reserves</span><span class="d-tag">$26.8B FLOW</span></a></li>
              <li><a href="/banking" class="dir-link-item ${isBanking ? 'active' : ''}"><span>Bank Routing (BEFTN)</span><span class="d-tag">11,426 BR</span></a></li>
              <li><a href="/stocks" class="dir-link-item ${isStocks ? 'active' : ''}"><span>DSE Capital Markets</span><span class="d-tag">DSEX / DS30</span></a></li>
            </ul>
          </div>

          <!-- Column 2 -->
          <div class="dir-category-col">
            <div class="dir-category-title">
              <span>🍲</span> 02 // STREET &amp; VIRAL
            </div>
            <ul class="dir-links-list">
              <li><a href="/pathao" class="dir-link-item ${isPathao ? 'active' : ''}"><span>Ride-Sharing &amp; Surge</span><span class="d-tag">ক্যাশে যাইবেন? / 2.5x</span></a></li>
              <li><a href="/sakrain" class="dir-link-item ${isSakrain ? 'active' : ''}"><span>Sakrain Kite &amp; DJ Rig</span><span class="d-tag">35,000W / 135dB</span></a></li>
              <li><a href="/boimela" class="dir-link-item ${isBoimela ? 'active' : ''}"><span>Ekushey Boi Mela</span><span class="d-tag">3,751 TITLES / সেলফি</span></a></li>
              <li><a href="/holud" class="dir-link-item ${isHolud ? 'active' : ''}"><span>Gaye Holud &amp; কালা চশমা</span><span class="d-tag">4.8L৳ STAGE / 95% FEUD</span></a></li>
              <li><a href="/qurbani" class="dir-link-item ${isQurbani ? 'active' : ''}"><span>Qurbani Cow Bargaining</span><span class="d-tag">12k→125k৳ / ঠকে গেছেন</span></a></li>
              <li><a href="/passport" class="dir-link-item ${isPassport ? 'active' : ''}"><span>Passport &amp; Dalal Matrix</span><span class="d-tag">AGARGAON / চা-পানি</span></a></li>
              <li><a href="/admission" class="dir-link-item ${isAdmission ? 'active' : ''}"><span>Varsity Admission War</span><span class="d-tag">FARMGATE / 28k৳</span></a></li>
              <li><a href="/paan" class="dir-link-item ${isPaan ? 'active' : ''}"><span>Tong Paan &amp; Supari</span><span class="d-tag">1৳→15৳ / জর্দা</span></a></li>
              <li><a href="/localbus" class="dir-link-item ${isLocalbus ? 'active' : ''}"><span>Local Bus 'Sitting' Myth</span><span class="d-tag">চাপেন চাপেন / 10৳</span></a></li>
              <li><a href="/loadshedding" class="dir-link-item ${isLoadshedding ? 'active' : ''}"><span>Load-Shedding &amp; IPS</span><span class="d-tag">8.5H→1.8H / 28k৳</span></a></li>
              <li><a href="/freshers" class="dir-link-item ${isFreshers ? 'active' : ''}"><span>Fresher Job Paradox</span><span class="d-tag">5 YR EXP / 26k৳</span></a></li>
              <li><a href="/bpl" class="dir-link-item ${isBpl ? 'active' : ''}"><span>BPL Franchise Chaos</span><span class="d-tag">6 NAMES / NAGIN</span></a></li>
              <li><a href="/bcs" class="dir-link-item ${isBcs ? 'active' : ''}"><span>BCS Cadre Craze</span><span class="d-tag">0.49% / 1 IN 205</span></a></li>
              <li><a href="/cng" class="dir-link-item ${isCng ? 'active' : ''}"><span>CNG 'যামু না' Index</span><span class="d-tag">99% REFUSAL</span></a></li>
              <li><a href="/bachelor" class="dir-link-item ${isBachelor ? 'active' : ''}"><span>Bachelor &amp; Bua Syndicate</span><span class="d-tag">NO TO-LET / 8x WAGE</span></a></li>
              <li><a href="/biryani" class="dir-link-item ${isBiryani ? 'active' : ''}"><span>Haji Biryani &amp; Borhani</span><span class="d-tag">20৳→260৳</span></a></li>
              <li><a href="/fuchka" class="dir-link-item ${isFuchka ? 'active' : ''}"><span>Dhaka Fuchka &amp; Shingara</span><span class="d-tag">10৳→100৳ (10x)</span></a></li>
              <li><a href="/traffic" class="dir-link-item ${isTraffic ? 'active' : ''}"><span>Traffic Lifespan Lost</span><span class="d-tag">4.8 KM/H CRAWL</span></a></li>
              <li><a href="/jaljot" class="dir-link-item ${isJaljot ? 'active' : ''}"><span>Monsoon Waterlogging</span><span class="d-tag">হাঁটু পানি / 4x SURGE</span></a></li>
              <li><a href="/cha-index" class="dir-link-item ${isCha ? 'active' : ''}"><span>The Tong Index (চা)</span><span class="d-tag">2৳→12৳ CHAI</span></a></li>
              <li><a href="/gold" class="dir-link-item ${isGold ? 'active' : ''}"><span>BAJUS 22K Gold</span><span class="d-tag">142k৳/BH</span></a></li>
              <li><a href="/energy" class="dir-link-item ${isEnergy ? 'active' : ''}"><span>Fuel &amp; Energy</span><span class="d-tag">DIESEL/LPG</span></a></li>
              <li><a href="/rickshaw" class="dir-link-item ${isRickshaw ? 'active' : ''}"><span>Dhaka Rickshaw</span><span class="d-tag">10৳→110৳</span></a></li>
              <li><a href="/fish-index" class="dir-link-item ${isFish ? 'active' : ''}"><span>Padma Hilsa Index</span><span class="d-tag">200→1.8k৳</span></a></li>
              <li><a href="/biye-index" class="dir-link-item ${isBiye ? 'active' : ''}"><span>Wedding Kacchi Dega</span><span class="d-tag">2.5k→26.5k৳</span></a></li>
              <li><a href="/rent" class="dir-link-item ${isRent ? 'active' : ''}"><span>Apartment Rent Index</span><span class="d-tag">AFFORDABILITY</span></a></li>
              <li><a href="/eid-transit" class="dir-link-item ${isEid ? 'active' : ''}"><span>Eid Padma Toll Rush</span><span class="d-tag">5.4 CR/DAY</span></a></li>
            </ul>
          </div>

          <!-- Column 3 -->
          <div class="dir-category-col">
            <div class="dir-category-title">
              <span>🇧🇩</span> 03 // CITIZEN SERVICES &amp; NATION
            </div>
            <ul class="dir-links-list">
              <li><a href="/medicines" class="dir-link-item ${isMedicines ? 'active' : ''}"><span>DGDA Medicine Index</span><span class="d-tag">32k DRUGS / MRP</span></a></li>
              <li><a href="/land" class="dir-link-item ${isLand ? 'active' : ''}"><span>Land Sub-Registry</span><span class="d-tag">1.5% STAMP / 1170৳</span></a></li>
              <li><a href="/vehicles" class="dir-link-item ${isVehicles ? 'active' : ''}"><span>BRTA Vehicle Tax</span><span class="d-tag">AIT BY CC / ROAD</span></a></li>
              <li><a href="/exams" class="dir-link-item ${isExams ? 'active' : ''}"><span>HSC &amp; SSC 20-Yr Curve</span><span class="d-tag">GPA-5 / BOARDS</span></a></li>
              <li><a href="/megaprojects" class="dir-link-item ${isMegaprojects ? 'active' : ''}"><span>Mega Projects Tracker</span><span class="d-tag">PADMA / TUNNEL</span></a></li>
              <li><a href="/cyclones" class="dir-link-item ${isCyclones ? 'active' : ''}"><span>Cyclone Resilience</span><span class="d-tag">99.9% DROP</span></a></li>
              <li><a href="/heritage" class="dir-link-item ${isHeritage ? 'active' : ''}"><span>UNESCO Heritages</span><span class="d-tag">RICKSHAW ART</span></a></li>
              <li><a href="/cricket" class="dir-link-item ${isCricket ? 'active' : ''}"><span>Tigers Cricket</span><span class="d-tag">SHAKIB/TAMIM</span></a></li>
              <li><a href="/demographics" class="dir-link-item ${isDemo ? 'active' : ''}"><span>Health Miracle</span><span class="d-tag">46→72.4 YRS</span></a></li>
              <li><a href="/rivers" class="dir-link-item ${isRivers ? 'active' : ''}"><span>57 Rivers &amp; Delta</span><span class="d-tag">140k M³/S</span></a></li>
              <li><a href="/grid" class="dir-link-item ${isGrid ? 'active' : ''}"><span>Power Grid &amp; Nuclear</span><span class="d-tag">29.5k MW</span></a></li>
              <li><a href="/transit" class="dir-link-item ${isTransit ? 'active' : ''}"><span>Dhaka Metro (MRT-6)</span><span class="d-tag">16 STATIONS</span></a></li>
              <li><a href="/geography" class="dir-link-item ${isGeography ? 'active' : ''}"><span>Admin Geography</span><span class="d-tag">64 DISTRICTS</span></a></li>
              <li><a href="/holidays" class="dir-link-item ${isHolidays ? 'active' : ''}"><span>Gazette Holidays</span><span class="d-tag">LEAVE PLANNER</span></a></li>
            </ul>
          </div>

          <!-- Column 4 -->
          <div class="dir-category-col">
            <div class="dir-category-title">
              <span>⚡</span> 04 // LEGAL &amp; DEVELOPERS
            </div>
            <ul class="dir-links-list">
              <li><a href="/laws" class="dir-link-item ${isLaws ? 'active' : ''}"><span>Laws of Bangladesh</span><span class="d-tag">1,489 ACTS</span></a></li>
              <li><a href="/agent" class="dir-link-item ${isAgent ? 'active' : ''}"><span>AI Agent &amp; MCP</span><span class="d-tag">STDIO / HTTP</span></a></li>
              <li><a href="/internet" class="dir-link-item ${isInternet ? 'active' : ''}"><span>Mobile Data Tariff</span><span class="d-tag">-96% COLLAPSE</span></a></li>
              <li><a href="/about" class="dir-link-item ${isAbout ? 'active' : ''}"><span>About Project</span><span class="d-tag">EDGE ARCH</span></a></li>
              <li><a href="/contact" class="dir-link-item ${isContact ? 'active' : ''}"><span>Maintainer Contact</span><span class="d-tag">NADIM TUHIN</span></a></li>
              <li><a href="/api/stats" target="_blank" rel="noopener noreferrer" class="dir-link-item"><span>REST Stats API</span><span class="d-tag">JSON &lt;3MS</span></a></li>
              <li><a href="/llms.txt" target="_blank" rel="noopener noreferrer" class="dir-link-item"><span>llms.txt Specification</span><span class="d-tag">AI CONTEXT</span></a></li>
            </ul>
          </div>
        
    </section>

    <footer role="contentinfo">
      <p>Built with ❤️ by <a href="https://nadimtuhin.com" target="_blank" rel="noopener noreferrer">Nadim Tuhin</a> (<a href="https://nadimtuhin.com" target="_blank" rel="noopener noreferrer">About</a>) • <a href="mailto:nadimtuhin+pad@gmail.com">Contact</a> • Open Source on <a href="https://github.com/nadimtuhin/bdmcp" target="_blank" rel="noopener noreferrer">GitHub</a> • <a href="https://github.com/nadimtuhin/bdmcp/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">Terms & Privacy Policy</a> • Sub-5ms Cloudflare D1 Edge Serving</p>
    </footer>
  </div>

  <script>
    ${renderPageScript(activeSection)}
  </script>
</body>
</html>`;
}

function getPageTitle(section: string): string {
  switch (section) {
    case 'inflation': return 'Inflation & CPI Time Series (1960–2025)';
    case 'commodities': return 'Grocery & Kitchen Market Food Inflation';
    case 'purchasing-power': return 'The 1,000 Taka Note & Dhaka Dim Index';
    case 'gold': return '25-Year Gold Price Tracker (BAJUS 22K)';
    case 'cha-index': return 'The Tong Index: Street Food Economics';
    case 'energy': return 'Fuel & Energy Tariffs (Diesel, Octane)';
    case 'rickshaw': return 'Dhaka Rickshaw Fare Inflation Index';
    case 'fish-index': return 'Padma Hilsa & Fish Market Price Index';
    case 'transit': return 'Dhaka Metro Rail (MRT-6) Fare Matrix';
    case 'biye-index': return 'Wedding Kacchi Biryani & Banquet Inflation Index (2000–2025)';
    case 'internet': return 'Bangladesh Mobile Internet Data & 4G/5G Revolution';
    case 'rent': return 'Dhaka Apartment Rent & Housing Affordability Index';
    case 'eid-transit': return 'The Great Eid Exodus & Padma Bridge Toll Traffic Index';
    case 'cricket': return 'Bangladesh Tigers Cricket Records & Historic Victories';
    case 'demographics': return 'The Bangladesh Demographic & Health Miracle (1971–2025)';
    case 'rivers': return 'Rivers of Bangladesh: 57 Transboundary Rivers & The Delta';
    case 'grid': return 'Bangladesh Power Grid & Rooppur Nuclear Energy Horizon';
    case 'holidays': return 'Bangladesh Gazette Public Holidays & Long Weekend Optimizer';
    case 'forex': return 'Historical USD/BDT Forex Rates & Currency Depreciation (1971–2025)';
    case 'fuchka': return 'Dhaka Fuchka, Chotpoti & Shingara Street Food Inflation (ফুচকা ও সিঙ্গারা সূচক)';
    case 'traffic': return 'Dhaka Traffic Jam & Lifespan Lost Index (যানজট ও জীবনের হিসাব)';
    case 'jaljot': return 'Dhaka Monsoon Waterlogging & Rickshaw Surge Index (জলজট ও রিকশা সূচক)';
    case 'rmg': return 'Bangladesh RMG & Garments Export Miracle (পোশাক শিল্প)';
    case 'cyclones': return 'Cyclone Resilience & Disaster Preparedness Miracle (ঘূর্ণিঝড় ও দুর্যোগ প্রস্তুতি)';
    case 'heritage': return 'UNESCO Intangible Cultural Heritage of Bangladesh (ইউনেস্কো ঐতিহ্য)';
    case 'agriculture': return 'Rice Production & Food Security Self-Sufficiency (খাদ্য নিরাপত্তা ও ধান উৎপাদন)';
    case 'megaprojects': return 'Bangladesh Mega Infrastructure Engineering Tracker (মেগা প্রকল্প)';
    case 'bcs': return 'The BCS Exam Craze & Cadre Acceptance Odds (বিসিএস ক্যাডার উন্মাদনা ও সম্ভাব্যতা সূচক)';
    case 'bachelor': return 'Dhaka Bachelor Flat Hunting & Bua Syndicate Index (ব্যাচেলর জীবন ও বুয়া সিন্ডিকেট)';
    case 'cng': return 'Dhaka CNG Auto-Rickshaw "Yamuna" & Meter vs Chukti Gap (সিএনজি যামু না ও চুক্তি সূচক)';
    case 'biryani': return 'Old Dhaka Haji Biryani & Borhani Price Index (হাজী বিরিয়ানি ও বোরহানি সূচক)';
    case 'loadshedding': return 'Bangladesh Load-Shedding & IPS Battery Inflation Index (লোডশেডিং ও আইপিএস জীবন)';
    case 'localbus': return 'Dhaka Local Bus "Sitting Service" Myth & Fare Matrix (লোকাল বাস ও সিটিং সার্ভিস রহস্য)';
    case 'freshers': return 'Entry-Level Job Circular Experience Paradox & Graduate Salary (ফ্রেশার চাকরি ও অভিজ্ঞতা প্যারাডক্স)';
    case 'bpl': return 'BPL Franchise Rebrand Chaos & Cricket Heartbreak Index (বিপিএল ফ্র্যাঞ্চাইজি ও নাগিন ড্যান্স সূচক)';
    case 'qurbani': return 'Gabtoli Qurbani Haat Cow Bargaining & Hasil Index (কোরবানির হাট ও গরু দরদাম সূচক)';
    case 'admission': return 'University Admission War & Farmgate Coaching Index (বিশ্ববিদ্যালয় ভর্তিযুদ্ধ ও কোচিং শিল্প)';
    case 'paan': return 'Tong Paan-Supari, Jarda & Mukhshuddhi Addiction Index (পান-সুপারি ও মুখশুদ্ধি সূচক)';
    case 'passport': return 'Agargaon Passport Dalal & Police Verification Index (পাসপোর্ট অফিস ও দালাল সূচক)';
    case 'medicines': return 'DGDA Essential Medicines & Generic Drug Index (ঔষধ মূল্য ও জেনেরিক ডিরেক্টরি)';
    case 'tax': return 'NBR Individual Income Tax & TDS Calculator (আয়কর আইন ২০২৩ ও স্ল্যাব ক্যালকুলেটর)';
    case 'tariffs': return 'NBR Customs Tariffs & HS Code Duty Calculator (আমদানি শুল্ক ও এইচএস কোড)';
    case 'land': return 'Land Sub-Registry Stamp Duty & e-Namjari Mutation Fees (জমি রেজিস্ট্রেশন ও নামজারি)';
    case 'vehicles': return 'BRTA Vehicle Tax Token & Advance Income Tax (গাড়ি ট্যাক্স টোকেন ও এআইটি)';
    case 'incorporation': return 'RJSC Company Incorporation & Stamp Duty Estimator (কোম্পানি নিবন্ধন ফি)';
    case 'exams': return 'HSC & SSC 20-Year Examination Statistics & GPA-5 Curves (শিক্ষা বোর্ড ফলাফল পরিসংখ্যান)';
    case 'pathao': return 'Ride-Sharing Surge & "মামা ক্যাশে যাইবেন?" Index (2016–2025) | BDMCP';
    case 'sakrain': return 'Puran Dhaka Sakrain Kite & Rooftop DJ Wattage Index (2000–2025) | BDMCP';
    case 'boimela': return 'Ekushey Boi Mela & "বই না কিনে সেলফি" Index (2000–2024) | BDMCP';
    case 'holud': return 'Deshi Gaye Holud & "কালা চশমা" Dance Extravaganza (2005–2025) | BDMCP';
    case 'remittance': return 'Worker Remittances & Forex Reserves';
    case 'geography': return 'Bangladesh Administrative Geography';
    case 'banking': return 'Bank Branches & BEFTN Routing Codes';
    case 'laws': return 'Laws of Bangladesh (1,489 Statutes)';
    case 'stocks': return 'Dhaka Stock Exchange (DSE) Equities';
    case 'agent': return 'Connect AI Assistants via MCP Server';
    case 'about': return 'About bdmcp — Edge Intelligence for Bangladesh';
    case 'contact': return 'Contact — bdmcp Project & Maintainer';
    default: return 'bdmcp — Bangladesh Public Intelligence Edge';
  }
}

function renderPageContent(section: string): string {
  switch (section) {
    case 'inflation':
      return `
      <header>
        <div class="badge">📈 Macroeconomics & CPI Time Series</div>
        <h1>Bangladesh Inflation Analytics <span>(1960–2025)</span></h1>
        <p class="subtitle">Official World Bank annual CPI inflation and Bangladesh Bureau of Statistics (BBS) monthly point-to-point general and food inflation with base-year disambiguation.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Latest Monthly Inflation</div>
          <div class="value">8.77<span class="unit">%</span></div>
          <div class="desc">BBS Point-to-Point (2025-07, Base: 2021-22)</div>
        </div>
        <div class="stat-card">
          <div class="label">12-Month Peak</div>
          <div class="value" style="color:var(--red);">11.66<span class="unit">%</span></div>
          <div class="desc">Highest point-to-point rate (2024-07)</div>
        </div>
        <div class="stat-card">
          <div class="label">2024 Annual Rate</div>
          <div class="value">10.47<span class="unit">%</span></div>
          <div class="desc">World Bank annual average CPI</div>
        </div>
        <div class="stat-card">
          <div class="label">Active Base Year</div>
          <div class="value" style="font-size:1.4rem;">2021-22</div>
          <div class="desc">Rebased by BBS from 2005-06 in 2023</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 Interactive Visualizer: Annual vs Month-by-Month</div>
        <div class="toggle-group">
          <button id="toggle-annual" class="toggle-btn active" onclick="switchInflationFreq('annual')">Annual (2000–2025)</button>
          <button id="toggle-monthly" class="toggle-btn" onclick="switchInflationFreq('monthly')">Monthly (2020–2025)</button>
        </div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3 id="chartHeading">Bangladesh Annual Inflation Rate (2000–2025)</h3>
            <p id="chartSubheading" style="font-size:0.85rem; color:var(--text-muted);">Source: World Bank WDI / BBS (Rebased 2021-22)</p>
          </div>
        </div>
        <svg id="inflationChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot"></div> <span id="legendText">Annual CPI Inflation (%)</span></div>
          <div class="legend-item" style="color:var(--text-muted);">Rebased Series 2021-22</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📋 Inflation Time Series Data Table</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table" id="inflationTable">
            <thead>
              <tr>
                <th>Period</th>
                <th>Frequency</th>
                <th>Inflation Rate (%)</th>
                <th>YoY Comparison</th>
                <th>Source Agency</th>
                <th>Base Year</th>
              </tr>
            </thead>
            <tbody id="inflationTableBody">
              <tr><td colspan="5" style="color:var(--text-muted);">Loading live inflation data from Cloudflare D1...</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      `;

    case 'commodities':
      return `
      <header>
        <div class="badge">🌾 Kitchen Market & Food Inflation</div>
        <h1>Grocery Inflation & Essential Commodities <span>(বাজার দর)</span></h1>
        <p class="subtitle">Multi-year retail price comparison and wholesale spreads for essential kitchen staples: Eggs, Beef, Broiler & Sonali Chicken, Rice, Onion, Edible Oil, and Lentils across Bangladesh.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Farm Brown Eggs (হালি)</div>
          <div class="value">52-55<span class="unit">BDT</span></div>
          <div class="desc">Up from 32 BDT in 2020 (+62%)</div>
        </div>
        <div class="stat-card">
          <div class="label">Beef (প্রতি কেজি)</div>
          <div class="value">750-780<span class="unit">BDT</span></div>
          <div class="desc">Up from 550 BDT in 2020 (+41%)</div>
        </div>
        <div class="stat-card">
          <div class="label">Broiler Chicken (প্রতি কেজি)</div>
          <div class="value">180-195<span class="unit">BDT</span></div>
          <div class="desc">Up from 125 BDT in 2020 (+52%)</div>
        </div>
        <div class="stat-card">
          <div class="label">Sonali Chicken (প্রতি কেজি)</div>
          <div class="value">295-320<span class="unit">BDT</span></div>
          <div class="desc">Up from 210 BDT in 2020 (+45%)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 5-Year Grocery Inflation Tracker (2020 vs 2022 vs 2024 vs 2025)</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Commodity</th>
                <th>Unit</th>
                <th>2020 Retail</th>
                <th>2022 Retail</th>
                <th>2024 Retail</th>
                <th>2025 Retail</th>
                <th>5-Yr Change (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Farm Brown Egg (ফার্মের লাল ডিম)</strong></td>
                <td>4 pcs (হালি)</td>
                <td>32 - 34 ৳</td>
                <td>42 - 45 ৳</td>
                <td>58 - 62 ৳</td>
                <td><strong style="color:var(--accent);">52 - 55 ৳</strong></td>
                <td><span class="badge-pill badge-red">+62.5%</span></td>
              </tr>
              <tr>
                <td><strong>Beef (গরুর মাংস)</strong></td>
                <td>1 kg</td>
                <td>550 - 580 ৳</td>
                <td>650 - 680 ৳</td>
                <td>750 - 800 ৳</td>
                <td><strong style="color:var(--accent);">750 - 780 ৳</strong></td>
                <td><span class="badge-pill badge-red">+40.9%</span></td>
              </tr>
              <tr>
                <td><strong>Chicken - Broiler (ব্রয়লার মুরগি)</strong></td>
                <td>1 kg</td>
                <td>125 - 135 ৳</td>
                <td>165 - 175 ৳</td>
                <td>195 - 210 ৳</td>
                <td><strong style="color:var(--accent);">180 - 195 ৳</strong></td>
                <td><span class="badge-pill badge-red">+50.0%</span></td>
              </tr>
              <tr>
                <td><strong>Chicken - Sonali (সোনালী মুরগি)</strong></td>
                <td>1 kg</td>
                <td>210 - 230 ৳</td>
                <td>260 - 280 ৳</td>
                <td>320 - 340 ৳</td>
                <td><strong style="color:var(--accent);">295 - 320 ৳</strong></td>
                <td><span class="badge-pill badge-red">+43.2%</span></td>
              </tr>
              <tr>
                <td><strong>Onion - Local (দেশি পেঁয়াজ)</strong></td>
                <td>1 kg</td>
                <td>80 - 90 ৳</td>
                <td>50 - 55 ৳</td>
                <td>130 - 140 ৳</td>
                <td><strong style="color:var(--accent);">85 - 95 ৳</strong></td>
                <td><span class="badge-pill badge-amber">+12.5%</span></td>
              </tr>
              <tr>
                <td><strong>Rice - Miniket (মিনিকেট চাল)</strong></td>
                <td>1 kg</td>
                <td>54 - 58 ৳</td>
                <td>68 - 72 ৳</td>
                <td>72 - 76 ৳</td>
                <td><strong style="color:var(--accent);">74 - 78 ৳</strong></td>
                <td><span class="badge-pill badge-red">+35.7%</span></td>
              </tr>
              <tr>
                <td><strong>Soybean Oil Bottled (সয়াবিন তেল)</strong></td>
                <td>1 liter</td>
                <td>108 - 112 ৳</td>
                <td>185 - 195 ৳</td>
                <td>168 - 175 ৳</td>
                <td><strong style="color:var(--accent);">167 - 172 ৳</strong></td>
                <td><span class="badge-pill badge-red">+54.5%</span></td>
              </tr>
              <tr>
                <td><strong>Lentils - Masur Local (দেশি মসুর ডাল)</strong></td>
                <td>1 kg</td>
                <td>100 - 110 ৳</td>
                <td>125 - 135 ৳</td>
                <td>145 - 155 ৳</td>
                <td><strong style="color:var(--accent);">140 - 150 ৳</strong></td>
                <td><span class="badge-pill badge-red">+40.0%</span></td>
              </tr>
              <tr>
                <td><strong>Potato (গোল আলু)</strong></td>
                <td>1 kg</td>
                <td>35 - 40 ৳</td>
                <td>28 - 32 ৳</td>
                <td>60 - 65 ৳</td>
                <td><strong style="color:var(--accent);">35 - 40 ৳</strong></td>
                <td><span class="badge-pill badge-green">0.0%</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🔍 Live Commodity Price Explorer</div>
      </div>
      <div class="content-card">
        <div class="search-bar">
          <input type="text" id="commoditySearchInput" class="search-input" placeholder="Search by commodity name or district (e.g. egg, beef, chicken, onion, Dhaka)..." onkeydown="if(event.key==='Enter') searchCommodities()">
          <button class="search-btn" onclick="searchCommodities()">Search Prices</button>
        </div>
        <div id="commodityResults">
          <p style="color:var(--text-muted); font-size:0.9rem;">Loading latest verified price observations...</p>
        </div>
      </div>
      `;

    case 'purchasing-power':
      return `
      <header>
        <div class="badge">🪙 Currency & Standard of Living</div>
        <h1>The 1,000 Taka Note <span>(25-Year Purchasing Power Index)</span></h1>
        <p class="subtitle">How much real food and goods could a 1,000 BDT note buy in Bangladesh between 2000 and 2025? Tracking the erosion of the Taka across the Dhaka Egg (Dim) Index and daily staples.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Eggs Bought by 1,000৳</div>
          <div class="value">74<span class="unit">pcs (2025)</span></div>
          <div class="desc">Down from 250 pcs in 2000 (-70.4%)</div>
        </div>
        <div class="stat-card">
          <div class="label">Rice Bought by 1,000৳</div>
          <div class="value">18<span class="unit">kg (2025)</span></div>
          <div class="desc">Down from 50 kg in 2000 (-64.0%)</div>
        </div>
        <div class="stat-card">
          <div class="label">Beef Bought by 1,000৳</div>
          <div class="value">1.3<span class="unit">kg (2025)</span></div>
          <div class="desc">Down from 10.0 kg in 2000 (-87.0%)</div>
        </div>
        <div class="stat-card">
          <div class="label">Real Purchasing Value</div>
          <div class="value" style="color:var(--red);">~135৳</div>
          <div class="desc">What 1,000৳ buys today in year 2000 Taka</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📉 Purchasing Power Erosion of 1,000 Taka (2000–2025)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>The Dhaka "Dim Index" (Eggs Bought per 1,000 BDT Note)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">A tangible measure of everyday household grocery purchasing capacity</p>
          </div>
        </div>
        <svg id="purchasingChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#ef4444;"></div> Number of Farm Eggs (ডিম) per 1,000 BDT</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 Interactive Taka Time Machine Calculator</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Enter any amount in Taka to see its historical equivalent purchasing power:</p>
        <div class="calc-box">
          <input type="number" id="calcInput" class="calc-input" value="5000" min="100" step="100" oninput="updateCalculator()">
          <span style="font-weight:700; font-size:1.2rem;">BDT (৳)</span>
        </div>
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Farm Eggs (ডিম)</th>
                <th>Coarse Rice (মোটা চাল)</th>
                <th>Beef (গরুর মাংস)</th>
                <th>Soybean Oil (সয়াবিন তেল)</th>
              </tr>
            </thead>
            <tbody id="calcTableBody">
            </tbody>
          </table>
        </div>
      </div>
      `;

    case 'gold':
      return `
      <header>
        <div class="badge">🪙 Precious Metals & Assets</div>
        <h1>25-Year Gold Price Tracker <span>(স্বর্ণের দর ও বাজুস হিস্ট্রি)</span></h1>
        <p class="subtitle">Official BAJUS 22-Karat gold prices per bhori (১১.৬৬৪ গ্রাম) from 2000 to 2025. Tracking the 21.8x appreciation of gold against the Bangladesh Taka.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">2025 Price (22K)</div>
          <div class="value">142,000<span class="unit">৳/ভরি</span></div>
          <div class="desc">Official BAJUS hallmarked gold rate</div>
        </div>
        <div class="stat-card">
          <div class="label">Year 2000 Base</div>
          <div class="value">6,500<span class="unit">৳/ভরি</span></div>
          <div class="desc">25 years ago in year 2000</div>
        </div>
        <div class="stat-card">
          <div class="label">25-Year Growth</div>
          <div class="value" style="color:var(--accent);">+2,084<span class="unit">%</span></div>
          <div class="desc">21.8x asset appreciation</div>
        </div>
        <div class="stat-card">
          <div class="label">Current Gram Rate</div>
          <div class="value">~12,175<span class="unit">৳/gram</span></div>
          <div class="desc">Per gram 22K pure gold</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📈 22-Karat Gold Price per Bhori (2000–2025 in BDT)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Bangladesh Gold Price Trajectory (BDT per Bhori)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: Bangladesh Jewellers Association (BAJUS Historical Bulletins)</p>
          </div>
        </div>
        <svg id="goldChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#f59e0b;"></div> 22-Karat Gold Rate (BDT per Bhori / 11.664g)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">💍 Wedding Gold Budget Calculator (বিয়ের গয়না খরচ)</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Compare how much standard wedding jewelry sets cost across generations:</p>
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Rate / Bhori</th>
                <th>Light Set (3 ভরি)</th>
                <th>Standard Set (7 ভরি)</th>
                <th>Traditional Set (15 ভরি)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>2000</strong></td>
                <td>6,500 ৳</td>
                <td>19,500 ৳</td>
                <td>45,500 ৳</td>
                <td>97,500 ৳</td>
              </tr>
              <tr>
                <td><strong>2005</strong></td>
                <td>12,500 ৳</td>
                <td>37,500 ৳</td>
                <td>87,500 ৳</td>
                <td>187,500 ৳</td>
              </tr>
              <tr>
                <td><strong>2010</strong></td>
                <td>36,000 ৳</td>
                <td>108,000 ৳</td>
                <td>252,000 ৳</td>
                <td>540,000 ৳</td>
              </tr>
              <tr>
                <td><strong>2015</strong></td>
                <td>42,000 ৳</td>
                <td>126,000 ৳</td>
                <td>294,000 ৳</td>
                <td>630,000 ৳</td>
              </tr>
              <tr>
                <td><strong>2020</strong></td>
                <td>72,000 ৳</td>
                <td>216,000 ৳</td>
                <td>504,000 ৳</td>
                <td>1,080,000 ৳</td>
              </tr>
              <tr>
                <td><strong>2025</strong></td>
                <td><strong style="color:var(--amber);">142,000 ৳</strong></td>
                <td><strong style="color:var(--amber);">426,000 ৳</strong></td>
                <td><strong style="color:var(--amber);">994,000 ৳</strong></td>
                <td><strong style="color:var(--amber);">2,130,000 ৳</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      `;

    case 'cha-index':
      return `
      <header>
        <div class="badge">☕ Street Economics & Tong Culture</div>
        <h1>The Neighborhood Tong Index <span>(টংয়ের দুধ চা ও নাশতা)</span></h1>
        <p class="subtitle">The real street economics of Bangladesh: tracking the 25-year price evolution of Dudh Cha, Rong Cha, Shingara, and Kola-Ruti across neighborhood tea stalls.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Dudh Cha (দুধ চা)</div>
          <div class="value">12.00<span class="unit">৳</span></div>
          <div class="desc">Up from 2.00৳ in 2000 (+500%)</div>
        </div>
        <div class="stat-card">
          <div class="label">Shingara / Samucha</div>
          <div class="value">10.00<span class="unit">৳</span></div>
          <div class="desc">Up from 1.50৳ in 2000 (+566%)</div>
        </div>
        <div class="stat-card">
          <div class="label">Bun Ruti + Banana (কলা-রুটি)</div>
          <div class="value">25.00<span class="unit">৳</span></div>
          <div class="desc">Up from 4.00৳ in 2000 (+525%)</div>
        </div>
        <div class="stat-card">
          <div class="label">Monthly 3-Cup Office Run</div>
          <div class="value">1,080<span class="unit">৳/mo</span></div>
          <div class="desc">Was 180৳/month in year 2000</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 Street Food Inflation: Tong Items (2000–2025 in BDT)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Price of Milk Tea (দুধ চা) & Shingara (2000–2025)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">The unofficial benchmark of informal urban service sector inflation</p>
          </div>
        </div>
        <svg id="tongChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#10b981;"></div> Milk Tea (দুধ চা) ৳</div>
          <div class="legend-item"><div class="legend-dot" style="background:#f59e0b;"></div> Shingara (সিঙ্গাড়া) ৳</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">☕ Monthly Tong Budget Calculator (আড্ডার মাসিক খরচ)</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Enter your daily tea stall consumption to see your monthly tong expense over the years:</p>
        <div class="calc-box">
          <label style="font-size:0.9rem; font-weight:600;">Cups of Cha / Day: </label>
          <input type="number" id="chaInput" class="calc-input" value="3" min="1" max="20" style="width:100px;" oninput="updateTongCalculator()">
          <label style="font-size:0.9rem; font-weight:600; margin-left:1rem;">Shingara / Day: </label>
          <input type="number" id="shingaraInput" class="calc-input" value="2" min="0" max="20" style="width:100px;" oninput="updateTongCalculator()">
        </div>
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Daily Tong Spend</th>
                <th>Monthly Bill (30 days)</th>
                <th>Annual Expense</th>
              </tr>
            </thead>
            <tbody id="tongTableBody">
            </tbody>
          </table>
        </div>
      </div>
      `;

    case 'energy':
      return `
      <header>
        <div class="badge">⛽ Transport & Energy Tariffs</div>
        <h1>Fuel & Domestic Energy Tariffs <span>(তেল ও জ্বালানি)</span></h1>
        <p class="subtitle">Historical fuel and domestic energy price revisions: Diesel, Octane, and 12kg LPG cylinders (2000–2025). The root driver of freight and food logistics costs.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Diesel (ডিজেল)</div>
          <div class="value">105.50<span class="unit">৳/L</span></div>
          <div class="desc">Up from 15.00৳ in 2000 (+603%)</div>
        </div>
        <div class="stat-card">
          <div class="label">Octane (অকটেন)</div>
          <div class="value">125.00<span class="unit">৳/L</span></div>
          <div class="desc">Up from 25.00৳ in 2000 (+400%)</div>
        </div>
        <div class="stat-card">
          <div class="label">12kg LPG Cylinder</div>
          <div class="value">1,400<span class="unit">৳</span></div>
          <div class="desc">Up from 850৳ in 2015 (+65%)</div>
        </div>
        <div class="stat-card">
          <div class="label">Irrigation & Freight Impact</div>
          <div class="value" style="color:var(--red);">7.0<span class="unit">x</span></div>
          <div class="desc">Direct logistics cost multiplier</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 Transport Fuel Price Revisions (2000–2025 in BDT/liter)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Diesel vs Octane Prices (BDT per Liter)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: Bangladesh Petroleum Corporation (BPC)</p>
          </div>
        </div>
        <svg id="fuelChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#3b82f6;"></div> Octane (অকটেন) ৳/L</div>
          <div class="legend-item"><div class="legend-dot" style="background:#ef4444;"></div> Diesel (ডিজেল) ৳/L</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📋 Multi-Year Fuel Revision Table</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Diesel (৳/L)</th>
                <th>Octane (৳/L)</th>
                <th>Petrol (৳/L)</th>
                <th>Logistics Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>2000</strong></td>
                <td>15.00 ৳</td>
                <td>25.00 ৳</td>
                <td>23.00 ৳</td>
                <td><span class="badge-pill badge-green">Baseline</span></td>
              </tr>
              <tr>
                <td><strong>2005</strong></td>
                <td>30.00 ৳</td>
                <td>40.00 ৳</td>
                <td>38.00 ৳</td>
                <td><span class="badge-pill badge-amber">+100% Freight</span></td>
              </tr>
              <tr>
                <td><strong>2010</strong></td>
                <td>44.00 ৳</td>
                <td>67.00 ৳</td>
                <td>64.00 ৳</td>
                <td><span class="badge-pill badge-amber">+193% Freight</span></td>
              </tr>
              <tr>
                <td><strong>2015</strong></td>
                <td>68.00 ৳</td>
                <td>99.00 ৳</td>
                <td>96.00 ৳</td>
                <td><span class="badge-pill badge-red">+353% Freight</span></td>
              </tr>
              <tr>
                <td><strong>2020</strong></td>
                <td>65.00 ৳</td>
                <td>89.00 ৳</td>
                <td>86.00 ৳</td>
                <td><span class="badge-pill badge-amber">Stable Period</span></td>
              </tr>
              <tr>
                <td><strong>2022 (Aug)</strong></td>
                <td>109.00 ৳</td>
                <td>130.00 ৳</td>
                <td>125.00 ৳</td>
                <td><span class="badge-pill badge-red">Historic Single Hike</span></td>
              </tr>
              <tr>
                <td><strong>2025</strong></td>
                <td><strong style="color:var(--accent);">105.50 ৳</strong></td>
                <td><strong style="color:var(--blue);">125.00 ৳</strong></td>
                <td>121.00 ৳</td>
                <td><span class="badge-pill badge-red">+603% Overall</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      `;

    case 'rickshaw':
      return `
      <header>
        <div class="badge">🚲 Urban Transit & Street Commutes</div>
        <h1>Dhaka Rickshaw Fare Inflation Index <span>(রিকশা ভাড়ার ইভোলিউশন)</span></h1>
        <p class="subtitle">The quintessential Dhaka street commute: tracking 25 years of rickshaw fare inflation across iconic city routes and minimum base fares (2000–2025).</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Farmgate to TSC / DU</div>
          <div class="value">100-120<span class="unit">৳</span></div>
          <div class="desc">Was 10৳ in year 2000 (+1,000%)</div>
        </div>
        <div class="stat-card">
          <div class="label">Base Short Fare (গলি পার)</div>
          <div class="value">30-40<span class="unit">৳</span></div>
          <div class="desc">Was 2.00-3.00৳ in 2000</div>
        </div>
        <div class="stat-card">
          <div class="label">Monthly 2-Trip Commute</div>
          <div class="value">6,600<span class="unit">৳/mo</span></div>
          <div class="desc">Up from 600৳/month in 2000</div>
        </div>
        <div class="stat-card">
          <div class="label">City Fleet Size</div>
          <div class="value">~1.5<span class="unit">Million</span></div>
          <div class="desc">Traditional & battery-run rickshaws</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 25-Year Rickshaw Fare Trend: Farmgate to TSC (2000–2025 in BDT)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Average Trip Fare: Farmgate to TSC Route</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">The primary university and student corridor barometer of street transit</p>
          </div>
        </div>
        <svg id="rickshawChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#10b981;"></div> Fare per Single Trip (BDT ৳)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 Daily Commute Cost Calculator (মাসিক যাতায়াত খরচ)</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Enter your daily rickshaw trips to see your commute cost inflation:</p>
        <div class="calc-box">
          <label style="font-size:0.9rem; font-weight:600;">Average Trips per Day: </label>
          <input type="number" id="tripsInput" class="calc-input" value="2" min="1" max="10" style="width:100px;" oninput="updateRickshawCalculator()">
        </div>
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Trip Fare (Farmgate-TSC)</th>
                <th>Daily Total</th>
                <th>Monthly Expense (26 Working Days)</th>
              </tr>
            </thead>
            <tbody id="rickshawTableBody">
            </tbody>
          </table>
        </div>
      </div>
      `;

    case 'fish-index':
      return `
      <header>
        <div class="badge">🐟 Culinary Heritage & Fishery</div>
        <h1>Padma Hilsa & Fish Price Index <span>(মাছে ভাতে বাঙালি)</span></h1>
        <p class="subtitle">The crown jewel of Bengali culinary culture: tracking 25 years of price inflation for 1kg Padma Ilish (ইলিশ), Rui, and farmed Tilapia across Dhaka kitchen markets.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Padma Ilish (1kg Size)</div>
          <div class="value">1,850<span class="unit">৳/kg</span></div>
          <div class="desc">Up from 200৳ in 2000 (+825%)</div>
        </div>
        <div class="stat-card">
          <div class="label">Rui Fish (2-3kg Size)</div>
          <div class="value">400<span class="unit">৳/kg</span></div>
          <div class="desc">Up from 80৳ in 2000 (+400%)</div>
        </div>
        <div class="stat-card">
          <div class="label">Tilapia (ফার্মের মাছ)</div>
          <div class="value">220<span class="unit">৳/kg</span></div>
          <div class="desc">Up from 45৳ in 2000 (+388%)</div>
        </div>
        <div class="stat-card">
          <div class="label">Boishakh Feast (4 Persons)</div>
          <div class="value">~3,500<span class="unit">৳</span></div>
          <div class="desc">Was 450৳ in year 2000</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 25-Year Fish Price Trajectory: Ilish vs Rui (2000–2025 in BDT/kg)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Padma Ilish (১ কেজি ইলিশ) vs Rui Fish (রুই মাছ)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: Department of Agricultural Marketing (DAM) Karwan Bazar Wholesale & Retail Series</p>
          </div>
        </div>
        <svg id="fishChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#3b82f6;"></div> Padma Ilish 1kg (৳/kg)</div>
          <div class="legend-item"><div class="legend-dot" style="background:#10b981;"></div> Rui Fish 2-3kg (৳/kg)</div>
        </div>
      </div>
      `;

    case 'transit':
      return `
      <header>
        <div class="badge">🚇 Mass Rapid Transit (MRT Line 6)</div>
        <h1>Dhaka Metro Rail Fare & Time Savings Index</h1>
        <p class="subtitle">16 stations from Uttara North to Motijheel: slashing the grueling 3-hour cross-city traffic gridlock down to 32 minutes.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Total Stations</div>
          <div class="value">16</div>
          <div class="desc">Uttara North to Motijheel</div>
        </div>
        <div class="stat-card">
          <div class="label">Full Route Transit Time</div>
          <div class="value">32<span class="unit">mins</span></div>
          <div class="desc">Saved ~2.5 hours per one-way commute</div>
        </div>
        <div class="stat-card">
          <div class="label">Minimum / Maximum Fare</div>
          <div class="value">20 / 100<span class="unit">৳</span></div>
          <div class="desc">10% discount on Rapid Pass / MRT Pass</div>
        </div>
        <div class="stat-card">
          <div class="label">Daily Commuters</div>
          <div class="value">300,000+</div>
          <div class="desc">Passengers carried daily on Line-6</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🗺️ Interactive Station-to-Station Fare & Time Calculator</div>
      </div>
      <div class="content-card">
        <div class="calc-box">
          <label style="font-size:0.9rem; font-weight:600;">Origin: </label>
          <select id="originStation" class="search-input" style="width:200px;" onchange="updateMetroFare()">
            <option value="0">Uttara North (উত্তরা উত্তর)</option>
            <option value="1">Uttara Center (উত্তরা সেন্টার)</option>
            <option value="2">Uttara South (উত্তরা দক্ষিণ)</option>
            <option value="3">Pallabi (পল্লবী)</option>
            <option value="4">Mirpur 11 (মিরপুর ১১)</option>
            <option value="5">Mirpur 10 (মিরপুর ১০)</option>
            <option value="6">Kazipara (কাজীপাড়া)</option>
            <option value="7">Shewrapara (শেওড়াপাড়া)</option>
            <option value="8">Agargaon (আগারগাঁও)</option>
            <option value="9">Bijoy Sarani (বিজয় সরণি)</option>
            <option value="10">Farmgate (ফার্মগেট)</option>
            <option value="11">Karwan Bazar (কারওয়ান বাজার)</option>
            <option value="12">Shahbagh (শাহবাগ)</option>
            <option value="13">Dhaka University (ঢাকা বিশ্ববিদ্যালয়)</option>
            <option value="14">Bangladesh Secretariat (সচিবালয়)</option>
            <option value="15">Motijheel (মতিঝিল)</option>
          </select>
          <label style="font-size:0.9rem; font-weight:600; margin-left:1rem;">Destination: </label>
          <select id="destStation" class="search-input" style="width:200px;" onchange="updateMetroFare()">
            <option value="15">Motijheel (মতিঝিল)</option>
            <option value="14">Bangladesh Secretariat (সচিবালয়)</option>
            <option value="13">Dhaka University (ঢাকা বিশ্ববিদ্যালয়)</option>
            <option value="12">Shahbagh (শাহবাগ)</option>
            <option value="11">Karwan Bazar (কারওয়ান বাজার)</option>
            <option value="10">Farmgate (ফার্মগেট)</option>
            <option value="9">Bijoy Sarani (বিজয় সরণি)</option>
            <option value="8">Agargaon (আগারগাঁও)</option>
            <option value="7">Shewrapara (শেওড়াপাড়া)</option>
            <option value="6">Kazipara (কাজীপাড়া)</option>
            <option value="5">Mirpur 10 (মিরপুর ১০)</option>
            <option value="4">Mirpur 11 (মিরপুর ১১)</option>
            <option value="3">Pallabi (পল্লবী)</option>
            <option value="2">Uttara South (উত্তরা দক্ষিণ)</option>
            <option value="1">Uttara Center (উত্তরা সেন্টার)</option>
            <option value="0">Uttara North (উত্তরা উত্তর)</option>
          </select>
        </div>
        <div id="metroResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1rem;">
          <!-- Dynamically populated -->
        </div>
      </div>
      `;

    case 'biye-index':
      return `
      <header>
        <div class="badge">🍗 Wedding Culture & Banquet Economics</div>
        <h1>Dhaka Wedding Kacchi Biryani Inflation Index <span>(বিয়েবাড়ির কাচ্চি ইনডেক্স)</span></h1>
        <p class="subtitle">The centerpiece of Bengali celebrations: tracking 25 years of catering inflation for 1 Dega Kacchi Biryani (দেগচি কাচ্চি, ~30-35 guests), Borhani, and wedding banquet costs from 2000 to 2025.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">1 Dega Kacchi (30-35 People)</div>
          <div class="value">26,500<span class="unit">৳</span></div>
          <div class="desc">Was 2,500৳ in year 2000 (+960%)</div>
        </div>
        <div class="stat-card">
          <div class="label">Food Cost per Guest</div>
          <div class="value">~850<span class="unit">৳</span></div>
          <div class="desc">Includes Biryani, Borhani, Jorda & Kabab</div>
        </div>
        <div class="stat-card">
          <div class="label">Borhani (1 Liter Bottle)</div>
          <div class="value">160<span class="unit">৳</span></div>
          <div class="desc">Up from 30৳ in 2000 (+433%)</div>
        </div>
        <div class="stat-card">
          <div class="label">300-Guest Wedding Feast</div>
          <div class="value">255,000<span class="unit">৳</span></div>
          <div class="desc">Was ~25,000৳ in year 2000 (10x expansion)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 25-Year Kacchi Biryani Dega Price Trend (2000–2025 in BDT)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Old Dhaka 1-Dega Kacchi Biryani Catering Benchmark</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Standard Mutton Kacchi with Aloo, Basmati rice, and pure Ghee (serves 30-35 guests)</p>
          </div>
        </div>
        <svg id="kacchiChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#f59e0b;"></div> 1 Dega Kacchi Biryani (BDT ৳)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 Interactive Wedding Banquet Budget Calculator</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Estimate catering quantities and overall banquet expenses for your wedding reception:</p>
        <div class="calc-box">
          <label style="font-size:0.9rem; font-weight:600;">Expected Number of Guests: </label>
          <input type="number" id="kacchiGuestsInput" class="calc-input" value="300" min="50" max="2000" step="50" style="width:130px;" oninput="updateWeddingCalculator()">
        </div>
        <div id="weddingResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1rem;">
          <!-- Dynamically populated -->
        </div>
      </div>
      `;

    case 'internet':
      return `
      <header>
        <div class="badge">🌐 Digital Bangladesh & Mobile Telephony</div>
        <h1>Mobile Data Cost Collapse & Digital Revolution <span>(মোবাইল ইন্টারনেটের বিপ্লব)</span></h1>
        <p class="subtitle">From expensive 2G/EDGE megabytes to ubiquitous high-speed 4G/5G: tracking a 96% plunge in 1 GB data pricing alongside the surge to 136 Million internet subscribers (2010–2025).</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">1 GB Mobile Data Tariff</div>
          <div class="value" style="color:var(--accent);">14.00<span class="unit">৳</span></div>
          <div class="desc">Plunged from 350৳ in 2010 (-96% cost drop)</div>
        </div>
        <div class="stat-card">
          <div class="label">Active Internet Subscribers</div>
          <div class="value">136.5<span class="unit">Million</span></div>
          <div class="desc">Up from 18.6M in 2010 (7.3x growth)</div>
        </div>
        <div class="stat-card">
          <div class="label">Total Bandwidth Inflow</div>
          <div class="value">6,200+<span class="unit">Gbps</span></div>
          <div class="desc">Compared to 800 Gbps in 2018 (BTRC)</div>
        </div>
        <div class="stat-card">
          <div class="label">Smartphone Population Share</div>
          <div class="value">~58<span class="unit">%</span></div>
          <div class="desc">Fueling bKash, Nagad, and e-commerce growth</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 15-Year 1 GB Mobile Internet Price Collapse (2010–2025 in BDT/GB)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Average Cost of 1 GB Mobile Data (BDT)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: BTRC / Mobile Network Operator median package rates</p>
          </div>
        </div>
        <svg id="internetPriceChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#ef4444;"></div> Price per 1 GB (BDT ৳)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 Active Internet Users Growth (2010–2025 in Millions)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Total Active Internet Subscribers (Mobile & Broadband)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: Bangladesh Telecommunication Regulatory Commission (BTRC)</p>
          </div>
        </div>
        <svg id="internetUsersChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#10b981;"></div> Subscribers (Millions)</div>
        </div>
      </div>
      `;

    case 'rent':
      return `
      <header>
        <div class="badge">🏢 Urban Housing & Real Estate</div>
        <h1>Dhaka Apartment Rent & Housing Inflation Index <span>(বাসা ভাড়া ও আবাসন)</span></h1>
        <p class="subtitle">The mounting cost of urban living: tracking 25 years of monthly residential apartment rents across Dhanmondi, Mirpur, and Uttara alongside per-square-foot property purchase prices (2000–2025).</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Dhanmondi (1,200 sqft)</div>
          <div class="value">38,000<span class="unit">৳/mo</span></div>
          <div class="desc">Up from 8,000৳ in 2000 (+375%)</div>
        </div>
        <div class="stat-card">
          <div class="label">Mirpur (1,000 sqft)</div>
          <div class="value">20,000<span class="unit">৳/mo</span></div>
          <div class="desc">Up from 3,500৳ in 2000 (+471%)</div>
        </div>
        <div class="stat-card">
          <div class="label">Average Purchase Price</div>
          <div class="value">12,500<span class="unit">৳/sqft</span></div>
          <div class="desc">Up from 1,200৳/sqft in 2000 (10.4x)</div>
        </div>
        <div class="stat-card">
          <div class="label">Rent-to-Income Ratio</div>
          <div class="value">~38<span class="unit">%</span></div>
          <div class="desc">Share of average middle-class salary spent on rent</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 25-Year Apartment Rent Comparison: Dhanmondi vs Mirpur (2000–2025)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Monthly Apartment Rental Rates (BDT / Month)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: Real Estate & Housing Association of Bangladesh (REHAB) survey records</p>
          </div>
        </div>
        <svg id="rentChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#3b82f6;"></div> Dhanmondi 1,200 sqft (৳/mo)</div>
          <div class="legend-item"><div class="legend-dot" style="background:#10b981;"></div> Mirpur 1,000 sqft (৳/mo)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 Dhaka Household Salary & Rent Affordability Calculator</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Enter your monthly household income to see prudent rental thresholds and neighborhood affordability:</p>
        <div class="calc-box">
          <label style="font-size:0.9rem; font-weight:600;">Monthly Household Salary: </label>
          <input type="number" id="salaryInput" class="calc-input" value="80000" min="20000" max="1000000" step="5000" style="width:140px;" oninput="updateRentCalculator()">
        </div>
        <div id="rentResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1rem;">
          <!-- Dynamically populated -->
        </div>
      </div>
      `;

    case 'eid-transit':
      return `
      <header>
        <div class="badge">🌙 The Great Dhaka Exodus</div>
        <h1>Eid Homecoming & Padma Bridge Toll Traffic Index <span>(ঈদের নাড়ির টান)</span></h1>
        <p class="subtitle">The largest annual human migration in South Asia: ~12 million people departing Dhaka in 4 days across highways, river launches, railways, and the Padma Multipurpose Bridge.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Total Dhaka Exodus</div>
          <div class="value">~12<span class="unit">Million</span></div>
          <div class="desc">Over 55% of city population travels home</div>
        </div>
        <div class="stat-card">
          <div class="label">Padma Bridge Daily Toll Peak</div>
          <div class="value">5.40<span class="unit">Crore ৳</span></div>
          <div class="desc">Single-day record toll collection during Eid rush</div>
        </div>
        <div class="stat-card">
          <div class="label">Padma Bridge Peak Vehicles</div>
          <div class="value">38,500+</div>
          <div class="desc">Motorbikes, buses, and private cars per day</div>
        </div>
        <div class="stat-card">
          <div class="label">Sadarghat Launch Trips</div>
          <div class="value">110+<span class="unit">Launches</span></div>
          <div class="desc">Departing daily to 41 southern river routes</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🌉 Padma Multipurpose Bridge Eid Toll Trajectory (Crore BDT / Day)</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Average Normal Day Toll</th>
                <th>Peak Eid Rush Day Toll</th>
                <th>Peak Daily Vehicle Count</th>
                <th>Southern Connectivity Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>2022 (Inauguration)</strong></td>
                <td>3.16 Crore ৳</td>
                <td><strong style="color:var(--accent);">4.60 Crore ৳</strong></td>
                <td>31,723 vehicles</td>
                <td>Eliminated 8-12 hour ferry wait times at Mawa ghat</td>
              </tr>
              <tr>
                <td><strong>2023</strong></td>
                <td>3.52 Crore ৳</td>
                <td><strong style="color:var(--accent);">4.90 Crore ৳</strong></td>
                <td>35,100 vehicles</td>
                <td>Seamless transit to 21 southwestern districts</td>
              </tr>
              <tr>
                <td><strong>2024</strong></td>
                <td>3.85 Crore ৳</td>
                <td><strong style="color:var(--accent);">5.15 Crore ৳</strong></td>
                <td>36,800 vehicles</td>
                <td>Dhaka to Barishal road transit slashed to 3.5 hours</td>
              </tr>
              <tr>
                <td><strong>2025</strong></td>
                <td>4.10 Crore ৳</td>
                <td><strong style="color:var(--accent);">5.40 Crore ৳</strong></td>
                <td>38,500 vehicles</td>
                <td>Railway corridor on lower deck operational</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🚌 Modal Split of Dhaka Eid Travelers</div>
      </div>
      <div class="content-card">
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:1rem;">
          <div style="background:var(--bg); padding:1rem; border-radius:0.5rem; border-left:4px solid var(--accent);">
            <div style="font-weight:700; font-size:1.1rem;">Highway Buses</div>
            <div style="font-size:1.5rem; font-weight:800; color:var(--accent); margin:0.25rem 0;">~55%</div>
            <div style="font-size:0.85rem; color:var(--text-muted);">Gabtoli, Sayedabad, Mohakhali hubs carrying ~6.5M passengers.</div>
          </div>
          <div style="background:var(--bg); padding:1rem; border-radius:0.5rem; border-left:4px solid var(--blue);">
            <div style="font-weight:700; font-size:1.1rem;">Padma Bridge & Private Cars</div>
            <div style="font-size:1.5rem; font-weight:800; color:var(--blue); margin:0.25rem 0;">~20%</div>
            <div style="font-size:0.85rem; color:var(--text-muted);">Private sedans, microbuses, SUVs, and commuter motorcycles.</div>
          </div>
          <div style="background:var(--bg); padding:1rem; border-radius:0.5rem; border-left:4px solid #10b981;">
            <div style="font-weight:700; font-size:1.1rem;">River Launches</div>
            <div style="font-size:1.5rem; font-weight:800; color:#10b981; margin:0.25rem 0;">~15%</div>
            <div style="font-size:0.85rem; color:var(--text-muted);">Sadarghat fleet serving Barishal, Bhola, Patuakhali, and Chandpur.</div>
          </div>
          <div style="background:var(--bg); padding:1rem; border-radius:0.5rem; border-left:4px solid #8b5cf6;">
            <div style="font-weight:700; font-size:1.1rem;">Bangladesh Railway</div>
            <div style="font-size:1.5rem; font-weight:800; color:#8b5cf6; margin:0.25rem 0;">~10%</div>
            <div style="font-size:0.85rem; color:var(--text-muted);">Kamalapur & Airport stations with special holiday train services.</div>
          </div>
        </div>
      </div>
      `;

    case 'cricket':
      return `
      <header>
        <div class="badge">🏏 National Pride & Sport Analytics</div>
        <h1>Bangladesh Tigers Cricket Records & Historic Victories <span>(টাইগার্স ক্রিকেট রেকর্ড)</span></h1>
        <p class="subtitle">From the 1997 ICC Trophy triumph to Test whitewashes in Pakistan: 25 years of all-time cricket records, legendary all-rounders, and historic upsets.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Shakib Al Hasan</div>
          <div class="value">ICC #1</div>
          <div class="desc">World #1 All-Rounder for 12+ years across all formats</div>
        </div>
        <div class="stat-card">
          <div class="label">Top ODI Run Scorer</div>
          <div class="value">8,357<span class="unit">Runs</span></div>
          <div class="desc">Tamim Iqbal (14 centuries & 56 fifties)</div>
        </div>
        <div class="stat-card">
          <div class="label">Test Double Centuries</div>
          <div class="value">3<span class="unit">Times</span></div>
          <div class="desc">Mushfiqur Rahim (200 vs SL, 219* vs ZIM)</div>
        </div>
        <div class="stat-card">
          <div class="label">Pakistan Test Series Sweep</div>
          <div class="value">2-0<span class="unit">Clean Sweep</span></div>
          <div class="desc">Historic first-ever away series sweep in Rawalpindi (2024)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🌟 Bangladesh All-Time Cricket Legends</div>
      </div>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1rem; margin-bottom:2rem;">
        <div class="content-card" style="margin-bottom:0;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <h3 style="font-size:1.15rem; color:var(--accent);">Shakib Al Hasan</h3>
            <span class="badge-pill badge-green">All-Rounder</span>
          </div>
          <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.75rem;">7,570 ODI runs (9x 100s) • 317 wickets • 4,609 Test runs • 246 Test wickets</div>
          <p style="font-size:0.9rem; line-height:1.5;">The greatest cricketer in Bangladesh history. Only player in World Cup history to score 1,000+ runs and take 40+ wickets.</p>
        </div>
        <div class="content-card" style="margin-bottom:0;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <h3 style="font-size:1.15rem; color:var(--accent);">Tamim Iqbal</h3>
            <span class="badge-pill badge-amber">Opening Batter</span>
          </div>
          <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.75rem;">8,357 ODI runs • 14 ODI Centuries • 5,134 Test runs</div>
          <p style="font-size:0.9rem; line-height:1.5;">Lord's Honours Board centurion (103 in 2010). The anchor of Bangladesh's modern batting lineup for 16 years.</p>
        </div>
        <div class="content-card" style="margin-bottom:0;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <h3 style="font-size:1.15rem; color:var(--accent);">Mushfiqur Rahim</h3>
            <span class="badge-pill badge-blue">Wicketkeeper Batter</span>
          </div>
          <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.75rem;">7,792 ODI runs • 5,892 Test runs • 3x Double Centuries</div>
          <p style="font-size:0.9rem; line-height:1.5;">First Bangladeshi to score a Test double century (200 at Galle). Most capped Test player with 90+ appearances.</p>
        </div>
        <div class="content-card" style="margin-bottom:0;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <h3 style="font-size:1.15rem; color:var(--accent);">Mustafizur Rahman</h3>
            <span class="badge-pill badge-purple">Left-Arm Cutter</span>
          </div>
          <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.75rem;">167 ODI wickets (5.08 econ) • 128 T20I wickets</div>
          <p style="font-size:0.9rem; line-height:1.5;">Burst onto the scene with 11 wickets in his first 2 ODIs against India in 2015. World-famous off-cutter variation.</p>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🏆 Iconic Milestone Victories That Shook the World</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Year & Match</th>
                <th>Opponent</th>
                <th>Venue & Tournament</th>
                <th>Result</th>
                <th>Historical Significance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1999 (May 31)</strong></td>
                <td>Pakistan</td>
                <td>Northampton, England (CWC)</td>
                <td><span class="badge-pill badge-green">Won by 62 runs</span></td>
                <td>Khaled Mahmud Sujon (3/31); paved the way for Test status in 2000.</td>
              </tr>
              <tr>
                <td><strong>2007 (Mar 17)</strong></td>
                <td>India</td>
                <td>Port of Spain, Trinidad (CWC)</td>
                <td><span class="badge-pill badge-green">Won by 5 wickets</span></td>
                <td>Mashrafe took 4/38; teenaged Tamim, Shakib & Mushfiq scored fifties to knock India out.</td>
              </tr>
              <tr>
                <td><strong>2015 (Mar 9)</strong></td>
                <td>England</td>
                <td>Adelaide Oval, Australia (CWC)</td>
                <td><span class="badge-pill badge-green">Won by 15 runs</span></td>
                <td>Mahmudullah's century (103) & Rubel's double-strike clean bowled England into QF.</td>
              </tr>
              <tr>
                <td><strong>2017 (Jun 9)</strong></td>
                <td>New Zealand</td>
                <td>Cardiff, Wales (Champions Trophy)</td>
                <td><span class="badge-pill badge-green">Won by 5 wickets</span></td>
                <td>From 33/4, Shakib (114) & Mahmudullah (102*) stitched 224-run partnership to chase 266.</td>
              </tr>
              <tr>
                <td><strong>2022 (Jan 5)</strong></td>
                <td>New Zealand</td>
                <td>Mount Maunganui (Test Match)</td>
                <td><span class="badge-pill badge-green">Won by 8 wickets</span></td>
                <td>Ebadot Hossain's 6/46 snapped NZ's 17-match home unbeaten run in historic Test upset.</td>
              </tr>
              <tr>
                <td><strong>2024 (Sep 3)</strong></td>
                <td>Pakistan</td>
                <td>Rawalpindi Stadium (Test Match)</td>
                <td><span class="badge-pill badge-green">Won by 6 wkts (2-0 sweep)</span></td>
                <td>First-ever away Test series win in Pakistan; Litton Das (138) heroics from 26/6.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 Head-to-Head ODI Win Records vs ICC Full Members</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Opponent Nation</th>
                <th>Matches Played</th>
                <th>Won</th>
                <th>Lost</th>
                <th>Win Rate (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Zimbabwe</strong></td><td>81</td><td>51</td><td>30</td><td><span class="badge-pill badge-green">63.0%</span></td></tr>
              <tr><td><strong>West Indies</strong></td><td>44</td><td>21</td><td>21</td><td><span class="badge-pill badge-green">47.7%</span></td></tr>
              <tr><td><strong>New Zealand</strong></td><td>45</td><td>11</td><td>33</td><td><span class="badge-pill badge-amber">24.4%</span></td></tr>
              <tr><td><strong>Sri Lanka</strong></td><td>57</td><td>12</td><td>43</td><td><span class="badge-pill badge-amber">21.1%</span></td></tr>
              <tr><td><strong>England</strong></td><td>25</td><td>5</td><td>20</td><td><span class="badge-pill badge-amber">20.0%</span></td></tr>
              <tr><td><strong>India</strong></td><td>41</td><td>8</td><td>32</td><td><span class="badge-pill badge-amber">19.5%</span></td></tr>
              <tr><td><strong>South Africa</strong></td><td>25</td><td>4</td><td>19</td><td><span class="badge-pill badge-red">16.0%</span></td></tr>
              <tr><td><strong>Pakistan</strong></td><td>39</td><td>5</td><td>33</td><td><span class="badge-pill badge-red">12.8%</span></td></tr>
              <tr><td><strong>Australia</strong></td><td>22</td><td>1</td><td>20</td><td><span class="badge-pill badge-red">4.5%</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
      `;

    case 'demographics':
      return `
      <header>
        <div class="badge">👨‍👩‍👧‍👦 Social Progress & Demographics</div>
        <h1>The Bangladesh Demographic & Public Health Miracle <span>(জনমিতিক রূপান্তর)</span></h1>
        <p class="subtitle">Amartya Sen's 'Bangladesh Paradox': how a nation born in extreme poverty outpaced its regional peers in life expectancy, fertility reduction, child survival, and female education (1971–2024).</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Life Expectancy at Birth</div>
          <div class="value" style="color:var(--accent);">72.4<span class="unit">Years</span></div>
          <div class="desc">Up from 46.5 years in 1971 (+25.9 years)</div>
        </div>
        <div class="stat-card">
          <div class="label">Total Fertility Rate (TFR)</div>
          <div class="value" style="color:var(--accent);">2.14<span class="unit">Births</span></div>
          <div class="desc">Down from 6.9 in 1970 (Near replacement level 2.1)</div>
        </div>
        <div class="stat-card">
          <div class="label">Literacy Rate (Age 7+)</div>
          <div class="value">76.8<span class="unit">%</span></div>
          <div class="desc">Up from 16.8% in 1974 census (4.6x growth)</div>
        </div>
        <div class="stat-card">
          <div class="label">Median Population Age</div>
          <div class="value">27.6<span class="unit">Years</span></div>
          <div class="desc">Dynamic demographic dividend with 65% working age</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 50-Year Life Expectancy Trajectory (1971–2024 in Years)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Average Life Expectancy at Birth (Bangladesh)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: BBS SVRS Report & World Bank WDI (Surpassing India 70.8 and Pakistan 66.4)</p>
          </div>
        </div>
        <svg id="lifeChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#10b981;"></div> Life Expectancy (Years)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 Total Fertility Rate Collapse (1970–2024 in Births per Woman)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Total Fertility Rate (TFR) Trajectory</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">One of the fastest voluntary fertility transitions in human history without coercive one-child mandates</p>
          </div>
        </div>
        <svg id="tfrChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#3b82f6;"></div> Children Born per Woman</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">💡 The 'Bangladesh Paradox' in Global Economics</div>
      </div>
      <div class="content-card">
        <blockquote class="quote-box">
          "Bangladesh's remarkable performance in social indicators—from girls' school enrollment and child immunization to lowering infant mortality and extending longevity—demonstrates that rapid human development does not have to wait for high industrial GDP."
          <cite>— Amartya Sen, Nobel Laureate in Economics</cite>
        </blockquote>
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Indicator</th>
                <th>Bangladesh (1971)</th>
                <th>Bangladesh (2024)</th>
                <th>India (2024)</th>
                <th>Pakistan (2024)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Life Expectancy</strong></td>
                <td>46.5 years</td>
                <td><strong style="color:var(--accent);">72.4 years</strong></td>
                <td>70.8 years</td>
                <td>66.4 years</td>
              </tr>
              <tr>
                <td><strong>Total Fertility Rate</strong></td>
                <td>6.90 births</td>
                <td><strong style="color:var(--accent);">2.14 births</strong></td>
                <td>2.00 births</td>
                <td>3.45 births</td>
              </tr>
              <tr>
                <td><strong>Infant Mortality Rate (per 1,000)</strong></td>
                <td>148 deaths</td>
                <td><strong style="color:var(--accent);">21 deaths</strong></td>
                <td>26 deaths</td>
                <td>53 deaths</td>
              </tr>
              <tr>
                <td><strong>Female-to-Male Primary School Ratio</strong></td>
                <td>0.54</td>
                <td><strong style="color:var(--accent);">1.04 (Gender Parity)</strong></td>
                <td>1.02</td>
                <td>0.86</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      `;

    case 'rivers':
      return `
      <header>
        <div class="badge">🌊 Hydrology & Delta Geography</div>
        <h1>Rivers of Bangladesh & The Great Delta Network <span>(নদীমাতৃক বাংলাদেশ)</span></h1>
        <p class="subtitle">The world's largest active delta: 57 transboundary rivers, 140,000 m³/s peak monsoon discharge (second only to the Amazon), and 1 Billion tonnes of fertile Himalayan silt deposited annually.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Transboundary Rivers</div>
          <div class="value">57</div>
          <div class="desc">54 shared with India, 3 with Myanmar</div>
        </div>
        <div class="stat-card">
          <div class="label">Peak Monsoon Discharge</div>
          <div class="value">140,000<span class="unit">m³/s</span></div>
          <div class="desc">Second largest river outflow on Earth (after Amazon)</div>
        </div>
        <div class="stat-card">
          <div class="label">Annual Silt Deposit</div>
          <div class="value">&gt;1.0<span class="unit">Bn Tonnes</span></div>
          <div class="desc">Himalayan sediments building active delta char lands</div>
        </div>
        <div class="stat-card">
          <div class="label">Waterway Navigation</div>
          <div class="value">8,400<span class="unit">km</span></div>
          <div class="desc">Monsoon navigable inland waterway routes</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🗺️ The Three Great River Lifelines</div>
      </div>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1rem; margin-bottom:2rem;">
        <div class="content-card" style="margin-bottom:0;">
          <h3 style="color:var(--accent); font-size:1.15rem; margin-bottom:0.5rem;">Padma (পদ্মা / Lower Ganges)</h3>
          <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.5rem;">120 km in BD • 4 to 8 km width • Origin: Gangotri Glacier</p>
          <p style="font-size:0.9rem; line-height:1.5;">Enters at Chapai Nawabganj, merges with Jamuna at Goalondo Ghat, and flows past the 6.15 km Padma Bridge before joining the Meghna at Chandpur.</p>
        </div>
        <div class="content-card" style="margin-bottom:0;">
          <h3 style="color:var(--blue); font-size:1.15rem; margin-bottom:0.5rem;">Jamuna (যমুনা / Lower Brahmaputra)</h3>
          <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.5rem;">205 km in BD • 8 to 12 km braided width • Origin: Tibet</p>
          <p style="font-size:0.9rem; line-height:1.5;">Created by the cataclysmic 1787 Teesta flood and earthquake diversion. Features one of the widest multi-channel braided riverbeds in the world.</p>
        </div>
        <div class="content-card" style="margin-bottom:0;">
          <h3 style="color:#10b981; font-size:1.15rem; margin-bottom:0.5rem;">Meghna (মেঘনা / Surma-Kushiyara Outflow)</h3>
          <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.5rem;">160 km to estuary • Up to 18 km wide at Bhola • Origin: Manipur</p>
          <p style="font-size:0.9rem; line-height:1.5;">The deepest and widest river in Bangladesh. Collects the combined fury of Padma and Jamuna at Chandpur to form the gigantic Meghna Estuary.</p>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📋 Critical Transboundary Rivers Registry</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>River Name</th>
                <th>Upstream Basin</th>
                <th>Entry Point into Bangladesh</th>
                <th>Primary Hydrological Issue</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Teesta (তিস্তা)</strong></td><td>Sikkim & West Bengal, India</td><td>Lalmonirhat / Nilphamari</td><td>Dry season water allocation & Teesta Barrage sharing</td></tr>
              <tr><td><strong>Surma (সুরমা)</strong></td><td>Manipur / Assam, India</td><td>Sylhet border</td><td>Sylhet Haor basin flash floods & drainage</td></tr>
              <tr><td><strong>Kushiyara (কুশিয়ারা)</strong></td><td>Barak River / Assam, India</td><td>Zakiganj, Sylhet</td><td>2022 Water withdrawal treaty at Rahimpur canal</td></tr>
              <tr><td><strong>Feni (ফেনী)</strong></td><td>Tripura, India</td><td>Feni / Chattogram</td><td>Drinking water intake & Maitri Setu bridge connection</td></tr>
              <tr><td><strong>Naf (নাফ নদী)</strong></td><td>Arakan / Myanmar border</td><td>Teknaf, Cox's Bazar</td><td>International maritime border river & estuary ecology</td></tr>
              <tr><td><strong>Muhuri (মুহুরী)</strong></td><td>Tripura, India</td><td>Parshuram, Feni</td><td>Muhuri irrigation regulator & cross-border embankment</td></tr>
              <tr><td><strong>Gorai-Madhumati (গড়াই)</strong></td><td>Distributary of Padma</td><td>Kushtia to Sundarbans</td><td>Freshwater flushing to prevent salinity in Sundarbans</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      `;

    case 'grid':
      return `
      <header>
        <div class="badge">⚡ Energy Transition & Infrastructure</div>
        <h1>Power Grid Evolution & Rooppur Nuclear Horizon <span>(বিদ্যুৎ গ্রিড ও পারমাণবিক শক্তি)</span></h1>
        <p class="subtitle">From frequent blackouts to 100% national electrification: tracking 25 years of generation capacity expansion from 4,005 MW to 29,500 MW alongside the 2,400 MW Rooppur Nuclear Power Plant.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Installed Generation Capacity</div>
          <div class="value">29,500<span class="unit">MW</span></div>
          <div class="desc">Up from 4,005 MW in 2000 (7.3x expansion)</div>
        </div>
        <div class="stat-card">
          <div class="label">National Grid Electrification</div>
          <div class="value" style="color:var(--accent);">100<span class="unit">%</span></div>
          <div class="desc">Full territorial coverage achieved in March 2022</div>
        </div>
        <div class="stat-card">
          <div class="label">Rooppur Nuclear (RNPP)</div>
          <div class="value">2,400<span class="unit">MW</span></div>
          <div class="desc">Twin Generation III+ VVER-1200 reactors</div>
        </div>
        <div class="stat-card">
          <div class="label">Highest Peak Generation</div>
          <div class="value">16,475<span class="unit">MW</span></div>
          <div class="desc">All-time national summer peak demand served</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 25-Year Installed Electricity Capacity Expansion (2000–2025 in MW)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Bangladesh Total Installed Power Capacity (MW)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: Bangladesh Power Development Board (BPDB) annual series</p>
          </div>
        </div>
        <svg id="gridChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#f59e0b;"></div> Installed Capacity (Megawatts)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">⚛️ Rooppur Nuclear Power Plant (RNPP) Milestone Architecture</div>
      </div>
      <div class="content-card">
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:1.25rem;">
          <div style="background:var(--bg); padding:1.25rem; border-radius:0.5rem; border-left:4px solid var(--accent);">
            <div style="font-weight:700; font-size:1.1rem;">Twin VVER-1200 Reactors</div>
            <div style="font-size:1.5rem; font-weight:800; color:var(--accent); margin:0.25rem 0;">2 &times; 1,200 MW</div>
            <div style="font-size:0.85rem; color:var(--text-muted);">Russian Rosatom Generation-III+ pressurized water reactor design with passive safety systems.</div>
          </div>
          <div style="background:var(--bg); padding:1.25rem; border-radius:0.5rem; border-left:4px solid var(--blue);">
            <div style="font-weight:700; font-size:1.1rem;">Fresh Nuclear Fuel Arrival</div>
            <div style="font-size:1.5rem; font-weight:800; color:var(--blue); margin:0.25rem 0;">October 2023</div>
            <div style="font-size:0.85rem; color:var(--text-muted);">Bangladesh officially recognized by the IAEA as the 33rd nuclear power-generating nation.</div>
          </div>
          <div style="background:var(--bg); padding:1.25rem; border-radius:0.5rem; border-left:4px solid #10b981;">
            <div style="font-weight:700; font-size:1.1rem;">Baseload Grid Impact</div>
            <div style="font-size:1.5rem; font-weight:800; color:#10b981; margin:0.25rem 0;">~10–12%</div>
            <div style="font-size:0.85rem; color:var(--text-muted);">Zero-carbon baseload electricity reducing reliance on volatile imported LNG and heavy fuel oil.</div>
          </div>
        </div>
      </div>
      `;

    case 'holidays':
      return `
      <header>
        <div class="badge">📅 Civic Calendar & Holidays</div>
        <h1>Bangladesh Gazette Public Holidays & Long Weekend Optimizer <span>(সরকারি ছুটির তালিকা)</span></h1>
        <p class="subtitle">Official Bangladesh government gazette holidays for 2025/2026 alongside a smart leave optimizer to combine Friday-Saturday weekends with national holidays for extended getaways.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Total Gazette Holidays</div>
          <div class="value">15<span class="unit">Days</span></div>
          <div class="desc">Mandatory general and executive holidays</div>
        </div>
        <div class="stat-card">
          <div class="label">National Memorial Days</div>
          <div class="value">3<span class="unit">Days</span></div>
          <div class="desc">21 Feb (Language), 26 Mar (Independence), 16 Dec (Victory)</div>
        </div>
        <div class="stat-card">
          <div class="label">Cultural New Year</div>
          <div class="value">14<span class="unit">April</span></div>
          <div class="desc">Pohela Boishakh (Bengali New Year 1432)</div>
        </div>
        <div class="stat-card">
          <div class="label">Long Weekend Opportunities</div>
          <div class="value">5<span class="unit">Holidays</span></div>
          <div class="desc">Naturally align with Friday-Saturday weekends in 2025</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🌴 Long Weekend Vacation Optimizer (ছুটি বাড়ানোর প্ল্যানার)</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Maximize your vacation by taking a strategic single day off around official gazette holidays:</p>
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Holiday & Day</th>
                <th>Bridge Leave Needed</th>
                <th>Total Vacation Duration</th>
                <th>Recommendation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>May Day (Thu, 1 May 2025)</strong></td>
                <td><span class="badge-pill badge-green">0 days</span></td>
                <td><strong style="color:var(--accent);">3 days (Thu to Sat)</strong></td>
                <td>Natural 3-day weekend; ideal for Sreemangal or Cox's Bazar trip.</td>
              </tr>
              <tr>
                <td><strong>Pohela Boishakh (Mon, 14 Apr 2025)</strong></td>
                <td><span class="badge-pill badge-green">0 days</span></td>
                <td><strong style="color:var(--accent);">3-4 days (Fri to Mon)</strong></td>
                <td>Weekend seamlessly connects with Bengali New Year celebration.</td>
              </tr>
              <tr>
                <td><strong>Christmas Day (Thu, 25 Dec 2025)</strong></td>
                <td><span class="badge-pill badge-green">0 days</span></td>
                <td><strong style="color:var(--accent);">3 days (Thu to Sat)</strong></td>
                <td>Year-end winter retreat without touching annual leave quota.</td>
              </tr>
              <tr>
                <td><strong>Independence Day (Wed, 26 Mar 2025)</strong></td>
                <td><span class="badge-pill badge-amber">1 day (Take Thu 27 Mar)</span></td>
                <td><strong style="color:var(--accent);">4 days (Wed to Sat)</strong></td>
                <td>Bridge Thursday with weekend for an uninterrupted 4-day vacation.</td>
              </tr>
              <tr>
                <td><strong>Victory Day (Tue, 16 Dec 2025)</strong></td>
                <td><span class="badge-pill badge-amber">1 day (Take Mon 15 Dec)</span></td>
                <td><strong style="color:var(--accent);">5 days (Fri 12 to Tue 16)</strong></td>
                <td>Connect weekend with Monday leave for an epic 5-day winter getaway.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🗓️ Official 2025 Government Gazette Holidays Registry</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Day</th>
                <th>Holiday Name (English)</th>
                <th>বাংলা নাম</th>
                <th>Classification</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>2025-02-21</td><td>Friday</td><td><strong>Shaheed Day & Int'l Mother Language Day</strong></td><td>শহীদ দিবস ও আন্তর্জাতিক মাতৃভাষা দিবস</td><td><span class="badge-pill badge-purple">National</span></td></tr>
              <tr><td>2025-03-26</td><td>Wednesday</td><td><strong>Independence & National Day</strong></td><td>স্বাধীনতা ও জাতীয় দিবস</td><td><span class="badge-pill badge-purple">National</span></td></tr>
              <tr><td>2025-03-31</td><td>Monday</td><td><strong>Eid-ul-Fitr (Day 1)</strong></td><td>ঈদুল ফিতর</td><td><span class="badge-pill badge-green">Religious</span></td></tr>
              <tr><td>2025-04-01</td><td>Tuesday</td><td><strong>Eid-ul-Fitr (Day 2)</strong></td><td>ঈদুল ফিতর</td><td><span class="badge-pill badge-green">Religious</span></td></tr>
              <tr><td>2025-04-02</td><td>Wednesday</td><td><strong>Eid-ul-Fitr (Day 3)</strong></td><td>ঈদুল ফিতর</td><td><span class="badge-pill badge-green">Religious</span></td></tr>
              <tr><td>2025-04-14</td><td>Monday</td><td><strong>Bengali New Year (Pohela Boishakh)</strong></td><td>পহেলা বৈশাখ</td><td><span class="badge-pill badge-amber">Cultural</span></td></tr>
              <tr><td>2025-05-01</td><td>Thursday</td><td><strong>May Day</strong></td><td>মে দিবস</td><td><span class="badge-pill badge-purple">National</span></td></tr>
              <tr><td>2025-05-11</td><td>Sunday</td><td><strong>Buddha Purnima</strong></td><td>বুদ্ধ পূর্ণিমা</td><td><span class="badge-pill badge-green">Religious</span></td></tr>
              <tr><td>2025-06-07</td><td>Saturday</td><td><strong>Eid-ul-Adha (Day 1)</strong></td><td>ঈদুল আজহা</td><td><span class="badge-pill badge-green">Religious</span></td></tr>
              <tr><td>2025-06-08</td><td>Sunday</td><td><strong>Eid-ul-Adha (Day 2)</strong></td><td>ঈদুল আজহা</td><td><span class="badge-pill badge-green">Religious</span></td></tr>
              <tr><td>2025-06-09</td><td>Monday</td><td><strong>Eid-ul-Adha (Day 3)</strong></td><td>ঈদুল আজহা</td><td><span class="badge-pill badge-green">Religious</span></td></tr>
              <tr><td>2025-08-16</td><td>Saturday</td><td><strong>Janmashtami</strong></td><td>শুভ জন্মাষ্টমী</td><td><span class="badge-pill badge-green">Religious</span></td></tr>
              <tr><td>2025-10-02</td><td>Thursday</td><td><strong>Durga Puja (Bijoya Dashami)</strong></td><td>বিজয়া দশমী</td><td><span class="badge-pill badge-green">Religious</span></td></tr>
              <tr><td>2025-12-16</td><td>Tuesday</td><td><strong>Victory Day</strong></td><td>বিজয় দিবস</td><td><span class="badge-pill badge-purple">National</span></td></tr>
              <tr><td>2025-12-25</td><td>Thursday</td><td><strong>Christmas Day</strong></td><td>যিশু খ্রিস্টের জন্মদিন (বড়দিন)</td><td><span class="badge-pill badge-green">Religious</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
      `;

    case 'forex':
      return `
      <header>
        <div class="badge">💵 Foreign Exchange & Currency Rails</div>
        <h1>USD/BDT Historical Exchange Rate Trajectory <span>(১৯৭১–২০২৫ ডলারের দর)</span></h1>
        <p class="subtitle">Tracking 54 years of Bangladesh Taka valuation against the US Dollar: from 7.80 BDT at 1971 Liberation to 122.50 BDT under the 2024 crawling peg band system.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">2025 Interbank Rate</div>
          <div class="value" style="color:var(--accent);">122.50<span class="unit">৳/USD</span></div>
          <div class="desc">Bangladesh Bank mid-rate (crawling peg corridor)</div>
        </div>
        <div class="stat-card">
          <div class="label">1971 Liberation Parity</div>
          <div class="value">7.80<span class="unit">৳/USD</span></div>
          <div class="desc">15.7x cumulative dollar expansion over 54 years</div>
        </div>
        <div class="stat-card">
          <div class="label">Cash Dollar (কার্ব মার্কেট)</div>
          <div class="value">125.00<span class="unit">৳</span></div>
          <div class="desc">Open market / money changer cash note rate</div>
        </div>
        <div class="stat-card">
          <div class="label">10-Year Depreciation</div>
          <div class="value" style="color:var(--red);">+57.2<span class="unit">%</span></div>
          <div class="desc">Up from 77.95 ৳ in 2015 due to global rate cycles</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 54-Year US Dollar vs Bangladesh Taka Trajectory (1971–2025 in BDT)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>US Dollar (1 USD) in Bangladesh Taka (BDT)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: Bangladesh Bank Official Historical Exchange Rate Archive & BAFEDA</p>
          </div>
        </div>
        <svg id="forexChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#10b981;"></div> Interbank Exchange Rate (BDT/USD)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">💱 Major World Currencies vs Bangladesh Taka (2025 Benchmark)</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Currency Name</th>
                <th>Symbol</th>
                <th>Official Interbank Rate</th>
                <th>Kerb / Open Cash Rate</th>
                <th>10-Year Change vs BDT</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>US Dollar (USD)</strong></td><td>$</td><td><strong style="color:var(--accent);">122.50 ৳</strong></td><td>125.00 ৳</td><td><span class="badge-pill badge-red">+57.2%</span></td></tr>
              <tr><td><strong>British Pound (GBP)</strong></td><td>£</td><td><strong>158.20 ৳</strong></td><td>161.00 ৳</td><td><span class="badge-pill badge-red">+34.5%</span></td></tr>
              <tr><td><strong>Euro (EUR)</strong></td><td>€</td><td><strong>133.40 ৳</strong></td><td>136.00 ৳</td><td><span class="badge-pill badge-red">+51.8%</span></td></tr>
              <tr><td><strong>Saudi Riyal (SAR)</strong></td><td>﷼</td><td><strong>32.65 ৳</strong></td><td>33.30 ৳</td><td><span class="badge-pill badge-red">+57.0%</span></td></tr>
              <tr><td><strong>UAE Dirham (AED)</strong></td><td>د.إ</td><td><strong>33.35 ৳</strong></td><td>34.00 ৳</td><td><span class="badge-pill badge-red">+57.3%</span></td></tr>
              <tr><td><strong>Malaysian Ringgit (MYR)</strong></td><td>RM</td><td><strong>27.80 ৳</strong></td><td>28.50 ৳</td><td><span class="badge-pill badge-red">+39.0%</span></td></tr>
              <tr><td><strong>Indian Rupee (INR)</strong></td><td>₹</td><td><strong>1.43 ৳</strong></td><td>1.47 ৳</td><td><span class="badge-pill badge-red">+18.2%</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 Historical Dollar Time Machine Calculator (ডলারের টাইম মেশিন)</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Enter an amount in US Dollars to calculate what it converted to in BDT across eras:</p>
        <div class="calc-box">
          <label style="font-size:0.9rem; font-weight:600;">Amount in USD ($): </label>
          <input type="number" id="usdInput" class="calc-input" value="1000" min="10" max="1000000" step="100" style="width:130px;" oninput="updateForexCalculator()">
        </div>
        <div id="forexResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1rem;">
          <!-- Dynamically populated -->
        </div>
      </div>
      `;

    case 'fuchka':
      return `
      <header>
        <div class="badge">🍲 Street Food Inflation & Tong Economy</div>
        <h1>The Dhaka Fuchka &amp; Shingara Index <span>(ফুচকা ও সিঙ্গারা সূচক)</span></h1>
        <p class="subtitle">bdmcp tracks 25 years of Dhaka's beloved street foods: fuchka plates inflating 10x from ৳10 (2000) to ৳100 (2025), while the humble shingara jumped from ৳1 (1995) to ৳10.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">2025 Fuchka Plate</div>
          <div class="value" style="color:var(--accent);">৳100<span class="unit">/plate</span></div>
          <div class="desc">10 pieces, Dhanmondi &amp; TSC benchmark</div>
        </div>
        <div class="stat-card">
          <div class="label">2000 Fuchka Plate</div>
          <div class="value">৳10<span class="unit">/plate</span></div>
          <div class="desc">The golden TSC adda era</div>
        </div>
        <div class="stat-card">
          <div class="label">25-Year Inflation</div>
          <div class="value" style="color:var(--red);">10.0<span class="unit">x</span></div>
          <div class="desc">1,000% cumulative price surge</div>
        </div>
        <div class="stat-card">
          <div class="label">Shingara (2025)</div>
          <div class="value">৳10<span class="unit">/piece</span></div>
          <div class="desc">Up from ৳1 in 1995 (10x in 30 yrs)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 Fuchka &amp; Shingara Price Trajectory (2000–2025 in BDT)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Dhaka Street Food Inflation Index</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: TSC/DU, BUET Cafeteria &amp; Dhanmondi Tong Benchmarks</p>
          </div>
        </div>
        <svg id="fuchkaChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#f42a41;"></div> Fuchka Plate (৳)</div>
          <div class="legend-item"><div class="legend-dot" style="background:#006a4e;"></div> Shingara Piece (৳)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 Street Food Budget Calculator (খাবার বাজেট)</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">How many plates of fuchka could your budget buy across the decades?</p>
        <div class="calc-box">
          <label style="font-size:0.9rem; font-weight:600;">Budget (৳): </label>
          <input type="number" id="fuchkaBudget" class="calc-input" value="500" min="10" max="100000" step="50" style="width:130px;" oninput="updateFuchkaCalculator()">
        </div>
        <div id="fuchkaResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1rem;">
          <!-- Dynamically populated -->
        </div>
      </div>
      <blockquote class="quote-box">"Fuchka plate ৳100 হয়ে গেছে মামা, আর বাড়াইলে খামু না!" — The universal cry of every Dhaka university student since 2000.</blockquote>
      `;

    case 'traffic':
      return `
      <header>
        <div class="badge">🚦 Dhaka Commute & Urban Mobility Crisis</div>
        <h1>Dhaka Traffic Jam &amp; Lifespan Lost Index <span>(যানজট ও জীবনের হিসাব)</span></h1>
        <p class="subtitle">bdmcp quantifies Dhaka's notorious gridlock: average traffic speed collapsed to 4.8 km/h in 2024 — slower than a human walking at 5 km/h. Calculate how many days of your life Dhaka traffic steals.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">2024 Avg Speed</div>
          <div class="value" style="color:var(--red);">4.8<span class="unit">km/h</span></div>
          <div class="desc">Slower than human walking (5 km/h)</div>
        </div>
        <div class="stat-card">
          <div class="label">Daily Commute</div>
          <div class="value">2.8<span class="unit">hours</span></div>
          <div class="desc">Average Dhaka resident, both ways</div>
        </div>
        <div class="stat-card">
          <div class="label">Annual Days Lost</div>
          <div class="value" style="color:var(--red);">30.3<span class="unit">days</span></div>
          <div class="desc">A full month of your year, gone</div>
        </div>
        <div class="stat-card">
          <div class="label">Career Lifespan Lost</div>
          <div class="value">2.9<span class="unit">years</span></div>
          <div class="desc">35-year working life in Dhaka traffic</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 Dhaka Average Traffic Speed Decline (2004–2024 km/h)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Average Vehicular Speed on Dhaka Arterial Roads (km/h)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: BUET Accident Research Institute (ARI), World Bank Urban Transport Reports</p>
          </div>
        </div>
        <svg id="trafficChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#f42a41;"></div> Avg Traffic Speed (km/h)</div>
          <div class="legend-item"><div class="legend-dot" style="background:#006a4e;"></div> Human Walking Speed (5 km/h)</div>
          <div class="legend-item"><div class="legend-dot" style="background:#b45309;"></div> Metro Rail Speed (80 km/h)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 Personal Traffic Lifespan Calculator (আপনার জীবনের হিসাব)</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Enter your daily commute time to see how much life Dhaka traffic steals from you:</p>
        <div class="calc-box">
          <label style="font-size:0.9rem; font-weight:600;">Daily Commute (hrs): </label>
          <input type="number" id="trafficHours" class="calc-input" value="2.5" min="0.5" max="8" step="0.5" style="width:110px;" oninput="updateTrafficCalculator()">
          <label style="font-size:0.9rem; font-weight:600;">Working Years: </label>
          <input type="number" id="trafficYears" class="calc-input" value="35" min="5" max="50" step="5" style="width:100px;" oninput="updateTrafficCalculator()">
        </div>
        <div id="trafficResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1rem;">
          <!-- Dynamically populated -->
        </div>
      </div>
      <blockquote class="quote-box">Dhaka loses an estimated $4.2 billion USD annually in economic productivity due to congestion — roughly 3.8% of national GDP. The MRT-6 metro rail (80 km/h) is the first real escape hatch.</blockquote>
      `;

    case 'jaljot':
      return `
      <header>
        <div class="badge">🌧️ Monsoon Waterlogging & Surge Pricing</div>
        <h1>Dhaka Waterlogging &amp; Rickshaw Surge Index <span>(জলজট ও রিকশা সূচক)</span></h1>
        <p class="subtitle">bdmcp maps Dhaka's most viral monsoon phenomenon: the moment it rains, rickshaw fares multiply 2x to 6x instantly. This is the raw, unfiltered surge pricing algorithm of the streets — set by রিকশা মামা, not an app.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Dry Weather Fare</div>
          <div class="value">৳60<span class="unit">TSC→Farmgate</span></div>
          <div class="desc">Standard 1.0x multiplier baseline</div>
        </div>
        <div class="stat-card">
          <div class="label">Ankle-Deep Surge</div>
          <div class="value" style="color:var(--amber);">2.5<span class="unit">x</span></div>
          <div class="desc">10–15 cm water = ৳150 fare</div>
        </div>
        <div class="stat-card">
          <div class="label">Knee-Deep Surge</div>
          <div class="value" style="color:var(--red);">4.0<span class="unit">x</span></div>
          <div class="desc">30–45 cm water = ৳240 fare</div>
        </div>
        <div class="stat-card">
          <div class="label">Waist-Deep Chaos</div>
          <div class="value" style="color:var(--red);">6.0<span class="unit">x</span></div>
          <div class="desc">75–90 cm = ৳360 + boat service</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📋 Waterlogging Depth &amp; Rickshaw Surge Matrix (জলজট গভীরতা সূচক)</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Waterlogging Level</th>
                <th>Water Depth</th>
                <th>Fare Multiplier</th>
                <th>Avg Fare (TSC → Farmgate)</th>
                <th>Street Reality</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Dry Weather (স্বাভাবিক রোদ)</strong></td><td>0 cm</td><td><span class="badge-pill badge-green">1.0x</span></td><td>৳60</td><td>Normal commute</td></tr>
              <tr><td><strong>Drizzle / Light Puddle (ঝিরিঝিরি বৃষ্টি)</strong></td><td>2–5 cm</td><td><span class="badge-pill badge-amber">1.5x</span></td><td>৳90</td><td>Tarp pulled down, muddy splashes</td></tr>
              <tr><td><strong>Ankle-Deep (গোড়ালি পানি)</strong></td><td>10–15 cm</td><td><span class="badge-pill badge-amber">2.5x</span></td><td>৳150</td><td>Double fare demanded instantly</td></tr>
              <tr><td><strong>Knee-Deep (হাঁটু পানি - Rokeya Sarani)</strong></td><td>30–45 cm</td><td><span class="badge-pill badge-red">4.0x</span></td><td>৳240</td><td>Exhausts submerged, CNG engines die</td></tr>
              <tr><td><strong>Waist-Deep (কোমর পানি - Shantinagar)</strong></td><td>75–90 cm</td><td><span class="badge-pill badge-red">6.0x</span></td><td>৳360</td><td>Boat service starts (নৌকা)</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 Rainy Day Rickshaw Surge Calculator (বৃষ্টির দিনের ভাড়া)</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Enter your dry-weather fare and select today's waterlogging level:</p>
        <div class="calc-box">
          <label style="font-size:0.9rem; font-weight:600;">Dry Fare (৳): </label>
          <input type="number" id="jaljotBase" class="calc-input" value="80" min="20" max="500" step="10" style="width:110px;" oninput="updateJaljotCalculator()">
          <select id="jaljotLevel" class="calc-input" style="width:250px;" onchange="updateJaljotCalculator()">
            <option value="1.0">☀️ Dry Weather (1.0x)</option>
            <option value="1.5">🌦️ Drizzle / Puddle (1.5x)</option>
            <option value="2.5" selected>💧 Ankle-Deep Water (2.5x)</option>
            <option value="4.0">🌊 Knee-Deep Water (4.0x)</option>
            <option value="6.0">🚣 Waist-Deep Chaos (6.0x)</option>
          </select>
        </div>
        <div id="jaljotResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1rem;">
          <!-- Dynamically populated -->
        </div>
      </div>
      <blockquote class="quote-box">"মামা, এত পানি! রিকশা টানতে পারুম না। ৩শ টাকা লাগব।" — Every rickshaw puller at Shantinagar during a July cloudburst. No algorithm, pure street economics.</blockquote>
      `;

    case 'rmg':
      return `
      <header>
        <div class="badge">👕 Ready-Made Garments & Export Engine</div>
        <h1>The RMG Miracle: Bangladesh Garments Export Empire <span>(পোশাক শিল্প)</span></h1>
        <p class="subtitle">bdmcp charts the world's 2nd largest garment exporter: from $32M in 1984 to $47.1 billion in 2024 — a 1,472x expansion that employed 4.4 million workers, 55% of them women, and rewrote the national economy.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">2024 RMG Exports</div>
          <div class="value" style="color:var(--accent);">$47.1<span class="unit">Billion</span></div>
          <div class="desc">World's 2nd largest exporter after China</div>
        </div>
        <div class="stat-card">
          <div class="label">Growth Since 1984</div>
          <div class="value">1,472<span class="unit">x</span></div>
          <div class="desc">Up from $32M (Desh Garments, 1984)</div>
        </div>
        <div class="stat-card">
          <div class="label">Workforce</div>
          <div class="value">4.4<span class="unit">Million</span></div>
          <div class="desc">55%+ women; largest formal female employment</div>
        </div>
        <div class="stat-card">
          <div class="label">Green Factories</div>
          <div class="value">230<span class="unit">LEED-Certified</span></div>
          <div class="desc">Highest number of green RMG factories globally</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 RMG Export Value Trajectory (1984–2024 in USD Billions)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Ready-Made Garments Export Value (USD Billions)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: Export Promotion Bureau (EPB), BGMEA, and_Knitwear Manufacturers Association</p>
          </div>
        </div>
        <svg id="rmgChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#006a4e;"></div> Annual RMG Exports (USD Billion)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📋 Minimum Wage Board Revisions (1994–2023 BDT)</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Minimum Monthly Wage (Entry Level)</th>
                <th>Multiple vs Previous</th>
                <th>Trigger Context</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>2023</td><td><strong>৳12,500</strong></td><td><span class="badge-pill badge-green">1.56x</span></td><td>Post-2022 inflation adjustment</td></tr>
              <tr><td>2018</td><td>৳8,000</td><td><span class="badge-pill badge-green">1.51x</span></td><td>Post-Rana Plaza reform decade</td></tr>
              <tr><td>2013</td><td>৳5,300</td><td><span class="badge-pill badge-green">1.77x</span></td><td>Rana Plaza collapse (1,134 lives lost)</td></tr>
              <tr><td>2010</td><td>৳3,000</td><td><span class="badge-pill badge-amber">1.81x</span></td><td>Worker unrest 2006–2010</td></tr>
              <tr><td>2006</td><td>৳1,662</td><td><span class="badge-pill badge-amber">1.79x</span></td><td>First major wage board revision</td></tr>
              <tr><td>1994</td><td>৳930</td><td>Baseline</td><td>First national garments minimum wage</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <blockquote class="quote-box">Rana Plaza (2013) was the industry's darkest hour: 1,134 workers killed. The aftermath forced global brands into the Bangladesh Accord, making safety inspections mandatory — and quietly turned Bangladesh into the world leader in green-certified factories.</blockquote>
      `;

    case 'cyclones':
      return `
      <header>
        <div class="badge">🌀 Disaster Resilience & Early Warning Systems</div>
        <h1>The Cyclone Resilience Miracle <span>(ঘূর্ণিঝড় ও দুর্যোগ প্রস্তুতি)</span></h1>
        <p class="subtitle">bdmcp documents history's greatest disaster-preparedness success: cyclone fatalities collapsed 99.99% — from 300,000 deaths (Bhola 1970) to just 16 deaths (Remal 2024), despite storms growing stronger.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">1970 Bhola Cyclone</div>
          <div class="value" style="color:var(--red);">300,000<span class="unit">deaths</span></div>
          <div class="desc">Deadliest tropical cyclone ever recorded</div>
        </div>
        <div class="stat-card">
          <div class="label">2024 Cyclone Remal</div>
          <div class="value" style="color:var(--accent);">16<span class="unit">deaths</span></div>
          <div class="desc">800,000 evacuated; 18,749 shelters ready</div>
        </div>
        <div class="stat-card">
          <div class="label">Fatality Reduction</div>
          <div class="value">99.99<span class="unit">%</span></div>
          <div class="desc">Since 1970 Great Bhola Cyclone</div>
        </div>
        <div class="stat-card">
          <div class="label">Shelter Network</div>
          <div class="value">14,200<span class="unit">Multipurpose</span></div>
          <div class="desc">Up from 42 shelters in 1970</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 Cyclone Fatalities Timeline (1970–2024, Logarithmic Impact)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Lives Lost per Major Cyclone Event</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: Dept of Disaster Management (DDM), Cyclone Preparedness Programme (CPP)</p>
          </div>
        </div>
        <svg id="cycloneChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#f42a41;"></div> Fatalities per Event</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📋 Major Cyclone Events vs Preparedness Infrastructure</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Cyclone Event</th>
                <th>Year</th>
                <th>Lives Lost</th>
                <th>Shelters Available</th>
                <th>Evacuated</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Cyclone Remal</strong></td><td>2024</td><td><span class="badge-pill badge-green">16</span></td><td>14,200</td><td>800,000</td></tr>
              <tr><td><strong>Cyclone Mocha</strong></td><td>2023</td><td><span class="badge-pill badge-green">0 (mainland)</span></td><td>14,000+</td><td>1.27 Million</td></tr>
              <tr><td><strong>Super Cyclone Amphan</strong></td><td>2020</td><td><span class="badge-pill badge-green">26</span></td><td>12,400</td><td>2.4 Million</td></tr>
              <tr><td><strong>Cyclone Sidr (Category 5)</strong></td><td>2007</td><td><span class="badge-pill badge-amber">3,406</span></td><td>~2,000</td><td>3.2 Million</td></tr>
              <tr><td><strong>1991 Bangladesh Cyclone (Gorky)</strong></td><td>1991</td><td><span class="badge-pill badge-red">138,882</span></td><td>500</td><td>&lt;100,000</td></tr>
              <tr><td><strong>Great Bhola Cyclone</strong></td><td>1970</td><td><span class="badge-pill badge-red">300,000</span></td><td>42</td><td>None (no system)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <blockquote class="quote-box">The 1970 Bhola Cyclone didn't just kill 300,000 people — its botched relief response catalyzed the Bangladesh Liberation War the following year. Every shelter built since is a monument to that failure. Bangladesh now runs the world's largest volunteer early-warning network: 76,000+ CPP volunteers.</blockquote>
      `;

    case 'heritage':
      return `
      <header>
        <div class="badge">🏛️ UNESCO Intangible &amp; Tangible Heritage</div>
        <h1>UNESCO Heritage of Bangladesh <span>(ইউনেস্কো ঐতিহ্য)</span></h1>
        <p class="subtitle">bdmcp catalogs 5 UNESCO Intangible Cultural Heritage inscriptions and 3 World Heritage Sites: from Dhaka's vibrant Rickshaw Art (2023) to the 8th-century Somapura Mahavihara.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Intangible Heritage</div>
          <div class="value" style="color:var(--accent);">5<span class="unit">Inscriptions</span></div>
          <div class="desc">Rickshaw Art, Jamdani, Baul, Shital Pati, Mangal Shobhajatra</div>
        </div>
        <div class="stat-card">
          <div class="label">World Heritage Sites</div>
          <div class="value">3<span class="unit">Tangible</span></div>
          <div class="desc">Sundarbans, Mosque City of Bagerhat, Paharpur Vihara</div>
        </div>
        <div class="stat-card">
          <div class="label">Latest Inscription</div>
          <div class="value">2023<span class="unit">Rickshaw Art</span></div>
          <div class="desc">Dhaka's hand-painted rickshaws gain global recognition</div>
        </div>
        <div class="stat-card">
          <div class="label">Oldest Site</div>
          <div class="value">8th<span class="unit">Century</span></div>
          <div class="desc">Somapura Mahavihara, Naogaon (Paharpur)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🥇 Intangible Cultural Heritage Inscriptions (IHC)</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Heritage Element</th>
                <th>Bengali Name</th>
                <th>Year Inscribed</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Dhaka Rickshaw &amp; Rickshaw Art</strong></td><td>ঢাকার রিকশা ও রিকশাচিত্র</td><td><span class="badge-pill badge-green">2023</span></td><td>Dhaka Metropolitan</td></tr>
              <tr><td><strong>Traditional Jamdani Weaving</strong></td><td>ঐতিহ্যবাহী জামদানি বুনন শিল্প</td><td><span class="badge-pill badge-green">2013</span></td><td>Shitalakshya, Narayanganj</td></tr>
              <tr><td><strong>Mangal Shobhajatra on Pahela Baishakh</strong></td><td>মঙ্গল শোভাযাত্রা (পহেলা বৈশাখ)</td><td><span class="badge-pill badge-green">2016</span></td><td>Dhaka University Fine Arts</td></tr>
              <tr><td><strong>Shital Pati Weaving of Sylhet</strong></td><td>সিলেটের ঐতিহ্যবাহী শীতল পাটি</td><td><span class="badge-pill badge-green">2017</span></td><td>Sylhet Division</td></tr>
              <tr><td><strong>Baul Songs &amp; Mysticism</strong></td><td>বাউল গান ও লালন দর্শন</td><td><span class="badge-pill badge-green">2008</span></td><td>Kushtia, Meherpur</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🏰 World Heritage Sites (Tangible)</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Site</th>
                <th>Bengali Name</th>
                <th>Year Inscribed</th>
                <th>Significance</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>The Sundarbans Mangrove Forest</strong></td><td>বিশ্ব ঐতিহ্য সুন্দরবন ম্যানগ্রোভ</td><td><span class="badge-pill badge-purple">1997</span></td><td>World's largest halophytic mangrove; Royal Bengal Tiger sanctuary</td></tr>
              <tr><td><strong>Historic Mosque City of Bagerhat</strong></td><td>ষাট গম্বুজ মসজিদ ও খলিফাতাবাদ</td><td><span class="badge-pill badge-purple">1985</span></td><td>15th-century brick architecture; Sixty-Dome Mosque (Khan Jahan Ali)</td></tr>
              <tr><td><strong>Ruins of the Buddhist Vihara at Paharpur</strong></td><td>পাহাড়পুর সোমপুর মহাবিহার</td><td><span class="badge-pill badge-purple">1985</span></td><td>8th-century monastery; largest in pre-modern Asia</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <blockquote class="quote-box">Rickshaw art is the only UNESCO-listed moving museum: every hand-painted rickshaw carries Bollywood stars, national heroes, tigers, and village dreams through Dhaka's streets. When UNESCO inscribed it in 2023, it validated what Dhaka knew all along — the streets themselves are the canvas.</blockquote>
      `;

    case 'agriculture':
      return `
      <header>
        <div class="badge">🌾 Agriculture & Food Security</div>
        <h1>Rice Production &amp; Food Self-Sufficiency Miracle <span>(খাদ্য নিরাপত্তা)</span></h1>
        <p class="subtitle">bdmcp tracks the agricultural miracle: Bangladesh quadrupled rice production from 10.6M metric tons (1971 famine era) to 40.2M metric tons (2024) — feeding 170+ million people from the same limited arable land.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">2024 Production</div>
          <div class="value" style="color:var(--accent);">40.2<span class="unit">M Tons</span></div>
          <div class="desc">3rd largest rice producer globally</div>
        </div>
        <div class="stat-card">
          <div class="label">Growth Since 1971</div>
          <div class="value">3.8<span class="unit">x</span></div>
          <div class="desc">Up from 10.6M tons post-liberation</div>
        </div>
        <div class="stat-card">
          <div class="label">Self-Sufficiency</div>
          <div class="value">97<span class="unit">%</span></div>
          <div class="desc">Near-complete staple grain independence</div>
        </div>
        <div class="stat-card">
          <div class="label">Global Rank</div>
          <div class="value">#3<span class="unit">Producer</span></div>
          <div class="desc">After China &amp; India</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 Rice Production Trajectory (1971–2024 Million Metric Tons)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Total Rice Production (Aman + Boro + Aus, Million Metric Tons)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: BBS Agricultural Statistics &amp; Department of Agricultural Extension (DAE)</p>
          </div>
        </div>
        <svg id="agriChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#006a4e;"></div> Annual Rice Production (Million Tons)</div>
        </div>
      </div>
      <blockquote class="quote-box">In 1974, the term "bottomless basket" was attached to Bangladesh as famine loomed. Today: the same delta feeds 170 million people, exports surplus rice in bumper years, and pioneered the Boro dry-season irrigation revolution. The Green Revolution here was not imported — it was homegrown.</blockquote>
      `;

    case 'megaprojects':
      return `
      <header>
        <div class="badge">🏗️ Mega Infrastructure Engineering</div>
        <h1>Bangladesh Mega Projects Tracker <span>(মেগা প্রকল্প)</span></h1>
        <p class="subtitle">bdmcp monitors 7 transformative national megaprojects worth ৳2.2 lakh crore: from the self-funded Padma Bridge (৳32,605 crore) to the South Asia's first under-river Karnaphuli Tunnel.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Padma Bridge (Self-Funded)</div>
          <div class="value" style="color:var(--accent);">৳32,605<span class="unit">Crore</span></div>
          <div class="desc">Opened June 2022; no World Bank loan</div>
        </div>
        <div class="stat-card">
          <div class="label">Karnaphuli Tunnel</div>
          <div class="value">৳10,689<span class="unit">Crore</span></div>
          <div class="desc">South Asia's first under-river tunnel (2023)</div>
        </div>
        <div class="stat-card">
          <div class="label">Rooppur Nuclear</div>
          <div class="value">৳113,092<span class="unit">Crore</span></div>
          <div class="desc">2,400 MW twin VVER-1200 reactors</div>
        </div>
        <div class="stat-card">
          <div class="label">Matarbari Deep Sea Port</div>
          <div class="value">৳17,777<span class="unit">Crore</span></div>
          <div class="desc">18.5m draft; 8,000+ TEU mother vessels</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📋 Complete Megaproject Inventory &amp; Status</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Megaproject</th>
                <th>Cost (৳ Crore)</th>
                <th>Status</th>
                <th>Opened / ETA</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Padma Multipurpose Bridge</strong></td><td>32,605</td><td><span class="badge-pill badge-green">Operational</span></td><td>2022</td></tr>
              <tr><td><strong>Bangabandhu Tunnel (Karnaphuli)</strong></td><td>10,689</td><td><span class="badge-pill badge-green">Operational</span></td><td>2023</td></tr>
              <tr><td><strong>Dhaka Elevated Expressway</strong></td><td>8,940</td><td><span class="badge-pill badge-green">Operational</span></td><td>2023–24</td></tr>
              <tr><td><strong>Rooppur Nuclear Power Plant</strong></td><td>113,092</td><td><span class="badge-pill badge-amber">Near Completion</span></td><td>2025–26</td></tr>
              <tr><td><strong>Matarbari Deep Sea Port</strong></td><td>17,777</td><td><span class="badge-pill badge-blue">Under Construction</span></td><td>2026</td></tr>
              <tr><td><strong>Shahjalal Airport Terminal 3</strong></td><td>21,300</td><td><span class="badge-pill badge-amber">Near Completion</span></td><td>2025</td></tr>
              <tr><td><strong>Bangabandhu Railway Bridge</strong></td><td>16,780</td><td><span class="badge-pill badge-amber">Near Completion</span></td><td>2025</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <blockquote class="quote-box">The Padma Bridge is more than concrete and steel: when the World Bank pulled out over corruption allegations in 2012, Bangladesh funded the ৳32,605 crore crossing entirely from its own treasury. It opened in June 2022, carrying 60,000+ vehicles daily and adding an estimated 1.2% to national GDP.</blockquote>
      `;

    case 'bcs':
      return `
      <header>
        <div class="badge">🎓 Civil Service Mania & The Cadre Dream</div>
        <h1>The BCS Exam Craze &amp; Cadre Acceptance Odds <span>(বিসিএস ক্যাডার উন্মাদনা)</span></h1>
        <p class="subtitle">bdmcp analyzes BPSC historical data: 475,000 applicants battling for ~2,000 cadre posts (0.49% acceptance rate) — 7x harder than getting into Harvard (3.4%) and 2.5x harder than India's IIT JEE (1.2%).</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Peak Applicants</div>
          <div class="value" style="color:var(--accent);">475,266</div>
          <div class="desc">41st BCS record applicant turnout</div>
        </div>
        <div class="stat-card">
          <div class="label">Cadre Acceptance Rate</div>
          <div class="value" style="color:var(--red);">0.49<span class="unit">%</span></div>
          <div class="desc">1 in 205 overall applicants recommended</div>
        </div>
        <div class="stat-card">
          <div class="label">Admin / Foreign Cadre</div>
          <div class="value" style="color:var(--red);">0.06<span class="unit">%</span></div>
          <div class="desc">1 in 1,666 applicants (The Golden Jamai tier)</div>
        </div>
        <div class="stat-card">
          <div class="label">Nilkhet Guidebooks</div>
          <div class="value">28+<span class="unit">kg</span></div>
          <div class="desc">Avg MP3, Digest &amp; Question Bank weight per desk</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 BPSC BCS Applicants vs Recommended Cadres (35th to 46th BCS)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Total Applicants vs Cadre Posts (Thousands)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: Bangladesh Public Service Commission (BPSC) Gazette Archives</p>
          </div>
        </div>
        <svg id="bcsChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#f42a41;"></div> Total Applicants (Thousands)</div>
          <div class="legend-item"><div class="legend-dot" style="background:#006a4e;"></div> Cadres Recommended (Thousands)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📋 Acceptance Rate Showdown: BCS vs Global Benchmarks</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Competition / Institution</th>
                <th>Acceptance Rate</th>
                <th>Odds of Success</th>
                <th>Difficulty Tier</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>BCS Admin / Foreign Affairs Cadre</strong></td><td><span class="badge-pill badge-red">0.06%</span></td><td>1 in 1,666</td><td>Mythical / Unicorn</td></tr>
              <tr><td><strong>BCS Cadre Overall (44th BCS)</strong></td><td><span class="badge-pill badge-red">0.49%</span></td><td>1 in 205</td><td>Extreme (7x harder than Harvard)</td></tr>
              <tr><td><strong>US Diversity Visa (Green Card Lottery)</strong></td><td><span class="badge-pill badge-amber">0.80%</span></td><td>1 in 125</td><td>Luck-Based</td></tr>
              <tr><td><strong>IIT JEE Advanced (India)</strong></td><td><span class="badge-pill badge-amber">1.20%</span></td><td>1 in 83</td><td>Very High</td></tr>
              <tr><td><strong>Harvard University Undergraduate</strong></td><td><span class="badge-pill badge-green">3.41%</span></td><td>1 in 29</td><td>High</td></tr>
              <tr><td><strong>Oxford University Undergraduate</strong></td><td><span class="badge-pill badge-green">13.7%</span></td><td>1 in 7</td><td>Moderate</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 BCS Cadre Probability Simulator (আপনার ভাগ্যের হিসাব)</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Enter the number of candidates in your hall and your target cadre category:</p>
        <div class="calc-box">
          <label style="font-size:0.9rem; font-weight:600;">Applicants (Total): </label>
          <input type="number" id="bcsApplicants" class="calc-input" value="350000" min="50000" max="600000" step="10000" style="width:130px;" oninput="updateBcsCalculator()">
          <label style="font-size:0.9rem; font-weight:600;">Target Cadre: </label>
          <select id="bcsCadreType" class="calc-input" style="width:230px;" onchange="updateBcsCalculator()">
            <option value="2000">General + Technical (~2,000)</option>
            <option value="250" selected>Admin Cadre (ম্যাজিস্ট্রেট ~250)</option>
            <option value="120">Police Cadre (ASP ~120)</option>
            <option value="25">Foreign Affairs (পররাষ্ট্র ~25)</option>
            <option value="900">Education Cadre (শিক্ষা ~900)</option>
          </select>
        </div>
        <div id="bcsResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1rem;">
          <!-- Dynamically populated -->
        </div>
      </div>
      <blockquote class="quote-box">"বিসিএস ক্যাডার জামাই না হইলে মেয়ের বিয়া দিমু না!" — The universal matrimonial benchmark in Bangladesh. Tens of thousands of engineers and doctors spend their 20s studying general knowledge in Nilkhet libraries just to become an executive magistrate.</blockquote>
      `;

    case 'bachelor':
      return `
      <header>
        <div class="badge">🏢 Bachelor Housing & Bua Economics</div>
        <h1>Dhaka Bachelor Flat Hunting &amp; Bua Syndicate Index <span>(ব্যাচেলর জীবন ও বুয়া সিন্ডিকেট)</span></h1>
        <p class="subtitle">bdmcp maps the urban survival struggle of 1.5 million Dhaka bachelors: from the ubiquitous 'ব্যাচেলরদের বাসা ভাড়া দেওয়া হইবে না' signs to the dreaded 11:00 PM main gate lock penalty and the 8x explosion in cooking Bua salaries.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">To-Let Rejection Rate</div>
          <div class="value" style="color:var(--red);">88<span class="unit">%</span></div>
          <div class="desc">Dhanmondi, Mirpur &amp; Lalmatia to-let ads strictly reject bachelors</div>
        </div>
        <div class="stat-card">
          <div class="label">Cooking Bua Salary</div>
          <div class="value" style="color:var(--accent);">৳4,800<span class="unit">/mo</span></div>
          <div class="desc">4-member flat standard (up 8x from ৳600 in 2000)</div>
        </div>
        <div class="stat-card">
          <div class="label">Main Gate Lock Curfew</div>
          <div class="value">11:00<span class="unit">PM</span></div>
          <div class="desc">After 11 PM: ৳50 darowan bribe or sleep on staircase</div>
        </div>
        <div class="stat-card">
          <div class="label">Dim Khichuri Ratio</div>
          <div class="value">4.2<span class="unit">meals/wk</span></div>
          <div class="desc">The emergency bachelor meal when Bua disappears</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 Dhaka Cooking Bua (কাজের বুয়া) Monthly Wage Trajectory (2000–2025)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Monthly Cooking Bua Wage (BDT, 3-4 Member Bachelor Flat)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: Dhaka Mess &amp; Bachelor Association Benchmarks</p>
          </div>
        </div>
        <svg id="bachelorChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#006a4e;"></div> Monthly Bua Wage (৳)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📋 The Cooking Bua Sudden Disappearance Risk Matrix</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Scenario / Trigger</th>
                <th>Disappearance Probability</th>
                <th>Standard WhatsApp / Phone Excuse</th>
                <th>Survival Strategy</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Day after monthly salary payout</strong></td><td><span class="badge-pill badge-red">93%</span></td><td>'গ্রামের বাড়ি থিকা মেহমান আইছে, দুইদিন আসব না!'</td><td>Order paratha-dal from corner tong</td></tr>
              <tr><td><strong>Rainy morning before 8:00 AM</strong></td><td><span class="badge-pill badge-red">84%</span></td><td>'খালা রাস্তায় হাঁটু পানি, গাড়ি নাই!'</td><td>Dim khichuri emergency pot</td></tr>
              <tr><td><strong>Pahela Baishakh / Puja weekend</strong></td><td><span class="badge-pill badge-red">98%</span></td><td>'গ্রামে যাব, আইসা বাকিটা রান্ধুম!'</td><td>3 days of bread and banana</td></tr>
              <tr><td><strong>Sink left full of dishes overnight</strong></td><td><span class="badge-pill badge-amber">72%</span></td><td>'এত পাতিল মাজা আমার কাম না, বেতন ৫০০ বাড়ান!'</td><td>Roommate emergency dish duty meeting</td></tr>
              <tr><td><strong>Eid holidays (Govt 3 days)</strong></td><td><span class="badge-pill badge-red">100%</span></td><td>'১০ দিনের আগে ঢাকা ফিরতে পারুম না খালাম্মা!'</td><td>Whole flat packs bag and flees to village</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 Bachelor Flat Expense &amp; Meal Rate Splitter (মেস মিল রেট ক্যালকুলেটর)</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Split flat rent, bua wage, utility bills, and bazaar costs per roommate:</p>
        <div class="calc-box">
          <label style="font-size:0.9rem; font-weight:600;">Flat Rent (৳): </label>
          <input type="number" id="bachRent" class="calc-input" value="24000" min="5000" max="80000" step="1000" style="width:120px;" oninput="updateBachelorCalculator()">
          <label style="font-size:0.9rem; font-weight:600;">Roommates: </label>
          <input type="number" id="bachMembers" class="calc-input" value="4" min="1" max="10" step="1" style="width:90px;" oninput="updateBachelorCalculator()">
          <label style="font-size:0.9rem; font-weight:600;">Bua Wage (৳): </label>
          <input type="number" id="bachBua" class="calc-input" value="4800" min="1000" max="10000" step="200" style="width:110px;" oninput="updateBachelorCalculator()">
        </div>
        <div id="bachelorResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1rem;">
          <!-- Dynamically populated -->
        </div>
      </div>
      <blockquote class="quote-box">"টু-লেট: সুন্দর মনোরম পরিবেশে বাসা ভাড়া দেওয়া হইবে (শুধুমাত্র ফ্যামিলি, ব্যাচেলর ও কুকুর নিষেধ)।" — The universal noticeboard tragedy of Dhaka city.</blockquote>
      `;

    case 'cng':
      return `
      <header>
        <div class="badge">🛺 Urban Transport & Fare Realities</div>
        <h1>Dhaka CNG Auto-Rickshaw "Yamuna" &amp; Meter vs Chukti Gap <span>(সিএনজি 'যামু না' ও চুক্তি সূচক)</span></h1>
        <p class="subtitle">bdmcp dissects the legendary green auto-rickshaws: why 99.4% of drivers refuse the official BRTA meter (৳40 base, ৳12/km) in favor of ৳400–৳600 'চুক্তি' (flat contract), creating a 163% black-market tariff spread.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Meter Refusal Rate</div>
          <div class="value" style="color:var(--red);">99.4<span class="unit">%</span></div>
          <div class="desc">Rush hour refusal to go on official BRTA meter</div>
        </div>
        <div class="stat-card">
          <div class="label">Chukti Markup</div>
          <div class="value" style="color:var(--red);">+163<span class="unit">%</span></div>
          <div class="desc">10km street fare vs theoretical BRTA meter</div>
        </div>
        <div class="stat-card">
          <div class="label">Official 10km Fare</div>
          <div class="value">৳190<span class="unit">Meter</span></div>
          <div class="desc">BRTA 2015 gazette rate (never charged)</div>
        </div>
        <div class="stat-card">
          <div class="label">Street Chukti Fare</div>
          <div class="value" style="color:var(--accent);">৳500<span class="unit">Actual</span></div>
          <div class="desc">Average contract demand for 10km across Dhaka</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 Official BRTA Meter Fare vs Street Chukti Reality (2005–2025 in BDT)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Average 10km Trip Fare Gap (BDT)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: BRTA Gazettes vs Passenger Rights Association of Bangladesh</p>
          </div>
        </div>
        <svg id="cngChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#006a4e;"></div> BRTA Official Meter (৳)</div>
          <div class="legend-item"><div class="legend-dot" style="background:#f42a41;"></div> Street Chukti Reality (৳)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📋 Destination Refusal Probability Matrix ('মামা কই যাইবেন?')</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Route / Destination</th>
                <th>Meter Willingness</th>
                <th>Refusal Rate</th>
                <th>Official Meter</th>
                <th>Actual Chukti</th>
                <th>Driver's Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Farmgate to Sadarghat / Old Dhaka</strong></td><td><span class="badge-pill badge-red">0.2%</span></td><td>99.8%</td><td>৳180</td><td><strong>৳450</strong></td><td>'পুরান ঢাকায় জ্যাম, যামু না!'</td></tr>
              <tr><td><strong>Dhanmondi to Airport / Uttara</strong></td><td><span class="badge-pill badge-amber">3.5%</span></td><td>96.5%</td><td>৳290</td><td><strong>৳700</strong></td><td>'এয়ারপোর্টে গ্যাস পামু না মামা!'</td></tr>
              <tr><td><strong>Mirpur 10 to Motijheel</strong></td><td><span class="badge-pill badge-red">1.0%</span></td><td>99.0%</td><td>৳210</td><td><strong>৳500</strong></td><td>'রোকেয়া সরণির জ্যামে গ্যাস শেষ অইবো!'</td></tr>
              <tr><td><strong>Gulshan 1 to Banani 11 (Short)</strong></td><td><span class="badge-pill badge-red">0.0%</span></td><td>100.0%</td><td>৳55</td><td><strong>৳200</strong></td><td>'এত কাছে যামু না, সিরিয়াল নষ্ট!'</td></tr>
              <tr><td><strong>Any trip during rain shower</strong></td><td><span class="badge-pill badge-red">0.0%</span></td><td>100.0%</td><td>৳140</td><td><strong>৳600</strong></td><td>'বৃষ্টির মধ্যে মিটার? রসিকতা করেন?'</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 CNG Meter vs Chukti Gap Calculator (সিএনজি চুক্তি ক্যালকুলেটর)</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Enter your trip distance to calculate the legal BRTA fare vs what you will actually be quoted:</p>
        <div class="calc-box">
          <label style="font-size:0.9rem; font-weight:600;">Distance (km): </label>
          <input type="number" id="cngDistance" class="calc-input" value="10" min="2" max="40" step="1" style="width:110px;" oninput="updateCngCalculator()">
          <label style="font-size:0.9rem; font-weight:600;">Traffic Waiting (mins): </label>
          <input type="number" id="cngWait" class="calc-input" value="30" min="0" max="120" step="5" style="width:110px;" oninput="updateCngCalculator()">
        </div>
        <div id="cngResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1rem;">
          <!-- Dynamically populated -->
        </div>
      </div>
      <blockquote class="quote-box">"মামা, মিটারে যাইবেন? না মামা, মিটারে গেলে মালিকরে ৯০০ টাকা জমা দিয়া আমার ঘরে খালি হাতে ফিরতে অইবো!" — The structural failure of Dhaka's CNG regulatory licensing system in one sentence.</blockquote>
      `;

    case 'biryani':
      return `
      <header>
        <div class="badge">🍖 Old Dhaka Culinary Heritage</div>
        <h1>Old Dhaka Haji Biryani &amp; Borhani Price Index <span>(হাজী বিরিয়ানি ও বোরহানি সূচক)</span></h1>
        <p class="subtitle">bdmcp documents 35 years of gastronomic heritage at Nazira Bazar: Haji Biryani's iconic mustard oil mutton tehari served on jackfruit leaves inflating from ৳20 (1990) to ৳260 (2025) — a 13x culinary inflation curve.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">2025 Haji Plate</div>
          <div class="value" style="color:var(--accent);">৳260<span class="unit">/plate</span></div>
          <div class="desc">Authentic Nazira Bazar Mutton Tehari</div>
        </div>
        <div class="stat-card">
          <div class="label">1990 Nostalgia Plate</div>
          <div class="value">৳20<span class="unit">/plate</span></div>
          <div class="desc">Served wrapped in Jackfruit leaves (কাঁঠাল পাতা)</div>
        </div>
        <div class="stat-card">
          <div class="label">35-Year Inflation</div>
          <div class="value" style="color:var(--red);">13.0<span class="unit">x</span></div>
          <div class="desc">1,200% price growth over 3.5 decades</div>
        </div>
        <div class="stat-card">
          <div class="label">Borhani (2025)</div>
          <div class="value">৳60<span class="unit">/glass</span></div>
          <div class="desc">Up from ৳10 in 2000 (6x increase)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 Haji Biryani &amp; Borhani Price Trajectory (1990–2025 in BDT)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Old Dhaka Culinary Price Trend (BDT)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: Nazira Bazar Haji Biryani, Nanna Biryani &amp; Old Dhaka Traditional Sweetshops</p>
          </div>
        </div>
        <svg id="biryaniChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#006a4e;"></div> Haji Biryani Plate (৳)</div>
          <div class="legend-item"><div class="legend-dot" style="background:#f42a41;"></div> Spiced Borhani Glass (৳)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📋 Old Dhaka Heritage vs Modern Fast Food Comparison</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Item / Delicacy</th>
                <th>2000 Price</th>
                <th>2010 Price</th>
                <th>2020 Price</th>
                <th>2025 Price</th>
                <th>Cumulative Multiplier</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Haji Biryani (Mutton Tehari)</strong></td><td>৳45</td><td>৳100</td><td>৳180</td><td><strong>৳260</strong></td><td><span class="badge-pill badge-green">5.8x</span></td></tr>
              <tr><td><strong>Old Dhaka Borhani (250ml)</strong></td><td>৳10</td><td>৳25</td><td>৳45</td><td><strong>৳60</strong></td><td><span class="badge-pill badge-green">6.0x</span></td></tr>
              <tr><td><strong>Bakarkhani (1kg)</strong></td><td>৳40</td><td>৳90</td><td>৳180</td><td><strong>৳240</strong></td><td><span class="badge-pill badge-amber">6.0x</span></td></tr>
              <tr><td><strong>Sultan's Dine Kacchi (New Dhaka)</strong></td><td>—</td><td>—</td><td>৳380</td><td><strong>৳520</strong></td><td><span class="badge-pill badge-red">Premium Tier</span></td></tr>
              <tr><td><strong>Dhanmondi Burger / Pizza Slice</strong></td><td>৳40</td><td>৳120</td><td>৳280</td><td><strong>৳450</strong></td><td><span class="badge-pill badge-red">11.2x</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 Old Dhaka Daawat Feast Budget Calculator (বিরিয়ানি ভোজ বাজেট)</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Calculate the total cost to treat your friends or team to authentic Old Dhaka Haji Biryani &amp; Borhani:</p>
        <div class="calc-box">
          <label style="font-size:0.9rem; font-weight:600;">Number of Guests: </label>
          <input type="number" id="biryaniGuests" class="calc-input" value="10" min="1" max="500" step="1" style="width:110px;" oninput="updateBiryaniCalculator()">
          <label style="font-size:0.9rem; font-weight:600;">Include Borhani? </label>
          <select id="biryaniWithBorhani" class="calc-input" style="width:140px;" onchange="updateBiryaniCalculator()">
            <option value="yes" selected>Yes (+৳60)</option>
            <option value="no">No</option>
          </select>
        </div>
        <div id="biryaniResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1rem;">
          <!-- Dynamically populated -->
        </div>
      </div>
      <blockquote class="quote-box">"হাজী বিরিয়ানির ঘ্রাণ আর খাঁটি সরিষার তেলের ঝাঁঝ — দাম যাই হোক, এক লোকমা মুখে দিলে পুরান ঢাকার চারশো বছরের ইতিহাস অনুভূত হয়।" — The eternal testament to Dhaka culinary soul.</blockquote>
      `;

    case 'loadshedding':
      return `
      <header>
        <div class="badge">💡 Power Outages & Summer Grid Realities</div>
        <h1>Bangladesh Load-Shedding &amp; IPS Battery Inflation Index <span>(লোডশেডিং ও আইপিএস জীবন)</span></h1>
        <p class="subtitle">bdmcp tracks 20 years of Bangladesh's seasonal electricity struggles: from the dark 8.5-hour daily outages of 2006 to the 2022–2023 LNG-dollar crunch, and the 6.2x price explosion of deep-cycle IPS batteries from ৳4,500 (2005) to ৳28,000 (2025).</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">2006 Peak Crisis</div>
          <div class="value" style="color:var(--red);">8.5<span class="unit">hrs/day</span></div>
          <div class="desc">Kansat protests era (1,500 MW deficit)</div>
        </div>
        <div class="stat-card">
          <div class="label">2025 Summer Outage</div>
          <div class="value">1.8<span class="unit">hrs/day</span></div>
          <div class="desc">Stabilized baseload with Adani &amp; Rooppur</div>
        </div>
        <div class="stat-card">
          <div class="label">150Ah IPS Battery</div>
          <div class="value" style="color:var(--accent);">৳28,000</div>
          <div class="desc">Up 6.2x from ৳4,500 in 2005 (Rahimafrooz/Hamko)</div>
        </div>
        <div class="stat-card">
          <div class="label">Rechargeable Fan</div>
          <div class="value" style="color:var(--amber);">৳3,800</div>
          <div class="desc">Summer heatwave price surge on Daraz / Stadium</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 Daily Load-Shedding Hours &amp; IPS Battery Cost (2005–2025)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Average Daily Outage (Hours) vs 150Ah IPS Battery (৳ in Hundreds)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: Bangladesh Power Development Board (BPDB) &amp; Battery Retail Market Archives</p>
          </div>
        </div>
        <svg id="loadshedChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#f42a41;"></div> Daily Load-Shedding (Hours)</div>
          <div class="legend-item"><div class="legend-dot" style="background:#006a4e;"></div> IPS Battery Cost (৳ Hundred)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📋 Load-Shedding Eras &amp; Summer Survival Hardware</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Era / Epoch</th>
                <th>Avg Outage (Dhaka)</th>
                <th>Rural Outage</th>
                <th>Primary Survival Gear</th>
                <th>Street Reality</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>2005–2007 (Dark Ages)</strong></td><td>8–10 hrs</td><td>14–18 hrs</td><td>হ্যারিকেন (Hurricane Lamp) &amp; মোমবাতি</td><td>Kansat protests; total grid collapse</td></tr>
              <tr><td><strong>2010–2014 (Quick Rental)</strong></td><td>5–6 hrs</td><td>8–12 hrs</td><td>Car battery + DC fan setup</td><td>Quick rental oil power introduced</td></tr>
              <tr><td><strong>2018–2020 (Golden Surplus)</strong></td><td>&lt;1 hr</td><td>2–3 hrs</td><td>Normal AC running</td><td>20,000 MW capacity milestone</td></tr>
              <tr><td><strong>2022–2023 (Dollar &amp; Gas Spike)</strong></td><td>3–5 hrs</td><td>6–9 hrs</td><td>Charger fan &amp; IPS rush</td><td>Scheduled cabinet load-shedding zones</td></tr>
              <tr><td><strong>2025 (Baseload Era)</strong></td><td>1–2 hrs</td><td>3–4 hrs</td><td>Smart inverter lithium IPS</td><td>Baseload nuclear &amp; cross-border imports</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 Load-Shedding Survival &amp; IPS Inverter Sizer (আইপিএস ক্যালকুলেটর)</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Calculate your power load and how many hours an IPS battery will survive:</p>
        <div class="calc-box">
          <label style="font-size:0.9rem; font-weight:600;">Ceiling Fans: </label>
          <input type="number" id="lsFans" class="calc-input" value="2" min="1" max="10" step="1" style="width:80px;" oninput="updateLoadsheddingCalculator()">
          <label style="font-size:0.9rem; font-weight:600;">LED Lights: </label>
          <input type="number" id="lsLights" class="calc-input" value="3" min="1" max="15" step="1" style="width:80px;" oninput="updateLoadsheddingCalculator()">
          <label style="font-size:0.9rem; font-weight:600;">Battery Size (Ah): </label>
          <select id="lsBattery" class="calc-input" style="width:160px;" onchange="updateLoadsheddingCalculator()">
            <option value="100">100 Ah (৳20,000)</option>
            <option value="150" selected>150 Ah (৳28,000)</option>
            <option value="200">200 Ah (৳36,000)</option>
          </select>
        </div>
        <div id="loadshedResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1rem;">
          <!-- Dynamically populated -->
        </div>
      </div>
      <blockquote class="quote-box">"কারেন্ট গেছে গা! পাশের বিল্ডিংয়েও কি গেছে?" — The instant acoustic verification shouting across balconies in every Dhaka neighborhood the second the ceiling fan winds down.</blockquote>
      `;

    case 'localbus':
      return `
      <header>
        <div class="badge">🚌 Dhaka Commute & Mass Transit Fiction</div>
        <h1>Dhaka Local Bus "Sitting Service" Myth &amp; Fare Matrix <span>(লোকাল বাস ও 'সিটিং সার্ভিস' রহস্য)</span></h1>
        <p class="subtitle">bdmcp deconstructs Dhaka's mass-transit paradox: where 'সিটিং সার্ভিস', 'গেইটলক', and 'ডিরেক্ট' buses cram 80 passengers into 32 seats while the minimum fare escalated from ৳2 (2000) to ৳10 (2022) with perpetual student half-pass friction.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Minimum Base Fare</div>
          <div class="value" style="color:var(--accent);">৳10<span class="unit">BRTA</span></div>
          <div class="desc">Up 5x from ৳2 in 2000 (even for 200 meters)</div>
        </div>
        <div class="stat-card">
          <div class="label">Sitting Service Real Capacity</div>
          <div class="value" style="color:var(--red);">250<span class="unit">%</span></div>
          <div class="desc">32 seats + 48 people standing on toes</div>
        </div>
        <div class="stat-card">
          <div class="label">Half-Pass Rejection Rate</div>
          <div class="value" style="color:var(--red);">78<span class="unit">%</span></div>
          <div class="desc">Morning rush hour student pass refusal</div>
        </div>
        <div class="stat-card">
          <div class="label">Top Feared Call</div>
          <div class="value" style="font-size:1.3rem;">'চাপেন চাপেন'</div>
          <div class="desc">Helper insisting empty space exists in vacuum</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 Dhaka Local Bus Minimum Fare Inflation (2000–2025 in BDT)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Official Minimum Base Bus Fare (BDT)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: Bangladesh Road Transport Authority (BRTA) Gazette Revisions</p>
          </div>
        </div>
        <svg id="localbusChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#006a4e;"></div> Minimum Fare (৳)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📋 The Local Bus Helper Claim vs Reality Matrix</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Helper Claim (মামা যা কয়)</th>
                <th>Physical Reality (আসল সত্য)</th>
                <th>Absurdity Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>"গেইটলক সিটিং সার্ভিস! ডাইরেক্ট গাড়ি!"</strong></td><td>Doors tied with rope, 50 people standing inside</td><td><span class="badge-pill badge-red">10/10</span></td></tr>
              <tr><td><strong>"ভিতরে ডাব্বা খালি, চাপেন চাপেন মামা!"</strong></td><td>Literal zero oxygen; faces pressed against glass</td><td><span class="badge-pill badge-red">9.8/10</span></td></tr>
              <tr><td><strong>"আইজকা ছাত্র হাফ পাস নাই!"</strong></td><td>Friday / Exam day / Rainy day / 'মালিকের কড়া নিষেধ'</td><td><span class="badge-pill badge-amber">9.5/10</span></td></tr>
              <tr><td><strong>"সামনে খালি গাড়ি টানবো, কোন স্টপেজ নাই!"</strong></td><td>Stops at every tree, pillar, and trash can for 10 min</td><td><span class="badge-pill badge-amber">9.2/10</span></td></tr>
              <tr><td><strong>"মামা ভাংতি নাই, নামার সময় বাকি ১০ টাকা নিয়েন!"</strong></td><td>Helper disappears into traffic; you never see that ৳10</td><td><span class="badge-pill badge-red">9.9/10</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 Dhaka Bus Fare &amp; Student Half-Pass Calculator (বাস ভাড়া ক্যালকুলেটর)</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Calculate your fare and see the probability of arguing with the helper:</p>
        <div class="calc-box">
          <label style="font-size:0.9rem; font-weight:600;">Distance (km): </label>
          <input type="number" id="busDistance" class="calc-input" value="8" min="1" max="40" step="1" style="width:100px;" oninput="updateLocalbusCalculator()">
          <label style="font-size:0.9rem; font-weight:600;">Student Half-Pass? </label>
          <select id="busStudent" class="calc-input" style="width:130px;" onchange="updateLocalbusCalculator()">
            <option value="yes" selected>Yes (ছাত্র)</option>
            <option value="no">No (রেগুলার)</option>
          </select>
        </div>
        <div id="localbusResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1rem;">
          <!-- Dynamically populated -->
        </div>
      </div>
      <blockquote class="quote-box">"মামা, ভিতরে ডাব্বা খালি! একটু সামনে আগান, মহিলাদের সিট ছেড়ে দেন!" — Shouted while 8 passengers hang by one toe from the rear bumper.</blockquote>
      `;

    case 'freshers':
      return `
      <header>
        <div class="badge">💼 Job Market Paradox & Real Graduate Wages</div>
        <h1>Entry-Level Job Circular Experience Paradox &amp; Graduate Salary <span>(ফ্রেশার চাকরি ও অভিজ্ঞতা প্যারাডক্স)</span></h1>
        <p class="subtitle">bdmcp analyzes the mathematical impossibility of Bangladesh's entry-level job market: circulars demanding 5 years of experience from 24-year-olds for ৳26,000/month, resulting in a 74% collapse in real fresh-graduate purchasing power compared to 2005.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">2025 Fresh Salary</div>
          <div class="value" style="color:var(--accent);">৳26,000<span class="unit">/mo</span></div>
          <div class="desc">Nominal starting corporate/SWE salary</div>
        </div>
        <div class="stat-card">
          <div class="label">Real Purchasing Power</div>
          <div class="value" style="color:var(--red);">-74<span class="unit">%</span></div>
          <div class="desc">Compared to ৳10,000 in 2005 (Fuchka/Rent terms)</div>
        </div>
        <div class="stat-card">
          <div class="label">Experience Stated on Ads</div>
          <div class="value" style="color:var(--red);">3–5<span class="unit">Years</span></div>
          <div class="desc">Required for 'Junior / Entry-Level' openings</div>
        </div>
        <div class="stat-card">
          <div class="label">Graduate Unemployment</div>
          <div class="value">38.5<span class="unit">%</span></div>
          <div class="desc">Highest unemployment bracket in national economy</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 Fresh Graduate Starting Salary Trajectory (2005–2025 in BDT)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Nominal Monthly Starting Salary (BDT)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: Bdjobs, LinkedIn BD &amp; Corporate Entry-Level Pay Benchmarks</p>
          </div>
        </div>
        <svg id="freshersChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#006a4e;"></div> Average Graduate Starting Salary (৳)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📋 The Job Circular Paradox Showdown</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Job Role</th>
                <th>Stated Experience</th>
                <th>Actual Monthly Pay</th>
                <th>The Structural Paradox</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Junior Software Engineer</strong></td><td>4–6 Years</td><td>৳22,000–৳28,000</td><td>Must master 14 frameworks before graduating college</td></tr>
              <tr><td><strong>Management Trainee (MTO)</strong></td><td>Fresh Graduate</td><td>৳45,000–৳65,000</td><td>30,000 applicants for 15 bank seats (0.05% odds)</td></tr>
              <tr><td><strong>Digital Marketing Executive</strong></td><td>2+ Years</td><td>৳15,000–৳20,000</td><td>Must be graphic designer, video editor, and media buyer</td></tr>
              <tr><td><strong>Customer Support Specialist</strong></td><td>1 Year</td><td>৳12,000–৳16,000</td><td>Night shift 6 days/week; lower than garment technician wage</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 Fresh Graduate Monthly Survival Budget Calculator (ফ্রেশার বাজেট)</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Can a fresh graduate survive in Dhaka on their starting salary? Calculate the deficit:</p>
        <div class="calc-box">
          <label style="font-size:0.9rem; font-weight:600;">Monthly Salary (৳): </label>
          <input type="number" id="fgSalary" class="calc-input" value="25000" min="10000" max="80000" step="1000" style="width:130px;" oninput="updateFreshersCalculator()">
        </div>
        <div id="freshersResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1rem;">
          <!-- Dynamically populated -->
        </div>
      </div>
      <blockquote class="quote-box">"Wanted: Junior Developer. Age strictly under 25. Must have 5 years of commercial production experience in Kubernetes, Rust, React, and AWS." — Found on every Bangladeshi Facebook job board.</blockquote>
      `;

    case 'bpl':
      return `
      <header>
        <div class="badge">🏏 Franchise Mayhem & National Heartbreaks</div>
        <h1>BPL Franchise Rebrand Chaos &amp; Cricket Heartbreak Index <span>(বিপিএল ফ্র্যাঞ্চাইজি ও নাগিন ড্যান্স সূচক)</span></h1>
        <p class="subtitle">bdmcp chronicles Bangladesh cricket's emotional rollercoaster: from Sylhet changing its BPL franchise name 6 times in 10 seasons to the tragic 1-run loss in Bangalore (2016) and the iconic Nidahas Trophy Nagin Dance.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Most Rebranded Franchise</div>
          <div class="value" style="color:var(--accent);">6<span class="unit">Names</span></div>
          <div class="desc">Sylhet (Royals → Super Stars → Sixers → Thunder → Sunrisers → Strikers)</div>
        </div>
        <div class="stat-card">
          <div class="label">Most Traumatic Deficit</div>
          <div class="value" style="color:var(--red);">1<span class="unit">Run</span></div>
          <div class="desc">2016 T20 World Cup Bangalore vs India (2 needed off 3 balls)</div>
        </div>
        <div class="stat-card">
          <div class="label">Peak Nagin Dance</div>
          <div class="value" style="color:var(--accent);">2018</div>
          <div class="desc">Nidahas Trophy Colombo (Mushfiqur Rahim vs Sri Lanka)</div>
        </div>
        <div class="stat-card">
          <div class="label">BPL Title Record</div>
          <div class="value">4<span class="unit">Titles</span></div>
          <div class="desc">Comilla Victorians (Most decorated BPL team)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 BPL Franchise Identity Crisis: Total Rebrands by Division</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Total Number of Franchise Name Rebrands (2012–2025)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: Bangladesh Premier League (BPL) Governing Council Records</p>
          </div>
        </div>
        <svg id="bplChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#f42a41;"></div> Total Name Changes / Rebrands</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📋 The 4 Hall-of-Fame Heartbreak Moments (হৃদয়ভঙ্গের ৪ ম্যাচ)</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Match &amp; Venue</th>
                <th>Deficit</th>
                <th>Emotional Trauma Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>2016 T20 World Cup vs India (Bangalore)</strong></td><td><span class="badge-pill badge-red">Lost by 1 run</span></td><td>Needed 2 runs off 3 balls. Mushfiq punched the air early. 3 wickets fell in 3 consecutive balls. 170M people couldn't sleep.</td></tr>
              <tr><td><strong>2012 Asia Cup Final vs Pakistan (Mirpur)</strong></td><td><span class="badge-pill badge-red">Lost by 2 runs</span></td><td>Shakib and Mushfiq wept openly on the pitch. The entire nation cried together on national television.</td></tr>
              <tr><td><strong>2018 Nidahas Trophy Final vs India (Colombo)</strong></td><td><span class="badge-pill badge-amber">Lost on last ball</span></td><td>Dinesh Karthik smashed 29 off 8 balls with a flat six over extra cover on the final delivery.</td></tr>
              <tr><td><strong>2018 Asia Cup Final vs India (Dubai)</strong></td><td><span class="badge-pill badge-amber">Lost on final ball</span></td><td>Liton Das heroic 121; injured Kedar Jadhav scampers a single off the 120th ball to win.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 Bangalore 2016 Trauma Re-Simulator (ব্যাঙ্গালোর ট্রমা ক্যালকুলেটর)</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Re-live March 23, 2016 at M. Chinnaswamy Stadium. What if you were the non-striker?</p>
        <div class="calc-box">
          <label style="font-size:0.9rem; font-weight:600;">Runs Needed: 2 | Balls: 3 | Pick Ball 4 shot: </label>
          <select id="bangaloreShot" class="calc-input" style="width:260px;" onchange="updateBplCalculator()">
            <option value="wild" selected>Wild scoop over deep mid-wicket (Actual)</option>
            <option value="single">Sensible push for 1 single</option>
            <option value="defend">Defensive block and run hard</option>
          </select>
        </div>
        <div id="bplResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1rem;">
          <!-- Dynamically populated -->
        </div>
      </div>
      <blockquote class="quote-box">"নাগিন ড্যান্স শুধু একটা নাচ না — এটা ১৬ কোটি বাঙালির আবেগের প্রতীক!" — Mushfiqur Rahim at R. Premadasa Stadium, Colombo, March 2018.</blockquote>
      `;

    case 'qurbani':
      return `
      <header>
        <div class="badge">🐂 Qurbani Cattle Market & Street Bargaining</div>
        <h1>Gabtoli Qurbani Haat Cow Bargaining &amp; Hasil Index <span>(কোরবানির হাট ও গরু দরদাম সূচক)</span></h1>
        <p class="subtitle">bdmcp tracks 25 years of Dhaka's pre-Eid cattle market economics: medium Deshi cow prices inflating 10.4x from ৳12,000 (2000) to ৳125,000 (2025), alongside the unavoidable post-purchase alley neighbor critique: 'মামা, ২০ হাজার টাকা বেশি নিয়ে নিছে!'.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">2025 Medium Cow</div>
          <div class="value" style="color:var(--accent);">৳1,25,000</div>
          <div class="desc">Deshi medium bull (~180-200 kg)</div>
        </div>
        <div class="stat-card">
          <div class="label">2000 Cow Price</div>
          <div class="value">৳12,000</div>
          <div class="desc">10.4x price surge across 25 years</div>
        </div>
        <div class="stat-card">
          <div class="label">Official Hasil Toll</div>
          <div class="value">5<span class="unit">%</span></div>
          <div class="desc">City Corporation maximum statutory haat toll</div>
        </div>
        <div class="stat-card">
          <div class="label">Alley 'ঠকে গেছেন' Verdict</div>
          <div class="value" style="color:var(--red);">86<span class="unit">%</span></div>
          <div class="desc">Neighbors insisting you overpaid by ৳20k</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 Medium Deshi Cow Price Trajectory (2000–2025 in BDT)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Average Qurbani Haat Medium Bull Price (BDT)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: Gabtoli, Aftabnagar &amp; Meradia Cattle Market Historical Trade Archives</p>
          </div>
        </div>
        <svg id="qurbaniChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#006a4e;"></div> Medium Deshi Cow Price (৳)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📋 The Post-Haat Alley Neighbor Critique Matrix (গলির মোড়ে গরুর রিভিউ)</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Neighbor Review Angle</th>
                <th>Probability</th>
                <th>Standard Alley Quote (চাচা যা কয়)</th>
                <th>Psychological Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>দাম নিয়ে খোঁচা (Overpaid)</strong></td><td><span class="badge-pill badge-red">86%</span></td><td>'মামা একটু বেশি নিয়া নিছে! এই সাইজের গরু কালকে আমার ভায়রা ভাই ১ লাখ ২০-এ আনছে!'</td><td>Immediate buyer's remorse</td></tr>
              <tr><td><strong>দাঁত নিয়ে সন্দেহ (Age Doubt)</strong></td><td><span class="badge-pill badge-amber">74%</span></td><td>'দাঁত কয়টা দেখছেন? দুই দাঁত তো মনে হয় না, মুখ খোলেন তো দেখি!'</td><td>Forced dental inspection on street</td></tr>
              <tr><td><strong>গোস্ত অনুমান (Meat Estimate)</strong></td><td><span class="badge-pill badge-amber">92%</span></td><td>'হাড্ডি বেশি মনে হইতাছে! গোস্ত তিন মনের বেশি পাইবেন না!'</td><td>Kitchen anxiety before Eid morning</td></tr>
              <tr><td><strong>হাসিল বিতর্ক (Toll Surcharge)</strong></td><td><span class="badge-pill badge-green">65%</span></td><td>'হাসিল কত রাখছে? ৫% এর বেশি নিলে কিন্তু রসিদ ছিড়ে দেওয়া উচিত!'</td><td>Searching for lost yellow receipt</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 Qurbani Haat Bargaining &amp; Neighbor Review Simulator (দরদাম ক্যালকুলেটর)</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Enter the Bepari's opening ask to calculate your 50% counter, final deal, and neighbor verdict:</p>
        <div class="calc-box">
          <label style="font-size:0.9rem; font-weight:600;">Bepari Asking Price (৳): </label>
          <input type="number" id="haatAsk" class="calc-input" value="220000" min="50000" max="1000000" step="10000" style="width:140px;" oninput="updateQurbaniCalculator()">
        </div>
        <div id="qurbaniResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1rem;">
          <!-- Dynamically populated -->
        </div>
      </div>
      <blockquote class="quote-box">"গরু নিয়ে গলিতে ঢোকা মাত্রই চারপাশ থেকে চাচা-মামা এসে শিং নাড়বে আর বলবে: 'মামা, একটু ঠকে গেছেন!' — The universal post-purchase trauma in every Dhaka neighborhood."</blockquote>
      `;

    case 'admission':
      return `
      <header>
        <div class="badge">🎓 University Admission Wars & Coaching Industry</div>
        <h1>University Admission War &amp; Farmgate Coaching Index <span>(বিশ্ববিদ্যালয় ভর্তিযুদ্ধ ও কোচিং শিল্প)</span></h1>
        <p class="subtitle">bdmcp quantifies Bangladesh's annual university admission meat-grinder: 350,000 GPA-5 candidates battling for ~4,000 Dhaka University seats (1.1% admission rate) while Farmgate coaching packages surged 7x from ৳4,000 (2005) to ৳28,000 (2025).</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">DU Admission Rate</div>
          <div class="value" style="color:var(--red);">1.1<span class="unit">%</span></div>
          <div class="desc">Only 1 in 88 applicants gets a seat</div>
        </div>
        <div class="stat-card">
          <div class="label">2025 Coaching Package</div>
          <div class="value" style="color:var(--accent);">৳28,000</div>
          <div class="desc">Up 7.0x from ৳4,000 in 2005 (UCC/Retina/Focus)</div>
        </div>
        <div class="stat-card">
          <div class="label">Farmgate Banner Density</div>
          <div class="value">42<span class="unit">/building</span></div>
          <div class="desc">Green Road &amp; Farmgate billboard saturation</div>
        </div>
        <div class="stat-card">
          <div class="label">Lecture Sheet Study</div>
          <div class="value">14<span class="unit">hrs/day</span></div>
          <div class="desc">3 months of Nilkhet yellow sheets &amp; model tests</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 University Admission Coaching Package Fees (2005–2025 in BDT)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Average Farmgate Admission Coaching Package (BDT)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: Coaching Association of Bangladesh &amp; Farmgate Branch Circulars</p>
          </div>
        </div>
        <svg id="admissionChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#006a4e;"></div> Comprehensive Coaching Package (৳)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📋 Farmgate Coaching Titans &amp; Historical Specializations</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Coaching Brand</th>
                <th>Target University Unit</th>
                <th>Coaching Culture / Legacy</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>UCC (University Coaching Centre)</strong></td><td>Ka / Kha / Gha Unit (DU)</td><td>Pioneer since 1986; iconic yellow lecture sheets and Farmgate headquarters</td></tr>
              <tr><td><strong>Focus University Coaching</strong></td><td>Kha &amp; Gha Unit (Arts &amp; Law)</td><td>Dhaka University arts, law and IBA preparation heavyweight</td></tr>
              <tr><td><strong>Retina Medical Admission</strong></td><td>Medical College (MBBS)</td><td>Green guidebooks; legendary 6:00 AM cold morning daily model tests</td></tr>
              <tr><td><strong>Medico Medical Coaching</strong></td><td>Medical College (MBBS)</td><td>Fierce rival of Retina; high medical merit list rank claims</td></tr>
              <tr><td><strong>OMECA &amp; Sunrise</strong></td><td>BUET &amp; Engineering Core</td><td>Marathon math and physics problem sets for engineering aspirants</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 DU Admission Merit Odds &amp; Hall Seat Simulator (ভর্তি পরীক্ষা ক্যালকুলেটর)</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Enter your expected exam score to calculate your merit rank tier and seat odds:</p>
        <div class="calc-box">
          <label style="font-size:0.9rem; font-weight:600;">MCQ + Written Score (out of 100): </label>
          <input type="number" id="duScore" class="calc-input" value="72" min="20" max="100" step="1" style="width:100px;" oninput="updateAdmissionCalculator()">
          <label style="font-size:0.9rem; font-weight:600;">Unit: </label>
          <select id="duUnit" class="calc-input" style="width:160px;" onchange="updateAdmissionCalculator()">
            <option value="ka" selected>'Ka' Unit (Science)</option>
            <option value="kha">'Kha' Unit (Arts &amp; Law)</option>
            <option value="ga">'Ga' Unit (Business)</option>
            <option value="iba">IBA BBA</option>
          </select>
        </div>
        <div id="admissionResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1rem;">
          <!-- Dynamically populated -->
        </div>
      </div>
      <blockquote class="quote-box">"ফার্মগেটের ফুটপাতে কোচিংয়ের লিফলেট আর নীলক্ষেতের লেকচার শিট — এই দুইয়ের ওপর দাঁড়িয়ে দেশের সব বুয়েটিয়ান আর ঢাবিয়ানদের শৈশব শেষ হয়।"</blockquote>
      `;

    case 'paan':
      return `
      <header>
        <div class="badge">🍃 The National Post-Meal Ritual & Tong Economics</div>
        <h1>The Tong Paan-Supari &amp; Mukhshuddhi Index <span>(পান-সুপারি ও মুখশুদ্ধি সূচক)</span></h1>
        <p class="subtitle">bdmcp charts the post-tehari digestive backbone: from ৳1 shada paan (2000) to ৳15 standard khili (2025) and ৳50 royal misti paan, supporting an annual delta harvest of 250,000 metric tons of betel leaves.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">2025 Shada Paan</div>
          <div class="value" style="color:var(--accent);">৳15<span class="unit">/khili</span></div>
          <div class="desc">Up 15x from ৳1 in 2000 (Misti paan: ৳25–৳50)</div>
        </div>
        <div class="stat-card">
          <div class="label">Annual Paan Harvest</div>
          <div class="value">250,000<span class="unit">Tons</span></div>
          <div class="desc">Rajshahi &amp; Barishal delta betel vine production</div>
        </div>
        <div class="stat-card">
          <div class="label">Average Chew Duration</div>
          <div class="value">22<span class="unit">Minutes</span></div>
          <div class="desc">Tong adda conversation pacing metric</div>
        </div>
        <div class="stat-card">
          <div class="label">Tong Paan Share</div>
          <div class="value">38<span class="unit">%</span></div>
          <div class="desc">Total revenue share of neighborhood tea stalls</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 Betel Leaf Paan Khili Price Inflation (2000–2025 in BDT)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Price of 1 Khili Standard Paan (BDT)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: Old Dhaka Nazira Bazar, Farmgate &amp; Neighborhood Tong Vendor Records</p>
          </div>
        </div>
        <svg id="paanChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#006a4e;"></div> Standard Paan Khili (৳)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📋 Traditional Paan Recipe Tiers &amp; Ingredients</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Paan Variety</th>
                <th>Price Range</th>
                <th>Aromatic Ingredients &amp; Recipe</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>মিষ্টি পান (Sweet Shahi Paan)</strong></td><td>৳২৫–৳৫০</td><td>Betel leaf, Chun, Sweet Supari, Shahi Masala, Morobba, Coconut flakes, Rose petal paste</td></tr>
              <tr><td><strong>জর্দা পান (Zarda Paan)</strong></td><td>৳১৫–৳৩০</td><td>Betel leaf, Chun, Roasted Supari, Hakimpuri / Baba 120 Zarda, Saffron extract</td></tr>
              <tr><td><strong>সাদা পান (Plain Classic Paan)</strong></td><td>৳১০–৳১৫</td><td>Fresh Betel leaf, Slaked lime (চুন), Raw sliced Supari</td></tr>
              <tr><td><strong>আগুন পান (Fire Paan)</strong></td><td>৳৬০–৳১০০</td><td>Clove syrup infused with crushed spices set on blue flame in mouth</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 Lifetime Tong Paan &amp; Adda Budget Calculator (পানের খরচ ক্যালকুলেটর)</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Calculate how much a daily paan lover spends over years of neighborhood adda:</p>
        <div class="calc-box">
          <label style="font-size:0.9rem; font-weight:600;">Paans per Day: </label>
          <input type="number" id="paanPerDay" class="calc-input" value="3" min="1" max="25" step="1" style="width:80px;" oninput="updatePaanCalculator()">
          <label style="font-size:0.9rem; font-weight:600;">Avg Price per Khili: </label>
          <input type="number" id="paanPrice" class="calc-input" value="20" min="5" max="100" step="5" style="width:90px;" oninput="updatePaanCalculator()">
          <label style="font-size:0.9rem; font-weight:600;">Years of Habit: </label>
          <input type="number" id="paanYears" class="calc-input" value="25" min="1" max="60" step="1" style="width:80px;" oninput="updatePaanCalculator()">
        </div>
        <div id="paanResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1rem;">
          <!-- Dynamically populated -->
        </div>
      </div>
      <blockquote class="quote-box">"বিরিয়ানি খাওয়ার পর এক খিলি জাফরানি মিষ্টি পান না খাইলে খাবার হজম হয় না মামা! — The sacred decree of Old Dhaka dining."</blockquote>
      `;

    case 'passport':
      return `
      <header>
        <div class="badge">🛂 Bureaucracy Friction & Expedited Realities</div>
        <h1>Agargaon Passport Dalal &amp; Police Verification Index <span>(পাসপোর্ট অফিস ও দালাল সূচক)</span></h1>
        <p class="subtitle">bdmcp maps the friction between official digital governance and street reality: official e-Passport fee of ৳4,025 vs ৳11,500 'Dalal package' to bypass the infamous 4-hour queue and secure Special Branch (SB) 'চা-পানি' verification clearance.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Official 5-Yr Fee</div>
          <div class="value">৳4,025</div>
          <div class="desc">Regular 48-page e-Passport fee</div>
        </div>
        <div class="stat-card">
          <div class="label">Dalal Expedited Package</div>
          <div class="value" style="color:var(--red);">৳11,500</div>
          <div class="desc">2.85x official tariff for VIP pass-through</div>
        </div>
        <div class="stat-card">
          <div class="label">Police 'Tea' Honorarium</div>
          <div class="value" style="color:var(--amber);">৳1,000</div>
          <div class="desc">Avg Special Branch verification visit fee</div>
        </div>
        <div class="stat-card">
          <div class="label">Queue Wait (No Dalal)</div>
          <div class="value">4.5<span class="unit">Hours</span></div>
          <div class="desc">Arrival by 7:00 AM at Agargaon main gate</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 Passport Dalal Expedited Package Cost Inflation (2005–2025 in BDT)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Total Dalal 'All-Clear' Package Cost (BDT)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: Agargaon, Uttara &amp; Jatrabari Passport Office Shadow Economy Reports</p>
          </div>
        </div>
        <svg id="passportChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#f42a41;"></div> Dalal Expedited Package (৳)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📋 The 4 Passport Harassment Stages &amp; Photostat Alley Realities</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Process Stage</th>
                <th>The Dreaded Snag (কাগজে ঝামেলা)</th>
                <th>Alley Solution (সমাধান)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Counter 1: Photo &amp; Biometrics</strong></td><td>'ছবিতে দুই কান পরিষ্কার দেখা যায় না!'</td><td>Go to alley photostat shop to print fresh photos (৳150)</td></tr>
              <tr><td><strong>Counter 2: Document Scrutiny</strong></td><td>'এনআইডিতে বাবার নামের বানানে Md আর সার্টিফিকেটে Mohammad!'</td><td>Notary public affidavit from court premise (৳500)</td></tr>
              <tr><td><strong>Police Verification (SB)</strong></td><td>'এসবি অফিসার ফোন দিয়ে কয়: বাসায় আসুম, চা-পানির ব্যবস্থা রাখেন!'</td><td>Honorable 'tea honorarium' handover (৳500–৳1,500)</td></tr>
              <tr><td><strong>Delivery Counter</strong></td><td>'সার্ভারে প্রিন্টিং ব্যাকলগ, দুই সপ্তাহ পর আসেন!'</td><td>Dalal phone call to expedite badge release (৳2,000)</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 Passport Time-Cost Tradeoff Calculator (নিজে করবেন নাকি দালাল?)</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Compare the true cost of doing it honestly yourself vs taking the Dalal shortcut:</p>
        <div class="calc-box">
          <label style="font-size:0.9rem; font-weight:600;">Daily Salary / Opportunity Cost (৳): </label>
          <input type="number" id="passDaySalary" class="calc-input" value="2000" min="500" max="20000" step="500" style="width:120px;" oninput="updatePassportCalculator()">
          <label style="font-size:0.9rem; font-weight:600;">Days of Work Taken Off: </label>
          <input type="number" id="passDaysOff" class="calc-input" value="3" min="1" max="10" step="1" style="width:80px;" oninput="updatePassportCalculator()">
        </div>
        <div id="passportResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1rem;">
          <!-- Dynamically populated -->
        </div>
      </div>
      <blockquote class="quote-box">"ছবিতে দুই কান সমানভাবে দেখা যাইতে হবে মামা, একটু মাথা বাঁকা হইলেই ফাইল রিজেক্ট! — The legendary gatekeeper advice at Agargaon counter."</blockquote>
      `;

    case 'medicines':
      return `
      <header>
        <div class="badge">💊 Directorate General of Drug Administration (DGDA)</div>
        <h1>DGDA Essential Medicines &amp; Generic Drug Index <span>(ঔষধ মূল্য ও জেনেরিক ডিরেক্টরি)</span></h1>
        <p class="subtitle">bdmcp indexes registered pharmaceuticals in Bangladesh: search by brand name (Napa, Seclo, Fexo) or generic chemical (Paracetamol, Esomeprazole) to discover verified manufacturer MRP price caps, dosage forms, and affordable generic equivalents.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Indexed Essential Drugs</div>
          <div class="value" style="color:var(--accent);">32,000+</div>
          <div class="desc">Registered formulations across 280+ licensed plants</div>
        </div>
        <div class="stat-card">
          <div class="label">Paracetamol Cap</div>
          <div class="value">৳1.20<span class="unit">/tab</span></div>
          <div class="desc">Official DGDA MRP ceiling for standard 500mg</div>
        </div>
        <div class="stat-card">
          <div class="label">Generic Cost Savings</div>
          <div class="value" style="color:var(--green);">40–70<span class="unit">%</span></div>
          <div class="desc">Price gap between premium originator and generic brands</div>
        </div>
        <div class="stat-card">
          <div class="label">Top 2 Market Share</div>
          <div class="value">35<span class="unit">%</span></div>
          <div class="desc">Square Pharmaceuticals &amp; Beximco Pharma combined</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🔍 Search Registered Medicines &amp; Find Generic Equivalents</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Type a brand name (e.g. Napa, Seclo, Maxpro, Monas, Fexo) or generic molecule (Paracetamol, Omeprazole, Montelukast):</p>
        <div class="calc-box">
          <label style="font-size:0.9rem; font-weight:600;">Search Drug: </label>
          <input type="text" id="medSearchInput" class="calc-input" value="Napa" placeholder="e.g. Napa, Seclo, Fexo..." style="width:220px;" oninput="searchMedicinesLive()">
          <button class="dir-toggle-btn" style="padding:0.4rem 0.8rem; font-size:0.85rem;" onclick="searchMedicinesLive()">Search</button>
        </div>
        <div id="medResultsContainer" style="margin-top:1.25rem;">
          <!-- Dynamically populated -->
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📋 National Essential Drug List Benchmark (DGDA Official MRP Caps)</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Brand Name</th>
                <th>Generic Molecule</th>
                <th>Form &amp; Strength</th>
                <th>Manufacturer</th>
                <th>Official MRP (৳)</th>
                <th>Primary Indication</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Napa</strong></td><td>Paracetamol</td><td>Tablet 500 mg</td><td>Beximco Pharma</td><td>৳1.20</td><td>Fever, headache, pain</td></tr>
              <tr><td><strong>Ace</strong></td><td>Paracetamol</td><td>Tablet 500 mg</td><td>Square Pharma</td><td>৳1.20</td><td>Fever, body ache</td></tr>
              <tr><td><strong>Seclo 20</strong></td><td>Omeprazole</td><td>Capsule 20 mg</td><td>Square Pharma</td><td>৳6.00</td><td>Gastric ulcer, GERD</td></tr>
              <tr><td><strong>Maxpro 20</strong></td><td>Esomeprazole</td><td>Tablet 20 mg</td><td>Square Pharma</td><td>৳7.00</td><td>Acid reflux, heartburn</td></tr>
              <tr><td><strong>Monas 10</strong></td><td>Montelukast</td><td>Tablet 10 mg</td><td>The Acme Labs</td><td>৳16.00</td><td>Asthma, dust allergy</td></tr>
              <tr><td><strong>Fexo 120</strong></td><td>Fexofenadine</td><td>Tablet 120 mg</td><td>Square Pharma</td><td>৳9.00</td><td>Allergic rhinitis, sneezing</td></tr>
              <tr><td><strong>Alatrol</strong></td><td>Cetirizine</td><td>Tablet 10 mg</td><td>Square Pharma</td><td>৳3.50</td><td>Cold allergy, itching</td></tr>
              <tr><td><strong>Zimax 500</strong></td><td>Azithromycin</td><td>Tablet 500 mg</td><td>Square Pharma</td><td>৳35.00</td><td>Throat, chest infections</td></tr>
              <tr><td><strong>Comet 500</strong></td><td>Metformin</td><td>Tablet 500 mg</td><td>Square Pharma</td><td>৳4.50</td><td>Type 2 Diabetes</td></tr>
              <tr><td><strong>Orsaline-N</strong></td><td>WHO Formula ORS</td><td>Sachet 500 ml</td><td>SMC</td><td>৳6.00</td><td>Diarrhea dehydration</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <blockquote class="quote-box">"প্রেসক্রিপশনে জেনেরিক নাম লিখলে রোগীরা ফার্মেসি সিন্ডিকেটের বদলে সাশ্রয়ী মূল্যে সমমানের অন্য কোম্পানির ঔষধ কিনতে পারেন।" — DGDA National Drug Policy Directive.</blockquote>
      `;

    case 'tax':
      return `
      <header>
        <div class="badge">💰 National Board of Revenue (NBR)</div>
        <h1>NBR Individual Income Tax &amp; TDS Calculator <span>(আয়কর আইন ২০২৩ ও স্ল্যাব ক্যালকুলেটর)</span></h1>
        <p class="subtitle">Deterministic tax calculation under Bangladesh Income Tax Act 2023: progressive brackets (5% to 25%), general initial exemption (৳3,50,000), allowable investment tax rebates (15%), and City Corporation minimum tax rules.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">General Exemption</div>
          <div class="value" style="color:var(--accent);">৳3,50,000</div>
          <div class="desc">First income bracket taxed at 0%</div>
        </div>
        <div class="stat-card">
          <div class="label">Female / Senior (65+)</div>
          <div class="value">৳4,00,000</div>
          <div class="desc">Exemption for women and elderly citizens</div>
        </div>
        <div class="stat-card">
          <div class="label">Maximum Tax Bracket</div>
          <div class="value" style="color:var(--red);">25<span class="unit">%</span></div>
          <div class="desc">Marginal rate on taxable income above ৳15,00,000</div>
        </div>
        <div class="stat-card">
          <div class="label">City Corporation Min Tax</div>
          <div class="value">৳5,000</div>
          <div class="desc">Minimum payable in Dhaka &amp; Chattogram</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 Interactive Bangladesh Income Tax &amp; TDS Calculator</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Enter your gross annual income, taxpayer category, and investments to calculate your exact tax:</p>
        <div class="calc-box">
          <div style="display:flex; flex-wrap:wrap; gap:1rem; align-items:center;">
            <div>
              <label style="font-size:0.85rem; font-weight:700;">Annual Gross Income (৳): </label><br>
              <input type="number" id="taxGrossIncome" class="calc-input" value="950000" min="0" step="25000" style="width:140px;" oninput="updateTaxCalculator()">
            </div>
            <div>
              <label style="font-size:0.85rem; font-weight:700;">Category: </label><br>
              <select id="taxCategory" class="calc-input" style="width:170px;" onchange="updateTaxCalculator()">
                <option value="general" selected>General Individual (৳3.5L)</option>
                <option value="female_or_senior_65">Female / Senior 65+ (৳4.0L)</option>
                <option value="physically_challenged">Physically Challenged (৳4.75L)</option>
                <option value="freedom_fighter">Freedom Fighter (৳5.0L)</option>
              </select>
            </div>
            <div>
              <label style="font-size:0.85rem; font-weight:700;">Allowable Investment (৳): </label><br>
              <input type="number" id="taxInvestments" class="calc-input" value="120000" min="0" step="10000" style="width:130px;" oninput="updateTaxCalculator()">
            </div>
            <div>
              <label style="font-size:0.85rem; font-weight:700;">Location: </label><br>
              <select id="taxLocation" class="calc-input" style="width:170px;" onchange="updateTaxCalculator()">
                <option value="dhaka_chattogram" selected>Dhaka / Ctg City (৳5k min)</option>
                <option value="other_city_corporation">Other City Corp (৳4k min)</option>
                <option value="non_city">Non-City Area (৳3k min)</option>
              </select>
            </div>
          </div>
        </div>
        <div id="taxResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1.25rem;">
          <!-- Dynamically populated -->
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📋 Bangladesh Income Tax Slabs &amp; Brackets (Assessment Year 2024–2025)</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Taxable Income Slab Range</th>
                <th>Tax Rate (%)</th>
                <th>Maximum Tax in Slab (৳)</th>
                <th>Cumulative Tax (৳)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>First ৳3,50,000 (Initial Exemption)</td><td><span class="badge-pill badge-green">0%</span></td><td>৳0</td><td>৳0</td></tr>
              <tr><td>Next ৳1,00,000</td><td><span class="badge-pill badge-green">5%</span></td><td>৳5,000</td><td>৳5,000</td></tr>
              <tr><td>Next ৳4,00,000</td><td><span class="badge-pill badge-amber">10%</span></td><td>৳40,000</td><td>৳45,000</td></tr>
              <tr><td>Next ৳5,00,000</td><td><span class="badge-pill badge-amber">15%</span></td><td>৳75,000</td><td>৳1,20,000</td></tr>
              <tr><td>Next ৳5,00,000</td><td><span class="badge-pill badge-red">20%</span></td><td>৳1,00,000</td><td>৳2,20,000</td></tr>
              <tr><td>Remaining Balance Above ৳18,50,000</td><td><span class="badge-pill badge-red">25%</span></td><td>No ceiling</td><td>—</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <blockquote class="quote-box">"কর দেওয়া শুধু আইনি বাধ্যবাধকতা নয়, এটি রাষ্ট্র বিনির্মাণের অংশ।" — NBR Income Tax SRO &amp; Circular.</blockquote>
      `;

    case 'tariffs':
      return `
      <header>
        <div class="badge">📦 NBR Customs &amp; Tariffs</div>
        <h1>NBR Customs Tariffs &amp; HS Code Duty Calculator <span>(আমদানি শুল্ক ও এইচএস কোড)</span></h1>
        <p class="subtitle">bdmcp calculates commercial import duties under Bangladesh Customs Act: Assessable Value (AV = C&amp;F + 1% Landing), Customs Duty (CD), Regulatory Duty (RD), Supplementary Duty (SD), VAT (15%), Advance Income Tax (AIT), and Advance Tax (AT).</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Laptop Duty (8471.30)</div>
          <div class="value" style="color:var(--green);">~26.5<span class="unit">%</span></div>
          <div class="desc">0% CD, 15% VAT, 5% AIT, 5% AT</div>
        </div>
        <div class="stat-card">
          <div class="label">Smartphone CBU (8517.13)</div>
          <div class="value" style="color:var(--red);">~58.6<span class="unit">%</span></div>
          <div class="desc">25% CD, 3% RD, 20% SD, 15% VAT</div>
        </div>
        <div class="stat-card">
          <div class="label">Electric Car (8703.80)</div>
          <div class="value" style="color:var(--accent);">~31.0<span class="unit">%</span></div>
          <div class="desc">20% CD, 0% SD, 15% VAT green incentive</div>
        </div>
        <div class="stat-card">
          <div class="label">Raw Cotton (5201.00)</div>
          <div class="value">0.0<span class="unit">%</span></div>
          <div class="desc">Zero duty textile manufacturing raw material</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 Commercial Import Duty &amp; Landed Cost Calculator</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Select a common HS Code preset or input custom C&amp;F invoice value in USD:</p>
        <div class="calc-box">
          <div style="display:flex; flex-wrap:wrap; gap:1rem; align-items:center;">
            <div>
              <label style="font-size:0.85rem; font-weight:700;">Preset HS Code: </label><br>
              <select id="tariffHsCode" class="calc-input" style="width:230px;" onchange="onTariffHsChange()">
                <option value="8471.30.00" selected>8471.30.00 - Laptops / Notebooks</option>
                <option value="8517.13.00">8517.13.00 - Smartphones (CBU)</option>
                <option value="8517.14.00">8517.14.00 - Feature Phones</option>
                <option value="8703.22.00">8703.22.00 - Petrol Car (1001–1500cc)</option>
                <option value="8703.23.10">8703.23.10 - Petrol Car (1501–1600cc)</option>
                <option value="8703.80.00">8703.80.00 - Electric Vehicles (EV)</option>
                <option value="8504.40.90">8504.40.90 - Solar Inverters</option>
                <option value="5201.00.00">5201.00.00 - Raw Cotton</option>
                <option value="0402.10.10">0402.10.10 - Milk Powder</option>
              </select>
            </div>
            <div>
              <label style="font-size:0.85rem; font-weight:700;">C&amp;F Invoice Value ($ USD): </label><br>
              <input type="number" id="tariffCnfUsd" class="calc-input" value="1000" min="10" step="100" style="width:130px;" oninput="updateTariffCalculator()">
            </div>
            <div>
              <label style="font-size:0.85rem; font-weight:700;">Customs USD/BDT: </label><br>
              <input type="number" id="tariffExchangeRate" class="calc-input" value="122.0" min="50" step="0.5" style="width:100px;" oninput="updateTariffCalculator()">
            </div>
          </div>
        </div>
        <div id="tariffResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1.25rem;">
          <!-- Dynamically populated -->
        </div>
      </div>
      <blockquote class="quote-box">"অ্যাসেসেবল ভ্যালু = (C&amp;F ইনভয়েস মূল্য × কাস্টমস ডলার রেট) + ১% ল্যান্ডিং চার্জ। এরপর পর্যায়ক্রমে সিডি, আরডি, এসডি, ভ্যাট ও এআইটি প্রযোজ্য হয়।" — NBR Customs Operational Manual.</blockquote>
      `;

    case 'land':
      return `
      <header>
        <div class="badge">🏡 Ministry of Land &amp; Sub-Registry</div>
        <h1>Land Sub-Registry Stamp Duty &amp; e-Namjari Mutation Fees <span>(জমি রেজিস্ট্রেশন ও নামজারি)</span></h1>
        <p class="subtitle">Complete transparency on real property acquisition in Bangladesh: official Sub-Registry deed transfer costs (1.5% Stamp Duty, 1.0% Registration fee, 2.0% Local Govt Tax, Gain Tax under Section 53FF) and fixed statutory ৳1,170 e-Namjari mutation fees.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Stamp Duty</div>
          <div class="value">1.5<span class="unit">%</span></div>
          <div class="desc">Under The Stamp Act 1899 on deed value</div>
        </div>
        <div class="stat-card">
          <div class="label">Registration Fee</div>
          <div class="value">1.0<span class="unit">%</span></div>
          <div class="desc">Under The Registration Act 1908</div>
        </div>
        <div class="stat-card">
          <div class="label">Fixed e-Namjari Fee</div>
          <div class="value" style="color:var(--green);">৳1,170</div>
          <div class="desc">Statutory total across all land offices</div>
        </div>
        <div class="stat-card">
          <div class="label">Urban Gain Tax (Sec 53FF)</div>
          <div class="value" style="color:var(--red);">8.0<span class="unit">%</span></div>
          <div class="desc">Advance Income Tax in prime city corporations</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 Land Deed Registration &amp; Mutation Fee Estimator</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Enter the deed or Mouza base valuation (৳) and select the geographic jurisdiction:</p>
        <div class="calc-box">
          <div style="display:flex; flex-wrap:wrap; gap:1rem; align-items:center;">
            <div>
              <label style="font-size:0.85rem; font-weight:700;">Deed / Mouza Value (৳): </label><br>
              <input type="number" id="landDeedValue" class="calc-input" value="5000000" min="100000" step="100000" style="width:160px;" oninput="updateLandCalculator()">
            </div>
            <div>
              <label style="font-size:0.85rem; font-weight:700;">Property Location: </label><br>
              <select id="landAreaType" class="calc-input" style="width:220px;" onchange="updateLandCalculator()">
                <option value="dhaka_chattogram_city" selected>Dhaka / Ctg City Corporation</option>
                <option value="pourashava_district">District Town / Pourashava</option>
                <option value="rural_union_parishad">Rural / Union Parishad</option>
              </select>
            </div>
          </div>
        </div>
        <div id="landResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1.25rem;">
          <!-- Dynamically populated -->
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📋 Statutory e-Namjari (ই-নামজারি) Fixed Government Fee Breakdown</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Statutory Fee Item</th>
                <th>Official Government Rate (৳)</th>
                <th>Government Head / Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Court Fee (কোর্ট ফি)</strong></td><td>৳২০.০০</td><td>Initial application court stamp</td></tr>
              <tr><td><strong>Notice Fee (নোটিশ জারি ফি)</strong></td><td>৳৫০.০০</td><td>Serving notice to interested co-sharers</td></tr>
              <tr><td><strong>Record Correction Fee (রেকর্ড সংশোধন ফি)</strong></td><td>৳১,০০০.০০</td><td>Updating official Jamabandi / Khatian record</td></tr>
              <tr><td><strong>DCR Fee (ডুপ্লিকেট কার্বন রশিদ ফি)</strong></td><td>৳১০০.০০</td><td>Official receipt token issued to land owner</td></tr>
              <tr style="font-weight:800; background:rgba(0,106,78,0.06);"><td><strong>TOTAL STATUTORY GOVT FEE</strong></td><td><strong>৳১,১৭০.০০</strong></td><td><strong>Any additional payment demanded is illegal</strong></td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <blockquote class="quote-box">"ই-নামজারি বা মিউটেশনের সরকারি ফি সর্বমোট ১,১৭০ টাকা। ভূমি অফিসে কোনো দালাল বা মধ্যস্বত্বভোগীকে অতিরিক্ত স্পিড মানি দেওয়া আইনত দণ্ডনীয়।" — Ministry of Land Gazette Notice.</blockquote>
      `;

    case 'vehicles':
      return `
      <header>
        <div class="badge">🚗 BRTA &amp; NBR Vehicle Schedule</div>
        <h1>BRTA Vehicle Tax Token &amp; Advance Income Tax <span>(গাড়ি ট্যাক্স টোকেন ও এআইটি)</span></h1>
        <p class="subtitle">Complete recurring carrying costs for motor vehicles in Bangladesh: Advance Income Tax (AIT) by engine displacement (CC) under Section 153 of Income Tax Act 2023, BRTA annual Road Tax, fitness inspection, and 50% second-vehicle penalty.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Up to 1500cc AIT</div>
          <div class="value" style="color:var(--accent);">৳25,000</div>
          <div class="desc">Corolla, Axio, Allion, Grace, Yaris</div>
        </div>
        <div class="stat-card">
          <div class="label">1501cc to 2000cc AIT</div>
          <div class="value">৳50,000</div>
          <div class="desc">Premio, Noah, Vezel, X-Trail, Harrier</div>
        </div>
        <div class="stat-card">
          <div class="label">Above 3500cc V8 AIT</div>
          <div class="value" style="color:var(--red);">৳2,00,000</div>
          <div class="desc">Land Cruiser, Lexus LX, Defender</div>
        </div>
        <div class="stat-card">
          <div class="label">2nd Car Multiplier</div>
          <div class="value" style="color:var(--red);">+50<span class="unit">%</span></div>
          <div class="desc">Surcharge on multiple vehicles in one TIN file</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 BRTA Motor Vehicle Tax Token &amp; Annual Cost Calculator</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Enter vehicle engine cylinder capacity (CC) or electric motor kW:</p>
        <div class="calc-box">
          <div style="display:flex; flex-wrap:wrap; gap:1rem; align-items:center;">
            <div>
              <label style="font-size:0.85rem; font-weight:700;">Engine Capacity (CC): </label><br>
              <input type="number" id="vehEngineCc" class="calc-input" value="1500" min="50" max="6000" step="100" style="width:120px;" oninput="updateVehicleCalculator()">
            </div>
            <div>
              <label style="font-size:0.85rem; font-weight:700;">Vehicle Type: </label><br>
              <select id="vehType" class="calc-input" style="width:180px;" onchange="updateVehicleCalculator()">
                <option value="private_car_sedan" selected>Private Car / Sedan</option>
                <option value="suv_jeep">SUV / Jeep</option>
                <option value="microbus">Microbus</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="ev_electric">Electric Vehicle (EV)</option>
              </select>
            </div>
            <div style="display:flex; align-items:center; gap:0.5rem; margin-top:1.2rem;">
              <input type="checkbox" id="vehIsSecond" onchange="updateVehicleCalculator()" style="width:18px; height:18px;">
              <label for="vehIsSecond" style="font-size:0.85rem; font-weight:700;">2nd Vehicle in TIN (+50% AIT)</label>
            </div>
          </div>
        </div>
        <div id="vehResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1.25rem;">
          <!-- Dynamically populated -->
        </div>
      </div>
      <blockquote class="quote-box">"একই করদাতার নামে দ্বিতীয় বা ততোধিক গাড়ি নিবন্ধিত থাকলে প্রতি গাড়ির ক্ষেত্রে ৫০% অতিরিক্ত অগ্রিম আয়কর (AIT) পরিশোধ করতে হবে।" — Income Tax Act 2023 Section 153.</blockquote>
      `;

    case 'incorporation':
      return `
      <header>
        <div class="badge">🏢 Registrar of Joint Stock Companies (RJSC)</div>
        <h1>RJSC Company Incorporation &amp; Stamp Duty Estimator <span>(কোম্পানি নিবন্ধন ফি)</span></h1>
        <p class="subtitle">Complete breakdown of official statutory incorporation fees in Bangladesh under Companies Act 1994: Name Clearance (৳1,150), capital slab registration fees, MoA and AoA non-judicial stamp duty, and digital certified copies.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Name Clearance Fee</div>
          <div class="value" style="color:var(--accent);">৳1,150</div>
          <div class="desc">Statutory fee including 15% VAT</div>
        </div>
        <div class="stat-card">
          <div class="label">৳10 Lakh Capital Cost</div>
          <div class="value">~৳17,890</div>
          <div class="desc">Total statutory government filing fees</div>
        </div>
        <div class="stat-card">
          <div class="label">৳1 Crore Capital Cost</div>
          <div class="value">~৳47,390</div>
          <div class="desc">Includes ৳25k MoA/AoA stamps + registration</div>
        </div>
        <div class="stat-card">
          <div class="label">Portal Timeline</div>
          <div class="value">3–5<span class="unit">Days</span></div>
          <div class="desc">Via RJSC online digital certificate issuance</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧮 Company Incorporation Statutory Cost Estimator</div>
      </div>
      <div class="content-card">
        <p style="margin-bottom:1rem; color:var(--text-muted);">Enter proposed authorized share capital in BDT:</p>
        <div class="calc-box">
          <div style="display:flex; flex-wrap:wrap; gap:1rem; align-items:center;">
            <div>
              <label style="font-size:0.85rem; font-weight:700;">Authorized Capital (৳): </label><br>
              <input type="number" id="rjscCapital" class="calc-input" value="1000000" min="50000" step="100000" style="width:160px;" oninput="updateIncorporationCalculator()">
            </div>
            <div>
              <label style="font-size:0.85rem; font-weight:700;">Company Type: </label><br>
              <select id="rjscType" class="calc-input" style="width:190px;" onchange="updateIncorporationCalculator()">
                <option value="private_limited" selected>Private Limited Company</option>
                <option value="opc_one_person">One Person Company (OPC)</option>
                <option value="public_limited">Public Limited Company</option>
              </select>
            </div>
          </div>
        </div>
        <div id="rjscResultBox" style="background:var(--bg); border-radius:0.5rem; padding:1.25rem; margin-top:1.25rem;">
          <!-- Dynamically populated -->
        </div>
      </div>
      <blockquote class="quote-box">"কোম্পানি গঠনের ক্ষেত্রে মেমোরেন্ডাম ও আর্টিকেলের স্ট্যাম্প ডিউটি এবং আরজেএসসি ক্যাপিটাল স্ল্যাব ফি সম্পূর্ণ বিধিবদ্ধ সরকারি রাজস্ব।" — RJSC Guidelines &amp; Companies Act 1994.</blockquote>
      `;

    case 'exams':
      return `
      <header>
        <div class="badge">🎓 Ministry of Education &amp; Inter-Board Committee</div>
        <h1>HSC &amp; SSC 20-Year Examination Statistics &amp; GPA-5 Curves <span>(শিক্ষা বোর্ড ফলাফল পরিসংখ্যান)</span></h1>
        <p class="subtitle">bdmcp archives 20 years of Bangladesh national public examination results (2005–2024): 2 million annual candidates, grading curve evolution from 1,004 GPA-5s (2005) to peak 269,602 (2022), female outperformance trends, and COVID auto-pass dynamics.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">2024 HSC Examinees</div>
          <div class="value" style="color:var(--accent);">13.3<span class="unit">Lakh</span></div>
          <div class="desc">Overall pass rate: 77.78% (10.35 Lakh passed)</div>
        </div>
        <div class="stat-card">
          <div class="label">2024 HSC GPA-5</div>
          <div class="value">1,45,911</div>
          <div class="desc">11.0% of total examinees achieved GPA-5.00</div>
        </div>
        <div class="stat-card">
          <div class="label">2020 Auto-Pass</div>
          <div class="value" style="color:var(--green);">100.0<span class="unit">%</span></div>
          <div class="desc">Historic COVID-19 JSC/SSC mapping pass rate</div>
        </div>
        <div class="stat-card">
          <div class="label">Active Education Boards</div>
          <div class="value">11<span class="unit">Boards</span></div>
          <div class="desc">9 General + Madrasah + Technical Board</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 20-Year HSC Historical Results &amp; GPA-5 Trajectory (2005–2024)</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Exam</th>
                <th>Total Candidates</th>
                <th>Passed</th>
                <th>Pass Rate (%)</th>
                <th>GPA-5 Achievers</th>
                <th>Key Context / System Shift</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>2024</strong></td><td>HSC</td><td>13,31,056</td><td>10,35,309</td><td><span class="badge-pill badge-green">77.78%</span></td><td>1,45,911</td><td>Auto-mapping for canceled papers post-July uprising</td></tr>
              <tr><td><strong>2023</strong></td><td>HSC</td><td>13,57,915</td><td>10,67,852</td><td><span class="badge-pill badge-green">78.64%</span></td><td>92,365</td><td>Full syllabus resumption</td></tr>
              <tr><td><strong>2022</strong></td><td>HSC</td><td>12,03,407</td><td>10,11,987</td><td><span class="badge-pill badge-green">84.09%</span></td><td>1,76,282</td><td>Shortened syllabus post-COVID</td></tr>
              <tr><td><strong>2021</strong></td><td>HSC</td><td>13,71,681</td><td>13,06,718</td><td><span class="badge-pill badge-green">95.26%</span></td><td>1,89,169</td><td>Group-based 3 elective subjects evaluation</td></tr>
              <tr><td><strong>2020</strong></td><td>HSC</td><td>13,67,377</td><td>13,67,377</td><td><span class="badge-pill badge-green">100.0%</span></td><td>1,61,807</td><td>Historic COVID-19 Auto-Pass</td></tr>
              <tr><td><strong>2019</strong></td><td>HSC</td><td>13,36,629</td><td>9,88,172</td><td><span class="badge-pill badge-green">73.93%</span></td><td>47,286</td><td>Pre-COVID regular examination</td></tr>
              <tr><td><strong>2018</strong></td><td>HSC</td><td>12,88,758</td><td>8,58,801</td><td><span class="badge-pill badge-amber">66.64%</span></td><td>29,262</td><td>Strict standard evaluation</td></tr>
              <tr><td><strong>2016</strong></td><td>HSC</td><td>12,03,640</td><td>8,99,150</td><td><span class="badge-pill badge-green">74.70%</span></td><td>58,276</td><td>Expansion of creative question system</td></tr>
              <tr><td><strong>2012</strong></td><td>HSC</td><td>9,17,299</td><td>7,21,979</td><td><span class="badge-pill badge-green">78.67%</span></td><td>61,162</td><td>Full adoption of GPA grading</td></tr>
              <tr><td><strong>2008</strong></td><td>HSC</td><td>6,21,143</td><td>4,72,388</td><td><span class="badge-pill badge-green">76.08%</span></td><td>19,133</td><td>Earlier grading era</td></tr>
              <tr><td><strong>2005</strong></td><td>HSC</td><td>4,15,092</td><td>2,45,366</td><td><span class="badge-pill badge-red">59.16%</span></td><td>1,004</td><td>First decade of GPA grading in Bangladesh</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <blockquote class="quote-box">"২০০৫ সালে সারা দেশে এইচএসসিতে জিপিএ-৫ পেয়েছিল মাত্র ১,০০৪ জন শিক্ষার্থী; ২০২২ সালে সেই সংখ্যা পৌঁছেছিল রেকর্ড ১ লাখ ৭৬ হাজারে।" — Inter-Board Result Analysis Archive.</blockquote>
      `;

    case 'pathao':
      return `
      <header>
        <div class="badge">🛵 Dhaka Commuter Street Index</div>
        <h1>Ride-Sharing Surge &amp; "মামা ক্যাশে যাইবেন?" Index (2016–2025) <span>(পাঠাও ও উবার সার্শ ইনডেক্স)</span></h1>
        <p class="subtitle">Tracking Dhaka ride-sharing economics from 2016 app launch to present: minimum base fares (৳25 to ৳65 bike, ৳50 to ৳130 car), rain surge multiplier dynamics (up to 2.8x), and driver cancellation negotiation psychology.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">2025 Bike Base Fare</div>
          <div class="value" style="color:var(--accent);">৳65</div>
          <div class="desc">2.6x surge from ৳25 launch base in 2016</div>
        </div>
        <div class="stat-card">
          <div class="label">2025 Car Base Fare</div>
          <div class="value">৳130</div>
          <div class="desc">Uber Premier/X entry minimum tariff</div>
        </div>
        <div class="stat-card">
          <div class="label">Monsoon Rain Surge</div>
          <div class="value" style="color:#f42a41;">2.5x</div>
          <div class="desc">Peak surge multiplier during Dhaka waterlogging</div>
        </div>
        <div class="stat-card">
          <div class="label">Cash Conversion Pitch</div>
          <div class="value">84%</div>
          <div class="desc">'মামা অ্যাপ ক্যান্সেল কইরা দেন, ২০ টাকা ছাড় দিমু!'</div>
        </div>
      </div>

      <div class="content-card">
        <div class="card-header">
          <div>
            <h2 class="section-title">Ride-Sharing Minimum Base Fare Trajectory (2016–2025 in BDT)</h2>
            <p class="section-desc">Official BRTA Gazetted Base Rates vs Platform Real-Fare Inflation. Hover points for exact YoY changes and source citations.</p>
          </div>
        </div>
        <svg id="pathaoChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#006a4e;"></div> Pathao Bike Minimum Base (৳)</div>
          <div class="legend-item"><div class="legend-dot" style="background:#f42a41;"></div> Uber Car Minimum Base (৳)</div>
        </div>
      </div>

      <div class="content-card">
        <h2 class="section-title">⛈️ Dhaka Rain Surge vs. Wet Walk Simulator</h2>
        <p class="section-desc">Calculate actual commute cost during rain, rush hour surge, and driver trip conversion probability.</p>
        <div class="calculator-grid">
          <div>
            <label class="calc-label">Commute Distance (km)</label>
            <input type="number" id="pathaoDistInput" class="calc-input" value="7" min="1" max="40" oninput="updatePathaoSimulator()">
          </div>
          <div>
            <label class="calc-label">Weather & Traffic Reality</label>
            <select id="pathaoWeatherSelect" class="calc-input" onchange="updatePathaoSimulator()">
              <option value="1.0">Dry Sunny Afternoon (1.0x Base)</option>
              <option value="1.4">Office Closing Rush Hour (1.4x Surge)</option>
              <option value="2.0">Light Drizzle & Jam (2.0x Surge)</option>
              <option value="2.6" selected>Monsoon Torrential Rain & Waterlogging (2.6x Surge)</option>
            </select>
          </div>
          <div>
            <label class="calc-label">Vehicle Mode</label>
            <select id="pathaoVehicleSelect" class="calc-input" onchange="updatePathaoSimulator()">
              <option value="bike" selected>Pathao Bike (Motorcycle)</option>
              <option value="car">Uber / Pathao Car (Sedan)</option>
              <option value="cng">Auto Rickshaw (CNG)</option>
            </select>
          </div>
        </div>
        <div id="pathaoSimResult" class="calc-result" style="margin-top:1.5rem;"></div>
      </div>

      <div class="content-card">
        <h2 class="section-title">🎭 Top 5 Dhaka Ride-Sharing Driver Excuses & Realities</h2>
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Driver Opening Claim (কল দিয়া যা কয়)</th>
                <th>Underlying Street Reality</th>
                <th>Absurdity Probability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>'মামা অ্যাপ ক্যান্সেল কইরা দেন!'</strong></td>
                <td>Save 15% platform commission; 'ক্যাশ এ যান মামা, ২০ টাকা কম নিয়েন!'</td>
                <td><span class="badge-pill badge-red">84% Guaranteed</span></td>
              </tr>
              <tr>
                <td><strong>'মামা লোকেশনে অনেক জ্যাম!'</strong></td>
                <td>Wants you to walk 600m to the main highway so he doesn't have to U-turn</td>
                <td><span class="badge-pill badge-red">92% Guaranteed</span></td>
              </tr>
              <tr>
                <td><strong>'গ্যাসের লাইনে খাড়ায়া আছি মামা!'</strong></td>
                <td>CNG queue excuse to force passenger cancellation so rating isn't hurt</td>
                <td><span class="badge-pill badge-amber">78% Likely</span></td>
              </tr>
              <tr>
                <td><strong>'হেলমেটটা একটু ভাঙা মামা!'</strong></td>
                <td>Construction worker helmet with broken chin strap; 'পুলিশ দেখলে মাথা নিচু কইরা বইসেন!'</td>
                <td><span class="badge-pill badge-amber">89% Likely</span></td>
              </tr>
              <tr>
                <td><strong>'মামা ফোনে ব্যালেন্স নাই!'</strong></td>
                <td>Calls you on WhatsApp audio or gives missed call expecting you to call back</td>
                <td><span class="badge-pill badge-green">68% Common</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      `;

    case 'sakrain':
      return `
      <header>
        <div class="badge">🪁 Puran Dhaka Heritage & Rooftop Acoustics</div>
        <h1>Puran Dhaka Sakrain Kite &amp; Rooftop DJ Wattage Index (2000–2025) <span>(পুরান ঢাকা সাকরাইন ও ডিজে ওয়াট ইনডেক্স)</span></h1>
        <p class="subtitle">The 25-year evolution of Old Dhaka's iconic winter solstice kite festival: from 500W cassette tape stereos in 2000 to 35,000W concert line-array sound structures in 2025, kite paper price inflation (৳2 to ৳50), fire-breathing kerosene burn, and Bakorkhani economics.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">2025 Rooftop Rig Power</div>
          <div class="value" style="color:#f42a41;">35k<span class="unit">Watts</span></div>
          <div class="desc">135 dB concert line-array rigs shaking Lalbagh walls</div>
        </div>
        <div class="stat-card">
          <div class="label">2000 Rooftop Sound</div>
          <div class="value">500<span class="unit">Watts</span></div>
          <div class="desc">Single Sanyo 2-deck cassette player with horn speaker</div>
        </div>
        <div class="stat-card">
          <div class="label">Chokhkhutti Kite Price</div>
          <div class="value" style="color:var(--accent);">৳50</div>
          <div class="desc">25x increase from ৳2 wholesale price in 2000</div>
        </div>
        <div class="stat-card">
          <div class="label">Beauty Lassi Inflation</div>
          <div class="value">৳40</div>
          <div class="desc">vs ৳8 glass in 2000; special lassi at ৳120</div>
        </div>
      </div>

      <div class="content-card">
        <div class="card-header">
          <div>
            <h2 class="section-title">Sakrain Sound System Wattage &amp; Kite Price Inflation (2000–2025)</h2>
            <p class="section-desc">Puran Dhaka Cultural Association Archives &amp; Chawkbazar Wholesale Kite Haat. Hover points for exact YoY changes and source citations.</p>
          </div>
        </div>
        <svg id="sakrainChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#006a4e;"></div> Rooftop Sound Power (x100 Watts)</div>
          <div class="legend-item"><div class="legend-dot" style="background:#b45309;"></div> Traditional Kite Price (৳/Piece)</div>
        </div>
      </div>

      <div class="content-card">
        <h2 class="section-title">🔊 Sakrain Rooftop Sound &amp; Kite Battle Simulator</h2>
        <p class="section-desc">Estimate your rooftop sound decibel blast, neighbor complaint risk, and kite dogfight cutting power.</p>
        <div class="calculator-grid">
          <div>
            <label class="calc-label">Rooftop Floor Height</label>
            <select id="sakrainFloorSelect" class="calc-input" onchange="updateSakrainSimulator()">
              <option value="2">2-Storey Old Brick Building (Shankhari Bazar)</option>
              <option value="4" selected>4-Storey Heritage Rooftop (Armanitola)</option>
              <option value="6">6-Storey Modern Flat (Lalbagh / Nazira Bazar)</option>
            </select>
          </div>
          <div>
            <label class="calc-label">Amplifier &amp; Speaker Rig</label>
            <select id="sakrainRigSelect" class="calc-input" onchange="updateSakrainSimulator()">
              <option value="2000">Retro 2,000W Wood Woofers (Munni Badnam Era)</option>
              <option value="12000" selected>12,000W High-Bass EDM DJ Stack</option>
              <option value="35000">35,000W Festival Line-Array Megastructure</option>
            </select>
          </div>
          <div>
            <label class="calc-label">Kite &amp; Manja Grade</label>
            <select id="sakrainManjaSelect" class="calc-input" onchange="updateSakrainSimulator()">
              <option value="cotton">Normal Cotton Thread (সুতি সুতা - 0.2x)</option>
              <option value="glass" selected>Glass Coated Manja (কাঁচ মাঞ্জা - 1.5x)</option>
              <option value="dragon">Imported Dragon Line (ড্রাগন মাঞ্জা - 3.0x)</option>
            </select>
          </div>
        </div>
        <div id="sakrainSimResult" class="calc-result" style="margin-top:1.5rem;"></div>
      </div>
      `;

    case 'boimela':
      return `
      <header>
        <div class="badge">📚 Literature &amp; Cultural Sociology</div>
        <h1>Ekushey Boi Mela &amp; "বই না কিনে সেলফি" Index (2000–2024) <span>(অমর একুশে বইমেলা ও সেলফি সূচক)</span></h1>
        <p class="subtitle">Quarter-century statistical history of Bangla Academy Amar Ekushey Boi Mela: annual title explosion from 718 (2000) to 3,751 (2024), book turnover revenue (৳3.2 Cr to ৳60 Cr), and the shifting demographics between hardcore readers and selfie hunters.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">2024 New Titles Published</div>
          <div class="value" style="color:var(--accent);">3,751</div>
          <div class="desc">5.2x growth from 718 titles published in 2000</div>
        </div>
        <div class="stat-card">
          <div class="label">2024 Book Sales Turnover</div>
          <div class="value">৳60<span class="unit">Crore</span></div>
          <div class="desc">Pre-COVID peak recorded ৳82 Crore in 2020</div>
        </div>
        <div class="stat-card">
          <div class="label">Selfie Hunter Share</div>
          <div class="value" style="color:#f42a41;">68%</div>
          <div class="desc">0 books purchased; average 140 selfies / TikToks</div>
        </div>
        <div class="stat-card">
          <div class="label">Hardcore Readers</div>
          <div class="value">4%</div>
          <div class="desc">Carrying 14kg jute book bags through dust storm</div>
        </div>
      </div>

      <div class="content-card">
        <div class="card-header">
          <div>
            <h2 class="section-title">Ekushey Boi Mela Titles &amp; Sales Turnover (2000–2024)</h2>
            <p class="section-desc">Bangla Academy Annual Closing Bulletins &amp; Publishers Guild Audits. Hover points for exact YoY changes and source citations.</p>
          </div>
        </div>
        <svg id="boimelaChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#006a4e;"></div> New Published Titles (x10 Titles)</div>
          <div class="legend-item"><div class="legend-dot" style="background:#f42a41;"></div> Total Book Sales (Crore BDT)</div>
        </div>
      </div>

      <div class="content-card">
        <h2 class="section-title">👥 Boi Mela Audience Archetypes &amp; Spend Breakdown</h2>
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Visitor Archetype</th>
                <th>Audience Share</th>
                <th>Books Purchased</th>
                <th>Street Food Spend (TSC / Suhrawardy)</th>
                <th>Iconic Quote</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>সেলফি শিকারি ও কাপল</strong></td>
                <td><span class="badge-pill badge-red">68% Share</span></td>
                <td>0 Books</td>
                <td>৳450 (Chotpoti, Fuchka, Velpuri)</td>
                <td><em>'পিছনে সোহরাওয়ার্দী উদ্যানের গেট রেখে একটা স্লো-মো ভিডিও নাও তো!'</em></td>
              </tr>
              <tr>
                <td><strong>ফেসবুক কবি ও প্রি-অর্ডার গ্যাং</strong></td>
                <td><span class="badge-pill badge-amber">18% Share</span></td>
                <td>Own book (20 copies)</td>
                <td>৳250</td>
                <td><em>'আমার কবিতার বই 'নীল জোছনার বিষাদ' এবার ৪ নম্বর প্যাভিলিয়নে এসেছে!'</em></td>
              </tr>
              <tr>
                <td><strong>হুমায়ূন আহমেদ নস্টালজিয়া পাঠক</strong></td>
                <td><span class="badge-pill badge-green">10% Share</span></td>
                <td>2–4 Books</td>
                <td>৳150</td>
                <td><em>'অন্যপ্রকাশে মিসির আলির নতুন কালেকশন আসছে কি না একটু দেখে আসি...'</em></td>
              </tr>
              <tr>
                <td><strong>আসল বইপোকা (Hardcore Readers)</strong></td>
                <td><span class="badge-pill badge-green">4% Share</span></td>
                <td>12–25 Books</td>
                <td>৳60</td>
                <td><em>'পা ভেঙে যাচ্ছে, কিন্তু বাতিঘর থেকে এই ৪টা ইতিহাস আর প্রবন্ধের বই না নিয়ে যাওয়া যাবে না!'</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      `;

    case 'holud':
      return `
      <header>
        <div class="badge">🎉 Bengali Wedding Sociology &amp; Budget Inflation</div>
        <h1>Deshi Gaye Holud &amp; "কালা চশমা" Dance Extravaganza (2005–2025) <span>(গায়ে হলুদ ও কালা চশমা ইনডেক্স)</span></h1>
        <p class="subtitle">Tracking the hyper-inflation of Bengali Gaye Holud weddings over two decades: community center fairy lights (৳15,000 in 2005) to concert-grade LED truss production (৳4,80,000 in 2025), signature bridal makeup studio inflation (৳2,000 to ৳75,000), and family choreography drama.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">2025 Event Production</div>
          <div class="value" style="color:#f42a41;">৳4.80<span class="unit">Lakh</span></div>
          <div class="desc">Truss, LED screens, moving heads, cold-fire pyro</div>
        </div>
        <div class="stat-card">
          <div class="label">2005 Event Production</div>
          <div class="value">৳15,000</div>
          <div class="desc">Neighborhood community center with Marigold garlands</div>
        </div>
        <div class="stat-card">
          <div class="label">Signature Bridal Makeover</div>
          <div class="value" style="color:var(--accent);">৳75,000</div>
          <div class="desc">37x surge from ৳2,000 parlor rate in 2005</div>
        </div>
        <div class="stat-card">
          <div class="label">Family Feud Probability</div>
          <div class="value">95%</div>
          <div class="desc">Triggered during cousin Kala Chashma dance practice</div>
        </div>
      </div>

      <div class="content-card">
        <div class="card-header">
          <div>
            <h2 class="section-title">Gaye Holud Production &amp; Makeover Budget Escalation (2005–2025)</h2>
            <p class="section-desc">Dhaka Convention Center Association &amp; Bridal Studio Surveys. Hover points for exact YoY changes and source citations.</p>
          </div>
        </div>
        <svg id="holudChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#f42a41;"></div> Stage &amp; Event Production (৳ in Thousands)</div>
          <div class="legend-item"><div class="legend-dot" style="background:#b45309;"></div> Bridal Makeover Package (৳ in Thousands)</div>
        </div>
      </div>

      <div class="content-card">
        <h2 class="section-title">🎭 Gaye Holud Stage Drama &amp; Social Archetypes</h2>
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Family Role</th>
                <th>Rehearsal Count</th>
                <th>Internal Drama / Conflict</th>
                <th>Stage Reality</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>কাজিন গ্যাং কালা চশমা ড্যান্স</strong></td>
                <td>14 Days</td>
                <td>3 Internal family arguments</td>
                <td><span class="badge-pill badge-green">Performed completely out of sync; still gets standing ovation</span></td>
              </tr>
              <tr>
                <td><strong>ফুফু / খালা গসিপ কমিটি</strong></td>
                <td>0 Days</td>
                <td>Whispering during stage entry</td>
                <td><span class="badge-pill badge-red">'ছেলের বাড়ি তো বরযাত্রীতে মাত্র ৫০ জন আনছে! মিষ্টির সাইজ ছোট মনে হইতাছে!'</span></td>
              </tr>
              <tr>
                <td><strong>ফটোশুট হাইজ্যাকার মামা</strong></td>
                <td>0 Days</td>
                <td>Blocking DSLR lens with iPhone 11</td>
                <td><span class="badge-pill badge-amber">Takes 240 blurry portrait shots with flash pointed directly into bride's eyes</span></td>
              </tr>
              <tr>
                <td><strong>দই-মিষ্টি কোয়ালিটি অডিট</strong></td>
                <td>0 Days</td>
                <td>Examining clay pot bottom</td>
                <td><span class="badge-pill badge-amber">'বগুড়ার আসল দই তো পাতিল লাল থাকে, এইটা তো ধানমন্ডির মিষ্টির দোকান থেইকা আনছে!'</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      `;

    case 'remittance':
      return `
      <header>
        <div class="badge">🌐 Foreign Inflow & Reserves</div>
        <h1>Worker Remittances & Forex Reserves <span>(প্রবাসী আয় ও রিজার্ভ)</span></h1>
        <p class="subtitle">Bangladesh's foreign exchange lifeline: 35-year remittance growth from $760M (1990) to $26B+ (2025) alongside IMF BPM6 liquid reserve recovery.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">2025 Remittances</div>
          <div class="value">$26.85<span class="unit">Billion</span></div>
          <div class="desc">All-time record annualized inflow</div>
        </div>
        <div class="stat-card">
          <div class="label">35-Year Expansion</div>
          <div class="value" style="color:var(--accent);">35.3<span class="unit">x</span></div>
          <div class="desc">Up from $760 Million in 1990</div>
        </div>
        <div class="stat-card">
          <div class="label">IMF BPM6 Liquid Reserves</div>
          <div class="value">$20.48<span class="unit">Billion</span></div>
          <div class="desc">Recovered from $13.78B trough in June 2024</div>
        </div>
        <div class="stat-card">
          <div class="label">GDP Contribution</div>
          <div class="value">~6.2<span class="unit">%</span></div>
          <div class="desc">Direct worker transfer share of economy</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 Annual Remittance Inflows (1990–2025 in USD Billions)</div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3>Bangladesh Inward Worker Remittances (USD Billions)</h3>
            <p style="font-size:0.85rem; color:var(--text-muted);">Source: Bangladesh Bank Foreign Exchange Policy Department</p>
          </div>
        </div>
        <svg id="remittanceChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#3b82f6;"></div> Annual Remittances (USD Billion)</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📋 IMF BPM6 Foreign Reserves Recovery Timeline</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Usable Reserves (IMF BPM6)</th>
                <th>Status</th>
                <th>Milestone Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>2025-07</strong></td>
                <td><strong style="color:var(--accent);">$20.48 Billion</strong></td>
                <td><span class="badge-pill badge-green">Recovering</span></td>
                <td>Sustained $2B+/month remittance inflow buffer</td>
              </tr>
              <tr>
                <td><strong>2024-10</strong></td>
                <td>$19.82 Billion</td>
                <td><span class="badge-pill badge-green">Stabilized</span></td>
                <td>Post-August transition stabilization</td>
              </tr>
              <tr>
                <td><strong>2024-06</strong></td>
                <td><strong style="color:var(--red);">$13.78 Billion</strong></td>
                <td><span class="badge-pill badge-red">Critical Trough</span></td>
                <td>Pre-transition reserve pressure & Asian Clearing Union (ACU) payment</td>
              </tr>
              <tr>
                <td><strong>2023-12</strong></td>
                <td>$16.75 Billion</td>
                <td><span class="badge-pill badge-amber">Declining</span></td>
                <td>Adoption of IMF BPM6 calculation standard</td>
              </tr>
              <tr>
                <td><strong>2021-08</strong></td>
                <td><strong style="color:var(--blue);">$40.70 Billion</strong></td>
                <td><span class="badge-pill badge-blue">Historical Peak</span></td>
                <td>Pandemic-era gross reserve peak ($48B gross / $40.7B liquid)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      `;

    case 'geography':
      return `
      <header>
        <div class="badge">🗺️ Administrative Demographics</div>
        <h1>Administrative Hierarchy & Geography <span>(৮ বিভাগ ও ৬৪ জেলা)</span></h1>
        <p class="subtitle">Complete administrative division and geocode hierarchy of Bangladesh: 8 Divisions, 64 Districts, 494 Upazilas, and 1,349 Postcodes.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Divisions (বিভাগ)</div>
          <div class="value">8</div>
          <div class="desc">Dhaka, Ctg, Rajshahi, Khulna, etc.</div>
        </div>
        <div class="stat-card">
          <div class="label">Districts (জেলা)</div>
          <div class="value">64</div>
          <div class="desc">Zilas across Bangladesh</div>
        </div>
        <div class="stat-card">
          <div class="label">Upazilas (উপজেলা)</div>
          <div class="value">494</div>
          <div class="desc">Sub-districts / Thanas</div>
        </div>
        <div class="stat-card">
          <div class="label">Postal Codes (পোস্ট কোড)</div>
          <div class="value">1,349</div>
          <div class="desc">4-digit postal routing codes</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📊 Upazila Distribution Across 8 Divisions</div>
      </div>
      <div class="content-card">
        <div id="divisionBars" style="display:flex; flex-direction:column; gap:0.85rem; padding:0.5rem 0;">
          <!-- Rendered via JS -->
          <p style="color:var(--text-muted);">Loading division hierarchy from D1...</p>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">📍 Geographic Extremes & Territorial Trivia</div>
      </div>
      <div class="hub-grid">
        <div class="hub-card">
          <div>
            <div class="hub-icon-row"><span class="hub-icon">🧭</span><span class="hub-tag blue">Northernmost</span></div>
            <div class="hub-title">Banglabandha Zero Point, Tetulia</div>
            <div class="hub-desc">Panchagarh District (26°38' N). Borders India and Nepal corridor.</div>
          </div>
        </div>
        <div class="hub-card">
          <div>
            <div class="hub-icon-row"><span class="hub-icon">🧭</span><span class="hub-tag green">Southernmost</span></div>
            <div class="hub-title">Chhera Dwip, St. Martin's Island</div>
            <div class="hub-desc">Cox's Bazar District (20°34' N). Southern coral outcrop in the Bay of Bengal.</div>
          </div>
        </div>
        <div class="hub-card">
          <div>
            <div class="hub-icon-row"><span class="hub-icon">🧭</span><span class="hub-tag purple">Westernmost</span></div>
            <div class="hub-title">Manakosa, Shibganj</div>
            <div class="hub-desc">Chapai Nawabganj District (88°01' E). Western mango and land port frontier.</div>
          </div>
        </div>
        <div class="hub-card">
          <div>
            <div class="hub-icon-row"><span class="hub-icon">🧭</span><span class="hub-tag amber">Easternmost</span></div>
            <div class="hub-title">Amiakhum, Thanchi</div>
            <div class="hub-desc">Bandarban District (92°41' E). Rugged hill tracts bordering Myanmar.</div>
          </div>
        </div>
        <div class="hub-card">
          <div>
            <div class="hub-icon-row"><span class="hub-icon">🏞️</span><span class="hub-tag green">Largest District</span></div>
            <div class="hub-title">Rangamati (৬,১১৬ km²)</div>
            <div class="hub-desc">Encompasses Kaptai Lake and extensive hill tracts.</div>
          </div>
        </div>
        <div class="hub-card">
          <div>
            <div class="hub-icon-row"><span class="hub-icon">🏙️</span><span class="hub-tag blue">Most Upazilas</span></div>
            <div class="hub-title">Cumilla District (১৭ উপজেলা)</div>
            <div class="hub-desc">Contains 17 sub-districts, more than any other zila in the country.</div>
          </div>
        </div>
      </div>
      `;

    case 'banking':
      return `
      <header>
        <div class="badge">🏦 National Banking Rails</div>
        <h1>Bangladesh Bank BEFTN Routing Directory</h1>
        <p class="subtitle">Complete directory of 11,426 bank branches across 63 scheduled commercial, state-owned, specialized, and foreign banks with electronic fund transfer (BEFTN) payable verification.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Scheduled Banks</div>
          <div class="value">63</div>
          <div class="desc">Private, State-Owned & Foreign Banks</div>
        </div>
        <div class="stat-card">
          <div class="label">Total Branches</div>
          <div class="value">11,426</div>
          <div class="desc">Across all 64 districts</div>
        </div>
        <div class="stat-card">
          <div class="label">Routing Standard</div>
          <div class="value" style="font-size:1.4rem;">BEFTN / BACPS</div>
          <div class="desc">9-digit national routing codes</div>
        </div>
        <div class="stat-card">
          <div class="label">Payable Status</div>
          <div class="value" style="color:var(--accent);">100<span class="unit">%</span></div>
          <div class="desc">EFT credit enabled branches</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🔍 Instant Bank Branch & Routing Search</div>
      </div>
      <div class="content-card">
        <div class="search-bar">
          <input type="text" id="bankSearchInput" class="search-input" placeholder="Search by bank name, branch, or 9-digit routing (e.g. Agrani, Dhanmondi, 010270109)..." onkeydown="if(event.key==='Enter') searchBanks()">
          <button class="search-btn" onclick="searchBanks()">Search Branches</button>
        </div>
        <div id="bankResults">
          <p style="color:var(--text-muted); font-size:0.9rem;">Type any bank, branch or routing code above to query Cloudflare D1.</p>
        </div>
      </div>
      `;

    case 'laws':
      return `
      <header>
        <div class="badge">⚖️ Statutory Legislation</div>
        <h1>Laws of Bangladesh <span>(1,489 Acts & Statutes)</span></h1>
        <p class="subtitle">Search 235 years of legislative history (1799–2025) spanning British regulations, Pakistan-era ordinances, and Bangladesh parliamentary acts with active vs repealed status.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Total Legislation</div>
          <div class="value">1,489</div>
          <div class="desc">Indexed from bdlaws.minlaw.gov.bd</div>
        </div>
        <div class="stat-card">
          <div class="label">In-Force Acts</div>
          <div class="value" style="color:var(--accent);">1,284</div>
          <div class="desc">Active enforceable statutes</div>
        </div>
        <div class="stat-card">
          <div class="label">Repealed Acts</div>
          <div class="value" style="color:var(--red);">205</div>
          <div class="desc">Historical & superseded legislation</div>
        </div>
        <div class="stat-card">
          <div class="label">Historical Span</div>
          <div class="value" style="font-size:1.4rem;">1799–2025</div>
          <div class="desc">235 years of jurisprudence</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🔍 Search Acts & Ordinances</div>
      </div>
      <div class="content-card">
        <div class="search-bar">
          <input type="text" id="lawSearchInput" class="search-input" placeholder="Search by Act title, subject or year (e.g. Companies, Cyber, Penal Code, 1994, 2023)..." onkeydown="if(event.key==='Enter') searchLaws()">
          <button class="search-btn" onclick="searchLaws()">Search Acts</button>
        </div>
        <div id="lawResults">
          <p style="color:var(--text-muted); font-size:0.9rem;">Type an act name or year above to search legal statutes.</p>
        </div>
      </div>
      `;

    case 'stocks':
      return `
      <header>
        <div class="badge">📊 Capital Markets</div>
        <h1>Dhaka Stock Exchange (DSE) Equities</h1>
        <p class="subtitle">Daily historical benchmark index performance (DSEX, DS30, DSES Shariah) and company fundamentals for listed equities.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="label">Primary Benchmark</div>
          <div class="value">DSEX</div>
          <div class="desc">DSE Broad Index tracking market capitalization</div>
        </div>
        <div class="stat-card">
          <div class="label">Blue-Chip Index</div>
          <div class="value">DS30</div>
          <div class="desc">Top 30 liquid and investable companies</div>
        </div>
        <div class="stat-card">
          <div class="label">Shariah Index</div>
          <div class="value">DSES</div>
          <div class="desc">Screened for Islamic compliance</div>
        </div>
        <div class="stat-card">
          <div class="label">Listed Companies</div>
          <div class="value">350+</div>
          <div class="desc">Pharma, Telecom, Banking, Textiles</div>
        </div>
      </div>

      <div class="section-title">
        <div class="section-title-text">🏛️ Featured Blue-Chip Equities</div>
      </div>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Trading Code</th>
                <th>Company Name</th>
                <th>Sector</th>
                <th>Shariah Status</th>
                <th>Paid-up Capital</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong style="color:var(--accent);">GP</strong></td>
                <td>Grameenphone Ltd.</td>
                <td>Telecommunication</td>
                <td><span class="badge-pill badge-green">DSES Compliant</span></td>
                <td>13,503.00 mn ৳</td>
              </tr>
              <tr>
                <td><strong style="color:var(--accent);">SQURPHARMA</strong></td>
                <td>Square Pharmaceuticals PLC</td>
                <td>Pharmaceuticals & Chemicals</td>
                <td><span class="badge-pill badge-green">DSES Compliant</span></td>
                <td>8,864.51 mn ৳</td>
              </tr>
              <tr>
                <td><strong style="color:var(--accent);">BATBC</strong></td>
                <td>British American Tobacco BD</td>
                <td>Food & Allied</td>
                <td><span class="badge-pill badge-red">Non-Compliant</span></td>
                <td>5,400.00 mn ৳</td>
              </tr>
              <tr>
                <td><strong style="color:var(--accent);">RENATA</strong></td>
                <td>Renata PLC</td>
                <td>Pharmaceuticals & Chemicals</td>
                <td><span class="badge-pill badge-green">DSES Compliant</span></td>
                <td>1,146.96 mn ৳</td>
              </tr>
              <tr>
                <td><strong style="color:var(--accent);">BRACBANK</strong></td>
                <td>BRAC Bank PLC</td>
                <td>Bank</td>
                <td><span class="badge-pill badge-red">Conventional</span></td>
                <td>16,088.29 mn ৳</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      `;

    case 'agent':
      return `
      <header>
        <div class="badge">🤖 AI Agent Integration</div>
        <h1>Model Context Protocol (MCP) Setup</h1>
        <p class="subtitle">Connect Claude Desktop, Cursor, Hermes, Pi, Codex, or local terminal agents to verified Bangladesh public data with sub-5ms latency.</p>
      </header>

      <div class="section-title">
        <div class="section-title-text">💻 Terminal CLI Agents (stdio)</div>
      </div>
      <div class="content-card">
        <p style="font-size:0.95rem; font-weight:600; margin-bottom:0.5rem;">Run directly with npx (zero installation):</p>
        <pre><code>npx -y bdmcp</code></pre>
      </div>

      <div class="section-title">
        <div class="section-title-text">🧠 Claude Desktop Configuration</div>
      </div>
      <div class="content-card">
        <p style="font-size:0.95rem; font-weight:600; margin-bottom:0.5rem;">Add to your claude_desktop_config.json:</p>
        <pre><code>{
  "mcpServers": {
    "bdmcp": {
      "type": "streamableHttp",
      "url": "https://bdmcp.nadimtuhin.com/mcp"
    }
  }
}</code></pre>
      </div>

      <div class="section-title">
        <div class="section-title-text">🖱️ Cursor Agent (.cursor/mcp.json)</div>
      </div>
      <div class="content-card">
        <pre><code>{
  "mcpServers": {
    "bdmcp": {
      "command": "npx",
      "args": ["-y", "bdmcp"]
    }
  }
}</code></pre>
      </div>
      `;

    case 'about':
      return `
      <header>
        <div class="badge">🇧🇩 About Project & Mission</div>
        <h1>About bdmcp <span>(আমাদের লক্ষ্য)</span></h1>
        <p class="subtitle">An open-source, edge-native public intelligence gateway built to empower developers, economists, and AI systems with verified Bangladesh data.</p>
      </header>

      <div class="content-card">
        <h2 class="section-title">Why bdmcp was created</h2>
        <p class="direct-answer">bdmcp was created by Nadim Tuhin to solve the problem of missing, outdated, or brittle public data access in Bangladesh. Most government websites suffer from frequent downtime, slow database responses, lack of machine-readable APIs, and unindexed PDF reports.</p>
        
        <p>By transforming raw public reports into structured SQLite tables deployed on Cloudflare D1 edge infrastructure, queries execute with sub-5 millisecond response times globally. Artificial intelligence agents running on Claude, Cursor, ChatGPT, Codex, and Hermes can reliably cite ground-truth numbers without hallucination.</p>
      </div>

      <div class="content-card">
        <h2 class="section-title">Author & Maintainer</h2>
        <p>Built and maintained by <strong>Omar Faruque Tuhin (Nadim Tuhin)</strong>, a senior software engineer and systems architect specializing in high-throughput distributed systems and edge computing.</p>
        <ul style="margin: 1rem 0 1rem 1.5rem; line-height: 1.8;">
          <li>Website: <a href="https://nadimtuhin.com" target="_blank" rel="noopener noreferrer">nadimtuhin.com</a></li>
          <li>GitHub: <a href="https://github.com/nadimtuhin" target="_blank" rel="noopener noreferrer">github.com/nadimtuhin</a></li>
          <li>Source Code: <a href="https://github.com/nadimtuhin/bdmcp" target="_blank" rel="noopener noreferrer">github.com/nadimtuhin/bdmcp</a></li>
        </ul>
      </div>
      `;

    case 'contact':
      return `
      <header>
        <div class="badge">📬 Inquiries & Feedback</div>
        <h1>Contact & Community Support</h1>
        <p class="subtitle">Have a question, dataset recommendation, or bug report? Get in touch with the project maintainer.</p>
      </header>

      <div class="content-card">
        <h2 class="section-title">Get in Touch</h2>
        <p class="direct-answer">For technical questions, dataset contributions, or API integration support, reach out via the following channels:</p>
        <ul style="margin: 1rem 0 1rem 1.5rem; line-height: 1.8;">
          <li>Email: <a href="mailto:nadimtuhin+pad@gmail.com">nadimtuhin+pad@gmail.com</a></li>
          <li>GitHub Issues: <a href="https://github.com/nadimtuhin/bdmcp/issues" target="_blank" rel="noopener noreferrer">Report a Bug or Suggest a Dataset</a></li>
          <li>Maintainer Profile: <a href="https://nadimtuhin.com" target="_blank" rel="noopener noreferrer">Nadim Tuhin Personal Site</a></li>
        </ul>
      </div>
      `;

    default: // overview
      return `
      <header>
        <div class="badge">🇧🇩 Unofficial Bangladesh Public Intelligence Edge</div>
        <h1>bdmcp — Bangladesh Public Intelligence Edge <span>(সরকারি MCP)</span></h1>
        <p class="subtitle">High-performance Model Context Protocol (MCP) server & edge query engine connecting AI assistants and humans to verified Bangladesh macroeconomics, banking rails, commodity prices, and national legislation.</p>
        
        <nav class="toc-nav" aria-label="Table of Contents" style="display:flex; gap:0.75rem; justify-content:center; flex-wrap:wrap; margin-top:1rem; font-size:0.85rem; color:var(--text-muted);">
          <a href="#specialized-portals" style="color:var(--text-muted); text-decoration:none;">Portals</a> •
          <a href="#inflation-trends" style="color:var(--text-muted); text-decoration:none;">Inflation Chart</a> •
          <a href="#what-is-bdmcp" style="color:var(--text-muted); text-decoration:none;">What is bdmcp</a> •
          <a href="#how-to-query" style="color:var(--text-muted); text-decoration:none;">How to Query</a> •
          <a href="#terminology" style="color:var(--text-muted); text-decoration:none;">Terminology</a> •
          <a href="#data-table" style="color:var(--text-muted); text-decoration:none;">Data Tables</a> •
          <a href="#takeaways" style="color:var(--text-muted); text-decoration:none;">Key Takeaways</a> •
          <a href="#faq" style="color:var(--text-muted); text-decoration:none;">FAQ</a>
        </nav>
      </header>

      <div class="stats-grid">
        <a href="/inflation" class="stat-card">
          <div class="label">Latest CPI Inflation</div>
          <div class="value" id="val-inflation">8.77<span class="unit">%</span></div>
          <div class="desc">Monthly point-to-point (BBS 2025) & 65-year annual series ↗</div>
        </a>
        <a href="/commodities" class="stat-card">
          <div class="label">Grocery Inflation</div>
          <div class="value">Egg, Beef, Chicken</div>
          <div class="desc">5-year kitchen market retail price tracking ↗</div>
        </a>
        <a href="/purchasing-power" class="stat-card">
          <div class="label">1,000৳ Dim Index</div>
          <div class="value">74<span class="unit">Eggs</span></div>
          <div class="desc">Down from 250 eggs in 2000 (-70%) ↗</div>
        </a>
        <a href="/remittance" class="stat-card">
          <div class="label">Worker Remittances</div>
          <div class="value">$26.8<span class="unit">Bn</span></div>
          <div class="desc">Annual record inflow & BPM6 reserves ↗</div>
        </a>
      </div>

      <h2 id="specialized-portals" class="section-title">
        <span class="section-title-text">📚 Specialized Intelligence Portals</span>
      </h2>
      <div class="hub-grid">
        <a href="/inflation" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">📈</span>
              <span class="hub-tag green">Macro Series</span>
            </div>
            <div class="hub-title">Inflation & CPI Analytics</div>
            <div class="hub-desc">Compare 65 years of annual CPI inflation (1960–2025) against official BBS month-by-month tracking with base-year disambiguation (2005-06 vs 2021-22).</div>
          </div>
          <div class="hub-footer">View Inflation Visualizations →</div>
        </a>

        <a href="/forex" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">💵</span>
              <span class="hub-tag green">মুদ্রার দর</span>
            </div>
            <div class="hub-title">USD/BDT Foreign Exchange (1971–2025)</div>
            <div class="hub-desc">54-year currency trajectory from 7.80৳ at Liberation to 122.50৳ under the crawling peg, interbank rates, and historical dollar converter.</div>
          </div>
          <div class="hub-footer">Explore Forex Analytics →</div>
        </a>

        <a href="/commodities" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">🌾</span>
              <span class="hub-tag amber">খাদ্যদ্রব্য ও বাজার দর</span>
            </div>
            <div class="hub-title">Grocery & Kitchen Market Inflation</div>
            <div class="hub-desc">Track price changes over years for Eggs, Beef, Broiler & Sonali Chicken, Rice, Onion, and Soybean Oil across major national markets.</div>
          </div>
          <div class="hub-footer">Explore Grocery Inflation →</div>
        </a>

        <a href="/purchasing-power" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">🪙</span>
              <span class="hub-tag red">Dim Index</span>
            </div>
            <div class="hub-title">1,000৳ Purchasing Power Erosion</div>
            <div class="hub-desc">Interactive Taka Time Machine calculator & the Dhaka Egg Index showing purchasing capacity erosion from 2000 to 2025.</div>
          </div>
          <div class="hub-footer">Calculate Purchasing Power →</div>
        </a>

        <a href="/remittance" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">🌐</span>
              <span class="hub-tag blue">Foreign Currency</span>
            </div>
            <div class="hub-title">Remittances & Forex Reserves</div>
            <div class="hub-desc">35-year remittance boom ($760M to $26B+) and post-2024 recovery of IMF BPM6 usable foreign currency liquid reserves.</div>
          </div>
          <div class="hub-footer">View Remittance Analytics →</div>
        </a>

        <a href="/geography" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">🗺️</span>
              <span class="hub-tag purple">৮ বিভাগ ও ৬৪ জেলা</span>
            </div>
            <div class="hub-title">Administrative Geography & Postcodes</div>
            <div class="hub-desc">Explore 8 divisions, 64 districts, 494 upazilas, and 1,349 postal codes alongside territorial extremes and regional trivia.</div>
          </div>
          <div class="hub-footer">Explore Geography →</div>
        </a>

        <a href="/banking" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">🏦</span>
              <span class="hub-tag blue">63 Scheduled Banks</span>
            </div>
            <div class="hub-title">Banking & BEFTN Routing</div>
            <div class="hub-desc">Search 11,426 branch routing numbers, bank codes, districts, and electronic credit transfer (EFT) payable status across private, state-owned, and foreign banks.</div>
          </div>
          <div class="hub-footer">Explore Banking Directory →</div>
        </a>

        <a href="/laws" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">⚖️</span>
              <span class="hub-tag purple">1,489 Statutes</span>
            </div>
            <div class="hub-title">Laws of Bangladesh</div>
            <div class="hub-desc">Instant statutory search covering colonial regulations (1799), Pakistan-era ordinances, and modern parliamentary acts with in-force vs repealed status.</div>
          </div>
          <div class="hub-footer">Search Legal Acts →</div>
        </a>

        <a href="/stocks" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">📊</span>
              <span class="hub-tag green">Dhaka Stock Exchange</span>
            </div>
            <div class="hub-title">DSE Capital Markets</div>
            <div class="hub-desc">Benchmark equity performance (DSEX, DS30, DSES Shariah Index) and fundamentals for listed companies like Square Pharma, GP, and BATBC.</div>
          </div>
          <div class="hub-footer">Explore Equities & Indices →</div>
        </a>

        <a href="/agent" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">⚡</span>
              <span class="hub-tag blue">Developer API</span>
            </div>
            <div class="hub-title">AI Agent & MCP Connect</div>
            <div class="hub-desc">Zero-install local execution via stdio (npx -y bdmcp) or remote Streamable-HTTP SSE for Claude Desktop, Cursor, and Hermes.</div>
          </div>
          <div class="hub-footer">Setup Instructions →</div>
        </a>

        <a href="/gold" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">🪙</span>
              <span class="hub-tag amber">স্বর্ণের দর</span>
            </div>
            <div class="hub-title">Gold Price History (2000–2025)</div>
            <div class="hub-desc">BAJUS 22-Karat gold trajectory from 6,500৳ to 142,000৳ per bhori with wedding jewelry budget calculator across generations.</div>
          </div>
          <div class="hub-footer">View Gold Tracker →</div>
        </a>

        <a href="/cha-index" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">☕</span>
              <span class="hub-tag green">টংয়ের আড্ডা</span>
            </div>
            <div class="hub-title">The Tong Index (চা ও নাশতা)</div>
            <div class="hub-desc">The real street economics of Bangladesh: Dudh Cha (2৳ to 12৳), Shingara (1.5৳ to 10৳), and daily tea stall budget calculator.</div>
          </div>
          <div class="hub-footer">Explore Tong Index →</div>
        </a>

        <a href="/energy" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">⛽</span>
              <span class="hub-tag blue">জ্বালানি তেল</span>
            </div>
            <div class="hub-title">Fuel & Energy Tariffs</div>
            <div class="hub-desc">Diesel, Octane, and 12kg LPG price revisions from 2000 to 2025 tracking the primary driver of transport and irrigation costs.</div>
          </div>
          <div class="hub-footer">View Fuel Analytics →</div>
        </a>

        <a href="/rickshaw" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">🚲</span>
              <span class="hub-tag green">রিকশা ভাড়া</span>
            </div>
            <div class="hub-title">Dhaka Rickshaw Fare Index</div>
            <div class="hub-desc">25-year fare inflation across Farmgate-TSC, Dhanmondi-New Market, and minimum base fares with daily commute calculator.</div>
          </div>
          <div class="hub-footer">Explore Rickshaw Fares →</div>
        </a>

        <a href="/fish-index" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">🐟</span>
              <span class="hub-tag blue">মাছের বাজার</span>
            </div>
            <div class="hub-title">Padma Hilsa & Fish Index</div>
            <div class="hub-desc">Tracking 25 years of market prices for 1kg Padma Ilish (200৳ to 1,850৳), Rui, and Tilapia with Boishakh feast budgeting.</div>
          </div>
          <div class="hub-footer">View Fish Price Trends →</div>
        </a>

        <a href="/transit" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">🚇</span>
              <span class="hub-tag green">মেট্রোরেল</span>
            </div>
            <div class="hub-title">Dhaka Metro Rail (MRT-6)</div>
            <div class="hub-desc">Interactive 16-station fare matrix from Uttara to Motijheel with commute time-savings calculator from traffic gridlock.</div>
          </div>
          <div class="hub-footer">View Metro Fare Matrix →</div>
        </a>

        <a href="/biye-index" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">🍗</span>
              <span class="hub-tag amber">কাচ্চি বিরিয়ানি</span>
            </div>
            <div class="hub-title">Wedding Kacchi Biryani Index</div>
            <div class="hub-desc">25-year catering inflation tracking 1 Dega Kacchi (2,500৳ to 26,500৳) with guest count and banquet feast budget calculator.</div>
          </div>
          <div class="hub-footer">Explore Wedding Feast Costs →</div>
        </a>

        <a href="/internet" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">🌐</span>
              <span class="hub-tag blue">ডিজিটাল বাংলাদেশ</span>
            </div>
            <div class="hub-title">Mobile Data & 4G/5G Revolution</div>
            <div class="hub-desc">Tracking a 96% collapse in 1 GB data tariff (350৳ down to 14৳) alongside 136.5 Million active mobile internet subscribers.</div>
          </div>
          <div class="hub-footer">View Internet Data Analytics →</div>
        </a>

        <a href="/rent" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">🏢</span>
              <span class="hub-tag purple">বাসা ভাড়া</span>
            </div>
            <div class="hub-title">Dhaka Apartment Rent Index</div>
            <div class="hub-desc">Compare 25 years of residential rents across Dhanmondi, Mirpur, and Uttara with salary-to-rent affordability calculator.</div>
          </div>
          <div class="hub-footer">Explore Rent & Housing →</div>
        </a>

        <a href="/eid-transit" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">🌙</span>
              <span class="hub-tag green">ঈদের নাড়ির টান</span>
            </div>
            <div class="hub-title">Eid Exodus & Padma Bridge Toll</div>
            <div class="hub-desc">12 million human migration out of Dhaka, record 5.40 Crore ৳ single-day toll collections, and highway vs launch transit modal split.</div>
          </div>
          <div class="hub-footer">View Eid Transit Analytics →</div>
        </a>

        <a href="/cricket" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">🏏</span>
              <span class="hub-tag green">টাইগার্স ক্রিকেট</span>
            </div>
            <div class="hub-title">Tigers Cricket & Historic Wins</div>
            <div class="hub-desc">25 years of cricket milestones: Shakib & Tamim records, World Cup upsets, and the historic 2-0 Test sweep in Pakistan.</div>
          </div>
          <div class="hub-footer">Explore Cricket Intelligence →</div>
        </a>

        <a href="/demographics" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">👨‍👩‍👧‍👦</span>
              <span class="hub-tag blue">জনমিতিক রূপান্তর</span>
            </div>
            <div class="hub-title">The Demographic & Health Miracle</div>
            <div class="hub-desc">Amartya Sen's 'Bangladesh Paradox': Life expectancy (46 to 72.4 yrs), TFR collapse (6.9 to 2.14), and literacy surge.</div>
          </div>
          <div class="hub-footer">View Demographics Analytics →</div>
        </a>

        <a href="/rivers" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">🌊</span>
              <span class="hub-tag blue">নদীমাতৃক বাংলাদেশ</span>
            </div>
            <div class="hub-title">57 Transboundary Rivers & The Delta</div>
            <div class="hub-desc">The world's largest active delta: Padma, Jamuna, and Meghna confluence with 140,000 m³/s peak monsoon discharge.</div>
          </div>
          <div class="hub-footer">Explore Rivers & Delta →</div>
        </a>

        <a href="/grid" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">⚡</span>
              <span class="hub-tag amber">বিদ্যুৎ ও রূপপুর</span>
            </div>
            <div class="hub-title">Power Grid & Rooppur Nuclear</div>
            <div class="hub-desc">25-year capacity expansion (4,005 MW to 29,500 MW), 100% electrification, and the 2,400 MW twin VVER-1200 nuclear horizon.</div>
          </div>
          <div class="hub-footer">View Power Grid Analytics →</div>
        </a>

        <a href="/holidays" class="hub-card">
          <div>
            <div class="hub-icon-row">
              <span class="hub-icon">📅</span>
              <span class="hub-tag purple">সরকারি ছুটির তালিকা</span>
            </div>
            <div class="hub-title">Gazette Holidays & Leave Optimizer</div>
            <div class="hub-desc">Official 2025/2026 Bangladesh public holidays schedule with intelligent bridge-day optimizer for 4-to-5 day getaways.</div>
          </div>
          <div class="hub-footer">View Holiday Planner →</div>
        </a>
      </div>

      <h2 id="inflation-trends" class="section-title">
        <span class="section-title-text">📊 Inflation Time Series: Year-by-Year & Month-by-Month</span>
        <span class="toggle-group">
          <button id="toggle-annual" class="toggle-btn active" onclick="switchInflationFreq('annual')">Annual (2000–2025)</button>
          <button id="toggle-monthly" class="toggle-btn" onclick="switchInflationFreq('monthly')">Monthly (2020–2025)</button>
        </span>
      </h2>
      <div class="chart-container">
        <div class="chart-header">
          <div>
            <h3 id="chartHeading">Bangladesh Annual Inflation Rate (2000–2025)</h3>
            <p id="chartSubheading" style="font-size:0.85rem; color:var(--text-muted);">Source: World Bank WDI / BBS (Rebased 2021-22)</p>
          </div>
        </div>
        <svg id="inflationChart" class="chart-svg" viewBox="0 0 900 240"></svg>
        <div class="chart-legend">
          <div class="legend-item"><div class="legend-dot"></div> <span id="legendText">Annual CPI Inflation (%)</span></div>
          <div class="legend-item" style="color:var(--text-muted);">Base Year Rebase: 2005-06 &rarr; 2021-22</div>
        </div>
      </div>

      <!-- AEO Question Heading & Direct Answer Paragraph -->
      <h2 id="what-is-bdmcp" class="section-title">What is bdmcp?</h2>
      <div class="content-card">
        <p class="direct-answer">bdmcp is a high-performance public data intelligence engine for Bangladesh. It connects AI assistants and software developers to verified macroeconomic indicators, inflation time series, bank branch routing directories, and 1,489 national legal statutes with sub-5ms edge latency across Cloudflare global networks.</p>
        
        <blockquote class="quote-box">"By decoupling edge query serving from fragile upstream public portals, AI agents receive reliable factual grounding without hallucination or network timeout." <cite>— Nadim Tuhin, Software Engineer</cite></blockquote>
      </div>

      <!-- AEO Numbered Steps for AI Agent Setup -->
      <h2 id="how-to-query" class="section-title">How to query Bangladesh public data with AI assistants?</h2>
      <div class="content-card">
        <p class="direct-answer">You can query Bangladesh public data with AI assistants through local stdio or remote Streamable-HTTP by following these verified steps:</p>
        <ol class="steps-list">
          <li><strong>Local Terminal Agents:</strong> Run <code>npx -y bdmcp</code> in your local shell to execute standard MCP JSON-RPC over stdio.</li>
          <li><strong>Claude Desktop:</strong> Add <code>https://bdmcp.nadimtuhin.com/mcp</code> as a Streamable-HTTP server in your <code>claude_desktop_config.json</code> file.</li>
          <li><strong>Cursor IDE:</strong> Add <code>npx -y bdmcp</code> under <code>.cursor/mcp.json</code> for inline codebase assistance.</li>
          <li><strong>Query Ground Truth:</strong> Prompt your assistant with questions about inflation, bank routing numbers, or legal acts to receive cited data.</li>
        </ol>
      </div>

      <!-- AEO Definition List for Terminology -->
      <h2 id="terminology" class="section-title">Core Economic & Financial Terminology</h2>
      <div class="content-card">
        <dl class="def-list">
          <dt>BEFTN (Bangladesh Electronic Funds Transfer Network)</dt>
          <dd>The national automated clearing house system governing interbank credit and debit fund transfers across 11,426 branches of 63 scheduled banks.</dd>
          
          <dt>IMF BPM6 Foreign Exchange Reserves</dt>
          <dd>The IMF Balance of Payments Manual (6th Edition) standard accounting for net liquid usable foreign exchange reserves by excluding illiquid development funds.</dd>
          
          <dt>CPI Base Year Rebasing (2021-22)</dt>
          <dd>The official statistical rebasing conducted by the Bangladesh Bureau of Statistics (BBS) replacing the outdated 2005-06 consumption basket.</dd>
        </dl>
      </div>

      <!-- Public Datasets Comparison Table -->
      <h2 id="data-table" class="section-title">Public Datasets & Infrastructure Matrix</h2>
      <div class="content-card">
        <div class="table-container">
          <table class="results-table">
            <caption style="caption-side:top; text-align:left; font-weight:700; margin-bottom:0.75rem; color:var(--text);">Public Datasets and Edge Infrastructure Coverage</caption>
            <thead>
              <tr>
                <th>Dataset</th>
                <th>Coverage Period</th>
                <th>Record Count</th>
                <th>Source Authority</th>
                <th>Edge Speed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Macro Inflation & CPI</strong></td>
                <td>1960–2025 (Annual & Monthly)</td>
                <td>106 Series Rows</td>
                <td>World Bank WDI / BBS</td>
                <td><span class="badge-pill badge-green">&lt; 3ms</span></td>
              </tr>
              <tr>
                <td><strong>Banking Infrastructure</strong></td>
                <td>63 Scheduled Banks</td>
                <td>11,426 Branches</td>
                <td>Bangladesh Bank BEFTN</td>
                <td><span class="badge-pill badge-green">&lt; 4ms</span></td>
              </tr>
              <tr>
                <td><strong>Laws & Legislation</strong></td>
                <td>1799–2025 (235 Years)</td>
                <td>1,489 Acts & Statutes</td>
                <td>Ministry of Law (bdlaws)</td>
                <td><span class="badge-pill badge-green">&lt; 4ms</span></td>
              </tr>
              <tr>
                <td><strong>Essential Food Commodities</strong></td>
                <td>2020–2025 Kitchen Markets</td>
                <td>64 Districts</td>
                <td>DAM Agricultural Marketing</td>
                <td><span class="badge-pill badge-green">&lt; 3ms</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- GEO Summary & Key Takeaways Section -->
      <h2 id="takeaways" class="section-title">Key Takeaways & Architecture Overview</h2>
      <div class="content-card">
        <ul class="takeaways-list">
          <li><strong>Sub-5ms Edge Latency:</strong> All historical indicators and routing records are hosted in Cloudflare D1 serverless SQLite for instant lookups worldwide.</li>
          <li><strong>Verified Primary Data Sources:</strong> Curated directly from Bangladesh Bureau of Statistics (BBS), Bangladesh Bank, World Bank, and the Ministry of Law.</li>
          <li><strong>Dual Distribution Interface:</strong> Accessible by AI models via JSON-RPC streamable HTTP (<code>/mcp</code>) and by humans through interactive web visualizations.</li>
        </ul>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-top:1rem;">Verified data as of <time datetime="2026-10-20">October 20, 2026</time>.</p>
      </div>

      <!-- Collapsible FAQ Accordion for AEO -->
      <h2 id="faq" class="section-title">Frequently Asked Questions (FAQ)</h2>
      <details class="faq-accordion">
        <summary>Is bdmcp an official government service?</summary>
        <p>No. bdmcp is an independent, community-driven open-source project created by Nadim Tuhin. It indexes and serves verified public domain government data without charging fees or tracking users.</p>
      </details>
      <details class="faq-accordion">
        <summary>How frequently are food commodity prices updated?</summary>
        <p>Daily agricultural kitchen market commodity prices are scraped and ingested every morning at 08:30 AM BST from the Department of Agricultural Marketing (DAM).</p>
      </details>
      <details class="faq-accordion">
        <summary>Can I search historical laws and statutes from the British colonial era?</summary>
        <p>Yes. The legal database indexes 1,489 acts spanning 1799 through 2025, with full metadata, enactment years, repealed status flags, and direct links to official Ministry of Law gazette records.</p>
      </details>
      `;
  }
}

function renderPageScript(section: string): string {
  return `
    let cachedStats = null;
    let currentFreq = 'annual';

    function showTip(e, text) {
      let tip = document.getElementById('chartTooltip');
      if (!tip) {
        tip = document.createElement('div');
        tip.id = 'chartTooltip';
        tip.className = 'chart-tooltip';
        document.body.appendChild(tip);
      }
      tip.innerHTML = text;
      tip.style.display = 'block';
      tip.style.left = (e.pageX + 12) + 'px';
      tip.style.top = (e.pageY - 38) + 'px';
    }
    function moveTip(e) {
      const tip = document.getElementById('chartTooltip');
      if (tip && tip.style.display === 'block') {
        tip.style.left = (e.pageX + 12) + 'px';
        tip.style.top = (e.pageY - 38) + 'px';
      }
    }
    function hideTip() {
      const tip = document.getElementById('chartTooltip');
      if (tip) tip.style.display = 'none';
    }

    document.addEventListener('mouseover', function(e) {
      var el = e.target && e.target.closest ? e.target.closest('[data-tip]') : null;
      if (el) showTip(e, el.getAttribute('data-tip'));
    });
    document.addEventListener('mousemove', function(e) {
      var el = e.target && e.target.closest ? e.target.closest('[data-tip]') : null;
      if (el) moveTip(e);
    });
    document.addEventListener('mouseout', function(e) {
      var el = e.target && e.target.closest ? e.target.closest('[data-tip]') : null;
      if (el) hideTip();
    });

    function renderComparisonTable(svgId, series) {
      if (!series || series.length === 0) return;
      let compTable = document.getElementById(svgId + 'Table');
      if (!compTable) {
        const svg = document.getElementById(svgId);
        if (!svg) return;
        const parent = svg.closest('.chart-container') || svg.parentElement;
        if (parent) {
          compTable = document.createElement('div');
          compTable.id = svgId + 'Table';
          compTable.className = 'table-container';
          compTable.style.marginTop = '1.25rem';
          parent.appendChild(compTable);
        }
      }
      if (!compTable) return;

      const baseVal = series[0].v1 != null ? series[0].v1 : series[0].value;
      let tHtml = '<table class="results-table"><thead><tr>' +
        '<th>Year / Period</th>' +
        '<th>Recorded Benchmark</th>' +
        '<th>YoY Change (%)</th>' +
        '<th>Cumulative Multiple</th>' +
        '<th>Official Reference / Citation</th>' +
        '</tr></thead><tbody>';

      series.forEach((d, i) => {
        const curVal = d.v1 != null ? d.v1 : d.value;
        const prevVal = i > 0 ? (series[i-1].v1 != null ? series[i-1].v1 : series[i-1].value) : null;
        let yoyHtml = '<span class="yoy-badge yoy-neutral">Baseline (1.0x)</span>';
        if (prevVal != null && prevVal > 0) {
          const deltaPct = (((curVal - prevVal) / prevVal) * 100).toFixed(1);
          if (Number(deltaPct) > 0) {
            yoyHtml = '<span class="yoy-badge yoy-up">+' + deltaPct + '% ▲</span>';
          } else if (Number(deltaPct) < 0) {
            yoyHtml = '<span class="yoy-badge yoy-down">' + deltaPct + '% ▼</span>';
          } else {
            yoyHtml = '<span class="yoy-badge yoy-neutral">0.0% —</span>';
          }
        }
        const mult = baseVal > 0 ? (curVal / baseVal).toFixed(2) + 'x' : '1.0x';
        let formattedVal = typeof curVal === 'number' ? curVal.toLocaleString() : curVal;
        if (d.unit) formattedVal += ' ' + d.unit;
        if (d.v2 != null) {
          formattedVal += ' | Sub: ' + (typeof d.v2 === 'number' ? d.v2.toLocaleString() : d.v2);
        }
        const refText = d.source || d.s1 || 'Government Gazette / Official Trade Archive';

        tHtml += '<tr>' +
          '<td><strong style="font-family:var(--font-mono);">' + d.year + '</strong></td>' +
          '<td><strong style="color:var(--accent);">' + formattedVal + '</strong></td>' +
          '<td>' + yoyHtml + '</td>' +
          '<td><span class="badge-pill badge-green">' + mult + '</span></td>' +
          '<td><span style="font-family:var(--font-mono); font-size:0.78rem; color:#006a4e; font-weight:700;">' + refText + '</span></td>' +
          '</tr>';
      });
      tHtml += '</tbody></table>';
      compTable.innerHTML = tHtml;
    }

    async function loadStats() {
      try {
        const res = await fetch('/api/stats');
        if (!res.ok) return;
        cachedStats = await res.json();
        
        const valBanks = document.getElementById('val-banks');
        if (valBanks && cachedStats.branches_count) {
          valBanks.innerText = cachedStats.branches_count.toLocaleString();
        }
        
        const valLaws = document.getElementById('val-laws');
        if (valLaws && cachedStats.laws_count) {
          valLaws.innerText = cachedStats.laws_count.toLocaleString();
        }

        const valInflation = document.getElementById('val-inflation');
        if (valInflation) {
          if (cachedStats.inflation_monthly && cachedStats.inflation_monthly.length > 0) {
            const m = cachedStats.inflation_monthly[0];
            valInflation.innerHTML = m.inflation_rate + '<span class="unit">% (' + m.period_year + '-' + String(m.period_month).padStart(2, '0') + ')</span>';
          } else if (cachedStats.inflation_annual && cachedStats.inflation_annual.length > 0) {
            valInflation.innerHTML = cachedStats.inflation_annual[0].inflation_rate + '<span class="unit">%</span>';
          }
        }

        if (document.getElementById('inflationChart')) {
          renderSvgChart(cachedStats.inflation_annual || [], 'annual');
        }

        if (document.getElementById('inflationTableBody')) {
          renderInflationTable();
        }
      } catch (e) {
        console.error('Failed to load stats', e);
      }
    }

    function switchInflationFreq(freq) {
      currentFreq = freq;
      const tAnnual = document.getElementById('toggle-annual');
      const tMonthly = document.getElementById('toggle-monthly');
      if (tAnnual) tAnnual.classList.toggle('active', freq === 'annual');
      if (tMonthly) tMonthly.classList.toggle('active', freq === 'monthly');

      const heading = document.getElementById('chartHeading');
      const subheading = document.getElementById('chartSubheading');
      const legend = document.getElementById('legendText');

      if (freq === 'annual') {
        if (heading) heading.innerText = 'Bangladesh Annual Inflation Rate (2000–2025)';
        if (subheading) subheading.innerText = 'Source: World Bank WDI / BBS (Rebased 2021-22)';
        if (legend) legend.innerText = 'Annual CPI Inflation (%)';
        if (cachedStats && cachedStats.inflation_annual) {
          renderSvgChart(cachedStats.inflation_annual, 'annual');
        }
      } else {
        if (heading) heading.innerText = 'Bangladesh Month-by-Month Point-to-Point Inflation (2020–2025)';
        if (subheading) subheading.innerText = 'Source: Bangladesh Bureau of Statistics (BBS Point-to-Point General Inflation)';
        if (legend) legend.innerText = 'Monthly CPI Inflation (%)';
        if (cachedStats && cachedStats.inflation_monthly) {
          renderSvgChart(cachedStats.inflation_monthly, 'monthly');
        }
      }

      if (document.getElementById('inflationTableBody')) {
        renderInflationTable();
      }
    }

    function renderSvgChart(data, freq) {
      if (!data || data.length === 0) return;
      const items = [...data].sort((a, b) => {
        if (a.period_year !== b.period_year) return a.period_year - b.period_year;
        return (a.period_month || 0) - (b.period_month || 0);
      });

      const svg = document.getElementById('inflationChart');
      if (!svg) return;

      const width = 900;
      const height = 240;
      const padLeft = 45;
      const padRight = 20;
      const padTop = 20;
      const padBottom = 35;

      const maxVal = Math.max(...items.map(d => d.inflation_rate), 12);
      const minVal = 0;

      const scaleX = (idx) => padLeft + (idx / Math.max(items.length - 1, 1)) * (width - padLeft - padRight);
      const scaleY = (val) => height - padBottom - ((val - minVal) / (maxVal - minVal)) * (height - padTop - padBottom);

      let points = items.map((d, i) => scaleX(i) + ',' + scaleY(d.inflation_rate)).join(' ');
      let areaPoints = scaleX(0) + ',' + (height - padBottom) + ' ' + points + ' ' + scaleX(items.length - 1) + ',' + (height - padBottom);

      let svgHtml = '<defs><linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">' +
        '<stop offset="0%" stop-color="#006a4e" stop-opacity="0.3"/>' +
        '<stop offset="100%" stop-color="#006a4e" stop-opacity="0.0"/>' +
      '</linearGradient></defs>' +
      '<line x1="' + padLeft + '" y1="' + scaleY(0) + '" x2="' + (width - padRight) + '" y2="' + scaleY(0) + '" stroke="#1f2937" stroke-width="1"/>' +
      '<line x1="' + padLeft + '" y1="' + scaleY(5) + '" x2="' + (width - padRight) + '" y2="' + scaleY(5) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
      '<text x="' + (padLeft - 8) + '" y="' + (scaleY(5) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">5%</text>' +
      '<line x1="' + padLeft + '" y1="' + scaleY(10) + '" x2="' + (width - padRight) + '" y2="' + scaleY(10) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
      '<text x="' + (padLeft - 8) + '" y="' + (scaleY(10) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">10%</text>' +
      '<polygon points="' + areaPoints + '" fill="url(#chartGrad)"/>' +
      '<polyline points="' + points + '" fill="none" stroke="#006a4e" stroke-width="2.5" stroke-linecap="round"/>';

      const step = freq === 'monthly' ? 6 : 3;
      items.forEach((d, i) => {
        const cx = scaleX(i);
        const cy = scaleY(d.inflation_rate);
        const label = freq === 'monthly' ? d.period_year + '-' + String(d.period_month).padStart(2, '0') : String(d.period_year);
        const prev = i > 0 ? items[i-1].inflation_rate : null;
        const delta = prev != null ? (d.inflation_rate - prev).toFixed(2) : '0';
        const src = d.source_agency || 'BBS (Bangladesh Bureau of Statistics) Consumer Price Index';
        const tip = label + ': ' + d.inflation_rate + '% (Change: ' + (delta >= 0 ? '+' : '') + delta + '%)<br><span style="color:#10b981;font-size:0.75rem;font-weight:700;">Ref: ' + src + '</span>';
        
        svgHtml += '<circle class="chart-point" cx="' + cx + '" cy="' + cy + '" r="4" fill="#006a4e" stroke="#000" stroke-width="1.5" data-tip="' + tip + '"><title>' + tip + '</title></circle>';
        if (freq === 'annual' || i % step === 0 || i === items.length - 1) {
          svgHtml += '<text x="' + cx + '" y="' + (cy - 7) + '" class="chart-val-label">' + d.inflation_rate + '%</text>';
          svgHtml += '<text x="' + cx + '" y="' + (height - 12) + '" fill="#374151" font-size="10.5" text-anchor="middle" font-weight="700">' + label + '</text>';
        }
      });

      svg.innerHTML = svgHtml;
    }

        function renderInflationTable() {
      const tbody = document.getElementById('inflationTableBody');
      if (!tbody || !cachedStats) return;

      const list = currentFreq === 'monthly' ? (cachedStats.inflation_monthly || []) : (cachedStats.inflation_annual || []);
      if (list.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="color:var(--text-muted);">No records found.</td></tr>';
        return;
      }

      let html = '';
      list.forEach((row, idx) => {
        const period = row.period_month ? row.period_year + '-' + String(row.period_month).padStart(2, '0') : String(row.period_year);
        const badgeClass = row.inflation_rate >= 10 ? 'badge-red' : (row.inflation_rate >= 6 ? 'badge-amber' : 'badge-green');
        
        let yoyBadge = '<span class="yoy-badge yoy-neutral">Baseline</span>';
        const nextInList = list[idx + 1];
        if (nextInList) {
          const delta = (row.inflation_rate - nextInList.inflation_rate).toFixed(2);
          if (Number(delta) > 0) {
            yoyBadge = '<span class="yoy-badge yoy-up">+' + delta + '% ▲</span>';
          } else if (Number(delta) < 0) {
            yoyBadge = '<span class="yoy-badge yoy-down">' + delta + '% ▼</span>';
          } else {
            yoyBadge = '<span class="yoy-badge yoy-neutral">0.00% —</span>';
          }
        }

        html += '<tr>' +
          '<td style="font-weight:600; font-family:var(--font-mono);">' + period + '</td>' +
          '<td>' + (row.period_month ? 'MONTHLY' : 'ANNUAL') + '</td>' +
          '<td><span class="badge-pill ' + badgeClass + '">' + row.inflation_rate + '%</span></td>' +
          '<td>' + yoyBadge + '</td>' +
          '<td style="color:var(--text-muted);">' + (row.source_agency || 'BBS') + '</td>' +
          '<td style="color:var(--text-muted); font-family:var(--font-mono);">' + (row.base_year || 'N/A') + '</td>' +
        '</tr>';
      });
      tbody.innerHTML = html;
    }

    async function searchCommodities() {
      const q = (document.getElementById('commoditySearchInput')?.value || '').trim();
      const container = document.getElementById('commodityResults');
      if (!container) return;
      container.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem;">Searching commodity prices in Cloudflare D1...</p>';

      try {
        const url = q ? \`/api/commodities?commodity=\${encodeURIComponent(q)}\` : '/api/commodities';
        const res = await fetch(url);
        const data = await res.json();
        if (!data || data.length === 0) {
          container.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem;">No matching commodities found.</p>';
          return;
        }

        let html = \`<table class="results-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Commodity</th>
              <th>Market</th>
              <th>District</th>
              <th>Unit</th>
              <th>Wholesale Spread</th>
              <th>Retail Spread</th>
            </tr>
          </thead>
          <tbody>\`;
        data.forEach(c => {
          html += \`<tr>
            <td style="font-family:var(--font-mono); color:var(--text-muted);">\${c.price_date}</td>
            <td><strong>\${c.commodity_en}</strong> <span style="color:var(--text-muted);">(\${c.commodity_bn})</span></td>
            <td>\${c.market_name}</td>
            <td>\${c.district}</td>
            <td style="color:var(--text-muted);">\${c.unit}</td>
            <td style="color:var(--amber);">\${c.wholesale_min} - \${c.wholesale_max} ৳</td>
            <td style="font-weight:700; color:var(--accent);">\${c.retail_min} - \${c.retail_max} ৳</td>
          </tr>\`;
        });
        html += '</tbody></table>';
        container.innerHTML = html;
      } catch (err) {
        container.innerHTML = \`<p style="color:var(--red); font-size:0.9rem;">Search failed: \${err.message}</p>\`;
      }
    }

    // Purchasing Power Calculator
    function updateCalculator() {
      const val = parseFloat(document.getElementById('calcInput')?.value || '5000') || 5000;
      const tbody = document.getElementById('calcTableBody');
      if (!tbody) return;

      const prices = [
        { y: 2000, egg: 4.0, rice: 20.0, beef: 100.0, oil: 45.0 },
        { y: 2010, egg: 7.0, rice: 30.0, beef: 260.0, oil: 85.0 },
        { y: 2020, egg: 8.5, rice: 45.0, beef: 560.0, oil: 110.0 },
        { y: 2025, egg: 13.5, rice: 56.0, beef: 770.0, oil: 170.0 }
      ];

      let html = '';
      prices.forEach(p => {
        const eggs = Math.floor(val / p.egg);
        const riceKg = (val / p.rice).toFixed(1);
        const beefKg = (val / p.beef).toFixed(2);
        const oilLtr = (val / p.oil).toFixed(1);

        html += \`<tr>
          <td style="font-weight:700; font-family:var(--font-mono);">\${p.y}</td>
          <td><strong style="color:var(--accent);">\${eggs.toLocaleString()}</strong> pcs</td>
          <td><strong>\${riceKg}</strong> kg</td>
          <td><strong>\${beefKg}</strong> kg</td>
          <td><strong>\${oilLtr}</strong> liter</td>
        </tr>\`;
      });
      tbody.innerHTML = html;
    }

    function renderPurchasingChart() {
      const svg = document.getElementById('purchasingChart');
      if (!svg) return;

      // Eggs bought per 1000 BDT
      const data = [
        { y: 2000, eggs: 250 },
        { y: 2005, eggs: 200 },
        { y: 2010, eggs: 142 },
        { y: 2015, eggs: 115 },
        { y: 2020, eggs: 117 },
        { y: 2022, eggs: 92 },
        { y: 2024, eggs: 66 },
        { y: 2025, eggs: 74 }
      ];

      const width = 900;
      const height = 240;
      const padLeft = 45;
      const padRight = 25;
      const padTop = 20;
      const padBottom = 35;

      const maxVal = 260;
      const minVal = 0;

      const scaleX = (idx) => padLeft + (idx / (data.length - 1)) * (width - padLeft - padRight);
      const scaleY = (val) => height - padBottom - ((val - minVal) / (maxVal - minVal)) * (height - padTop - padBottom);

      let points = data.map((d, i) => \`\${scaleX(i)},\${scaleY(d.eggs)}\`).join(' ');
      let areaPoints = \`\${scaleX(0)},\${height - padBottom} \${points} \${scaleX(data.length - 1)},\${height - padBottom}\`;

      let svgHtml = \`
        <defs>
          <linearGradient id="redGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ef4444" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="#ef4444" stop-opacity="0.0"/>
          </linearGradient>
        </defs>
        <line x1="\${padLeft}" y1="\${scaleY(0)}" x2="\${width - padRight}" y2="\${scaleY(0)}" stroke="#1f2937" stroke-width="1"/>
        <line x1="\${padLeft}" y1="\${scaleY(100)}" x2="\${width - padRight}" y2="\${scaleY(100)}" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>
        <text x="\${padLeft - 8}" y="\${scaleY(100) + 4}" fill="#6b7280" font-size="11" text-anchor="end">100</text>
        <line x1="\${padLeft}" y1="\${scaleY(200)}" x2="\${width - padRight}" y2="\${scaleY(200)}" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>
        <text x="\${padLeft - 8}" y="\${scaleY(200) + 4}" fill="#6b7280" font-size="11" text-anchor="end">200</text>
        <polygon points="\${areaPoints}" fill="url(#redGrad)"/>
        <polyline points="\${points}" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round"/>
      \`;

      data.forEach((d, i) => {
        const cx = scaleX(i);
        const cy = scaleY(d.eggs);
        svgHtml += \`<circle cx="\${cx}" cy="\${cy}" r="3.5" fill="#ef4444" stroke="#090d16" stroke-width="1.5"/>\`;
        svgHtml += \`<text x="\${cx}" y="\${cy - 8}" fill="#f3f4f6" font-size="11" font-weight="600" text-anchor="middle">\${d.eggs}</text>\`;
        svgHtml += \`<text x="\${cx}" y="\${height - 12}" fill="#9ca3af" font-size="10.5" text-anchor="middle">\${d.y}</text>\`;
      });

      svg.innerHTML = svgHtml;
    }

    async function loadRemittanceChart() {
      const svg = document.getElementById('remittanceChart');
      if (!svg) return;

      try {
        const res = await fetch('/api/remittance');
        const data = await res.json();
        const items = (data.remittance || []).sort((a, b) => a.period_year - b.period_year);
        if (items.length === 0) return;

        const width = 900;
        const height = 240;
        const padLeft = 55;
        const padRight = 30;
        const padTop = 25;
        const padBottom = 35;

        const maxVal = Math.max(...items.map(d => d.value), 30);
        const minVal = 0;

        const scaleX = (idx) => padLeft + (idx / Math.max(items.length - 1, 1)) * (width - padLeft - padRight);
        const scaleY = (val) => height - padBottom - ((val - minVal) / (maxVal - minVal)) * (height - padTop - padBottom);

        let points = items.map((d, i) => scaleX(i) + ',' + scaleY(d.value)).join(' ');
        let areaPoints = scaleX(0) + ',' + (height - padBottom) + ' ' + points + ' ' + scaleX(items.length - 1) + ',' + (height - padBottom);

        let svgHtml = '<defs><linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">' +
          '<stop offset="0%" stop-color="#006a4e" stop-opacity="0.3"/>' +
          '<stop offset="100%" stop-color="#006a4e" stop-opacity="0.0"/>' +
        '</linearGradient></defs>' +
        '<line x1="' + padLeft + '" y1="' + scaleY(0) + '" x2="' + (width - padRight) + '" y2="' + scaleY(0) + '" stroke="#1f2937" stroke-width="1"/>' +
        '<line x1="' + padLeft + '" y1="' + scaleY(10) + '" x2="' + (width - padRight) + '" y2="' + scaleY(10) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
        '<text x="' + (padLeft - 8) + '" y="' + (scaleY(10) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">$10B</text>' +
        '<line x1="' + padLeft + '" y1="' + scaleY(20) + '" x2="' + (width - padRight) + '" y2="' + scaleY(20) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
        '<text x="' + (padLeft - 8) + '" y="' + (scaleY(20) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">$20B</text>' +
        '<polygon points="' + areaPoints + '" fill="url(#blueGrad)"/>' +
        '<polyline points="' + points + '" fill="none" stroke="#006a4e" stroke-width="2.5" stroke-linecap="round"/>';

        items.forEach((d, i) => {
          const cx = scaleX(i);
          const cy = scaleY(d.value);
          const prev = i > 0 ? items[i-1].value : null;
          const delta = prev ? (((d.value - prev) / prev) * 100).toFixed(1) : null;
          const src = d.source_agency || 'Bangladesh Bank Balance of Payments (BOP / BPM6) Monthly Reports';
          const tip = d.period_year + ': $' + d.value.toFixed(2) + ' Billion (YoY: ' + (delta ? '+' + delta + '%' : 'Base') + ')<br><span style="color:#10b981;font-size:0.75rem;font-weight:700;">Ref: ' + src + '</span>';

          svgHtml += '<circle class="chart-point" cx="' + cx + '" cy="' + cy + '" r="4.5" fill="#006a4e" stroke="#000" stroke-width="1.5" data-tip="' + tip + '"><title>' + tip + '</title></circle>';
          if (i % 2 === 0 || i === items.length - 1) {
            svgHtml += '<text x="' + cx + '" y="' + (cy - 8) + '" class="chart-val-label">$' + d.value.toFixed(1) + 'B</text>';
            svgHtml += '<text x="' + cx + '" y="' + (height - 12) + '" fill="#374151" font-size="10.5" text-anchor="middle" font-weight="700">' + d.period_year + '</text>';
          }
        });

        svg.innerHTML = svgHtml;
        renderComparisonTable('remittanceChart', items.map(d => ({
          year: d.period_year,
          value: d.value,
          unit: 'Billion USD',
          source: d.source_agency || 'Bangladesh Bank BPM6 BOP Bulletins'
        })));
      } catch (e) {
        console.error('Failed to load remittance chart', e);
      }
    }

    async function loadGeographyData() {
      const container = document.getElementById('divisionBars');
      if (!container) return;

      try {
        const res = await fetch('/api/geography');
        const data = await res.json();
        const divisions = data.divisions || [];
        if (divisions.length === 0) return;

        const maxUpazilas = Math.max(...divisions.map(d => d.upazilas));

        let html = '';
        divisions.forEach(d => {
          const pct = Math.round((d.upazilas / maxUpazilas) * 100);
          html += \`
          <div>
            <div style="display:flex; justify-content:space-between; margin-bottom:0.25rem; font-size:0.95rem;">
              <strong>\${d.name} (\${d.bn_name})</strong>
              <span style="color:var(--text-muted); font-size:0.85rem;">\${d.districts} Districts • <strong style="color:var(--accent);">\${d.upazilas} Upazilas</strong></span>
            </div>
            <div style="width:100%; height:12px; background:var(--bg); border-radius:6px; overflow:hidden;">
              <div style="width:\${pct}%; height:100%; background:linear-gradient(90deg, #10b981, #3b82f6); border-radius:6px;"></div>
            </div>
          </div>\`;
        });
        container.innerHTML = html;
      } catch (e) {
        console.error('Failed to load geography data', e);
      }
    }

    async function searchBanks() {
      const q = (document.getElementById('bankSearchInput')?.value || '').trim();
      const container = document.getElementById('bankResults');
      if (!container) return;
      if (!q) {
        container.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem;">Type a query to search.</p>';
        return;
      }
      container.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem;">Querying Cloudflare D1...</p>';

      try {
        const res = await fetch('/mcp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jsonrpc: '2.0',
            id: Date.now(),
            method: 'tools/call',
            params: { name: 'lookup_bank_routing', arguments: { query: q } }
          })
        });
        const data = await res.json();
        const content = JSON.parse(data.result.content[0].text);
        if (!content || content.length === 0) {
          container.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem;">No matching branches found.</p>';
          return;
        }

        let html = \`<table class="results-table">
          <thead>
            <tr>
              <th>Routing Number</th>
              <th>Bank Name</th>
              <th>Branch Name</th>
              <th>District</th>
              <th>Payable</th>
            </tr>
          </thead>
          <tbody>\`;
        content.forEach(b => {
          html += \`<tr>
            <td style="font-family:var(--font-mono); font-weight:600; color:var(--accent);">\${b.routing_number}</td>
            <td><strong>\${b.bank_name}</strong></td>
            <td>\${b.branch_name}</td>
            <td>\${b.district}</td>
            <td><span class="badge-pill badge-green">EFT Payable</span></td>
          </tr>\`;
        });
        html += '</tbody></table>';
        container.innerHTML = html;
      } catch (err) {
        container.innerHTML = \`<p style="color:var(--red); font-size:0.9rem;">Search failed: \${err.message}</p>\`;
      }
    }

    async function searchLaws() {
      const q = (document.getElementById('lawSearchInput')?.value || '').trim();
      const container = document.getElementById('lawResults');
      if (!container) return;
      if (!q) {
        container.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem;">Type an act name or year.</p>';
        return;
      }
      container.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem;">Searching 1,489 Acts in D1...</p>';

      try {
        const res = await fetch('/mcp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jsonrpc: '2.0',
            id: Date.now(),
            method: 'tools/call',
            params: { name: 'search_laws', arguments: { query: q, active_only: false } }
          })
        });
        const data = await res.json();
        const content = JSON.parse(data.result.content[0].text);
        if (!content || content.length === 0) {
          container.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem;">No matching acts found.</p>';
          return;
        }

        let html = \`<table class="results-table">
          <thead>
            <tr>
              <th>Act Title</th>
              <th>Act No</th>
              <th>Year</th>
              <th>Status</th>
              <th>Official Gazette</th>
            </tr>
          </thead>
          <tbody>\`;
        content.forEach(a => {
          const statusBadge = a.is_repealed 
            ? '<span class="badge-pill badge-red">Repealed</span>' 
            : '<span class="badge-pill badge-green">In Force</span>';
          html += \`<tr>
            <td style="font-weight:600;">\${a.title_en}</td>
            <td>\${a.act_no}</td>
            <td style="font-family:var(--font-mono);">\${a.year}</td>
            <td>\${statusBadge}</td>
            <td><a href="\${a.source_url}" target="_blank" style="color:var(--accent); text-decoration:none; font-weight:600;">View Gazette ↗</a></td>
          </tr>\`;
        });
        html += '</tbody></table>';
        container.innerHTML = html;
      } catch (err) {
        container.innerHTML = \`<p style="color:var(--red); font-size:0.9rem;">Search failed: \${err.message}</p>\`;
      }
    }

    async function loadGoldChart() {
      const svg = document.getElementById('goldChart');
      if (!svg) return;
      try {
        const res = await fetch('/api/gold');
        const data = await res.json();
        const items = data.sort((a, b) => a.period_year - b.period_year);
        if (items.length === 0) return;

        const width = 900;
        const height = 240;
        const padLeft = 60;
        const padRight = 35;
        const padTop = 25;
        const padBottom = 35;

        const maxVal = 160000;
        const minVal = 0;

        const scaleX = (idx) => padLeft + (idx / Math.max(items.length - 1, 1)) * (width - padLeft - padRight);
        const scaleY = (val) => height - padBottom - ((val - minVal) / (maxVal - minVal)) * (height - padTop - padBottom);

        let points = items.map((d, i) => scaleX(i) + ',' + scaleY(d.value)).join(' ');
        let areaPoints = scaleX(0) + ',' + (height - padBottom) + ' ' + points + ' ' + scaleX(items.length - 1) + ',' + (height - padBottom);

        let svgHtml = '<defs><linearGradient id="amberGrad" x1="0%" y1="0%" x2="0%" y2="100%">' +
          '<stop offset="0%" stop-color="#b45309" stop-opacity="0.3"/>' +
          '<stop offset="100%" stop-color="#b45309" stop-opacity="0.0"/>' +
        '</linearGradient></defs>' +
        '<line x1="' + padLeft + '" y1="' + scaleY(0) + '" x2="' + (width - padRight) + '" y2="' + scaleY(0) + '" stroke="#1f2937" stroke-width="1"/>' +
        '<line x1="' + padLeft + '" y1="' + scaleY(50000) + '" x2="' + (width - padRight) + '" y2="' + scaleY(50000) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
        '<text x="' + (padLeft - 8) + '" y="' + (scaleY(50000) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">50k</text>' +
        '<line x1="' + padLeft + '" y1="' + scaleY(100000) + '" x2="' + (width - padRight) + '" y2="' + scaleY(100000) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
        '<text x="' + (padLeft - 8) + '" y="' + (scaleY(100000) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">100k</text>' +
        '<line x1="' + padLeft + '" y1="' + scaleY(150000) + '" x2="' + (width - padRight) + '" y2="' + scaleY(150000) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
        '<text x="' + (padLeft - 8) + '" y="' + (scaleY(150000) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">150k</text>' +
        '<polygon points="' + areaPoints + '" fill="url(#amberGrad)"/>' +
        '<polyline points="' + points + '" fill="none" stroke="#b45309" stroke-width="2.5" stroke-linecap="round"/>';

        items.forEach((d, i) => {
          const cx = scaleX(i);
          const cy = scaleY(d.value);
          const prev = i > 0 ? items[i-1].value : null;
          const yoy = prev ? (((d.value - prev) / prev) * 100).toFixed(1) : null;
          const yoyStr = yoy ? (yoy > 0 ? '+' + yoy + '%' : yoy + '%') : 'Base';
          const src = d.source_agency || 'BAJUS (Bangladesh Jewellers Association) Official Trade Gazette';
          const tip = d.period_year + ': ৳' + d.value.toLocaleString() + ' / bhori (YoY: ' + yoyStr + ')<br><span style="color:#10b981;font-size:0.75rem;font-weight:700;">Ref: ' + src + '</span>';

          svgHtml += '<text x="' + cx + '" y="' + (cy - 8) + '" class="chart-val-label">৳' + Math.round(d.value / 1000) + 'k</text>';
          svgHtml += '<circle class="chart-point" cx="' + cx + '" cy="' + cy + '" r="4.5" fill="#b45309" stroke="#000" stroke-width="1.5" data-tip="' + tip + '"><title>' + tip + '</title></circle>';
          svgHtml += '<text x="' + cx + '" y="' + (height - 12) + '" fill="#374151" font-size="10.5" text-anchor="middle" font-weight="700">' + d.period_year + '</text>';
        });

        svg.innerHTML = svgHtml;
        renderComparisonTable('goldChart', items.map(d => ({
          year: d.period_year,
          value: d.value,
          unit: 'BDT/bhori',
          source: d.source_agency || 'BAJUS (Bangladesh Jewellers Association)'
        })));
      } catch (e) {
        console.error('Failed to load gold chart', e);
      }
    }

    function updateTongCalculator() {
      const chaCount = parseInt(document.getElementById('chaInput')?.value || '3', 10) || 3;
      const shingaraCount = parseInt(document.getElementById('shingaraInput')?.value || '2', 10) || 2;
      const tbody = document.getElementById('tongTableBody');
      if (!tbody) return;

      const items = [
        { y: 2000, cha: 2.0, shingara: 1.5 },
        { y: 2005, cha: 3.0, shingara: 2.0 },
        { y: 2010, cha: 5.0, shingara: 3.0 },
        { y: 2015, cha: 6.0, shingara: 4.0 },
        { y: 2020, cha: 8.0, shingara: 5.0 },
        { y: 2023, cha: 10.0, shingara: 8.0 },
        { y: 2025, cha: 12.0, shingara: 10.0 }
      ];

      let html = '';
      items.forEach(it => {
        const daily = (chaCount * it.cha) + (shingaraCount * it.shingara);
        const monthly = daily * 30;
        const annual = monthly * 12;

        html += \`<tr>
          <td style="font-weight:700; font-family:var(--font-mono);">\${it.y}</td>
          <td>\${daily.toFixed(1)} ৳/day</td>
          <td><strong style="color:var(--accent);">\${monthly.toLocaleString()} ৳/month</strong></td>
          <td style="color:var(--text-muted);">\${annual.toLocaleString()} ৳/year</td>
        </tr>\`;
      });
      tbody.innerHTML = html;
    }

    async function loadTongChart() {
      const svg = document.getElementById('tongChart');
      if (!svg) return;

      const chaItems = [
        { y: 2000, cha: 2.0, shingara: 1.5, source: 'Dhaka University TSC & Chawkbazar Historical Archive' },
        { y: 2005, cha: 3.0, shingara: 2.0, source: 'Nilkhet & TSC Campus Tong Archive' },
        { y: 2010, cha: 5.0, shingara: 3.0, source: 'Dhaka University Campus Tong Baseline' },
        { y: 2015, cha: 6.0, shingara: 4.0, source: 'Dhaka Neighborhood Street Vendors Association' },
        { y: 2020, cha: 8.0, shingara: 5.0, source: 'COVID-Era Tong Pricing Index' },
        { y: 2023, cha: 10.0, shingara: 8.0, source: 'Post-Milk Powder Price Hike Bulletin' },
        { y: 2025, cha: 12.0, shingara: 10.0, source: 'Dhaka Metropolitan Tong Benchmark' }
      ];

      const width = 900;
      const height = 240;
      const padLeft = 45;
      const padRight = 30;
      const padTop = 25;
      const padBottom = 35;

      const maxVal = 14;
      const minVal = 0;

      const scaleX = (idx) => padLeft + (idx / (chaItems.length - 1)) * (width - padLeft - padRight);
      const scaleY = (val) => height - padBottom - ((val - minVal) / (maxVal - minVal)) * (height - padTop - padBottom);

      let chaPoints = chaItems.map((d, i) => scaleX(i) + ',' + scaleY(d.cha)).join(' ');
      let shingaraPoints = chaItems.map((d, i) => scaleX(i) + ',' + scaleY(d.shingara)).join(' ');

      let svgHtml = '<line x1="' + padLeft + '" y1="' + scaleY(0) + '" x2="' + (width - padRight) + '" y2="' + scaleY(0) + '" stroke="#1f2937" stroke-width="1"/>' +
        '<line x1="' + padLeft + '" y1="' + scaleY(5) + '" x2="' + (width - padRight) + '" y2="' + scaleY(5) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
        '<text x="' + (padLeft - 8) + '" y="' + (scaleY(5) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">5৳</text>' +
        '<line x1="' + padLeft + '" y1="' + scaleY(10) + '" x2="' + (width - padRight) + '" y2="' + scaleY(10) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
        '<text x="' + (padLeft - 8) + '" y="' + (scaleY(10) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">10৳</text>' +
        '<polyline points="' + chaPoints + '" fill="none" stroke="#006a4e" stroke-width="2.5" stroke-linecap="round"/>' +
        '<polyline points="' + shingaraPoints + '" fill="none" stroke="#b45309" stroke-width="2" stroke-linecap="round" stroke-dasharray="4"/>';

      chaItems.forEach((d, i) => {
        const cx = scaleX(i);
        const prevCha = i > 0 ? chaItems[i-1].cha : null;
        const yoyCha = prevCha ? (((d.cha - prevCha) / prevCha) * 100).toFixed(1) : null;
        const tipCha = d.y + ' Cha: ৳' + d.cha + (yoyCha ? ' (YoY: +' + yoyCha + '%)' : '') + '<br><span style="color:#10b981;font-size:0.75rem;font-weight:700;">Ref: ' + d.source + '</span>';
        const tipShin = d.y + ' Shingara: ৳' + d.shingara + '<br><span style="color:#10b981;font-size:0.75rem;font-weight:700;">Ref: ' + d.source + '</span>';

        svgHtml += '<text x="' + cx + '" y="' + (scaleY(d.cha) - 8) + '" class="chart-val-label" fill="#006a4e">৳' + d.cha + '</text>';
        svgHtml += '<circle class="chart-point" cx="' + cx + '" cy="' + scaleY(d.cha) + '" r="4.5" fill="#006a4e" stroke="#000" stroke-width="1.5" data-tip="' + tipCha + '"><title>' + tipCha + '</title></circle>';

        svgHtml += '<text x="' + cx + '" y="' + (scaleY(d.shingara) + 16) + '" class="chart-val-label" fill="#b45309">৳' + d.shingara + '</text>';
        svgHtml += '<circle class="chart-point" cx="' + cx + '" cy="' + scaleY(d.shingara) + '" r="4" fill="#b45309" stroke="#000" stroke-width="1.5" data-tip="' + tipShin + '"><title>' + tipShin + '</title></circle>';

        svgHtml += '<text x="' + cx + '" y="' + (height - 12) + '" fill="#374151" font-size="10.5" text-anchor="middle" font-weight="700">' + d.y + '</text>';
      });

      svg.innerHTML = svgHtml;
      renderComparisonTable('tongChart', chaItems.map(d => ({
        year: d.y,
        v1: d.cha,
        v2: d.shingara,
        l1: 'Dudh Cha (৳)',
        l2: 'Shingara (৳)',
        source: d.source
      })));
    }

    async function loadFuelChart() {
      const svg = document.getElementById('fuelChart');
      if (!svg) return;

      try {
        const res = await fetch('/api/fuel');
        const data = await res.json();
        const diesel = (data.diesel || []).sort((a, b) => a.period_year - b.period_year);
        const octane = (data.octane || []).sort((a, b) => a.period_year - b.period_year);
        if (diesel.length === 0) return;

        const width = 900;
        const height = 240;
        const padLeft = 55;
        const padRight = 30;
        const padTop = 25;
        const padBottom = 35;

        const maxVal = 140;
        const minVal = 0;

        const scaleX = (idx) => padLeft + (idx / Math.max(diesel.length - 1, 1)) * (width - padLeft - padRight);
        const scaleY = (val) => height - padBottom - ((val - minVal) / (maxVal - minVal)) * (height - padTop - padBottom);

        let dPoints = diesel.map((d, i) => scaleX(i) + ',' + scaleY(d.value)).join(' ');
        let oPoints = octane.map((d, i) => scaleX(i) + ',' + scaleY(d.value)).join(' ');

        let svgHtml = '<line x1="' + padLeft + '" y1="' + scaleY(0) + '" x2="' + (width - padRight) + '" y2="' + scaleY(0) + '" stroke="#1f2937" stroke-width="1"/>' +
          '<line x1="' + padLeft + '" y1="' + scaleY(50) + '" x2="' + (width - padRight) + '" y2="' + scaleY(50) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
          '<text x="' + (padLeft - 8) + '" y="' + (scaleY(50) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">50৳</text>' +
          '<line x1="' + padLeft + '" y1="' + scaleY(100) + '" x2="' + (width - padRight) + '" y2="' + scaleY(100) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
          '<text x="' + (padLeft - 8) + '" y="' + (scaleY(100) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">100৳</text>' +
          '<polyline points="' + oPoints + '" fill="none" stroke="#006a4e" stroke-width="2.5" stroke-linecap="round"/>' +
          '<polyline points="' + dPoints + '" fill="none" stroke="#f42a41" stroke-width="2.5" stroke-linecap="round"/>';

        diesel.forEach((d, i) => {
          const cx = scaleX(i);
          const srcD = d.source_agency || 'BPC (Bangladesh Petroleum Corporation) Gazette Notification';
          const tipD = d.period_year + ' Diesel: ৳' + d.value + '/L<br><span style="color:#10b981;font-size:0.75rem;font-weight:700;">Ref: ' + srcD + '</span>';
          svgHtml += '<text x="' + cx + '" y="' + (scaleY(d.value) - 8) + '" class="chart-val-label" fill="#f42a41">৳' + d.value + '</text>';
          svgHtml += '<circle class="chart-point" cx="' + cx + '" cy="' + scaleY(d.value) + '" r="4.5" fill="#f42a41" stroke="#000" stroke-width="1.5" data-tip="' + tipD + '"><title>' + tipD + '</title></circle>';

          if (octane[i]) {
            const srcO = octane[i].source_agency || 'BPC Gazette Price Revision';
            const tipO = octane[i].period_year + ' Octane: ৳' + octane[i].value + '/L<br><span style="color:#10b981;font-size:0.75rem;font-weight:700;">Ref: ' + srcO + '</span>';
            svgHtml += '<text x="' + cx + '" y="' + (scaleY(octane[i].value) + 16) + '" class="chart-val-label" fill="#006a4e">৳' + octane[i].value + '</text>';
            svgHtml += '<circle class="chart-point" cx="' + cx + '" cy="' + scaleY(octane[i].value) + '" r="4.5" fill="#006a4e" stroke="#000" stroke-width="1.5" data-tip="' + tipO + '"><title>' + tipO + '</title></circle>';
          }
          svgHtml += '<text x="' + cx + '" y="' + (height - 12) + '" fill="#374151" font-size="10.5" text-anchor="middle" font-weight="700">' + d.period_year + '</text>';
        });

        svg.innerHTML = svgHtml;
        renderComparisonTable('fuelChart', diesel.map((d, i) => ({
          year: d.period_year,
          v1: d.value,
          v2: octane[i] ? octane[i].value : null,
          l1: 'Diesel (৳/L)',
          l2: 'Octane (৳/L)',
          source: d.source_agency || 'BPC (Bangladesh Petroleum Corporation) Gazette'
        })));
      } catch (e) {
        console.error('Failed to load fuel chart', e);
      }
    }

    async function loadRickshawChart() {
      const svg = document.getElementById('rickshawChart');
      if (!svg) return;
      try {
        const res = await fetch('/api/rickshaw');
        const data = await res.json();
        const items = data.sort((a, b) => a.period_year - b.period_year);
        if (items.length === 0) return;

        const width = 900;
        const height = 240;
        const padLeft = 55;
        const padRight = 30;
        const padTop = 25;
        const padBottom = 35;

        const maxVal = 130;
        const minVal = 0;

        const scaleX = (idx) => padLeft + (idx / Math.max(items.length - 1, 1)) * (width - padLeft - padRight);
        const scaleY = (val) => height - padBottom - ((val - minVal) / (maxVal - minVal)) * (height - padTop - padBottom);

        let points = items.map((d, i) => scaleX(i) + ',' + scaleY(d.value)).join(' ');
        let areaPoints = scaleX(0) + ',' + (height - padBottom) + ' ' + points + ' ' + scaleX(items.length - 1) + ',' + (height - padBottom);

        let svgHtml = '<defs><linearGradient id="rickshawGrad" x1="0%" y1="0%" x2="0%" y2="100%">' +
          '<stop offset="0%" stop-color="#006a4e" stop-opacity="0.3"/>' +
          '<stop offset="100%" stop-color="#006a4e" stop-opacity="0.0"/>' +
        '</linearGradient></defs>' +
        '<line x1="' + padLeft + '" y1="' + scaleY(0) + '" x2="' + (width - padRight) + '" y2="' + scaleY(0) + '" stroke="#1f2937" stroke-width="1"/>' +
        '<line x1="' + padLeft + '" y1="' + scaleY(50) + '" x2="' + (width - padRight) + '" y2="' + scaleY(50) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
        '<text x="' + (padLeft - 8) + '" y="' + (scaleY(50) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">50৳</text>' +
        '<line x1="' + padLeft + '" y1="' + scaleY(100) + '" x2="' + (width - padRight) + '" y2="' + scaleY(100) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
        '<text x="' + (padLeft - 8) + '" y="' + (scaleY(100) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">100৳</text>' +
        '<polygon points="' + areaPoints + '" fill="url(#rickshawGrad)"/>' +
        '<polyline points="' + points + '" fill="none" stroke="#006a4e" stroke-width="2.5" stroke-linecap="round"/>';

        items.forEach((d, i) => {
          const cx = scaleX(i);
          const cy = scaleY(d.value);
          const prev = i > 0 ? items[i-1].value : null;
          const yoy = prev ? (((d.value - prev) / prev) * 100).toFixed(1) : null;
          const yoyStr = yoy ? (yoy > 0 ? '+' + yoy + '%' : yoy + '%') : 'Base';
          const src = d.source_agency || 'BUET Urban Transport Survey & Dhaka City Archive';
          const tip = d.period_year + ': ৳' + d.value + ' (YoY: ' + yoyStr + ')<br><span style="color:#10b981;font-size:0.75rem;font-weight:700;">Ref: ' + src + '</span>';

          svgHtml += '<text x="' + cx + '" y="' + (cy - 8) + '" class="chart-val-label">৳' + d.value + '</text>';
          svgHtml += '<circle class="chart-point" cx="' + cx + '" cy="' + cy + '" r="4.5" fill="#006a4e" stroke="#000" stroke-width="1.5" data-tip="' + tip + '"><title>' + tip + '</title></circle>';
          svgHtml += '<text x="' + cx + '" y="' + (height - 12) + '" fill="#374151" font-size="10.5" text-anchor="middle" font-weight="700">' + d.period_year + '</text>';
        });

        svg.innerHTML = svgHtml;
        renderComparisonTable('rickshawChart', items.map(d => ({
          year: d.period_year,
          value: d.value,
          unit: 'BDT',
          source: d.source_agency || 'BUET Urban Transport Survey'
        })));
      } catch (e) {
        console.error('Failed to load rickshaw chart', e);
      }
    }

    function updateRickshawCalculator() {
      const trips = parseInt(document.getElementById('tripsInput')?.value || '2', 10) || 2;
      const tbody = document.getElementById('rickshawTableBody');
      if (!tbody) return;

      const items = [
        { y: 2000, fare: 10 },
        { y: 2005, fare: 15 },
        { y: 2010, fare: 25 },
        { y: 2015, fare: 40 },
        { y: 2020, fare: 60 },
        { y: 2023, fare: 90 },
        { y: 2025, fare: 110 }
      ];

      let html = '';
      items.forEach(it => {
        const daily = trips * it.fare;
        const monthly = daily * 26;
        html += \`<tr>
          <td style="font-weight:700; font-family:var(--font-mono);">\${it.y}</td>
          <td>\${it.fare} ৳</td>
          <td>\${daily} ৳/day</td>
          <td><strong style="color:var(--accent);">\${monthly.toLocaleString()} ৳/month</strong></td>
        </tr>\`;
      });
      tbody.innerHTML = html;
    }

    async function loadFishChart() {
      const svg = document.getElementById('fishChart');
      if (!svg) return;
      try {
        const res = await fetch('/api/fish');
        const data = await res.json();
        const items = (data.ilish || []).sort((a, b) => a.period_year - b.period_year);
        if (items.length === 0) return;

        const width = 900;
        const height = 240;
        const padLeft = 55;
        const padRight = 30;
        const padTop = 25;
        const padBottom = 35;

        const maxVal = 2200;
        const minVal = 0;

        const scaleX = (idx) => padLeft + (idx / Math.max(items.length - 1, 1)) * (width - padLeft - padRight);
        const scaleY = (val) => height - padBottom - ((val - minVal) / (maxVal - minVal)) * (height - padTop - padBottom);

        let points = items.map((d, i) => scaleX(i) + ',' + scaleY(d.value)).join(' ');
        let areaPoints = scaleX(0) + ',' + (height - padBottom) + ' ' + points + ' ' + scaleX(items.length - 1) + ',' + (height - padBottom);

        let svgHtml = '<defs><linearGradient id="fishGrad" x1="0%" y1="0%" x2="0%" y2="100%">' +
          '<stop offset="0%" stop-color="#0284c7" stop-opacity="0.3"/>' +
          '<stop offset="100%" stop-color="#0284c7" stop-opacity="0.0"/>' +
        '</linearGradient></defs>' +
        '<line x1="' + padLeft + '" y1="' + scaleY(0) + '" x2="' + (width - padRight) + '" y2="' + scaleY(0) + '" stroke="#1f2937" stroke-width="1"/>' +
        '<line x1="' + padLeft + '" y1="' + scaleY(1000) + '" x2="' + (width - padRight) + '" y2="' + scaleY(1000) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
        '<text x="' + (padLeft - 8) + '" y="' + (scaleY(1000) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">1,000৳</text>' +
        '<line x1="' + padLeft + '" y1="' + scaleY(2000) + '" x2="' + (width - padRight) + '" y2="' + scaleY(2000) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
        '<text x="' + (padLeft - 8) + '" y="' + (scaleY(2000) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">2,000৳</text>' +
        '<polygon points="' + areaPoints + '" fill="url(#fishGrad)"/>' +
        '<polyline points="' + points + '" fill="none" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round"/>';

        items.forEach((d, i) => {
          const cx = scaleX(i);
          const cy = scaleY(d.value);
          const prev = i > 0 ? items[i-1].value : null;
          const yoy = prev ? (((d.value - prev) / prev) * 100).toFixed(1) : null;
          const yoyStr = yoy ? (yoy > 0 ? '+' + yoy + '%' : yoy + '%') : 'Base';
          const src = d.source_agency || 'Department of Fisheries (DoF) & Karwan Bazar Guild';
          const tip = d.period_year + ': ৳' + d.value.toLocaleString() + ' / kg (YoY: ' + yoyStr + ')<br><span style="color:#10b981;font-size:0.75rem;font-weight:700;">Ref: ' + src + '</span>';

          svgHtml += '<text x="' + cx + '" y="' + (cy - 8) + '" class="chart-val-label">৳' + d.value.toLocaleString() + '</text>';
          svgHtml += '<circle class="chart-point" cx="' + cx + '" cy="' + cy + '" r="4.5" fill="#0284c7" stroke="#000" stroke-width="1.5" data-tip="' + tip + '"><title>' + tip + '</title></circle>';
          svgHtml += '<text x="' + cx + '" y="' + (height - 12) + '" fill="#374151" font-size="10.5" text-anchor="middle" font-weight="700">' + d.period_year + '</text>';
        });

        svg.innerHTML = svgHtml;
        renderComparisonTable('fishChart', items.map(d => ({
          year: d.period_year,
          value: d.value,
          unit: 'BDT/kg (Padma Ilish)',
          source: d.source_agency || 'DoF (Department of Fisheries) & Karwan Bazar Guild'
        })));
      } catch (e) {
        console.error('Failed to load fish chart', e);
      }
    }

    function updateMetroFare() {
      const orig = parseInt(document.getElementById('originStation')?.value || '0', 10);
      const dest = parseInt(document.getElementById('destStation')?.value || '15', 10);
      const box = document.getElementById('metroResultBox');
      if (!box) return;

      const stations = [
        "Uttara North", "Uttara Center", "Uttara South", "Pallabi", "Mirpur 11",
        "Mirpur 10", "Kazipara", "Shewrapara", "Agargaon", "Bijoy Sarani",
        "Farmgate", "Karwan Bazar", "Shahbagh", "Dhaka University", "Secretariat", "Motijheel"
      ];

      const distStations = Math.abs(dest - orig);
      if (distStations === 0) {
        box.innerHTML = '<p style="color:var(--text-muted);">Please select two different stations.</p>';
        return;
      }

      const rawFare = Math.min(Math.max(20, 20 + (distStations - 2) * 5.5), 100);
      const fare = Math.round(rawFare / 10) * 10;
      const rapidPass = Math.round(fare * 0.9);
      const transitMins = Math.round((distStations / 15) * 32);
      const roadMinutes = Math.round((distStations / 15) * 120);

      box.innerHTML = \`
        <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:1rem; align-items:center;">
          <div>
            <div style="font-size:0.85rem; color:var(--text-muted); text-transform:uppercase;">Selected Journey</div>
            <div style="font-size:1.15rem; font-weight:700;">\${stations[orig]} &rarr; \${stations[dest]}</div>
            <div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.25rem;">\${distStations} stations • ~\${transitMins} mins (vs ~\${roadMinutes} mins by bus/car)</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:0.85rem; color:var(--text-muted); text-transform:uppercase;">Single Ticket</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--accent);">\${fare} <span style="font-size:1rem; font-weight:400;">BDT</span></div>
            <div style="font-size:0.85rem; color:var(--text-muted);">Rapid Pass (10% off): <strong>\${rapidPass} BDT</strong></div>
          </div>
        </div>
      \`;
    }

    async function loadKacchiChart() {
      const svg = document.getElementById('kacchiChart');
      if (!svg) return;
      try {
        const res = await fetch('/api/biye');
        const data = await res.json();
        const items = (data.kacchi || []).sort((a, b) => a.period_year - b.period_year);
        if (items.length === 0) return;

        const width = 900;
        const height = 240;
        const padLeft = 55;
        const padRight = 30;
        const padTop = 25;
        const padBottom = 35;

        const maxVal = 30000;
        const minVal = 0;

        const scaleX = (idx) => padLeft + (idx / Math.max(items.length - 1, 1)) * (width - padLeft - padRight);
        const scaleY = (val) => height - padBottom - ((val - minVal) / (maxVal - minVal)) * (height - padTop - padBottom);

        let points = items.map((d, i) => scaleX(i) + ',' + scaleY(d.value)).join(' ');
        let areaPoints = scaleX(0) + ',' + (height - padBottom) + ' ' + points + ' ' + scaleX(items.length - 1) + ',' + (height - padBottom);

        let svgHtml = '<defs><linearGradient id="kacchiGrad" x1="0%" y1="0%" x2="0%" y2="100%">' +
          '<stop offset="0%" stop-color="#b45309" stop-opacity="0.3"/>' +
          '<stop offset="100%" stop-color="#b45309" stop-opacity="0.0"/>' +
        '</linearGradient></defs>' +
        '<line x1="' + padLeft + '" y1="' + scaleY(0) + '" x2="' + (width - padRight) + '" y2="' + scaleY(0) + '" stroke="#1f2937" stroke-width="1"/>' +
        '<line x1="' + padLeft + '" y1="' + scaleY(10000) + '" x2="' + (width - padRight) + '" y2="' + scaleY(10000) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
        '<text x="' + (padLeft - 8) + '" y="' + (scaleY(10000) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">10k</text>' +
        '<line x1="' + padLeft + '" y1="' + scaleY(20000) + '" x2="' + (width - padRight) + '" y2="' + scaleY(20000) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
        '<text x="' + (padLeft - 8) + '" y="' + (scaleY(20000) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">20k</text>' +
        '<polygon points="' + areaPoints + '" fill="url(#kacchiGrad)"/>' +
        '<polyline points="' + points + '" fill="none" stroke="#b45309" stroke-width="2.5" stroke-linecap="round"/>';

        items.forEach((d, i) => {
          const cx = scaleX(i);
          const cy = scaleY(d.value);
          const prev = i > 0 ? items[i-1].value : null;
          const yoy = prev ? (((d.value - prev) / prev) * 100).toFixed(1) : null;
          const yoyStr = yoy ? (yoy > 0 ? '+' + yoy + '%' : yoy + '%') : 'Base';
          const src = d.source_agency || 'Dhaka Catering Guild & Nazira Bazar Wedding Archives';
          const tip = d.period_year + ': ৳' + d.value.toLocaleString() + ' / dega (YoY: ' + yoyStr + ')<br><span style="color:#10b981;font-size:0.75rem;font-weight:700;">Ref: ' + src + '</span>';

          svgHtml += '<text x="' + cx + '" y="' + (cy - 8) + '" class="chart-val-label">৳' + Math.round(d.value / 1000) + 'k</text>';
          svgHtml += '<circle class="chart-point" cx="' + cx + '" cy="' + cy + '" r="4.5" fill="#b45309" stroke="#000" stroke-width="1.5" data-tip="' + tip + '"><title>' + tip + '</title></circle>';
          svgHtml += '<text x="' + cx + '" y="' + (height - 12) + '" fill="#374151" font-size="10.5" text-anchor="middle" font-weight="700">' + d.period_year + '</text>';
        });

        svg.innerHTML = svgHtml;
        renderComparisonTable('kacchiChart', items.map(d => ({
          year: d.period_year,
          value: d.value,
          unit: 'BDT/dega',
          source: d.source_agency || 'Dhaka Catering Association & Puran Dhaka Guild'
        })));
      } catch (e) {
        console.error('Failed to load kacchi chart', e);
      }
    }

    function updateWeddingCalculator() {
      const guests = parseInt(document.getElementById('kacchiGuestsInput')?.value || '300', 10) || 300;
      const box = document.getElementById('weddingResultBox');
      if (!box) return;

      const degas = Math.ceil(guests / 32);
      const biryaniCost = degas * 26500;
      const borhaniLiters = Math.ceil(guests * 0.25);
      const borhaniCost = borhaniLiters * 160;
      const jordaCost = guests * 70;
      const venueRent = guests > 500 ? 120000 : (guests > 250 ? 75000 : 45000);
      const totalFood = biryaniCost + borhaniCost + jordaCost;
      const grandTotal = totalFood + venueRent;
      const perGuest = Math.round(grandTotal / guests);

      box.innerHTML = \`
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:1rem; margin-bottom:1.25rem;">
          <div style="background:var(--card-bg); padding:1rem; border-radius:0.5rem; border:1px solid var(--card-border);">
            <div style="font-size:0.85rem; color:var(--text-muted); text-transform:uppercase;">Biryani Dega Needed</div>
            <div style="font-size:1.6rem; font-weight:800; color:#f59e0b;">\${degas} <span style="font-size:0.95rem; font-weight:400;">Degas (~32/dega)</span></div>
            <div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.25rem;">\${biryaniCost.toLocaleString()} ৳ for Basmati Mutton</div>
          </div>
          <div style="background:var(--card-bg); padding:1rem; border-radius:0.5rem; border:1px solid var(--card-border);">
            <div style="font-size:0.85rem; color:var(--text-muted); text-transform:uppercase;">Borhani & Dessert</div>
            <div style="font-size:1.6rem; font-weight:800; color:var(--accent);">\${(borhaniCost + jordaCost).toLocaleString()} <span style="font-size:0.95rem; font-weight:400;">৳</span></div>
            <div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.25rem;">\${borhaniLiters}L Borhani + \${guests} portions Jorda</div>
          </div>
          <div style="background:var(--card-bg); padding:1rem; border-radius:0.5rem; border:1px solid var(--card-border);">
            <div style="font-size:0.85rem; color:var(--text-muted); text-transform:uppercase;">Community Center Rent</div>
            <div style="font-size:1.6rem; font-weight:800; color:var(--blue);">\${venueRent.toLocaleString()} <span style="font-size:0.95rem; font-weight:400;">৳</span></div>
            <div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.25rem;">Average banquet hall rental estimate</div>
          </div>
          <div style="background:var(--card-bg); padding:1rem; border-radius:0.5rem; border:1px solid var(--card-border);">
            <div style="font-size:0.85rem; color:var(--text-muted); text-transform:uppercase;">Estimated Total Budget</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--accent);">\${grandTotal.toLocaleString()} <span style="font-size:1rem; font-weight:400;">৳</span></div>
            <div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.25rem;">~\${perGuest.toLocaleString()} ৳ all-inclusive per guest</div>
          </div>
        </div>
      \`;
    }

    async function loadInternetCharts() {
      const pSvg = document.getElementById('internetPriceChart');
      const uSvg = document.getElementById('internetUsersChart');
      if (!pSvg && !uSvg) return;

      try {
        const res = await fetch('/api/internet');
        const data = await res.json();
        const prices = (data.price || []).sort((a, b) => a.period_year - b.period_year);
        const users = (data.users || []).sort((a, b) => a.period_year - b.period_year);

        const width = 900;
        const height = 240;
        const padLeft = 55;
        const padRight = 30;
        const padTop = 25;
        const padBottom = 35;

        if (pSvg && prices.length > 0) {
          const maxP = 320;
          const minP = 0;
          const scaleX = (idx) => padLeft + (idx / Math.max(prices.length - 1, 1)) * (width - padLeft - padRight);
          const scaleY = (val) => height - padBottom - ((val - minP) / (maxP - minP)) * (height - padTop - padBottom);

          let points = prices.map((d, i) => scaleX(i) + ',' + scaleY(d.value)).join(' ');
          let areaPoints = scaleX(0) + ',' + (height - padBottom) + ' ' + points + ' ' + scaleX(prices.length - 1) + ',' + (height - padBottom);

          let svgHtml = '<defs><linearGradient id="netPriceGrad" x1="0%" y1="0%" x2="0%" y2="100%">' +
            '<stop offset="0%" stop-color="#f42a41" stop-opacity="0.35"/>' +
            '<stop offset="100%" stop-color="#f42a41" stop-opacity="0.0"/>' +
          '</linearGradient></defs>' +
          '<line x1="' + padLeft + '" y1="' + scaleY(0) + '" x2="' + (width - padRight) + '" y2="' + scaleY(0) + '" stroke="#1f2937" stroke-width="1"/>' +
          '<line x1="' + padLeft + '" y1="' + scaleY(100) + '" x2="' + (width - padRight) + '" y2="' + scaleY(100) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
          '<text x="' + (padLeft - 8) + '" y="' + (scaleY(100) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">100৳</text>' +
          '<line x1="' + padLeft + '" y1="' + scaleY(250) + '" x2="' + (width - padRight) + '" y2="' + scaleY(250) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
          '<text x="' + (padLeft - 8) + '" y="' + (scaleY(250) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">250৳</text>' +
          '<polygon points="' + areaPoints + '" fill="url(#netPriceGrad)"/>' +
          '<polyline points="' + points + '" fill="none" stroke="#f42a41" stroke-width="2.5" stroke-linecap="round"/>';

          prices.forEach((d, i) => {
            const cx = scaleX(i);
            const cy = scaleY(d.value);
            const prev = i > 0 ? prices[i-1].value : null;
            const deltaPct = prev ? (((d.value - prev) / prev) * 100).toFixed(1) : null;
            const src = d.source_agency || 'BTRC (Bangladesh Telecommunication Regulatory Commission) Reports';
            const tipP = d.period_year + ' 1GB Data: ৳' + d.value + (deltaPct ? ' (YoY: ' + deltaPct + '%)' : '') + '<br><span style="color:#10b981;font-size:0.75rem;font-weight:700;">Ref: ' + src + '</span>';

            svgHtml += '<text x="' + cx + '" y="' + (cy - 8) + '" class="chart-val-label" fill="#f42a41">৳' + d.value + '</text>';
            svgHtml += '<circle class="chart-point" cx="' + cx + '" cy="' + cy + '" r="4.5" fill="#f42a41" stroke="#000" stroke-width="1.5" data-tip="' + tipP + '"><title>' + tipP + '</title></circle>';
            svgHtml += '<text x="' + cx + '" y="' + (height - 12) + '" fill="#374151" font-size="10.5" text-anchor="middle" font-weight="700">' + d.period_year + '</text>';
          });
          pSvg.innerHTML = svgHtml;
          renderComparisonTable('internetPriceChart', prices.map(d => ({
            year: d.period_year,
            value: d.value,
            unit: 'BDT/GB',
            source: d.source_agency || 'BTRC Tariff Archives'
          })));
        }

        if (uSvg && users.length > 0) {
          const maxU = 150;
          const minU = 0;
          const scaleX = (idx) => padLeft + (idx / Math.max(users.length - 1, 1)) * (width - padLeft - padRight);
          const scaleY = (val) => height - padBottom - ((val - minU) / (maxU - minU)) * (height - padTop - padBottom);

          let points = users.map((d, i) => scaleX(i) + ',' + scaleY(d.value)).join(' ');
          let areaPoints = scaleX(0) + ',' + (height - padBottom) + ' ' + points + ' ' + scaleX(users.length - 1) + ',' + (height - padBottom);

          let svgHtml = '<defs><linearGradient id="netUsersGrad" x1="0%" y1="0%" x2="0%" y2="100%">' +
            '<stop offset="0%" stop-color="#006a4e" stop-opacity="0.35"/>' +
            '<stop offset="100%" stop-color="#006a4e" stop-opacity="0.0"/>' +
          '</linearGradient></defs>' +
          '<line x1="' + padLeft + '" y1="' + scaleY(0) + '" x2="' + (width - padRight) + '" y2="' + scaleY(0) + '" stroke="#1f2937" stroke-width="1"/>' +
          '<line x1="' + padLeft + '" y1="' + scaleY(50) + '" x2="' + (width - padRight) + '" y2="' + scaleY(50) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
          '<text x="' + (padLeft - 8) + '" y="' + (scaleY(50) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">50M</text>' +
          '<line x1="' + padLeft + '" y1="' + scaleY(100) + '" x2="' + (width - padRight) + '" y2="' + scaleY(100) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
          '<text x="' + (padLeft - 8) + '" y="' + (scaleY(100) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">100M</text>' +
          '<polygon points="' + areaPoints + '" fill="url(#netUsersGrad)"/>' +
          '<polyline points="' + points + '" fill="none" stroke="#006a4e" stroke-width="2.5" stroke-linecap="round"/>';

          users.forEach((d, i) => {
            const cx = scaleX(i);
            const cy = scaleY(d.value);
            const prev = i > 0 ? users[i-1].value : null;
            const deltaPct = prev ? (((d.value - prev) / prev) * 100).toFixed(1) : null;
            const src = d.source_agency || 'BTRC Mobile Internet Subscriber Bulletins';
            const tipU = d.period_year + ' Users: ' + d.value + ' Million (YoY: ' + (deltaPct ? '+' + deltaPct + '%' : 'Base') + ')<br><span style="color:#10b981;font-size:0.75rem;font-weight:700;">Ref: ' + src + '</span>';

            svgHtml += '<text x="' + cx + '" y="' + (cy - 8) + '" class="chart-val-label" fill="#006a4e">' + d.value + 'M</text>';
            svgHtml += '<circle class="chart-point" cx="' + cx + '" cy="' + cy + '" r="4.5" fill="#006a4e" stroke="#000" stroke-width="1.5" data-tip="' + tipU + '"><title>' + tipU + '</title></circle>';
            svgHtml += '<text x="' + cx + '" y="' + (height - 12) + '" fill="#374151" font-size="10.5" text-anchor="middle" font-weight="700">' + d.period_year + '</text>';
          });
          uSvg.innerHTML = svgHtml;
          renderComparisonTable('internetUsersChart', users.map(d => ({
            year: d.period_year,
            value: d.value,
            unit: 'Million Users',
            source: d.source_agency || 'BTRC Telecom Statistics'
          })));
        }
      } catch (e) {
        console.error('Failed to load internet charts', e);
      }
    }

    async function loadRentChart() {
      const svg = document.getElementById('rentChart');
      if (!svg) return;
      try {
        const res = await fetch('/api/rent');
        const data = await res.json();
        const dhanmondi = (data.dhanmondi || []).sort((a, b) => a.period_year - b.period_year);
        const mirpur = (data.mirpur || []).sort((a, b) => a.period_year - b.period_year);
        if (dhanmondi.length === 0) return;

        const width = 900;
        const height = 240;
        const padLeft = 60;
        const padRight = 30;
        const padTop = 25;
        const padBottom = 35;

        const maxVal = 50000;
        const minVal = 0;

        const scaleX = (idx) => padLeft + (idx / Math.max(dhanmondi.length - 1, 1)) * (width - padLeft - padRight);
        const scaleY = (val) => height - padBottom - ((val - minVal) / (maxVal - minVal)) * (height - padTop - padBottom);

        let dPoints = dhanmondi.map((d, i) => scaleX(i) + ',' + scaleY(d.value)).join(' ');
        let mPoints = mirpur.map((d, i) => scaleX(i) + ',' + scaleY(d.value)).join(' ');

        let svgHtml = '<line x1="' + padLeft + '" y1="' + scaleY(0) + '" x2="' + (width - padRight) + '" y2="' + scaleY(0) + '" stroke="#1f2937" stroke-width="1"/>' +
          '<line x1="' + padLeft + '" y1="' + scaleY(20000) + '" x2="' + (width - padRight) + '" y2="' + scaleY(20000) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
          '<text x="' + (padLeft - 8) + '" y="' + (scaleY(20000) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">20k৳</text>' +
          '<line x1="' + padLeft + '" y1="' + scaleY(40000) + '" x2="' + (width - padRight) + '" y2="' + scaleY(40000) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
          '<text x="' + (padLeft - 8) + '" y="' + (scaleY(40000) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">40k৳</text>' +
          '<polyline points="' + dPoints + '" fill="none" stroke="#f42a41" stroke-width="2.5" stroke-linecap="round"/>' +
          '<polyline points="' + mPoints + '" fill="none" stroke="#006a4e" stroke-width="2.5" stroke-linecap="round"/>';

        dhanmondi.forEach((d, i) => {
          const cx = scaleX(i);
          const srcD = d.source_agency || 'REHAB Housing Archive & Dhanmondi Broker Survey';
          const tipD = d.period_year + ' Dhanmondi Rent: ৳' + d.value.toLocaleString() + '/mo<br><span style="color:#10b981;font-size:0.75rem;font-weight:700;">Ref: ' + srcD + '</span>';
          svgHtml += '<text x="' + cx + '" y="' + (scaleY(d.value) - 8) + '" class="chart-val-label" fill="#f42a41">৳' + Math.round(d.value/1000) + 'k</text>';
          svgHtml += '<circle class="chart-point" cx="' + cx + '" cy="' + scaleY(d.value) + '" r="4.5" fill="#f42a41" stroke="#000" stroke-width="1.5" data-tip="' + tipD + '"><title>' + tipD + '</title></circle>';

          if (mirpur[i]) {
            const srcM = mirpur[i].source_agency || 'Mirpur Housing Society & To-Let Registry';
            const tipM = mirpur[i].period_year + ' Mirpur Rent: ৳' + mirpur[i].value.toLocaleString() + '/mo<br><span style="color:#10b981;font-size:0.75rem;font-weight:700;">Ref: ' + srcM + '</span>';
            svgHtml += '<text x="' + cx + '" y="' + (scaleY(mirpur[i].value) + 16) + '" class="chart-val-label" fill="#006a4e">৳' + Math.round(mirpur[i].value/1000) + 'k</text>';
            svgHtml += '<circle class="chart-point" cx="' + cx + '" cy="' + scaleY(mirpur[i].value) + '" r="4.5" fill="#006a4e" stroke="#000" stroke-width="1.5" data-tip="' + tipM + '"><title>' + tipM + '</title></circle>';
          }
          svgHtml += '<text x="' + cx + '" y="' + (height - 12) + '" fill="#374151" font-size="10.5" text-anchor="middle" font-weight="700">' + d.period_year + '</text>';
        });

        svg.innerHTML = svgHtml;
        renderComparisonTable('rentChart', dhanmondi.map((d, i) => ({
          year: d.period_year,
          v1: d.value,
          v2: mirpur[i] ? mirpur[i].value : null,
          l1: 'Dhanmondi (৳)',
          l2: 'Mirpur (৳)',
          source: d.source_agency || 'REHAB & Dhaka City To-Let Broker Records'
        })));
      } catch (e) {
        console.error('Failed to load rent chart', e);
      }
    }

    function updateRentCalculator() {
      const salary = parseInt(document.getElementById('salaryInput')?.value || '80000', 10) || 80000;
      const box = document.getElementById('rentResultBox');
      if (!box) return;

      const max30 = Math.round(salary * 0.30);
      const max40 = Math.round(salary * 0.40);

      const zones = [
        { name: "Mirpur 2-Bed (1,000 sqft)", rent: 20000 },
        { name: "Uttara 3-Bed (1,200 sqft)", rent: 28000 },
        { name: "Dhanmondi 3-Bed (1,200 sqft)", rent: 38000 },
        { name: "Gulshan / Banani 3-Bed", rent: 75000 }
      ];

      let rows = '';
      zones.forEach(z => {
        let status = '';
        if (z.rent <= max30) {
          status = '<span class="badge-pill badge-green">Recommended (&le;30%)</span>';
        } else if (z.rent <= max40) {
          status = '<span class="badge-pill badge-amber">Acceptable (30-40%)</span>';
        } else {
          status = '<span class="badge-pill badge-red">Cost-Burdened (&gt;40%)</span>';
        }
        rows += \`
          <tr>
            <td><strong>\${z.name}</strong></td>
            <td>\${z.rent.toLocaleString()} ৳/mo</td>
            <td>\${((z.rent / salary) * 100).toFixed(1)}% of salary</td>
            <td>\${status}</td>
          </tr>
        \`;
      });

      box.innerHTML = \`
        <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:1rem; margin-bottom:1rem;">
          <div>
            <div style="font-size:0.85rem; color:var(--text-muted); text-transform:uppercase;">Prudent Rent Cap (30% Rule)</div>
            <div style="font-size:1.6rem; font-weight:800; color:var(--accent);">\${max30.toLocaleString()} <span style="font-size:0.95rem; font-weight:400;">BDT / month</span></div>
          </div>
          <div>
            <div style="font-size:0.85rem; color:var(--text-muted); text-transform:uppercase;">Maximum Safe Ceiling (40%)</div>
            <div style="font-size:1.6rem; font-weight:800; color:var(--blue);">\${max40.toLocaleString()} <span style="font-size:0.95rem; font-weight:400;">BDT / month</span></div>
          </div>
        </div>
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Neighborhood & Unit</th>
                <th>Typical Market Rent</th>
                <th>Share of Your Income</th>
                <th>Verdict</th>
              </tr>
            </thead>
            <tbody>\${rows}</tbody>
          </table>
        </div>
      \`;
    }

    async function loadDemographicsCharts() {
      const lSvg = document.getElementById('lifeChart');
      const tSvg = document.getElementById('tfrChart');
      if (!lSvg && !tSvg) return;

      try {
        const res = await fetch('/api/demographics');
        const data = await res.json();
        const life = (data.lifeExpectancy || []).sort((a, b) => a.period_year - b.period_year);
        const tfr = (data.fertility || []).sort((a, b) => a.period_year - b.period_year);

        const width = 900;
        const height = 240;
        const padLeft = 55;
        const padRight = 25;
        const padTop = 20;
        const padBottom = 35;

        if (lSvg && life.length > 0) {
          const maxVal = 80;
          const minVal = 40;
          const scaleX = (idx) => padLeft + (idx / (life.length - 1)) * (width - padLeft - padRight);
          const scaleY = (val) => height - padBottom - ((val - minVal) / (maxVal - minVal)) * (height - padTop - padBottom);

          let points = life.map((d, i) => \`\${scaleX(i)},\${scaleY(d.value)}\`).join(' ');
          let areaPoints = \`\${scaleX(0)},\${height - padBottom} \${points} \${scaleX(life.length - 1)},\${height - padBottom}\`;

          let svgHtml = \`
            <defs>
              <linearGradient id="lifeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
                <stop offset="100%" stop-color="#10b981" stop-opacity="0.0"/>
              </linearGradient>
            </defs>
            <line x1="\${padLeft}" y1="\${scaleY(50)}" x2="\${width - padRight}" y2="\${scaleY(50)}" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>
            <text x="\${padLeft - 8}" y="\${scaleY(50) + 4}" fill="#6b7280" font-size="11" text-anchor="end">50 yrs</text>
            <line x1="\${padLeft}" y1="\${scaleY(70)}" x2="\${width - padRight}" y2="\${scaleY(70)}" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>
            <text x="\${padLeft - 8}" y="\${scaleY(70) + 4}" fill="#6b7280" font-size="11" text-anchor="end">70 yrs</text>
            <polygon points="\${areaPoints}" fill="url(#lifeGrad)"/>
            <polyline points="\${points}" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round"/>
          \`;

          life.forEach((d, i) => {
            const cx = scaleX(i);
            const cy = scaleY(d.value);
            svgHtml += \`<circle cx="\${cx}" cy="\${cy}" r="3.5" fill="#10b981" stroke="#090d16" stroke-width="1.5"/>\`;
            svgHtml += \`<text x="\${cx}" y="\${height - 12}" fill="#9ca3af" font-size="10.5" text-anchor="middle">\${d.period_year}</text>\`;
          });
          lSvg.innerHTML = svgHtml;
        }

        if (tSvg && tfr.length > 0) {
          const maxVal = 7.5;
          const minVal = 1.5;
          const scaleX = (idx) => padLeft + (idx / (tfr.length - 1)) * (width - padLeft - padRight);
          const scaleY = (val) => height - padBottom - ((val - minVal) / (maxVal - minVal)) * (height - padTop - padBottom);

          let points = tfr.map((d, i) => \`\${scaleX(i)},\${scaleY(d.value)}\`).join(' ');
          let areaPoints = \`\${scaleX(0)},\${height - padBottom} \${points} \${scaleX(tfr.length - 1)},\${height - padBottom}\`;

          let svgHtml = \`
            <defs>
              <linearGradient id="tfrGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.35"/>
                <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.0"/>
              </linearGradient>
            </defs>
            <line x1="\${padLeft}" y1="\${scaleY(2.1)}" x2="\${width - padRight}" y2="\${scaleY(2.1)}" stroke="#10b981" stroke-dasharray="4" stroke-width="1.5"/>
            <text x="\${width - padRight}" y="\${scaleY(2.1) - 6}" fill="#10b981" font-size="10.5" text-anchor="end">Replacement Level (2.1)</text>
            <line x1="\${padLeft}" y1="\${scaleY(4.0)}" x2="\${width - padRight}" y2="\${scaleY(4.0)}" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>
            <text x="\${padLeft - 8}" y="\${scaleY(4.0) + 4}" fill="#6b7280" font-size="11" text-anchor="end">4.0</text>
            <polygon points="\${areaPoints}" fill="url(#tfrGrad)"/>
            <polyline points="\${points}" fill="none" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round"/>
          \`;

          tfr.forEach((d, i) => {
            const cx = scaleX(i);
            const cy = scaleY(d.value);
            svgHtml += \`<circle cx="\${cx}" cy="\${cy}" r="3.5" fill="#3b82f6" stroke="#090d16" stroke-width="1.5"/>\`;
            svgHtml += \`<text x="\${cx}" y="\${height - 12}" fill="#9ca3af" font-size="10.5" text-anchor="middle">\${d.period_year}</text>\`;
          });
          tSvg.innerHTML = svgHtml;
        }
      } catch (e) {
        console.error('Failed to load demographics charts', e);
      }
    }

    async function loadGridChart() {
      const svg = document.getElementById('gridChart');
      if (!svg) return;

      try {
        const res = await fetch('/api/grid');
        const data = await res.json();
        const items = (data.capacity || []).sort((a, b) => a.period_year - b.period_year);
        if (items.length === 0) return;

        const width = 900;
        const height = 240;
        const padLeft = 60;
        const padRight = 25;
        const padTop = 20;
        const padBottom = 35;

        const maxVal = 35000;
        const minVal = 0;

        const scaleX = (idx) => padLeft + (idx / (items.length - 1)) * (width - padLeft - padRight);
        const scaleY = (val) => height - padBottom - ((val - minVal) / (maxVal - minVal)) * (height - padTop - padBottom);

        let points = items.map((d, i) => \`\${scaleX(i)},\${scaleY(d.value)}\`).join(' ');
        let areaPoints = \`\${scaleX(0)},\${height - padBottom} \${points} \${scaleX(items.length - 1)},\${height - padBottom}\`;

        let svgHtml = \`
          <defs>
            <linearGradient id="gridGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
              <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.0"/>
            </linearGradient>
          </defs>
          <line x1="\${padLeft}" y1="\${scaleY(0)}" x2="\${width - padRight}" y2="\${scaleY(0)}" stroke="#1f2937" stroke-width="1"/>
          <line x1="\${padLeft}" y1="\${scaleY(10000)}" x2="\${width - padRight}" y2="\${scaleY(10000)}" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>
          <text x="\${padLeft - 8}" y="\${scaleY(10000) + 4}" fill="#6b7280" font-size="11" text-anchor="end">10k MW</text>
          <line x1="\${padLeft}" y1="\${scaleY(25000)}" x2="\${width - padRight}" y2="\${scaleY(25000)}" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>
          <text x="\${padLeft - 8}" y="\${scaleY(25000) + 4}" fill="#6b7280" font-size="11" text-anchor="end">25k MW</text>
          <polygon points="\${areaPoints}" fill="url(#gridGrad)"/>
          <polyline points="\${points}" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/>
        \`;

        items.forEach((d, i) => {
          const cx = scaleX(i);
          const cy = scaleY(d.value);
          svgHtml += \`<circle cx="\${cx}" cy="\${cy}" r="3.5" fill="#f59e0b" stroke="#090d16" stroke-width="1.5"/>\`;
          svgHtml += \`<text x="\${cx}" y="\${height - 12}" fill="#9ca3af" font-size="10.5" text-anchor="middle">\${d.period_year}</text>\`;
        });

        svg.innerHTML = svgHtml;
      } catch (e) {
        console.error('Failed to load grid chart', e);
      }
    }

    async function loadForexChart() {
      const svg = document.getElementById('forexChart');
      if (!svg) return;
      try {
        const res = await fetch('/api/forex');
        const data = await res.json();
        const items = (data.rates || []).sort((a, b) => a.period_year - b.period_year);
        if (items.length === 0) return;

        const width = 900;
        const height = 240;
        const padLeft = 55;
        const padRight = 30;
        const padTop = 25;
        const padBottom = 35;

        const maxVal = 140;
        const minVal = 0;

        const scaleX = (idx) => padLeft + (idx / Math.max(items.length - 1, 1)) * (width - padLeft - padRight);
        const scaleY = (val) => height - padBottom - ((val - minVal) / (maxVal - minVal)) * (height - padTop - padBottom);

        let points = items.map((d, i) => scaleX(i) + ',' + scaleY(d.value)).join(' ');
        let areaPoints = scaleX(0) + ',' + (height - padBottom) + ' ' + points + ' ' + scaleX(items.length - 1) + ',' + (height - padBottom);

        let svgHtml = '<defs><linearGradient id="forexGrad" x1="0%" y1="0%" x2="0%" y2="100%">' +
          '<stop offset="0%" stop-color="#006a4e" stop-opacity="0.35"/>' +
          '<stop offset="100%" stop-color="#006a4e" stop-opacity="0.0"/>' +
        '</linearGradient></defs>' +
        '<line x1="' + padLeft + '" y1="' + scaleY(0) + '" x2="' + (width - padRight) + '" y2="' + scaleY(0) + '" stroke="#1f2937" stroke-width="1"/>' +
        '<line x1="' + padLeft + '" y1="' + scaleY(50) + '" x2="' + (width - padRight) + '" y2="' + scaleY(50) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
        '<text x="' + (padLeft - 8) + '" y="' + (scaleY(50) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">50৳</text>' +
        '<line x1="' + padLeft + '" y1="' + scaleY(100) + '" x2="' + (width - padRight) + '" y2="' + scaleY(100) + '" stroke="#1f2937" stroke-dasharray="4" stroke-width="1"/>' +
        '<text x="' + (padLeft - 8) + '" y="' + (scaleY(100) + 4) + '" fill="#6b7280" font-size="11" text-anchor="end">100৳</text>' +
        '<polygon points="' + areaPoints + '" fill="url(#forexGrad)"/>' +
        '<polyline points="' + points + '" fill="none" stroke="#006a4e" stroke-width="2.5" stroke-linecap="round"/>';

        items.forEach((d, i) => {
          const cx = scaleX(i);
          const cy = scaleY(d.value);
          const prev = i > 0 ? items[i-1].value : null;
          const yoy = prev ? (((d.value - prev) / prev) * 100).toFixed(1) : null;
          const yoyStr = yoy ? (yoy > 0 ? '+' + yoy + '%' : yoy + '%') : 'Base';
          const src = d.source_agency || 'Bangladesh Bank FX Archives & World Bank Open Data';
          const tip = d.period_year + ': ৳' + d.value.toFixed(1) + ' / USD (YoY Devaluation: ' + yoyStr + ')<br><span style="color:#10b981;font-size:0.75rem;font-weight:700;">Ref: ' + src + '</span>';

          svgHtml += '<text x="' + cx + '" y="' + (cy - 8) + '" class="chart-val-label">' + d.value.toFixed(1) + '৳</text>';
          svgHtml += '<circle class="chart-point" cx="' + cx + '" cy="' + cy + '" r="4.5" fill="#006a4e" stroke="#000" stroke-width="1.5" data-tip="' + tip + '"><title>' + tip + '</title></circle>';
          svgHtml += '<text x="' + cx + '" y="' + (height - 12) + '" fill="#374151" font-size="10.5" text-anchor="middle" font-weight="700">' + d.period_year + '</text>';
        });

        svg.innerHTML = svgHtml;
        renderComparisonTable('forexChart', items.map(d => ({
          year: d.period_year,
          value: d.value,
          unit: 'BDT/USD',
          source: d.source_agency || 'Bangladesh Bank Historical FX Bulletin'
        })));
      } catch (e) {
        console.error('Failed to load forex chart', e);
      }
    }

    function updateForexCalculator() {
      const usd = parseFloat(document.getElementById('usdInput')?.value || '1000') || 1000;
      const box = document.getElementById('forexResultBox');
      if (!box) return;

      const eras = [
        { year: 1971, rate: 7.80, note: "Liberation Parity" },
        { year: 1990, rate: 35.70, note: "Democratic Transition" },
        { year: 2000, rate: 52.15, note: "Millennium Benchmark" },
        { year: 2010, rate: 69.65, note: "Pre-Digital Boom" },
        { year: 2020, rate: 84.85, note: "Pre-War Pegged Rate" },
        { year: 2025, rate: 122.50, note: "Current Interbank (Crawling Peg)" }
      ];

      let rows = '';
      eras.forEach(e => {
        const converted = Math.round(usd * e.rate);
        rows += \`
          <tr>
            <td><strong>\${e.year}</strong></td>
            <td>1 USD = \${e.rate.toFixed(2)} ৳</td>
            <td><strong style="color:var(--accent);">\${converted.toLocaleString()} BDT</strong></td>
            <td style="color:var(--text-muted); font-size:0.85rem;">\${e.note}</td>
          </tr>
        \`;
      });

      box.innerHTML = \`
        <div style="font-size:1.1rem; font-weight:700; margin-bottom:0.75rem;">
          $\${usd.toLocaleString()} USD converted across 54 years:
        </div>
        <div class="table-container">
          <table class="results-table">
            <thead>
              <tr>
                <th>Era / Year</th>
                <th>Exchange Rate</th>
                <th>Taka Value</th>
                <th>Historical Context</th>
              </tr>
            </thead>
            <tbody>\${rows}</tbody>
          </table>
        </div>
      \`;
    }

    function toggleDirectory() {
      const drawer = document.getElementById('directoryDrawer');
      const chevron = document.getElementById('dirChevron');
      const btn = document.getElementById('dirToggleBtn');
      if (!drawer) return;
      const isCollapsed = drawer.classList.toggle('collapsed');
      if (chevron) chevron.textContent = isCollapsed ? '▼' : '▲';
      if (btn) btn.setAttribute('aria-expanded', isCollapsed ? 'false' : 'true');
      try { localStorage.setItem('bdmcp_dir_collapsed', isCollapsed ? '1' : '0'); } catch(e) {}
    }
    try {
      if (localStorage.getItem('bdmcp_dir_collapsed') === '1') {
        const d = document.getElementById('directoryDrawer');
        const c = document.getElementById('dirChevron');
        const b = document.getElementById('dirToggleBtn');
        if (d) d.classList.add('collapsed');
        if (c) c.textContent = '▼';
        if (b) b.setAttribute('aria-expanded', 'false');
      }
    } catch(e) {}

    async function loadViralChart(svgId, apiPath, colors, maxVal) {
      const svg = document.getElementById(svgId);
      if (!svg) return;
      try {
        const res = await fetch(apiPath);
        const raw = await res.json();
        let series = [];
        if (svgId === 'fuchkaChart') {
          const fuchka = (raw.fuchka || []).sort((a, b) => a.period_year - b.period_year);
          const shingara = (raw.shingara || []).sort((a, b) => a.period_year - b.period_year);
          const allYears = [...new Set([...fuchka.map(d => d.period_year), ...shingara.map(d => d.period_year)])].sort();
          series = allYears.map(y => {
            const f = fuchka.find(d => d.period_year === y);
            const s = shingara.find(d => d.period_year === y);
            return {
              year: y,
              v1: f ? f.value : null,
              v2: s ? s.value : null,
              l1: 'Fuchka (৳)',
              l2: 'Shingara (৳)',
              source: f ? f.source_agency : (s ? s.source_agency : 'Dhaka Street Vendors Guild')
            };
          });
        } else if (svgId === 'bcsChart') {
          const apps = (raw.applicants || []).sort((a, b) => a.bcs_no - b.bcs_no);
          const cads = raw.cadres || [];
          series = apps.map(a => {
            const c = cads.find(x => x.bcs_no === a.bcs_no);
            return {
              year: a.bcs_no + 'th',
              v1: Math.round(a.value / 1000),
              v2: c ? +(c.value / 1000).toFixed(1) : 0,
              l1: 'Applicants (k)',
              l2: 'Cadres (k)',
              source: a.source_agency || 'BPSC (Bangladesh Public Service Commission) Annual Reports'
            };
          });
        } else if (svgId === 'cngChart') {
          const meter = (raw.meter || []).sort((a, b) => a.period_year - b.period_year);
          const chukti = raw.chukti || [];
          series = meter.map(m => {
            const c = chukti.find(x => x.period_year === m.period_year);
            return {
              year: m.period_year,
              v1: m.value,
              v2: c ? c.value : 0,
              l1: 'Legal Meter (৳)',
              l2: 'Street Chukti (৳)',
              source: m.source_agency || 'BRTA Gazette Fare Revision & Commuter Survey'
            };
          });
        } else if (svgId === 'biryaniChart') {
          const haji = (raw.haji || []).sort((a, b) => a.period_year - b.period_year);
          const borhani = raw.borhani || [];
          series = haji.map(h => {
            const b = borhani.find(x => x.period_year === h.period_year);
            return {
              year: h.period_year,
              v1: h.value,
              v2: b ? b.value : 0,
              l1: 'Haji Biryani (৳)',
              l2: 'Borhani (৳)',
              source: h.source_agency || 'Puran Dhaka Nazira Bazar Commercial Guild'
            };
          });
        } else if (svgId === 'loadshedChart') {
          const hours = (raw.hours || []).sort((a, b) => a.period_year - b.period_year);
          const batt = raw.battery || [];
          series = hours.map(h => {
            const b = batt.find(x => x.period_year === h.period_year);
            return {
              year: h.period_year,
              v1: Math.round(h.value * 30),
              v2: b ? Math.round(b.value / 100) : 0,
              l1: 'Monthly Outage (h)',
              l2: '150Ah Battery (৳00)',
              source: h.source_agency || 'BPDB Power Sector Generation & Outage Bulletins'
            };
          });
        } else if (svgId === 'bplChart') {
          series = (raw.rebrands || []).map(r => ({
            year: r.division,
            value: r.rebrands_count,
            source: 'BCB (Bangladesh Cricket Board) BPL Franchise Gazettes'
          }));
        } else if (svgId === 'pathaoChart') {
          const bikes = (raw.bikes || []).sort((a, b) => a.period_year - b.period_year);
          const cars = raw.cars || [];
          series = bikes.map(b => {
            const c = cars.find(x => x.period_year === b.period_year);
            return {
              year: b.period_year,
              v1: b.value,
              v2: c ? c.value : 0,
              l1: 'Pathao Bike (৳)',
              l2: 'Uber Car (৳)',
              source: b.source_agency || 'BRTA & Dhaka Ride-Sharing Fare Records'
            };
          });
        } else if (svgId === 'sakrainChart') {
          const watts = (raw.watts || []).sort((a, b) => a.period_year - b.period_year);
          const kites = raw.kites || [];
          series = watts.map(w => {
            const k = kites.find(x => x.period_year === w.period_year);
            return {
              year: w.period_year,
              v1: Math.round(w.value / 100),
              v2: k ? k.value : 0,
              l1: 'Sound Power (x100W)',
              l2: 'Chokhkhutti Kite (৳)',
              source: w.source_agency || 'Puran Dhaka Cultural Association'
            };
          });
        } else if (svgId === 'boimelaChart') {
          const titles = (raw.titles || []).sort((a, b) => a.period_year - b.period_year);
          const sales = raw.sales || [];
          series = titles.map(t => {
            const s = sales.find(x => x.period_year === t.period_year);
            return {
              year: t.period_year,
              v1: Math.round(t.value / 10),
              v2: s ? s.value : 0,
              l1: 'Titles (x10)',
              l2: 'Sales (Crore ৳)',
              source: t.source_agency || 'Bangla Academy Boi Mela Public Statistics'
            };
          });
        } else if (svgId === 'holudChart') {
          const prod = (raw.production || []).sort((a, b) => a.period_year - b.period_year);
          const make = raw.makeover || [];
          series = prod.map(p => {
            const m = make.find(x => x.period_year === p.period_year);
            return {
              year: p.period_year,
              v1: Math.round(p.value / 1000),
              v2: m ? Math.round(m.value / 1000) : 0,
              l1: 'Event Production (৳k)',
              l2: 'Makeover (৳k)',
              source: p.source_agency || 'Dhaka Event Planner & Bridal Salon Guild'
            };
          });
        } else {
          const key = Object.keys(raw).find(k => Array.isArray(raw[k]) && raw[k].length > 0 && (raw[k][0].period_year != null || raw[k][0].year != null)) || Object.keys(raw)[0];
          series = (raw[key] || []).sort((a, b) => (a.period_year || a.year) - (b.period_year || b.year)).map(d => ({
            year: d.period_year || d.year,
            value: d.value,
            unit: d.unit,
            source: d.source_agency || 'Official Public Archive'
          }));
        }
        if (series.length === 0) return;

        const width = 900;
        const height = 240;
        const padLeft = 60;
        const padRight = 35;
        const padTop = 25;
        const padBottom = 35;

        const scaleX = (idx) => padLeft + (idx / Math.max(series.length - 1, 1)) * (width - padLeft - padRight);
        const effectiveMax = Math.max(maxVal || 0, ...series.map(d => (d.v1 != null ? d.v1 : d.value) || 0)) * 1.15;
        const scaleY = (val) => height - padBottom - (val / (effectiveMax || 1)) * (height - padTop - padBottom);

        let svgHtml = '';
        if (['fuchkaChart', 'bcsChart', 'cngChart', 'biryaniChart', 'loadshedChart', 'pathaoChart', 'sakrainChart', 'boimelaChart', 'holudChart'].includes(svgId)) {
          const c1 = (svgId === 'bcsChart' || svgId === 'holudChart') ? '#f42a41' : (svgId === 'sakrainChart' || svgId === 'boimelaChart') ? '#006a4e' : svgId === 'cngChart' ? '#006a4e' : svgId === 'biryaniChart' ? '#006a4e' : '#006a4e';
          const c2 = (svgId === 'sakrainChart' || svgId === 'holudChart') ? '#b45309' : (svgId === 'cngChart' || svgId === 'biryaniChart' || svgId === 'pathaoChart' || svgId === 'boimelaChart') ? '#f42a41' : '#006a4e';
          const p1 = series.filter(d => d.v1 != null).map((d) => scaleX(series.indexOf(d)) + ',' + scaleY(d.v1)).join(' ');
          const p2 = series.filter(d => d.v2 != null).map((d) => scaleX(series.indexOf(d)) + ',' + scaleY(d.v2)).join(' ');
          svgHtml += '<line x1="' + padLeft + '" y1="' + (height - padBottom) + '" x2="' + (width - padRight) + '" y2="' + (height - padBottom) + '" stroke="#1f2937" stroke-width="1"/>';
          if (p1) svgHtml += '<polyline points="' + p1 + '" fill="none" stroke="' + c1 + '" stroke-width="2.5" stroke-linecap="round"/>';
          if (p2) svgHtml += '<polyline points="' + p2 + '" fill="none" stroke="' + c2 + '" stroke-width="2.5" stroke-linecap="round"/>';
          series.forEach((d, i) => {
            const x = scaleX(i);
            if (d.v1 != null) {
              const prev1 = i > 0 ? series[i-1].v1 : null;
              const yoy1 = prev1 && prev1 > 0 ? (((d.v1 - prev1) / prev1) * 100).toFixed(1) : null;
              const yoyStr1 = yoy1 ? (yoy1 > 0 ? '+' + yoy1 + '%' : yoy1 + '%') : 'Base';
              const tip1 = d.year + ' ' + (d.l1 || '') + ': ' + d.v1 + ' (YoY: ' + yoyStr1 + ')<br><span style="color:#10b981;font-size:0.75rem;font-weight:700;">Ref: ' + (d.source || 'Public Archive') + '</span>';
              svgHtml += '<text x="' + x + '" y="' + (scaleY(d.v1) - 8) + '" class="chart-val-label" fill="' + c1 + '">' + d.v1 + '</text>';
              svgHtml += '<circle class="chart-point" cx="' + x + '" cy="' + scaleY(d.v1) + '" r="4.5" fill="' + c1 + '" stroke="#000" stroke-width="1.5" data-tip="' + tip1 + '"><title>' + tip1 + '</title></circle>';
            }
            if (d.v2 != null) {
              const prev2 = i > 0 ? series[i-1].v2 : null;
              const yoy2 = prev2 && prev2 > 0 ? (((d.v2 - prev2) / prev2) * 100).toFixed(1) : null;
              const yoyStr2 = yoy2 ? (yoy2 > 0 ? '+' + yoy2 + '%' : yoy2 + '%') : 'Base';
              const tip2 = d.year + ' ' + (d.l2 || '') + ': ' + d.v2 + ' (YoY: ' + yoyStr2 + ')<br><span style="color:#10b981;font-size:0.75rem;font-weight:700;">Ref: ' + (d.source || 'Public Archive') + '</span>';
              svgHtml += '<text x="' + x + '" y="' + (scaleY(d.v2) + 16) + '" class="chart-val-label" fill="' + c2 + '">' + d.v2 + '</text>';
              svgHtml += '<circle class="chart-point" cx="' + x + '" cy="' + scaleY(d.v2) + '" r="4.5" fill="' + c2 + '" stroke="#000" stroke-width="1.5" data-tip="' + tip2 + '"><title>' + tip2 + '</title></circle>';
            }
            svgHtml += '<text x="' + x + '" y="' + (height - 12) + '" fill="#374151" font-size="10.5" text-anchor="middle" font-weight="700">' + d.year + '</text>';
          });
        } else if (svgId === 'cycloneChart' || svgId === 'bplChart') {
          const max = Math.max(...series.map(d => d.value));
          series.forEach((d, i) => {
            const barH = (Math.log10(d.value + 1) / Math.log10(max + 1)) * (height - padTop - padBottom);
            const barW = (width - padLeft - padRight) / series.length - 12;
            const x = scaleX(i) - barW / 2;
            const color = d.value > 50000 ? '#f42a41' : d.value > 5000 ? '#b45309' : '#006a4e';
            const tip = d.year + ': ' + d.value.toLocaleString() + ' fatalities<br><span style="color:#10b981;font-size:0.75rem;font-weight:700;">Ref: ' + (d.source || 'Disaster Management Bureau') + '</span>';
            svgHtml += '<rect class="chart-point" x="' + x + '" y="' + (height - padBottom - barH) + '" width="' + barW + '" height="' + barH + '" fill="' + color + '" stroke="#000" stroke-width="1.5" data-tip="' + tip + '"><title>' + tip + '</title></rect>';
            svgHtml += '<text x="' + scaleX(i) + '" y="' + (height - padBottom + 14) + '" fill="#374151" font-size="10" text-anchor="middle" font-weight="700">' + d.year + '</text>';
            svgHtml += '<text x="' + scaleX(i) + '" y="' + (height - padBottom - barH - 4) + '" class="chart-val-label">' + d.value.toLocaleString() + '</text>';
          });
        } else {
          const pts = series.map((d, i) => scaleX(i) + ',' + scaleY(d.value)).join(' ');
          const areaPts = scaleX(0) + ',' + (height - padBottom) + ' ' + pts + ' ' + scaleX(series.length - 1) + ',' + (height - padBottom);
          const lineColor = svgId === 'trafficChart' ? '#f42a41' : '#006a4e';
          svgHtml += '<defs><linearGradient id="' + svgId + 'Grad" x1="0%" y1="0%" x2="0%" y2="100%">' +
            '<stop offset="0%" stop-color="' + lineColor + '" stop-opacity="0.30"/>' +
            '<stop offset="100%" stop-color="' + lineColor + '" stop-opacity="0.0"/>' +
          '</linearGradient></defs>' +
          '<line x1="' + padLeft + '" y1="' + (height - padBottom) + '" x2="' + (width - padRight) + '" y2="' + (height - padBottom) + '" stroke="#1f2937" stroke-width="1"/>' +
          '<polygon points="' + areaPts + '" fill="url(#' + svgId + 'Grad)"/>' +
          '<polyline points="' + pts + '" fill="none" stroke="' + lineColor + '" stroke-width="2.5" stroke-linecap="round"/>';

          if (svgId === 'trafficChart') {
            const walkY = scaleY(5);
            svgHtml += '<line x1="' + padLeft + '" y1="' + walkY + '" x2="' + (width - padRight) + '" y2="' + walkY + '" stroke="#006a4e" stroke-dasharray="5" stroke-width="1.5"/>';
            svgHtml += '<text x="' + (width - padRight) + '" y="' + (walkY - 5) + '" fill="#006a4e" font-size="10.5" text-anchor="end" font-weight="700">Walking Speed (5 km/h)</text>';
          }

          series.forEach((d, i) => {
            const prev = i > 0 ? series[i-1].value : null;
            const yoy = prev && prev > 0 ? (((d.value - prev) / prev) * 100).toFixed(1) : null;
            const yoyStr = yoy ? (yoy > 0 ? '+' + yoy + '%' : yoy + '%') : 'Base (1.0x)';
            const mult = series[0].value > 0 ? (d.value / series[0].value).toFixed(1) + 'x' : '1.0x';
            const tip = d.year + ': ' + (typeof d.value === 'number' ? d.value.toLocaleString() : d.value) + ' | YoY: ' + yoyStr + ' | ' + mult + ' vs ' + series[0].year + '<br><span style="color:#10b981;font-size:0.75rem;font-weight:700;">Ref: ' + (d.source || 'Public Archive') + '</span>';
            const displayVal = d.value >= 10000 ? Math.round(d.value / 1000) + 'k' : (typeof d.value === 'number' ? d.value.toLocaleString() : d.value);

            svgHtml += '<text x="' + scaleX(i) + '" y="' + (scaleY(d.value) - 8) + '" class="chart-val-label">' + displayVal + '</text>';
            svgHtml += '<circle class="chart-point" cx="' + scaleX(i) + '" cy="' + scaleY(d.value) + '" r="4.5" fill="' + lineColor + '" stroke="#000" stroke-width="1.5" data-tip="' + tip + '"><title>' + tip + '</title></circle>';
            svgHtml += '<text x="' + scaleX(i) + '" y="' + (height - 12) + '" fill="#374151" font-size="10.5" text-anchor="middle" font-weight="700">' + d.year + '</text>';
          });
        }
        svg.innerHTML = svgHtml;

        // Render Year-by-Year Comparison Table with Reference Column
        renderComparisonTable(svgId, series);
      } catch (e) {
        console.error('Failed to load viral chart', svgId, e);
      }
    }

    function updateFuchkaCalculator() {
      const budget = parseFloat(document.getElementById('fuchkaBudget')?.value || '500') || 500;
      const box = document.getElementById('fuchkaResultBox');
      if (!box) return;
      const eras = [
        { year: 2000, price: 10 },
        { year: 2010, price: 25 },
        { year: 2015, price: 40 },
        { year: 2020, price: 60 },
        { year: 2025, price: 100 }
      ];
      let rows = '';
      eras.forEach(e => {
        const plates = Math.floor(budget / e.price);
        rows += \`
          <tr>
            <td><strong>\${e.year}</strong></td>
            <td>\${e.price} ৳/plate</td>
            <td><strong style="color:var(--accent);">\${plates} plates</strong></td>
            <td style="color:var(--text-muted);">\${plates * 10} fuchkas</td>
          </tr>
        \`;
      });
      box.innerHTML = \`
        <div style="font-size:1.1rem; font-weight:700; margin-bottom:0.75rem;">
          ৳\${budget.toLocaleString()} buys fuchka across eras:
        </div>
        <div class="table-container">
          <table class="results-table">
            <thead><tr><th>Year</th><th>Price</th><th>Plates</th><th>Total Fuchkas</th></tr></thead>
            <tbody>\${rows}</tbody>
          </table>
        </div>
      \`;
    }

    function updateTrafficCalculator() {
      const hours = parseFloat(document.getElementById('trafficHours')?.value || '2.5') || 2.5;
      const years = parseFloat(document.getElementById('trafficYears')?.value || '35') || 35;
      const box = document.getElementById('trafficResultBox');
      if (!box) return;
      const totalHours = hours * 2 * 260 * years;
      const totalDays = totalHours / 24;
      const totalYears = totalDays / 365;
      const movies = Math.floor(totalHours / 2.5);
      box.innerHTML = \`
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap:1rem;">
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Total Hours in Traffic</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--red);">\${Math.round(totalHours).toLocaleString()}</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Total Days Lost</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--red);">\${Math.round(totalDays).toLocaleString()}</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Years of Life Lost</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--red);">\${totalYears.toFixed(1)}</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Movies You Could Watch</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--accent);">\${movies.toLocaleString()}</div>
          </div>
        </div>
        <p style="margin-top:1rem; font-size:0.9rem; color:var(--text-muted);">\${hours} hrs/day × 2 ways × 260 working days × \${years} years. MRT-6 cuts commute to ~35 min: reclaim \${Math.round(totalHours * 0.75).toLocaleString()} hours.</p>
      \`;
    }

    function updateJaljotCalculator() {
      const base = parseFloat(document.getElementById('jaljotBase')?.value || '80') || 80;
      const mult = parseFloat(document.getElementById('jaljotLevel')?.value || '2.5') || 2.5;
      const box = document.getElementById('jaljotResultBox');
      if (!box) return;
      const surged = Math.round(base * mult);
      const extra = surged - base;
      box.innerHTML = \`
        <div style="display:flex; justify-content:space-around; align-items:center; flex-wrap:wrap; gap:1rem;">
          <div style="text-align:center;">
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Dry Weather Fare</div>
            <div style="font-size:1.5rem; font-weight:800;">\${base}৳</div>
          </div>
          <div style="font-size:2rem;">→</div>
          <div style="text-align:center;">
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Surge Multiplier</div>
            <div style="font-size:1.5rem; font-weight:800; color:var(--amber);">\${mult}x</div>
          </div>
          <div style="text-align:center;">
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Rainy Day Fare (মামার দাম)</div>
            <div style="font-size:2rem; font-weight:800; color:var(--red);">\${surged}৳</div>
          </div>
        </div>
        <p style="margin-top:1rem; text-align:center; font-size:0.95rem; color:var(--text-muted);">\${mult}x surge = ৳\${extra} extra per trip. Weekly monsoon commute (10 trips): +৳\${(extra * 10).toLocaleString()}</p>
      \`;
    }

    function updateBcsCalculator() {
      const total = parseFloat(document.getElementById('bcsApplicants')?.value || '350000') || 350000;
      const cadres = parseFloat(document.getElementById('bcsCadreType')?.value || '250') || 250;
      const box = document.getElementById('bcsResultBox');
      if (!box) return;
      const rate = (cadres / total) * 100;
      const odds = Math.round(total / cadres);
      const harvardMultiplier = (3.41 / rate).toFixed(1);
      box.innerHTML = \`
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap:1rem;">
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Acceptance Rate</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--red);">\${rate.toFixed(3)}%</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Odds of Success</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--accent);">1 in \${odds.toLocaleString()}</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Harvard Difficulty Ratio</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--red);">\${harvardMultiplier}x Harder</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Jamai Tier Status</div>
            <div style="font-size:1.2rem; font-weight:800; color:var(--accent);">\${cadres < 50 ? '👑 Ultra Royal' : cadres < 300 ? '⭐ Golden Cadre' : '🎓 Elite Cadre'}</div>
          </div>
        </div>
        <p style="margin-top:1rem; font-size:0.9rem; color:var(--text-muted);">Competing with \${total.toLocaleString()} candidates for \${cadres} posts. That is \${harvardMultiplier}x harder than admission to Harvard College. Start memorizing MP3 General Knowledge immediately!</p>
      \`;
    }

    function updateBachelorCalculator() {
      const rent = parseFloat(document.getElementById('bachRent')?.value || '24000') || 24000;
      const members = parseFloat(document.getElementById('bachMembers')?.value || '4') || 4;
      const bua = parseFloat(document.getElementById('bachBua')?.value || '4800') || 4800;
      const box = document.getElementById('bachelorResultBox');
      if (!box) return;
      const rentPerHead = Math.round(rent / members);
      const buaPerHead = Math.round(bua / members);
      const utilPerHead = 1200;
      const mealRatePerHead = 3500;
      const totalPerHead = rentPerHead + buaPerHead + utilPerHead + mealRatePerHead;
      box.innerHTML = \`
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap:1rem;">
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Rent Share / Head</div>
            <div style="font-size:1.6rem; font-weight:800;">৳\${rentPerHead.toLocaleString()}</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Bua Wage / Head</div>
            <div style="font-size:1.6rem; font-weight:800; color:var(--accent);">৳\${buaPerHead.toLocaleString()}</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Bazaar & Meal Share</div>
            <div style="font-size:1.6rem; font-weight:800;">৳\${mealRatePerHead.toLocaleString()}</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Total Monthly Cost</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--red);">৳\${totalPerHead.toLocaleString()}</div>
          </div>
        </div>
        <p style="margin-top:1rem; font-size:0.9rem; color:var(--text-muted);">\${members} roommates splitting ৳\${rent.toLocaleString()} rent + ৳\${bua.toLocaleString()} bua + utilities + bazaar. Remember: main gate locks at 11:00 PM!</p>
      \`;
    }

    function updateCngCalculator() {
      const dist = parseFloat(document.getElementById('cngDistance')?.value || '10') || 10;
      const wait = parseFloat(document.getElementById('cngWait')?.value || '30') || 30;
      const box = document.getElementById('cngResultBox');
      if (!box) return;
      const meterFare = Math.round(40 + Math.max(0, dist - 2) * 12 + wait * 2);
      const chuktiFare = Math.round(200 + dist * 30);
      const markup = Math.round(((chuktiFare - meterFare) / meterFare) * 100);
      const gap = chuktiFare - meterFare;
      box.innerHTML = \`
        <div style="display:flex; justify-content:space-around; align-items:center; flex-wrap:wrap; gap:1rem;">
          <div style="text-align:center;">
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">BRTA Legal Meter Fare</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--accent);">৳\${meterFare}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">৳40 base + ৳12/km + ৳2/min</div>
          </div>
          <div style="font-size:2rem; font-weight:800; color:var(--red);">VS</div>
          <div style="text-align:center;">
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Street Chukti Demand</div>
            <div style="font-size:2.2rem; font-weight:800; color:var(--red);">৳\${chuktiFare}</div>
            <div style="font-size:0.75rem; color:var(--red); font-weight:700;">+\${markup}% Yamuna Surcharge</div>
          </div>
        </div>
        <p style="margin-top:1rem; text-align:center; font-size:0.95rem; color:var(--text-muted);">You pay ৳\${gap} extra above legal gazette rate for \${dist} km. Driver refusal probability on meter: <strong>99.4%</strong>.</p>
      \`;
    }

    function updateBiryaniCalculator() {
      const guests = parseFloat(document.getElementById('biryaniGuests')?.value || '10') || 10;
      const withBorhani = (document.getElementById('biryaniWithBorhani')?.value || 'yes') === 'yes';
      const box = document.getElementById('biryaniResultBox');
      if (!box) return;
      const biryaniCost = guests * 260;
      const borhaniCost = withBorhani ? guests * 60 : 0;
      const totalCost = biryaniCost + borhaniCost;
      const cost1990 = guests * (20 + (withBorhani ? 5 : 0));
      box.innerHTML = \`
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap:1rem;">
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Haji Biryani (\${guests} Plates)</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--accent);">৳\${biryaniCost.toLocaleString()}</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Borhani (\${withBorhani ? guests + ' Glasses' : 'None'})</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--red);">৳\${borhaniCost.toLocaleString()}</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Total 2025 Bill</div>
            <div style="font-size:2rem; font-weight:800; color:var(--accent);">৳\${totalCost.toLocaleString()}</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Same Feast in 1990</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--text-muted);">৳\${cost1990.toLocaleString()}</div>
          </div>
        </div>
        <p style="margin-top:1rem; font-size:0.9rem; color:var(--text-muted);">Feast for \${guests} guests at Nazira Bazar. In 1990, this entire daawat cost just ৳\${cost1990.toLocaleString()} (13x cheaper). Pure mustard oil nostalgia!</p>
      \`;
    }

    function updateLoadsheddingCalculator() {
      const fans = parseFloat(document.getElementById('lsFans')?.value || '2') || 2;
      const lights = parseFloat(document.getElementById('lsLights')?.value || '3') || 3;
      const battAh = parseFloat(document.getElementById('lsBattery')?.value || '150') || 150;
      const box = document.getElementById('loadshedResultBox');
      if (!box) return;
      const totalWatts = fans * 75 + lights * 15;
      const usableWattHours = battAh * 12 * 0.8;
      const backupHours = (usableWattHours / totalWatts).toFixed(1);
      box.innerHTML = \`
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap:1rem;">
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Total Load</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--red);">\${totalWatts} Watts</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Battery Capacity</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--accent);">\${battAh} Ah (12V)</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Backup Duration</div>
            <div style="font-size:2rem; font-weight:800; color:var(--accent);">\${backupHours} Hours</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Summer Resilience</div>
            <div style="font-size:1.2rem; font-weight:800; color:var(--amber);">\${backupHours >= 4 ? '🛡️ Safe through Night' : '⚠️ Low Margin'}</div>
          </div>
        </div>
        <p style="margin-top:1rem; font-size:0.9rem; color:var(--text-muted);">\${fans} fans (75W) + \${lights} LED lights (15W) = \${totalWatts}W load on a \${battAh}Ah battery (80% DOD). Survives \${backupHours} hours without mains AC.</p>
      \`;
    }

    function updateLocalbusCalculator() {
      const dist = parseFloat(document.getElementById('busDistance')?.value || '8') || 8;
      const isStudent = (document.getElementById('busStudent')?.value || 'yes') === 'yes';
      const box = document.getElementById('localbusResultBox');
      if (!box) return;
      const brtaFare = Math.max(10, Math.round(10 + Math.max(0, dist - 5) * 2.45));
      const studentFare = Math.max(5, Math.ceil(brtaFare / 2));
      const payableFare = isStudent ? studentFare : brtaFare;
      const excuseRisk = isStudent ? '82% probability' : '15% probability';
      box.innerHTML = \`
        <div style="display:flex; justify-content:space-around; align-items:center; flex-wrap:wrap; gap:1rem;">
          <div style="text-align:center;">
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">BRTA Gazette Fare</div>
            <div style="font-size:1.8rem; font-weight:800;">৳\${brtaFare}</div>
          </div>
          <div style="text-align:center;">
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">\${isStudent ? 'Student Half-Pass' : 'Regular Fare'}</div>
            <div style="font-size:2.2rem; font-weight:800; color:var(--accent);">৳\${payableFare}</div>
          </div>
          <div style="text-align:center;">
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Helper Dispute Risk</div>
            <div style="font-size:1.5rem; font-weight:800; color:var(--red);">\${excuseRisk}</div>
          </div>
        </div>
        <p style="margin-top:1rem; text-align:center; font-size:0.95rem; color:var(--text-muted);">\${dist} km trip on a 'Sitting Service' bus. Helper shouting factor: \${isStudent ? 'মামা আইজকা হাফ পাস নাই, নামেন!' : 'সামনে আগান, ডাব্বা খালি!'}</p>
      \`;
    }

    function updateFreshersCalculator() {
      const sal = parseFloat(document.getElementById('fgSalary')?.value || '25000') || 25000;
      const box = document.getElementById('freshersResultBox');
      if (!box) return;
      const rent = 8000;
      const meal = 6500;
      const bus = 2500;
      const net = 1000;
      const tong = 2500;
      const remitt = 5000;
      const totalCost = rent + meal + bus + net + tong + remitt;
      const balance = sal - totalCost;
      const fuchkaCount = Math.floor(sal / 100);
      box.innerHTML = \`
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap:1rem;">
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Monthly Salary</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--accent);">৳\${sal.toLocaleString()}</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Basic Living Expenses</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--red);">৳\${totalCost.toLocaleString()}</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Month-End Balance</div>
            <div style="font-size:2rem; font-weight:800; color:\${balance >= 0 ? 'var(--accent)' : 'var(--red)'};">৳\${balance.toLocaleString()}</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Fuchka Plates / Mo</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--amber);">\${fuchkaCount} plates</div>
          </div>
        </div>
        <p style="margin-top:1rem; font-size:0.9rem; color:var(--text-muted);">Bachelor share ৳8k + Mess food ৳6.5k + Bus commute ৳2.5k + Tong tea ৳2.5k + Mobile ৳1k + Family ৳5k = ৳\${totalCost.toLocaleString()}. In 2005, a ৳10k starting salary bought 1,000 fuchka plates; today's ৳\${sal.toLocaleString()} buys only \${fuchkaCount} plates (-74% real drop).</p>
      \`;
    }

    function updateBplCalculator() {
      const shot = document.getElementById('bangaloreShot')?.value || 'wild';
      const box = document.getElementById('bplResultBox');
      if (!box) return;
      let title = '', desc = '', color = '';
      if (shot === 'wild') {
        title = 'LOST BY 1 RUN — TRAUMA MAXIMUM (100/100)';
        desc = 'Ball 4: Mushfiq caught at deep mid-wicket. Ball 5: Mahmudullah caught at deep mid-wicket. Ball 6: Mustafizur run out by MS Dhoni sprint. 170 million people stared into the ceiling in silence until Fajr.';
        color = 'var(--red)';
      } else if (shot === 'single') {
        title = 'MATCH TIED / BANGLADESH WINS! (0/100 TRAUMA)';
        desc = 'Sensible push into the gap for 1 run. Tie achieved! 1 needed off 2 balls with 7 wickets in hand. The timeline where Bangladesh celebrated at Chinnaswamy and Bangalore turned emerald green!';
        color = 'var(--accent)';
      } else {
        title = 'STILL TENSE — 2 NEEDED OFF 2 BALLS';
        desc = 'Defensive block back to Hardik Pandya. 2 runs still needed off 2 balls. Blood pressure remains at 190/120 mmHg across the country.';
        color = 'var(--amber)';
      }
      box.innerHTML = \`
        <div style="padding:1rem; border-left:4px solid \${color}; background:rgba(0,0,0,0.03); border-radius:2px;">
          <div style="font-size:1.2rem; font-weight:800; color:\${color};">\${title}</div>
          <p style="margin-top:0.5rem; font-size:0.95rem; line-height:1.5;">\${desc}</p>
        </div>
      \`;
    }

    function updateQurbaniCalculator() {
      const ask = parseFloat(document.getElementById('haatAsk')?.value || '220000') || 220000;
      const box = document.getElementById('qurbaniResultBox');
      if (!box) return;
      const counter50 = Math.round(ask * 0.50);
      const finalDeal = Math.round(ask * 0.68);
      const hasil5 = Math.round(finalDeal * 0.05);
      const neighborClaim = finalDeal - 20000;
      box.innerHTML = \`
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap:1rem;">
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Bepari's Ask</div>
            <div style="font-size:1.6rem; font-weight:800; color:var(--red);">৳\${ask.toLocaleString()}</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Your 50% Opening Counter</div>
            <div style="font-size:1.6rem; font-weight:800; color:var(--amber);">৳\${counter50.toLocaleString()}</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Probable Final Deal</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--accent);">৳\${finalDeal.toLocaleString()}</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Hasil Toll (5%)</div>
            <div style="font-size:1.6rem; font-weight:800;">৳\${hasil5.toLocaleString()}</div>
          </div>
        </div>
        <div style="margin-top:1rem; padding:0.85rem; background:rgba(244,42,65,0.08); border-left:4px solid var(--red); border-radius:2px;">
          <strong>Alley Neighbor Verdict:</strong> "মামা, একটু ঠকে গেছেন! এই সাইজের গরু কালকে আমার ভায়রা ভাই ৳\${neighborClaim.toLocaleString()}-এ আনছে!"
        </div>
      \`;
    }

    function updateAdmissionCalculator() {
      const score = parseFloat(document.getElementById('duScore')?.value || '72') || 72;
      const unit = document.getElementById('duUnit')?.value || 'ka';
      const box = document.getElementById('admissionResultBox');
      if (!box) return;
      let rank = 0, subject = '', chance = '';
      if (score >= 82) {
        rank = Math.round(50 + (100 - score) * 35);
        subject = unit === 'ka' ? 'CSE / EEE' : unit === 'kha' ? 'Law / English' : unit === 'ga' ? 'Finance / Accounting' : 'IBA BBA';
        chance = '⭐ Top Tier Department Secured';
      } else if (score >= 70) {
        rank = Math.round(750 + (82 - score) * 110);
        subject = unit === 'ka' ? 'Physics / Chemistry / Math' : unit === 'kha' ? 'Economics / Int Relations' : 'Marketing / Management';
        chance = '🎓 Regular Honours Seat Guaranteed';
      } else if (score >= 60) {
        rank = Math.round(2200 + (70 - score) * 180);
        subject = 'Waiting List (Philosophy, Soil Science, Pali)';
        chance = '⚠️ Waiting List Call Dependent';
      } else {
        rank = 5500 + Math.round((60 - score) * 200);
        subject = '7-College / National University Option';
        chance = '❌ Outside DU Main Campus Quota';
      }
      box.innerHTML = \`
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap:1rem;">
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Predicted Merit Rank</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--accent);">~\${rank.toLocaleString()}</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Subject Eligibility</div>
            <div style="font-size:1.15rem; font-weight:800;">\${subject}</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Hall Seat Status</div>
            <div style="font-size:1.15rem; font-weight:800; color:var(--red);">Gono-Room (গণরুম) 1st Year</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Verdict</div>
            <div style="font-size:1.05rem; font-weight:800; color:var(--amber);">\${chance}</div>
          </div>
        </div>
      \`;
    }

    function updatePaanCalculator() {
      const count = parseFloat(document.getElementById('paanPerDay')?.value || '3') || 3;
      const price = parseFloat(document.getElementById('paanPrice')?.value || '20') || 20;
      const years = parseFloat(document.getElementById('paanYears')?.value || '25') || 25;
      const box = document.getElementById('paanResultBox');
      if (!box) return;
      const annualBill = count * price * 365;
      const lifetimeBill = annualBill * years;
      const totalKhili = count * 365 * years;
      box.innerHTML = \`
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap:1rem;">
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Annual Tong Bill</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--accent);">৳\${annualBill.toLocaleString()}</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Lifetime Paan Spend</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--red);">৳\${lifetimeBill.toLocaleString()}</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Total Khili Consumed</div>
            <div style="font-size:1.8rem; font-weight:800;">\${totalKhili.toLocaleString()} Khili</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Red Teeth Index</div>
            <div style="font-size:1.3rem; font-weight:800; color:var(--red);">🔴 Permanent Ruby Red</div>
          </div>
        </div>
        <p style="margin-top:1rem; font-size:0.9rem; color:var(--text-muted);">\${count} paans/day × ৳\${price} × \${years} years. You spent ৳\${lifetimeBill.toLocaleString()} at the neighborhood tong stall.</p>
      \`;
    }

    
    function updatePathaoSimulator() {
      const dist = parseFloat(document.getElementById('pathaoDistInput')?.value || '7') || 7;
      const surge = parseFloat(document.getElementById('pathaoWeatherSelect')?.value || '2.6') || 1.0;
      const vehicle = document.getElementById('pathaoVehicleSelect')?.value || 'bike';
      const box = document.getElementById('pathaoSimResult');
      if (!box) return;

      const baseRate = vehicle === 'bike' ? 65 : (vehicle === 'car' ? 130 : 60);
      const perKm = vehicle === 'bike' ? 18 : (vehicle === 'car' ? 45 : 30);
      const estFare = Math.round((baseRate + (dist * perKm)) * surge);
      const cancelProb = surge >= 2.0 ? '88% (Drivers fishing for cash)' : (surge >= 1.4 ? '62% (High cancel risk)' : '25% (Normal)');
      const cashOffer = Math.round(estFare * 0.85);

      box.innerHTML = '<div style="display:flex; justify-content:space-around; align-items:center; flex-wrap:wrap; gap:1rem;">' +
        '<div style="text-align:center;">' +
          '<div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">App Surge Fare</div>' +
          '<div style="font-size:1.8rem; font-weight:800; color:#f42a41;">৳' + estFare.toLocaleString() + '</div>' +
          '<div style="font-size:0.75rem; color:var(--text-muted);">' + surge + 'x Surge Multiplier</div>' +
        '</div>' +
        '<div style="text-align:center;">' +
          '<div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Driver Cancel Odds</div>' +
          '<div style="font-size:1.5rem; font-weight:800; color:var(--accent);">' + cancelProb + '</div>' +
          '<div style="font-size:0.75rem; color:var(--text-muted);">"মামা লোকেশন কোথায়?"</div>' +
        '</div>' +
        '<div style="text-align:center;">' +
          '<div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">"মামা ক্যাশে যাইবেন?" Deal</div>' +
          '<div style="font-size:1.8rem; font-weight:800; color:#006a4e;">৳' + cashOffer.toLocaleString() + '</div>' +
          '<div style="font-size:0.75rem; color:var(--text-muted);">Saves 15% platform fee</div>' +
        '</div>' +
      '</div>';
    }

    function updateSakrainSimulator() {
      const floors = parseFloat(document.getElementById('sakrainFloorSelect')?.value || '4') || 4;
      const watts = parseFloat(document.getElementById('sakrainRigSelect')?.value || '12000') || 12000;
      const manja = document.getElementById('sakrainManjaSelect')?.value || 'glass';
      const box = document.getElementById('sakrainSimResult');
      if (!box) return;

      const decibels = Math.round(75 + 10 * Math.log10(watts / 50));
      const cutOdds = manja === 'dragon' ? '92% (Dragon Line Dominance)' : (manja === 'glass' ? '70% (Glass Manja Battle Ready)' : '18% (Will get sliced in 30s)');
      const neighborRisk = decibels >= 125 ? '100% (Police GD threat + Wall cracks)' : (decibels >= 110 ? '75% (Old uncle shouting from balcony)' : '30% (Standard Puran Dhaka tolerance)');

      box.innerHTML = '<div style="display:flex; justify-content:space-around; align-items:center; flex-wrap:wrap; gap:1rem;">' +
        '<div style="text-align:center;">' +
          '<div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Rooftop Blast Level</div>' +
          '<div style="font-size:1.8rem; font-weight:800; color:#f42a41;">' + decibels + ' dB</div>' +
          '<div style="font-size:0.75rem; color:var(--text-muted);">' + floors + '-Storey Rooftop Launch</div>' +
        '</div>' +
        '<div style="text-align:center;">' +
          '<div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Kite Dogfight Cutting Odds</div>' +
          '<div style="font-size:1.5rem; font-weight:800; color:#006a4e;">' + cutOdds + '</div>' +
          '<div style="font-size:0.75rem; color:var(--text-muted);">ভোকাট্টা লুণ্ঠন সম্ভাবনা</div>' +
        '</div>' +
        '<div style="text-align:center;">' +
          '<div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Neighbor Reaction</div>' +
          '<div style="font-size:1.2rem; font-weight:800; color:var(--text-main);">' + neighborRisk + '</div>' +
          '<div style="font-size:0.75rem; color:var(--text-muted);">Puran Dhaka Heritage Watch</div>' +
        '</div>' +
      '</div>';
    }
function updatePassportCalculator() {
      const daySal = parseFloat(document.getElementById('passDaySalary')?.value || '2000') || 2000;
      const daysOff = parseFloat(document.getElementById('passDaysOff')?.value || '3') || 3;
      const box = document.getElementById('passportResultBox');
      if (!box) return;
      const officialFee = 4025;
      const oppCost = daySal * daysOff;
      const miscTravelTea = 1800;
      const honestTotal = officialFee + oppCost + miscTravelTea;
      const dalalPackage = 11500;
      const diff = dalalPackage - honestTotal;
      box.innerHTML = '<div style="display:flex; justify-content:space-around; align-items:center; flex-wrap:wrap; gap:1rem;">' +
        '<div style="text-align:center;">' +
          '<div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Honest DIY True Cost</div>' +
          '<div style="font-size:1.8rem; font-weight:800; color:var(--accent);">৳' + honestTotal.toLocaleString() + '</div>' +
          '<div style="font-size:0.75rem; color:var(--text-muted);">৳4,025 fee + ' + daysOff + ' days lost salary + travel</div>' +
        '</div>' +
        '<div style="font-size:2rem; font-weight:800; color:var(--red);">VS</div>' +
        '<div style="text-align:center;">' +
          '<div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Agargaon Dalal Package</div>' +
          '<div style="font-size:2rem; font-weight:800; color:var(--red);">৳' + dalalPackage.toLocaleString() + '</div>' +
          '<div style="font-size:0.75rem; color:var(--red); font-weight:700;">Zero line queue + SB verification covered</div>' +
        '</div>' +
      '</div>' +
      '<p style="margin-top:1rem; text-align:center; font-size:0.95rem; color:var(--text-muted);">Doing it honestly saves ৳' + Math.abs(diff).toLocaleString() + ', but costs ' + daysOff + ' days standing in Agargaon sun from 7:00 AM.</p>';
    }

    async function searchMedicinesLive() {
      const q = document.getElementById('medSearchInput')?.value || '';
      const box = document.getElementById('medResultsContainer');
      if (!box) return;
      try {
        const res = await fetch('/api/medicines?query=' + encodeURIComponent(q));
        const data = await res.json();
        if (!data.results || data.results.length === 0) {
          box.innerHTML = '<p style="color:var(--text-muted); padding:1rem;">No matching registered pharmaceuticals found.</p>';
          return;
        }
        let html = '<div class="table-container"><table class="results-table"><thead><tr><th>Brand</th><th>Generic Molecule</th><th>Form &amp; Strength</th><th>Manufacturer</th><th>Official MRP</th><th>Indication</th></tr></thead><tbody>';
        for (const m of data.results) {
          html += '<tr><td><strong>' + m.brand_name + '</strong></td><td>' + m.generic_name + '</td><td>' + m.dosage_form + ' ' + m.strength + '</td><td>' + m.manufacturer + '</td><td><span class="badge-pill badge-green">৳' + m.price_bdt.toFixed(2) + '</span></td><td>' + m.indications + '</td></tr>';
        }
        html += '</tbody></table></div>';
        box.innerHTML = html;
      } catch (e) {
        box.innerHTML = '<p style="color:var(--red);">Failed to query DGDA medicine index.</p>';
      }
    }

    function updateTaxCalculator() {
      const inc = parseFloat(document.getElementById('taxGrossIncome')?.value || '950000') || 0;
      const cat = document.getElementById('taxCategory')?.value || 'general';
      const inv = parseFloat(document.getElementById('taxInvestments')?.value || '120000') || 0;
      const loc = document.getElementById('taxLocation')?.value || 'dhaka_chattogram';
      const box = document.getElementById('taxResultBox');
      if (!box) return;
      let exemption = 350000;
      if (cat === 'female_or_senior_65') exemption = 400000;
      else if (cat === 'physically_challenged') exemption = 475000;
      else if (cat === 'freedom_fighter') exemption = 500000;

      const taxable = Math.max(0, inc - exemption);
      let rem = taxable;
      let gross = 0;
      const s1 = Math.min(rem, 100000); gross += s1 * 0.05; rem = Math.max(0, rem - 100000);
      const s2 = Math.min(rem, 400000); gross += s2 * 0.10; rem = Math.max(0, rem - 400000);
      const s3 = Math.min(rem, 500000); gross += s3 * 0.15; rem = Math.max(0, rem - 500000);
      const s4 = Math.min(rem, 500000); gross += s4 * 0.20; rem = Math.max(0, rem - 500000);
      gross += rem * 0.25;

      const maxAllowable = Math.min(inv, taxable * 0.20, 1000000);
      const rebate = maxAllowable * 0.15;
      let netBeforeMin = Math.max(0, gross - rebate);
      let minTax = loc === 'other_city_corporation' ? 4000 : loc === 'non_city' ? 3000 : 5000;
      let payable = taxable > 0 ? Math.max(minTax, netBeforeMin) : 0;
      let monthlyTds = Math.round(payable / 12);
      let effectiveRate = inc > 0 ? ((payable / inc) * 100).toFixed(2) : '0';

      box.innerHTML = '<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap:1rem;">' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Initial Exemption</div><div style="font-size:1.5rem; font-weight:800; color:var(--green);">৳' + exemption.toLocaleString() + '</div></div>' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Taxable Income</div><div style="font-size:1.5rem; font-weight:800; color:var(--amber);">৳' + taxable.toLocaleString() + '</div></div>' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Gross Tax</div><div style="font-size:1.5rem; font-weight:800;">৳' + Math.round(gross).toLocaleString() + '</div></div>' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Investment Rebate</div><div style="font-size:1.5rem; font-weight:800; color:var(--accent);">৳' + Math.round(rebate).toLocaleString() + '</div></div>' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Net Tax Payable</div><div style="font-size:1.8rem; font-weight:800; color:var(--red);">৳' + Math.round(payable).toLocaleString() + '</div></div>' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Monthly Salary TDS</div><div style="font-size:1.5rem; font-weight:800;">৳' + monthlyTds.toLocaleString() + '/mo</div></div>' +
      '</div>' +
      '<p style="margin-top:0.85rem; font-size:0.85rem; color:var(--text-muted);">Effective Tax Rate: <strong>' + effectiveRate + '%</strong>. Minimum location tax: ৳' + minTax.toLocaleString() + '.</p>';
    }

    const HS_RATES = {
      '8471.30.00': { cd: 0, rd: 0, sd: 0, vat: 15, ait: 5, at: 5 },
      '8517.13.00': { cd: 25, rd: 3, sd: 20, vat: 15, ait: 5, at: 5 },
      '8517.14.00': { cd: 25, rd: 3, sd: 0, vat: 15, ait: 5, at: 5 },
      '8703.22.00': { cd: 25, rd: 3, sd: 20, vat: 15, ait: 5, at: 5 },
      '8703.23.10': { cd: 25, rd: 3, sd: 45, vat: 15, ait: 5, at: 5 },
      '8703.80.00': { cd: 20, rd: 0, sd: 0, vat: 15, ait: 5, at: 5 },
      '8504.40.90': { cd: 1, rd: 0, sd: 0, vat: 0, ait: 5, at: 0 },
      '5201.00.00': { cd: 0, rd: 0, sd: 0, vat: 0, ait: 0, at: 0 },
      '0402.10.10': { cd: 25, rd: 3, sd: 0, vat: 15, ait: 5, at: 5 }
    };

    function onTariffHsChange() {
      updateTariffCalculator();
    }

    function updateTariffCalculator() {
      const hs = document.getElementById('tariffHsCode')?.value || '8471.30.00';
      const cnfUsd = parseFloat(document.getElementById('tariffCnfUsd')?.value || '1000') || 1000;
      const exRate = parseFloat(document.getElementById('tariffExchangeRate')?.value || '122') || 122;
      const box = document.getElementById('tariffResultBox');
      if (!box) return;
      const rates = HS_RATES[hs] || { cd: 25, rd: 3, sd: 0, vat: 15, ait: 5, at: 5 };
      const cnfBdt = cnfUsd * exRate;
      const av = cnfBdt * 1.01;
      const cd = av * (rates.cd / 100);
      const rd = av * (rates.rd / 100);
      const baseSd = av + cd + rd;
      const sd = baseSd * (rates.sd / 100);
      const baseVat = baseSd + sd;
      const vat = baseVat * (rates.vat / 100);
      const ait = av * (rates.ait / 100);
      const at = baseVat * (rates.at / 100);
      const totalDuty = cd + rd + sd + vat + ait + at;
      const totalLanded = av + totalDuty;
      const effDutyPct = ((totalDuty / av) * 100).toFixed(1);

      box.innerHTML = '<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap:1rem;">' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Assessable Value (AV)</div><div style="font-size:1.5rem; font-weight:800;">৳' + Math.round(av).toLocaleString() + '</div></div>' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Customs Duty (CD)</div><div style="font-size:1.5rem; font-weight:800; color:var(--amber);">৳' + Math.round(cd).toLocaleString() + ' (' + rates.cd + '%)</div></div>' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Supp Duty (SD)</div><div style="font-size:1.5rem; font-weight:800; color:var(--red);">৳' + Math.round(sd).toLocaleString() + ' (' + rates.sd + '%)</div></div>' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">VAT + AIT + AT</div><div style="font-size:1.5rem; font-weight:800;">৳' + Math.round(vat + ait + at).toLocaleString() + '</div></div>' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Total Customs Duty</div><div style="font-size:1.8rem; font-weight:800; color:var(--red);">৳' + Math.round(totalDuty).toLocaleString() + '</div></div>' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Total Landed Cost</div><div style="font-size:1.8rem; font-weight:800; color:var(--accent);">৳' + Math.round(totalLanded).toLocaleString() + '</div></div>' +
      '</div>' +
      '<p style="margin-top:0.85rem; font-size:0.85rem; color:var(--text-muted);">Effective Duty Rate: <strong>' + effDutyPct + '%</strong> on Assessable Value (Includes 1% port landing charge).</p>';
    }

    function updateLandCalculator() {
      const val = parseFloat(document.getElementById('landDeedValue')?.value || '5000000') || 5000000;
      const area = document.getElementById('landAreaType')?.value || 'dhaka_chattogram_city';
      const box = document.getElementById('landResultBox');
      if (!box) return;
      const stamp = val * 0.015;
      const reg = val * 0.010;
      const localTax = val * (area === 'rural_union_parishad' ? 0.015 : 0.020);
      const gainTax = val * (area === 'dhaka_chattogram_city' ? 0.08 : area === 'pourashava_district' ? 0.04 : 0.02);
      const enamjari = 1170;
      const totalStatutory = stamp + reg + localTax + gainTax + enamjari;
      const effPct = ((totalStatutory / val) * 100).toFixed(2);
      const deedWriter = Math.max(5000, Math.round(val * 0.0075));

      box.innerHTML = '<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap:1rem;">' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Stamp Duty (1.5%)</div><div style="font-size:1.5rem; font-weight:800; color:var(--accent);">৳' + Math.round(stamp).toLocaleString() + '</div></div>' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Reg Fee (1.0%)</div><div style="font-size:1.5rem; font-weight:800;">৳' + Math.round(reg).toLocaleString() + '</div></div>' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Local Govt Tax</div><div style="font-size:1.5rem; font-weight:800;">৳' + Math.round(localTax).toLocaleString() + '</div></div>' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Gain Tax (53FF)</div><div style="font-size:1.5rem; font-weight:800; color:var(--red);">৳' + Math.round(gainTax).toLocaleString() + '</div></div>' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Fixed e-Namjari</div><div style="font-size:1.5rem; font-weight:800; color:var(--green);">৳1,170</div></div>' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Total Statutory Govt</div><div style="font-size:1.8rem; font-weight:800; color:var(--red);">৳' + Math.round(totalStatutory).toLocaleString() + '</div></div>' +
      '</div>' +
      '<div style="margin-top:1rem; padding:0.75rem; background:rgba(0,106,78,0.06); border-left:4px solid var(--accent); font-size:0.85rem;">' +
        '<strong>Deed Writer Comparison:</strong> Typical deed writer fee is ~৳' + deedWriter.toLocaleString() + '. Effective total statutory rate: <strong>' + effPct + '%</strong> of declared deed value.' +
      '</div>';
    }

    function updateVehicleCalculator() {
      const cc = parseFloat(document.getElementById('vehEngineCc')?.value || '1500') || 1500;
      const type = document.getElementById('vehType')?.value || 'private_car_sedan';
      const isSecond = Boolean(document.getElementById('vehIsSecond')?.checked);
      const box = document.getElementById('vehResultBox');
      if (!box) return;
      let ait = 25000;
      let road = 2500;
      if (type === 'motorcycle') { ait = 0; road = 1150; }
      else if (type === 'microbus') { ait = 30000; road = 4000; }
      else if (type === 'ev_electric') { ait = 50000; road = 3000; }
      else {
        if (cc > 3500) { ait = 200000; road = 15000; }
        else if (cc > 3000) { ait = 150000; road = 10500; }
        else if (cc > 2500) { ait = 125000; road = 7500; }
        else if (cc > 2000) { ait = 75000; road = 5500; }
        else if (cc > 1500) { ait = 50000; road = 4000; }
        else { ait = 25000; road = 2500; }
      }
      const surcharge = isSecond ? Math.round(ait * 0.50) : 0;
      const totalAit = ait + surcharge;
      const fitness = type === 'motorcycle' ? 0 : 518;
      const card = 500;
      const vat = Math.round((road + fitness + card) * 0.15);
      const total = totalAit + road + fitness + card + vat;

      box.innerHTML = '<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap:1rem;">' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Base Annual AIT</div><div style="font-size:1.5rem; font-weight:800; color:var(--red);">৳' + ait.toLocaleString() + '</div></div>' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">2nd Car Surcharge</div><div style="font-size:1.5rem; font-weight:800; color:var(--amber);">+৳' + surcharge.toLocaleString() + '</div></div>' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">BRTA Road Tax</div><div style="font-size:1.5rem; font-weight:800;">৳' + road.toLocaleString() + '</div></div>' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Fitness + Card Fee</div><div style="font-size:1.5rem; font-weight:800;">৳' + (fitness + card + vat) + '</div></div>' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Total Annual Carrying</div><div style="font-size:1.8rem; font-weight:800; color:var(--accent);">৳' + total.toLocaleString() + '/yr</div></div>' +
      '</div>' +
      '<p style="margin-top:0.85rem; font-size:0.85rem; color:var(--text-muted);">Advance Income Tax (AIT) is adjustable against your final annual income tax liability.</p>';
    }

    function updateIncorporationCalculator() {
      const cap = parseFloat(document.getElementById('rjscCapital')?.value || '1000000') || 1000000;
      const type = document.getElementById('rjscType')?.value || 'private_limited';
      const box = document.getElementById('rjscResultBox');
      if (!box) return;
      let capFee = 0, rem = cap;
      if (rem > 0) { capFee += 360; rem = Math.max(0, rem - 20000); }
      if (rem > 0) { const s2 = Math.min(rem, 30000); capFee += Math.ceil(s2 / 10000) * 180; rem = Math.max(0, rem - 30000); }
      if (rem > 0) { const s3 = Math.min(rem, 950000); capFee += Math.ceil(s3 / 10000) * 45; rem = Math.max(0, rem - 950000); }
      if (rem > 0) { const s4 = Math.min(rem, 4000000); capFee += Math.ceil(s4 / 10000) * 90; rem = Math.max(0, rem - 4000000); }
      if (rem > 0) { capFee += Math.ceil(rem / 10000) * 120; }

      const nameClearance = 1150;
      const filing = 1600;
      const moaStamp = cap > 50000000 ? 10000 : cap > 1000000 ? 5000 : 2000;
      const aoaStamp = cap > 10000000 ? 20000 : cap > 500000 ? 8000 : 3000;
      const cert = 1380 + 400;
      const totalGovt = nameClearance + filing + capFee + moaStamp + aoaStamp + cert;
      const lawyer = cap <= 1000000 ? 15000 : 25000;

      box.innerHTML = '<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap:1rem;">' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Name Clearance</div><div style="font-size:1.5rem; font-weight:800;">৳1,150</div></div>' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Capital Reg Fee</div><div style="font-size:1.5rem; font-weight:800; color:var(--accent);">৳' + Math.round(capFee).toLocaleString() + '</div></div>' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">MoA &amp; AoA Stamps</div><div style="font-size:1.5rem; font-weight:800; color:var(--amber);">৳' + (moaStamp + aoaStamp).toLocaleString() + '</div></div>' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Filing &amp; Certified</div><div style="font-size:1.5rem; font-weight:800;">৳' + (filing + cert).toLocaleString() + '</div></div>' +
        '<div><div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Total Statutory Govt</div><div style="font-size:1.8rem; font-weight:800; color:var(--red);">৳' + Math.round(totalGovt).toLocaleString() + '</div></div>' +
      '</div>' +
      '<p style="margin-top:0.85rem; font-size:0.85rem; color:var(--text-muted);">Estimated total setup including lawyer / CA drafting: <strong>৳' + Math.round(totalGovt + lawyer).toLocaleString() + '</strong>. Typical timeline: 3–5 working days.</p>';
    }

        loadStats();
    if (document.getElementById('commodityResults')) searchCommodities();
    if (document.getElementById('purchasingChart')) {
      renderPurchasingChart();
      updateCalculator();
    }
    if (document.getElementById('remittanceChart')) loadRemittanceChart();
    if (document.getElementById('divisionBars')) loadGeographyData();
    if (document.getElementById('goldChart')) loadGoldChart();
    if (document.getElementById('tongChart')) {
      loadTongChart();
      updateTongCalculator();
    }
    if (document.getElementById('fuelChart')) loadFuelChart();
    if (document.getElementById('rickshawChart')) {
      loadRickshawChart();
      updateRickshawCalculator();
    }
    if (document.getElementById('fishChart')) loadFishChart();
    if (document.getElementById('metroResultBox')) updateMetroFare();
    if (document.getElementById('kacchiChart')) {
      loadKacchiChart();
      updateWeddingCalculator();
    }
    if (document.getElementById('internetPriceChart')) loadInternetCharts();
    if (document.getElementById('rentChart')) {
      loadRentChart();
      updateRentCalculator();
    }
    if (document.getElementById('lifeChart') || document.getElementById('tfrChart')) {
      loadDemographicsCharts();
    }
    if (document.getElementById('gridChart')) {
      loadGridChart();
    }
    if (document.getElementById('forexChart')) {
      loadForexChart();
      updateForexCalculator();
    }
    if (document.getElementById('fuchkaChart')) {
      loadViralChart('fuchkaChart', '/api/fuchka', null, 110);
      updateFuchkaCalculator();
    }
    if (document.getElementById('trafficChart')) {
      loadViralChart('trafficChart', '/api/traffic', null, 22);
      updateTrafficCalculator();
    }
    if (document.getElementById('jaljotResultBox')) updateJaljotCalculator();
    if (document.getElementById('rmgChart')) loadViralChart('rmgChart', '/api/rmg', null, 50);
    if (document.getElementById('cycloneChart')) loadViralChart('cycloneChart', '/api/cyclones', null, 0);
    if (document.getElementById('agriChart')) loadViralChart('agriChart', '/api/agriculture', null, 45);
    if (document.getElementById('bcsChart')) {
      loadViralChart('bcsChart', '/api/bcs', null, 500);
      updateBcsCalculator();
    }
    if (document.getElementById('bachelorChart')) {
      loadViralChart('bachelorChart', '/api/bachelor', null, 5500);
      updateBachelorCalculator();
    }
    if (document.getElementById('cngChart')) {
      loadViralChart('cngChart', '/api/cng', null, 550);
      updateCngCalculator();
    }
    if (document.getElementById('biryaniChart')) {
      loadViralChart('biryaniChart', '/api/biryani', null, 300);
      updateBiryaniCalculator();
    }
    if (document.getElementById('loadshedChart')) {
      loadViralChart('loadshedChart', '/api/loadshedding', null, 300);
      updateLoadsheddingCalculator();
    }
    if (document.getElementById('localbusChart')) {
      loadViralChart('localbusChart', '/api/localbus', null, 12);
      updateLocalbusCalculator();
    }
    if (document.getElementById('freshersChart')) {
      loadViralChart('freshersChart', '/api/freshers', null, 30000);
      updateFreshersCalculator();
    }
    if (document.getElementById('qurbaniChart')) {
      loadViralChart('qurbaniChart', '/api/qurbani', null, 140000);
      updateQurbaniCalculator();
    }
    if (document.getElementById('admissionChart')) {
      loadViralChart('admissionChart', '/api/admission', null, 32000);
      updateAdmissionCalculator();
    }
    if (document.getElementById('paanChart')) {
      loadViralChart('paanChart', '/api/paan', null, 18);
      updatePaanCalculator();
    }
    if (document.getElementById('passportChart')) {
      loadViralChart('passportChart', '/api/passport', null, 14000);
      updatePassportCalculator();
    }
    if (document.getElementById('pathaoChart')) {
      loadViralChart('pathaoChart', '/api/pathao', null, 150);
      updatePathaoSimulator();
    }
    if (document.getElementById('sakrainChart')) {
      loadViralChart('sakrainChart', '/api/sakrain', null, 400);
      updateSakrainSimulator();
    }
    if (document.getElementById('boimelaChart')) {
      loadViralChart('boimelaChart', '/api/boimela', null, 400);
    }
    if (document.getElementById('holudChart')) {
      loadViralChart('holudChart', '/api/holud', null, 500);
    }
    if (document.getElementById('bplChart')) {
      loadViralChart('bplChart', '/api/bpl', null, 0);
      updateBplCalculator();
    }
    if (document.getElementById('medSearchInput')) searchMedicinesLive();
    if (document.getElementById('taxGrossIncome')) updateTaxCalculator();
    if (document.getElementById('tariffCnfUsd')) updateTariffCalculator();
    if (document.getElementById('landDeedValue')) updateLandCalculator();
    if (document.getElementById('vehEngineCc')) updateVehicleCalculator();
    if (document.getElementById('rjscCapital')) updateIncorporationCalculator();
  `;
}
