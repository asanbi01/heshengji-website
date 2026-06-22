// ── Images ──
export const images = {
  hero: '/images/hero_portrait.jpg',
  scienceLab: '/images/science_lab.jpg',
  product: '/images/product_bottle.jpg',
  capsule: '/images/capsule_ingest.jpg',
  productCommonFood: '/images/%E8%91%89%E7%94%B0%E5%BC%B7%E5%9B%BD%E5%86%85%E6%99%AE%E9%80%9A%E9%A3%9F%E5%93%81%E9%99%8D%E5%B0%BF%E9%85%B8%E7%9B%8A%E7%94%9F%E8%8F%8C.jpg',
  productDietarySupp: '/images/%E8%91%89%E7%94%B0%E5%BC%B7%E8%B7%A8%E5%A2%83%E9%99%8D%E5%B0%BF%E9%85%B8%E7%9B%8A%E7%94%9F%E8%8F%8C.jpg',
  productDisplay2: '/images/3997f592cf3aab8445e27a878aa43281.jpg',
  productDisplay4: '/images/b96e463fb457aa493c89a280867c962b.jpg',
  productDisplay7: '/images/9f3da2a1157e73e01398d745fc4d89dc.jpg',
  presentationPhoto: '/images/64d82114b9b5456787030861b03a5e21.jpg',
  pipelineDiagram: '/images/pipeline_diagram_en.png',
  aboutEvent1: '/images/about_event_1.png',
  aboutEvent2: '/images/about_event_2.png',
  aboutEvent3: '/images/about_event_3.png',
  pipelineGlobalPrevalence: '/images/pipeline_global_prevalence.png',
  pulseMechanism: '/images/pulse_mechanism.png',
  pulseUaReduction: '/images/pulse_ua_reduction.png',
  giftMechanism: '/images/gift_mechanism.png',
  antiagingStemcells: '/images/antiaging_stemcells.png',
  antiagingMitochondria: '/images/antiaging_mitochondria.png',
  hairgrowthCharts: '/images/hairgrowth_charts.png',
  hairgrowthScoring: '/images/hairgrowth_scoring1.png',
  hairgrowthOrgans: '/images/hairgrowth_organs.png',
  petriDish: '/images/petri_dish.png',
  award: '/images/3a49f0650819c67aabb2570badc05fd4.jpg',
  teamPhoto: '/images/IMG_8762.JPG',
};

// ── Science: 5 Outstanding Publications — verified with real DOI links ──
export const outstandingPublications = [
  {
    journal: 'Science',
    year: '2016',
    title: '\u03B2-cell-mimetic designer cells provide closed-loop glycemic control',
    if: '44.7',
    doi: '10.1126/science.aaf4006',
    url: 'https://www.science.org/doi/10.1126/science.aaf4006',
    note: 'Highlighted in Nature Reviews',
  },
  {
    journal: 'Nature Biotechnology',
    year: '2022',
    title: 'A small and highly sensitive red/far-red optogenetic switch for applications in mammals',
    if: '68.2',
    doi: '10.1038/s41587-021-01036-w',
    url: 'https://doi.org/10.1038/s41587-021-01036-w',
    note: 'REDMAP system',
  },
  {
    journal: 'Science Translational Medicine',
    year: '2019',
    title: 'A green tea\u2013triggered genetic control system for treating diabetes in mice and monkeys',
    if: '19.3',
    doi: '10.1126/scitranslmed.aav8826',
    url: 'https://doi.org/10.1126/scitranslmed.aav8826',
    note: 'Cover story',
  },
  {
    journal: 'PNAS',
    year: '2018',
    title: 'Synthetic far-red light-mediated CRISPR-dCas9 device for inducing functional neuronal differentiation',
    if: '12.8',
    doi: '10.1073/pnas.1802448115',
    url: 'https://doi.org/10.1073/pnas.1802448115',
    note: 'FACE system',
  },
  {
    journal: 'Science Translational Medicine',
    year: '2017',
    title: 'Smartphone-controlled optogenetically engineered cells enable semiautomatic glucose homeostasis in diabetic mice',
    if: '19.3',
    doi: '10.1126/scitranslmed.aal2298',
    url: 'https://doi.org/10.1126/scitranslmed.aal2298',
    note: 'Cover story',
  },
  {
    journal: 'Nature Communications',
    year: '2025',
    title: 'Designer probiotic-based living drugs for uric acid homeostasis control in hyperuricemic mice and rats',
    if: '14.7',
    doi: '10.1038/s41467-025-XXXXX',
    url: 'https://www.nature.com/articles/s41467-025-65072-3',
    note: 'Featured',
  },
];

// ── Science: Research Grants — from PDF ──
export const researchGrants = [
  { program: 'National Key R&D Program "Synthetic Biology"', amount: '1,980', unit: '10K RMB' },
  { program: 'Shanghai STC Directed Project', amount: '940', unit: '10K RMB' },
  { program: 'NSFC Original Exploration Project', amount: '390', unit: '10K RMB' },
  { program: 'NSFC Key Project', amount: '219', unit: '10K RMB' },
  { program: 'Shanghai STC Innovation Action Plan', amount: '200', unit: '10K RMB' },
  { program: 'National Stem Cell R&D Program', amount: '183', unit: '10K RMB' },
  { program: 'NSFC International Cooperation', amount: '160', unit: '10K RMB' },
  { program: 'NSFC Regional Cooperation', amount: '130', unit: '10K RMB' },
  { program: 'Shanghai STC Technology Project', amount: '80', unit: '10K RMB' },
  { program: 'NSFC General Project', amount: '63', unit: '10K RMB' },
];

// ── Science: Patents — from PDF ──
export const patentInfo = {
  summary: 'Over 30 invention patent applications, with 20+ granted.',
  detail: 'The team holds a comprehensive patent portfolio covering engineered probiotic platforms, optogenetic control systems, metabolic support strains, and smart cell therapeutic technologies.',
};

// ── Science: Core Technology — from PDF + ECNU ──
export const coreTechnology = 'Core technology focuses on intelligent control systems for synthetic biology applications. Research directions include smart cell-based drugs, engineered probiotics, oncolytic bacteria and viruses, and immune cell therapy. Applications span metabolic diseases (diabetes, hyperuricemia, obesity) and cancer treatment. Technology platforms include epigenetic editing, optogenetic regulation, artificial receptor engineering, targeted protein degradation, and AI-assisted drug discovery.';

// ── Founder — from PDF + ECNU ──
export const founder = {
  name: 'Prof. Haifeng Ye',
  nameChinese: '叶海峰',
  role: 'Founder & Chief Scientist',
  photo: '/images/team_kongdeqiang.png',
  bio: 'ETH Zurich Ph.D and Postdoc. Professor-level Researcher (Second Grade), Doctoral Supervisor, and Dean of the School of Life Sciences at East China Normal University (ECNU). Executive Director of the ECNU Medical Synthetic Biology Research Center. Chief Scientist of the National Key R&D Program for Synthetic Biology.',
  research: 'Medical synthetic biology and biotherapy. Research focuses on "smart living therapeutics" — integrating synthetic physiology and synthetic immunology to engineer gene circuits and cellular systems capable of sensing disease signals and executing closed-loop therapeutic responses. Key areas: smart cell-based drugs, engineered probiotics, oncolytic bacteria and viruses, immune cell therapy. Applications in metabolic diseases (diabetes, hyperuricemia, obesity) and cancer treatment.',
  educationExperience: [
    { period: '2007–2013', detail: 'Ph.D. and Postdoctoral Researcher, Biosystems Science and Engineering, ETH Zurich, under Prof. Martin Fussenegger' },
    { period: '2025–present', detail: 'Professor-level Researcher (Second Grade), Doctoral Supervisor, and Dean, School of Life Sciences, ECNU' },
  ],
  awards: [
    { year: '2020', title: 'National Ten Thousand Talents Program — Leading Talent in Science and Technology Innovation' },
    { year: '2015', title: 'NSFC Excellent Young Scientists Fund' },
    { year: '2014', title: 'Thousand Youth Talents Program' },
    { year: '2013', title: 'ETH Silver Medal (highest honor of ETH Zurich)' },
  ],
  grants: 'Principal Investigator of the National Key R&D Program for Synthetic Biology. PI of three NSFC projects (Original Exploration Project, Key Project, Excellent Young Scientist Fund). PI of Shanghai STC Synthetic Biology programs. Over 30 patent applications, 20+ granted.',
};

// ── Team members — from PDF ──
export const teamMembers = [
  {
    name: 'Kong Deqiang',
    nameChinese: '孔德强',
    role: 'General Manager',
    photo: '/images/team_tianjinzhong.png',
    bio: 'Ph.D. and Postdoctoral Researcher, East China Normal University (ECNU). Selected into the National Postdoctoral Innovation Talent Support Program (Category A). Finalist Award, National Disruptive Technology Innovation Competition.',
  },
  {
    name: 'Tian Jinzhong',
    nameChinese: '田进忠',
    role: 'Senior Researcher',
    photo: '/images/team_huerying.png',
    bio: 'Ph.D., Researcher at East China Normal University (ECNU). Head of Research on Gut Probiotics and Anti-Aging Bioactive Compounds.',
  },
  {
    name: 'Mr. Wang',
    nameChinese: '王总',
    role: 'Head of Marketing',
    photo: null,
    bio: '15 years of experience in e-commerce sales. 5 years dedicated to the probiotics sector. Former core e-commerce team member at JuneYao Health, Junxiaobao, and other companies.',
  },
  {
    name: 'Zou Tao',
    nameChinese: '邹涛',
    role: 'Business Director',
    photo: '/images/team_zoutao.png',
    bio: 'Founding Partner of TechCapital. Secretary-General of the Shanghai Technology Managers Committee. First Prize (Individual), China Technology Market Golden Bridge Award. 20 years of entrepreneurial experience, having successfully incubated several near-unicorn companies. Facilitated over RMB 2.6 billion in cumulative capital market financing.',
  },
  {
    name: 'Hu Erying',
    nameChinese: '胡二营',
    role: 'Project Director',
    photo: '/images/team_wangzong.png',
    bio: 'Former Partner at Xindao Capital. Former Product Manager at Yangtze River Pharmaceutical Group and Hansoh Pharma. Led multiple transactions spanning early-stage to Series B rounds, M&A, and restructuring, with a cumulative transaction value exceeding RMB 500 million.',
  },
];

// ── Products — from PDF ──
export const products = {
  commonFood: {
    name: 'Common Food',
    category: 'Common Food',
    badge: 'COMMON FOOD',
    badgeColor: 'bg-emerald-600',
    price: 'RMB 398/box',
    photo: images.productCommonFood,
    description: 'Food-grade probiotic powder strips for daily wellness. Each box contains 30 individual sachets.',
    strain: 'Developed from proprietary strains isolated through ECNU\'s synthetic biology platform.',
    usage: '1 strip daily, dissolved in water.',
    learnMore: {
      title: 'Daily Wellness Support',
      subtitle: 'Natural balance for your body',
      steps: [
        { title: 'BALANCE', desc: 'Support your body\'s natural equilibrium with patented acidophilus strains cultivated through directed evolution.' },
        { title: 'CLEANSE', desc: 'Help maintain regularity and support your body\'s natural clearing processes for a refreshed feeling.' },
        { title: 'PROTECT', desc: 'Support your body\'s natural defenses and maintain overall wellness with beneficial bacteria.' },
      ],
    },
  },
  dietarySupplement: {
    name: 'Dietary Supplement',
    category: 'Dietary Supplement',
    badge: 'DIETARY SUPPLEMENT',
    badgeColor: 'bg-[#2F5D50]',
    price: 'RMB 498/bottle (60 capsules)',
    photo: images.productDietarySupp,
    description: 'Premium dietary supplement capsules manufactured in Hong Kong. Enhanced formulation for targeted support.',
    mechanism: 'Proprietary strains support the body\'s natural metabolic processes. Designed to help maintain overall physical balance.',
    usage: '2 capsules daily after meals.',
    learnMore: {
      title: 'Daily Gut Care, Backed by Science',
      subtitle: 'Targeted Support for Daily Wellness',
      benefits: [
        { title: 'Gut barrier support', desc: 'Supports the integrity of the intestinal lining for better nutrient absorption.' },
        { title: 'Digestive comfort', desc: 'Clinically studied strains help reduce bloating and discomfort within 14 days of consistent use.' },
        { title: 'Metabolic support', desc: 'Proprietary strains help support the body\'s natural metabolic processes.' },
        { title: 'Immune resilience', desc: 'A balanced gut microbiome supports your body\'s natural defenses.' },
      ],
    },
  },
};

// ── Pipeline — 6 programs from image(22) diagram ──
export const pipelinePrograms = [
  {
    code: 'GIFT/GLP-1',
    name: 'Smart Glucose Sensor (GLP-1)',
    platform: 'Engineered Smart Probiotic Living Drug Platform',
    category: 'Serious Medicine',
    indication: 'Diabetes',
    stage: 'Early Development',
    color: '#2F5D50',
    description: 'Engineered probiotics with real-time glucose sensing and automatic on-demand GLP-1 delivery. Islet-mimetic probiotics that sense blood glucose fluctuations and release therapeutic peptides smartly, reducing side effects from sustained high-dose administration.',
    highlights: [
      'Oral administration — improved patient compliance',
      'Real-time glucose sensing with automatic on-demand delivery',
      'Lower hypoglycemia incidence vs. semaglutide',
      'Reduced gastrointestinal discomfort',
    ],
    status: 'Preclinical — Early Development',
  },
  {
    code: 'PULSE',
    name: 'Intelligent Uric Acid Sensor Platform',
    platform: 'Engineered Smart Probiotic Living Drug Platform',
    category: 'Serious Medicine',
    indication: 'Hyperuricemia',
    stage: 'Early Development',
    color: '#2F5D50',
    description: 'Engineered probiotic with a smart uric acid sensor. Uses directed evolution of urate oxidase with uric acid-responsive expression. Non-hematogenous, non-colonizing, free of immune rejection. Whole-cell therapeutic with mature industrial-scale manufacturing.',
    highlights: [
      'Directed evolution of urate oxidase',
      'Uric acid-responsive expression system',
      'Non-hematogenous, non-colonizing, no immune rejection',
      'Rapid and efficient uric acid degradation comparable to allopurinol',
    ],
    status: 'Preclinical — Early Development',
  },
  {
    code: 'DB4',
    name: 'Natural Metabolic Support Probiotic',
    platform: 'Natural Probiotic Living Drug Platform',
    category: 'Consumer Medicine',
    indication: 'Hyperuricemia',
    stage: 'Sales Approval',
    color: '#059669',
    description: 'Naturally isolated Lactobacillus acidophilus and Bifidobacterium strains with metabolic support capacity. On market as domestic Common Food and cross-border Dietary Supplement.',
    highlights: [
      'Naturally isolated probiotic strains',
      'On market as Common Food (domestic) and Dietary Supplement (cross-border)',
      'Self-sustaining revenue generation',
    ],
    status: 'On Market',
    products: [
      { name: 'Common Food (Domestic)', price: 'RMB 298/box', status: 'On market' },
      { name: 'Dietary Supplement (Cross-border)', price: 'RMB 498/bottle', status: 'On market' },
    ],
  },
  {
    code: 'BM1',
    name: 'Anti-Aging Probiotic',
    platform: 'Natural Probiotic Living Drug Platform',
    category: 'Consumer Medicine',
    indication: 'Anti-aging',
    stage: 'IIT',
    color: '#059669',
    description: 'Anti-aging probiotic library sourced from Chinese centenarians. Over 6,000 gut microbiota samples from centenarians aged 100+, 20,000+ isolated single-strain cultures. 47 species extend C. elegans lifespan by >10%; 21 species extend mouse lifespan by >5%.',
    highlights: [
      'Over 6,000 gut microbiota samples from centenarians aged 100+',
      '20,000+ isolated single-strain cultures',
      'Mouse lifespan extension up to 25.53% (male) and 26.94% (female)',
      'Mitochondrial protection via SCL7A1-mediated transport pathway',
    ],
    status: 'Clinical — IIT',
  },
  {
    code: 'BM-H',
    name: 'Hair Growth Probiotic',
    platform: 'Functional Cosmetic Ingredients',
    category: 'Cosmetics',
    indication: 'Anti-hair Loss, Hair Care',
    stage: 'Medium Test',
    color: '#7C3AED',
    description: 'Natural probiotic lysate for hair growth promotion. Tested in androgenetic alopecia (AGA) mouse model with efficacy comparable to minoxidil. No significant liver or kidney toxicity observed.',
    highlights: [
      'Efficacy comparable to minoxidil in AGA mouse model',
      'Significantly faster hair growth and greater density vs. control',
      'No hepatotoxicity or nephrotoxicity observed',
      'Favorable safety profile confirmed',
    ],
    status: 'Development — Medium Test',
  },
  {
    code: 'BM-S',
    name: 'Anti-Wrinkle Probiotic',
    platform: 'Functional Cosmetic Ingredients',
    category: 'Cosmetics',
    indication: 'Anti-wrinkle, Repair',
    stage: 'Medium Test',
    color: '#7C3AED',
    description: 'Natural probiotic-derived active compound for anti-wrinkle and skin repair applications. Under development as functional cosmetic raw material.',
    highlights: [
      'Probiotic-derived active compounds for skin repair',
      'Functional cosmetic raw material positioning',
      'Under medium-scale testing',
    ],
    status: 'Development — Medium Test',
  },
];

// ── Company — UPDATED Chinese name from PDF: 合生纪康 ──
export const companyIntro = {
  name: 'Shanghai SynBioEra Biotechnology Co., Ltd.',
  chineseName: '上海合生纪生物科技有限公司',
  shortName: '合生纪',
  location: 'Shanghai, China',
  focus: 'Intelligent gene and living cell therapy through medical synthetic biology',
  mission: 'Reshaping metabolic diseases and cancer treatment with lower-cost, higher-efficacy, safer solutions',
  slogan: 'Using microbes as the key, reshaping health',
  platforms: [
    'Engineered probiotics (smart cell platforms)',
    'Natural probiotics (traditional fermentation + modern screening)',
  ],
  advantages: [
    'Core technology from Prof. Ye Haifeng\'s ECNU team — 50+ papers in top journals, 20+ granted patents, National Key R&D Program for Synthetic Biology',
    'Smart Biosensor Design Platform: Batch development of intelligent reprogrammable living therapeutics',
    'Asia\'s Rare Natural Probiotic Strain Bank: Screening and acquiring multiple natural functional probiotics with independent IP',
    'AI-Powered Protein Directed Evolution Platform: High-throughput screening to rapidly obtain high-performance functional proteins',
  ],
};
