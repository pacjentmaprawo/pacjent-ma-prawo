import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Słownik pojęć',
  description: 'Słownik podstawowych pojęć z onkologii integracyjnej i EBM.',
}

const TERMS = [
  { term: 'CAM', def: 'Complementary and Alternative Medicine — medycyna komplementarna i alternatywna. Zbiorcza nazwa dla metod spoza głównego nurtu medycyny konwencjonalnej.' },
  { term: 'Onkologia integracyjna', def: 'Połączenie leczenia konwencjonalnego (chemio, radio, immunoterapia, chirurgia) z udokumentowanymi metodami CAM — w celu poprawy efektów leczenia i jakości życia.' },
  { term: 'EBM', def: 'Evidence-Based Medicine — medycyna oparta na dowodach. Standard prowadzenia praktyki klinicznej oparty na publikacjach peer-reviewed.' },
  { term: 'GRADE', def: 'System oceny jakości dowodów. 4 poziomy: high, moderate, low, very low. Stosowany przez ESMO, NCCN, ASCO, WHO.' },
  { term: 'RCT', def: 'Randomized Controlled Trial — randomizowane badanie kontrolowane. Złoty standard badań klinicznych. Pacjenci losowo przydzielani do grupy leczonej i kontrolnej.' },
  { term: 'Metaanaliza', def: 'Statystyczna analiza wielu badań klinicznych na ten sam temat. Najmocniejszy poziom dowodów EBM.' },
  { term: 'PMID', def: 'PubMed Identifier — unikatowy numer publikacji w bazie PubMed.' },
  { term: 'DOI', def: 'Digital Object Identifier — uniwersalny identyfikator publikacji elektronicznej.' },
  { term: 'Off-label', def: 'Stosowanie leku zarejestrowanego dla innego wskazania niż zatwierdzone przez agencję rejestracyjną. Legalne pod nadzorem lekarza.' },
  { term: 'KOI', def: 'Conflict of Interest — konflikt interesów. Ujawnienie powiązań finansowych autora publikacji z firmami farmaceutycznymi (wymagane przez ICMJE).' },
  { term: 'ICMJE', def: 'International Committee of Medical Journal Editors — międzynarodowy komitet standardów publikacji medycznych. Wymaga ujawnienia KOI z 36 miesięcy.' },
  { term: 'OS', def: 'Overall Survival — całkowite przeżycie od momentu rozpoznania lub rozpoczęcia leczenia.' },
  { term: 'PFS', def: 'Progression-Free Survival — czas od rozpoczęcia leczenia do progresji choroby lub zgonu.' },
  { term: 'HR', def: 'Hazard Ratio — ryzyko względne. HR=1,0 brak różnicy. HR=0,5 redukcja ryzyka o 50%.' },
  { term: 'NNT', def: 'Number Needed to Treat — ile osób trzeba leczyć by jednej pomóc.' },
  { term: 'MSR', def: 'Median Survival Ratio — stosunek median przeżycia między grupą leczoną a kontrolną.' },
  { term: 'IVC', def: 'Intravenous Vitamin C — wlewy dożylnej witaminy C w dawkach 25-100 g.' },
  { term: 'Vitcylation', def: 'Nowo opisany mechanizm działania witaminy C: kowalencyjna modyfikacja białka STAT1, wzmocnienie odpowiedzi interferonowej (Zhao 2025, Cell, PMID 40023152).' },
  { term: 'TTFields', def: 'Tumor Treating Fields — naprzemienne pole elektryczne 200 kHz zakłócające podział komórek nowotworowych. Optune (Novocure) — FDA approved dla GBM.' },
  { term: 'CRF', def: 'Cancer-Related Fatigue — zmęczenie związane z nowotworem i jego leczeniem. Jeden z najczęstszych objawów onkologicznych.' },
  { term: 'CINV', def: 'Chemotherapy-Induced Nausea and Vomiting — nudności i wymioty po chemioterapii.' },
  { term: 'CIPN', def: 'Chemotherapy-Induced Peripheral Neuropathy — neuropatia obwodowa indukowana chemioterapią.' },
  { term: 'Kacheksja', def: 'Zespół wyniszczenia nowotworowego — utrata masy mięśniowej, osłabienie, anoreksja.' },
  { term: 'QoL', def: 'Quality of Life — jakość życia. Mierzona standardowymi kwestionariuszami (EORTC QLQ-C30, FACT-G).' },
  { term: 'Riordan IVC Protocol', def: 'Standardowy protokół podawania dożylnej witaminy C w onkologii, opracowany w 1995 r. (Riordan Clinic, USA). Określa kwalifikację (G6PD), dawkowanie, monitorowanie.' },
  { term: 'GRADE moderate', def: 'Średni poziom pewności dowodów — prawdziwy efekt prawdopodobnie jest zbliżony do oszacowania, ale różnica jest możliwa.' },
]

export default function SlownikPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">Słownik pojęć</h1>
      <p className="text-lg text-muted-foreground">Krótkie definicje pojęć stosowanych na stronie — onkologia integracyjna i EBM.</p>

      <dl className="space-y-4">
        {TERMS.map((t) => (
          <div key={t.term} className="rounded-lg border bg-card p-4">
            <dt className="font-serif text-lg font-semibold">{t.term}</dt>
            <dd className="mt-1 text-sm text-muted-foreground">{t.def}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
