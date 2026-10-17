# Domain Model & Ubiquitous Language

## 1. Domain Glossary

| Term | Domain | Definition & Engineering Gotcha |
| :--- | :--- | :--- |
| **BEFTN** | Banking | Bangladesh Electronic Funds Transfer Network. Requires a 9-digit routing number (`BBBZZRRRC` where BBB = bank code, ZZ = district code, RRR = branch code, C = check digit). |
| **Payable Branch** | Banking | In Bangladesh, 96 settlement endpoints are registered in central clearing but cannot receive customer credits. The schema flags `payable = 0` so agents don't route salaries to settlement hubs. |
| **BPM6 Reserves** | Macro | IMF's 6th Balance of Payments and International Investment Position Manual standard. Measures *usable, liquid foreign reserves*, excluding export development funds (EDF). Usually $4B–$6B lower than Gross International Reserves. |
| **Point-to-Point CPI** | Inflation | Compares price level of current month with the exact same month of previous year. High volatility. |
| **12-Month Moving Average CPI** | Inflation | Average inflation over the preceding 12 months. Smoothed, used for long-term fiscal planning. |
| **CPI Base Year Transition** | Inflation | **Critical Gotcha:** In April 2023, BBS rebased Bangladesh CPI from base `2005-06 = 100` to base `2021-22 = 100`. Raw index numbers before and after April 2023 cannot be directly compared without chain-linking. |
| **Administrative Levels** | Geography | Division (বিভাগ - 8) → District / Zilla (জেলা - 64) → Upazila (উপজেলা - 494) / Thana (থানা) → Union (ইউনিয়ন - 4,540) or City Corporation / Pourashava (পৌরসভা). |
| **Historical District Aliases** | Geography | English transliterations were officially changed in 2018: Chittagong → Chattogram, Bogra → Bogura, Jessore → Jashore, Barisal → Barishal, Comilla → Cumilla. Search must support both. |
| **DAM Wholesale vs Retail** | Commodity | Department of Agricultural Marketing tracks both. Retail price range is what citizens pay at local wet markets; wholesale is truckload/aroth (আড়ত) price. |

---

## 2. Invariant Rules (Defensive Boundaries)

1. **Routing Number Validation:**
   - Length must be exactly 9 numeric digits.
   - Bank code must exist in the 63 scheduled institutions registry.
2. **CPI Inflation Labeling:**
   - Every inflation response must carry the `source` ("World Bank WDI" or "Bangladesh Bank / BBS") and `base_year` to prevent hallucinated index jumps.
3. **Price Range Integrity:**
   - In commodity pricing, `price_min <= price_max` must always hold. If a source lists a single price, `price_min = price_max`.
4. **Bangla Numeral Decoupling:**
   - Database numeric columns (`REAL`, `INTEGER`) only store normalized IEEE floating point / integer numbers. Bangla numeral conversion is applied only at the formatting boundary if requested by the client.
