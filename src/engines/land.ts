/**
 * Land Registration & Sub-Registry Stamp Duty Engine
 * Computes official statutory deed registration fees, local government taxes,
 * gain taxes (Section 53FF of Income Tax Act 2023), and e-Namjari (Mutation) fees.
 */

export interface LandRegistrationInput {
  deed_value_bdt: number;
  area_type?: 'dhaka_chattogram_city' | 'pourashava_district' | 'rural_union_parishad';
  is_residential_plot?: boolean;
}

export interface LandRegistrationResult {
  deed_value_bdt: number;
  area_type: string;
  fees: {
    stamp_duty_bdt: number;
    registration_fee_bdt: number;
    local_govt_tax_bdt: number;
    source_tax_gain_tax_bdt: number;
    e_namjari_mutation_bdt: number;
  };
  enamjari_breakdown: {
    court_fee_bdt: number;
    notice_fee_bdt: number;
    record_correction_bdt: number;
    dcr_fee_bdt: number;
    total_statutory_bdt: number;
  };
  total_statutory_cost_bdt: number;
  effective_percentage_of_deed: number;
  deed_writer_typical_bdt: number;
  warnings: string[];
  legal_basis: string;
}

export function estimateLandRegistrationFees(input: LandRegistrationInput): LandRegistrationResult {
  const deedVal = Math.max(0, input.deed_value_bdt);
  const area = input.area_type || 'dhaka_chattogram_city';

  // 1. Stamp Duty: 1.5% under The Stamp Act 1899 (as amended)
  const stampDuty = deedVal * 0.015;

  // 2. Registration Fee: 1.0% under The Registration Act 1908
  const regFee = deedVal * 0.010;

  // 3. Local Government Tax:
  // 2.0% for City Corporation & Cantonment, 1.5% for Union Parishad
  const localGovtRate = area === 'rural_union_parishad' ? 0.015 : 0.020;
  const localGovtTax = deedVal * localGovtRate;

  // 4. Source Tax / Advance Income Tax (Section 53FF of Income Tax Act 2023)
  // For prime city corporations: 8% (or statutory mouza slab); Pourashava: 4-6%; Union: 2-3%
  let gainTaxRate = 0.08;
  if (area === 'pourashava_district') {
    gainTaxRate = 0.04;
  } else if (area === 'rural_union_parishad') {
    gainTaxRate = 0.02;
  }
  const gainTax = deedVal * gainTaxRate;

  // 5. Fixed Statutory e-Namjari (Mutation) Fees:
  // Court Fee: ৳20
  // Notice Fee: ৳50
  // Record Correction: ৳1000
  // DCR Fee: ৳100
  // Total: Fixed ৳1,170
  const enamjariStatutory = 1170;

  const totalStatutory = stampDuty + regFee + localGovtTax + gainTax + enamjariStatutory;
  const effectivePct = deedVal > 0 ? Number(((totalStatutory / deedVal) * 100).toFixed(2)) : 0;
  const typicalDeedWriter = Math.max(5000, Math.round(deedVal * 0.0075));

  const warnings = [
    'e-Namjari statutory fee is STRICTLY ৳1,170. Any demand for "Kharij speed money" (৳15,000–৳50,000) at the AC Land office is illegal.',
    'Always verify the deed valuation against the official Sub-Registry Mouza rate (মৌজা দর); recording below mouza rate halts registration.',
    'Ensure CS, SA, RS, BS, and City Khatian serials align to prevent fraudulent dual deed conveyance.'
  ];

  return {
    deed_value_bdt: Math.round(deedVal),
    area_type: area,
    fees: {
      stamp_duty_bdt: Math.round(stampDuty),
      registration_fee_bdt: Math.round(regFee),
      local_govt_tax_bdt: Math.round(localGovtTax),
      source_tax_gain_tax_bdt: Math.round(gainTax),
      e_namjari_mutation_bdt: enamjariStatutory
    },
    enamjari_breakdown: {
      court_fee_bdt: 20,
      notice_fee_bdt: 50,
      record_correction_bdt: 1000,
      dcr_fee_bdt: 100,
      total_statutory_bdt: 1170
    },
    total_statutory_cost_bdt: Math.round(totalStatutory),
    effective_percentage_of_deed: effectivePct,
    deed_writer_typical_bdt: typicalDeedWriter,
    warnings,
    legal_basis: 'Registration Directorate, Stamp Act 1899, NBR Section 53FF, and Ministry of Land e-Mutation Gazette'
  };
}
