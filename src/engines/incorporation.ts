/**
 * RJSC (Registrar of Joint Stock Companies and Firms) Incorporation Fee Engine
 * Calculates statutory government registration fees, non-judicial stamp duties,
 * filing fees, and name clearance costs according to Companies Act 1994 & Stamp Act.
 */

export interface IncorporationInput {
  authorized_capital_bdt: number;
  company_type?: 'private_limited' | 'opc_one_person' | 'public_limited';
  num_directors?: number;
}

export interface IncorporationResult {
  authorized_capital_bdt: number;
  company_type: string;
  fees: {
    name_clearance_bdt: number;
    name_clearance_vat_bdt: number;
    registration_filing_fees_bdt: number;
    capital_slab_registration_fee_bdt: number;
    moa_stamp_duty_bdt: number;
    aoa_stamp_duty_bdt: number;
    certified_copy_fee_bdt: number;
    digital_filing_portal_fee_bdt: number;
  };
  total_statutory_government_fees_bdt: number;
  estimated_lawyer_audit_fee_bdt: number;
  total_setup_cost_estimate_bdt: number;
  required_forms: string[];
  timeline_days: string;
  governing_act: string;
}

export function estimateIncorporationFees(input: IncorporationInput): IncorporationResult {
  const capital = Math.max(0, input.authorized_capital_bdt);
  const type = input.company_type || 'private_limited';

  // 1. Name Clearance: ৳1,000 + 15% VAT = ৳1,150
  const nameClearance = 1000;
  const nameClearanceVat = 150;

  // 2. Statutory Filing Fees (Form I, VI, IX, XII)
  const filingFees = 400 * 4; // ৳1,600

  // 3. Capital-based Registration Fee (Schedule of Companies Act 1994)
  // Up to ৳20,000: ৳360
  // Next ৳30,000 (up to ৳50,000): ৳180 per ৳10,000
  // Next ৳950,000 (up to ৳1,000,000): ৳45 per ৳10,000
  // Next ৳4,000,000 (up to ৳5,000,000): ৳90 per ৳10,000
  // Above ৳5,000,000: ৳120 per ৳10,000
  let capitalFee = 0;
  let remCap = capital;

  if (remCap > 0) {
    capitalFee += 360;
    remCap = Math.max(0, remCap - 20000);
  }

  if (remCap > 0) {
    const s2 = Math.min(remCap, 30000);
    capitalFee += Math.ceil(s2 / 10000) * 180;
    remCap = Math.max(0, remCap - 30000);
  }

  if (remCap > 0) {
    const s3 = Math.min(remCap, 950000);
    capitalFee += Math.ceil(s3 / 10000) * 45;
    remCap = Math.max(0, remCap - 950000);
  }

  if (remCap > 0) {
    const s4 = Math.min(remCap, 4000000);
    capitalFee += Math.ceil(s4 / 10000) * 90;
    remCap = Math.max(0, remCap - 4000000);
  }

  if (remCap > 0) {
    capitalFee += Math.ceil(remCap / 10000) * 120;
  }

  // 4. Non-Judicial Stamp Duty (MoA & AoA under Stamp Act 1899)
  let moaStamp = 2000;
  if (capital > 50000000) {
    moaStamp = 10000;
  } else if (capital > 1000000) {
    moaStamp = 5000;
  }

  let aoaStamp = 3000;
  if (capital > 10000000) {
    aoaStamp = 20000;
  } else if (capital > 500000) {
    aoaStamp = 8000;
  }

  const certifiedCopy = 1380; // ৳1,200 + 15% VAT
  const portalFee = 400;

  const totalStatutory = nameClearance + nameClearanceVat + filingFees + capitalFee + moaStamp + aoaStamp + certifiedCopy + portalFee;
  const lawyerAudit = capital <= 1000000 ? 15000 : 25000;
  const totalSetup = totalStatutory + lawyerAudit;

  const forms = [
    'Name Clearance Certificate',
    'Memorandum of Association (MoA) - Objectives clause',
    'Articles of Association (AoA) - Internal regulations',
    'Form I - Declaration on compliance with the requirements of the Act',
    'Form VI - Notice of situation of registered office',
    'Form IX - Consent of candidates to act as director',
    'Form XII - Particulars of the persons who are directors'
  ];

  if (type === 'opc_one_person') {
    forms.push('Nominee Consent Form (One Person Company nominee requirement)');
  }

  return {
    authorized_capital_bdt: Math.round(capital),
    company_type: type,
    fees: {
      name_clearance_bdt: nameClearance,
      name_clearance_vat_bdt: nameClearanceVat,
      registration_filing_fees_bdt: filingFees,
      capital_slab_registration_fee_bdt: Math.round(capitalFee),
      moa_stamp_duty_bdt: moaStamp,
      aoa_stamp_duty_bdt: aoaStamp,
      certified_copy_fee_bdt: certifiedCopy,
      digital_filing_portal_fee_bdt: portalFee
    },
    total_statutory_government_fees_bdt: Math.round(totalStatutory),
    estimated_lawyer_audit_fee_bdt: lawyerAudit,
    total_setup_cost_estimate_bdt: Math.round(totalSetup),
    required_forms: forms,
    timeline_days: '3–5 business days via RJSC e-Services portal',
    governing_act: 'Companies Act 1994 (Act No. XVIII of 1994) & The Stamp Act 1899'
  };
}
