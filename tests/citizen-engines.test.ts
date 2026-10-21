import { describe, it, expect } from 'vitest';
import { calculateBangladeshIncomeTax } from '../src/engines/tax';
import { calculateBangladeshImportDuty } from '../src/engines/tariffs';
import { estimateLandRegistrationFees } from '../src/engines/land';
import { calculateBangladeshVehicleTax } from '../src/engines/vehicles';
import { estimateIncorporationFees } from '../src/engines/incorporation';
import { queryExamStatistics } from '../src/engines/exams';
import { queryMedicines } from '../src/db/queries/medicines';

describe('Citizen & Commercial Intelligence Engines', () => {
  describe('NBR Income Tax Engine (আয়কর আইন ২০২৩)', () => {
    it('applies ৳3,50,000 exemption for general individuals', () => {
      const res = calculateBangladeshIncomeTax({ annual_income_bdt: 350000 });
      expect(res.taxable_income_bdt).toBe(0);
      expect(res.gross_tax_bdt).toBe(0);
      expect(res.net_tax_payable_bdt).toBe(0);
    });

    it('calculates progressive slabs and minimum city tax', () => {
      const res = calculateBangladeshIncomeTax({
        annual_income_bdt: 400000, // ৳50,000 taxable at 5% = ৳2,500
        city_location: 'dhaka_chattogram'
      });
      expect(res.taxable_income_bdt).toBe(50000);
      expect(res.gross_tax_bdt).toBe(2500);
      // Minimum tax in Dhaka/Ctg is ৳5,000
      expect(res.net_tax_payable_bdt).toBe(5000);
      expect(res.minimum_tax_rule.minimum_applied).toBe(true);
    });

    it('calculates 15% investment tax rebate correctly', () => {
      const res = calculateBangladeshIncomeTax({
        annual_income_bdt: 1200000,
        allowable_investments_bdt: 150000
      });
      expect(res.investment_rebate.rebate_bdt).toBe(22500); // 150,000 * 0.15
      expect(res.net_tax_payable_bdt).toBeLessThan(res.gross_tax_bdt);
    });

    it('applies 10% net wealth surcharge above ৳4 crore', () => {
      const res = calculateBangladeshIncomeTax({
        annual_income_bdt: 2000000,
        net_wealth_bdt: 50000000 // ৳5 Crore
      });
      expect(res.wealth_surcharge.surcharge_percent).toBe(10);
      expect(res.wealth_surcharge.surcharge_amount_bdt).toBeGreaterThan(0);
      expect(res.total_tax_liability_bdt).toBe(res.net_tax_payable_bdt + res.wealth_surcharge.surcharge_amount_bdt);
    });
  });

  describe('NBR Customs Tariffs & HS Code Engine', () => {
    it('calculates duty on laptop (8471.30.00)', () => {
      const res = calculateBangladeshImportDuty({
        cnf_value_usd: 1000,
        hs_code: '8471.30.00',
        exchange_rate_bdt: 122.0
      });
      expect(res.duties.customs_duty_cd.rate_percent).toBe(0);
      expect(res.duties.value_added_tax_vat.rate_percent).toBe(15);
      expect(res.duties.advance_income_tax_ait.rate_percent).toBe(5);
      expect(res.duties.advance_tax_at.rate_percent).toBe(5);
      expect(res.effective_duty_rate_percent).toBe(25);
    });

    it('calculates high duty and supplementary duty on CBU smartphones (8517.13.00)', () => {
      const res = calculateBangladeshImportDuty({
        cnf_value_usd: 500,
        hs_code: '8517.13.00'
      });
      expect(res.duties.customs_duty_cd.rate_percent).toBe(25);
      expect(res.duties.supplementary_duty_sd.rate_percent).toBe(20);
      expect(res.effective_duty_rate_percent).toBeGreaterThan(55);
    });

    it('incorporates 1% landing charge in assessable value', () => {
      const res = calculateBangladeshImportDuty({
        cnf_value_usd: 1000,
        exchange_rate_bdt: 100.0
      });
      // 1000 * 100 = 100,000 BDT + 1% = 101,000 BDT
      expect(res.assessable_value_bdt).toBe(101000);
    });
  });

  describe('Land Sub-Registry & Mutation Engine', () => {
    it('calculates statutory 1.5% stamp duty and 1% registration fee', () => {
      const res = estimateLandRegistrationFees({
        deed_value_bdt: 10000000,
        area_type: 'dhaka_chattogram_city'
      });
      expect(res.fees.stamp_duty_bdt).toBe(150000); // 1.5%
      expect(res.fees.registration_fee_bdt).toBe(100000); // 1.0%
      expect(res.fees.local_govt_tax_bdt).toBe(200000); // 2.0%
      expect(res.fees.source_tax_gain_tax_bdt).toBe(800000); // 8.0%
    });

    it('enforces fixed ৳1,170 e-Namjari statutory fee', () => {
      const res = estimateLandRegistrationFees({ deed_value_bdt: 5000000 });
      expect(res.enamjari_breakdown.total_statutory_bdt).toBe(1170);
      expect(res.enamjari_breakdown.court_fee_bdt).toBe(20);
      expect(res.enamjari_breakdown.notice_fee_bdt).toBe(50);
      expect(res.enamjari_breakdown.record_correction_bdt).toBe(1000);
      expect(res.enamjari_breakdown.dcr_fee_bdt).toBe(100);
    });
  });

  describe('BRTA Vehicle Tax Token & CC Slabs Engine', () => {
    it('charges ৳25,000 AIT for vehicles up to 1500cc', () => {
      const res = calculateBangladeshVehicleTax({ engine_cc: 1498 });
      expect(res.annual_ait_bdt).toBe(25000);
      expect(res.second_car_surcharge_bdt).toBe(0);
      expect(res.total_annual_carrying_cost_bdt).toBeGreaterThan(25000);
    });

    it('applies 50% second-vehicle penalty under Section 153', () => {
      const res = calculateBangladeshVehicleTax({
        engine_cc: 1987, // 1501-2000cc base = ৳50,000
        is_second_vehicle: true
      });
      expect(res.annual_ait_bdt).toBe(50000);
      expect(res.second_car_surcharge_bdt).toBe(25000); // +50%
      expect(res.total_ait_payable_bdt).toBe(75000);
    });

    it('handles electric vehicles based on motor kW slabs', () => {
      const res = calculateBangladeshVehicleTax({
        engine_cc: 0,
        vehicle_type: 'ev_electric',
        motor_kw: 135 // 126-150 kW slab
      });
      expect(res.annual_ait_bdt).toBe(125000);
    });
  });

  describe('RJSC Company Incorporation Engine', () => {
    it('calculates name clearance, stamp duty and filing fees', () => {
      const res = estimateIncorporationFees({ authorized_capital_bdt: 1000000 });
      expect(res.fees.name_clearance_bdt).toBe(1000);
      expect(res.fees.name_clearance_vat_bdt).toBe(150);
      expect(res.fees.moa_stamp_duty_bdt).toBe(2000);
      expect(res.fees.aoa_stamp_duty_bdt).toBe(8000);
      expect(res.total_statutory_government_fees_bdt).toBeGreaterThan(15000);
    });
  });

  describe('Education Board 20-Year Exam Results Engine', () => {
    it('retrieves official HSC results series', () => {
      const res = queryExamStatistics({ exam_type: 'HSC' });
      expect(res.count).toBeGreaterThan(10);
      expect(res.boards_active).toBe(11);
      const y2024 = res.results.find(r => r.year === 2024);
      expect(y2024).toBeDefined();
      expect(y2024?.gpa_5_count).toBe(145911);
    });

    it('identifies 2020 100% COVID auto-pass benchmark', () => {
      const res = queryExamStatistics({ exam_type: 'HSC', year: 2020 });
      expect(res.results[0].pass_rate_percent).toBe(100.0);
    });
  });

  describe('DGDA Medicine & Generic Substitution Engine', () => {
    it('finds Napa brand with Paracetamol generic and official ৳1.20 MRP', async () => {
      const res = await queryMedicines(null, { query: 'Napa' });
      expect(res.count).toBeGreaterThan(0);
      const napa = res.results.find(m => m.brand_name === 'Napa');
      expect(napa).toBeDefined();
      expect(napa?.generic_name).toBe('Paracetamol');
      expect(napa?.manufacturer).toContain('Beximco');
      expect(napa?.price_bdt).toBe(1.20);
    });

    it('lists multiple generic substitutes for Omeprazole across pharma companies', async () => {
      const res = await queryMedicines(null, { generic_name: 'Omeprazole' });
      expect(res.count).toBeGreaterThanOrEqual(4);
      const brands = res.results.map(m => m.brand_name);
      expect(brands).toContain('Seclo 20');
      expect(brands).toContain('Losectil 20');
    });
  });
});
