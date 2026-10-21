/**
 * BRTA Motor Vehicle Tax Token & NBR Advance Income Tax (AIT) Engine
 * Implements Section 153 of the Income Tax Act 2023 and BRTA Motor Vehicle Tax Rules.
 */

export interface VehicleTaxInput {
  engine_cc: number;
  vehicle_type?: 'private_car_sedan' | 'suv_jeep' | 'microbus' | 'motorcycle' | 'ev_electric';
  is_second_vehicle?: boolean;
  motor_kw?: number;
}

export interface VehicleTaxResult {
  engine_cc: number;
  vehicle_type: string;
  is_second_vehicle: boolean;
  annual_ait_bdt: number;
  second_car_surcharge_bdt: number;
  total_ait_payable_bdt: number;
  brta_road_tax_bdt: number;
  fitness_inspection_bdt: number;
  tax_token_card_fee_bdt: number;
  vat_on_brta_fees_bdt: number;
  total_annual_carrying_cost_bdt: number;
  cc_slab_label: string;
  legal_citation: string;
}

export function calculateBangladeshVehicleTax(input: VehicleTaxInput): VehicleTaxResult {
  const cc = Math.max(0, input.engine_cc);
  const type = input.vehicle_type || 'private_car_sedan';
  const isSecond = Boolean(input.is_second_vehicle);
  const kw = input.motor_kw || 0;

  let baseAit = 25000;
  let roadTax = 2500;
  let slabLabel = 'Up to 1500cc (Sedan / Hatchback)';

  if (type === 'motorcycle') {
    baseAit = 0;
    roadTax = cc > 100 ? 1150 : 575;
    slabLabel = 'Motorcycle (Two-wheeler)';
  } else if (type === 'microbus') {
    baseAit = 30000;
    roadTax = 4000;
    slabLabel = 'Microbus (People carrier)';
  } else if (type === 'ev_electric') {
    if (kw > 150) {
      baseAit = 150000;
      slabLabel = 'Electric Vehicle (>150 kW)';
    } else if (kw > 125) {
      baseAit = 125000;
      slabLabel = 'Electric Vehicle (126–150 kW)';
    } else if (kw > 100) {
      baseAit = 75000;
      slabLabel = 'Electric Vehicle (101–125 kW)';
    } else if (kw > 75) {
      baseAit = 50000;
      slabLabel = 'Electric Vehicle (76–100 kW)';
    } else {
      baseAit = 25000;
      slabLabel = 'Electric Vehicle (Up to 75 kW)';
    }
    roadTax = 3000;
  } else {
    // Private car / SUV
    if (cc > 3500) {
      baseAit = 200000;
      roadTax = 15000;
      slabLabel = 'Above 3500cc (Ultra luxury / V8)';
    } else if (cc > 3000) {
      baseAit = 150000;
      roadTax = 10500;
      slabLabel = '3001cc to 3500cc (High displacement SUV)';
    } else if (cc > 2500) {
      baseAit = 125000;
      roadTax = 7500;
      slabLabel = '2501cc to 3000cc (Executive Sedan / SUV)';
    } else if (cc > 2000) {
      baseAit = 75000;
      roadTax = 5500;
      slabLabel = '2001cc to 2500cc (Mid SUV / Hybrid)';
    } else if (cc > 1500) {
      baseAit = 50000;
      roadTax = 4000;
      slabLabel = '1501cc to 2000cc (Premium Sedan / Crossover)';
    } else {
      baseAit = 25000;
      roadTax = 2500;
      slabLabel = 'Up to 1500cc (Standard Sedan)';
    }
  }

  // Second car penalty: 50% extra AIT under Income Tax Act Section 153
  const secondSurcharge = isSecond ? Math.round(baseAit * 0.50) : 0;
  const totalAit = baseAit + secondSurcharge;

  const fitnessInspection = type === 'motorcycle' ? 0 : 518;
  const taxTokenCard = 500;
  const vatOnFees = Math.round((roadTax + fitnessInspection + taxTokenCard) * 0.15);
  const totalAnnual = totalAit + roadTax + fitnessInspection + taxTokenCard + vatOnFees;

  return {
    engine_cc: cc,
    vehicle_type: type,
    is_second_vehicle: isSecond,
    annual_ait_bdt: baseAit,
    second_car_surcharge_bdt: secondSurcharge,
    total_ait_payable_bdt: totalAit,
    brta_road_tax_bdt: roadTax,
    fitness_inspection_bdt: fitnessInspection,
    tax_token_card_fee_bdt: taxTokenCard,
    vat_on_brta_fees_bdt: vatOnFees,
    total_annual_carrying_cost_bdt: totalAnnual,
    cc_slab_label: slabLabel,
    legal_citation: 'Income Tax Act 2023 Section 153, Motor Vehicles Ordinance & BRTA Annual Tax Schedule'
  };
}
