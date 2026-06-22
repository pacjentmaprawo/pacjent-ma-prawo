import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { MousePointerClick, UserRound, MailCheck, ShieldCheck, Hash } from 'lucide-react'
import { PetitionForm } from '@/components/petycja/PetitionForm'
import { VariantPreview } from '@/components/petycja/VariantPreview'
import { SubmissionCounter } from '@/components/petycja/SubmissionCounter'
import { PETITION_SECTIONS } from '@/lib/petycja/petitionText'

export const metadata: Metadata = {
  title: 'Wyślij apel obywatelski ws. UD207',
  description:
    'Wyślij apel obywatelski ws. projektu UD207 do posłów, senatorów, Prezydenta, RPO i mediów. Gotowe pisma, wybór adresatów, wysyłka jednym kliknięciem z własnej skrzynki.',
  alternates: { canonical: '/petycja-ud207' },
}

const STEPS = [
  {
    icon: MousePointerClick,
    title: 'Wybierz adresatów',
    desc: 'Zaznacz osoby z listy — domyślnie wybraliśmy najważniejszych. Każdy dostaje pismo dopasowane do swojej roli.',
  },
  {
    icon: UserRound,
    title: 'Przybliż siebie',
    desc: 'Opcjonalnie wstaw jedną z gotowych formułek (pacjent, lekarz, prawnik…) lub wpisz własne 1–3 zdania.',
  },
  {
    icon: MailCheck,
    title: 'Wyślij z własnej skrzynki',
    desc: 'Kliknij „Otwórz wiadomość” — Twój program pocztowy otworzy gotowy e-mail. Wystarczy go wysłać.',
  },
]

const POSTULATY = [
  'Prawo pacjenta do wyboru terapii — o sposobie leczenia, w tym o legalnych terapiach wspomagających, decyduje świadomy pacjent wspólnie z lekarzem, nie urząd.',
  'Dostęp do legalnych terapii wspomagających — bez blankietowej eliminacji legalnych metod; w tym dostępnych legalnymi drogami (badanie kliniczne, eksperyment leczniczy za świadomą zgodą, off-label, import docelowy — jedyna legalna ścieżka dla substancji niezarejestrowanych dla ludzi).',
  'Mądra regulacja zamiast zakazu, na wzór Europy — uregulowanie paramedycyny przez kwalifikacje i rejestr (Heilpraktiker w Niemczech, dyplomy ÖÄK w Austrii, model szwajcarski), nie penalizacja całej dziedziny. Legalnie wykonywane zawody wspomagające (fizjoterapeuci, dietetycy, masażyści, zielarze, akupunkturzyści i inni) nie mogą być stygmatyzowane ani wypychane z rynku.',
  'Wolność debaty i wypowiedzi — ustawa ściga czyn (oszustwo w złej wierze), nie wypowiedź lekarza, naukowca czy pacjenta o leczeniu.',
  'Dezinformacja w osobnym trybie, nie pod natychmiastową karą — spory o metody rozstrzygane w jawnym rejestrze z prawem do odpowiedzi i korekty, symetrycznie (art. 54 i 73 Konstytucji RP).',
  'Jawna procedura ekspercka — zanim padnie kara, niezależna ocena z gradacją dowodów (GRADE/HTA/ESMO-MCBS) i ujawnianiem konfliktów interesów; RPP nie może orzekać o „aktualnej wiedzy medycznej” bez transparentnej procedury, jak ma to UOKiK.',
  'Żaden urząd ponad sądem — merytoryczna kontrola decyzji RPP przez niezależny sąd powszechny (jak decyzje UOKiK kontroluje SOKiK); natychmiastowa wykonalność tylko wyjątkowo, z szybką ścieżką odwoławczą.',
  'Domniemanie niewinności — nieprawomocne decyzje nie są publikowane ani wykonywane jak wyroki, zanim potwierdzi je sąd.',
  'Nikt nie zostaje bez opieki — wykluczenie świadczeniodawcy nie może oznaczać pozostawienia jego pacjentów bez ciągłości leczenia.',
]

const HASHTAGS = ['#PacjentMaPrawo', '#UD207', '#PrawoDoBezpiecznejOpieki', '#VetoDlaUD207']

export default function PetycjaUD207Page() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-12 lg:py-16 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-3">
            Apel obywatelski
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-6 text-balance">
            Wyślij apel obywatelski ws. projektu UD207
          </h1>
          <p className="text-navy/80 leading-relaxed mb-4">
            Pierwsze czytanie projektu UD207 (druk sejmowy nr 2598) odbyło się w Sejmowej Komisji
            Zdrowia 9 czerwca 2026 r. Prace trwają — i to teraz można realnie wpłynąć na kształt
            ustawy. Popieramy ochronę pacjentów przed nieuczciwymi świadczeniodawcami, ale
            domagamy się konkretnych poprawek, które ograniczą poważne ryzyka konstytucyjne projektu.
          </p>
          <p className="text-navy/80 leading-relaxed mb-5">
            To narzędzie przygotuje za Ciebie gotowe pisma i pomoże wysłać je do właściwych
            adresatów — w kilka minut, z Twojej własnej skrzynki e-mail.
          </p>
          <div className="rounded-lg border border-navy/15 bg-secondary/70 px-4 py-3">
            <p className="text-sm text-navy/75 leading-relaxed">
              <strong className="text-navy">Uwaga:</strong> to narzędzie przygotowuje
              indywidualne pisma obywatelskie, które wysyłasz samodzielnie z własnej skrzynki.
              Nie jest formalną platformą zbierania podpisów pod jedną petycją w rozumieniu
              ustawy o petycjach — każdy uczestnik występuje we własnym imieniu.
            </p>
          </div>
        </div>
      </section>

      {/* Duży licznik wysłanych pism */}
      <SubmissionCounter />

      {/* Jak to działa */}
      <section className="py-10 lg:py-12 bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {STEPS.map((step, i) => (
              <Card key={i} className="border border-border rounded-xl shadow-sm">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
                      <step.icon className="h-5 w-5 text-navy" />
                    </div>
                    <span className="text-xs font-semibold text-red-orange">KROK {i + 1}</span>
                  </div>
                  <h3 className="font-semibold text-navy mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formularz */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <PetitionForm />
        </div>
      </section>

      {/* Co zawiera apel */}
      <section className="py-12 lg:py-16 bg-cream border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-navy mb-3">
            Czego konkretnie domaga się apel
          </h2>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Dziewięć zasad, na których powinna oprzeć się regulacja — zachowują cel ustawy i ograniczają
            jej poważne ryzyka konstytucyjne. Pełną analizę prawną znajdziesz na stronie{' '}
            <Link href="/co-proponujemy" className="text-teal underline underline-offset-2">
              Co proponujemy
            </Link>
            .
          </p>
          <ol className="space-y-3">
            {POSTULATY.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-navy text-background text-xs font-semibold">
                  {i + 1}
                </span>
                <span className="text-sm text-navy/90 leading-relaxed">{p}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Podgląd pism */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-navy mb-3">
            Zobacz treść pism przed wysłaniem
          </h2>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Przygotowaliśmy sześć wariantów dopasowanych do adresatów. Każdy adresat otrzyma
            właściwy wariant automatycznie — poniżej możesz przeczytać pełną treść.
          </p>
          <Card className="border border-border rounded-xl">
            <CardContent className="p-2 sm:p-4">
              <VariantPreview />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pełna treść apelu */}
      <section className="py-12 lg:py-16 bg-cream border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-navy mb-3">
            Pełna treść pisma (apelu)
          </h2>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Poniżej publikujemy kompletny tekst apelu (pkt I–VI). W krokach powyżej, w sekcji
            wysyłki, możesz skopiować całość lub pobrać ją jako PDF.
          </p>
          <Card className="border border-border rounded-xl">
            <CardContent className="p-6 lg:p-8 space-y-6">
              {PETITION_SECTIONS.map((section) => (
                <div key={section.heading}>
                  <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                    {section.heading}
                  </h3>
                  <div className="space-y-3">
                    {section.paragraphs.map((p, i) => (
                      <p key={i} className="text-sm text-navy/85 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Hashtagi */}
      <section className="py-10 bg-cream border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <Hash className="h-5 w-5 text-teal" />
            <h2 className="font-serif text-xl font-semibold text-navy">
              Mów o tym w mediach społecznościowych
            </h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Jeśli udostępniasz sprawę publicznie, możesz użyć tych hasztagów:
          </p>
          <div className="flex flex-wrap gap-2">
            {HASHTAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-navy/5 px-3 py-1.5 text-sm font-medium text-navy"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* RODO / prywatność */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card className="border border-border rounded-xl bg-secondary">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 flex-shrink-0 text-teal" />
                <div>
                  <h3 className="font-semibold text-navy mb-2">Twoja prywatność</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ten formularz działa w całości w Twojej przeglądarce. Nie zakładamy konta,
                    nie zbieramy ani nie przechowujemy Twoich danych osobowych, nie wysyłamy
                    niczego w Twoim imieniu. Wiadomości otwierają się w Twoim własnym programie
                    pocztowym — to Ty decydujesz, co i do kogo wyślesz. Jeśli zaznaczysz opcję
                    „prześlij nam kopię”, Twój adres trafi wyłącznie do ukrytej kopii (BCC)
                    wybranej wiadomości i posłuży jedynie statystyce kampanii.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
