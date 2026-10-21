/**
 * National Board of Revenue (NBR) Customs Tariff & Import Duty Engine
 * Computes Assessable Value (AV), CD, RD, SD, VAT, AIT, AT according to
 * Bangladesh Customs Act and NBR Bangladesh Customs Tariff Schedule.
 */

export interface TariffInput {
  cnf_value_usd: number;
  hs_code?: string;
  exchange_rate_bdt?: number;
  cd_percent?: number;
  rd_percent?: number;
  sd_percent?: number;
  vat_percent?: number;
  ait_percent?: number;
  at_percent?: number;
}

export interface KnownHsCodeSchedule {
  hs_code: string;
  description: string;
  category: string;
  cd_percent: number;
  rd_percent: number;
  sd_percent: number;
  vat_percent: number;
  ait_percent: number;
  at_percent: number;
}

export const KNOWN_HS_SCHEDULES: Record<string, KnownHsCodeSchedule> = {
  '8471.30.00': {
    hs_code: '8471.30.00',
    description: 'Portable automatic data processing machines (Laptops, Notebooks)',
    category: 'Information Technology',
    cd_percent: 0,
    rd_percent: 0,
    sd_percent: 0,
    vat_percent: 15,
    ait_percent: 5,
    at_percent: 5
  },
  '8517.13.00': {
    hs_code: '8517.13.00',
    description: 'Smartphones (Complete Built-up Unit - CBU)',
    category: 'Telecommunications',
    cd_percent: 25,
    rd_percent: 3,
    sd_percent: 20,
    vat_percent: 15,
    ait_percent: 5,
    at_percent: 5
  },
  '8517.14.00': {
    hs_code: '8517.14.00',
    description: 'Basic Feature Phones (Complete Built-up Unit)',
    category: 'Telecommunications',
    cd_percent: 25,
    rd_percent: 3,
    sd_percent: 0,
    vat_percent: 15,
    ait_percent: 5,
    at_percent: 5
  },
  '8703.22.00': {
    hs_code: '8703.22.00',
    description: 'Motor Cars with cylinder capacity 1001cc to 1500cc (Petrol/Hybrid)',
    category: 'Vehicles',
    cd_percent: 25,
    rd_percent: 3,
    sd_percent: 20,
    vat_percent: 15,
    ait_percent: 5,
    at_percent: 5
  },
  '8703.23.10': {
    hs_code: '8703.23.10',
    description: 'Motor Cars with cylinder capacity 1501cc to 1600cc',
    category: 'Vehicles',
    cd_percent: 25,
    rd_percent: 3,
    sd_percent: 45,
    vat_percent: 15,
    ait_percent: 5,
    at_percent: 5
  },
  '8703.23.20': {
    hs_code: '8703.23.20',
    description: 'Motor Cars with cylinder capacity 1601cc to 2000cc',
    category: 'Vehicles',
    cd_percent: 25,
    rd_percent: 3,
    sd_percent: 100,
    vat_percent: 15,
    ait_percent: 5,
    at_percent: 5
  },
  '8703.80.00': {
    hs_code: '8703.80.00',
    description: 'Electric Vehicles (EV Cars powered solely by electric motor)',
    category: 'Vehicles',
    cd_percent: 20,
    rd_percent: 0,
    sd_percent: 0,
    vat_percent: 15,
    ait_percent: 5,
    at_percent: 5
  },
  '5201.00.00': {
    hs_code: '5201.00.00',
    description: 'Cotton, not carded or combed (Raw Cotton for Spinning Mills)',
    category: 'Textiles & RMG Raw Materials',
    cd_percent: 0,
    rd_percent: 0,
    sd_percent: 0,
    vat_percent: 0,
    ait_percent: 0,
    at_percent: 0
  },
  '8504.40.90': {
    hs_code: '8504.40.90',
    description: 'Solar Inverters and Renewable Clean Energy Hardware',
    category: 'Renewable Energy',
    cd_percent: 1,
    rd_percent: 0,
    sd_percent: 0,
    vat_percent: 0,
    ait_percent: 5,
    at_percent: 0
  },
  '0402.10.10': {
    hs_code: '0402.10.10',
    description: 'Milk powder in retail packs up to 2.5 kg',
    category: 'Food Commodities',
    cd_percent: 25,
    rd_percent: 3,
    sd_percent: 0,
    vat_percent: 15,
    ait_percent: 5,
    at_percent: 5
  },
  '1507.10.00': {
    hs_code: '1507.10.00',
    description: 'Crude Soybean Oil, whether or not degummed',
    category: 'Essential Edible Oil',
    cd_percent: 0,
    rd_percent: 0,
    sd_percent: 0,
    vat_percent: 5,
    ait_percent: 2,
    at_percent: 0
  }
};

export interface TariffCalculationResult {
  hs_code: string;
  description: string;
  category: string;
  cnf_value_usd: number;
  exchange_rate_bdt: number;
  cnf_value_bdt: number;
  landing_charge_bdt: number;
  assessable_value_bdt: number;
  duties: {
    customs_duty_cd: { rate_percent: number; amount_bdt: number };
    regulatory_duty_rd: { rate_percent: number; amount_bdt: number };
    supplementary_duty_sd: { rate_percent: number; amount_bdt: number; base_bdt: number };
    value_added_tax_vat: { rate_percent: number; amount_bdt: number; base_bdt: number };
    advance_income_tax_ait: { rate_percent: number; amount_bdt: number };
    advance_tax_at: { rate_percent: number; amount_bdt: number; base_bdt: number };
  };
  total_duty_and_taxes_bdt: number;
  total_landed_cost_bdt: number;
  effective_duty_rate_percent: number;
  multiplier_on_cnf: number;
  legal_framework: string;
}

export function calculateBangladeshImportDuty(input: TariffInput): TariffCalculationResult {
  const cnfUsd = Math.max(0, input.cnf_value_usd);
  const exRate = input.exchange_rate_bdt || 122.0;
  const hs = input.hs_code ? input.hs_code.trim() : '8471.30.00';
  const preset = KNOWN_HS_SCHEDULES[hs];

  const cdRate = input.cd_percent ?? preset?.cd_percent ?? 25;
  const rdRate = input.rd_percent ?? preset?.rd_percent ?? 3;
  const sdRate = input.sd_percent ?? preset?.sd_percent ?? 0;
  const vatRate = input.vat_percent ?? preset?.vat_percent ?? 15;
  const aitRate = input.ait_percent ?? preset?.ait_percent ?? 5;
  const atRate = input.at_percent ?? preset?.at_percent ?? 5;

  const desc = preset ? preset.description : 'Custom / Unlisted Goods Category';
  const category = preset ? preset.category : 'General Merchandise';

  // 1. Assessable Value (AV) calculation:
  // AV = (C&F in BDT) + 1% Insurance & Landing Charge
  const cnfBdt = cnfUsd * exRate;
  const landingCharge = cnfBdt * 0.01;
  const assessableValue = cnfBdt + landingCharge;

  // 2. Customs Duty (CD) = AV * CD%
  const cdAmount = assessableValue * (cdRate / 100);

  // 3. Regulatory Duty (RD) = AV * RD%
  const rdAmount = assessableValue * (rdRate / 100);

  // 4. Supplementary Duty (SD) = (AV + CD + RD) * SD%
  const baseSd = assessableValue + cdAmount + rdAmount;
  const sdAmount = baseSd * (sdRate / 100);

  // 5. Value Added Tax (VAT) = (AV + CD + RD + SD) * VAT%
  const baseVat = baseSd + sdAmount;
  const vatAmount = baseVat * (vatRate / 100);

  // 6. Advance Income Tax (AIT) = AV * AIT%
  const aitAmount = assessableValue * (aitRate / 100);

  // 7. Advance Tax (AT) = Base_VAT * AT%
  const atAmount = baseVat * (atRate / 100);

  // Total duties & taxes
  const totalDuty = cdAmount + rdAmount + sdAmount + vatAmount + aitAmount + atAmount;
  const totalLandedCost = assessableValue + totalDuty;
  const effectiveRate = assessableValue > 0 ? Number(((totalDuty / assessableValue) * 100).toFixed(2)) : 0;
  const multiplier = cnfBdt > 0 ? Number((totalLandedCost / cnfBdt).toFixed(3)) : 1;

  return {
    hs_code: hs,
    description: desc,
    category,
    cnf_value_usd: cnfUsd,
    exchange_rate_bdt: exRate,
    cnf_value_bdt: Math.round(cnfBdt),
    landing_charge_bdt: Math.round(landingCharge),
    assessable_value_bdt: Math.round(assessableValue),
    duties: {
      customs_duty_cd: { rate_percent: cdRate, amount_bdt: Math.round(cdAmount) },
      regulatory_duty_rd: { rate_percent: rdRate, amount_bdt: Math.round(rdAmount) },
      supplementary_duty_sd: { rate_percent: sdRate, amount_bdt: Math.round(sdAmount), base_bdt: Math.round(baseSd) },
      value_added_tax_vat: { rate_percent: vatRate, amount_bdt: Math.round(vatAmount), base_bdt: Math.round(baseVat) },
      advance_income_tax_ait: { rate_percent: aitRate, amount_bdt: Math.round(aitAmount) },
      advance_tax_at: { rate_percent: atRate, amount_bdt: Math.round(atAmount), base_bdt: Math.round(baseVat) }
    },
    total_duty_and_taxes_bdt: Math.round(totalDuty),
    total_landed_cost_bdt: Math.round(totalLandedCost),
    effective_duty_rate_percent: effectiveRate,
    multiplier_on_cnf: multiplier,
    legal_framework: 'NBR Customs Act 2023 & Operative SRO Customs Tariff Schedule'
  };
}
