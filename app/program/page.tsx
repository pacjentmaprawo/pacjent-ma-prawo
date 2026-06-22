import type { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, Scale, FlaskConical, GraduationCap, Eye, Landmark } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nasz program — założenia i analiza',
  description:
    'Cywilizowana, niezależna i ekspercka opieka państwa nad medycyną wspomagającą: badania niepatentowalnych substancji, kształcenie, jawna procedura ekspercka, jawność konfliktów interesów i rzetelna informacja.',
}

const wantList = [
  'Państwowego, niezależnego od przemysłu finansowania badań nad substancjami i terapiami, którymi przemysł farmaceutyczny się nie zajmuje, bo są niepatentowalne — tak jak w USA robi to wyspecjalizowane centrum badawcze przy NIH (NCCIH), z budżetem rzędu 180 mln USD rocznie.',
  'Zakorzenienia w nauce i kształceniu: kierunków i szkoleń na uczelniach, standardów dla zawodów okołomedycznych i ścieżek certyfikacji.',
  'Standardów jakości i bezpieczeństwa dla gabinetów, ośrodków i osób wykonujących te świadczenia — z realnym nadzorem.',
  'Rzetelnej edukacji pacjentów z oficjalnych, sprawdzalnych źródeł — na wzór akademickich towarzystw onkologii integracyjnej.',
  'Oceny opartej na faktach i gradacji dowodów (GRADE/HTA/ESMO-MCBS), a docelowo — takiej jakości dowodów, by część metod miała realną szansę wejść do finansowania ze środków publicznych (NFZ).',
  'Symetrycznej odpowiedzialności za słowo — od lekarzy systemowych, mediów, polityków i Rzecznika Praw Pacjenta tak samo, jak od sprzedawców „cudownych terapii”.',
]

const notList = [
  'Nie obiecujemy wyleczenia i nie zachęcamy do porzucania leczenia o udokumentowanej skuteczności.',
  'Nie twierdzimy, że terapie wspomagające są równoważne lekom ani że „leki nie działają”.',
  'Nie bronimy oszustów — fałszywe obietnice, ukrywanie ryzyka i działanie bez kwalifikacji muszą być ścigane.',
]

const coiStats = [
  { n: '62–75%', body: 'organizacji pacjenckich deklaruje finansowanie z przemysłu (mediana: 62% w ankietach, 75% w analizach stron) — a ujawnia je tylko ok. 29% (przegląd systematyczny, BMJ Open 2020).' },
  { n: '~90%', body: 'środków od firm trafia do organizacji, których obszar pokrywa się z portfelem zarejestrowanych leków i pipeline’em badawczym darczyńcy.' },
  { n: 'Polska', body: 'zjawisko opisano osobno w recenzowanej analizie płatności przemysłu farmaceutycznego na rzecz polskich organizacji pacjenckich.' },
]

const coiLaws = [
  { title: 'Jawność płatności (USA)', body: 'Physician Payments Sunshine Act i publiczna baza Open Payments: raportowaniu podlega każde świadczenie powyżej 10 USD, baza jest jawna i aktualizowana co roku, a za brak raportowania grożą kary. Postulujemy nadanie mocy ustawowej polskiemu kodeksowi przejrzystości.' },
  { title: 'Limit i niezależność (EMA)', body: 'Kryteria Europejskiej Agencji Leków: ograniczenie kwoty od pojedynczej firmy, obowiązek publikowania rocznych sprawozdań finansowych, kodeks postępowania i coroczna weryfikacja — warunek udziału organizacji w pracach regulatora.' },
  { title: 'Deklaracje COI (UE, HTA)', body: 'Rozporządzenie UE 2021/2282 o ocenie technologii medycznych: eksperci i pacjenci deklarują interesy, a osoby z interesem w sektorze producenta ocenianej technologii nie mogą uczestniczyć w ocenie.' },
  { title: 'Postulat dla Polski', body: 'Ustawowy obowiązek ujawniania finansowania i deklaracji COI przez organizacje i ekspertów zabierających głos w procesie legislacyjnym lub zasiadających w ciałach przy organach (w tym przy RPP); publiczny rejestr; próg finansowania z przemysłu dla podmiotów występujących jako „reprezentacja pacjentów”.' },
]

const registryRules = [
  'Piętnujemy twierdzenie, nie osobę — przedmiotem wpisu jest konkretna teza, nie ocena człowieka.',
  'Symetria: tak samo traktujemy zawyżanie („X leczy raka”), jak i zaniżanie wbrew dowodom („X we wlewach nie ma żadnej wartości”).',
  'Każdy wpis = twierdzenie + dokładny cytat i źródło + kontrdowód ze źródła pierwotnego (PMID/DOI, dokument regulatora, wytyczne).',
  'Rozróżnienie „leczy” vs „wspomaga” — najczęstsze nadużycie rejestr jawnie rozdziela.',
  'Prawo do odpowiedzi i sprostowania oraz korekta/usunięcie wpisu po przedstawieniu kontrdowodu.',
]

const demands = [
  { icon: FlaskConical, t: 'Badania i rozwój', d: 'Państwowy, niezależny od przemysłu program badań substancji niepatentowalnych (wzór NCCIH).' },
  { icon: GraduationCap, t: 'Kształcenie i standardy', d: 'Kierunki, szkolenia, certyfikacja zawodów okołomedycznych, nadzór jakości i bezpieczeństwa.' },
  { icon: Scale, t: 'Jawna procedura ekspercka', d: 'Gradacja dowodów i deklaracje COI jako warunek każdej oceny i sankcji.' },
  { icon: Eye, t: 'Jawność i COI', d: 'Ustawowa jawność finansowania organizacji i ekspertów w procesach publicznych; publiczny rejestr.' },
  { icon: ShieldCheck, t: 'Bezpieczeństwo pacjenta', d: 'Przestrzeń otwartej rozmowy z onkologiem zamiast strachu i wykluczenia.' },
  { icon: Landmark, t: 'Ścieżka do NFZ', d: 'Gradacja dowodów otwierająca części metod drogę do oceny i ewentualnego finansowania publicznego.' },
]

export default function ProgramPage() {
  return (
    <div>
      <section className="hero-gradient py-12 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-3">Nasz program</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-4 text-balance">
            Cywilizowana, niezależna i ekspercka opieka — zamiast blankietowego zakazu
          </h1>
          <p className="text-navy/80 leading-relaxed text-lg">
            Nie uczymy, która terapia jest dobra, a która zła. Nie twierdzimy, że medycyna wspomagająca zastępuje leczenie konwencjonalne. Domagamy się, aby państwo wzięło ten obszar pod cywilizowaną, niezależną i ekspercką opiekę — z badaniami, kształceniem, standardami jakości i jawnością — zamiast karać go blankietowo i spychać do szarej strefy.
          </p>
        </div>
      </section>

      {/* Misja */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy mb-8">Czego chcemy — i czego nie robimy</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-accent-teal border border-border rounded-xl shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-navy mb-3">Czego chcemy</h3>
                <ul className="space-y-3">
                  {wantList.map((t, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-teal flex-shrink-0">•</span><span>{t}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-border rounded-xl shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-navy mb-3">Czego nie robimy</h3>
                <ul className="space-y-3">
                  {notList.map((t, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-red-orange flex-shrink-0">•</span><span>{t}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bezpieczeństwo pacjenta */}
      <section className="py-16 lg:py-24 bg-cream border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-3">Dlaczego to pilne</p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy mb-4">Bezpieczeństwo pacjenta onkologicznego</h2>
          <p className="text-navy/80 leading-relaxed mb-4">
            Najgroźniejszy, codzienny skutek obecnego klimatu jest taki: pacjent onkologiczny boi się powiedzieć onkologowi, że wspiera się terapiami wspomagającymi — bo grozi mu ocena, niechęć, a w skrajnych przypadkach wykluczenie. To jest realnie niebezpieczne: ukrycie informacji uniemożliwia lekarzowi prowadzenie leczenia z pełną wiedzą, np. o możliwych interakcjach.
          </p>
          <p className="text-navy/80 leading-relaxed">
            Cel regulacji powinien być odwrotny: stworzyć przestrzeń, w której pacjent mówi otwarcie, a lekarz reaguje wiedzą, nie sankcją.
          </p>
        </div>
      </section>

      {/* Niezależna ocena + RPP */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-3">Niezależność i fakty</p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy mb-4">Ekspercka ocena zamiast arbitralności</h2>
          <p className="text-navy/80 leading-relaxed mb-4">
            Jeżeli państwo — w tym Rzecznik Praw Pacjenta — chce oceniać, czy metoda jest „zgodna z aktualną wiedzą medyczną”, musi być dokładnie wiadomo, na jakiej podstawie: jakie badania, jaka siła dowodu — a nie pogłoski, autorytet czy medialny ton. Postulujemy jawną, niezależną procedurę ekspercką z gradacją dowodów, deklaracjami konfliktu interesów i prawem strony do kontrdowodu — jako ustawowy warunek każdej sankcji.
          </p>
          <p className="text-navy/80 leading-relaxed">
            Rzecznik Praw Pacjenta ma reprezentować pacjentów — nie występować w jednym szeregu z przedstawicielami przemysłu. W procesie legislacyjnym zabrakło niezależnego głosu pacjentów onkologicznych, a część organizacji przywoływanych jako „głos pacjentów” ma udokumentowane powiązania finansowe z przemysłem (zob. niżej). To podważa reprezentatywność i wymaga naprawy systemowej, nie personalnej.
          </p>
        </div>
      </section>

      {/* COI */}
      <section className="py-16 lg:py-24 bg-cream border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-3">Konflikt interesów</p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy mb-4">Przemysł a organizacje pacjenckie — i jakie prawo powinno to wykluczać</h2>
          <p className="text-navy/80 leading-relaxed mb-8">
            To nie jest teoria spiskowa — to zjawisko zmierzone w recenzowanych badaniach w wielu krajach, w tym w Polsce.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {coiStats.map((s, i) => (
              <Card key={i} className="card-accent-teal border border-border rounded-xl shadow-sm">
                <CardContent className="p-6">
                  <p className="font-serif text-2xl font-semibold text-navy mb-2">{s.n}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <h3 className="font-semibold text-navy mb-4">Wzorce, które już działają</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coiLaws.map((s, i) => (
              <Card key={i} className="border border-border rounded-xl shadow-sm">
                <CardContent className="p-5 lg:p-6">
                  <h4 className="font-semibold text-navy mb-1">{s.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rejestr dezinformacji */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-3">Rzetelna informacja</p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy mb-4">Rejestr rzetelności informacji</h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Pacjent ma prawo do prawdy — niezależnie od tego, kto mówi. Proponujemy jawny, źródłowy rejestr twierdzeń rażąco niezgodnych ze stanem dowodów. Symetryczny i bezpieczny prawnie (art. 212 i 213 k.k., prawo prasowe, DSA):
          </p>
          <Card className="card-accent-teal border border-border rounded-xl shadow-sm mb-6">
            <CardContent className="p-6">
              <ul className="space-y-3">
                {registryRules.map((t, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-teal flex-shrink-0">•</span><span>{t}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <p className="text-navy/80 leading-relaxed mb-4">
            Symetria dotyczy też leków systemowych. Pacjent ma prawo wiedzieć, że część leków refundowanych weszła na rynek na słabszych dowodach: spośród onkologicznych dopuszczeń Europejskiej Agencji Leków z lat 2009–2013 ok. 57% wskazań oparto na punktach surogatowych, bez dowodu wydłużenia życia (BMJ 2017), a spośród leków FDA z trybu przyspieszonego korzyść kliniczną po ponad pięciu latach potwierdziła mniej niż połowa (JAMA 2024). Wniosek nie brzmi „leki nie działają” — brzmi: jedna, uczciwa miara dowodu musi obowiązywać w obie strony.
          </p>
        </div>
      </section>

      {/* Czego się domagamy */}
      <section className="py-16 lg:py-24 bg-cream border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-3 text-center">Czego się domagamy</p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy text-center mb-10">Program w sześciu punktach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {demands.map((d, i) => {
              const Icon = d.icon
              return (
                <Card key={i} className="border border-border rounded-xl shadow-sm">
                  <CardContent className="p-5 lg:p-6">
                    <Icon className="h-6 w-6 text-teal mb-3" strokeWidth={1.5} />
                    <h3 className="font-semibold text-navy mb-1">{d.t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d.d}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/petycja-ud207">
              <Button size="lg" className="bg-red-orange text-background font-semibold hover:bg-red-orange/90 px-8">
                Wyślij apel obywatelski
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-8 max-w-3xl mx-auto leading-relaxed">
            Materiał obywatelski. Dane pochodzą ze źródeł publicznych i zostały zweryfikowane u źródła (m.in. BMJ Open 2020, JAMA Internal Medicine, kryteria EMA, rozp. UE 2021/2282, Open Payments/CMS, NCCIH/NIH, wytyczne SIO–ASCO, BMJ 2017, JAMA 2024, rezolucja WHA78(14)).
          </p>
        </div>
      </section>
    </div>
  )
}
