import type { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, FileText, Users, ShieldOff } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Co dzieje się z pacjentami',
  description: 'Decyzje RPP z rygorem natychmiastowej wykonalności wywołują skutki, zanim sąd zdąży je skontrolować. Część skutków jest nieodwracalna. UD207 nie przewiduje funduszu odszkodowawczego ani mechanizmu zabezpieczeń.',
}

const poszkodowani = [
  {
    icon: Users,
    title: 'Pacjent',
    body: 'Przerwana terapia onkologiczna lub inna ścieżka krytyczna nie czeka na wyrok. Utrata lekarza prowadzącego z dnia na dzień, brak kontynuacji leczenia, pogorszenie stanu zdrowia — to skutki, których późniejsze uchylenie decyzji nie cofa. W medycynie czas bywa nieodwracalny.',
  },
  {
    icon: ShieldOff,
    title: 'Świadczeniodawca',
    body: 'Mały gabinet lekarski, zielarnia, prywatny podmiot leczniczy, który otrzyma decyzję natychmiast wykonalną, traci pacjentów, płynność i reputację, zanim sąd zdąży sprawę rozpoznać. Gdy decyzja zostaje po latach uchylona, przedsiębiorstwo często już nie istnieje. Wygranie procesu nie odbudowuje firmy ani zaufania.',
  },
]

const luki = [
  {
    title: 'Brak funduszu odszkodowawczego',
    body: 'Projekt nie tworzy żadnego mechanizmu kompensacji dla pacjentów ani przedsiębiorców, których decyzja administracyjna zostanie później uznana za wadliwą. Skutek błędu organu obciąża wyłącznie obywatela.',
  },
  {
    title: 'Brak szybkiego trybu wstrzymania wykonania',
    body: 'Rygor natychmiastowej wykonalności oznacza, że skutki następują od razu, a ścieżka odwoławcza biegnie miesiącami. Brak realnej, ekspresowej procedury zawieszenia wykonania do czasu kontroli sądowej.',
  },
  {
    title: 'Brak mechanizmu ciągłości opieki',
    body: 'Projekt rozszerza kompetencje represyjne, ale nie zawiera żadnego przepisu o tym, co dzieje się z pacjentami wykluczonego lekarza lub zamkniętego podmiotu — kto i w jakim trybie przejmuje ich leczenie.',
  },
  {
    title: 'Brak odpowiedzialności organu za decyzje uchylone',
    body: 'Ustawa nie przewiduje żadnej konsekwencji po stronie organu w razie wydania decyzji, którą sąd następnie uchyli. Asymetria ryzyka jest pełna: organ działa natychmiast, koszt błędu ponosi obywatel.',
  },
]

const wnioski = [
  {
    title: 'Nieproporcjonalność środka (art. 31 ust. 3)',
    body: 'Środek wywołujący skutki nieodwracalne przed kontrolą sądową jest nadmierny tam, gdzie dostępne są środki mniej dotkliwe (np. wykonalność wstrzymana do czasu rozpoznania, decyzja tymczasowa o wąskim zakresie). Test proporcjonalności wymaga, by dolegliwość nie wykraczała poza to, co konieczne.',
  },
  {
    title: 'Pozorne prawo do sądu (art. 45)',
    body: 'Prawo do sądu ma być realne, nie iluzoryczne. Kontrola sądowa, która działa dopiero po wystąpieniu nieodwracalnej szkody — zdrowotnej u pacjenta, majątkowej u przedsiębiorcy — nie spełnia tej funkcji. Wygrany proces nie przywraca utraconego zdrowia ani zlikwidowanej działalności.',
  },
  {
    title: 'Luka w ochronie zdrowia (art. 68 ust. 1)',
    body: 'Brak mechanizmu ciągłości opieki dla pacjentów dotkniętych decyzją oznacza, że pacjenci w trakcie aktywnych terapii mogą zostać bez prowadzącego. To strukturalna luka regulacyjna w obszarze, który Konstytucja powierza ochronie państwa.',
  },
  {
    title: 'Naruszenie zaufania do państwa (art. 2)',
    body: 'Zasada demokratycznego państwa prawnego obejmuje bezpieczeństwo prawne i ochronę przed nieodwracalnymi skutkami wadliwych rozstrzygnięć. Nakładanie pełnego ryzyka błędu organu na obywatela, bez jakiejkolwiek kompensacji, podważa tę zasadę.',
  },
]

export default function CoZPacjentamiPage() {
  return (
    <div>
      {/* Header */}
      <section className="hero-gradient py-12 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-3">
            Skutki decyzji natychmiast wykonalnych
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-4 text-balance">
            Co, jeśli decyzja okaże się błędna?
          </h1>
          <p className="text-lg text-navy/80 leading-relaxed">
            Rzecznik Praw Pacjenta to organ administracyjny, nie sąd. Każdy organ orzekający
            masowo popełnia pewien odsetek błędów. Gdy decyzja jest natychmiast wykonalna,
            jej skutki następują, zanim sąd zdąży ją skontrolować — a część z nich jest nieodwracalna.
          </p>
        </div>
      </section>

      {/* W skrócie */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <Card className="border border-red-orange/30 bg-red-orange/5 rounded-xl">
          <CardContent className="p-6 lg:p-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-orange flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="font-serif text-lg font-semibold text-navy mb-2">
                  W skrócie
                </h2>
                <p className="text-navy/80 leading-relaxed">
                  Wyobraźmy sobie, że choćby <strong>5 na 100</strong> decyzji RPP okaże się
                  błędnych — to ostrożne, hipotetyczne założenie dla organu działającego na dużą
                  skalę. Przy rygorze natychmiastowej wykonalności każda taka pomyłka uderza
                  natychmiast: pacjent traci terapię, przedsiębiorca traci firmę. Gdy sąd po
                  miesiącach uchyli decyzję, <strong>szkoda jest już często nieodwracalna</strong>.
                  UD207 nie przewiduje ani funduszu odszkodowawczego, ani szybkiego trybu
                  wstrzymania wykonania, ani odpowiedzialności organu za decyzje później uchylone.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Kto ponosi skutki */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="font-serif text-2xl font-semibold text-navy mb-8">
          Kto ponosi skutki błędnej decyzji
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {poszkodowani.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="border border-border rounded-xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-2">
                    <Icon className="h-6 w-6 text-red-orange flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-navy">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-3">{item.body}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Czego brakuje w UD207 */}
      <section className="bg-cream py-12 border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-navy mb-8">
            Czego brakuje w UD207
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {luki.map((item, index) => (
              <Card key={index} className="border border-border rounded-xl bg-background">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-2">
                    <Badge className="bg-red-orange/10 text-red-orange flex-shrink-0">
                      Brak
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
        </div>
      </section>

      {/* Wnioski konstytucyjne */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-serif text-2xl font-semibold text-navy mb-8">
          Cztery wnioski konstytucyjne
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
              pokrywają koszty z własnych środków, nie obciążają kolejek. System publiczny jest już
              dziś przeciążony i nie oferuje tym pacjentom realnej alternatywy we wspomaganiu leczenia.
              UD207 likwiduje ten prywatny segment i wymusza powrót pacjentów do systemu publicznego —
              co grozi <strong>dodatkowym, dotkliwym obciążeniem</strong> już
              przeciążonego systemu ochrony zdrowia, a więc pogłębieniem kryzysu instytucji, której
              ochrona była rzekomym celem projektu.
            </p>
            <p>
              Projekt ujawnia asymetrię systemu: <strong>mechanizmy sankcji administracyjnych są
              operacyjnie sprawne i natychmiast wykonalne, natomiast mechanizmy zabezpieczające —
              ciągłość opieki pacjenta, kompensacja błędu, ochrona przedsiębiorcy — nie zostały
              przewidziane</strong>. UD207 wzmacnia pierwszy element, nie tworząc drugiego.
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
                Powody sprzeciwu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stopka kontekstu */}
      <section className="py-12 bg-background border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Strona przedstawia generalny argument o ryzyku decyzji administracyjnych objętych
            rygorem natychmiastowej wykonalności. Liczbowa ilustracja (5 na 100) ma charakter
            wyłącznie hipotetyczny i służy unaocznieniu mechanizmu — nie jest danymi o rzeczywistym
            odsetku błędów. Argument opiera się na konstrukcji prawnej projektu UD207 oraz na
            analizie prawnej pakietu obywatelskiego.
          </p>
        </div>
      </section>
    </div>
  )
}
