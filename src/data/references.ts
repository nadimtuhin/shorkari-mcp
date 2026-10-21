export interface DataReference {
  title: string;
  url: string;
  agency: string;
  desc: string;
}

export const PORTAL_REFERENCES: Record<string, DataReference[]> = {
  "pathao": [
    {
      "title": "BRTA Ride-Sharing Service Guidelines & Tariff Regulations (\u09e8\u09e6\u09e7\u09ee)",
      "url": "http://www.brta.gov.bd/",
      "agency": "Bangladesh Road Transport Authority (BRTA)",
      "desc": "Official statutory guidelines regulating app-based transport services, vehicle enlistment, and maximum fare calculations in Dhaka."
    },
    {
      "title": "Pathao Bangladesh Commuter Tariff Policy & Launch Archive",
      "url": "https://pathao.com/",
      "agency": "Pathao Bangladesh",
      "desc": "Historical base tariffs (2016 launch at \u09f325), per-kilometer distance slabs, and peak-hour dynamic surge pricing matrix."
    },
    {
      "title": "Uber Bangladesh Dhaka Fare Schedules & Safety Protocols",
      "url": "https://www.uber.com/bd/en/",
      "agency": "Uber Technologies Inc.",
      "desc": "Official Uber Premier, UberX, and Uber Moto base rates, cancellation policies, and waiting minute tariffs."
    }
  ],
  "sakrain": [
    {
      "title": "Department of Environment Noise Pollution (Control) Rules 2006",
      "url": "http://www.doe.gov.bd/",
      "agency": "Department of Environment (DoE)",
      "desc": "Statutory decibel limits for residential and mixed commercial zones (45\u201375 dB), sound system permits, and acoustic regulations."
    },
    {
      "title": "Dhaka South City Corporation (DSCC) Heritage & Culture Unit",
      "url": "http://www.dscc.gov.bd/",
      "agency": "Dhaka South City Corporation (DSCC)",
      "desc": "Puran Dhaka historical festival documentation, Chawkbazar, Shankhari Bazar, and Armanitola community archives."
    },
    {
      "title": "Bangladesh National Portal \u2014 Cultural Traditions of Old Dhaka",
      "url": "https://bangladesh.gov.bd/",
      "agency": "Cabinet Division & Ministry of Cultural Affairs",
      "desc": "Centuries-old Shakrain kite festival archives, rooftop gathering traditions, and winter solstice sweet gastronomy."
    }
  ],
  "boimela": [
    {
      "title": "Bangla Academy Amar Ekushey Boi Mela Annual Statistics & Bulletins",
      "url": "https://banglaacademy.gov.bd/",
      "agency": "Bangla Academy, Ministry of Cultural Affairs",
      "desc": "Official annual closing figures on book sales turnover, new title registrations, stall allotments, and visitor footfall."
    },
    {
      "title": "Bangladesh Pustak Prokashok O Bikreta Samity (Publishers Guild)",
      "url": "https://bangladesh.gov.bd/",
      "agency": "National Publishers & Booksellers Association",
      "desc": "Publishing industry economic reports, paper import costs, ISBN registrations, and retail distribution benchmarks."
    },
    {
      "title": "National Book Centre Bangladesh (\u099c\u09be\u09a4\u09c0\u09df \u0997\u09cd\u09b0\u09a8\u09cd\u09a5\u0995\u09c7\u09a8\u09cd\u09a6\u09cd\u09b0)",
      "url": "http://www.nbc.gov.bd/",
      "agency": "Ministry of Cultural Affairs",
      "desc": "Literacy promotion surveys, library purchases, and national reading habit sociological studies."
    }
  ],
  "holud": [
    {
      "title": "Dhaka Community Center & Banquet Hall Association",
      "url": "https://bangladesh.gov.bd/",
      "agency": "Dhaka City Corporation Trade License Division",
      "desc": "Banquet hall rental rates, catering safety registrations, and wedding venue capacity guidelines."
    },
    {
      "title": "Export Promotion Bureau Creative & Event Services Trade Data",
      "url": "http://www.epb.gov.bd/",
      "agency": "Export Promotion Bureau (EPB)",
      "desc": "Service industry economic growth data covering domestic wedding event management and stage design agencies."
    },
    {
      "title": "Beauty Parlor & Salon Owners Association Bangladesh",
      "url": "https://bangladesh.gov.bd/",
      "agency": "National SME Foundation & Trade Registry",
      "desc": "Bridal makeup package benchmarks, professional cosmetics salon licensing, and artist service fees."
    }
  ],
  "qurbani": [
    {
      "title": "Dhaka North City Corporation (DNCC) Cattle Haat Gazettes",
      "url": "http://www.dncc.gov.bd/",
      "agency": "Dhaka North City Corporation (DNCC)",
      "desc": "Official lease awards, 5% statutory hasil fee collection rules, and designated seasonal cattle market locations."
    },
    {
      "title": "Department of Livestock Services (DLS) National Qurbani Livestock Census",
      "url": "http://www.dls.gov.bd/",
      "agency": "Ministry of Fisheries and Livestock",
      "desc": "Annual sacrificial animal supply-demand audits, local cattle production figures, and veterinary screening guidelines."
    },
    {
      "title": "Trading Corporation of Bangladesh (TCB) Leather & Livestock Market Monitor",
      "url": "http://www.tcb.gov.bd/",
      "agency": "Ministry of Commerce",
      "desc": "Raw rawhide price fixation gazettes and post-Eid livestock market economic reviews."
    }
  ],
  "passport": [
    {
      "title": "Department of Immigration and Passports (DIP) Official Fee Matrix",
      "url": "https://www.epassport.gov.bd/",
      "agency": "Department of Immigration and Passports (DIP)",
      "desc": "Official 48-page and 64-page e-Passport statutory government fees for regular, urgent, and super-express deliveries."
    },
    {
      "title": "Security Services Division, Ministry of Home Affairs",
      "url": "https://ssd.gov.bd/",
      "agency": "Ministry of Home Affairs",
      "desc": "Special Branch (SB) police verification rules, citizen charter timelines, and anti-harassment complaint cells."
    },
    {
      "title": "Anti-Corruption Commission (ACC) Public Service Citizen Charters",
      "url": "http://www.acc.org.bd/",
      "agency": "Anti-Corruption Commission (ACC)",
      "desc": "Citizen charters and enforcement drive reports targeting passport brokerage syndicates at Agargaon and Uttara."
    }
  ],
  "admission": [
    {
      "title": "University Grants Commission (UGC) Public University Intake Reports",
      "url": "http://www.ugc.gov.bd/",
      "agency": "University Grants Commission of Bangladesh",
      "desc": "Annual statistical reports documenting total available undergraduate seats across 53 public universities."
    },
    {
      "title": "Directorate General of Health Services (DGHS) Medical College Admission",
      "url": "http://www.dghs.gov.bd/",
      "agency": "Ministry of Health and Family Welfare",
      "desc": "Government MBBS and BDS admission circulars, seat quotas, and official entrance examination results."
    },
    {
      "title": "University of Dhaka Central Admission Office",
      "url": "https://admission.eis.du.ac.bd/",
      "agency": "University of Dhaka",
      "desc": "Undergraduate admission test applicant numbers, unit seat distribution, and candidate cut-off marks."
    }
  ],
  "paan": [
    {
      "title": "Department of Agricultural Extension (DAE) Betel Leaf Production Bulletins",
      "url": "http://www.dae.gov.bd/",
      "agency": "Ministry of Agriculture",
      "desc": "National betel leaf (\u09aa\u09be\u09a8) acreage, production volume, and district-level cash crop yields across Rajshahi and Barishal."
    },
    {
      "title": "Bangladesh Agricultural Research Institute (BARI) Spices Research",
      "url": "http://www.bari.gov.bd/",
      "agency": "BARI",
      "desc": "Areca nut (\u09b8\u09c1\u09aa\u09be\u09b0\u09bf) and betel vine disease management, market chains, and spice production research."
    },
    {
      "title": "BBS Household Income and Expenditure Survey (HIES)",
      "url": "http://www.bbs.gov.bd/",
      "agency": "Bangladesh Bureau of Statistics (BBS)",
      "desc": "Per-capita daily expenditure on tobacco, betel leaf, and informal street stimulant consumption."
    }
  ],
  "medicines": [
    {
      "title": "Directorate General of Drug Administration (DGDA) Statutory Maximum Retail Price (MRP) Gazette",
      "url": "http://www.dgda.gov.bd/",
      "agency": "Directorate General of Drug Administration (DGDA)",
      "desc": "National essential drug statutory price lists, brand registrations, dosage specifications, and regulatory compliance gazettes."
    },
    {
      "title": "Essential Drugs Company Limited (EDCL) Generic Medicine Matrix",
      "url": "http://www.edcl.gov.bd/",
      "agency": "Ministry of Health and Family Welfare",
      "desc": "State-owned pharmaceutical manufacturer catalog covering 92 core generic formulations supplied to public hospitals."
    },
    {
      "title": "Bangladesh Association of Pharmaceutical Industries (BAPI)",
      "url": "https://bangladesh.gov.bd/",
      "agency": "National Pharmaceutical Trade Guild",
      "desc": "Pharmaceutical export benchmarks, WHO-cGMP compliance documentation, and local market sales figures."
    }
  ],
  "tax": [
    {
      "title": "National Board of Revenue (NBR) Income Tax Act 2023 (\u0986\u09df\u0995\u09b0 \u0986\u0987\u09a8 \u09e8\u09e6\u09e8\u09e9)",
      "url": "https://nbr.gov.bd/",
      "agency": "National Board of Revenue (NBR)",
      "desc": "Statutory progressive tax brackets (5%\u201325%), exemption thresholds, Section 153 TDS rates, and wealth surcharge slabs."
    },
    {
      "title": "Internal Resources Division (IRD) National Tax Gazette Notifications",
      "url": "https://ird.gov.bd/",
      "agency": "Ministry of Finance",
      "desc": "Finance Act statutory notifications (SROs), allowable investment rebate rules, and city corporation minimum tax orders."
    },
    {
      "title": "NBR e-TIN & Online Tax Return Assessment Portal",
      "url": "https://etaxnbr.gov.bd/",
      "agency": "National Board of Revenue",
      "desc": "Official citizen portal for electronic tax filing, automated tax liability calculation, and acknowledgement slips."
    }
  ],
  "tariffs": [
    {
      "title": "NBR National Customs Tariff Schedule (HS Code Classification & Duty Math)",
      "url": "https://customs.gov.bd/",
      "agency": "Bangladesh Customs, NBR",
      "desc": "Complete Customs Tariff Schedule: Customs Duty (CD), Regulatory Duty (RD), Supplementary Duty (SD), VAT, AIT, and AT rates."
    },
    {
      "title": "Bangladesh Single Window (BSW) Electronic Cargo Clearance",
      "url": "https://bsw.gov.bd/",
      "agency": "National Board of Revenue",
      "desc": "Automated import-export cargo clearance system integrating 38 government regulatory agencies."
    },
    {
      "title": "Ministry of Commerce Import Policy Order (IPO)",
      "url": "https://mincom.gov.bd/",
      "agency": "Ministry of Commerce",
      "desc": "List of prohibited, restricted, and conditional import goods and required commercial certification."
    }
  ],
  "land": [
    {
      "title": "Directorate of Registration Deed Registration & Stamp Duty Fees Schedule",
      "url": "http://www.registration.gov.bd/",
      "agency": "Law and Justice Division",
      "desc": "Statutory sub-registry deed costs: 1.5% Stamp Duty, 1.0% Registration Fee, 2.0% Local Government Tax, and Section 53FF Gain Tax."
    },
    {
      "title": "Ministry of Land Statutory e-Namjari Mutation Portal (\u09f31,170 Schedule)",
      "url": "https://mutation.land.gov.bd/",
      "agency": "Ministry of Land",
      "desc": "Fixed statutory e-Namjari fee breakdown: Court fee \u09f320 + Notice \u09f350 + Record correction \u09f31,000 + DCR fee \u09f3100 = \u09f31,170."
    },
    {
      "title": "Land Reform Board Citizen Land Service Portal",
      "url": "http://www.lrb.gov.bd/",
      "agency": "Ministry of Land",
      "desc": "Khatian (\u0996\u09a4\u09bf\u09df\u09be\u09a8), Mouza maps, mutation appeals, and agricultural land revenue token rates."
    }
  ],
  "vehicles": [
    {
      "title": "BRTA Motor Vehicle Tax Token & Road Safety Fees Schedule",
      "url": "http://www.brta.gov.bd/",
      "agency": "Bangladesh Road Transport Authority (BRTA)",
      "desc": "Annual motor vehicle road tax, fitness certificate renewal fees, and microbus commercial fees schedule."
    },
    {
      "title": "NBR Section 153 Advance Income Tax (AIT) Private Motor Car CC Slabs",
      "url": "https://nbr.gov.bd/",
      "agency": "National Board of Revenue",
      "desc": "Statutory engine displacement CC slabs (\u09f325,000 to \u09f32,00,000), 50% second-vehicle penalty, and EV motor kilowatt slabs."
    },
    {
      "title": "Electric Motor Vehicle Registration and Operation Guideline 2023",
      "url": "http://www.rthd.gov.bd/",
      "agency": "Road Transport and Highways Division",
      "desc": "National policy regulating EV battery certifications, charging station tariffs, and vehicle fitness."
    }
  ],
  "incorporation": [
    {
      "title": "Office of the Registrar of Joint Stock Companies and Firms (RJSC)",
      "url": "http://www.roc.gov.bd/",
      "agency": "Ministry of Commerce",
      "desc": "Official company name clearance (\u09f31,150), authorized capital registration fees, and certified copy issuance tariffs."
    },
    {
      "title": "Companies Act, 1994 (Act No. XVIII of 1994)",
      "url": "http://bdlaws.minlaw.gov.bd/act-787.html",
      "agency": "Legislative and Parliamentary Affairs Division",
      "desc": "National corporate law governing limited liability companies, board directors, share capital, and statutory audits."
    },
    {
      "title": "Non-Judicial Stamp Act Schedule for MoA / AoA Stamp Duty",
      "url": "https://ird.gov.bd/",
      "agency": "Internal Resources Division, Ministry of Finance",
      "desc": "Statutory stamp duty rates applied to Memorandum and Articles of Association based on authorized capital."
    }
  ],
  "exams": [
    {
      "title": "Dhaka Education Board 20-Year Examination Statistics Archives",
      "url": "https://dhakaeducationboard.gov.bd/",
      "agency": "Board of Intermediate and Secondary Education, Dhaka",
      "desc": "Official HSC and SSC result archives (2005\u20132024), pass percentages, GPA-5 distributions, and board comparisons."
    },
    {
      "title": "Bangladesh Bureau of Educational Information and Statistics (BANBEIS)",
      "url": "http://www.banbeis.gov.bd/",
      "agency": "Ministry of Education",
      "desc": "National statistical yearbooks on primary, secondary, and higher secondary examinee demographics and gender parity."
    },
    {
      "title": "Ministry of Education National Examination Result Analysis Reports",
      "url": "http://www.moedu.gov.bd/",
      "agency": "Secondary and Higher Education Division",
      "desc": "Comprehensive national examination evaluations, grading curve standardization, and 2020 COVID auto-pass documentation."
    }
  ],
  "inflation": [
    {
      "title": "Bangladesh Bureau of Statistics (BBS) Consumer Price Index (CPI) Monthly Bulletins",
      "url": "http://www.bbs.gov.bd/",
      "agency": "Bangladesh Bureau of Statistics (BBS)",
      "desc": "National, rural, and urban headline CPI inflation, food vs non-food breakdown, and base year re-basing reports."
    },
    {
      "title": "Bangladesh Bank Monthly Economic Trends & Inflation Reports",
      "url": "https://www.bb.org.bd/",
      "agency": "Monetary Policy Department, Bangladesh Bank",
      "desc": "Central bank monetary policy statements, core inflation monitoring, and macroeconomic forecast models."
    },
    {
      "title": "World Bank Open Data \u2014 Bangladesh Consumer Price Inflation",
      "url": "https://data.worldbank.org/country/bangladesh",
      "agency": "World Bank Group",
      "desc": "Verified annual inflation datasets compiled from official national statistical agencies and IMF surveillance."
    }
  ],
  "forex": [
    {
      "title": "Bangladesh Bank Historical Foreign Exchange Rates Bulletin (1971\u20132025)",
      "url": "https://www.bb.org.bd/",
      "agency": "Forex Reserve and Treasury Management Dept, Bangladesh Bank",
      "desc": "Official USD/BDT daily and annual weighted average exchange rates, crawling peg bands, and interbank transaction records."
    },
    {
      "title": "Foreign Exchange Policy Department (FEPD) Circulars",
      "url": "https://www.bb.org.bd/en/index.php/mediaroom/circular",
      "agency": "Bangladesh Bank",
      "desc": "Statutory central bank directives governing export proceeds repatriation, import LC margins, and remittance incentives."
    },
    {
      "title": "International Monetary Fund (IMF) Article IV Consultation Reports",
      "url": "https://www.imf.org/en/Countries/BGD",
      "agency": "International Monetary Fund (IMF)",
      "desc": "External balance assessment, real effective exchange rate (REER) analysis, and foreign reserve adequacy evaluations."
    }
  ],
  "gold": [
    {
      "title": "Bangladesh Jewellers Association (BAJUS) Statutory Price Gazette",
      "url": "https://bajus.org/",
      "agency": "Bangladesh Jewellers Association (BAJUS)",
      "desc": "Official daily bullion price notifications for 22K, 21K, 18K, and traditional method gold per bhori (11.664 grams)."
    },
    {
      "title": "Ministry of Commerce National Gold Policy 2018 (\u09b8\u09cd\u09ac\u09b0\u09cd\u09a3 \u09a8\u09c0\u09a4\u09bf\u09ae\u09be\u09b2\u09be \u09e8\u09e6\u09e7\u09ee)",
      "url": "https://mincom.gov.bd/",
      "agency": "Ministry of Commerce",
      "desc": "National statutory policy regulating commercial gold import licenses, bullion refining, and hallmarking standards."
    },
    {
      "title": "NBR Baggage Rules Gazette (Gold Inflow Allowances)",
      "url": "https://customs.gov.bd/",
      "agency": "Bangladesh Customs, NBR",
      "desc": "Customs duty allowances and tax slabs for gold bars and ornaments carried by incoming international air passengers."
    }
  ],
  "energy": [
    {
      "title": "Bangladesh Petroleum Corporation (BPC) Gazette Price Notifications",
      "url": "http://www.bpc.gov.bd/",
      "agency": "Bangladesh Petroleum Corporation (BPC)",
      "desc": "Gazetted retail prices for Diesel, Octane, Petrol, and Kerosene adjusted under the automated monthly fuel formula."
    },
    {
      "title": "Energy and Mineral Resources Division Automated Fuel Pricing Guidelines",
      "url": "http://www.emrd.gov.bd/",
      "agency": "Ministry of Power, Energy & Mineral Resources",
      "desc": "International benchmark parity formula linking domestic fuel tariffs to mean Platts Singapore spot prices."
    },
    {
      "title": "Bangladesh Energy Regulatory Commission (BERC) LPG Pricing Orders",
      "url": "http://www.berc.org.bd/",
      "agency": "BERC",
      "desc": "Monthly statutory maximum retail price notifications for 12kg private autogas and residential bottled LPG cylinders."
    }
  ],
  "rickshaw": [
    {
      "title": "Dhaka Transport Coordination Authority (DTCA) Urban Transport Master Plan",
      "url": "http://www.dtca.gov.bd/",
      "agency": "Dhaka Transport Coordination Authority (DTCA)",
      "desc": "Non-motorized transport mode share surveys, last-mile feeder mobility data, and commuter expenditure studies."
    },
    {
      "title": "BUET Urban and Regional Planning (URP) Cycle Rickshaw Studies",
      "url": "https://urp.buet.ac.bd/",
      "agency": "Department of URP, BUET",
      "desc": "Empirical transport surveys documenting Dhaka rickshaw fare inflation, traffic velocity impact, and fleet economics."
    },
    {
      "title": "Dhaka South & North City Corporations Rickshaw Registration Archives",
      "url": "http://www.dscc.gov.bd/",
      "agency": "Local Government Division",
      "desc": "Licensed rickshaw quotas, designated non-motorized lane restrictions, and street tariff enforcement drives."
    }
  ],
  "fish-index": [
    {
      "title": "Department of Fisheries (DoF) Annual National Fish Harvest Reports",
      "url": "http://www.fisheries.gov.bd/",
      "agency": "Department of Fisheries (DoF)",
      "desc": "Padma, Meghna, and coastal marine Hilsa (\u0987\u09b2\u09bf\u09b6) annual catch statistics, seasonal ban enforcement, and sanctuary metrics."
    },
    {
      "title": "Bangladesh Fisheries Research Institute (BFRI) Hilsa Research Center",
      "url": "http://www.bfri.gov.bd/",
      "agency": "BFRI Riverine Station, Chandpur",
      "desc": "Scientific evaluations of Hilsa breeding biology, juvenile Jatka protection impact, and riverine ecosystem health."
    },
    {
      "title": "Department of Agricultural Marketing (DAM) Daily Fish Wholesale Bulletins",
      "url": "http://www.dam.gov.bd/",
      "agency": "DAM, Ministry of Agriculture",
      "desc": "Daily wholesale and retail market prices for 1kg+ Hilsa and Rui across Karwan Bazar and Jatrabari fish wholesale hubs."
    }
  ],
  "transit": [
    {
      "title": "Dhaka Mass Transit Company Limited (DMTCL) MRT Line-6 Official Tariff",
      "url": "https://dmtcl.gov.bd/",
      "agency": "Dhaka Mass Transit Company Limited (DMTCL)",
      "desc": "Official gazetted station-to-station fare matrix (Uttara North to Motijheel), Rapid Pass discounts, and ridership stats."
    },
    {
      "title": "Road Transport and Highways Division (RTHD) Mass Transit Policies",
      "url": "http://www.rthd.gov.bd/",
      "agency": "Ministry of Road Transport and Bridges",
      "desc": "National Strategic Transport Plan (STP) progress reviews covering MRT Lines 1, 2, 4, 5, and 6 network topology."
    },
    {
      "title": "Dhaka Elevated Expressway Project Directorate",
      "url": "http://bba.gov.bd/",
      "agency": "Bangladesh Bridge Authority (BBA)",
      "desc": "Expressway toll rates, vehicle volume tallies, and airport-to-Farmgate commute travel time savings."
    }
  ],
  "remittance": [
    {
      "title": "Bangladesh Bank Inflow of Wage Earners' Remittance Monthly Statistics",
      "url": "https://www.bb.org.bd/",
      "agency": "Statistics Department, Bangladesh Bank",
      "desc": "Official monthly remittance inflows by country of origin (Saudi Arabia, UAE, USA, UK, Kuwait) and banking channel."
    },
    {
      "title": "Bureau of Manpower, Employment and Training (BMET) Overseas Migration Records",
      "url": "http://www.bmet.gov.bd/",
      "agency": "Ministry of Expatriates' Welfare and Overseas Employment",
      "desc": "Annual overseas labor deployment statistics, skill classification (skilled, semi-skilled, professional), and clearance records."
    },
    {
      "title": "International Monetary Fund (IMF) Balance of Payments Manual 6th Edition (BPM6)",
      "url": "https://www.imf.org/",
      "agency": "International Monetary Fund (IMF)",
      "desc": "Standardized accounting framework for gross international reserves and net usable foreign currency liquidity."
    }
  ],
  "geography": [
    {
      "title": "Local Government Division (LGD) Administrative Units Directory",
      "url": "http://www.lgd.gov.bd/",
      "agency": "Ministry of Local Government, Rural Development and Co-operatives",
      "desc": "Official gazette notifications establishing the 8 administrative divisions, 64 districts, and 494 upazilas."
    },
    {
      "title": "Bangladesh Post Office Official Postcode Directory (1,349 Postal Codes)",
      "url": "http://www.bdpost.gov.bd/",
      "agency": "Directorate General of Bangladesh Post Office",
      "desc": "National postal code directory mapping every head post office, sub-post office, and rural branch across Bangladesh."
    },
    {
      "title": "BBS Geocode and National Geographic Information System (GIS) Directory",
      "url": "http://www.bbs.gov.bd/",
      "agency": "Bangladesh Bureau of Statistics",
      "desc": "Standardized administrative geocodes utilized across all national population censuses and survey registries."
    }
  ],
  "banking": [
    {
      "title": "Bangladesh Bank Payment Systems Department (BEFTN / RTGS Routing Matrix)",
      "url": "https://www.bb.org.bd/",
      "agency": "Payment Systems Department, Bangladesh Bank",
      "desc": "National directory of 11,426 bank branches, 9-digit BEFTN routing numbers, SWIFT BIC codes, and RTGS clearance rules."
    },
    {
      "title": "Banking Regulation and Policy Department (BRPD) Scheduled Bank Directory",
      "url": "https://www.bb.org.bd/",
      "agency": "BRPD, Bangladesh Bank",
      "desc": "Official schedules of licensed state-owned, private commercial, Islamic, and foreign commercial banks operating in Bangladesh."
    },
    {
      "title": "Credit Information Bureau (CIB) Public Access Guidelines",
      "url": "https://www.bb.org.bd/",
      "agency": "Bangladesh Bank",
      "desc": "CIB credit history reporting rules, default loan recovery guidelines, and online credit report issuance."
    }
  ],
  "laws": [
    {
      "title": "Laws of Bangladesh (BDLaws) Official Chronological Index",
      "url": "http://bdlaws.minlaw.gov.bd/",
      "agency": "Legislative and Parliamentary Affairs Division",
      "desc": "Official state repository containing 1,489 legal statutes, presidential orders, constitutional amendments, and ordinances from 1836 to present."
    },
    {
      "title": "Bangladesh Government Press (BG Press) Official Gazettes",
      "url": "http://www.dpp.gov.bd/bgpress/",
      "agency": "Department of Printing and Publications",
      "desc": "Authentic legal gazette publications, statutory regulatory orders (SROs), and parliamentary bills."
    },
    {
      "title": "Supreme Court of Bangladesh Judgment Archives & Legal Citations",
      "url": "http://www.supremecourt.gov.bd/",
      "agency": "Supreme Court of Bangladesh",
      "desc": "Appellate Division and High Court Division law reports (BLD, DLR) and constitutional jurisprudence citations."
    }
  ],
  "stocks": [
    {
      "title": "Dhaka Stock Exchange (DSE) Daily Trade Statistics & Market Bulletins",
      "url": "https://www.dsebd.org/",
      "agency": "Dhaka Stock Exchange PLC",
      "desc": "DSEX benchmark index daily values, equity turnover, P/E ratios, market capitalization, and Shariah Index (DSES) listings."
    },
    {
      "title": "Bangladesh Securities and Exchange Commission (BSEC) Regulatory Filings",
      "url": "https://sec.gov.bd/",
      "agency": "BSEC",
      "desc": "Capital market regulatory directives, IPO approval gazettes, corporate governance codes, and insider trading watch."
    },
    {
      "title": "Central Depository Bangladesh Limited (CDBL) Demat Share Registry",
      "url": "https://www.cdbl.com.bd/",
      "agency": "CDBL",
      "desc": "Beneficiary Owner (BO) account statistics, electronic share custody balances, and automated settlement records."
    }
  ],
  "commodities": [
    {
      "title": "Department of Agricultural Marketing (DAM) Daily Market Prices",
      "url": "http://www.dam.gov.bd/",
      "agency": "Department of Agricultural Marketing (DAM)",
      "desc": "Daily wholesale and retail market prices for 40+ essential commodities across 64 districts (rice, lentils, onion, egg, oil, beef)."
    },
    {
      "title": "Trading Corporation of Bangladesh (TCB) Daily Essential Commodities Pricing",
      "url": "http://www.tcb.gov.bd/",
      "agency": "Trading Corporation of Bangladesh (TCB)",
      "desc": "Truck-sale open market sales (OMS) subsidized commodity rates and national price buffer stock audits."
    },
    {
      "title": "Directorate of National Consumer Rights Protection (DNCRP)",
      "url": "http://www.dncrp.gov.bd/",
      "agency": "Ministry of Commerce",
      "desc": "Consumer rights enforcement market raid bulletins, price tampering fines, and fair market monitoring reports."
    }
  ],
  "purchasing-power": [
    {
      "title": "BBS National Accounts & Purchasing Power Parity (PPP) Indicators",
      "url": "http://www.bbs.gov.bd/",
      "agency": "Bangladesh Bureau of Statistics",
      "desc": "Historical purchasing power erosion data, inflation-adjusted basket costs, and 50-year household expenditure benchmarks."
    },
    {
      "title": "Department of Livestock Services (DLS) Poultry & Egg Market Reports",
      "url": "http://www.dls.gov.bd/",
      "agency": "Ministry of Fisheries and Livestock",
      "desc": "Commercial broiler farm production figures, layer hen egg supply counts, and hatchery price surveys."
    },
    {
      "title": "Food Planning and Monitoring Unit (FPMU) Food Security Bulletins",
      "url": "http://www.fpmu.gov.bd/",
      "agency": "Ministry of Food",
      "desc": "National calorie intake affordability surveys and real purchasing power evaluations for urban working families."
    }
  ],
  "bcs": [
    {
      "title": "Bangladesh Public Service Commission (BPSC) Annual Reports & Cadre Circulars",
      "url": "http://www.bpsc.gov.bd/",
      "agency": "Bangladesh Public Service Commission (BPSC)",
      "desc": "Official BCS exam applicant statistics (35th to 46th BCS), preliminary attendance, written examination curves, and final cadre recommendation gazettes."
    },
    {
      "title": "Ministry of Public Administration (MOPA) Civil Service Cadre Schedules",
      "url": "https://mopa.gov.bd/",
      "agency": "Ministry of Public Administration",
      "desc": "Cadre allocation circulars, BCS (Administration/Police/Foreign Affairs) sanctioned posts, and civil service cadre reform reports."
    },
    {
      "title": "Bangladesh Government Press Gazette of BCS Appointments",
      "url": "http://www.dpp.gov.bd/bgpress/",
      "agency": "BG Press",
      "desc": "Official gazetted appointment orders for cadre officers recommended by BPSC."
    }
  ],
  "bachelor": [
    {
      "title": "BBS Household Income and Expenditure Survey (HIES) Domestic Help Wage Component",
      "url": "http://www.bbs.gov.bd/",
      "agency": "Bangladesh Bureau of Statistics (BBS)",
      "desc": "Official wage trends for urban domestic workers, cook charges (\u0996\u09be\u09b2\u09be/\u09ac\u09c1\u09df\u09be), and household servant expenditure inflation."
    },
    {
      "title": "Ministry of Labour Domestic Workers Protection and Welfare Policy 2015",
      "url": "http://www.mole.gov.bd/",
      "agency": "Ministry of Labour and Employment",
      "desc": "National policy establishing working hour caps, rest day standards, and minimum wage recommendations for domestic helps."
    },
    {
      "title": "Dhaka Metropolitan Mess & Bachelor Housing To-Let Registry",
      "url": "https://bangladesh.gov.bd/",
      "agency": "Dhaka City Corporation Housing Division",
      "desc": "Sublet rental benchmarks, bachelor tenant police verification rules, and student mess contracts."
    }
  ],
  "cng": [
    {
      "title": "BRTA Gazetted Auto-Rickshaw Meter Tariff Revisions",
      "url": "http://www.brta.gov.bd/",
      "agency": "Bangladesh Road Transport Authority (BRTA)",
      "desc": "Official gazetted base fares (\u09f340 for first 2 km, \u09f312/km thereafter) and waiting charge rules for four-stroke CNG auto-rickshaws."
    },
    {
      "title": "Dhaka Metropolitan Police (DMP) Traffic Division Meter Enforcement Bulletins",
      "url": "http://www.dmp.gov.bd/",
      "agency": "DMP Traffic Division",
      "desc": "Special mobile court drive reports on CNG meter refusal ('\u09af\u09be\u09ae\u09c1 \u09a8\u09be'), street contract fines, and vehicle impounds."
    },
    {
      "title": "Rupantarita Prakritik Gas Company Limited (RPGCL)",
      "url": "http://www.rpgcl.org.bd/",
      "agency": "Petrobangla & RPGCL",
      "desc": "Commercial CNG gas conversion cylinder standards, filling station tariffs, and vehicle conversion rules."
    }
  ],
  "biryani": [
    {
      "title": "Puran Dhaka Historical Food Heritage Registry (Nazira Bazar & Chawkbazar)",
      "url": "https://bangladesh.gov.bd/",
      "agency": "Dhaka South City Corporation Trade License Archive",
      "desc": "Centuries-old culinary archives covering Haji Biryani (est. 1939), Nanna Biryani, and Borhani traditional preparation standards."
    },
    {
      "title": "Bangladesh Food Safety Authority (BFSA) Mobile Court Restaurant Audits",
      "url": "http://www.bfsa.gov.bd/",
      "agency": "Ministry of Food",
      "desc": "Hygiene inspection reports, mustard oil purity tests, and food adulteration monitoring across Old Dhaka eateries."
    },
    {
      "title": "Department of Agricultural Marketing (DAM) Mutton & Basmati Benchmarks",
      "url": "http://www.dam.gov.bd/",
      "agency": "Ministry of Agriculture",
      "desc": "Daily trade prices for mustard oil, Chinigura aromatic rice, sour curd, and raw mutton wholesale cuts."
    }
  ],
  "loadshedding": [
    {
      "title": "Bangladesh Power Development Board (BPDB) Daily Generation & Outage Reports",
      "url": "http://www.bpdb.gov.bd/",
      "agency": "BPDB, Ministry of Power, Energy & Mineral Resources",
      "desc": "National daily electricity generation logs, peak demand deficit records, and historical load-shedding hours (2000\u20132025)."
    },
    {
      "title": "Power Division National Energy Management Dashboard",
      "url": "https://powerdivision.gov.bd/",
      "agency": "Power Division",
      "desc": "Transmission loss statistics, installed plant capacity vs derated capability, and summer peak demand forecasts."
    },
    {
      "title": "Dhaka Power Distribution Company (DPDC) Feeder Outage Schedules",
      "url": "https://dpdc.org.bd/",
      "agency": "DPDC",
      "desc": "Metropolitan feeder substation rotation schedules, transformer maintenance interruptions, and customer grievance logs."
    }
  ],
  "localbus": [
    {
      "title": "BRTA Gazetted Fare Revisions for Dhaka Metropolitan Local Buses",
      "url": "http://www.brta.gov.bd/",
      "agency": "Bangladesh Road Transport Authority (BRTA)",
      "desc": "Statutory minimum base fares (\u09f310), per-kilometer bus fare rate charts, and student concession (half-pass) gazettes."
    },
    {
      "title": "Dhaka Transport Coordination Authority (DTCA) Bus Route Rationalization (BRR)",
      "url": "http://www.dtca.gov.bd/",
      "agency": "DTCA",
      "desc": "Nagar Paribahan pilot route operations, franchise bus integration, and private bus fleet restructuring studies."
    },
    {
      "title": "Passenger Welfare Association of Bangladesh (\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6 \u09af\u09be\u09a4\u09cd\u09b0\u09c0 \u0995\u09b2\u09cd\u09af\u09be\u09a3 \u09b8\u09ae\u09bf\u09a4\u09bf)",
      "url": "https://bangladesh.gov.bd/",
      "agency": "National Consumer Welfare Association",
      "desc": "Annual transit fare extortion reports, road accident statistics, and passenger service quality surveys."
    }
  ],
  "freshers": [
    {
      "title": "Bangladesh Association of Software and Information Services (BASIS) Salary Surveys",
      "url": "https://basis.org.bd/",
      "agency": "BASIS",
      "desc": "Compensation and benefits benchmarking for junior software engineers, QA analysts, and tech startup talent in Dhaka."
    },
    {
      "title": "BBS Labour Force Survey (LFS) Youth Employment and Wage Data",
      "url": "http://www.bbs.gov.bd/",
      "agency": "Bangladesh Bureau of Statistics",
      "desc": "Graduate unemployment ratios, starting entry-level salaries, and real wage inflation adjustments across service sectors."
    },
    {
      "title": "Bangladesh Institute of Development Studies (BIDS) Educated Youth Unemployment",
      "url": "https://bids.org.bd/",
      "agency": "BIDS",
      "desc": "Empirical studies documenting university graduate underemployment, skill-market mismatch, and fresher salary stagnation."
    }
  ],
  "bpl": [
    {
      "title": "Bangladesh Cricket Board (BCB) BPL Governing Council Official Circulars",
      "url": "https://www.tigercricket.com.bd/",
      "agency": "Bangladesh Cricket Board (BCB)",
      "desc": "BPL franchise ownership agreements, franchise renaming approvals, player draft auction matrices, and tournament regulations."
    },
    {
      "title": "International Cricket Council (ICC) Anti-Corruption Unit (ACU) Bulletins",
      "url": "https://www.icc-cricket.com/",
      "agency": "ICC",
      "desc": "Global cricket governance, franchise code of conduct enforcement, and integrity compliance monitoring."
    },
    {
      "title": "Registrar of Joint Stock Companies (RJSC) Sports Franchise Corporate Filings",
      "url": "http://www.roc.gov.bd/",
      "agency": "RJSC, Ministry of Commerce",
      "desc": "Incorporation documents and ownership structures for commercial cricket franchises operating in Bangladesh."
    }
  ],
  "fuchka": [
    {
      "title": "Department of Agricultural Marketing (DAM) Chickpea, Spices & Tamarind Pricing",
      "url": "http://www.dam.gov.bd/",
      "agency": "Department of Agricultural Marketing (DAM)",
      "desc": "Daily wholesale benchmarks for Dabli chickpea (\u09a1\u09be\u09ac\u09b2\u09bf), chili powder, cumin, and tamarind across Karwan Bazar."
    },
    {
      "title": "Bangladesh Restaurant Owners Association (\u09b0\u09c7\u09b8\u09cd\u09a4\u09cb\u09b0\u09be\u0981 \u09ae\u09be\u09b2\u09bf\u0995 \u09b8\u09ae\u09bf\u09a4\u09bf)",
      "url": "https://bangladesh.gov.bd/",
      "agency": "National Restaurant Industry Association",
      "desc": "Informal fast food and street snack cost inflation surveys across Dhaka University TSC, Dhanmondi Lake, and Bailey Road."
    },
    {
      "title": "BBS Consumer Price Index (CPI) Street Food & Eating Out Group",
      "url": "http://www.bbs.gov.bd/",
      "agency": "Bangladesh Bureau of Statistics",
      "desc": "Ten-year price tracking for prepared snacks, cooked street food items, and tea-stall refreshments."
    }
  ],
  "traffic": [
    {
      "title": "BUET Accident Research Institute (ARI) & Urban Congestion Studies",
      "url": "http://ari.buet.ac.bd/",
      "agency": "BUET ARI",
      "desc": "Empirical evaluations documenting Dhaka commute speeds dropping to 4.8 km/h and economic productivity losses."
    },
    {
      "title": "Dhaka Transport Coordination Authority (DTCA) Strategic Transport Plan (STP)",
      "url": "http://www.dtca.gov.bd/",
      "agency": "DTCA",
      "desc": "Urban corridor traffic counts, intersection bottleneck mapping, and travel time surveys across Airport-Farmgate-Motijheel."
    },
    {
      "title": "World Bank Dhaka Urban Transport Resilience Project",
      "url": "https://data.worldbank.org/country/bangladesh",
      "agency": "World Bank Group",
      "desc": "Studies on Dhaka congestion costing an estimated 3.2 million working hours lost daily and air quality impacts."
    }
  ],
  "jaljot": [
    {
      "title": "Dhaka Water Supply and Sewerage Authority (DWASA) Storm Water Drainage Directorate",
      "url": "http://www.dwasa.org.bd/",
      "agency": "Dhaka WASA",
      "desc": "Drainage master plan reports, storm water pump station operations at Kallyanpur and Rampura, and canal restoration data."
    },
    {
      "title": "Bangladesh Meteorological Department (BMD) Heavy Monsoon Rainfall Bulletins",
      "url": "http://www.bmd.gov.bd/",
      "agency": "Ministry of Defence",
      "desc": "Daily precipitation records, monsoon storm warnings, and extreme rain events (e.g. 100mm+ within 3 hours in Dhaka)."
    },
    {
      "title": "Center for Environmental and Geographic Information Services (CEGIS) Waterlogging Inundation Maps",
      "url": "http://www.cegisbd.com/",
      "agency": "CEGIS, Ministry of Water Resources",
      "desc": "Geospatial satellite mapping of recurring flood waterlogging spots in Mirpur-10, Shantinagar, Kazipara, and Karwan Bazar."
    }
  ],
  "rmg": [
    {
      "title": "Bangladesh Garment Manufacturers and Exporters Association (BGMEA) Trade Statistics",
      "url": "https://www.bgmea.com.bd/",
      "agency": "BGMEA",
      "desc": "Apparel export earnings ($32 Million in 1984 to $47.1 Billion in 2024), woven vs knitwear breakdown, and export destinations."
    },
    {
      "title": "Export Promotion Bureau (EPB) National Export Performance Bulletins",
      "url": "http://www.epb.gov.bd/",
      "agency": "Ministry of Commerce",
      "desc": "Official monthly export statistics confirming RMG accounting for over 84% of total Bangladesh merchandise exports."
    },
    {
      "title": "National Minimum Wage Board RMG Gazette (1994 to 2023)",
      "url": "http://www.mole.gov.bd/",
      "agency": "Ministry of Labour and Employment",
      "desc": "Statutory wage board gazette notifications setting minimum garment worker wages from \u09f3930 (1994) to \u09f312,500 (2023)."
    }
  ],
  "cyclones": [
    {
      "title": "Disaster Management Bureau (DMB) Historical Tropical Cyclone Bulletins",
      "url": "http://www.modmr.gov.bd/",
      "agency": "Ministry of Disaster Management and Relief",
      "desc": "Comprehensive casualty archives: 1970 Bhola (300,000+ deaths), 1991 Cyclone 02B (138,000 deaths), Sidr 2007 (3,406 deaths), Remal 2024."
    },
    {
      "title": "Cyclone Preparedness Programme (CPP) Coastal Cyclone Shelter Network",
      "url": "http://www.cpp.gov.bd/",
      "agency": "Ministry of Disaster Management & Bangladesh Red Crescent Society",
      "desc": "Official network of 4,000+ multipurpose coastal cyclone shelters and early warning flag signal protocols."
    },
    {
      "title": "Bangladesh Red Crescent Society (BDRCS) Disaster Response Archives",
      "url": "https://bdrcs.org/",
      "agency": "BDRCS",
      "desc": "Emergency humanitarian relief deployments, coastal volunteer networks, and resilience documentation."
    }
  ],
  "heritage": [
    {
      "title": "Department of Archaeology (DOA) National Protected Monuments Registry",
      "url": "http://www.archaeology.gov.bd/",
      "agency": "Ministry of Cultural Affairs",
      "desc": "Official gazettes protecting 500+ national archaeological monuments across Paharpur, Mahasthangarh, Lalbagh Fort, and Bagerhat."
    },
    {
      "title": "UNESCO World Heritage Centre \u2014 Bangladesh Inscriptions",
      "url": "https://whc.unesco.org/en/statesparties/bd",
      "agency": "UNESCO",
      "desc": "Official UNESCO citations for the Historic Mosque City of Bagerhat, Somapura Mahavihara, and the Sundarbans."
    },
    {
      "title": "Bangladesh National Commission for UNESCO (BNCU)",
      "url": "http://www.bncu.gov.bd/",
      "agency": "Ministry of Education",
      "desc": "Documentation on intangible cultural heritage (Mangal Shobhajatra, Jamdani weaving, Shital Pati, Rickshaw Art)."
    }
  ],
  "agriculture": [
    {
      "title": "Department of Agricultural Extension (DAE) Foodgrain Production Bulletins",
      "url": "http://www.dae.gov.bd/",
      "agency": "Ministry of Agriculture",
      "desc": "Annual Aus, Aman, and Boro rice harvests (10.6M metric tons in 1971 to 40.3M tons in 2024), potato yields, and vegetable production."
    },
    {
      "title": "Bangladesh Rice Research Institute (BRRI) High-Yielding Variety Catalog",
      "url": "http://www.brri.gov.bd/",
      "agency": "BRRI",
      "desc": "Scientific development and release of 100+ climate-resilient, zinc-enriched, and salinity-tolerant rice varieties."
    },
    {
      "title": "Food Planning and Monitoring Unit (FPMU) National Food Situation Reports",
      "url": "http://www.fpmu.gov.bd/",
      "agency": "Ministry of Food",
      "desc": "Public food distribution system (PFDS) stock reserves, rice import requirements, and national food grain balance sheets."
    }
  ],
  "megaprojects": [
    {
      "title": "Implementation Monitoring and Evaluation Division (IMED) Fast-Track Reviews",
      "url": "http://www.imed.gov.bd/",
      "agency": "Ministry of Planning",
      "desc": "Official physical and financial progress evaluations for Padma Bridge, Rooppur Nuclear Power Plant, Matarbari Deep Sea Port, and Metro Rail."
    },
    {
      "title": "Economic Relations Division (ERD) Mega Infrastructure Financing Reports",
      "url": "https://erd.gov.bd/",
      "agency": "Ministry of Finance",
      "desc": "Foreign bilateral and multilateral development loans from JICA, Asian Development Bank, World Bank, and Rosatom."
    },
    {
      "title": "Bangladesh Bridge Authority (BBA) Mega Infrastructure Project Records",
      "url": "http://bba.gov.bd/",
      "agency": "BBA, Ministry of Road Transport and Bridges",
      "desc": "Karnaphuli Bangabandhu Tunnel, Padma Multipurpose Bridge, and Dhaka Elevated Expressway construction archives."
    }
  ],
  "cricket": [
    {
      "title": "Bangladesh Cricket Board (BCB) Official Match Records & Scorecards",
      "url": "https://www.tigercricket.com.bd/",
      "agency": "Bangladesh Cricket Board (BCB)",
      "desc": "Official international match archives, Test status milestones (2000), ICC Champions Trophy victories, and player statistics."
    },
    {
      "title": "International Cricket Council (ICC) Official Team Rankings & Records",
      "url": "https://www.icc-cricket.com/",
      "agency": "International Cricket Council (ICC)",
      "desc": "Verified ICC World Cup match scorecards, World Test Championship fixtures, and global player rating indices."
    },
    {
      "title": "ESPNcricinfo Bangladesh Historical Database",
      "url": "https://www.espncricinfo.com/team/bangladesh-25",
      "agency": "ESPNcricinfo Statsguru",
      "desc": "Historical ball-by-ball archives, Cardiff 2005 vs Australia, 2007 World Cup vs India, and partnership records."
    }
  ],
  "demographics": [
    {
      "title": "BBS Population and Housing Census 2022 National Report",
      "url": "http://www.bbs.gov.bd/",
      "agency": "Bangladesh Bureau of Statistics (BBS)",
      "desc": "Official census counting 169.8 million population, 74.8 years life expectancy, 2.05 total fertility rate, and 74.66% literacy."
    },
    {
      "title": "United Nations Population Division (UN DESA) World Population Prospects",
      "url": "https://population.un.org/",
      "agency": "United Nations",
      "desc": "Fifty-year demographic transition models documenting Bangladesh infant mortality plunge and youth demographic dividend."
    },
    {
      "title": "National Institute of Population Research and Training (NIPORT)",
      "url": "http://www.niport.gov.bd/",
      "agency": "Ministry of Health and Family Welfare",
      "desc": "Bangladesh Demographic and Health Survey (BDHS) documenting family planning contraceptive prevalence and child health."
    }
  ],
  "rivers": [
    {
      "title": "Joint Rivers Commission Bangladesh (JRCB) Transboundary Rivers Directory",
      "url": "http://www.jrcb.gov.bd/",
      "agency": "Ministry of Water Resources",
      "desc": "Official bilateral treaty archives governing the 57 transboundary rivers (54 shared with India, 3 with Myanmar), including the 1996 Ganges Water Treaty."
    },
    {
      "title": "Bangladesh Water Development Board (BWDB) Hydrology Bulletins",
      "url": "http://www.bwdb.gov.bd/",
      "agency": "BWDB",
      "desc": "Real-time water level stations across Padma, Jamuna, Meghna, and Teesta, flood forecasting warnings, and river discharge data."
    },
    {
      "title": "River and Delta Research Center (RDRC) National River Survey",
      "url": "https://bangladesh.gov.bd/",
      "agency": "National Water Resources Research Guild",
      "desc": "National river encroachment maps, pollution indices for Buriganga and Turag, and river morphometry studies."
    }
  ],
  "grid": [
    {
      "title": "Bangladesh Power Development Board (BPDB) Annual System Operations Reports",
      "url": "http://www.bpdb.gov.bd/",
      "agency": "BPDB, Ministry of Power, Energy & Mineral Resources",
      "desc": "Installed national generation capacity expansion (200MW in 1971 to 27,000+ MW in 2024), fuel mix (gas, coal, furnace oil, solar), and plant availability."
    },
    {
      "title": "Power Grid Company of Bangladesh (PGCB) Transmission Reliability Reports",
      "url": "http://www.pgcb.gov.bd/",
      "agency": "Power Grid Company of Bangladesh",
      "desc": "National 400kV and 230kV high-voltage transmission lines, substation transformer capacity, and cross-border HVDC interconnections."
    },
    {
      "title": "Sustainable and Renewable Energy Development Authority (SREDA)",
      "url": "http://www.sreda.gov.bd/",
      "agency": "Power Division",
      "desc": "National rooftop solar, utility-scale photovoltaic park generation tallies, and renewable energy targets."
    }
  ],
  "holidays": [
    {
      "title": "Ministry of Public Administration (MOPA) Official Gazette on Public Holidays",
      "url": "https://mopa.gov.bd/",
      "agency": "Ministry of Public Administration",
      "desc": "Official annual gazettes establishing National Days (Independence Day, Victory Day, Ekushey February) and religious festival holidays."
    },
    {
      "title": "Cabinet Division, Government of the People's Republic of Bangladesh",
      "url": "https://cabinet.gov.bd/",
      "agency": "Cabinet Division",
      "desc": "Cabinet meeting approvals for national executive holidays, optional holidays, and bank holiday schedules."
    },
    {
      "title": "Bangladesh Bank Scheduled Bank Holiday Circulars",
      "url": "https://www.bb.org.bd/",
      "agency": "Department of Off-Site Supervision, Bangladesh Bank",
      "desc": "Official banking closure dates, half-yearly and yearly closing schedules, and clearing house operation timelines."
    }
  ],
  "biye-index": [
    {
      "title": "Puran Dhaka Catering Association & Kacchi Biryani Guild",
      "url": "https://bangladesh.gov.bd/",
      "agency": "Dhaka City Corporation Catering Trade Registry",
      "desc": "Historical wedding catering rates per dega (\u09e7 \u09a6\u09c7\u0997 \u0995\u09be\u099a\u09cd\u099a\u09bf ~ \u09eb\u09e6-\u09ec\u09e6 \u099c\u09a8), Basmati rice benchmarks, and chef honorarium tariffs."
    },
    {
      "title": "Dhaka Metropolitan Meat Merchant Association (\u09a2\u09be\u0995\u09be \u09ae\u09be\u0982\u09b8 \u09ac\u09cd\u09af\u09ac\u09b8\u09be\u09df\u09c0 \u09b8\u09ae\u09bf\u09a4\u09bf)",
      "url": "http://www.dls.gov.bd/",
      "agency": "Department of Livestock Services",
      "desc": "Wholesale fresh mutton and beef supply prices across Kaptan Bazar and Gabtoli livestock slaughterhouses."
    },
    {
      "title": "Trading Corporation of Bangladesh (TCB) Edible Oil & Spices Market Prices",
      "url": "http://www.tcb.gov.bd/",
      "agency": "Ministry of Commerce",
      "desc": "Daily trade prices for pure mustard oil, ghee, cardamom, cinnamon, and saffron utilized in festive cooking."
    }
  ],
  "rent": [
    {
      "title": "Real Estate and Housing Association of Bangladesh (REHAB) Housing Market Reports",
      "url": "https://rehab-bd.org/",
      "agency": "REHAB",
      "desc": "Residential property market reports, average per-square-foot apartment sale prices, and rental yield surveys across Dhanmondi and Mirpur."
    },
    {
      "title": "Rajdhani Unnayan Kartripakkha (RAJUK) Detailed Area Plan (DAP 2022\u20132035)",
      "url": "http://www.rajuk.gov.bd/",
      "agency": "Ministry of Housing and Public Works",
      "desc": "Dhaka metropolitan zoning density rules, floor area ratios (FAR), and residential sector planning guidelines."
    },
    {
      "title": "BIDS Urban Household Rental Expenditure Survey",
      "url": "https://bids.org.bd/",
      "agency": "Bangladesh Institute of Development Studies",
      "desc": "Empirical studies showing middle-class families in Dhaka spending over 40%\u201355% of monthly income on housing rent."
    }
  ],
  "eid-transit": [
    {
      "title": "Bangladesh Bridge Authority (BBA) Padma Multipurpose Bridge Daily Toll Records",
      "url": "http://www.bba.gov.bd/",
      "agency": "Bangladesh Bridge Authority",
      "desc": "Official daily and peak Eid toll collection records (\u09f35.4+ Crore in single 24-hour periods), vehicle counts, and motorcycle lanes."
    },
    {
      "title": "Bangladesh Railway Passenger Operations & Eid Special Bulletins",
      "url": "http://www.railway.gov.bd/",
      "agency": "Ministry of Railways",
      "desc": "Eid holiday passenger advance ticket sales, 100% online quota allocation metrics, and intercity train punctuality audits."
    },
    {
      "title": "Bangladesh Inland Water Transport Authority (BIWTA) Launch Terminal Operations",
      "url": "http://www.biwta.gov.bd/",
      "agency": "BIWTA, Ministry of Shipping",
      "desc": "Sadarghat launch terminal passenger safety inspections, Barishal-Bhola coastal route schedules, and overload prevention."
    }
  ],
  "cha-index": [
    {
      "title": "Bangladesh Tea Board (BTB) Annual Tea Production Statistics",
      "url": "http://www.teaboard.gov.bd/",
      "agency": "Ministry of Commerce",
      "desc": "National tea harvest statistics across Sylhet and Sreemangal gardens, Chittagong Tea Auction average prices, and export figures."
    },
    {
      "title": "BBS Consumer Price Index (CPI) Milk, Sugar & Tea Basket",
      "url": "http://www.bbs.gov.bd/",
      "agency": "Bangladesh Bureau of Statistics",
      "desc": "Historical price tracking for condensed milk, liquid milk, packaged loose tea, and sugar from 2000 to 2025."
    },
    {
      "title": "Dhaka University Campus & Street Vendor Trade Archives",
      "url": "https://bangladesh.gov.bd/",
      "agency": "Dhaka City Street Commerce Registry",
      "desc": "Informal tong stall pricing records (\u09f32 in 2000 to \u09f312 in 2025) across TSC, Nilkhet, Shahbagh, and Farmgate."
    }
  ]
};

export const DEFAULT_PORTAL_REFERENCES: DataReference[] = [
  {
    "title": "National Web Portal of Bangladesh (\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6 \u099c\u09be\u09a4\u09c0\u09df \u09a4\u09a5\u09cd\u09af \u09ac\u09be\u09a4\u09be\u09df\u09a8)",
    "url": "https://bangladesh.gov.bd/",
    "agency": "Cabinet Division & a2i Programme",
    "desc": "Comprehensive national public data gateway connecting ministries, directorates, and statutory bodies across Bangladesh."
  },
  {
    "title": "Bangladesh Open Data Portal (data.gov.bd)",
    "url": "http://data.gov.bd/",
    "agency": "ICT Division & BCC",
    "desc": "Official government open data repository for machine-readable civic datasets and development indicators."
  },
  {
    "title": "Bangladesh Government Press (BG Press) Official Gazettes",
    "url": "http://www.dpp.gov.bd/bgpress/",
    "agency": "Department of Printing and Publications",
    "desc": "Authoritative gazette archive publishing national statutory regulatory orders, acts, and official appointments."
  }
];
