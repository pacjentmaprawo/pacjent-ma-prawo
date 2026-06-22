import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Info,
  MessageCircleQuestion,
  ShieldCheck,
  AlertTriangle,
  Globe,
  Building2,
  HeartCrack,
  Scale,
  Users,
  Gavel,
  ArrowRight
} from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center hero-gradient">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-4">
            Obywatelska platforma informacyjna
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy mb-6 text-balance">
            Pacjent Ma Prawo
          </h1>
          <p className="font-sans text-xl sm:text-2xl font-medium text-navy/80 mb-8">
            Wiedzieć. Pytać. Decydować.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Obywatelska platforma o prawach pacjenta i skutkach projektu nowelizacji
            <strong className="text-navy"> (UD207)</strong>, potocznie zwanego <em>„lex szarlatan"</em>.
            Popieramy ochronę pacjentów przed oszustwem — ale sprzeciwiamy się przepisom tak nieostrym,
            że mogą ograniczyć świadomą decyzję pacjenta, wolność rozmowy z lekarzem i dostęp do
            legalnych terapii wspomagających.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link href="/petycja-ud207">
              <Button
                size="lg"
                className="bg-red-orange text-background font-semibold hover:bg-red-orange/90 hover:scale-[1.02] transition-all px-8 py-6 text-base"
              >
                Wyślij apel
              </Button>
            </Link>
            <Link href="/projekt">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-navy text-navy hover:bg-navy/5 px-8 py-6 text-base"
              >
                Zobacz, co zmienia projekt
              </Button>
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            Inicjatywa obywatelska. Treści oparte na źródłach publicznych i oficjalnych dokumentach.
          </p>
        </div>
      </section>

      {/* Three Principle Cards */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy text-center mb-12">
            Trzy prawa, które chronimy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <Info className="h-6 w-6 text-navy" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  Prawo do informacji
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pacjent ma prawo wiedzieć, jakie są dostępne metody leczenia — konwencjonalne
                  i wspomagające, wraz z poziomem dowodów i ryzykiem. Bez rzetelnej informacji
                  świadoma decyzja jest niemożliwa.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <MessageCircleQuestion className="h-6 w-6 text-navy" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  Prawo do świadomej zgody
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pacjent ma prawo pytać, dyskutować z lekarzem i otrzymywać odpowiedzi. 
                  Wolność rozmowy medycznej jest warunkiem zaufania i bezpieczeństwa.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-navy" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  Prawo do bezpiecznej regulacji
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ochrona pacjenta przed oszustwem musi iść w parze z ochroną przed nieprecyzyjnymi 
                  przepisami i arbitralną decyzją administracyjną.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nie Bronimy Oszustwa Section */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy mb-8">
            Nie bronimy oszustwa. Bronimy praw pacjenta.
          </h2>
          <p className="text-base sm:text-lg text-navy/80 leading-relaxed">
            Każde oszustwo medyczne powinno być ścigane — w tym fałszywe obietnice wyleczenia, 
            zniechęcanie do leczenia onkologicznego czy wykorzystywanie chorych. Problem zaczyna się wtedy, 
            gdy przepisy są tak szerokie, że mogą objąć także odpowiedzialnych lekarzy, legalne terapie
            wspomagające o udokumentowanym działaniu, debatę naukową i świadczenia udzielane zgodnie
            z bezpieczeństwem i zgodą pacjenta.
          </p>
        </div>
      </section>

      {/* Five Risks Section */}
      <section className="py-16 lg:py-24 risk-section-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy text-center mb-12">
            Sześć głównych ryzyk projektu UD207
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Nieprecyzyjna definicja pseudomedycyny',
                desc: 'Projekt nie definiuje wystarczająco precyzyjnie, co odróżnia szarlatanerię od legalnej terapii wspomagającej. Niejasność kryteriów to ryzyko arbitralnej oceny.'
              },
              {
                title: 'Decyzje administracyjne przed pełnym wyjaśnieniem',
                desc: 'Możliwość wydania ostrzeżenia publicznego lub decyzji tymczasowej przed ostatecznym zakończeniem postępowania może powodować nieodwracalne skutki dla lekarza i pacjenta.'
              },
              {
                title: 'Efekt mrożący dla lekarzy',
                desc: 'Ryzyko kar finansowych może zniechęcać lekarzy do rozmowy z pacjentami o legalnych terapiach wspomagających — także tych, które są refundowane w innych krajach UE.'
              },
              {
                title: 'Brak rozróżnienia: oszustwo / off-label / terapia wspomagająca',
                desc: 'Projekt nie wprowadza wyraźnej granicy między oszustwem a legalną terapią wspomagającą, eksperymentem leczniczym, badaniem klinicznym czy użyciem off-label.'
              },
              {
                title: 'Ryzyko eliminacji legalnych terapii wspomagających',
                desc: 'Bez precyzyjnych definicji i gradacji dowodów projekt może doprowadzić do administracyjnej eliminacji legalnych świadczeń wspomagających, udzielanych zgodnie z prawem i wiedzą medyczną.'
              },
              {
                title: 'Brak gwarancji ciągłości opieki',
                desc: 'Projekt nie reguluje, co dzieje się z pacjentami w trakcie leczenia, gdy organ wyłączy lekarza, gabinet lub ośrodek — to najpoważniejszy skutek dla samych pacjentów.'
              }
            ].map((risk, index) => (
              <Card key={index} className="card-accent-red border border-border rounded-xl shadow-sm card-lift">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-red-orange/10 rounded-lg flex items-center justify-center mb-4">
                    <AlertTriangle className="h-5 w-5 text-red-orange" />
                  </div>
                  <h3 className="font-semibold text-navy mb-2">
                    {risk.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {risk.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Co zmieniła podkomisja + nowe argumenty */}
      <section className="py-16 lg:py-24 bg-background border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-3 text-center">Po podkomisji z 17 czerwca 2026</p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy text-center mb-4">
            Najsurowszy reżim trafił w najbardziej bezbronnych
          </h2>
          <p className="text-navy/80 leading-relaxed text-center max-w-3xl mx-auto mb-10">
            Podkomisja zawęziła zakaz „metod niebędących świadczeniem zdrowotnym" do czterech grup —
            osób małoletnich, chorych onkologicznie, ciężko i nieuleczalnie chorych oraz osób
            z zaburzeniami psychicznymi — i dodała przesłankę „zagrożenia dla zdrowia lub życia".
            To nie ochrona najsłabszych, lecz skupienie najostrzejszego reżimu na tych, którzy mają
            najmniej sił, by się bronić.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            <Card className="card-accent-red border border-border rounded-xl shadow-sm">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-red-orange/10 rounded-lg flex items-center justify-center mb-3">
                  <Users className="h-5 w-5 text-red-orange" />
                </div>
                <h3 className="font-semibold text-navy mb-2">Cztery grupy najbardziej bezbronnych</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Przykład: akupunktura na nudności po chemioterapii — metoda z wytycznych ASCO/SIO,
                  stosowana za świadomą zgodą pacjenta i za wiedzą onkologa — i tak może podpaść pod
                  reżim ustawy, bo pacjent ma diagnozę onkologiczną.
                </p>
              </CardContent>
            </Card>
            <Card className="card-accent-teal border border-border rounded-xl shadow-sm">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center mb-3">
                  <Scale className="h-5 w-5 text-teal" />
                </div>
                <h3 className="font-semibold text-navy mb-2">Organ, który karze — bez zaplecza eksperckiego</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rzecznik Praw Pacjenta (prawnik) miałby jednoosobowo orzekać i nakładać kary do 1 mln zł
                  o „zgodności z aktualną wiedzą medyczną" — spornej nawet wśród specjalistów — bez
                  transparentnej, niezależnej procedury oceny z gradacją dowodów. UOKiK, działając zbliżonymi narzędziami, ma jawne wytyczne metodologiczne — RPP nie (ryzyko arbitralności,
                  art. 2, 7 i 45 Konstytucji RP).
                </p>
              </CardContent>
            </Card>
            <Card className="card-accent-teal border border-border rounded-xl shadow-sm">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center mb-3">
                  <ShieldCheck className="h-5 w-5 text-teal" />
                </div>
                <h3 className="font-semibold text-navy mb-2">Podwójny standard dowodów</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ta sama miara EBM, zastosowana uczciwie, obejmuje też część leków onkologicznych
                  dopuszczonych warunkowo (na surogatowych punktach końcowych, z niskim ESMO-MCBS).
                  „Brak mocnych badań" nie zawsze znaczy „nieskuteczne" — często znaczy „brak środków
                  na badania taniej, niepatentowalnej substancji".
                </p>
              </CardContent>
            </Card>
            <Card className="card-accent-red border border-border rounded-xl shadow-sm">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-red-orange/10 rounded-lg flex items-center justify-center mb-3">
                  <Gavel className="h-5 w-5 text-red-orange" />
                </div>
                <h3 className="font-semibold text-navy mb-2">Symetria „dezinformacji"</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jeśli „kwestionowanie uznanych metod" ma być dezinformacją, to fałszywe odsądzanie
                  terapii o udokumentowanym działaniu jest tym samym. Jednokierunkowy przepis uderza
                  w wolność wypowiedzi i wolność badań naukowych (art. 54 i 73 Konstytucji RP).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Czego się domagamy — 9 zasad */}
      <section className="py-16 lg:py-24 bg-cream border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-3 text-center">Czego się domagamy</p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy text-center mb-4">
            Dziewięć zasad zamiast blankietowego zakazu
          </h2>
          <p className="text-navy/80 leading-relaxed text-center max-w-3xl mx-auto mb-10">
            Nie zgadzamy się, by w demokratycznym państwie prawa jeden urzędnik — powoływany przez
            premiera, niebędący sądem — jednostronnie decydował, które metody leczenia są dla nas
            dostępne. Popieramy ściganie oszustów, ale domagamy się regulacji opartej na zasadach:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {[
              ['Prawo pacjenta do wyboru terapii', 'O sposobie leczenia — w tym o legalnych terapiach wspomagających — decyduje świadomy pacjent wspólnie z lekarzem, nie urząd.'],
              ['Dostęp do legalnych terapii wspomagających', 'Bez blankietowej eliminacji legalnych metod — w tym dostępnych legalnymi drogami (badanie kliniczne, eksperyment leczniczy za świadomą zgodą, off-label, import docelowy).'],
              ['Mądra regulacja zamiast zakazu — na wzór Europy', 'Uregulowanie paramedycyny przez kwalifikacje i rejestr (Heilpraktiker w Niemczech, dyplomy ÖÄK w Austrii, model szwajcarski), nie penalizacja całej dziedziny. Legalnie wykonywane zawody wspomagające — fizjoterapeuci, dietetycy, masażyści, zielarze, akupunkturzyści i inni — nie mogą być stygmatyzowane ani wypychane z rynku.'],
              ['Wolność debaty i wypowiedzi', 'Ustawa ściga czyn — oszustwo w złej wierze — a nie wypowiedź lekarza, naukowca czy pacjenta o leczeniu.'],
              ['Dezinformacja — osobny tryb, nie natychmiastowa kara', 'Spory o metody rozstrzygać w jawnym rejestrze z prawem do odpowiedzi i korekty, a nie natychmiast wykonalną sankcją — symetrycznie, w obie strony (art. 54 i 73 Konstytucji RP).'],
              ['Jawna procedura ekspercka', 'Zanim padnie kara, niezależna ocena z gradacją dowodów (GRADE/HTA/ESMO-MCBS) i ujawnianiem konfliktów interesów — Rzecznik nie może jednoosobowo orzekać o „aktualnej wiedzy medycznej” bez transparentnej procedury, jak ma to UOKiK.'],
              ['Żaden urząd ponad sądem', 'Merytoryczna kontrola decyzji RPP przez niezależny sąd powszechny (jak decyzje UOKiK kontroluje SOKiK); natychmiastowa wykonalność tylko wyjątkowo, z szybką ścieżką odwoławczą.'],
              ['Domniemanie niewinności', 'Nieprawomocne decyzje nie są publikowane ani wykonywane jak wyroki, zanim potwierdzi je sąd.'],
              ['Nikt nie zostaje bez opieki', 'Wykluczenie świadczeniodawcy nie może oznaczać pozostawienia jego pacjentów bez ciągłości leczenia.'],
            ].map(([title, desc], index) => (
              <Card key={index} className="card-accent-teal border border-border rounded-xl shadow-sm">
                <CardContent className="p-5 lg:p-6">
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy text-background text-sm font-serif font-semibold">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">{title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/petycja-ud207">
              <Button size="lg" className="bg-red-orange text-background font-semibold hover:bg-red-orange/90 px-8">
                Wyślij apel obywatelski
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Patient Casus Teaser Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Card className="card-accent-red border border-border rounded-2xl shadow-sm overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-red-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HeartCrack className="h-6 w-6 text-red-orange" />
                </div>
                <div>
                  <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-2">
                    Wymiar humanitarny
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-navy mb-3">
                    Co, jeśli decyzja okaże się błędna?
                  </h2>
                </div>
              </div>
              <p className="text-navy/80 leading-relaxed mb-4">
                Rzecznik Praw Pacjenta to organ administracyjny, nie sąd. Każdy organ orzekający na
                dużą skalę popełnia pewien odsetek błędów. Gdy decyzja jest objęta rygorem
                natychmiastowej wykonalności, jej skutki następują, zanim sąd zdąży ją skontrolować —
                a część z nich jest nieodwracalna.
              </p>
              <p className="text-navy/80 leading-relaxed mb-6">
                Pacjent traci terapię, mały gabinet lekarski czy zielarnia traci pacjentów i płynność.
                Gdy sąd po miesiącach uchyli decyzję, firmy już często nie ma, a utraconego zdrowia
                nikt nie przywróci. UD207 nie przewiduje funduszu odszkodowawczego ani szybkiego trybu
                wstrzymania wykonania.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/co-z-pacjentami"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-orange text-background font-medium rounded-lg hover:bg-red-orange/90 transition-colors"
                >
                  Zobacz, kto ponosi skutki
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* Banner 7 modeli UE/UK */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-navy/30 rounded-2xl shadow-sm">
            <CardContent className="p-8 lg:p-12">
              <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-3">
                Stanowisko akademickie
              </p>
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-navy mb-4">
                Jak ten projekt wygląda na tle Europy?
              </h3>
              <p className="text-navy/80 leading-relaxed mb-4">
                Żaden z 7 sprawdzonych europejskich systemów ochrony zdrowia
                (Wielka Brytania, Niemcy, Francja, Belgia, Holandia, Włochy, Austria)
                nie stosuje blankietowej definicji „pseudomedycyny". Wszystkie stosują
                <strong> gradację dowodową</strong>: rozróżniają metodę, wskazanie,
                kwalifikacje osoby wykonującej, status dowodowy i ryzyko dla pacjenta.
              </p>
              <p className="text-navy/80 leading-relaxed mb-4">
                Co więcej, ta sama miara dowodowa zastosowana uczciwie obejmuje także część
                leków onkologicznych dopuszczonych warunkowo na punktach surogatowych — w analizie dopuszczeń EMA z lat 2009–2013 ok. 57% wskazań onkologicznych weszło na rynek na punktach surogatowych, bez dowodu wydłużenia życia, a wśród leków FDA z przyspieszonej ścieżki korzyść kliniczną po ponad pięciu latach potwierdziła mniej niż połowa. Blankietowa etykieta „niezgodne z aktualną wiedzą medyczną" bez gradacji
                uderzałaby więc również w fragmenty medycyny konwencjonalnej.
              </p>
              <p className="text-navy/80 leading-relaxed mb-6">
                UD207 — operując jedną definicją w art. 67zj niezależnie od tych
                rozróżnień — odchyla się od europejskiego standardu regulacyjnego
                i ryzykuje niezgodność z zasadą określoności prawa (art. 2 Konstytucji RP,
                <em> lex certa</em>) oraz proporcjonalności (art. 31 ust. 3).
              </p>
              <a
                href="/medycyna-integracyjna"
                className="inline-flex items-center gap-2 text-teal hover:underline underline-offset-4 font-medium"
              >
                Zobacz 7 modeli regulacyjnych UE/UK →
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* International Context Section */}
      <section className="py-16 lg:py-24 section-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-amber text-sm font-medium tracking-wider text-center mb-3 uppercase">
            Kontekst międzynarodowy
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-12">
            W czym Polska uczestniczyła 27 maja 2025
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <Card className="border border-border rounded-xl shadow-sm bg-background">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-teal" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  Rezolucja WHA78(14)
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  27 maja 2025 roku Światowe Zgromadzenie Zdrowia (WHA78) przyjęło w drodze konsensusu
                  Globalną Strategię WHO ds. Medycyny Tradycyjnej, Komplementarnej i Integracyjnej (TCIM) 
                  2025–2034. Polska — jako państwo członkowskie WHO i UE — była stroną przyjęcia tej rezolucji.
                </p>
                <a
                  href="https://apps.who.int/gb/ebwha/pdf_files/WHA78/A78_(14)-en.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-teal hover:underline underline-offset-4 inline-flex items-center gap-1"
                >
                  Pełny tekst rezolucji →
                </a>
              </CardContent>
            </Card>

            <Card className="border border-border rounded-xl shadow-sm bg-background">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-teal" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  Oświadczenie Unii Europejskiej
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  24 maja 2025 roku Unia Europejska — w imieniu 27 państw członkowskich, w tym Polski —
                  złożyła oświadczenie wskazujące na potrzebę odpowiedzialnej integracji medycyny tradycyjnej
                  i komplementarnej, w oparciu o evidence-based medicine, bezpieczeństwo, jakość, skuteczność
                  i efektywność kosztową.
                </p>
                <a
                  href="https://www.eeas.europa.eu/delegations/un-geneva/eu-statement-wha78-item-138-%E2%80%93-draft-global-traditional-medicine-strategy-2025-2034_en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-teal hover:underline underline-offset-4 inline-flex items-center gap-1"
                >
                  Pełne oświadczenie EEAS →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Petition CTA Banner */}
      <section className="py-16 lg:py-20 bg-red-orange">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-background mb-6">
            Chcesz, aby projekt został poprawiony?
          </h2>
          <p className="text-background/90 text-lg mb-8 max-w-2xl mx-auto">
            Wyślij apel obywatelski z konkretnymi poprawkami do posłów, senatorów, Prezydenta,
            RPO i mediów — w kilka minut, z własnej skrzynki e-mail.
          </p>
          <Link href="/petycja-ud207">
            <Button
              size="lg"
              className="bg-background text-navy font-semibold hover:bg-background/90 hover:scale-[1.02] transition-all px-10 py-6 text-base"
            >
              Wyślij apel ws. UD207
            </Button>
          </Link>
          <p className="text-background/80 mt-6 text-sm">
            <em className="font-medium">Gotowe pisma. Wybierasz adresatów i wysyłasz jednym kliknięciem.</em>
          </p>
        </div>
      </section>
    </>
  )
}
