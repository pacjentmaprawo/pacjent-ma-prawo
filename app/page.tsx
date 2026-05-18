import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Info, 
  MessageCircleQuestion, 
  ShieldCheck, 
  AlertTriangle,
  Globe,
  Building2
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
            Obywatelska platforma o prawach pacjenta, medycynie integracyjnej i skutkach projektu nowelizacji
            <strong className="text-navy"> (UD207)</strong>, potocznie nazywanego <em>„lex szarlatan"</em>.
            Popieramy ochronę pacjentów przed oszustwem — ale sprzeciwiamy się rozwiązaniom, które mogą
            ograniczyć świadomą decyzję pacjenta, wolność rozmowy z lekarzem i rozwój bezpiecznej
            medycyny integracyjnej.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link href="/petycja">
              <Button 
                size="lg" 
                className="bg-amber text-navy font-semibold hover:bg-amber/90 hover:scale-[1.02] transition-all px-8 py-6 text-base"
              >
                Podpisz apel
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
                  Pacjent ma prawo wiedzieć, jakie są dostępne metody leczenia — konwencjonalne, 
                  komplementarne i integracyjne. Bez rzetelnej informacji świadoma decyzja jest niemożliwa.
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
            gdy przepisy są tak szerokie, że mogą objąć także odpowiedzialnych lekarzy, terapie wspomagające 
            o udokumentowanej skuteczności, debatę naukową czy medycynę integracyjną prowadzoną zgodnie 
            z bezpieczeństwem i zgodą pacjenta.
          </p>
        </div>
      </section>

      {/* Five Risks Section */}
      <section className="py-16 lg:py-24 risk-section-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy text-center mb-12">
            Pięć głównych ryzyk projektu Lex Szarlatan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Nieprecyzyjna definicja pseudomedycyny',
                desc: 'Projekt nie definiuje wystarczająco precyzyjnie, co odróżnia szarlatanerię od terapii wspomagającej. Niejasność kryteriów to ryzyko arbitralnej oceny.'
              },
              {
                title: 'Decyzje administracyjne przed pełnym wyjaśnieniem',
                desc: 'Możliwość wydania ostrzeżenia publicznego lub decyzji tymczasowej przed prawomocnym wyjaśnieniem sprawy może powodować nieodwracalne skutki dla lekarza i pacjenta.'
              },
              {
                title: 'Efekt mrożący dla lekarzy',
                desc: 'Ryzyko kar finansowych może zniechęcać lekarzy do rozmowy z pacjentami o legalnych terapiach wspomagających — także tych, które są refundowane w innych krajach UE.'
              },
              {
                title: 'Brak rozróżnienia: oszustwo / off-label / integracyjna',
                desc: 'Projekt nie wprowadza wyraźnej granicy między oszustwem a terapią wspomagającą, eksperymentem klinicznym, użyciem off-label czy medycyną integracyjną.'
              },
              {
                title: 'Ryzyko eliminacji medycyny integracyjnej',
                desc: 'Bez precyzyjnych definicji projekt może doprowadzić do administracyjnej eliminacji legalnych ośrodków medycyny integracyjnej, działających zgodnie z aktualną wiedzą medyczną.'
              }
            ].map((risk, index) => (
              <Card key={index} className="border border-border rounded-xl shadow-sm">
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
      <section className="py-16 lg:py-20 bg-amber">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy mb-6">
            Chcesz, aby projekt został poprawiony?
          </h2>
          <p className="text-navy/80 text-lg mb-8 max-w-2xl mx-auto">
            Podpisz obywatelski apel o skierowanie projektu Lex Szarlatan do ponownych konsultacji publicznych.
          </p>
          <Link href="/petycja">
            <Button 
              size="lg" 
              className="bg-background text-navy font-semibold hover:bg-background/90 hover:scale-[1.02] transition-all px-10 py-6 text-base"
            >
              Podpisz apel obywatelski
            </Button>
          </Link>
          <p className="text-navy/70 mt-6 text-sm">
            <em className="font-medium">Formularz petycyjny w przygotowaniu</em> — integracja z platformą OpenPetition.pl wkrótce
          </p>
        </div>
      </section>
    </