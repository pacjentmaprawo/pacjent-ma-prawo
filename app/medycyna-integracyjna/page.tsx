import type { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Check, X, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Na tle Europy — jak inne kraje regulują wspomaganie pacjenta',
  description: 'Państwa UE/UK nie stosują blankietowej definicji „pseudomedycyny”. Stosują modele gradacyjne: metoda, wskazanie, kwalifikacje, status dowodowy i ryzyko. Porównanie na tle UD207.',
}

const weDefend = [
  'Prawo pacjenta do informacji o wszystkich opcjach leczenia',
  'Prawo do rozmowy z lekarzem o terapiach wspomagających',
  'Prawo do drugiej opinii',
  'Prawo do świadomej zgody i autonomii decyzji',
  'Prawo do terapii wspomagających prowadzonych odpowiedzialnie',
  'Prawo do proporcjonalnej i precyzyjnej regulacji',
]
const weDoNotDefend = [
  'Fałszywych obietnic wyleczenia',
  'Zniechęcania pacjenta do skutecznego leczenia',
  'Ukrywania ryzyka i przeciwwskazań',
  'Reklamowania terapii bez podstaw klinicznych',
  'Wykorzystywania chorych i ich rodzin',
  'Zastępowania leczenia o udokumentowanej skuteczności',
]

const models = [
  ['Wielka Brytania — selektywny model NICE', 'NICE filtruje metody według dowodów (np. akupunktura w przewlekłym bólu pierwotnym, NG193; mindfulness w depresji, NG222). NHS wycofał część metod po negatywnej ocenie. Evidence-based filtering, nie blankietowy zakaz.'],
  ['Niemcy — model mieszany G-BA', 'Wybrane metody uzupełniające są refundowane w określonych wskazaniach (m.in. akupunktura w przewlekłym bólu od 2007 r., z wymogiem kwalifikacji), inne pozostają poza refundacją. Decyduje wskazanie i jakość dowodów, nie etykieta.'],
  ['Francja — twarda ocena HAS', 'HAS wycofała część świadczeń z refundacji po negatywnej ocenie skuteczności. Nadzór nad nadużyciami (MIVILUDES) dotyczy zachowań, nie zakazuje metody jako takiej. Akupunktura — wyłącznie lekarska.'],
  ['Szwajcaria — model konstytucyjny', 'Art. 118a Konstytucji Federalnej; pięć metod medycyny komplementarnej objętych ubezpieczeniem powszechnym od 2017 r. — w ramach kwalifikacji i oceny.'],
  ['Włochy / Toskania — regionalna integracja', 'Ustawa regionalna 9/2007 włącza wybrane metody do systemu publicznego za dopłatą, w ramach regionalnych wykazów świadczeń i kwalifikacji.'],
  ['Austria — model lekarski ÖÄK', 'Czternaście dyplomów Izby Lekarskiej (ÖÄK) w obszarze metod komplementarnych, w tym uzupełniającego leczenia wspomagającego w onkologii (od 2007 r.) — wykonywanego przez lekarzy z dodatkowymi kwalifikacjami.'],
]

export default function NaTleEuropyPage() {
  return (
    <div>
      <section className="hero-gradient py-12 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-3">Komparatystyka</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-4 text-balance">
            Na tle Europy: gradacja zamiast blankietowego zakazu
          </h1>
          <p className="text-navy/80 leading-relaxed">
            Żaden ze sprawdzonych systemów ochrony zdrowia w Europie (Wielka Brytania, Niemcy, Francja,
            Belgia, Holandia, Włochy, Austria, Szwajcaria) nie stosuje jednej blankietowej definicji
            „pseudomedycyny”. Wszystkie stosują modele gradacyjne — rozróżniają metodę, wskazanie,
            kwalifikacje osoby wykonującej, status dowodowy i ryzyko dla pacjenta. UD207 nie wprowadza
            żadnego z tych rozróżnień.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {models.map(([title, desc], i) => (
              <Card key={i} className="border border-border rounded-xl">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-navy mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-navy rounded-xl bg-secondary/30 mt-8">
            <CardContent className="p-6 lg:p-8">
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">Wniosek konstytucyjny</h3>
              <p className="text-navy/80 leading-relaxed mb-4">
                <strong>Wspólna cecha tych modeli</strong>: rozróżnienie metody, wskazania, kwalifikacji
                osoby wykonującej, statusu dowodowego i ryzyka dla pacjenta. <strong>UD207 nie stosuje
                żadnego z tych rozróżnień</strong> — operuje jednolitą definicją „praktyki pseudomedycznej”.
              </p>
              <p className="text-navy/80 leading-relaxed">
                Komparatystyka nie dowodzi, że każda metoda jest skuteczna. Dowodzi, że nowoczesne systemy
                zdrowia stosują <strong>gradację</strong>, a nie blankietowe etykiety. UD207 bez gradacji
                ryzykuje niezgodność z zasadą określoności prawa (art. 2 Konstytucji RP, <em>lex certa</em>)
                i proporcjonalności (art. 31 ust. 3).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-navy mb-6">Kontekst WHO</h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Globalna Strategia WHO ds. Medycyny Tradycyjnej, Komplementarnej i Integracyjnej 2025–2034
            (rezolucja WHA78(14) z 27.05.2025, przyjęta z udziałem Polski jako państwa UE) wskazuje, że
            integracja powinna opierać się na czterech filarach: wzmocnieniu dowodów naukowych,
            bezpieczeństwie i regulacjach, integracji z systemami zdrowia oraz innowacjach — a nie na
            blankietowych zakazach.
          </p>
          <a href="https://www.who.int/publications/i/item/9789240113176" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-teal hover:underline underline-offset-4">
            <ExternalLink className="h-4 w-4" /> WHO TCIM Strategy 2025–2034
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 my-16">
        <Card className="border border-teal/30 rounded-xl bg-teal/5">
          <CardContent className="p-6 lg:p-8">
            <p className="text-sm font-medium text-teal tracking-wider uppercase mb-3">Wzorzec języka międzynarodowego</p>
            <h3 className="font-serif text-lg font-semibold text-navy mb-3">Cztery zasady — Macmillan Cancer Support (UK)</h3>
            <ul className="space-y-2 text-navy/80">
              <li className="flex items-start gap-3"><span className="text-teal font-bold">1.</span><span>Komplementarne <strong>nie znaczy</strong> alternatywne.</span></li>
              <li className="flex items-start gap-3"><span className="text-teal font-bold">2.</span><span>Nigdy <strong>zamiast</strong> leczenia konwencjonalnego.</span></li>
              <li className="flex items-start gap-3"><span className="text-teal font-bold">3.</span><span>Bez obietnic <strong>wyleczenia</strong> raka.</span></li>
              <li className="flex items-start gap-3"><span className="text-teal font-bold">4.</span><span>Zawsze <strong>konsultacja</strong> z zespołem medycznym.</span></li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4 italic">Źródło: Macmillan Cancer Support, „About complementary therapies”</p>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border border-border rounded-xl">
            <CardContent className="p-6 lg:p-8">
              <h3 className="font-serif text-xl font-semibold text-navy mb-6">Czego BRONIMY:</h3>
              <ul className="space-y-3">
                {weDefend.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="h-3 w-3 text-teal" /></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border border-border rounded-xl">
            <CardContent className="p-6 lg:p-8">
              <h3 className="font-serif text-xl font-semibold text-navy mb-6">Czego NIE bronimy:</h3>
              <ul className="space-y-3">
                {weDoNotDefend.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-red-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><X className="h-3 w-3 text-red-orange" /></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
