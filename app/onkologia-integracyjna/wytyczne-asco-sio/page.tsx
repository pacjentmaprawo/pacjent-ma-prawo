import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wytyczne ASCO/SIO/NCCN/ESMO i kontekst międzynarodowy',
  description: 'Wytyczne onkologii integracyjnej (ASCO/SIO 2022-2024, NCCN, ESMO) + Globalna Strategia WHO TCIM 2025-2034.',
}

const GUIDELINES = [
  {
    name: 'ASCO/SIO Integrative Pain Management Guidelines',
    author: 'Mao JJ et al.',
    year: '2022',
    journal: 'Journal of Clinical Oncology',
    pmid: '36122322',
    link: 'https://pubmed.ncbi.nlm.nih.gov/36122322/',
    desc: 'Integrative Medicine for Pain Management in Oncology: Society for Integrative Oncology–ASCO Guideline. KLUCZOWA rekomendacja: acupuncture SHOULD be recommended dla aromatase inhibitor-related joint pain (AIMSS). Akupunktura, akupresura i refleksologia MAY be offered dla bólu nowotworowego ogólnego i mięśniowo-szkieletowego. Masaż dla bólu związanego z chirurgią.',
  },
  {
    name: 'ASCO/SIO Anxiety and Depression Guidelines',
    author: 'Carlson LE et al.',
    year: '2023',
    journal: 'Journal of Clinical Oncology',
    pmid: '37582238',
    link: 'https://pubmed.ncbi.nlm.nih.gov/37582238/',
    desc: 'Integrative Oncology Care of Symptoms of Anxiety and Depression in Adults With Cancer: SIO-ASCO Guideline. NAJSILNIEJSZE zalecenie: MBI (Mindfulness-Based Interventions, w tym MBSR/MBCT/MBCR) powinny być oferowane wszystkim chorym podczas aktywnego leczenia i po jego zakończeniu. Dla lęku: joga, relaksacja, muzykoterapia, refleksologia, aromaterapia (inhalacja), akupunktura, tai chi/qigong (po leczeniu). UWAGA: w tej wytycznej NIE ma rekomendacji dla melatoniny — wcześniejsza informacja na tej stronie była błędna i została poprawiona.',
  },
  {
    name: 'ASCO-SIO Cancer-Related Fatigue Guideline Update',
    author: 'Bower JE et al.',
    year: '2024',
    journal: 'Journal of Clinical Oncology',
    pmid: '38754041',
    link: 'https://pubmed.ncbi.nlm.nih.gov/38754041/',
    desc: 'Management of Fatigue in Adult Survivors of Cancer: ASCO-Society for Integrative Oncology Guideline Update. Oparte na 113 RCT z lat 2013-2023. Silne zalecenia: ćwiczenia fizyczne, CBT (z hipnozą lub bez), programy oparte na uważności (mindfulness), tai chi/qigong. UWAGA: poprawna nazwa to ASCO-SIO, NIE ASCO/SIO/MASCC/ESMO (poprawka po audycie).',
  },
  {
    name: 'ASCO Cannabis and Cannabinoids Guidelines',
    author: 'Braun IM et al.',
    year: '2024',
    journal: 'Journal of Clinical Oncology',
    link: 'https://ascopubs.org/doi/10.1200/JCO.24.00882',
    desc: 'KLUCZOWA rekomendacja: klinicyści POWINNI ODRADZAĆ stosowanie konopi lub kanabinoidów jako leczenia skierowanego na nowotwór, chyba że w ramach badania klinicznego. Większość rekomendacji warunkowych (low evidence) dla wsparcia objawowego.',
  },
  {
    name: 'MASCC/ISOO Mucositis Guidelines',
    author: 'Elad S et al.',
    year: '2020',
    journal: 'Supportive Care in Cancer',
    doi: 'PMC7540329',
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7540329/',
    desc: 'Profilaktyka i leczenie mucositis po chemio/radioterapii. WAŻNE: rekomendacja PRZECIWKO parenteralnej glutaminie w prewencji oral mucositis u pacjentów HSCT. Inne wskazania glutaminy mają osobne, wskaźnikowe rekomendacje.',
  },
  {
    name: 'NCCN Distress Management Guidelines',
    author: 'NCCN Panel',
    year: '2024',
    journal: 'NCCN.org',
    link: 'https://www.nccn.org/guidelines/category_3',
    desc: 'Standardy postępowania w distresie onkologicznym — psychoterapia, mindfulness, ćwiczenia, akupunktura.',
  },
  {
    name: 'ESMO Cancer Survivorship Guidelines',
    author: 'Vaz-Luis I et al.',
    year: '2022',
    journal: 'Annals of Oncology',
    link: 'https://www.esmo.org/guidelines',
    desc: 'Standardy opieki nad pacjentami po leczeniu onkologicznym. Aktywność fizyczna, dieta, redukcja używek, monitorowanie nawrotów.',
  },
]

const NEW_DATA_2024_2026 = [
  {
    label: 'FDA Optune Lua 2024 — TTFields dla mNSCLC',
    desc: 'Optune Lua (TTFields) zatwierdzone przez FDA dla metastatycznego NSCLC po progresji na chemioterapii platynowej, jednocześnie z PD-1/PD-L1 inhibitorami lub docetakselem. EU: CE mark (NIE EMA — bo EMA dotyczy leków, nie wyrobów medycznych).',
    link: 'https://www.accessdata.fda.gov/cdrh_docs/pdf23/P230042b.pdf',
  },
  {
    label: 'Metaanaliza aktywności fizycznej 2026',
    desc: 'Meta-analiza 13 RCT, n=3 282 pacjentów: aktywność fizyczna obniża śmiertelność ogólną o 26% (HR 0,74; 95% CI 0,63-0,87; GRADE moderate).',
    link: 'https://pubmed.ncbi.nlm.nih.gov/41894932/',
  },
  {
    label: 'Metaanaliza 1,5 mln pacjentów 2025',
    desc: '151 kohort: aktywność po diagnozie redukuje śmiertelność swoistą — rak piersi HR 0,69, jelita 0,71, prostaty 0,73.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/40220151/',
  },
  {
    label: 'IVC — Bodeker 2024 (PACMAN 2.1)',
    desc: 'RCT fazy II w przerzutowym raku trzustki: IVC + chemio — OS 16,0 vs 8,3 mies., HR 0,46. Mała próba (34 leczonych).',
    link: 'https://pubmed.ncbi.nlm.nih.gov/39369582/',
  },
  {
    label: 'IVC — Qu 2025 metaanaliza',
    desc: 'Metaanaliza 8 badań, n=2 722: pooled median OS ratio 1,83. UWAGA: poprawny autor to Qu (NIE Vissers).',
    link: 'https://pubmed.ncbi.nlm.nih.gov/40613397/',
  },
  {
    label: 'IVC — He 2025 (Cell) lysine vitcylation',
    desc: 'Mechanizm: kowalencyjna modyfikacja STAT1, wzmocnienie odpowiedzi IFN. Pierwszy autor: Xiadi He (NIE Zhao — Zhao to senior author).',
    link: 'https://pubmed.ncbi.nlm.nih.gov/40023152/',
  },
]

const WHO_UE_CONTEXT = [
  {
    label: 'WHA78(14) — Globalna Strategia WHO TCIM 2025-2034',
    date: '26-27 maja 2025',
    desc: 'Światowe Zgromadzenie Zdrowia (WHO) przyjęło Globalną Strategię ds. Medycyny Tradycyjnej, Komplementarnej i Integracyjnej (TCIM) 2025-2034. Polska jako państwo członkowskie WHO i UE była stroną przyjęcia. Strategia: wzmacnianie bazy dowodowej, mechanizmów regulacyjnych, zintegrowanych modeli świadczeń. WHO uruchomiło globalną bibliotekę medycyny tradycyjnej z ponad 1,6 mln rekordów. 40-90% populacji państw WHO korzysta z medycyny tradycyjnej.',
    link: 'https://www.who.int/news/item/02-06-2025-wha78--traditional-medicine-takes-centre-stage',
  },
  {
    label: 'Oświadczenie UE w sprawie TCIM',
    date: '24 maja 2025',
    desc: 'UE — w imieniu 27 państw członkowskich, w tym Polski — wskazała na potrzebę odpowiedzialnej integracji medycyny tradycyjnej i komplementarnej, w oparciu o EBM, bezpieczeństwo, jakość, skuteczność i efektywność kosztową.',
    link: 'https://www.who.int/teams/who-global-traditional-medicine-centre/traditional-medicine-strategy-2025-2034',
  },
]

export default function WytycznePage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
          Międzynarodowe wytyczne i kontekst regulacyjny
        </h1>
        <p className="text-lg text-muted-foreground">
          Wytyczne ASCO/SIO 2022-2024, NCCN, ESMO + Globalna Strategia WHO TCIM 2025-2034.
          Wszystkie linki prowadzą do oryginalnych dokumentów (PubMed/DOI).
        </p>
      </header>

      <section>
        <h2 className="mb-4 font-serif text-2xl font-semibold">Wytyczne ASCO-SIO i pokrewne</h2>
        <ul className="space-y-4">
          {GUIDELINES.map((g) => (
            <li key={g.name} className="rounded-lg border bg-card p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-serif text-lg font-semibold">{g.name}</h3>
                <span className="text-sm text-muted-foreground">{g.year}</span>
              </div>
              <p className="mt-1 text-sm">
                <strong>{g.author}</strong> · <em>{g.journal}</em>
                {g.pmid && <> · PMID {g.pmid}</>}
              </p>
              <p className="mt-3 text-sm">{g.desc}</p>
              <a
                href={g.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-medium text-primary underline"
              >
                Przejdź do oryginału →
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 font-serif text-2xl font-semibold">
          Nowe dane 2024-2026 (uzupełnienia po audycie)
        </h2>
        <ul className="space-y-4">
          {NEW_DATA_2024_2026.map((d) => (
            <li key={d.label} className="rounded-lg border bg-card p-5">
              <h3 className="font-serif text-base font-semibold">{d.label}</h3>
              <p className="mt-2 text-sm">{d.desc}</p>
              <a
                href={d.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-medium text-primary underline"
              >
                Źródło →
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 font-serif text-2xl font-semibold">
          Kontekst międzynarodowy — WHO i UE 2025
        </h2>
        <ul className="space-y-4">
          {WHO_UE_CONTEXT.map((c) => (
            <li key={c.label} className="rounded-lg border border-primary/30 bg-primary/5 p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-serif text-base font-semibold">{c.label}</h3>
                <span className="text-sm font-medium text-primary">{c.date}</span>
              </div>
              <p className="mt-2 text-sm">{c.desc}</p>
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-medium text-primary underline"
              >
                Źródło →
              </a>
            </li>
          ))}
        </ul>
      </section>

      <aside className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm dark:border-amber-700 dark:bg-amber-900/20">
        <p>
          <strong>Uwaga:</strong> wytyczne ASCO/SIO/NCCN/ESMO są aktualizowane co 2-3 lata.
          Daty publikacji powyżej dotyczą aktualnych wersji na dzień rewizji strony (28 maja 2026).
          Strona zaktualizowana po audycie Perplexity + ChatGPT — korekty obejmują m.in. nazwy
          autorów (Qu vs Vissers, He vs Zhao, Bower), prawidłowe klasyfikacje (Mucositis Guidelines —
          rekomendacja PRZECIWKO parenteralnej glutaminie w HSCT) oraz dodanie ASCO Cannabis 2024
          i WHO TCIM 2025-2034.
        </p>
      </aside>
    </div>
  )
}
