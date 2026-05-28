import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wytyczne ASCO/SIO/NCCN/ESMO',
  description: 'Międzynarodowe wytyczne onkologii integracyjnej — ASCO, SIO, NCCN, ESMO.',
}

const GUIDELINES = [
  {
    name: 'ASCO/SIO Integrative Pain Management Guidelines',
    year: '2022',
    journal: 'Journal of Clinical Oncology',
    link: 'https://ascopubs.org/doi/10.1200/JCO.22.00857',
    desc: 'Akupunktura, masaż, mindfulness, joga, hipnoza w leczeniu bólu w onkologii. Silne rekomendacje dla akupunktury w bólu mięśniowo-szkieletowym i ból przewlekły, dla masażu w bólu związanym z chirurgią.',
  },
  {
    name: 'ASCO/SIO Anxiety and Depression Guidelines',
    year: '2023',
    journal: 'Journal of Clinical Oncology',
    link: 'https://ascopubs.org/doi/10.1200/JCO.23.00475',
    desc: 'MBSR, joga, akupunktura, terapie kreatywne dla lęku i depresji u pacjentów onkologicznych. Silna rekomendacja dla MBSR. Melatonina dla snu i lęku — warunkowa rekomendacja.',
  },
  {
    name: 'ASCO/SIO/MASCC/ESMO Fatigue Guidelines',
    year: '2024',
    journal: 'Journal of Clinical Oncology',
    link: 'https://ascopubs.org/doi/10.1200/JCO.23.02573',
    desc: 'Aktywność fizyczna jako najskuteczniejsza interwencja dla zmęczenia związanego z nowotworem (GRADE high). MBSR, joga, akupunktura jako rekomendacje silne.',
  },
  {
    name: 'ASCO/SIO Cannabis and Cannabinoids Guidelines',
    year: '2024',
    journal: 'Journal of Clinical Oncology',
    link: 'https://ascopubs.org/doi/10.1200/JCO.24.00882',
    desc: 'Stosowanie kannabinoidów w onkologii — nudności, ból, anoreksja. Większość rekomendacji warunkowych (low evidence).',
  },
  {
    name: 'NCCN Distress Management Guidelines',
    year: '2024',
    journal: 'NCCN.org',
    link: 'https://www.nccn.org/guidelines/category_3',
    desc: 'Standardy postępowania w distresie onkologicznym — psychoterapia, mindfulness, ćwiczenia, akupunktura.',
  },
  {
    name: 'ASCO/MASCC/ISOO Mucositis Guidelines',
    year: '2020',
    journal: 'Supportive Care in Cancer',
    link: 'https://link.springer.com/article/10.1007/s00520-020-05636-1',
    desc: 'Profilaktyka i leczenie mucositis po chemio/radioterapii. Glutamina — warunkowa rekomendacja w wybranych wskazaniach. Krioterapia jamy ustnej dla 5-FU.',
  },
  {
    name: 'ESMO Cancer Survivorship Guidelines',
    year: '2022',
    journal: 'Annals of Oncology',
    link: 'https://www.esmo.org/guidelines',
    desc: 'Standardy opieki nad pacjentami po leczeniu onkologicznym. Aktywność fizyczna, dieta, redukcja używek, monitorowanie nawrotów.',
  },
]

export default function WytycznePage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">Międzynarodowe wytyczne onkologii integracyjnej</h1>
        <p className="text-lg text-muted-foreground">Kluczowe wytyczne ASCO, SIO, NCCN, ESMO. Wszystkie linki prowadzą do oryginalnych dokumentów.</p>
      </header>

      <ul className="space-y-4">
        {GUIDELINES.map((g) => (
          <li key={g.name} className="rounded-lg border bg-card p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-serif text-lg font-semibold">{g.name}</h2>
              <span className="text-sm text-muted-foreground">{g.year}</span>
            </div>
            <p className="mt-1 text-sm italic text-muted-foreground">{g.journal}</p>
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

      <aside className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm dark:border-amber-700 dark:bg-amber-900/20">
        <p>
          <strong>Uwaga:</strong> wytyczne ASCO/SIO/NCCN/ESMO są aktualizowane co 2-3 lata.
          Daty publikacji powyżej dotyczą aktualnych wersji na dzień rewizji strony. Sprawdź
          oficjalne strony organizacji dla najnowszych wersji.
        </p>
      </aside>
    </div>
  )
}
