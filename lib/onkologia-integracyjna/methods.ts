import type { Method } from './types'

/**
 * Lista 19 metod onkologii integracyjnej z bazą EBM.
 *
 * Kryterium wyboru: istnieje co najmniej jedna publikacja peer-reviewed
 * z GRADE moderate/low (nie very low) dla wskazania w onkologii.
 *
 * Wyłączone z scope (świadomie): salinomycyna (brak rejestracji dla ludzi),
 * homeopatia, biorezonans, plazmoterapia, DMSO, ozonoterapia — brak
 * wystarczających dowodów EBM lub kontrowersje merytoryczne.
 */

export const METHODS: Method[] = [
  // ====================================================================
  // KATEGORIA A — Farmakologiczne uzupełniające
  // ====================================================================
  {
    slug: 'wlewy-dozylne-witaminy-c',
    name: 'Wlewy dożylne witaminy C (IVC)',
    shortName: 'Wlewy witaminy C (IVC)',
    category: 'A',
    categoryIndex: 1,
    grade: 'moderate',
    shortDesc: 'Podawanie witaminy C w dawkach 25–100 g dożylnie. W stężeniach milimolarnych działa prooksydacyjnie selektywnie w komórkach nowotworowych.',
    mainIndications: ['rak trzustki', 'rak jelita grubego z mutacją RAS', 'wsparcie chemioterapii', 'poprawa QoL'],
    regulatory: [
      { country: 'PL', status: 'off-label', note: 'Pracownia recepturowa, świadczenie indywidualne' },
      { country: 'DE', status: 'refundowane', note: 'W wybranych klinikach onkologii integracyjnej' },
      { country: 'CH', status: 'refundowane', note: 'Art. 118a Konstytucji Federalnej' },
      { country: 'AT', status: 'dopuszczone', note: '§ 11a Ärztegesetz' },
      { country: 'USA', status: 'off-label', note: 'Riordan IVC Protocol od 1995' },
    ],
    keySources: [
      { cite: 'Vissers et al. 2025', journal: 'Int J Vitam Nutr Res', pmid: '40613397', type: 'metaanaliza', finding: 'n=2 722, GRADE moderate, pooled median survival ratio 1,83 (95% CI 1,40–2,40)' },
      { cite: 'Bodeker et al. 2024 (PACMAN 2.1)', journal: 'Redox Biology', pmid: '39369582', type: 'RCT-II', finding: 'Rak trzustki n=34; OS 16,0 vs 8,3 mies.; HR 0,46' },
      { cite: 'Wang et al. 2022 (VITALITY)', journal: 'Clinical Cancer Research', pmid: '35929990', type: 'RCT-III', finding: 'mCRC n=442; bez przewagi w I linii; sygnał w podgrupie RAS-mut' },
      { cite: 'Yun et al. 2015', journal: 'Science', pmid: '26541605', type: 'mechanistyczne', finding: 'Selektywna toksyczność wobec komórek KRAS/BRAF-mut' },
      { cite: 'Zhao et al. 2025', journal: 'Cell', pmid: '40023152', type: 'mechanistyczne', finding: 'Vitcylation — kowalencyjna modyfikacja STAT1' },
    ],
    warning: 'Bezwzględne przeciwwskazanie: niedobór G6PD (badanie przesiewowe przed pierwszym wlewem).',
  },
  {
    slug: 'jemiola-iscador',
    name: 'Jemioła (Iscador, Viscum album)',
    shortName: 'Jemioła / Iscador',
    category: 'A',
    categoryIndex: 2,
    grade: 'moderate',
    shortDesc: 'Wyciągi z jemioły (Viscum album) podawane podskórnie lub dożylnie jako terapia wspomagająca, szczególnie w opiece paliatywnej.',
    mainIndications: ['poprawa jakości życia', 'opieka paliatywna', 'redukcja działań niepożądanych chemioterapii', 'wsparcie immunologiczne'],
    regulatory: [
      { country: 'CH', status: 'refundowane', note: 'Pełna refundacja KVG od 2017' },
      { country: 'DE', status: 'refundowane', note: 'Refundacja w opiece paliatywnej (GKV)' },
      { country: 'AT', status: 'dopuszczone', note: 'Stosowane w klinikach antropozoficznych' },
      { country: 'PL', status: 'off-label', note: 'Stosowane w wybranych klinikach' },
    ],
    keySources: [
      { cite: 'Loef & Walach 2020', journal: 'BMC Complement Med Ther', pmid: '32859193', type: 'metaanaliza', finding: 'Poprawa QoL w onkologii — efekt istotny statystycznie' },
      { cite: 'Tröger et al. 2014', journal: 'Eur J Cancer', pmid: '24129244', type: 'RCT', finding: 'Rak trzustki — wydłużenie OS w grupie Iscador' },
      { cite: 'Kienle & Kiene 2010', journal: 'Integr Cancer Ther', pmid: '20542901', type: 'review', finding: 'Systematyczny przegląd, mechanizm immunomodulacyjny' },
      { cite: 'Ostermann et al. 2020', journal: 'Cancers', pmid: '32708383', type: 'metaanaliza', finding: 'Bezpieczeństwo — niskie ryzyko poważnych działań niepożądanych' },
    ],
    warning: 'Reakcja w miejscu wstrzyknięcia (lokalna gorączka, rumień) — fizjologiczna, oczekiwana.',
  },
  {
    slug: 'kurkumina',
    name: 'Kurkumina',
    shortName: 'Kurkumina',
    category: 'A',
    categoryIndex: 3,
    grade: 'low',
    shortDesc: 'Polifenol z kurkumy długiej (Curcuma longa) — działanie przeciwzapalne, modulacja szlaków onkogennych (NF-κB, STAT3). Niska biodostępność doustna wymaga form liposomalnych/fosfolipidowych.',
    mainIndications: ['szpiczak mnogi (badania II fazy)', 'rak jelita grubego', 'redukcja zapalenia', 'wsparcie chemioterapii'],
    regulatory: [
      { country: 'PL', status: 'OTC', note: 'Suplement diety' },
      { country: 'DE', status: 'OTC', note: 'Suplement; off-label w protokołach onkologii' },
      { country: 'USA', status: 'OTC', note: 'GRAS status FDA' },
    ],
    keySources: [
      { cite: 'Mirzaei et al. 2017', journal: 'J Cell Physiol', pmid: '28639706', type: 'review', finding: 'Mechanizm — modulacja NF-κB, STAT3, Wnt' },
      { cite: 'Vadhan-Raj et al. 2007', journal: 'ASH Annual Meeting', type: 'RCT-II', finding: 'Szpiczak mnogi — redukcja markerów CRP, NF-κB' },
      { cite: 'Howells et al. 2019', journal: 'J Nutr', pmid: '31132111', type: 'RCT-II', finding: 'mCRC — kurkumina + FOLFOX, bezpieczeństwo + sygnał skuteczności' },
    ],
    warning: 'Interakcje: antykoagulanty (warfaryna), inhibitory CYP3A4. Konsultacja z lekarzem przy chemioterapii.',
  },
  {
    slug: 'melatonina',
    name: 'Melatonina',
    shortName: 'Melatonina',
    category: 'A',
    categoryIndex: 4,
    grade: 'moderate',
    shortDesc: 'Hormon szyszynki o właściwościach antyoksydacyjnych i regulujących cykl dobowy. W onkologii — wsparcie snu, redukcja lęku, neuroprotekcja przy chemioterapii.',
    mainIndications: ['zaburzenia snu w onkologii', 'redukcja lęku', 'neuroprotekcja przy chemioterapii', 'fatigue'],
    regulatory: [
      { country: 'PL', status: 'OTC', note: 'Bez recepty; dawki 1–5 mg' },
      { country: 'DE', status: 'dopuszczone', note: 'Recepta dla dawek > 2 mg (Circadin)' },
      { country: 'USA', status: 'OTC', note: 'Suplement; bez recepty' },
    ],
    keySources: [
      { cite: 'Lissoni et al. metaanaliza', journal: 'J Pineal Res', pmid: '15760375', type: 'metaanaliza', finding: 'Onkologia — poprawa QoL, redukcja działań niepożądanych chemio' },
      { cite: 'ASCO/SIO Anxiety Guidelines 2023', journal: 'J Clin Oncol', type: 'wytyczne', finding: 'Rekomendowana w wybranych wskazaniach onkologicznych dla snu i lęku' },
      { cite: 'Seely et al. 2012', journal: 'Integr Cancer Ther', pmid: '22831591', type: 'metaanaliza', finding: 'Redukcja działań niepożądanych chemioterapii (nudności, neuropatia)' },
    ],
    warning: 'Senność, interakcje z lekami immunosupresyjnymi i przeciwzakrzepowymi.',
  },
  {
    slug: 'witamina-d',
    name: 'Witamina D w onkologii',
    shortName: 'Witamina D',
    category: 'A',
    categoryIndex: 5,
    grade: 'moderate',
    shortDesc: 'Niedobór witaminy D koreluje z gorszym rokowaniem w wielu typach nowotworów. Suplementacja przy niedoborze ma uznany standard.',
    mainIndications: ['suplementacja przy niedoborze (25-OH-D < 30 ng/ml)', 'wsparcie układu odpornościowego', 'zdrowie kości'],
    regulatory: [
      { country: 'PL', status: 'OTC', note: 'Bez recepty; rekomendacja PTEiDD' },
      { country: 'DE', status: 'OTC', note: 'Suplement standardowy' },
    ],
    keySources: [
      { cite: 'Manson et al. 2019 (VITAL Trial)', journal: 'N Engl J Med', pmid: '30415629', type: 'RCT-III', finding: 'n=25 871; redukcja śmiertelności onkologicznej w grupie z BMI normalnym' },
      { cite: 'Keum et al. 2019', journal: 'Ann Oncol', pmid: '30796437', type: 'metaanaliza', finding: 'Suplementacja D3 redukuje śmiertelność onkologiczną o 13%' },
      { cite: 'Chandler et al. 2020', journal: 'JAMA Network Open', pmid: '32584406', type: 'metaanaliza', finding: 'Suplementacja redukuje całkowitą śmiertelność onkologiczną' },
    ],
    warning: 'Hiperkalcemia przy nadmiernej suplementacji — monitorowanie 25-OH-D i Ca.',
  },
  {
    slug: 'omega-3',
    name: 'Kwasy omega-3 (EPA/DHA) w kacheksji',
    shortName: 'Omega-3 (EPA/DHA)',
    category: 'A',
    categoryIndex: 6,
    grade: 'moderate',
    shortDesc: 'Wielonienasycone kwasy tłuszczowe — działanie przeciwzapalne, wsparcie w kacheksji nowotworowej i podczas chemioterapii.',
    mainIndications: ['kacheksja nowotworowa', 'utrata masy mięśniowej', 'redukcja stanu zapalnego', 'fatigue'],
    regulatory: [
      { country: 'PL', status: 'OTC', note: 'Suplement diety lub żywność medyczna' },
      { country: 'EU', status: 'dopuszczone', note: 'Żywność specjalnego przeznaczenia medycznego' } as any,
    ],
    keySources: [
      { cite: 'Mocellin et al. 2016', journal: 'Curr Med Chem', pmid: '26630916', type: 'metaanaliza', finding: 'EPA/DHA stabilizują masę ciała w kacheksji' },
      { cite: 'Pappalardo et al. 2015', journal: 'Nutrition', pmid: '25744421', type: 'review', finding: 'Mechanizm anti-inflammatory; redukcja IL-6, CRP' },
      { cite: 'Werner et al. 2017', journal: 'Clin Nutr', pmid: '28688645', type: 'RCT', finding: 'Pacjenci NSCLC — utrzymanie masy mięśniowej podczas chemio' },
    ],
    warning: 'Ostrożność u pacjentów na antykoagulantach (wydłużenie czasu krwawienia).',
  },
  {
    slug: 'glutamina',
    name: 'Glutamina w mucositis po chemio/radio',
    shortName: 'Glutamina',
    category: 'A',
    categoryIndex: 7,
    grade: 'moderate',
    shortDesc: 'Aminokwas warunkowo niezbędny — wsparcie błon śluzowych przewodu pokarmowego, redukcja mucositis po chemioterapii i radioterapii.',
    mainIndications: ['mucositis po chemio/radio', 'biegunka popromiennna', 'ochrona błon śluzowych', 'redukcja neuropatii oksaliplatyna'],
    regulatory: [
      { country: 'PL', status: 'OTC', note: 'Żywność specjalnego przeznaczenia medycznego' },
      { country: 'USA', status: 'OTC', note: 'Suplement; ASCO/SIO Mucositis 2020 rekomendowane warunkowo' },
    ],
    keySources: [
      { cite: 'ASCO/MASCC/ISOO Mucositis Guidelines 2020', journal: 'Support Care Cancer', type: 'wytyczne', finding: 'Rekomendacja warunkowa dla wybranych wskazań' },
      { cite: 'Sayles et al. 2016', journal: 'Crit Rev Oncol Hematol', pmid: '27117958', type: 'metaanaliza', finding: 'Redukcja stopnia ciężkości mucositis' },
      { cite: 'Vidal-Casariego et al. 2013', journal: 'Clin Nutr', pmid: '23068262', type: 'metaanaliza', finding: 'Glutamina parenteralna — redukcja powikłań' },
    ],
    warning: 'Ostrożność przy niewydolności wątroby i nerek.',
  },
  {
    slug: 'n-acetylocysteina',
    name: 'N-acetylocysteina (NAC) w onkologii',
    shortName: 'NAC',
    category: 'A',
    categoryIndex: 8,
    grade: 'low',
    shortDesc: 'Prekursor glutationu — wsparcie systemu antyoksydacyjnego, nefroprotekcja przy cisplatynie, redukcja toksyczności wybranych chemioterapeutyków.',
    mainIndications: ['nefroprotekcja przy cisplatynie', 'wsparcie systemu antyoksydacyjnego', 'redukcja kardiotoksyczności antracyklin'],
    regulatory: [
      { country: 'PL', status: 'OTC', note: 'Lek bez recepty (mukolityk); off-label onkologia' },
      { country: 'EU', status: 'dopuszczone', note: 'Mukolityk; off-label onkologia' } as any,
    ],
    keySources: [
      { cite: 'Visacri et al. 2014', journal: 'Mol Cell Biochem', pmid: '24682626', type: 'RCT', finding: 'NAC + cisplatyna — redukcja nefrotoksyczności' },
      { cite: 'Olas 2014', journal: 'Curr Med Chem', pmid: '24438523', type: 'review', finding: 'Mechanizm antyoksydacyjny + przeciwzapalny' },
    ],
    warning: 'Możliwa interferencja z efektywnością niektórych chemioterapeutyków — dyskusja w literaturze. Konsultacja z onkologiem WYMAGANA.',
  },

  // ====================================================================
  // KATEGORIA B — Niefarmakologiczne fizyczne
  // ====================================================================
  {
    slug: 'hipertermia-lokoregionalna',
    name: 'Hipertermia lokoregionalna (RHT)',
    shortName: 'Hipertermia lokoregionalna',
    category: 'B',
    categoryIndex: 1,
    grade: 'moderate',
    shortDesc: 'Podgrzewanie konkretnego obszaru ciała do 40–43°C w połączeniu z radioterapią lub chemioterapią. Standard w wybranych nowotworach w Niemczech.',
    mainIndications: ['mięsaki tkanek miękkich', 'rak szyjki macicy', 'rak pęcherza moczowego', 'czerniak'],
    regulatory: [
      { country: 'DE', status: 'refundowane', note: 'Wytyczne DEGRO; wybrane wskazania' },
      { country: 'NL', status: 'refundowane', note: 'Wybrane wskazania' },
      { country: 'CH', status: 'refundowane', note: 'Wybrane wskazania' },
      { country: 'PL', status: 'eksperymentalne', note: 'Pojedyncze ośrodki' },
    ],
    keySources: [
      { cite: 'Issels et al. 2018', journal: 'JAMA Oncology', pmid: '29800974', type: 'RCT-III', finding: 'Mięsaki — poprawa kontroli miejscowej i przeżycia' },
      { cite: 'Datta et al. 2016 (meta)', journal: 'Cancer Treat Rev', pmid: '26791316', type: 'metaanaliza', finding: 'Rak szyjki — istotna poprawa kontroli miejscowej' },
      { cite: 'ESHO/DEGRO Hyperthermia Guidelines', type: 'wytyczne', finding: 'Niemcy/Holandia — refundacja w wybranych wskazaniach' },
    ],
    warning: 'Wymaga doświadczonego ośrodka i odpowiedniego sprzętu.',
  },
  {
    slug: 'tlenoterapia-hiperbaryczna',
    name: 'Tlenoterapia hiperbaryczna (HBOT) w popromiennych uszkodzeniach',
    shortName: 'HBOT',
    category: 'B',
    categoryIndex: 2,
    grade: 'moderate',
    shortDesc: 'Oddychanie 100% tlenem pod zwiększonym ciśnieniem atmosferycznym. W onkologii — leczenie późnych uszkodzeń popromiennych.',
    mainIndications: ['osteonekroza popromienna', 'zapalenie pęcherza popromienne (cystitis)', 'zapalenie jelita popromienne (proctitis)', 'martwica tkanek miękkich'],
    regulatory: [
      { country: 'PL', status: 'refundowane', note: 'NFZ — wybrane wskazania' },
      { country: 'DE', status: 'refundowane', note: 'GKV — wybrane wskazania' },
      { country: 'USA', status: 'refundowane', note: 'UHMS 14 wskazań' },
    ],
    keySources: [
      { cite: 'UHMS Indications Manual', type: 'wytyczne', finding: '14 wskazań klinicznych, w tym popromienne uszkodzenia' },
      { cite: 'Bennett et al. 2016', journal: 'Cochrane Database Syst Rev', pmid: '27123955', type: 'metaanaliza', finding: 'HBOT skuteczne w późnych uszkodzeniach popromiennych' },
    ],
    warning: 'Przeciwwskazania: nieleczona odma opłucnowa, niektóre leki (doxorubicyna).',
  },
  {
    slug: 'terapia-fotodynamiczna',
    name: 'Terapia fotodynamiczna (PDT)',
    shortName: 'Terapia fotodynamiczna (PDT)',
    category: 'B',
    categoryIndex: 3,
    grade: 'high',
    shortDesc: 'Połączenie fotouczulacza (porfimer sodowy) z światłem laserowym. FDA-approved dla 6 wskazań klinicznych.',
    mainIndications: ['wczesny rak przełyku', 'przełyk Barretta z dysplazją wysokiego stopnia', 'rak płaskonabłonkowy płuca', 'rak podstawnokomórkowy skóry', 'keratoza słoneczna', 'chłoniak skórny T-komórkowy (CTCL)'],
    regulatory: [
      { country: 'USA', status: 'rejestracja-jako-inne-wskazanie', note: 'FDA approved 6 wskazań' },
      { country: 'DE', status: 'refundowane', note: 'Wybrane wskazania' },
      { country: 'PL', status: 'refundowane', note: 'NFZ — pojedyncze ośrodki' },
    ],
    keySources: [
      { cite: 'Agostinis et al. 2011', journal: 'CA Cancer J Clin', pmid: '21617154', type: 'review', finding: 'Kompleksowy przegląd PDT w onkologii' },
      { cite: 'Overholt et al. 2007 (PHOTOFRIN)', journal: 'Gastrointest Endosc', pmid: '17383463', type: 'RCT-III', finding: 'Przełyk Barretta — eliminacja dysplazji' },
    ],
    warning: 'Nadwrażliwość na światło przez 4–6 tygodni po podaniu fotouczulacza.',
  },
  {
    slug: 'ttfields-optune',
    name: 'TTFields (Tumor Treating Fields, Optune)',
    shortName: 'TTFields (Optune)',
    category: 'B',
    categoryIndex: 4,
    grade: 'high',
    shortDesc: 'Naprzemienne pole elektryczne o niskiej intensywności (~200 kHz) zakłócające podział komórek nowotworowych. Aplikacja przez elektrody umieszczane na skórze głowy.',
    mainIndications: ['glejak wielopostaciowy (GBM, nowo zdiagnozowany i nawrotowy)', 'międzybłoniak opłucnej'],
    regulatory: [
      { country: 'USA', status: 'rejestracja-jako-inne-wskazanie', note: 'FDA approved 2011 (GBM nawrotowy), 2015 (GBM nowo zdiagnozowany), 2019 (mezothelioma)' },
      { country: 'EU', status: 'rejestracja-jako-inne-wskazanie', note: 'EMA approved' } as any,
      { country: 'DE', status: 'refundowane', note: 'Wybrane Krankenkassen' },
      { country: 'PL', status: 'eksperymentalne', note: 'Dostępne komercyjnie, nierefundowane przez NFZ' },
    ],
    keySources: [
      { cite: 'Stupp et al. 2017 (EF-14)', journal: 'JAMA', pmid: '29260225', type: 'RCT-III', finding: 'GBM n=695; OS 20,9 vs 16,0 mies.; HR 0,63; p<0,001' },
      { cite: 'Ceresoli et al. 2019 (STELLAR)', journal: 'Lancet Oncol', pmid: '31628014', type: 'RCT-II', finding: 'Mezothelioma — OS 18,2 mies. vs 12,1 mies. (kontrola historyczna)' },
    ],
    warning: 'Podrażnienia skóry pod elektrodami — najczęstsze działanie niepożądane.',
  },

  // ====================================================================
  // KATEGORIA C — Medycyna stylu życia w onkologii
  // ====================================================================
  {
    slug: 'aktywnosc-fizyczna-w-onkologii',
    name: 'Aktywność fizyczna w onkologii',
    shortName: 'Aktywność fizyczna',
    category: 'C',
    categoryIndex: 1,
    grade: 'high',
    shortDesc: 'Regularny wysiłek aerobowy + trening oporowy. Najmocniej udokumentowana metoda integracyjna — wytyczne ASCO/SIO/ESMO/NCCN.',
    mainIndications: ['zmęczenie związane z nowotworem (CRF)', 'poprawa jakości życia', 'wydłużenie przeżycia (rak piersi, jelita)', 'redukcja lęku i depresji', 'zachowanie masy mięśniowej'],
    regulatory: [
      { country: 'PL', status: 'dopuszczone', note: 'Rekomendacje PTOK' },
      { country: 'EU', status: 'dopuszczone', note: 'Wytyczne ESMO' } as any,
      { country: 'USA', status: 'dopuszczone', note: 'ASCO/SIO Fatigue Guidelines 2024' },
    ],
    keySources: [
      { cite: 'ASCO/SIO/MASCC/ESMO Fatigue Guidelines 2024', journal: 'J Clin Oncol', type: 'wytyczne', finding: 'GRADE high; rekomendacja silna' },
      { cite: 'Mustian et al. 2017 (meta)', journal: 'JAMA Oncology', pmid: '28253393', type: 'metaanaliza', finding: 'Aktywność fizyczna najskuteczniejszą interwencją w CRF' },
      { cite: 'Friedenreich et al. 2020', journal: 'JNCI Cancer Spectr', pmid: '32368714', type: 'metaanaliza', finding: 'Aktywność po diagnozie — redukcja śmiertelności onkologicznej o 30–40%' },
    ],
    warning: 'Indywidualizacja intensywności — konsultacja z lekarzem przy zaawansowanej chorobie.',
  },
  {
    slug: 'dieta-srodziemnomorska',
    name: 'Dieta śródziemnomorska w onkologii',
    shortName: 'Dieta śródziemnomorska',
    category: 'C',
    categoryIndex: 2,
    grade: 'moderate',
    shortDesc: 'Dieta oparta na warzywach, owocach, oliwie z oliwek, rybach, orzechach. Niski indeks zapalny. Najlepiej udokumentowany model żywieniowy w onkologii.',
    mainIndications: ['prewencja wtórna (rak piersi, jelita)', 'redukcja CRP i markerów zapalnych', 'poprawa QoL'],
    regulatory: [
      { country: 'EU', status: 'dopuszczone', note: 'WHO + EUROCARE rekomendacje' } as any,
      { country: 'USA', status: 'dopuszczone', note: 'NCCN Survivorship Guidelines' },
    ],
    keySources: [
      { cite: 'Toledo et al. 2015 (PREDIMED)', journal: 'JAMA Intern Med', pmid: '26365989', type: 'RCT', finding: 'Redukcja ryzyka raka piersi w grupie diety śródziemnomorskiej + EVOO' },
      { cite: 'Schwingshackl et al. 2017', journal: 'Int J Cancer', pmid: '28316066', type: 'metaanaliza', finding: 'Redukcja śmiertelności onkologicznej o 14%' },
    ],
  },
  {
    slug: 'akupunktura-w-onkologii',
    name: 'Akupunktura w onkologii',
    shortName: 'Akupunktura',
    category: 'C',
    categoryIndex: 3,
    grade: 'moderate',
    shortDesc: 'Klasyczna akupunktura ciała lub elektroakupunktura. ASCO/SIO Pain Guidelines 2022 rekomendują dla bólu związanego z aromataze inhibitorami i innych wskazań.',
    mainIndications: ['ból związany z inhibitorami aromatazy', 'nudności po chemioterapii (CINV)', 'fatigue', 'neuropatia obwodowa chemio-indukowana'],
    regulatory: [
      { country: 'USA', status: 'dopuszczone', note: 'ASCO/SIO Pain Guidelines 2022' },
      { country: 'DE', status: 'refundowane', note: 'GKV — przewlekły ból krzyża i kolana' },
      { country: 'CH', status: 'refundowane', note: 'KVG — od 2017' },
      { country: 'PL', status: 'dopuszczone', note: 'Stosowane przez wykwalifikowanych lekarzy' },
    ],
    keySources: [
      { cite: 'ASCO/SIO Pain Management Guidelines 2022', journal: 'J Clin Oncol', type: 'wytyczne', finding: 'Rekomendacja silna dla bólu mięśniowo-szkieletowego' },
      { cite: 'Mao et al. 2022', journal: 'JAMA', type: 'RCT', finding: 'Akupunktura > masaż w bólu indukowanym AI' },
      { cite: 'Garcia et al. 2013 (meta CINV)', journal: 'J Clin Oncol', pmid: '24043755', type: 'metaanaliza', finding: 'Elektroakupunktura redukuje CINV' },
    ],
  },
  {
    slug: 'mbsr-mbcr',
    name: 'MBSR / MBCR (Mindfulness-Based Stress Reduction / Cancer Recovery)',
    shortName: 'MBSR / MBCR',
    category: 'C',
    categoryIndex: 4,
    grade: 'moderate',
    shortDesc: '8-tygodniowy program treningu uważności (mindfulness) z medytacją, jogą i edukacją. Standard psychoonkologii w wielu krajach.',
    mainIndications: ['lęk i depresja w onkologii', 'fatigue', 'poprawa QoL', 'redukcja stresu'],
    regulatory: [
      { country: 'USA', status: 'dopuszczone', note: 'ASCO/SIO Anxiety Guidelines 2023' },
      { country: 'DE', status: 'refundowane', note: 'Częściowo refundowane' },
    ],
    keySources: [
      { cite: 'Carlson et al. 2013 (MBCR)', journal: 'J Clin Oncol', pmid: '23816947', type: 'RCT', finding: 'Rak piersi — redukcja stresu, poprawa QoL, zmiany w telomerach' },
      { cite: 'ASCO/SIO Anxiety Guidelines 2023', journal: 'J Clin Oncol', type: 'wytyczne', finding: 'MBSR rekomendowane dla lęku i depresji w onkologii' },
    ],
  },

  // ====================================================================
  // KATEGORIA D — Modulacja immunologiczna i eksperymentalne
  // ====================================================================
  {
    slug: 'lentinan-psk',
    name: 'Lentinan / PSK (Krestin) — grzyby lecznicze',
    shortName: 'Lentinan / PSK',
    category: 'D',
    categoryIndex: 1,
    grade: 'moderate',
    shortDesc: 'Polisacharydy ekstraktowane z grzybów Shiitake (lentinan) i Trametes versicolor (PSK). W Japonii — refundowane jako leki uzupełniające do chemioterapii.',
    mainIndications: ['rak żołądka (Japonia)', 'rak jelita grubego (Japonia)', 'wsparcie immunologiczne'],
    regulatory: [
      { country: 'JP', status: 'refundowane', note: 'Lek dopuszczony, refundowany w wybranych nowotworach' },
      { country: 'EU', status: 'eksperymentalne', note: 'Dostępne jako suplementy' } as any,
      { country: 'USA', status: 'OTC', note: 'Suplement diety' },
    ],
    keySources: [
      { cite: 'Oba et al. 2009 (meta PSK)', journal: 'Cancer Immunol Immunother', pmid: '19565232', type: 'metaanaliza', finding: 'PSK jako adjuvant chemio w raku żołądka — wydłużenie OS' },
      { cite: 'Eliza et al. 2012 (Lentinan meta)', journal: 'PLoS One', pmid: '22489216', type: 'metaanaliza', finding: 'Lentinan + chemio — poprawa QoL i wskaźników klinicznych' },
    ],
    warning: 'Możliwe reakcje alergiczne; ostrożność u pacjentów z chorobami autoimmunologicznymi.',
  },
  {
    slug: 'artesunat-off-label',
    name: 'Artesunat off-label w onkologii',
    shortName: 'Artesunat off-label',
    category: 'D',
    categoryIndex: 2,
    grade: 'low',
    shortDesc: 'Lek przeciwmalaryczny (zarejestrowany dla ciężkiej malarii) stosowany off-label w onkologii. Mechanizm prooksydacyjny zależny od żelaza.',
    mainIndications: ['rak jelita grubego (badania I/II fazy)', 'badania eksperymentalne w innych nowotworach'],
    regulatory: [
      { country: 'EU', status: 'rejestracja-jako-inne-wskazanie', note: 'Zarejestrowany jako antymalaryczny; off-label onkologia na art. 5 dyr. 2001/83' },
      { country: 'USA', status: 'rejestracja-jako-inne-wskazanie', note: 'FDA approved jako antymalaryczny (2020)' },
    ],
    keySources: [
      { cite: 'Krishna et al. 2014', journal: 'EBioMedicine', pmid: '26137501', type: 'RCT-I', finding: 'Rak jelita grubego — pilot study, sygnał skuteczności' },
      { cite: 'Efferth 2017', journal: 'Semin Cancer Biol', pmid: '28935402', type: 'review', finding: 'Mechanizm + dane przedkliniczne i wczesne kliniczne' },
    ],
    warning: 'Wymaga oceny gospodarki żelazem przed włączeniem. Brak twardych dowodów III fazy w onkologii.',
  },
  {
    slug: 'niskie-dawki-naltrexonu',
    name: 'Niskie dawki naltreksonu (LDN)',
    shortName: 'LDN (niskie dawki naltreksonu)',
    category: 'D',
    categoryIndex: 3,
    grade: 'low',
    shortDesc: 'Naltrekson (antagonist opioidowy) w niskich dawkach (1,5–4,5 mg/d). W onkologii — eksperymentalna modulacja układu odpornościowego i osi opioidowej.',
    mainIndications: ['badania eksperymentalne w różnych nowotworach', 'modulacja układu odpornościowego'],
    regulatory: [
      { country: 'PL', status: 'rejestracja-jako-inne-wskazanie', note: 'Naltrekson zarejestrowany jako leczenie uzależnień; off-label onkologia' },
      { country: 'USA', status: 'off-label', note: 'Recepta na off-label — wybrane kliniki' },
    ],
    keySources: [
      { cite: 'Brown & Panksepp 2013', journal: 'Med Hypotheses', pmid: '19167739', type: 'review', finding: 'Mechanizm modulacji TLR-4, oś opioidowa' },
      { cite: 'Hutchinson et al. 2011', journal: 'Trends Pharmacol Sci', pmid: '21257212', type: 'review', finding: 'LDN — dane mechanistyczne i wczesne kliniczne' },
    ],
    warning: 'Brak twardych dowodów III fazy w onkologii. Stosowanie wyłącznie pod nadzorem lekarza.',
  },
]

/** Grupy metod według kategorii — dla list i sidebar */
export const METHODS_BY_CATEGORY = {
  A: METHODS.filter((m) => m.category === 'A').sort((a, b) => a.categoryIndex - b.categoryIndex),
  B: METHODS.filter((m) => m.category === 'B').sort((a, b) => a.categoryIndex - b.categoryIndex),
  C: METHODS.filter((m) => m.category === 'C').sort((a, b) => a.categoryIndex - b.categoryIndex),
  D: METHODS.filter((m) => m.category === 'D').sort((a, b) => a.categoryIndex - b.categoryIndex),
}

/** Znajdź metodę po slug */
export function getMethodBySlug(slug: string): Method | undefined {
  return METHODS.find((m) => m.slug === slug)
}

/** Wszystkie sluggi — do generateStaticParams */
export function getAllMethodSlugs(): string[] {
  return METHODS.map((m) => m.slug)
}
