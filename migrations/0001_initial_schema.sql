-- 1. Macroeconomic and Inflation Time Series
CREATE TABLE IF NOT EXISTS macro_indicators (
    id TEXT PRIMARY KEY,
    series_id TEXT NOT NULL,
    frequency TEXT NOT NULL,
    period_year INTEGER NOT NULL,
    period_month INTEGER,
    value REAL NOT NULL,
    unit TEXT NOT NULL,
    source_agency TEXT NOT NULL,
    base_year TEXT,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_macro_series_period ON macro_indicators(series_id, period_year DESC, period_month DESC);

-- 2. Daily Commodity and Pricing Index
CREATE TABLE IF NOT EXISTS commodity_prices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    price_date DATE NOT NULL,
    market_name TEXT NOT NULL,
    district TEXT NOT NULL,
    commodity_en TEXT NOT NULL,
    commodity_bn TEXT NOT NULL,
    category TEXT NOT NULL,
    unit TEXT NOT NULL,
    wholesale_min REAL,
    wholesale_max REAL,
    retail_min REAL NOT NULL,
    retail_max REAL NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_commodity_date_name ON commodity_prices(price_date DESC, commodity_en);
CREATE INDEX IF NOT EXISTS idx_commodity_district ON commodity_prices(district, price_date DESC);

-- 3. Capital Markets & Equities (Dhaka Stock Exchange)
CREATE TABLE IF NOT EXISTS listed_companies (
    symbol TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    sector TEXT NOT NULL,
    category TEXT,
    is_shariah INTEGER DEFAULT 0,
    paid_up_capital_mn REAL
);

CREATE TABLE IF NOT EXISTS stock_quotes_daily (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    symbol TEXT NOT NULL REFERENCES listed_companies(symbol),
    trade_date DATE NOT NULL,
    open REAL NOT NULL,
    high REAL NOT NULL,
    low REAL NOT NULL,
    close REAL NOT NULL,
    volume INTEGER NOT NULL,
    value_mn REAL NOT NULL,
    UNIQUE(symbol, trade_date)
);
CREATE INDEX IF NOT EXISTS idx_stock_quotes_sym_date ON stock_quotes_daily(symbol, trade_date DESC);

CREATE TABLE IF NOT EXISTS market_indices_daily (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    index_name TEXT NOT NULL,
    trade_date DATE NOT NULL,
    index_value REAL NOT NULL,
    change_points REAL,
    change_percent REAL,
    total_turnover_bdt_crore REAL,
    UNIQUE(index_name, trade_date)
);
CREATE INDEX IF NOT EXISTS idx_market_indices_name_date ON market_indices_daily(index_name, trade_date DESC);

-- 4. Banks, Branches, and Routing Infrastructure
CREATE TABLE IF NOT EXISTS bank_branches (
    routing_number TEXT PRIMARY KEY,
    bank_code TEXT NOT NULL,
    bank_name TEXT NOT NULL,
    branch_name TEXT NOT NULL,
    district TEXT NOT NULL,
    payable INTEGER DEFAULT 1,
    swift_code TEXT,
    updated_at DATE NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_bank_district ON bank_branches(district, bank_name);
CREATE INDEX IF NOT EXISTS idx_bank_name ON bank_branches(bank_name);

-- 5. Administrative Geocodes & Geography
CREATE TABLE IF NOT EXISTS divisions (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    bn_name TEXT NOT NULL,
    lat REAL,
    long REAL
);

CREATE TABLE IF NOT EXISTS districts (
    id TEXT PRIMARY KEY,
    division_id TEXT NOT NULL REFERENCES divisions(id),
    name TEXT NOT NULL,
    bn_name TEXT NOT NULL,
    lat REAL,
    long REAL
);

CREATE TABLE IF NOT EXISTS upazilas (
    id TEXT PRIMARY KEY,
    district_id TEXT NOT NULL REFERENCES districts(id),
    name TEXT NOT NULL,
    bn_name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS postcodes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    division_id TEXT NOT NULL REFERENCES divisions(id),
    district_id TEXT NOT NULL REFERENCES districts(id),
    upazila TEXT NOT NULL,
    post_office TEXT NOT NULL,
    post_code TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_postcodes_code ON postcodes(post_code);
CREATE INDEX IF NOT EXISTS idx_postcodes_district ON postcodes(district_id);

-- 6. Laws of Bangladesh Index
CREATE TABLE IF NOT EXISTS legal_acts (
    id TEXT PRIMARY KEY,
    act_no TEXT NOT NULL,
    year INTEGER NOT NULL,
    title_en TEXT NOT NULL,
    title_bn TEXT,
    is_repealed INTEGER DEFAULT 0,
    sections_count INTEGER,
    source_url TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_legal_acts_year ON legal_acts(year DESC);
CREATE INDEX IF NOT EXISTS idx_legal_acts_title ON legal_acts(title_en);
