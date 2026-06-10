import type { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Dlaczego sprzeciw',
  description: 'Dziesięć powodów obywatelskiego sprzeciwu wobec projektu UD207. Analiza proporcjonalności, precyzji i skutków regulacji — w tym brak ciągłości opieki pacjentów.',
}

const reasons = [
  {
    number: 1,
    title: 'Cel ochrony pacjenta jest słuszny — ale narzędzia muszą być proporcjonalne',
    content: 'Kary do 1 mln zł i decyzje tymczasowe wymagają zabezpieczeń proceduralnych adekwatnych do skali ingerencji.'
  },
  {
    number: 2,
    title: 'Prawo pacjenta do wyboru terapii jest częścią EBM, nie wyjątkiem od niej',
    content: 'Medycyna oparta na dowodach (EBM) z definicji łączy trzy elementy: najlepsze dostępne dowody naukowe, doświadczenie kliniczne oraz preferencje i wartości pacjenta. Zawężając ocenę wyłącznie do tego, czy metoda figuruje w wytycznych, projekt pomija trzeci filar — i odbiera pacjentowi rolę, którą sam standard EBM mu przyznaje. Poszanowanie świadomego wyboru pacjenta nie jest odstępstwem od medycyny opartej na dowodach, lecz jej elementem.'
  },
  {
    number: 3,
    title: 'Pojęcie pseudomedycyny nie może być zbyt szerokie',
    content: 'Brak precyzyjnej definicji to ryzyko arbitralnej oceny i objęcia praktyk, które nie są oszustwem.'
  },
  {
    number: 4,
    title: 'Potrzebny jest model rozróżniający kategorie',
    content: 'Oszustwo, eksperyment kliniczny, użycie off-label, terapia wspomagająca i medycyna integracyjna to różne kategorie, wymagające różnego traktowania prawnego — zamiast jednej blankietowej etykiety „pseudomedycyny”, która obejmuje zarówno szarlatana, jak i terapię popartą badaniami.'
  },
  {
    number: 5,
    title: 'Decyzje tymczasowe i publikacja przed prawomocnością mogą wywołać nieodwracalne skutki',
    content: 'Ostrzeżenie publiczne lub decyzja tymczasowa ogłoszone przed ostatecznym zakończeniem postępowania mogą zniszczyć reputację i działalność — nawet jeśli postępowanie zostanie później umorzone. Publikowanie nieprawomocnych rozstrzygnięć trudno pogodzić z domniemaniem niewinności (art. 42 ust. 3 Konstytucji RP).'
  },
  {
    number: 6,
    title: 'Jeden urząd nie powinien łączyć zbyt wielu ról',
    content: 'Projekt kumuluje w Rzeczniku Praw Pacjenta funkcje organu prowadzącego postępowanie, nakładającego sankcję, publikującego rozstrzygnięcie i kontrolującego jego wykonanie. Połączenie tych ról bez niezależnej kontroli sądowej na wczesnym etapie budzi poważne wątpliwości co do gwarancji rzetelnego postępowania (art. 45 Konstytucji RP).'
  },
  {
    number: 7,
    title: 'Lekarze i naukowcy mogą przestać otwarcie mówić o metodach wspomagających',
    content: 'Ryzyko kar finansowych może wywołać efekt mrożący nie tylko w rozmowie lekarza z pacjentem, ale też w debacie naukowej i w informowaniu o legalnych terapiach wspomagających — także tych refundowanych w innych krajach UE. Wolność wypowiedzi i badań naukowych (art. 54 i art. 73 Konstytucji RP) jest tu wartością współchronioną.'
  },
  {
    number: 8,
    title: 'Pacjenci mogą zostać wypchnięci poza system',
    content: 'Zamiast być chronieni, pacjenci szukający terapii wspomagających mogą zostać zepchnięci do szarej strefy, gdzie ryzyko jest wyższe.'
  },
  {
    number: 9,
    title: 'Projekt wymaga pełnej transparentności interesariuszy',
    content: 'Kto opiniował projekt, kto brał udział w konsultacjach, jakie konflikty interesów zostały ujawnione — to elementy publicznego zaufania do procesu legislacyjnego.'
  },
  {
    number: 10,
    title: 'Brakuje przepisów o ciągłości opieki pacjentów',
    content: 'UD207 rozszerza kompetencje represyjne RPP, ale nie zawiera ŻADNYCH przepisów o tym, co dzieje się z pacjentami wykluczonego lekarza lub zamkniętego podmiotu. Casus z 2025 r. (zob. sekcja „Co dzieje się z pacjentami”) pokazuje, że bez takich gwarancji ustawowych pacjenci pozostają sami — mimo apeli do urzędów.'
  },
]

const proposals = [
  'Precyzyjne definicje',
  'Gradacja ryzyka',
  'Realna kontrola sądowa decyzji RPP (model UOKiK)',
  'Poszanowanie świadomego wyboru pacjenta',
  'Obowiązek informacji dla pacjenta',
  'Zakaz zastępowania terapii standardowej',
  'Realna procedura odwoławcza',
  'Transparentność konfliktów interesów',
]

export default function DlaczegoSprzeciwPage() {
  return (
    <div>
      <section className="hero-gradient py-12 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-3">Argumentacja</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-4 text-balance">
            Dziesięć powodów obywatelskiego sprzeciwu
          </h1>
          <p className="text-navy/80 leading-relaxed">
            Ten sprzeciw nie dotyczy celu projektu UD207 — ten jest słuszny. Dotyczy zakresu,
            precyzji i proporcjonalności proponowanych narzędzi prawnych.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-16 mt-16">
        <div className="space-y-6">
          {reasons.map((reason) => (
            <Card key={reason.number} className="card-accent-red border border-border rounded-xl card-lift">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-serif font-semibold text-red-orange">{reason.number}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.content}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-navy mb-8 text-center">
            Co proponujemy zamiast
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {proposals.map((proposal, index) => (
              <Badge key={index} className="bg-teal/10 text-teal border border-teal/20 px-4 py-2 text-sm">
                {proposal}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
