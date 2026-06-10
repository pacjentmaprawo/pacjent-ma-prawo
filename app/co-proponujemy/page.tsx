import type { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, FileText, Scale, BookOpen, Users } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Co proponujemy zamiast',
  description: 'Klauzula świadomej zgody pacjenta + ciągłość opieki + realna kontrola sądowa decyzji RPP. Pakiet obywatelski nie tylko krytykuje UD207 — proponuje konkretny model wyłączenia ustawowego oparty o autonomię pacjenta.',
}

const conditions = [
  {
    n: 1,
    title: 'Pełna pisemna informacja',
    body: 'Pacjent otrzymuje na piśmie informację o poziomie dowodów naukowych (OCEBM/GRADE), alternatywach konwencjonalnych, ryzyku, działaniach niepożądanych, braku gwarancji skuteczności, statusie rejestracyjnym substancji.',
  },
  {
    n: 2,
    title: 'Pisemna świadoma zgoda',
    body: 'Pacjent potwierdza pisemnie świadomą zgodę zgodnie z art. 16–17 ustawy o prawach pacjenta i art. 5 Konwencji z Oviedo. To nie formularzowy podpis — to udokumentowana, świadoma decyzja po pełnej informacji.',
  },
  {
    n: 3,
    title: 'Brak odwodzenia od leczenia konwencjonalnego',
    body: 'Pacjent nie był odwodzony od leczenia zgodnego z aktualną wiedzą medyczną. Nie obiecywano mu wyleczenia. To kluczowa granica — terapia komplementarna nie zastępuje, lecz uzupełnia.',
  },
  {
    n: 4,
    title: 'Podmiot leczniczy zarejestrowany + dokumentacja',
    body: 'Świadczenie wykonano w podmiocie wpisanym do rejestru podmiotów wykonujących działalność leczniczą, z dokumentacją medyczną zgodnie z rozdziałem 7 u.p.p. To eliminuje szarą strefę i zapewnia śledczość.',
  },
  {
    n: 5,
    title: 'Brak zastępowania leczenia o udokumentowanej skuteczności',
    body: 'Metoda nie zastępuje leczenia o udokumentowanej skuteczności w sytuacji, w której takie leczenie jest dostępne i medycznie wskazane — chyba że pacjent po pełnej informacji odmawia takiego leczenia zgodnie z przysługującym mu prawem.',
  },
]

const reszims = [
  { title: 'Art. 286 k.k.', body: 'Oszustwo — do 8 lat pozbawienia wolności. Reżim dla fałszywych obietnic wyleczenia.' },
  { title: 'Art. 58 ust. o zawodach lekarza', body: 'Świadczenia bez uprawnień: grzywna lub do 1 roku; eksperyment bez zgody: do 3 lat.' },
  { title: 'Odpowiedzialność zawodowa', body: 'Samorząd lekarzy/pielęgniarek/fizjoterapeutów (art. 17 Konstytucji RP).' },
  { title: 'UOKiK', body: 'Ustawa o nieuczciwych praktykach rynkowych z 2007 r. — ochrona konsumenta.' },
  { title: 'Prawo farmaceutyczne', body: 'Reklama produktów leczniczych, oświadczenia zdrowotne (rozporządzenie 1924/2006/WE).' },
  { title: 'Prawo prasowe', body: 'Odpowiedzialność za nierzetelne publikacje i wprowadzanie w błąd.' },
]

const foundations = [
  { law: 'art. 47 Konstytucji RP', body: 'Prawo do prywatności obejmuje decyzje o własnym ciele (TK U 10/92, SK 14/13).' },
  { law: 'art. 41 ust. 1 Konstytucji RP', body: 'Wolność osobista jako autonomia decyzji medycznych.' },
  { law: 'art. 31 ust. 3 Konstytucji RP', body: 'Proporcjonalność — środek najmniej dolegliwy osiągający cel ochrony pacjenta.' },
  { law: 'art. 16–17 u.p.p.', body: 'Informed consent jako fundament polskiego prawa pacjenta.' },
  { law: 'art. 8 EKPC', body: 'Pretty v. UK; Vavřička v. Czechy; Jehovah\'s Witnesses of Moscow v. Russia — autonomia decyzji medycznych.' },
  { law: 'art. 5 Konwencji z Oviedo', body: '„An intervention in the health field may only be carried out after the person concerned has given free and informed consent."' },
  { law: 'art. 3 Karty Praw Podstawowych UE', body: 'Integralność osoby z explicytnym wymogiem świadomej zgody.' },
  { law: 'Modele zagraniczne', body: 'W wybranych państwach europejskich istnieją odrębne modele regulowania praktyk komplementarnych — np. w Niemczech (model Heilpraktiker) i w Szwajcarii (art. 118a Konstytucji, refundacja wybranych metod CAM). Pokazują one, że możliwe jest rozróżnienie między oszustwem, praktyką wspomagającą i autonomią pacjenta.' },
]

export default function CoProponujemyPage() {
  return (
    <div>
      {/* Header */}
      <section className="hero-gradient py-12 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-3">
            Pozytywny postulat pakietu
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-4 text-balance">
            Co proponujemy zamiast
          </h1>
          <p className="text-lg text-navy/80 leading-relaxed">
            Pakiet obywatelski nie tylko krytykuje UD207. Proponuje konkretny model:
            klauzulę świadomej zgody pacjenta jako ustawowe wyłączenie spod sankcji.
            Pacjent świadomy może wybrać. Pacjent oszukany — pozostaje chroniony.
          </p>
        </div>
      </section>

      {/* Streszczenie */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <Card className="border border-teal/30 bg-teal/5 rounded-xl">
          <CardContent className="p-6 lg:p-8">
            <div className="flex items-start gap-3">
              <BookOpen className="h-6 w-6 text-teal flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="font-serif text-lg font-semibold text-navy mb-2">
                  W skrócie
                </h2>
                <p className="text-navy/80 leading-relaxed">
                  Świadczenie zdrowotne nie powinno stanowić „praktyki pseudomedycznej",
                  jeżeli pacjent po pełnej pisemnej informacji o stanie wiedzy medycznej
                  i ryzyku wyraził <strong>pisemną świadomą zgodę</strong>, nie był odwodzony
                  od leczenia konwencjonalnego, a świadczenie wykonano w zarejestrowanym
                  podmiocie leczniczym z dokumentacją medyczną. Ten model chroni pacjenta nieświadomego (przez warunki 1–5), pozostawiając autonomię pacjentowi
                  świadomemu. Jest zgodny z fundamentem europejskiego prawa medycznego — informed consent. Świadoma zgoda nie legalizuje oszustwa, ukrywania ryzyka, braku kwalifikacji, fałszywych obietnic wyleczenia ani zastępowania leczenia o udokumentowanej skuteczności.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Cztery warunki */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="font-serif text-2xl font-semibold text-navy mb-2">
          Pięć warunków wyłączenia
        </h2>
        <p className="text-muted-foreground mb-8">
          Warunki muszą być spełnione <strong>łącznie</strong>. Naruszenie któregokolwiek
          przenosi sprawę do istniejących reżimów odpowiedzialności (kodeks karny, ustawa
          o zawodach lekarza, UOKiK, samorząd zawodowy).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conditions.map((c) => (
            <Card key={c.n} className="card-accent-teal border border-border rounded-xl card-lift">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-serif font-semibold text-red-orange">{c.n}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Brzmienie proponowane */}
      <section className="bg-cream py-12 border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="h-6 w-6 text-navy" />
            <h2 className="font-serif text-2xl font-semibold text-navy">
              Brzmienie proponowane do art. 67zj UD207 (nowy ust. 3–5)
            </h2>
          </div>
          <Card className="border border-border rounded-xl bg-background">
            <CardContent className="p-6 lg:p-8">
              <blockquote className="text-navy/90 leading-relaxed italic border-l-4 border-red-orange pl-4 space-y-3">
                <p>
                  „Świadczenie zdrowotne nie stanowi praktyki, o której mowa w ust. 1, jeżeli
                  zostało wykonane wobec pacjenta, który łącznie:
                </p>
                <p className="not-italic">
                  <strong>1)</strong> otrzymał pisemną informację o stanie wiedzy medycznej
                  dotyczącej proponowanej metody, obejmującą poziom dowodów (OCEBM/GRADE),
                  alternatywy konwencjonalne, ryzyko i status rejestracyjny substancji;
                </p>
                <p className="not-italic">
                  <strong>2)</strong> potwierdził pisemnie świadomą zgodę zgodnie z art. 16–17 u.p.p.
                  oraz art. 5 Konwencji z Oviedo;
                </p>
                <p className="not-italic">
                  <strong>3)</strong> nie był odwodzony od leczenia zgodnego z aktualną wiedzą medyczną
                  ani nie obiecywano mu wyleczenia;
                </p>
                <p className="not-italic">
                  <strong>4)</strong> świadczenie zostało wykonane przez podmiot leczniczy wpisany do
                  rejestru podmiotów wykonujących działalność leczniczą, z prowadzeniem dokumentacji
                  medycznej zgodnie z rozdziałem 7 ustawy o prawach pacjenta;
                </p>
                <p className="not-italic">
                  <strong>5)</strong> metoda nie zastępuje leczenia o udokumentowanej skuteczności,
                  gdy jest ono dostępne i medycznie wskazane — chyba że pacjent, po pełnej informacji,
                  odmawia takiego leczenia w wykonaniu przysługującego mu prawa."
                </p>
              </blockquote>
            </CardContent>
          </Card>

          <div className="mt-6 flex items-center gap-3">
            <Scale className="h-5 w-5 text-navy" />
            <h3 className="font-serif text-xl font-semibold text-navy">
              Nowy ust. 4 — legalne ścieżki terapii eksperymentalnych
            </h3>
          </div>
          <p className="text-sm text-muted-foreground mt-2 mb-4 leading-relaxed">
            Klauzula świadomej zgody chroni świadczenia z preparatami zarejestrowanymi i stosowanymi
            off-label. Substancje i metody jeszcze niezarejestrowane wymagają osobnej, równie wyraźnej
            kotwicy — dlatego proponujemy drugi ustęp, który potwierdza, że świadczenia realizowane
            w już istniejących, reglamentowanych trybach prawnych nie są „pseudomedycyną".
          </p>
          <Card className="border border-border rounded-xl bg-background">
            <CardContent className="p-6 lg:p-8">
              <blockquote className="text-navy/90 leading-relaxed italic border-l-4 border-teal pl-4 space-y-3">
                <p>
                  „Praktyką, o której mowa w ust. 1, nie jest również udzielenie świadczenia
                  z zastosowaniem produktu leczniczego lub metody nieposiadających pozwolenia na
                  dopuszczenie do obrotu albo stosowanych poza zakresem takiego pozwolenia, jeżeli
                  jest ono realizowane w ramach co najmniej jednej z dróg przewidzianych prawem:
                </p>
                <p className="not-italic">
                  <strong>1)</strong> badania klinicznego (rozporządzenie UE nr 536/2014), na
                  podstawie pozwolenia i pozytywnej opinii komisji bioetycznej;
                </p>
                <p className="not-italic">
                  <strong>2)</strong> <strong>eksperymentu leczniczego</strong> w rozumieniu art. 21
                  i nast. ustawy o zawodach lekarza i lekarza dentysty, za zgodą komisji bioetycznej
                  i na podstawie świadomej zgody pacjenta;
                </p>
                <p className="not-italic">
                  <strong>3)</strong> indywidualnego lub wyjątkowego stosowania (compassionate use)
                  zgodnie z art. 83 rozporządzenia (WE) nr 726/2004;
                </p>
                <p className="not-italic">
                  <strong>4)</strong> importu docelowego (art. 4 ust. 7–9 Prawa farmaceutycznego),
                  jeżeli produkt jest dopuszczony do obrotu w innym państwie;
                </p>
                <p className="not-italic">
                  <strong>5)</strong> świadczenia legalnie stosowanego lub finansowanego ze środków
                  publicznych w innym państwie UE lub EOG.
                </p>
                <p className="not-italic">
                  Do świadczeń tych przepisy ust. 3 stosuje się odpowiednio.{' '}
                  <strong>Ust. 5:</strong> wyłączenia nie obejmują oszustwa, zatajenia ryzyka,
                  obietnicy wyleczenia ani działania bez kwalifikacji — te pozostają karalne na
                  zasadach ogólnych."
                </p>
              </blockquote>
            </CardContent>
          </Card>
          <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
            Ust. 4 niczego nie liberalizuje — odsyła wyłącznie do ściśle reglamentowanych dróg
            (badanie kliniczne, eksperyment leczniczy z komisją bioetyczną, compassionate use, import
            docelowy). Poza nimi zastosowanie substancji niezarejestrowanej pozostaje nielegalne.
            Wyłączenie usuwa jedynie ryzyko nakładania na te legalne tryby dodatkowej sankcji
            „pseudomedycznej".
          </p>
        </div>
      </section>

      {/* Podstawy prawne */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-serif text-2xl font-semibold text-navy mb-2">
          Osiem podstaw konstytucyjno-prawnych
        </h2>
        <p className="text-muted-foreground mb-8">
          Klauzula nie jest naszym pomysłem — to wniosek z fundamentów europejskiego prawa
          medycznego. Tutaj źródła normatywne, na które się powołujemy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {foundations.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-teal flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-navy text-sm">{f.law}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Co zostaje karalne */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-navy mb-2">
            Co nadal jest karalne — bez UD207
          </h2>
          <p className="text-muted-foreground mb-8">
            Najczęstszy zarzut wobec naszego stanowiska: „bronicie szarlatanów". To nieprawda.
            Klauzula świadomej zgody chroni pacjenta świadomego — pacjent oszukany pozostaje
            chroniony istniejącymi reżimami odpowiedzialności:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reszims.map((r, i) => (
              <Card key={i} className="border border-border rounded-xl bg-background">
                <CardContent className="p-5">
                  <Badge className="bg-red-orange/10 text-red-orange mb-2">Reżim odpowiedzialności</Badge>
                  <h3 className="font-semibold text-navy text-sm mb-1">{r.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{r.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 p-6 bg-background rounded-xl border border-border">
            <p className="text-sm text-navy/80 leading-relaxed">
              <strong>Wniosek:</strong> UD207 nakłada nowy administracyjny reżim sankcyjny na obszary, które już dziś podlegają odpowiedzialności karnej, zawodowej, cywilnej, konsumenckiej i regulacyjnej. UD207 multiplikuje istniejące reżimy w sposób nieproporcjonalny i bez wystarczających gwarancji proceduralnych. Klauzula świadomej zgody przywraca zasadę proporcjonalności (art. 31 ust. 3 Konstytucji RP): chronimy pacjenta nieświadomego, pozostawiamy autonomię pacjentowi świadomemu.
            </p>
          </div>
        </div>
      </section>

      {/* Trzy filary alternatywy */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-serif text-2xl font-semibold text-navy mb-8">
          Trzy filary pełnej propozycji pakietu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border border-border rounded-xl">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-teal" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Filar 1: Klauzula świadomej zgody</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pacjent po pełnej informacji może wybrać terapię komplementarną, off-label lub
                eksperymentalną prowadzoną w legalnym trybie (badanie kliniczne, eksperyment leczniczy
                z komisją bioetyczną, compassionate use, import docelowy) — bez dodatkowej sankcji
                administracyjnej. Mechanizm (ust. 3–5) opisany powyżej.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-border rounded-xl">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-red-orange/10 rounded-lg flex items-center justify-center mb-4">
                <Scale className="h-6 w-6 text-amber" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Filar 2: Realna kontrola sądowa decyzji RPP</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Decyzje Rzecznika Praw Pacjenta powinny podlegać <strong>merytorycznej kontroli
                niezależnego sądu powszechnego</strong> — analogicznie do kontroli decyzji UOKiK przez
                Sąd Ochrony Konkurencji i Konsumentów — a nie tylko ocenie ich legalności. Rygor
                natychmiastowej wykonalności wyłącznie wyjątkowo, z szybką ścieżką odwoławczą.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-border rounded-xl">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-navy" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Filar 3: Ciągłość opieki</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Każda decyzja RPP wyłączająca lekarza/podmiot powinna zawierać <strong>obowiązek
                wskazania konkretnego podmiotu NFZ</strong> przejmującego pacjentów — z zachowaniem
                harmonogramu leczenia onkologicznego i innych ścieżek krytycznych.
                Casus z 2025 r. pokazał, że bez tego pacjenci są pozostawieni sami sobie.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
            Pełna analiza prawna
          </h2>
          <p className="text-navy/80 leading-relaxed mb-8">
            Klauzula świadomej zgody jest opisana w Rekomendacji 16 (Sekcja Konstytucyjna)
            i Rekomendacji 12 (Memorandum prawne) wraz z pełnym uzasadnieniem konstytucyjnym.
            Dokumenty dostępne do pobrania w bazie dokumentów.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/dokumenty">
              <Button className="bg-navy text-background hover:bg-navy/90">
                <FileText className="h-4 w-4 mr-2" />
                Baza dokumentów
              </Button>
            </Link>
            <Link href="/dlaczego-sprzeciw">
              <Button variant="outline" className="border-navy text-navy hover:bg-navy/5">
                Osiem powodów sprzeciwu
              </Button>
            </Link>
            <Link href="/co-z-pacjentami">
              <Button variant="outline" className="border-navy text-navy hover:bg-navy/5">
                Co dzieje się z pacjentami
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stopka kontekstu */}
      <section className="py-12 bg-background border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Treść opracowana w oparciu o Sekcję Konstytucyjną (§10 i §13 Rekomendacja 16)
            oraz Memorandum prawne UD207 (sekcja C Rekomendacja 12) pakietu obywatelskiego.
            Postulat klauzuli świadomej zgody jest spójny z międzynarodowym standardem informed
            consent — art. 5 Konwencji z Oviedo, art. 8 EKPC (orzecznictwo *Pretty*, *Vavřička*,
            *Jehovah's Witnesses of Moscow*), art. 3 Karty Praw Podstawowych UE, art. 47 i 41
            Konstytucji RP, art. 16–17 ustawy o prawach pacjenta. Aktualizacja: maj 2026.
          </p>
        </div>
      </section>
    </div>
  )
}
