/**
 * Bangladesh Income Tax Act 2023 (আয়কর আইন ২০২৩)
 * Deterministic Individual Income Tax & TDS Calculation Engine
 * Applicable for Assessment Years 2024-2025 and 2025-2026
 */

export interface TaxCalculationInput {
  annual_income_bdt: number;
  taxpayer_category?: 'general' | 'female_or_senior_65' | 'physically_challenged' | 'freedom_fighter';
  has_disabled_child?: boolean;
  city_location?: 'dhaka_chattogram' | 'other_city_corporation' | 'non_city';
  allowable_investments_bdt?: number;
  net_wealth_bdt?: number;
}

export interface TaxSlabBreakdown {
  slab_label: string;
  slab_range: string;
  rate_percent: number;
  taxable_amount: number;
  tax_amount: number;
}

export interface TaxCalculationResult {
  annual_income_bdt: number;
  taxpayer_category: string;
  exemption_threshold_bdt: number;
  taxable_income_bdt: number;
  slabs: TaxSlabBreakdown[];
  gross_tax_bdt: number;
  investment_rebate: {
    eligible_investment_bdt: number;
    rebate_bdt: number;
    cap_applied: string;
  };
  net_tax_before_min_bdt: number;
  minimum_tax_rule: {
    location: string;
    minimum_tax_bdt: number;
    minimum_applied: boolean;
  };
  net_tax_payable_bdt: number;
  wealth_surcharge: {
    net_wealth_bdt: number;
    surcharge_percent: number;
    surcharge_amount_bdt: number;
  };
  total_tax_liability_bdt: number;
  effective_tax_rate_percent: number;
  monthly_tds_recommended_bdt: number;
  legal_citation: string;
}

export function calculateBangladeshIncomeTax(input: TaxCalculationInput): TaxCalculationResult {
  const income = Math.max(0, input.annual_income_bdt);
  const category = input.taxpayer_category || 'general';
  const hasDisabledChild = Boolean(input.has_disabled_child);
  const location = input.city_location || 'dhaka_chattogram';
  const investments = Math.max(0, input.allowable_investments_bdt || 0);
  const netWealth = Math.max(0, input.net_wealth_bdt || 0);

  // 1. Determine Initial Exemption Limit
  let exemption = 350000; // General
  if (category === 'female_or_senior_65') {
    exemption = 400000;
  } else if (category === 'physically_challenged') {
    exemption = 475000;
  } else if (category === 'freedom_fighter') {
    exemption = 500000;
  }

  if (hasDisabledChild) {
    exemption += 50000;
  }

  const taxableIncome = Math.max(0, income - exemption);
  let remaining = taxableIncome;
  const slabs: TaxSlabBreakdown[] = [];

  // Slab 0: Initial Exemption
  slabs.push({
    slab_label: 'First Exemption Threshold',
    slab_range: `Up to ৳${exemption.toLocaleString()}`,
    rate_percent: 0,
    taxable_amount: Math.min(income, exemption),
    tax_amount: 0
  });

  // Slab 1: Next ৳100,000 at 5%
  const s1Taxable = Math.min(remaining, 100000);
  const s1Tax = s1Taxable * 0.05;
  remaining = Math.max(0, remaining - 100000);
  slabs.push({
    slab_label: 'Next ৳1,00,000',
    slab_range: '5% Bracket',
    rate_percent: 5,
    taxable_amount: s1Taxable,
    tax_amount: s1Tax
  });

  // Slab 2: Next ৳400,000 at 10%
  const s2Taxable = Math.min(remaining, 400000);
  const s2Tax = s2Taxable * 0.10;
  remaining = Math.max(0, remaining - 400000);
  slabs.push({
    slab_label: 'Next ৳4,00,000',
    slab_range: '10% Bracket',
    rate_percent: 10,
    taxable_amount: s2Taxable,
    tax_amount: s2Tax
  });

  // Slab 3: Next ৳500,000 at 15%
  const s3Taxable = Math.min(remaining, 500000);
  const s3Tax = s3Taxable * 0.15;
  remaining = Math.max(0, remaining - 500000);
  slabs.push({
    slab_label: 'Next ৳5,00,000',
    slab_range: '15% Bracket',
    rate_percent: 15,
    taxable_amount: s3Taxable,
    tax_amount: s3Tax
  });

  // Slab 4: Next ৳500,000 at 20%
  const s4Taxable = Math.min(remaining, 500000);
  const s4Tax = s4Taxable * 0.20;
  remaining = Math.max(0, remaining - 500000);
  slabs.push({
    slab_label: 'Next ৳5,00,000',
    slab_range: '20% Bracket',
    rate_percent: 20,
    taxable_amount: s4Taxable,
    tax_amount: s4Tax
  });

  // Slab 5: Remaining balance at 25%
  const s5Taxable = remaining;
  const s5Tax = s5Taxable * 0.25;
  slabs.push({
    slab_label: 'Remaining Balance',
    slab_range: '25% Maximum Bracket',
    rate_percent: 25,
    taxable_amount: s5Taxable,
    tax_amount: s5Tax
  });

  const grossTax = s1Tax + s2Tax + s3Tax + s4Tax + s5Tax;

  // 2. Investment Tax Rebate
  // Allowable investment: min(Actual Investment, 20% of Taxable Income, ৳1,000,000)
  const maxAllowableByIncome = taxableIncome * 0.20;
  const maxAllowableStatutory = 1000000;
  const eligibleInvestment = Math.min(investments, maxAllowableByIncome, maxAllowableStatutory);
  const rebate = eligibleInvestment * 0.15;

  let capApplied = 'None';
  if (investments > 0) {
    if (investments > maxAllowableStatutory && maxAllowableStatutory <= maxAllowableByIncome) {
      capApplied = 'Statutory ceiling ৳10,00,000 applied';
    } else if (investments > maxAllowableByIncome) {
      capApplied = '20% of taxable income ceiling applied';
    } else {
      capApplied = 'Full investment eligible for 15% rebate';
    }
  }

  const netTaxBeforeMin = Math.max(0, grossTax - rebate);

  // 3. Minimum Tax Rule
  let minTaxAmount = 5000;
  if (location === 'other_city_corporation') {
    minTaxAmount = 4000;
  } else if (location === 'non_city') {
    minTaxAmount = 3000;
  }

  let minimumApplied = false;
  let netTaxPayable = netTaxBeforeMin;

  if (taxableIncome > 0) {
    if (netTaxBeforeMin < minTaxAmount) {
      netTaxPayable = minTaxAmount;
      minimumApplied = true;
    }
  } else {
    netTaxPayable = 0;
  }

  // 4. Net Wealth Surcharge
  let surchargePercent = 0;
  if (netWealth > 500000000) {
    surchargePercent = 35;
  } else if (netWealth > 200000000) {
    surchargePercent = 30;
  } else if (netWealth > 100000000) {
    surchargePercent = 20;
  } else if (netWealth > 40000000) {
    surchargePercent = 10;
  }

  const surchargeAmount = Math.round(netTaxPayable * (surchargePercent / 100));
  const totalLiability = netTaxPayable + surchargeAmount;
  const effectiveRate = income > 0 ? Number(((totalLiability / income) * 100).toFixed(2)) : 0;
  const monthlyTds = Math.round(totalLiability / 12);

  return {
    annual_income_bdt: income,
    taxpayer_category: category,
    exemption_threshold_bdt: exemption,
    taxable_income_bdt: taxableIncome,
    slabs,
    gross_tax_bdt: Math.round(grossTax),
    investment_rebate: {
      eligible_investment_bdt: Math.round(eligibleInvestment),
      rebate_bdt: Math.round(rebate),
      cap_applied: capApplied
    },
    net_tax_before_min_bdt: Math.round(netTaxBeforeMin),
    minimum_tax_rule: {
      location,
      minimum_tax_bdt: minTaxAmount,
      minimum_applied: minimumApplied
    },
    net_tax_payable_bdt: Math.round(netTaxPayable),
    wealth_surcharge: {
      net_wealth_bdt: netWealth,
      surcharge_percent: surchargePercent,
      surcharge_amount_bdt: surchargeAmount
    },
    total_tax_liability_bdt: Math.round(totalLiability),
    effective_tax_rate_percent: effectiveRate,
    monthly_tds_recommended_bdt: monthlyTds,
    legal_citation: 'National Board of Revenue (NBR) - Bangladesh Income Tax Act 2023, First Schedule & SRO No. 173-Law/Income Tax/2024'
  };
}
