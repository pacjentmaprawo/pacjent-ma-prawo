import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refundacja w UE',
  description: 'Porównanie statusu regulacyjnego onkologii integracyjnej w 7 krajach UE: Niemcy, Szwajcaria, Austria, Francja, Belgia, Holandia, Włochy.',
}

const COUNTRIES = [
  {
    code: 'DE',
    name: 'Niemcy',
    framework: 'Heilpraktikergesetz + GKV (Gesetzliche Krankenversicherung)',
    refunded: ['Hipertermia lokoregionalna (wybrane wskazania DEGRO)', 'Jemioła w paliatywie (obligatoryjnie GKV — paliacja onko)', 'Akupunktura (chronic low back pain i chronic knee pain — G-BA)'],
    note: '50+ tys. Heilpraktikerów; refundacja zależna od konkretnej Krankenkasse',
  },
  {
    code: 'CH',
    name: 'Szwajcaria',
    framework: 'Art. 118a Konstytucji Federalnej (2009), KVG',
    refunded: ['5 metod CAM od 2017 (akupunktura, homeopatia klasyczna, fitoterapia, antropozofia, farmakoterapia TCM) wykonywanych przez kwalifikowanych lekarzy w ramach obowiązkowego ubezpieczenia (AOS/KVG, źródło BAG)'],
    note: 'Najszerszy zakres refundacji CAM w Europie',
  },
  {
    code: 'AT',
    name: 'Austria',
    framework: '§ 11a Ärztegesetz 1998 + ÖÄK Diplome',
    refunded: ['14 Dyplomów ÖÄK dla metod CAM (m.in. Begleitende Krebsbehandlungen)', 'Stosowanie przez lekarzy z dodatkową kwalifikacją'],
    note: 'Brak refundacji systemowej; CAM w gabinetach prywatnych',
  },
  {
    code: 'FR',
    name: 'Francja',
    framework: 'Code de la santé publique',
    refunded: ['Akupunktura wykonywana przez lekarza (Sécurité Sociale)', 'Wybrane metody w protokołach onkologicznych szpitali publicznych'],
    note: 'Homeopatia wycofana z refundacji 1.01.2021. Restrykcyjne podejście do CAM.',
  },
  {
    code: 'BE',
    name: 'Belgia',
    framework: 'Loi Colla 1999',
    refunded: ['Wybrane praktyki niekonwencjonalne w ramie Loi Colla 1999 (akupunktura, homeopatia, osteopatia, chiropraktyka) — implementacja ograniczona/niepełna'],
    note: 'Loi Colla reguluje CAM od 1999; ograniczona refundacja',
  },
  {
    code: 'NL',
    name: 'Holandia',
    framework: 'Wet BIG (Wet op de Beroepen in de Individuele Gezondheidszorg)',
    refunded: ['Hipertermia lokoregionalna w wybranych wskazaniach', 'Akupunktura w pakietach ubezpieczeniowych'],
    note: 'CAM głównie przez dodatkowe ubezpieczenia komercyjne',
  },
  {
    code: 'IT',
    name: 'Włochy',
    framework: 'Toskania — Ustawa Regionalna 9/2007',
    refunded: ['Wybrane metody CAM w SSR Toskania (akupunktura, homeopatia, fitoterapia)', 'Inne regiony — różne podejścia'],
    note: 'Bardzo zróżnicowane regionalnie; Toskania najbardziej liberalna',
  },
]

export default function RefundacjaPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">Status regulacyjny onkologii integracyjnej w UE</h1>
        <p className="text-lg text-muted-foreground">Porównanie 7 krajów UE — ramy prawne, zakres refundacji, uwagi praktyczne.</p>
      </header>

      <div className="space-y-4">
        {COUNTRIES.map((c) => (
          <article key={c.code} className="rounded-lg border bg-card p-5">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xl font-bold text-primary">{c.code}</span>
              <h2 className="font-serif text-xl font-semibold">{c.name}</h2>
            </div>
            <p className="mt-3 text-sm">
              <strong>Ramy prawne:</strong> <span className="text-muted-foreground">{c.framework}</span>
            </p>
            <p className="mt-2 text-sm">
              <strong>Zakres refundacji / dopuszczenia:</strong>
            </p>
            <ul className="mt-1 list-disc pl-5 text-sm text-muted-foreground">
              {c.refunded.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm italic text-muted-foreground">{c.note}</p>
          </article>
        ))}
      </div>

      <aside className="rounded-lg border bg-muted/30 p-4 text-sm">
        <p>
          <strong>Wniosek:</strong> systemy regulacyjne CAM w UE są bardzo zróżnicowane.
          Szwajcaria refunduje 5 wyspecjalizowanych metod CAM od 2017 r. wykonywanych przez kwalifikowanych lekarzy w ramach obowiązkowego ubezpieczenia. Niemcy mają
          najlepiej rozwinięty system Heilpraktikerów (50+ tys.). Polska nie ma odpowiednika —
          stosuje wyłącznie konwencjonalną medycynę systemu publicznego, a CAM dostępna jest
          w gabinetach prywatnych jako świadczenia indywidualne.
        </p>
      </aside>
    </div>
  )
}
