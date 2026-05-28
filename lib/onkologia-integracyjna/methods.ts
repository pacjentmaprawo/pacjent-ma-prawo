import type { Method } from './types'

/**
 * Lista 20 metod onkologii integracyjnej i supportive care z bazą EBM.
 *
 * Kryterium wyboru: istnieje co najmniej jedna publikacja peer-reviewed
 * z GRADE moderate/low/very-low dla wskazania w onkologii.
 *
 * UWAGA dot. klasyfikacji (zmiana po audycie ChatGPT+Perplexity 28.05.2026):
 * Część metod (kategoria B: PDT, HBOT, TTFields) NIE jest klasyczną CAM/integracyjną
 * — to konwencjonalne wyroby medyczne lub procedury w wybranych wskazaniach.
 * Pozostawiamy je w bazie jako referencję ale z wyraźnym oznaczeniem statusu.
 *
 * Wyłączone z scope (świadomie): homeopatia, biorezonans, plazmoterapia, DMSO,
 * ozonoterapia (brak wystarczających dowodów EBM lub kontrowersje merytoryczne).
 *
 * SALINOMYCYNA dodana 28.05.2026 jako D4 — paradoks NRL Nr 2/21/VIII
 * (figuruje na liście "bez podstaw naukowych" mimo realnych dowodów przedklinicznych).
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
    shortDesc: 'Podawanie witaminy C w dawkach 25–100 g dożylnie. W stężeniach milimolarnych działa prooksydacyjnie selektywnie w komórkach nowotworowych. Status: adjunct/off-label — nie standard guideline-based.',
    mainIndications: ['rak trzustki (faza II)', 'rak jelita grubego z mutacją RAS (podgrupa)', 'wsparcie chemioterapii', 'poprawa QoL'],
    regulatory: [
      { country: 'PL', status: 'off-label', note: 'Pracownia recepturowa, świadczenie indywidualne' },
      { country: 'DE', status: 'off-label', note: 'Stosowane w wybranych klinikach onkologii integracyjnej — refundacja zależy od konkretnej Krankenkasse, do weryfikacji per wskazanie' },
      { country: 'CH', status: 'off-label', note: 'Szwajcaria refunduje 5 dziedzin CAM (akupunktura, antropozoficzna, TCM, homeopatia klasyczna, fitoterapia) — IVC NIE jest na liście refundacyjnej KVG' },
      { country: 'AT', status: 'off-label', note: 'Brak potwierdzenia refundacji systemowej; możliwe użycie w protokołach indywidualnych' },
      { country: 'USA', status: 'off-label', note: 'Riordan IVC Protocol od 1995; nie FDA-approved jako lek onkologiczny' },
    ],
    keySources: [
      { cite: 'Qu et al. 2025', journal: 'Int J Vitam Nutr Res', pmid: '40613397', type: 'metaanaliza', finding: 'n=2 722, 8 badań, pooled median OS ratio 1,83 (95% CI 1,40–2,40); pewność dowodów: umiarkowana (wg autorów metaanalizy, nie wytycznych ASCO/NCCN/ESMO)' },
      { cite: 'Bodeker et al. 2024 (PACMAN 2.1)', journal: 'Redox Biology', pmid: '39369582', type: 'RCT-II', finding: 'Rak trzustki, mała próba n=34 leczonych; OS 16,0 vs 8,3 mies.; PFS 6,2 vs 3,9 mies.; HR 0,46 — wymaga potwierdzenia w większych badaniach' },
      { cite: 'Wang et al. 2022 (VITALITY)', journal: 'Clinical Cancer Research', pmid: '35929990', type: 'RCT-III', finding: 'mCRC n=442; bez przewagi w I linii; sygnał w prespecified podgrupie RAS-mut (HR 0,67) — wymaga dedykowanego badania' },
      { cite: 'Yun et al. 2015', journal: 'Science', pmid: '26541605', type: 'mechanistyczne', finding: 'Selektywna toksyczność wobec komórek z mutacją KRAS/BRAF (GLUT1 transport DHA)' },
      { cite: 'He et al. 2025', journal: 'Cell', pmid: '40023152', type: 'mechanistyczne', finding: 'Lysine vitcylation — kowalencyjna modyfikacja STAT1, wzmocnienie odpowiedzi IFN; pierwszy autor: Xiadi He; senior author: Jean J. Zhao' },
    ],
    warning: 'Bezwzględne przeciwwskazanie: niedobór G6PD (badanie przesiewowe przed pierwszym wlewem). IVC nie ma statusu rutynowego standardu leczenia w głównych wytycznych ASCO/NCCN/ESMO.',
  },
  {
    slug: 'jemiola-iscador',
    name: 'Jemioła (Iscador, Viscum album)',
    shortName: 'Jemioła / Iscador',
    category: 'A',
    categoryIndex: 2,
    grade: 'low',
    shortDesc: 'Wyciągi z jemioły (Viscum album) podawane podskórnie. Stosowane głównie jako QoL/symptom support w opiece paliatywnej. Dane mieszane, silne zastrzeżenia metodologiczne.',
    mainIndications: ['poprawa jakości życia (QoL)', 'opieka paliatywna', 'redukcja działań niepożądanych chemioterapii', 'wsparcie immunologiczne (badania mieszane)'],
    regulatory: [
      { country: 'CH', status: 'refundowane', note: 'Jeden z 5 obszarów medycyny komplementarnej refundowanych w obowiązkowym ubezpieczeniu — w ramach medycyny antropozoficznej (do potwierdzenia per produkt)' },
      { country: 'DE', status: 'dopuszczone', note: 'Stosowane w klinikach antropozoficznych; refundacja zależna od konkretnej Krankenkasse i wskazania' },
      { country: 'AT', status: 'dopuszczone', note: 'Stosowane w klinikach antropozoficznych' },
      { country: 'PL', status: 'off-label', note: 'Stosowane w wybranych klinikach' },
    ],
    keySources: [
      { cite: 'Loef & Walach 2020', journal: 'BMC Complement Med Ther', pmid: '32859193', type: 'metaanaliza', finding: 'Poprawa QoL w onkologii — efekt umiarkowany; jakość badań niska do umiarkowanej' },
      { cite: 'Tröger et al. 2014', journal: 'Eur J Cancer', pmid: '24129244', type: 'RCT', finding: 'Rak trzustki — wydłużenie OS w grupie Iscador (mała próba)' },
      { cite: 'Kienle & Kiene 2010', journal: 'Integr Cancer Ther', pmid: '20542901', type: 'review', finding: 'Mechanizm immunomodulacyjny' },
      { cite: 'Ostermann et al. 2020', journal: 'Cancers', pmid: '32708383', type: 'metaanaliza', finding: 'Bezpieczeństwo — niskie ryzyko poważnych działań niepożądanych' },
    ],
    warning: 'Reakcja w miejscu wstrzyknięcia (lokalna gorączka, rumień) jest oczekiwana. Pierwsze podanie zawsze w obecności lekarza.',
  },
  {
    slug: 'kurkumina',
    name: 'Kurkumina',
    shortName: 'Kurkumina',
    category: 'A',
    categoryIndex: 3,
    grade: 'low',
    shortDesc: 'Polifenol z kurkumy długiej. Niska biodostępność doustna wymaga form liposomalnych. Dane głównie RCT-II w wybranych nowotworach.',
    mainIndications: ['szpiczak mnogi (RCT-II)', 'rak jelita grubego (RCT-II z FOLFOX)', 'redukcja zapalenia', 'wsparcie chemioterapii'],
    regulatory: [
      { country: 'PL', status: 'OTC', note: 'Suplement diety' },
      { country: 'DE', status: 'OTC', note: 'Suplement; off-label w protokołach onkologii' },
      { country: 'USA', status: 'OTC', note: 'GRAS status FDA' },
    ],
    keySources: [
      { cite: 'Mirzaei et al. 2017', journal: 'J Cell Physiol', pmid: '28639706', type: 'review', finding: 'Mechanizm — modulacja NF-κB, STAT3, Wnt' },
      { cite: 'Howells et al. 2019', journal: 'J Nutr', pmid: '31132111', type: 'RCT-II', finding: 'mCRC — kurkumina + FOLFOX, bezpieczeństwo + sygnał skuteczności' },
    ],
    warning: 'Interakcje: antykoagulanty (warfaryna), inhibitory CYP3A4/CYP2C9. Konsultacja z lekarzem przy chemioterapii. Bezwzględne przeciwwskazanie: kamica żółciowa z niedrożnością.',
  },
  {
    slug: 'melatonina',
    name: 'Melatonina',
    shortName: 'Melatonina',
    category: 'A',
    categoryIndex: 4,
    grade: 'low',
    shortDesc: 'Hormon szyszynki o właściwościach antyoksydacyjnych. Klasyfikacja: supportive / sleep-circadian adjunct. Brak rekomendacji ASCO/SIO 2023 Anxiety jako głównej interwencji.',
    mainIndications: ['zaburzenia snu w onkologii', 'cykl dobowy zaburzony przez leczenie', 'wsparcie neuroprotekcyjne (badania mieszane)', 'redukcja działań niepożądanych chemio (metaanalizy historyczne)'],
    regulatory: [
      { country: 'PL', status: 'OTC', note: 'Bez recepty; dawki 1–5 mg' },
      { country: 'DE', status: 'dopuszczone', note: 'Recepta dla dawek > 2 mg (Circadin)' },
      { country: 'USA', status: 'OTC', note: 'Suplement; bez recepty' },
    ],
    keySources: [
      { cite: 'Lissoni et al. (metaanaliza historyczna)', journal: 'J Pineal Res', pmid: '15760375', type: 'metaanaliza', finding: 'Onkologia — poprawa QoL, redukcja działań niepożądanych chemio. UWAGA: starsze dane, wymagają walidacji nowszymi RCT.' },
      { cite: 'Seely et al. 2012', journal: 'Integr Cancer Ther', pmid: '22831591', type: 'metaanaliza', finding: 'Redukcja działań niepożądanych chemioterapii' },
    ],
    warning: 'Senność, interakcje z lekami immunosupresyjnymi i przeciwzakrzepowymi. WAŻNE: melatonina NIE figuruje jako rekomendacja ASCO/SIO Anxiety Guidelines 2023 — wcześniejsza informacja na tej stronie była błędna i została poprawiona.',
  },
  {
    slug: 'witamina-d',
    name: 'Witamina D w onkologii',
    shortName: 'Witamina D',
    category: 'A',
    categoryIndex: 5,
    grade: 'moderate',
    shortDesc: 'Korekcja niedoboru witaminy D (cel: 30-60 ng/ml 25-OH-D). Nie jest terapią przeciwnowotworową — jest interwencją prewencyjno-podtrzymującą.',
    mainIndications: ['suplementacja przy niedoborze 25-OH-D < 30 ng/ml', 'wsparcie układu odpornościowego', 'zdrowie kości (zwłaszcza w hormonoterapii)'],
    regulatory: [
      { country: 'PL', status: 'OTC', note: 'Bez recepty; rekomendacja PTEiDD' },
      { country: 'DE', status: 'OTC', note: 'Suplement standardowy' },
    ],
    keySources: [
      { cite: 'Manson et al. 2019 (VITAL Trial)', journal: 'N Engl J Med', pmid: '30415629', type: 'RCT-III', finding: 'n=25 871; redukcja śmiertelności onkologicznej w grupie z BMI normalnym' },
      { cite: 'Keum et al. 2019', journal: 'Ann Oncol', pmid: '30796437', type: 'metaanaliza', finding: 'Suplementacja D3 redukuje śmiertelność onkologiczną o 13%' },
      { cite: 'Chandler et al. 2020', journal: 'JAMA Network Open', pmid: '32584406', type: 'metaanaliza', finding: 'Suplementacja redukuje całkowitą śmiertelność onkologiczną' },
    ],
    warning: 'Hiperkalcemia przy nadmiernej suplementacji — monitorowanie 25-OH-D i Ca. Szczególna ostrożność przy metastazach kostnych.',
  },
  {
    slug: 'omega-3',
    name: 'Kwasy omega-3 (EPA/DHA) w kacheksji',
    shortName: 'Omega-3 (EPA/DHA)',
    category: 'A',
    categoryIndex: 6,
    grade: 'low',
    shortDesc: 'EPA/DHA — możliwy korzystny wpływ na masę ciała i QoL w kacheksji. Efekty na beztłuszczową masę ciała / masę mięśniową są niejednoznaczne.',
    mainIndications: ['kacheksja nowotworowa (dane mieszane)', 'wsparcie masy ciała (nie zawsze masy mięśniowej)', 'redukcja stanu zapalnego', 'fatigue'],
    regulatory: [
      { country: 'PL', status: 'OTC', note: 'Suplement diety lub żywność medyczna' },
      { country: 'USA', status: 'OTC', note: 'Suplement; FDA prescription (Lovaza) dla hipertrójglicerydemii' },
    ],
    keySources: [
      { cite: 'Mocellin et al. 2016', journal: 'Curr Med Chem', pmid: '26630916', type: 'metaanaliza', finding: 'EPA/DHA stabilizują masę ciała w kacheksji' },
      { cite: 'Aktualna metaanaliza 2024 (NSCLC)', journal: 'PMC11363039', doi: 'PMC11363039', type: 'metaanaliza', finding: 'NSCLC zaawansowany: wzrost masy ciała + jakości życia, ALE brak istotnego wpływu na lean body mass / skeletal muscle mass' },
      { cite: 'Pappalardo et al. 2015', journal: 'Nutrition', pmid: '25744421', type: 'review', finding: 'Mechanizm anti-inflammatory' },
    ],
    warning: 'Ostrożność u pacjentów na antykoagulantach (wydłużenie czasu krwawienia). Wybór preparatu z certyfikatem IFOS/GOED (czystość metali ciężkich).',
  },
  {
    slug: 'glutamina',
    name: 'Glutamina — różny status w zależności od wskazania',
    shortName: 'Glutamina',
    category: 'A',
    categoryIndex: 7,
    grade: 'low',
    shortDesc: 'WAŻNE: status zależny od drogi podania, wskazania i populacji. MASCC/ISOO 2020 rekomenduje PRZECIWKO parenteralnej glutaminie w HSCT — nie ma prostej ogólnej rekomendacji "za glutaminą".',
    mainIndications: ['mucositis po radio głowy i szyi (warunkowo)', 'biegunka popromiennna (badania mieszane)', 'redukcja neuropatii oksaliplatyna (RCT)', 'NIE: prewencja oral mucositis w HSCT (rekomendacja PRZECIWKO)'],
    regulatory: [
      { country: 'PL', status: 'OTC', note: 'Żywność specjalnego przeznaczenia medycznego' },
      { country: 'USA', status: 'OTC', note: 'Suplement; MASCC/ISOO 2020 — rekomendacje wskaźnikowe per wskazanie' },
    ],
    keySources: [
      { cite: 'MASCC/ISOO Mucositis Guidelines 2020', journal: 'Support Care Cancer', doi: 'PMC7540329', type: 'wytyczne', finding: 'KLUCZOWE: rekomendacja PRZECIWKO parenteralnej glutaminie w prewencji oral mucositis u pacjentów HSCT. Inne wskazania mają osobne, wskaźnikowe rekomendacje.' },
      { cite: 'Sayles et al. 2016', journal: 'Crit Rev Oncol Hematol', pmid: '27117958', type: 'metaanaliza', finding: 'Redukcja stopnia ciężkości mucositis w wybranych wskazaniach' },
      { cite: 'Vidal-Casariego et al. 2013', journal: 'Clin Nutr', pmid: '23068262', type: 'metaanaliza', finding: 'Glutamina parenteralna — efekty mieszane' },
    ],
    warning: 'NIE stosować parenteralnej glutaminy w HSCT (rekomendacja PRZECIWKO wg MASCC/ISOO 2020). W innych wskazaniach — konsultacja z lekarzem prowadzącym. Ostrożność przy niewydolności wątroby i nerek.',
  },
  {
    slug: 'n-acetylocysteina',
    name: 'N-acetylocysteina (NAC) w onkologii',
    shortName: 'NAC',
    category: 'A',
    categoryIndex: 8,
    grade: 'very-low',
    shortDesc: 'Prekursor glutationu. KONTROWERSJA: niektóre badania sugerują, że NAC może osłabiać efekt chemioterapii opartej na ROS. Bezpieczeństwo i interakcje wymagają nadzoru.',
    mainIndications: ['nefroprotekcja przy cisplatynie (RCT)', 'wsparcie systemu antyoksydacyjnego (dane mieszane)'],
    regulatory: [
      { country: 'PL', status: 'OTC', note: 'Lek bez recepty (mukolityk); off-label onkologia' },
    ],
    keySources: [
      { cite: 'Visacri et al. 2014', journal: 'Mol Cell Biochem', pmid: '24682626', type: 'RCT', finding: 'NAC + cisplatyna — redukcja nefrotoksyczności' },
      { cite: 'Olas 2014', journal: 'Curr Med Chem', pmid: '24438523', type: 'review', finding: 'Mechanizm antyoksydacyjny' },
    ],
    warning: 'KONTROWERSJA: NAC może osłabiać efektywność chemioterapii opartej na ROS (cisplatyna, doksorubicyna, IVC). Konsultacja z onkologiem OBOWIĄZKOWA.',
  },

  // ====================================================================
  // KATEGORIA B — Konwencjonalne technologie/procedury (NIE klasyczne CAM)
  // Uwaga klasyfikacyjna: po audycie 28.05.2026 — te metody są bardziej
  // wyrobami medycznymi/procedurami niż klasyczną medycyną integracyjną.
  // ====================================================================
  {
    slug: 'hipertermia-lokoregionalna',
    name: 'Hipertermia lokoregionalna (RHT)',
    shortName: 'Hipertermia lokoregionalna',
    category: 'B',
    categoryIndex: 1,
    grade: 'moderate',
    shortDesc: 'Podgrzewanie obszaru ciała do 40-43°C w połączeniu z radio/chemioterapią. Stosowana w wyspecjalizowanych ośrodkach w wybranych wskazaniach. Status refundacyjny zależy od kraju, wskazania i ośrodka.',
    mainIndications: ['mięsaki tkanek miękkich (RCT Issels 2018)', 'rak szyjki macicy zaawansowany (Datta 2016)', 'rak pęcherza moczowego (wybrane wskazania)', 'czerniak miejscowo zaawansowany'],
    regulatory: [
      { country: 'DE', status: 'dopuszczone', note: 'Wytyczne DEGRO/ESHO; refundacja zależna od ośrodka i wskazania' },
      { country: 'NL', status: 'dopuszczone', note: 'Wybrane wskazania' },
      { country: 'CH', status: 'dopuszczone', note: 'Wybrane wskazania' },
      { country: 'PL', status: 'eksperymentalne', note: 'Pojedyncze ośrodki' },
    ],
    keySources: [
      { cite: 'Issels et al. 2018', journal: 'JAMA Oncology', pmid: '29800974', type: 'RCT-III', finding: 'Mięsaki — poprawa kontroli miejscowej i przeżycia' },
      { cite: 'Datta et al. 2016', journal: 'Cancer Treat Rev', pmid: '26791316', type: 'metaanaliza', finding: 'Rak szyjki — istotna poprawa kontroli miejscowej' },
    ],
    warning: 'Wymaga doświadczonego ośrodka i odpowiedniego sprzętu (np. BSD-2000). Status refundacyjny i standard-of-care zależą od kraju i wskazania.',
  },
  {
    slug: 'tlenoterapia-hiperbaryczna',
    name: 'Tlenoterapia hiperbaryczna (HBOT) w popromiennych uszkodzeniach',
    shortName: 'HBOT',
    category: 'B',
    categoryIndex: 2,
    grade: 'moderate',
    shortDesc: 'Konwencjonalna procedura leczenia powikłań radioterapii. NIE jest typową onkologią integracyjną — to leczenie późnych powikłań / wound-healing medicine.',
    mainIndications: ['osteoradionekroza szczęki/żuchwy', 'krwiomocz popromieniowy (cystitis hemorrhagica)', 'zapalenie odbytnicy popromienne (proctitis)', 'martwica tkanek miękkich popromienna'],
    regulatory: [
      { country: 'PL', status: 'refundowane', note: 'NFZ — wybrane wskazania UHMS' },
      { country: 'DE', status: 'refundowane', note: 'GKV — wybrane wskazania' },
      { country: 'USA', status: 'refundowane', note: 'UHMS 14 wskazań' },
    ],
    keySources: [
      { cite: 'Bennett et al. 2016 (Cochrane)', journal: 'Cochrane Database Syst Rev', pmid: '27123955', type: 'metaanaliza', finding: 'HBOT skuteczne w późnych uszkodzeniach popromiennych' },
    ],
    warning: 'Przeciwwskazania: nieleczona odma opłucnowa, bleomycyna w wywiadzie (zwłóknienie płuc), doxorubicyna/cisplatyna w ostatnich 24h. Klasyfikacja: konwencjonalna procedura, nie CAM.',
  },
  {
    slug: 'terapia-fotodynamiczna',
    name: 'Terapia fotodynamiczna (PDT) z porfimerem sodowym',
    shortName: 'Terapia fotodynamiczna (PDT)',
    category: 'B',
    categoryIndex: 3,
    grade: 'high',
    shortDesc: 'Konwencjonalna procedura medyczna. NIE jest CAM. PHOTOFRIN FDA-approved dla 4 wskazań klinicznych: paliacja raka przełyku, mikroinwazyjny endobronchial NSCLC, redukcja obstrukcji w endobronchial NSCLC, high-grade dysplasia in Barrett.',
    mainIndications: ['paliacja raka przełyku z obstrukcją', 'mikroinwazyjny endobronchial NSCLC (gdy chirurgia/radio nie wskazane)', 'redukcja obstrukcji w endobronchial NSCLC', 'high-grade dysplasia w przełyku Barretta'],
    regulatory: [
      { country: 'USA', status: 'rejestracja-jako-inne-wskazanie', note: 'FDA approved (PHOTOFRIN) — 4 wskazania powyżej' },
      { country: 'DE', status: 'dopuszczone', note: 'Wybrane wskazania' },
      { country: 'PL', status: 'dopuszczone', note: 'NFZ — pojedyncze ośrodki' },
    ],
    keySources: [
      { cite: 'Agostinis et al. 2011', journal: 'CA Cancer J Clin', pmid: '21617154', type: 'review', finding: 'Kompleksowy przegląd PDT w onkologii' },
      { cite: 'Overholt et al. 2007 (PHOTOFRIN)', journal: 'Gastrointest Endosc', pmid: '17383463', type: 'RCT-III', finding: 'Przełyk Barretta — eliminacja dysplazji' },
      { cite: 'Photofrin FDA label', journal: 'photofrin.com', doi: 'photofrin.com/adp-002.pdf', type: 'wytyczne', finding: '4 oficjalne wskazania FDA' },
    ],
    warning: 'Nadwrażliwość na światło przez 4-6 tygodni po podaniu fotouczulacza. Nie mieszać wskazań Photofrin z innymi fotosensybilizatorami (osobne statusy regulacyjne).',
  },
  {
    slug: 'ttfields-optune',
    name: 'TTFields (Tumor Treating Fields, Optune)',
    shortName: 'TTFields (Optune)',
    category: 'B',
    categoryIndex: 4,
    grade: 'high',
    shortDesc: 'Konwencjonalny wyrób medyczny (NIE CAM). Naprzemienne pole elektryczne ~200 kHz zakłócające podział komórek nowotworowych. FDA approved + CE mark (UE).',
    mainIndications: ['glejak wielopostaciowy (GBM) — nowo zdiagnozowany i nawrotowy', 'międzybłoniak opłucnej', 'metastatyczny NSCLC po platynie (Optune Lua 2024)'],
    regulatory: [
      { country: 'USA', status: 'rejestracja-jako-inne-wskazanie', note: 'FDA approved: 2011 (GBM nawrotowy), 2015 (GBM nowo zdiagnozowany), 2019 (mezothelioma), 2024 (Optune Lua — mNSCLC po platynie, jednocześnie z PD-1/PD-L1 inhibitorami lub docetakselem)' },
      { country: 'EU', status: 'rejestracja-jako-inne-wskazanie', note: 'CE mark (medical device certificate) — NIE EMA, ponieważ EMA dotyczy leków, nie wyrobów medycznych. Optune Lua otrzymał CE Mark dla mNSCLC w 2025.' },
      { country: 'DE', status: 'refundowane', note: 'Wybrane Krankenkassen' },
      { country: 'PL', status: 'eksperymentalne', note: 'Dostępne komercyjnie (Novocure), nierefundowane przez NFZ' },
    ],
    keySources: [
      { cite: 'Stupp et al. 2017 (EF-14)', journal: 'JAMA', pmid: '29260225', type: 'RCT-III', finding: 'GBM n=695; OS 20,9 vs 16,0 mies.; HR 0,63; p<0,001' },
      { cite: 'Ceresoli et al. 2019 (STELLAR)', journal: 'Lancet Oncol', pmid: '31628014', type: 'RCT-II', finding: 'Mezothelioma — OS 18,2 vs 12,1 mies. (kontrola historyczna)' },
      { cite: 'FDA Optune Lua 2024 (P230042)', journal: 'accessdata.fda.gov', doi: 'P230042b.pdf', type: 'wytyczne', finding: 'Metastatic NSCLC po progresji na platynie, jednocześnie z PD-1/PD-L1 lub docetakselem' },
    ],
    warning: 'Klasyfikacja: konwencjonalny wyrób medyczny (CE mark + FDA), nie CAM. Podrażnienia skóry pod elektrodami — najczęstsze działanie niepożądane.',
  },

  // ====================================================================
  // KATEGORIA C — Medycyna stylu życia w onkologii (guideline-supported)
  // ====================================================================
  {
    slug: 'aktywnosc-fizyczna-w-onkologii',
    name: 'Aktywność fizyczna w onkologii',
    shortName: 'Aktywność fizyczna',
    category: 'C',
    categoryIndex: 1,
    grade: 'high',
    shortDesc: 'Jedna z najmocniej udokumentowanych interwencji supportive care i survivorship w onkologii. GRADE high w wytycznych ASCO-SIO 2024.',
    mainIndications: ['zmęczenie związane z nowotworem (CRF) — GRADE high', 'poprawa jakości życia', 'redukcja śmiertelności (rak piersi HR 0,69, jelita 0,71, prostaty 0,73)', 'redukcja lęku i depresji', 'zachowanie masy mięśniowej'],
    regulatory: [
      { country: 'PL', status: 'dopuszczone', note: 'Rekomendacje PTOK' },
      { country: 'USA', status: 'dopuszczone', note: 'ASCO-SIO Fatigue Guideline Update 2024' },
    ],
    keySources: [
      { cite: 'Bower JE et al. 2024 (ASCO-SIO Fatigue Guideline Update)', journal: 'J Clin Oncol', pmid: '38754041', type: 'wytyczne', finding: 'Management of Fatigue in Adult Survivors of Cancer: ASCO-Society for Integrative Oncology Guideline Update. Rekomenduje exercise, CBT, mindfulness-based programs, tai chi/qigong.' },
      { cite: 'Metaanaliza RCT 2026', journal: 'BMJ / PubMed', pmid: '41894932', type: 'metaanaliza', finding: 'n=3 282 pacjentów onkologicznych, 13 RCT; aktywność fizyczna obniża śmiertelność ogólną o 26% (HR 0,74; 95% CI 0,63-0,87; GRADE moderate)' },
      { cite: 'Metaanaliza 1,5 mln pacjentów 2025', journal: 'PubMed', pmid: '40220151', type: 'metaanaliza', finding: '151 kohort; aktywność po diagnozie redukuje śmiertelność swoistą dla nowotworu — rak piersi HR 0,69, jelita 0,71, prostaty 0,73' },
      { cite: 'Friedenreich et al. 2020', journal: 'JNCI Cancer Spectr', pmid: '32368714', type: 'metaanaliza', finding: 'Aktywność po diagnozie — redukcja śmiertelności o 30-40%' },
    ],
    warning: 'Indywidualizacja intensywności — konsultacja z lekarzem przy zaawansowanej chorobie, metastazach kostnych, niestabilności hemodynamicznej.',
  },
  {
    slug: 'dieta-srodziemnomorska',
    name: 'Dieta śródziemnomorska w onkologii',
    shortName: 'Dieta śródziemnomorska',
    category: 'C',
    categoryIndex: 2,
    grade: 'low',
    shortDesc: 'Jeden z najlepiej opisanych modeli żywieniowych w prewencji chorób przewlekłych. W opiece onkologicznej wymaga indywidualizacji przez dietetyka klinicznego.',
    mainIndications: ['prewencja PIERWOTNA raka piersi (PREDIMED — kobiety wysokie ryzyko CV)', 'redukcja CRP i markerów zapalnych', 'poprawa QoL', 'wsparcie podczas leczenia (lifestyle medicine)'],
    regulatory: [
      { country: 'EU', status: 'dopuszczone', note: 'WHO + EUROCARE rekomendacje' },
      { country: 'USA', status: 'dopuszczone', note: 'NCCN Survivorship Guidelines' },
    ],
    keySources: [
      { cite: 'Toledo et al. 2015 (PREDIMED)', journal: 'JAMA Intern Med', pmid: '26365989', type: 'RCT', finding: 'KLUCZOWE: badanie dotyczy PIERWOTNEJ prewencji raka piersi (kobiety bez raka, wysokie ryzyko CV) — NIE prewencji wtórnej ani leczenia. Redukcja ryzyka w grupie diety + EVOO.' },
      { cite: 'Schwingshackl et al. 2017', journal: 'Int J Cancer', pmid: '28316066', type: 'metaanaliza', finding: 'Redukcja śmiertelności onkologicznej o 14%' },
    ],
    warning: 'Dane PREDIMED dotyczą prewencji PIERWOTNEJ. Wcześniejsza informacja na tej stronie błędnie określała ją jako "prewencję wtórną" — poprawione.',
  },
  {
    slug: 'akupunktura-w-onkologii',
    name: 'Akupunktura w onkologii',
    shortName: 'Akupunktura',
    category: 'C',
    categoryIndex: 3,
    grade: 'moderate',
    shortDesc: 'ASCO/SIO Pain Management Guidelines 2022 — silna rekomendacja dla bólu związanego z inhibitorami aromatazy (AIMSS). Inne wskazania — rekomendacje warunkowe.',
    mainIndications: ['ból związany z inhibitorami aromatazy (AIMSS) — rekomendacja silna ASCO/SIO 2022', 'nudności i wymioty po chemioterapii (CINV) — elektroakupunktura PC6', 'fatigue', 'neuropatia obwodowa chemio-indukowana (CIPN)', 'suche oczy/usta po radio H&N'],
    regulatory: [
      { country: 'USA', status: 'dopuszczone', note: 'ASCO/SIO Pain Management Guidelines 2022 (Mao JJ et al., PMID 36122322)' },
      { country: 'DE', status: 'refundowane', note: 'GKV — przewlekły ból krzyża i kolana' },
      { country: 'CH', status: 'refundowane', note: 'KVG — od 2017 (jedna z 5 dziedzin CAM)' },
      { country: 'PL', status: 'dopuszczone', note: 'Stosowane przez wykwalifikowanych lekarzy' },
    ],
    keySources: [
      { cite: 'Mao JJ et al. 2022 (ASCO/SIO Pain Management)', journal: 'J Clin Oncol', pmid: '36122322', type: 'wytyczne', finding: 'Integrative Medicine for Pain Management in Oncology: Society for Integrative Oncology-ASCO Guideline. Acupuncture should be recommended for aromatase inhibitor-related joint pain.' },
      { cite: 'Garcia et al. 2013 (metaanaliza CINV)', journal: 'J Clin Oncol', pmid: '24043755', type: 'metaanaliza', finding: 'Elektroakupunktura redukuje CINV' },
    ],
  },
  {
    slug: 'mbsr-mbcr',
    name: 'MBSR / MBCR (Mindfulness-Based Stress Reduction / Cancer Recovery)',
    shortName: 'MBSR / MBCR',
    category: 'C',
    categoryIndex: 4,
    grade: 'moderate',
    shortDesc: '8-tygodniowy program treningu uważności. NAJSILNIEJSZE zalecenie ASCO/SIO 2023: MBI powinny być oferowane wszystkim chorym dla lęku i depresji.',
    mainIndications: ['lęk i depresja w onkologii (rekomendacja silna ASCO/SIO 2023)', 'fatigue (rekomendacja ASCO/SIO Fatigue 2024)', 'poprawa QoL', 'redukcja stresu', 'strach przed nawrotem choroby (FCR)'],
    regulatory: [
      { country: 'USA', status: 'dopuszczone', note: 'ASCO/SIO Anxiety Guidelines 2023 (Carlson LE et al., PMID 37582238) — silna rekomendacja' },
      { country: 'DE', status: 'dopuszczone', note: 'Częściowo refundowane' },
    ],
    keySources: [
      { cite: 'Carlson LE et al. 2023 (ASCO/SIO Anxiety Guidelines)', journal: 'J Clin Oncol', pmid: '37582238', 