/**
 * Ministry of Education & Inter-Board Coordination Committee
 * 20-Year HSC and SSC Examination Result Statistics Engine (2005–2024)
 * Contains historical examinee counts, pass rates, and GPA-5 achievers.
 */

export interface ExamStatRecord {
  year: number;
  exam: 'HSC' | 'SSC';
  total_examinees: number;
  total_passed: number;
  pass_rate_percent: number;
  gpa_5_count: number;
  female_pass_rate_percent: number;
  male_pass_rate_percent: number;
  key_event?: string;
}

export const HISTORICAL_EXAM_SERIES: ExamStatRecord[] = [
  // HSC Series
  { year: 2024, exam: 'HSC', total_examinees: 1331056, total_passed: 1035309, pass_rate_percent: 77.78, gpa_5_count: 145911, female_pass_rate_percent: 80.57, male_pass_rate_percent: 75.30, key_event: 'Auto-mapping for canceled papers post-July uprising' },
  { year: 2023, exam: 'HSC', total_examinees: 1357915, total_passed: 1067852, pass_rate_percent: 78.64, gpa_5_count: 92365, female_pass_rate_percent: 80.34, male_pass_rate_percent: 76.99, key_event: 'Full syllabus resumption' },
  { year: 2022, exam: 'HSC', total_examinees: 1203407, total_passed: 1011987, pass_rate_percent: 84.09, gpa_5_count: 176282, female_pass_rate_percent: 85.13, male_pass_rate_percent: 83.04, key_event: 'Shortened syllabus post-COVID' },
  { year: 2021, exam: 'HSC', total_examinees: 1371681, total_passed: 1306718, pass_rate_percent: 95.26, gpa_5_count: 189169, female_pass_rate_percent: 96.49, male_pass_rate_percent: 94.14, key_event: 'Group-based 3 elective subjects evaluation' },
  { year: 2020, exam: 'HSC', total_examinees: 1367377, total_passed: 1367377, pass_rate_percent: 100.0, gpa_5_count: 161807, female_pass_rate_percent: 100.0, male_pass_rate_percent: 100.0, key_event: 'Historic COVID-19 Auto-Pass' },
  { year: 2019, exam: 'HSC', total_examinees: 1336629, total_passed: 988172, pass_rate_percent: 73.93, gpa_5_count: 47286, female_pass_rate_percent: 76.44, male_pass_rate_percent: 71.67, key_event: 'Pre-COVID standard examination' },
  { year: 2018, exam: 'HSC', total_examinees: 1288758, total_passed: 858801, pass_rate_percent: 66.64, gpa_5_count: 29262, female_pass_rate_percent: 69.72, male_pass_rate_percent: 63.88, key_event: 'Strict standard evaluation' },
  { year: 2017, exam: 'HSC', total_examinees: 1183686, total_passed: 801711, pass_rate_percent: 68.91, gpa_5_count: 37969, female_pass_rate_percent: 70.43, male_pass_rate_percent: 67.61, key_event: 'Unified answer script coding' },
  { year: 2016, exam: 'HSC', total_examinees: 1203640, total_passed: 899150, pass_rate_percent: 74.70, gpa_5_count: 58276, female_pass_rate_percent: 75.60, male_pass_rate_percent: 73.93 },
  { year: 2015, exam: 'HSC', total_examinees: 1061614, total_passed: 738872, pass_rate_percent: 69.60, gpa_5_count: 42894, female_pass_rate_percent: 70.23, male_pass_rate_percent: 69.04 },
  { year: 2012, exam: 'HSC', total_examinees: 917299, total_passed: 721979, pass_rate_percent: 78.67, gpa_5_count: 61162, female_pass_rate_percent: 78.43, male_pass_rate_percent: 78.89 },
  { year: 2008, exam: 'HSC', total_examinees: 621143, total_passed: 472388, pass_rate_percent: 76.08, gpa_5_count: 19133, female_pass_rate_percent: 75.30, male_pass_rate_percent: 76.71 },
  { year: 2005, exam: 'HSC', total_examinees: 415092, total_passed: 245366, pass_rate_percent: 59.16, gpa_5_count: 1004, female_pass_rate_percent: 57.34, male_pass_rate_percent: 60.54, key_event: 'Early grading system implementation' },

  // SSC Series
  { year: 2024, exam: 'SSC', total_examinees: 2013597, total_passed: 1672153, pass_rate_percent: 83.04, gpa_5_count: 182129, female_pass_rate_percent: 84.47, male_pass_rate_percent: 81.57 },
  { year: 2023, exam: 'SSC', total_examinees: 2041450, total_passed: 1641140, pass_rate_percent: 80.39, gpa_5_count: 183578, female_pass_rate_percent: 81.71, male_pass_rate_percent: 78.87 },
  { year: 2022, exam: 'SSC', total_examinees: 1994137, total_passed: 1743619, pass_rate_percent: 87.44, gpa_5_count: 269602, female_pass_rate_percent: 88.32, male_pass_rate_percent: 86.64, key_event: 'Historic all-time peak GPA-5 record' },
  { year: 2021, exam: 'SSC', total_examinees: 2240162, total_passed: 2096546, pass_rate_percent: 93.58, gpa_5_count: 183340, female_pass_rate_percent: 94.50, male_pass_rate_percent: 92.69 },
  { year: 2020, exam: 'SSC', total_examinees: 2040028, total_passed: 1690523, pass_rate_percent: 82.87, gpa_5_count: 135898, female_pass_rate_percent: 83.75, male_pass_rate_percent: 81.99 },
  { year: 2015, exam: 'SSC', total_examinees: 1473594, total_passed: 1282618, pass_rate_percent: 87.04, gpa_5_count: 111901, female_pass_rate_percent: 86.82, male_pass_rate_percent: 87.23 },
  { year: 2010, exam: 'SSC', total_examinees: 1064558, total_passed: 848600, pass_rate_percent: 79.98, gpa_5_count: 62138, female_pass_rate_percent: 78.19, male_pass_rate_percent: 81.59 },
  { year: 2005, exam: 'SSC', total_examinees: 752319, total_passed: 395980, pass_rate_percent: 52.63, gpa_5_count: 8431, female_pass_rate_percent: 50.12, male_pass_rate_percent: 54.77 }
];

export const EDUCATION_BOARDS = [
  { id: 'dhaka', name: 'Dhaka Education Board', established: 1921, headquarters: 'Bakshibazar, Dhaka' },
  { id: 'rajshahi', name: 'Rajshahi Education Board', established: 1961, headquarters: 'Rajshahi' },
  { id: 'cumilla', name: 'Cumilla Education Board', established: 1962, headquarters: 'Cumilla' },
  { id: 'jashore', name: 'Jashore Education Board', established: 1963, headquarters: 'Jashore' },
  { id: 'chattogram', name: 'Chattogram Education Board', established: 1995, headquarters: 'Muradpur, Chattogram' },
  { id: 'barishal', name: 'Barishal Education Board', established: 1999, headquarters: 'Barishal' },
  { id: 'sylhet', name: 'Sylhet Education Board', established: 1999, headquarters: 'Alamgir, Sylhet' },
  { id: 'dinajpur', name: 'Dinajpur Education Board', established: 2006, headquarters: 'Dinajpur' },
  { id: 'mymensingh', name: 'Mymensingh Education Board', established: 2017, headquarters: 'Mymensingh' },
  { id: 'madrasah', name: 'Bangladesh Madrasah Education Board', established: 1978, headquarters: 'Orphanage Road, Dhaka' },
  { id: 'technical', name: 'Bangladesh Technical Education Board (BTEB)', established: 1967, headquarters: 'Agargaon, Dhaka' }
];

export function queryExamStatistics(params: { exam_type?: 'HSC' | 'SSC'; year?: number; limit?: number }) {
  const exam = params.exam_type || 'HSC';
  let filtered = HISTORICAL_EXAM_SERIES.filter(s => s.exam === exam);
  if (params.year) {
    filtered = filtered.filter(s => s.year === params.year);
  }
  filtered.sort((a, b) => b.year - a.year);
  if (params.limit) {
    filtered = filtered.slice(0, params.limit);
  }
  return {
    exam_type: exam,
    count: filtered.length,
    results: filtered,
    boards_active: EDUCATION_BOARDS.length,
    boards: EDUCATION_BOARDS
  };
}
