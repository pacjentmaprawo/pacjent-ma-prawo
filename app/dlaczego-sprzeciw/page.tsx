import type { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Dlaczego sprzeciw',
  description: 'Osiem powodów obywatelskiego sprzeciwu wobec projektu UD207. Analiza proporcjonalności, precyzji i skutków regulacji — w tym brak ciągłości opieki pacjentów.',
}

const reasons = [
  {
    number: 1,
    title: 'Cel ochrony pacjenta jest słuszny — ale narzędzia muszą być proporcjonalne',
    content: 'Kary do 1 mln zł i decyzje tymczasowe wymagają zabezpieczeń proceduralnych adekwatnych do skali ingerencji.'
  },
  {
    number: 2,
    title: 'Pojęcie pseudomedycyny nie może być zbyt szerokie',
    content: 'Brak precyzyjnej definicji to ryzyko arbitralnej oceny i objęcia praktyk, które nie są oszustwem.'
  },
  {
    number: 3,
    title: 'Decyzje tymczasowe mogą wywołać nieodwracalne skutki',
    content: 'Ostrzeżenie publiczne lub kara wymierzona przed ostatecznym zakończeniem postępowania może zniszczyć reputację i działalność, nawet jeśli ostatecznie postępowanie zostanie umorzone.'
  },
  {
    number: 4,
    title: 'Lekarze mogą przestać rozmawiać o metodach wspomagających',
    content: 'Efekt mrożący dla wolności rozmowy medycznej narusza relację pacjent–lekarz, która jest fundamentem opieki zdrowotnej.'
  },
  {
    number: 5,
    title: 'Pacjenci mogą zostać wypchnięci poza system',
    content: 'Zamiast być chronieni, pacjenci szukający terapii wspomagających mogą zostać zepchnięci do szarej strefy, gdzie ryzyko jest wyższe.'
  },
  {
    number: 6,
    title: 'Projekt wymaga pełnej transparentności interesariuszy',
    content: 'Kto opiniował projekt, kto brał udział w konsultacjach, jakie konflikty interesów zostały ujawnione — to elementy publicznego zaufania do procesu legislacyjnego.'
  },
  {
    number: 7,
    title: 'Potrzebny jest model rozróżniający kategorie',
    content: 'Oszustwo, eksperyment kliniczny, użycie off-label, terapia wspomagająca, medycyna integracyjna — to różne kategorie wymagające różnego traktowania prawnego.'
  },
  {
    number: 8,
    title: 'Brakuje przepisów o ciągłości opieki pacjentów',
    content: 'UD207 rozszerza kompetencje represyjne RPP, ale nie zawiera ŻADNYCH przepisów o tym, co dzieje się z pacjentami wykluczonego lekarza lub zamkniętego podmiotu. Casus z 2025 r. (zob. sekcja „Co dzieje się z pacjentami") pokazuje, że bez takich gwarancji ustawowych pacjenci pozostają sami — mimo apeli do urzędów.'
  },
]

const proposals = [
  'Precyzyjne definicje',
  'Gradacja ryzyka',
  'Ocena poziomu dowodów (GRADE, OCEBM)',
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
            Osiem powodów obywatelskiego sprzeciwu
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
