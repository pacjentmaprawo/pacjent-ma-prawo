import type { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, AlertTriangle, FileText, Users } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Co dzieje się z pacjentami',
  description: 'Casus z 2025 r.: gdy lekarz zostaje wykluczony, kilkudziesięciu pacjentów onkologicznych traci opiekę z dnia na dzień. Apele do urzędów. Brak reakcji RPP. UD207 nie zawiera przepisów o ciągłości opieki.',
}

const timeline = [
  {
    date: '9 stycznia 2025',
    title: 'Orzeczenie Naczelnego Sądu Lekarskiego',
    body: 'NSL zawiesza na 1 rok prawo wykonywania zawodu lekarzowi onkologowi prowadzącemu od kilkunastu lat ambulatoryjną klinikę integracyjną. Orzeczenie natychmiast wykonalne.',
    type: 'event',
  },
  {
    date: '10 stycznia 2025',
    title: 'Pacjenci tracą opiekę z dnia na dzień',
    body: 'Kilkudziesięciu pacjentów onkologicznych w trakcie aktywnych terapii (witamina C dożylna, kurkumina, salinomycyna w wybranych protokołach, bio-elektroterapia) zostaje pozbawionych lekarza prowadzącego. Żaden organ państwa nie wskazuje procedury awaryjnej ani lekarza zastępczego.',
    type: 'consequence',
  },
  {
    date: 'styczeń – grudzień 2025',
    title: 'Apele pacjentów do urzędów państwowych',
    body: 'Pacjenci kierują pisemne apele do Ministerstwa Zdrowia, Naczelnej Izby Lekarskiej, Narodowego Funduszu Zdrowia oraz Rzecznika Praw Pacjenta — organu, którego ustawowym zadaniem jest ochrona praw pacjentów. Uruchamiają własną stronę dokumentującą sytuację: pacjencidoktoraszalusia.pl',
    type: 'action',
  },
  {
    date: 'styczeń – grudzień 2025',
    title: 'Brak publicznej, merytorycznej reakcji RPP',
    body: 'Mimo udokumentowanych apeli kilkudziesięciu pacjentów, w okresie 11 miesięcy nie odnotowano publicznej, merytorycznej interwencji Rzecznika Praw Pacjenta w sprawie ciągłości opieki nad pacjentami dotkniętymi wykluczeniem ich lekarza.',
    type: 'gap',
  },
  {
    date: 'grudzień 2025',
    title: 'Sąd Najwyższy uchyla orzeczenie NSL',
    body: 'SN uwzględnia kasację, uchyla orzeczenie NSL z 9.01.2025, umarza całe postępowanie. W uzasadnieniu wskazuje na rażące naruszenia prawa do obrony w postępowaniu przed sądem lekarskim. Lekarz odzyskuje prawo wykonywania zawodu.',
    type: 'resolution',
  },
  {
    date: 'styczeń 2026',
    title: 'Bilans: ~11 miesięcy bez opieki',
    body: 'Przez około jedenaście miesięcy kilkudziesięciu pacjentów onkologicznych pozostawało bez lekarza w wyniku decyzji, którą SN ocenił jako wadliwą proceduralnie. Żaden organ państwa nie zapewnił w tym okresie ciągłości opieki.',
    type: 'bilans',
  },
]

const wnioski = [
  {
    title: 'Test sterowności organu nie jest spełniony',
    body: 'Nie można uzasadniać rozszerzania kompetencji represyjnych RPP do 1 mln zł kary i decyzji tymczasowych, gdy ten sam organ wykazał bezczynność w sytuacji, w której miał realne pole działania w obronie pacjentów. To autonomiczny zarzut z art. 31 ust. 3 Konstytucji RP.',
  },
  {
    title: 'UD207 nie reguluje ciągłości opieki',
    body: 'Projekt rozszerza kompetencje represyjne, ale NIE zawiera żadnych przepisów o tym, co dzieje się z pacjentami wykluczonego lekarza lub zamkniętego podmiotu. To strukturalna luka regulacyjna naruszająca art. 68 ust. 1 Konstytucji RP (prawo do ochrony zdrowia).',
  },
  {
    title: 'Niższy standard proceduralny niż samorząd zawodowy',
    body: 'SN uznał standard proceduralny postępowania przed sądem lekarskim w 2025 r. za niewystarczający. UD207 w art. 64a wprowadza model decyzji tymczasowych z wyłączeniem art. 10 i 81 KPA — czyli o jeszcze NIŻSZYM standardzie niż ten, który SN już zakwestionował.',
  },
  {
    title: 'Efekt mnożnikowy w skali masowej',
    body: 'Jeśli kilkudziesięciu pacjentów jednego lekarza wymagało pomocy systemu w sytuacji wykluczenia, to po wejściu UD207 — gdy zamykane będą całe segmenty rynku — mówimy o populacji rzędu setek tysięcy pacjentów wymagających opieki NFZ z dnia na dzień, w systemie, który już dziś nie nadąża za potrzebami.',
  },
]

export default function CoZPacjentamiPage() {
  return (
    <div>
      {/* Header */}
      <section className="hero-gradient py-12 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-amber tracking-wider uppercase mb-3">
            Casus empiryczny — 2025 r.
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-4 text-balance">
            Co dzieje się z pacjentami, gdy lekarz zostaje wykluczony
          </h1>
          <p className="text-lg text-navy/80 leading-relaxed">
            To nie jest scenariusz hipotetyczny. To udokumentowany przebieg sytuacji z 2025 r.
            Pokazuje strukturalną lukę, której UD207 nie naprawia — przeciwnie, pogłębia.
          </p>
        </div>
      </section>

      {/* Wprowadzenie */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <Card className="border border-amber/30 bg-amber/5 rounded-xl">
          <CardContent className="p-6 lg:p-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="font-serif text-lg font-semibold text-navy mb-2">
                  W skrócie
                </h2>
                <p className="text-navy/80 leading-relaxed">
                  W styczniu 2025 r. samorząd zawodowy lekarzy zawiesił prawo wykonywania zawodu
                  lekarzowi onkologowi prowadzącemu klinikę integracyjną. Kilkudziesięciu pacjentów
                  w trakcie aktywnych terapii zostało pozbawionych lekarza z dnia na dzień.
                  Pisali do urzędów państwowych — w tym do RPP. <strong>Nie otrzymali pomocy.</strong> W grudniu
                  2025 r. Sąd Najwyższy uchylił orzeczenie samorządu jako wadliwe proceduralnie —
                  ale przez 11 miesięcy nikt nie zapewnił pacjentom ciągłości opieki.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="font-serif text-2xl font-semibold text-navy mb-8">
          Chronologia
        </h2>
        <div className="space-y-4">
          {timeline.map((item, index) => (
            <Card key={index} className="border border-border rounded-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Badge className="bg-secondary text-secondary-foreground">
                      {item.date}
                    </Badge>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Strona pacjentów */}
      <section className="bg-cream py-12 border-y border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card className="border border-border rounded-xl bg-background">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-3 mb-4">
                <Users className="h-6 w-6 text-teal flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-serif text-xl font-semibold text-navy mb-2">
                    Głos pacjentów
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Pacjenci dotknięci wykluczeniem swojego lekarza w 2025 r. uruchomili
                    własną stronę dokumentującą sytuację. To autentyczny głos osób, których
                    bezpośrednio dotyczy luka systemowa opisana wyżej.
                  </p>
                  <a
                    href="https://pacjencidoktoraszalusia.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="border-navy text-navy hover:bg-navy/5">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      pacjencidoktoraszalusia.pl
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Wnioski dla UD207 */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-serif text-2xl font-semibold text-navy mb-8">
          Cztery wnioski konstytucyjne z casusu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wnioski.map((item, index) => (
            <Card key={index} className="border border-border rounded-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-2">
                  <Badge className="bg-navy/10 text-navy flex-shrink-0">
                    {index + 1}
                  </Badge>
                  <h3 className="font-semibold text-navy">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  {item.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Kontekst ekonomiczny */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-navy mb-6">
            Wymiar ekonomiczny — paradoks NFZ
          </h2>
          <div className="space-y-4 text-navy/80 leading-relaxed">
            <p>
              W 2025 r. Narodowy Fundusz Zdrowia wymagał <strong>blisko 33 mld zł dotacji</strong> z
              budżetu państwa dla pokrycia bieżących wydatków. Polska wydaje na zdrowie 8,1% PKB —
              znacznie poniżej średniej OECD (9,2%).
            </p>
            <p>
              Pacjenci wybierający medycynę integracyjną w sektorze prywatnym <strong>odciążają NFZ</strong> —
              pokrywają koszty z własnych środków, nie obciążają kolejek. UD207 likwiduje ten
              segment i wymusza powrót pacjentów do systemu publicznego — pogłębiając kryzys
              instytucji, której ochrona była rzekomym celem projektu.
            </p>
            <p>
              Casus z 2025 r. pokazuje, że <strong>system represji w polskim modelu funkcjonuje, ale system
              zapewnienia ciągłości opieki nie istnieje</strong>. UD207 zwiększa intensywność pierwszego, nie
              naprawiając drugiego.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/dokumenty">
              <Button variant="outline" className="border-navy text-navy hover:bg-navy/5">
                <FileText className="h-4 w-4 mr-2" />
                Memo Ekonomiczne — pełny dokument
              </Button>
            </Link>
            <Link href="/dlaczego-sprzeciw">
              <Button variant="outline" className="border-navy text-navy hover:bg-navy/5">
                Osiem powodów sprzeciwu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stopka kontekstu */}
      <section className="py-12 bg-background border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Strona opisuje udokumentowany casus z 2025 r. Treści oparte na publicznych źródłach
            (TVN24, Rzeczpospolita, Termedia, Medexpress, baza orzeczeń NSA, baza orzeczeń SN),
            świadectwie organizacji pacjentów (pacjencidoktoraszalusia.pl) oraz na własnej analizie
            prawnej pakietu obywatelskiego. Nazwisko lekarza w pakiecie publicznym celowo pomijane —
            argument dotyczy luki systemowej, nie konkretnej osoby. Aktualizacja: maj 2026.
          </p>
        </div>
      </section>
    </div>
  )
}
