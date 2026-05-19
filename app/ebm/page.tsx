import type { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { AlertTriangle, BookOpen, Scale, FlaskConical, ShieldQuestion } from 'lucide-react'

export const metadata: Metadata = {
  title: 'EBM i „aktualna wiedza medyczna" — co to naprawdę znaczy?',
  description: 'Czy każdy lek onkologiczny spełnia kryteria EBM? Co znaczy "aktualna wiedza medyczna" w prawie i w nauce. Paradoks accelerated approval i conditional marketing authorisation.',
}

const ebmLevels = [
  { level: 1, name: 'Metaanaliza/SR RCT', desc: 'Najwyższy poziom — systematyczny przegląd kilku randomizowanych kontrolowanych badań' },
  { level: 2, name: 'Pojedyncze RCT', desc: 'Randomizowane badanie kliniczne z grupą kontrolną' },
  { level: 3, name: 'Badanie kohortowe', desc: 'Prospektywne badanie obserwacyjne' },
  { level: 4, name: 'Case-control', desc: 'Badanie kliniczno-kontrolne, retrospektywne' },
  { level: 5, name: 'Opinia eksperta', desc: 'Konsensus, opis przypadków, badania mechanistyczne' },
]

const paradoxes = [
  {
    icon: FlaskConical,
    title: 'Accelerated Approval (FDA, USA)',
    text: 'FDA dopuszcza leki onkologiczne na podstawie surrogate endpoints (np. response rate) PRZED dowodem na poprawę OS. Przykład: pomalidomid (Pomalyst) — accelerated approval 2013 r. na podstawie response rate, dowód kliniczny OS dopiero w fazach IV. Wiele leków onkologicznych w UE i USA jest stosowanych bez pełnego EBM klasy I.',
    source: 'FDA Accelerated Approval Program, 21 CFR §314.500',
  },
  {
    icon: FlaskConical,
    title: 'Conditional Marketing Authorisation (EMA, UE)',
    text: 'EMA dopuszcza leki na podstawie niekompletnych danych klinicznych — pod warunkiem dostarczenia dowodów post-rejestracyjnych. Według raportu EMA 2022 r. większość leków onkologicznych otrzymanych w trybie CMA nie miała danych OS w momencie rejestracji.',
    source: 'EMA Conditional Marketing Authorisation, Reg. (WE) 507/2006',
  },
  {
    icon: FlaskConical,
    title: 'Wycofania po latach',
    text: 'Liczne leki onkologiczne dopuszczone w trybie CMA/AA były później wycofane lub miały zmienione wskazania ze względu na brak potwierdzenia klinicznego (Davis et al., BMJ 2017; Kim & Prasad, JAMA Intern Med 2015 — wiele leków onkologicznych USA wycofano po accelerated approval).',
    source: 'BMJ 2017;359:j4530; JAMA Intern Med 2015;175(12):1992',
  },
  {
    icon: ShieldQuestion,
    title: 'Off-label w onkologii',
    text: 'Według różnych szacunków 30–50% leczeń onkologicznych w USA i UE prowadzonych jest w trybie off-label (poza zatwierdzonymi wskazaniami) — co technicznie nie spełnia kryteriów EBM dla danego wskazania. Decyzje opierają się na opinii ekspertów i doświadczeniu klinicznym.',
    source: 'Levêque, J Cancer Res Clin Oncol 2008;134(1):21-27',
  },
]

export default function EBMPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-12 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-3">
            Sedno argumentu
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-4 text-balance">
            Co naprawdę znaczy „aktualna wiedza medyczna"?
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            EBM, accelerated approval, off-label i paradoks polskiego prawa
          </p>
          <p className="text-navy/80 leading-relaxed">
            Projekt UD207 wprowadza pojęcie „zgodności z aktualną wiedzą medyczną" jako kryterium kar
            administracyjnych do 1 mln zł. Samo to pojęcie — nawet w medycynie konwencjonalnej —
            jest znacznie bardziej zróżnicowane, niż wydaje się w debacie publicznej. Część procedur
            i produktów objętych reżimem rejestracyjnym opiera się na randomizowanych badaniach
            kontrolowanych; część na danych porejestracyjnych, punktach końcowych zastępczych,
            decyzjach off-label lub konsensusie eksperckim.
          </p>
        </div>
      </section>

      {/* Piramida EBM */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-7 w-7 text-navy" />
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-navy">
              Piramida dowodów EBM
            </h2>
          </div>
          <p className="text-navy/80 leading-relaxed mb-8">
            Medycyna oparta na dowodach (Evidence-Based Medicine, EBM) klasyfikuje dowody naukowe według
            siły metodologicznej. Najwyższy poziom (1) to <strong>metaanaliza randomizowanych badań kontrolowanych</strong>.
            Niższe poziomy obejmują badania obserwacyjne, opisy przypadków i opinie ekspertów. System opisany
            m.in. przez Oxford Centre for Evidence-Based Medicine (OCEBM) oraz GRADE.
          </p>
          <div className="space-y-3">
            {ebmLevels.map((lvl) => (
              <Card key={lvl.level} className="bg-background card-accent-navy rounded-xl shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-navy text-background rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                      {lvl.level}
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">{lvl.name}</h3>
                      <p className="text-sm text-muted-foreground">{lvl.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Paradoks accelerated approval */}
      <section className="py-16 lg:py-20 risk-section-bg">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="h-7 w-7 text-red-orange" />
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-navy">
              Poziom dowodów w praktyce klinicznej bywa zróżnicowany
            </h2>
          </div>
          <p className="text-navy/80 leading-relaxed mb-8 max-w-3xl">
            Projekt UD207 posługuje się pojęciem „aktualnej wiedzy medycznej" jako kryterium sankcji
            administracyjnych. Problem polega na tym, że w praktyce klinicznej poziom dowodów bywa
            zróżnicowany: część procedur i produktów objętych reżimem rejestracyjnym opiera się na
            randomizowanych badaniach kontrolowanych, część na danych porejestracyjnych, punktach
            końcowych zastępczych, decyzjach off-label lub konsensusie eksperckim. Nie oznacza to,
            że są pseudomedycyną. Oznacza to, że „aktualna wiedza medyczna" wymaga gradacji, a nie
            prostego podziału: zgodne / niezgodne.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paradoxes.map((p, i) => (
              <Card key={i} className="bg-background card-accent-red rounded-xl shadow-sm card-lift">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-red-orange/10 rounded-lg flex items-center justify-center mb-4">
                    <p.icon className="h-5 w-5 text-red-orange" />
                  </div>
                  <h3 className="font-semibold text-navy mb-3 text-lg">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.text}</p>
                  <p className="text-xs text-teal italic font-mono">{p.source}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implikacje prawne */}
      <section className="py-16 lg:py-20 section-navy">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-amber text-sm font-medium tracking-wider mb-3 uppercase">
            Implikacje prawne
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-6">
            Co to znaczy dla projektu UD207?
          </h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Jeśli „aktualna wiedza medyczna" ma być kryterium karania administracyjnego, to
              <strong className="text-amber"> regulator musi konsekwentnie stosować to samo kryterium
              do wszystkich procedur leczniczych</strong> — także do leków onkologicznych zatwierdzonych
              w trybie accelerated approval, conditional marketing authorisation i stosowanych off-label.
            </p>
            <p>
              Inaczej powstaje sytuacja dwóch standardów: leki firm farmaceutycznych mogą być stosowane
              bez pełnego EBM (pod warunkiem rejestracji EMA/FDA), ale podobne metody komplementarne —
              nawet z porównywalną bazą dowodową — są karane jako „niezgodne z aktualną wiedzą medyczną".
            </p>
            <p>
              Sąd Najwyższy w postanowieniu <strong className="text-amber">III KK 212/18 (5.06.2019)</strong> wskazał,
              że ocena „zgodności z aktualną wiedzą medyczną" wymaga <strong className="text-amber">każdorazowego
              dowodu z opinii biegłych</strong>, a wątpliwości rozstrzyga się <em>in dubio pro reo</em>
              (art. 5 § 2 k.p.k.). UD207 wyłącza te gwarancje proceduralne — to konstytucyjny problem.
            </p>
          </div>
        </div>
      </section>

      {/* Wniosek */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Scale className="h-7 w-7 text-amber" />
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-navy">
              Czego się domagamy
            </h2>
          </div>
          <p className="text-navy/80 leading-relaxed text-lg mb-4">
            <strong>Nie kwestionujemy EBM.</strong> Kwestionujemy nierówne stosowanie tego kryterium —
            i wprowadzanie go jako podstawy kar administracyjnych bez gwarancji proceduralnych
            wymaganych przez Konstytucję RP i orzecznictwo Sądu Najwyższego.
          </p>
          <p className="text-navy/80 leading-relaxed text-lg mb-8">
            Domagamy się definicji „aktualnej wiedzy medycznej" odwołującej się do uznanych systemów
            (GRADE, OCEBM, ESMO-MCBS) — z gradacją poziomu dowodów, a nie binarnym „zgodne / niezgodne".
            Plus gwarancji proceduralnych: opinii biegłych, prawa do obrony, in dubio pro reo.
          </p>
          <p className="font-serif text-xl text-navy italic mb-8">
            Pełna analiza w <strong>Załączniku 1 — Policy Paper EBM v1.10</strong> (dostępny w bazie dokumentów).
          </p>
          <div className="bg-secondary border border-border rounded-xl p-6">
            <h3 className="font-serif text-lg font-semibold text-navy mb-2">
              Zobacz konkretne dane
            </h3>
            <p className="text-navy/80 leading-relaxed mb-4">
              W Załączniku 3 zebraliśmy 15 substancji wskazanych przez RPP, NRL i WSA jako
              „pseudomedycyna" z dostępnymi dowodami EBM, OCEBM i GRADE — oraz 3 reprezentatywne
              pary paradoksu refundacyjnego (witamina C dożylna vs bewacizumab GBM; Iscador vs
              olaratumab; FDA Project Confirm jako fakt systemowy).
            </p>
            <a
              href="/ebm-zestawienie"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-orange text-background font-medium rounded-lg hover:bg-red-orange/90 transition-colors"
            >
              Zobacz zestawienie 15 substancji
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
