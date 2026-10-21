/**
 * Directorate General of Drug Administration (DGDA) Essential Drug Index
 * Curated directory of widely prescribed registered pharmaceuticals in Bangladesh
 * with Brand -> Generic substitution, Manufacturer, Dosage, and Official MRP.
 */

export interface MedicineItem {
  id: string;
  brand_name: string;
  generic_name: string;
  dosage_form: string;
  strength: string;
  manufacturer: string;
  price_bdt: number;
  pack_size: string;
  therapeutic_class: string;
  indications: string;
}

export const ESSENTIAL_MEDICINES: MedicineItem[] = [
  // Paracetamol
  { id: 'MED-001', brand_name: 'Napa', generic_name: 'Paracetamol', dosage_form: 'Tablet', strength: '500 mg', manufacturer: 'Beximco Pharmaceuticals Ltd.', price_bdt: 1.20, pack_size: '510 pcs', therapeutic_class: 'Analgesic & Antipyretic', indications: 'Fever, headache, body pain' },
  { id: 'MED-002', brand_name: 'Ace', generic_name: 'Paracetamol', dosage_form: 'Tablet', strength: '500 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 1.20, pack_size: '500 pcs', therapeutic_class: 'Analgesic & Antipyretic', indications: 'Fever, mild to moderate pain' },
  { id: 'MED-003', brand_name: 'Fast', generic_name: 'Paracetamol', dosage_form: 'Tablet', strength: '500 mg', manufacturer: 'The Acme Laboratories Ltd.', price_bdt: 1.20, pack_size: '500 pcs', therapeutic_class: 'Analgesic & Antipyretic', indications: 'Fever and pain relief' },
  { id: 'MED-004', brand_name: 'Renova', generic_name: 'Paracetamol', dosage_form: 'Tablet', strength: '500 mg', manufacturer: 'Opso Saline Ltd.', price_bdt: 1.20, pack_size: '500 pcs', therapeutic_class: 'Analgesic & Antipyretic', indications: 'Fever and analgesia' },
  { id: 'MED-005', brand_name: 'Napa Extra', generic_name: 'Paracetamol + Caffeine', dosage_form: 'Tablet', strength: '500 mg + 65 mg', manufacturer: 'Beximco Pharmaceuticals Ltd.', price_bdt: 2.50, pack_size: '200 pcs', therapeutic_class: 'Analgesic & Antipyretic', indications: 'Severe headache, migraine, toothache' },
  { id: 'MED-006', brand_name: 'Ace Plus', generic_name: 'Paracetamol + Caffeine', dosage_form: 'Tablet', strength: '500 mg + 65 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 2.50, pack_size: '200 pcs', therapeutic_class: 'Analgesic & Antipyretic', indications: 'Headache, migraine, fever' },
  { id: 'MED-007', brand_name: 'Napa Extend', generic_name: 'Paracetamol', dosage_form: 'XR Tablet', strength: '665 mg', manufacturer: 'Beximco Pharmaceuticals Ltd.', price_bdt: 2.00, pack_size: '100 pcs', therapeutic_class: 'Analgesic & Antipyretic', indications: 'Sustained 8-hour relief for muscle and joint pain' },
  { id: 'MED-008', brand_name: 'Napa Rapid', generic_name: 'Paracetamol (Actizorb technology)', dosage_form: 'Tablet', strength: '500 mg', manufacturer: 'Beximco Pharmaceuticals Ltd.', price_bdt: 1.75, pack_size: '100 pcs', therapeutic_class: 'Analgesic & Antipyretic', indications: 'Fast absorption fever and pain relief' },
  { id: 'MED-009', brand_name: 'Napa Syrup', generic_name: 'Paracetamol', dosage_form: 'Syrup', strength: '120 mg/5ml', manufacturer: 'Beximco Pharmaceuticals Ltd.', price_bdt: 35.00, pack_size: '60 ml bottle', therapeutic_class: 'Pediatric Analgesic', indications: 'Pediatric fever and immunization pain' },
  { id: 'MED-010', brand_name: 'Ace Drop', generic_name: 'Paracetamol', dosage_form: 'Paediatric Drops', strength: '80 mg/0.8ml', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 30.00, pack_size: '15 ml dropper', therapeutic_class: 'Pediatric Analgesic', indications: 'Infant fever and relief' },

  // Omeprazole (Anti-ulcerant)
  { id: 'MED-011', brand_name: 'Seclo 20', generic_name: 'Omeprazole', dosage_form: 'Capsule', strength: '20 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 6.00, pack_size: '100 pcs', therapeutic_class: 'Proton Pump Inhibitor (PPI)', indications: 'Gastric ulcer, GERD, hyperacidity' },
  { id: 'MED-012', brand_name: 'Seclo 40', generic_name: 'Omeprazole', dosage_form: 'Capsule', strength: '40 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 10.00, pack_size: '50 pcs', therapeutic_class: 'Proton Pump Inhibitor (PPI)', indications: 'Severe erosive esophagitis, Zollinger-Ellison' },
  { id: 'MED-013', brand_name: 'Losectil 20', generic_name: 'Omeprazole', dosage_form: 'Capsule', strength: '20 mg', manufacturer: 'Eskayef Pharmaceuticals Ltd. (SK+F)', price_bdt: 6.00, pack_size: '100 pcs', therapeutic_class: 'Proton Pump Inhibitor (PPI)', indications: 'Duodenal ulcer, acid reflux' },
  { id: 'MED-014', brand_name: 'Proceptin 20', generic_name: 'Omeprazole', dosage_form: 'Capsule', strength: '20 mg', manufacturer: 'Beximco Pharmaceuticals Ltd.', price_bdt: 6.00, pack_size: '100 pcs', therapeutic_class: 'Proton Pump Inhibitor (PPI)', indications: 'Peptic ulcer disease, heartburn' },
  { id: 'MED-015', brand_name: 'Omez 20', generic_name: 'Omeprazole', dosage_form: 'Capsule', strength: '20 mg', manufacturer: 'Incepta Pharmaceuticals Ltd.', price_bdt: 6.00, pack_size: '100 pcs', therapeutic_class: 'Proton Pump Inhibitor (PPI)', indications: 'GERD, dyspepsia, NSAID-induced ulcers' },
  { id: 'MED-016', brand_name: 'Lokit 20', generic_name: 'Omeprazole', dosage_form: 'Capsule', strength: '20 mg', manufacturer: 'Renata Limited', price_bdt: 6.00, pack_size: '100 pcs', therapeutic_class: 'Proton Pump Inhibitor (PPI)', indications: 'Acid suppression therapy' },

  // Esomeprazole
  { id: 'MED-017', brand_name: 'Maxpro 20', generic_name: 'Esomeprazole', dosage_form: 'Tablet', strength: '20 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 7.00, pack_size: '100 pcs', therapeutic_class: 'Proton Pump Inhibitor (PPI)', indications: 'Gastroesophageal reflux, erosive esophagitis' },
  { id: 'MED-018', brand_name: 'Maxpro 40', generic_name: 'Esomeprazole', dosage_form: 'Tablet', strength: '40 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 12.00, pack_size: '50 pcs', therapeutic_class: 'Proton Pump Inhibitor (PPI)', indications: 'Triple therapy H. pylori eradication' },
  { id: 'MED-019', brand_name: 'Sergel 20', generic_name: 'Esomeprazole', dosage_form: 'Tablet', strength: '20 mg', manufacturer: 'Incepta Pharmaceuticals Ltd.', price_bdt: 7.00, pack_size: '100 pcs', therapeutic_class: 'Proton Pump Inhibitor (PPI)', indications: 'Acid reflux and gastric ulceration' },
  { id: 'MED-020', brand_name: 'Nexum 20', generic_name: 'Esomeprazole', dosage_form: 'Tablet', strength: '20 mg', manufacturer: 'Beximco Pharmaceuticals Ltd.', price_bdt: 7.00, pack_size: '100 pcs', therapeutic_class: 'Proton Pump Inhibitor (PPI)', indications: 'Symptomatic gastroesophageal reflux' },
  { id: 'MED-021', brand_name: 'Opton 20', generic_name: 'Esomeprazole', dosage_form: 'Tablet', strength: '20 mg', manufacturer: 'Renata Limited', price_bdt: 7.00, pack_size: '100 pcs', therapeutic_class: 'Proton Pump Inhibitor (PPI)', indications: 'Peptic ulcer, reflux symptoms' },

  // Pantoprazole
  { id: 'MED-022', brand_name: 'Pantonix 20', generic_name: 'Pantoprazole', dosage_form: 'Tablet', strength: '20 mg', manufacturer: 'Incepta Pharmaceuticals Ltd.', price_bdt: 7.00, pack_size: '100 pcs', therapeutic_class: 'Proton Pump Inhibitor (PPI)', indications: 'Duodenal and gastric ulcers' },
  { id: 'MED-023', brand_name: 'Pantonix 40', generic_name: 'Pantoprazole', dosage_form: 'Tablet', strength: '40 mg', manufacturer: 'Incepta Pharmaceuticals Ltd.', price_bdt: 11.00, pack_size: '60 pcs', therapeutic_class: 'Proton Pump Inhibitor (PPI)', indications: 'Zollinger-Ellison syndrome, severe GERD' },
  { id: 'MED-024', brand_name: 'Trupan 20', generic_name: 'Pantoprazole', dosage_form: 'Tablet', strength: '20 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 7.00, pack_size: '100 pcs', therapeutic_class: 'Proton Pump Inhibitor (PPI)', indications: 'Acid reflux and ulcer prophylaxis' },
  { id: 'MED-025', brand_name: 'Protonix 20', generic_name: 'Pantoprazole', dosage_form: 'Tablet', strength: '20 mg', manufacturer: 'Beximco Pharmaceuticals Ltd.', price_bdt: 7.00, pack_size: '100 pcs', therapeutic_class: 'Proton Pump Inhibitor (PPI)', indications: 'Gastric acid hypersecretion' },

  // Montelukast (Asthma / Allergy)
  { id: 'MED-026', brand_name: 'Monas 10', generic_name: 'Montelukast', dosage_form: 'Tablet', strength: '10 mg', manufacturer: 'The Acme Laboratories Ltd.', price_bdt: 16.00, pack_size: '30 pcs', therapeutic_class: 'Leukotriene Receptor Antagonist', indications: 'Chronic asthma, allergic rhinitis' },
  { id: 'MED-027', brand_name: 'Monas 4', generic_name: 'Montelukast', dosage_form: 'Chewable Tablet', strength: '4 mg', manufacturer: 'The Acme Laboratories Ltd.', price_bdt: 7.00, pack_size: '30 pcs', therapeutic_class: 'Pediatric Asthma', indications: 'Pediatric allergic rhinitis and asthma' },
  { id: 'MED-028', brand_name: 'Odmon 10', generic_name: 'Montelukast', dosage_form: 'Tablet', strength: '10 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 16.00, pack_size: '30 pcs', therapeutic_class: 'Leukotriene Receptor Antagonist', indications: 'Asthma maintenance, seasonal allergies' },
  { id: 'MED-029', brand_name: 'Montene 10', generic_name: 'Montelukast', dosage_form: 'Tablet', strength: '10 mg', manufacturer: 'Incepta Pharmaceuticals Ltd.', price_bdt: 16.00, pack_size: '30 pcs', therapeutic_class: 'Leukotriene Receptor Antagonist', indications: 'Bronchial asthma prevention' },
  { id: 'MED-030', brand_name: 'Lumona 10', generic_name: 'Montelukast', dosage_form: 'Tablet', strength: '10 mg', manufacturer: 'Beximco Pharmaceuticals Ltd.', price_bdt: 16.00, pack_size: '30 pcs', therapeutic_class: 'Leukotriene Receptor Antagonist', indications: 'Allergic asthma and dust allergy' },

  // Antihistamines (Allergy / Sneezing / Itching)
  { id: 'MED-031', brand_name: 'Fexo 120', generic_name: 'Fexofenadine', dosage_form: 'Tablet', strength: '120 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 9.00, pack_size: '50 pcs', therapeutic_class: 'Non-sedating Antihistamine', indications: 'Seasonal allergic rhinitis, hay fever' },
  { id: 'MED-032', brand_name: 'Fexo 180', generic_name: 'Fexofenadine', dosage_form: 'Tablet', strength: '180 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 12.00, pack_size: '30 pcs', therapeutic_class: 'Non-sedating Antihistamine', indications: 'Chronic idiopathic urticaria, skin rashes' },
  { id: 'MED-033', brand_name: 'Fexofast 120', generic_name: 'Fexofenadine', dosage_form: 'Tablet', strength: '120 mg', manufacturer: 'Beximco Pharmaceuticals Ltd.', price_bdt: 9.00, pack_size: '50 pcs', therapeutic_class: 'Non-sedating Antihistamine', indications: 'Allergy symptoms without drowsiness' },
  { id: 'MED-034', brand_name: 'Alatrol', generic_name: 'Cetirizine Dihydrochloride', dosage_form: 'Tablet', strength: '10 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 3.50, pack_size: '100 pcs', therapeutic_class: 'Antihistamine', indications: 'Cold allergy, runny nose, itching' },
  { id: 'MED-035', brand_name: 'Atrizin', generic_name: 'Cetirizine Dihydrochloride', dosage_form: 'Tablet', strength: '10 mg', manufacturer: 'Beximco Pharmaceuticals Ltd.', price_bdt: 3.50, pack_size: '100 pcs', therapeutic_class: 'Antihistamine', indications: 'Allergic rhinitis, urticaria' },
  { id: 'MED-036', brand_name: 'Bilaxten 20', generic_name: 'Bilastine', dosage_form: 'Tablet', strength: '20 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 18.00, pack_size: '30 pcs', therapeutic_class: 'Modern Non-sedating Antihistamine', indications: 'Allergic rhino-conjunctivitis, hives' },
  { id: 'MED-037', brand_name: 'Bislat 20', generic_name: 'Bilastine', dosage_form: 'Tablet', strength: '20 mg', manufacturer: 'Incepta Pharmaceuticals Ltd.', price_bdt: 18.00, pack_size: '30 pcs', therapeutic_class: 'Modern Non-sedating Antihistamine', indications: 'Seasonal allergy, skin pruritus' },

  // Antibiotics
  { id: 'MED-038', brand_name: 'Zimax 500', generic_name: 'Azithromycin', dosage_form: 'Tablet', strength: '500 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 35.00, pack_size: '18 pcs', therapeutic_class: 'Macrolide Antibiotic', indications: 'Respiratory tract infections, throat infection' },
  { id: 'MED-039', brand_name: 'Azithral 500', generic_name: 'Azithromycin', dosage_form: 'Tablet', strength: '500 mg', manufacturer: 'Beximco Pharmaceuticals Ltd.', price_bdt: 35.00, pack_size: '18 pcs', therapeutic_class: 'Macrolide Antibiotic', indications: 'Bacterial sinusitis, bronchitis, skin infections' },
  { id: 'MED-040', brand_name: 'Tridosil 500', generic_name: 'Azithromycin', dosage_form: 'Tablet', strength: '500 mg', manufacturer: 'Incepta Pharmaceuticals Ltd.', price_bdt: 35.00, pack_size: '18 pcs', therapeutic_class: 'Macrolide Antibiotic', indications: 'Tonsillitis, pneumonia' },
  { id: 'MED-041', brand_name: 'Cef-3 200', generic_name: 'Cefixime', dosage_form: 'Capsule', strength: '200 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 40.00, pack_size: '14 pcs', therapeutic_class: '3rd Gen Cephalosporin Antibiotic', indications: 'Typhoid fever, UTI, otitis media' },
  { id: 'MED-042', brand_name: 'Cef-3 400', generic_name: 'Cefixime', dosage_form: 'Capsule', strength: '400 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 65.00, pack_size: '10 pcs', therapeutic_class: '3rd Gen Cephalosporin Antibiotic', indications: 'Complicated urinary infections, severe enteric fever' },
  { id: 'MED-043', brand_name: 'Trioclav 625', generic_name: 'Amoxicillin + Clavulanic Acid', dosage_form: 'Tablet', strength: '500 mg + 125 mg', manufacturer: 'Incepta Pharmaceuticals Ltd.', price_bdt: 38.00, pack_size: '18 pcs', therapeutic_class: 'Broad Spectrum Antibiotic', indications: 'Dental abscess, soft tissue infection, sinusitis' },
  { id: 'MED-044', brand_name: 'Moxacil 500', generic_name: 'Amoxicillin', dosage_form: 'Capsule', strength: '500 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 7.50, pack_size: '100 pcs', therapeutic_class: 'Penicillin Antibiotic', indications: 'Bacterial infections of ear, nose, throat' },
  { id: 'MED-045', brand_name: 'Ciprocin 500', generic_name: 'Ciprofloxacin', dosage_form: 'Tablet', strength: '500 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 15.00, pack_size: '50 pcs', therapeutic_class: 'Fluoroquinolone Antibiotic', indications: 'Infectious diarrhea, bone joint infections, UTI' },
  { id: 'MED-046', brand_name: 'Neofloxin 500', generic_name: 'Ciprofloxacin', dosage_form: 'Tablet', strength: '500 mg', manufacturer: 'Beximco Pharmaceuticals Ltd.', price_bdt: 15.00, pack_size: '50 pcs', therapeutic_class: 'Fluoroquinolone Antibiotic', indications: 'Bacterial enteritis, prostatitis' },
  { id: 'MED-047', brand_name: 'Filmet 400', generic_name: 'Metronidazole', dosage_form: 'Tablet', strength: '400 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 2.20, pack_size: '100 pcs', therapeutic_class: 'Antiprotozoal & Antibacterial', indications: 'Amoebiasis, giardiasis, dental infection' },
  { id: 'MED-048', brand_name: 'Amodis 400', generic_name: 'Metronidazole', dosage_form: 'Tablet', strength: '400 mg', manufacturer: 'Beximco Pharmaceuticals Ltd.', price_bdt: 2.20, pack_size: '100 pcs', therapeutic_class: 'Antiprotozoal & Antibacterial', indications: 'Intestinal amoebic dysentery' },

  // Antidiabetic (Diabetes Mellitus)
  { id: 'MED-049', brand_name: 'Comet 500', generic_name: 'Metformin Hydrochloride', dosage_form: 'Tablet', strength: '500 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 4.50, pack_size: '100 pcs', therapeutic_class: 'Biguanide Antidiabetic', indications: 'Type 2 Diabetes Mellitus first-line treatment' },
  { id: 'MED-050', brand_name: 'Comet 850', generic_name: 'Metformin Hydrochloride', dosage_form: 'Tablet', strength: '850 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 6.50, pack_size: '100 pcs', therapeutic_class: 'Biguanide Antidiabetic', indications: 'Type 2 Diabetes Mellitus glucose control' },
  { id: 'MED-051', brand_name: 'Metfo 500', generic_name: 'Metformin Hydrochloride', dosage_form: 'Tablet', strength: '500 mg', manufacturer: 'Beximco Pharmaceuticals Ltd.', price_bdt: 4.50, pack_size: '100 pcs', therapeutic_class: 'Biguanide Antidiabetic', indications: 'Insulin sensitization in Type 2 diabetes' },
  { id: 'MED-052', brand_name: 'Silnor 50', generic_name: 'Sitagliptin', dosage_form: 'Tablet', strength: '50 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 18.00, pack_size: '30 pcs', therapeutic_class: 'DPP-4 Inhibitor Antidiabetic', indications: 'Type 2 Diabetes post-prandial glycemic control' },
  { id: 'MED-053', brand_name: 'Emparol 10', generic_name: 'Empagliflozin', dosage_form: 'Tablet', strength: '10 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 28.00, pack_size: '30 pcs', therapeutic_class: 'SGLT2 Inhibitor Antidiabetic', indications: 'Type 2 Diabetes with cardiovascular benefit' },
  { id: 'MED-054', brand_name: 'G-Empa 10', generic_name: 'Empagliflozin', dosage_form: 'Tablet', strength: '10 mg', manufacturer: 'Incepta Pharmaceuticals Ltd.', price_bdt: 28.00, pack_size: '30 pcs', therapeutic_class: 'SGLT2 Inhibitor Antidiabetic', indications: 'Renal protection & glycemic management' },
  { id: 'MED-055', brand_name: 'Insulatard Penfill', generic_name: 'Isophane Insulin (NPH)', dosage_form: 'Cartridge / Injection', strength: '100 IU/ml (3ml)', manufacturer: 'Novo Nordisk / Eskayef', price_bdt: 480.00, pack_size: '5 penfills', therapeutic_class: 'Intermediate-acting Insulin', indications: 'Basal insulin requirement in diabetes' },
  { id: 'MED-056', brand_name: 'Mixtard 30 Penfill', generic_name: 'Biphasic Isophane Insulin', dosage_form: 'Cartridge / Injection', strength: '100 IU/ml (3ml)', manufacturer: 'Novo Nordisk / Eskayef', price_bdt: 480.00, pack_size: '5 penfills', therapeutic_class: 'Premixed Insulin', indications: 'Pre-mixed rapid and intermediate glycemic control' },

  // Antihypertensive & Cardiovascular
  { id: 'MED-057', brand_name: 'Camlosan 5', generic_name: 'Amlodipine', dosage_form: 'Tablet', strength: '5 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 5.00, pack_size: '100 pcs', therapeutic_class: 'Calcium Channel Blocker', indications: 'Essential hypertension, chronic stable angina' },
  { id: 'MED-058', brand_name: 'Amlocard 5', generic_name: 'Amlodipine', dosage_form: 'Tablet', strength: '5 mg', manufacturer: 'Beximco Pharmaceuticals Ltd.', price_bdt: 5.00, pack_size: '100 pcs', therapeutic_class: 'Calcium Channel Blocker', indications: 'High blood pressure management' },
  { id: 'MED-059', brand_name: 'Bizoran 5/20', generic_name: 'Amlodipine + Olmesartan', dosage_form: 'Tablet', strength: '5 mg + 20 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 12.00, pack_size: '30 pcs', therapeutic_class: 'Dual Antihypertensive', indications: 'Refractory hypertension blood pressure control' },
  { id: 'MED-060', brand_name: 'Osartil 50', generic_name: 'Losartan Potassium', dosage_form: 'Tablet', strength: '50 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 8.00, pack_size: '60 pcs', therapeutic_class: 'Angiotensin Receptor Blocker (ARB)', indications: 'Hypertension, diabetic nephropathy' },
  { id: 'MED-061', brand_name: 'Angilock 50', generic_name: 'Losartan Potassium', dosage_form: 'Tablet', strength: '50 mg', manufacturer: 'Incepta Pharmaceuticals Ltd.', price_bdt: 8.00, pack_size: '60 pcs', therapeutic_class: 'Angiotensin Receptor Blocker (ARB)', indications: 'Hypertension and stroke risk reduction' },
  { id: 'MED-062', brand_name: 'Telma 40', generic_name: 'Telmisartan', dosage_form: 'Tablet', strength: '40 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 10.00, pack_size: '30 pcs', therapeutic_class: 'Angiotensin Receptor Blocker (ARB)', indications: 'Cardiovascular risk reduction, hypertension' },
  { id: 'MED-063', brand_name: 'Arbitel 40', generic_name: 'Telmisartan', dosage_form: 'Tablet', strength: '40 mg', manufacturer: 'Beximco Pharmaceuticals Ltd.', price_bdt: 10.00, pack_size: '30 pcs', therapeutic_class: 'Angiotensin Receptor Blocker (ARB)', indications: 'Hypertension management' },
  { id: 'MED-064', brand_name: 'Lopirel 75', generic_name: 'Clopidogrel', dosage_form: 'Tablet', strength: '75 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 12.00, pack_size: '30 pcs', therapeutic_class: 'Antiplatelet', indications: 'Prevention of stroke, myocardial infarction, stent thrombosis' },
  { id: 'MED-065', brand_name: 'Plagrin 75', generic_name: 'Clopidogrel', dosage_form: 'Tablet', strength: '75 mg', manufacturer: 'Beximco Pharmaceuticals Ltd.', price_bdt: 12.00, pack_size: '30 pcs', therapeutic_class: 'Antiplatelet', indications: 'Atherothrombosis prevention' },

  // Statins (Cholesterol)
  { id: 'MED-066', brand_name: 'Rostar 10', generic_name: 'Rosuvastatin', dosage_form: 'Tablet', strength: '10 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 18.00, pack_size: '30 pcs', therapeutic_class: 'HMG-CoA Reductase Inhibitor', indications: 'Hypercholesterolemia, LDL reduction' },
  { id: 'MED-067', brand_name: 'Rovas 10', generic_name: 'Rosuvastatin', dosage_form: 'Tablet', strength: '10 mg', manufacturer: 'Beximco Pharmaceuticals Ltd.', price_bdt: 18.00, pack_size: '30 pcs', therapeutic_class: 'HMG-CoA Reductase Inhibitor', indications: 'Primary dyslipidemia, cardiovascular risk' },
  { id: 'MED-068', brand_name: 'Atova 10', generic_name: 'Atorvastatin', dosage_form: 'Tablet', strength: '10 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 14.00, pack_size: '30 pcs', therapeutic_class: 'HMG-CoA Reductase Inhibitor', indications: 'Elevated total cholesterol, prevention of CAD' },
  { id: 'MED-069', brand_name: 'Anzitor 10', generic_name: 'Atorvastatin', dosage_form: 'Tablet', strength: '10 mg', manufacturer: 'Beximco Pharmaceuticals Ltd.', price_bdt: 14.00, pack_size: '30 pcs', therapeutic_class: 'HMG-CoA Reductase Inhibitor', indications: 'Hyperlipidemia treatment' },

  // Antiemetics (Nausea & Motility)
  { id: 'MED-070', brand_name: 'Omidon 10', generic_name: 'Domperidone', dosage_form: 'Tablet', strength: '10 mg', manufacturer: 'Incepta Pharmaceuticals Ltd.', price_bdt: 3.50, pack_size: '100 pcs', therapeutic_class: 'Prokinetic & Antiemetic', indications: 'Nausea, vomiting, bloating, fullness' },
  { id: 'MED-071', brand_name: 'Motigut 10', generic_name: 'Domperidone', dosage_form: 'Tablet', strength: '10 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 3.50, pack_size: '100 pcs', therapeutic_class: 'Prokinetic & Antiemetic', indications: 'Gastric stasis, dyspepsia, vomiting' },
  { id: 'MED-072', brand_name: 'Emistat 8', generic_name: 'Ondansetron', dosage_form: 'Tablet', strength: '8 mg', manufacturer: 'Incepta Pharmaceuticals Ltd.', price_bdt: 8.00, pack_size: '30 pcs', therapeutic_class: '5-HT3 Receptor Antagonist', indications: 'Severe nausea, post-operative vomiting, gastroenteritis' },
  { id: 'MED-073', brand_name: 'Onsat 8', generic_name: 'Ondansetron', dosage_form: 'Tablet', strength: '8 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 8.00, pack_size: '30 pcs', therapeutic_class: '5-HT3 Receptor Antagonist', indications: 'Chemotherapy and surgical nausea' },

  // Respiratory & Inhalers
  { id: 'MED-074', brand_name: 'Ventolin Inhaler', generic_name: 'Salbutamol', dosage_form: 'CFC-Free Inhaler', strength: '100 mcg/puff', manufacturer: 'GlaxoSmithKline Bangladesh / Beximco', price_bdt: 240.00, pack_size: '200 puffs', therapeutic_class: 'Short-acting Beta-2 Agonist', indications: 'Acute bronchospasm, asthma attack quick rescue' },
  { id: 'MED-075', brand_name: 'Asmasol Inhaler', generic_name: 'Salbutamol', dosage_form: 'Inhaler', strength: '100 mcg/puff', manufacturer: 'Beximco Pharmaceuticals Ltd.', price_bdt: 210.00, pack_size: '200 puffs', therapeutic_class: 'Short-acting Beta-2 Agonist', indications: 'Relief of asthma and COPD bronchospasm' },
  { id: 'MED-076', brand_name: 'Bexitrol-F 100 Inhaler', generic_name: 'Salmeterol + Fluticasone', dosage_form: 'Inhaler', strength: '25 mcg + 125 mcg', manufacturer: 'Beximco Pharmaceuticals Ltd.', price_bdt: 450.00, pack_size: '120 puffs', therapeutic_class: 'Corticosteroid + LABA', indications: 'Regular maintenance treatment of asthma' },

  // NSAIDs & Pain Relief
  { id: 'MED-077', brand_name: 'Clofenac 50', generic_name: 'Diclofenac Sodium', dosage_form: 'Enteric Tablet', strength: '50 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 4.00, pack_size: '100 pcs', therapeutic_class: 'NSAID', indications: 'Rheumatoid arthritis, backache, dental pain' },
  { id: 'MED-078', brand_name: 'Volmax 50', generic_name: 'Diclofenac Sodium', dosage_form: 'Tablet', strength: '50 mg', manufacturer: 'Beximco Pharmaceuticals Ltd.', price_bdt: 4.00, pack_size: '100 pcs', therapeutic_class: 'NSAID', indications: 'Inflammatory pain and osteoarthritis' },
  { id: 'MED-079', brand_name: 'Torax 10', generic_name: 'Ketorolac Tromethamine', dosage_form: 'Tablet', strength: '10 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 12.00, pack_size: '30 pcs', therapeutic_class: 'Potent Short-term NSAID', indications: 'Acute moderate to severe post-operative pain' },
  { id: 'MED-080', brand_name: 'Rolac 10', generic_name: 'Ketorolac Tromethamine', dosage_form: 'Tablet', strength: '10 mg', manufacturer: 'Incepta Pharmaceuticals Ltd.', price_bdt: 12.00, pack_size: '30 pcs', therapeutic_class: 'Potent Short-term NSAID', indications: 'Short term management of severe pain' },
  { id: 'MED-081', brand_name: 'Napryn 500', generic_name: 'Naproxen', dosage_form: 'Tablet', strength: '500 mg', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 10.00, pack_size: '50 pcs', therapeutic_class: 'NSAID', indications: 'Ankylosing spondylitis, acute gout, dysmenorrhea' },

  // Cough & Cold
  { id: 'MED-082', brand_name: 'Tusca Syrup', generic_name: 'Dextromethorphan + Phenylephrine + Triprolidine', dosage_form: 'Syrup', strength: '100 ml', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 95.00, pack_size: '100 ml bottle', therapeutic_class: 'Cough Suppressant & Decongestant', indications: 'Dry irritating cough, allergic throat tickle' },
  { id: 'MED-083', brand_name: 'Adrylex Syrup', generic_name: 'Dextromethorphan + Pseudoephedrine', dosage_form: 'Syrup', strength: '100 ml', manufacturer: 'Incepta Pharmaceuticals Ltd.', price_bdt: 90.00, pack_size: '100 ml bottle', therapeutic_class: 'Antitussive Expectorant', indications: 'Cough, bronchial irritation' },

  // Supplements, Calcium & Rehydration
  { id: 'MED-084', brand_name: 'Coralcal-DX', generic_name: 'Coral Calcium + Vitamin D3', dosage_form: 'Tablet', strength: '500 mg + 200 IU', manufacturer: 'Radiant Pharmaceuticals Ltd.', price_bdt: 14.00, pack_size: '30 pcs', therapeutic_class: 'Bone Health Supplement', indications: 'Osteoporosis, calcium deficiency, pregnancy' },
  { id: 'MED-085', brand_name: 'Calbo-D', generic_name: 'Calcium Carbonate + Vitamin D3', dosage_form: 'Tablet', strength: '500 mg + 200 IU', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 8.00, pack_size: '30 pcs', therapeutic_class: 'Calcium Supplement', indications: 'Bone density support and calcium intake' },
  { id: 'MED-086', brand_name: 'B-50 Forte', generic_name: 'Vitamin B-Complex', dosage_form: 'Tablet', strength: 'High Potency B1, B2, B6, B12', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 3.50, pack_size: '100 pcs', therapeutic_class: 'B-Vitamin Complex', indications: 'Peripheral neuropathy, fatigue, mouth ulcers' },
  { id: 'MED-087', brand_name: 'Filwel Gold', generic_name: 'Multivitamin & Multimineral with A to Zinc', dosage_form: 'Tablet', strength: '32 Essential Nutrients', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 10.00, pack_size: '30 pcs', therapeutic_class: 'Multivitamin Micronutrient', indications: 'Daily vitality, post-illness weakness' },
  { id: 'MED-088', brand_name: 'Orsaline-N', generic_name: 'Oral Rehydration Salts (WHO Formula)', dosage_form: 'Oral Powder Sachet', strength: 'For 500 ml water', manufacturer: 'Social Marketing Company (SMC)', price_bdt: 6.00, pack_size: 'Single sachet', therapeutic_class: 'Oral Electrolyte Replacement', indications: 'Acute diarrhea, cholera dehydration, heatstroke' },
  { id: 'MED-089', brand_name: 'Tastysaline', generic_name: 'Oral Electrolyte with Sucrose', dosage_form: 'Oral Powder Sachet', strength: 'For 500 ml water', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 6.00, pack_size: 'Single sachet', therapeutic_class: 'Oral Electrolyte Replacement', indications: 'Electrolyte balance, summer dehydration' },

  // Dermatology & Topical
  { id: 'MED-090', brand_name: 'Burnsil Cream', generic_name: 'Silver Sulfadiazine', dosage_form: 'Topical Cream', strength: '1% (25 gm)', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 65.00, pack_size: '25 gm tube', therapeutic_class: 'Antimicrobial Burn Dressing', indications: 'Burn wound sepsis prevention and healing' },
  { id: 'MED-091', brand_name: 'Bactoderm Ointment', generic_name: 'Mupirocin', dosage_form: 'Ointment', strength: '2% (10 gm)', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 120.00, pack_size: '10 gm tube', therapeutic_class: 'Topical Antibiotic', indications: 'Impetigo, foliculitis, superficial skin infection' },
  { id: 'MED-092', brand_name: 'Candistin Oral Drop', generic_name: 'Nystatin', dosage_form: 'Suspension Drop', strength: '100,000 IU/ml', manufacturer: 'Square Pharmaceuticals PLC', price_bdt: 45.00, pack_size: '12 ml bottle', therapeutic_class: 'Antifungal', indications: 'Oral thrush in infants, candidiasis' }
];

export function searchEssentialMedicines(params: {
  query?: string;
  manufacturer?: string;
  therapeutic_class?: string;
  limit?: number;
}): {
  count: number;
  total_available: number;
  results: MedicineItem[];
  substitutes_available: boolean;
} {
  let list = [...ESSENTIAL_MEDICINES];
  const q = params.query ? params.query.trim().toLowerCase() : '';
  const mfg = params.manufacturer ? params.manufacturer.trim().toLowerCase() : '';
  const tc = params.therapeutic_class ? params.therapeutic_class.trim().toLowerCase() : '';

  if (q) {
    list = list.filter(m =>
      m.brand_name.toLowerCase().includes(q) ||
      m.generic_name.toLowerCase().includes(q) ||
      m.indications.toLowerCase().includes(q)
    );
  }

  if (mfg) {
    list = list.filter(m => m.manufacturer.toLowerCase().includes(mfg));
  }

  if (tc) {
    list = list.filter(m => m.therapeutic_class.toLowerCase().includes(tc));
  }

  const limit = params.limit || 20;
  const sliced = list.slice(0, limit);

  return {
    count: sliced.length,
    total_available: ESSENTIAL_MEDICINES.length,
    results: sliced,
    substitutes_available: sliced.length > 0
  };
}
