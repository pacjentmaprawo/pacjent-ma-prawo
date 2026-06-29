import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ShieldCheck, Scale, Layers, Coins, Users, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Terapie wspomagające — cywilizowana integracja, nie zakaz',
  description: 'Terapie wspomagające w onkologii: istnieją, są nadzorowane i opiniowane przez towarzystwa naukowe. Domagamy się ich cywilizowanego uregulowania zamiast blankietowego zakazu.',
}

export default function TerapieWspomagajacePage() {
  return (
    <>
      <section className="py-16 lg:py-24 hero-gradient">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-3">Wspomaganie pacjenta</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-6 text-balance">
            Cywilizowana integracja, nie blankietowy zakaz
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Terapie wspomagające towarzyszą leczeniu onkologicznemu na całym świecie. Nie chodzi o
            zastępowanie leczenia o udokumentowanej skuteczności, lecz o wspomaganie pacjenta — za jego
            świadomą zgodą, obok terapii standardowej. Domagamy się ich cywilizowanego uregulowania,
            a nie eliminowania całej kategorii świadczeń na podstawie nieprecyzyjnych kryteriów.
          </p>
        </div>
      </section>

      <section className="py-10 lg:py-12 bg-background border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-border bg-cream/60 p-6">
            <h2 className="font-semibold text-navy mb-2">Dlaczego to ważne — w skrócie</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Projekt UD207 czyni z „zgodności z aktualną wiedzą medyczną" granicę między legalnym
              świadczeniem a „praktyką pseudomedyczną". Terapię uznaną za niezgodną z tą wiedzą można
              potraktować jako naruszenie praw pacjenta i objąć sankcjami. Problem w tym, że pojęcie
              „aktualnej wiedzy medycznej" nie ma definicji legalnej. Zwykle odsyła ono do wiedzy
              weryfikowalnej badaniami oraz do doświadczenia klinicznego lekarza — i z tym się nie spieramy.
              Wątpliwości budzi co innego: w uzasadnieniu projektu standard ten utożsamia się dodatkowo
              z akceptacją w wytycznych towarzystw naukowych. Wytyczne nie są jednak normą prawną —
              powstają z opóźnieniem, różnią się między sobą, a wydające je towarzystwa same bywają
              finansowane przez przemysł farmaceutyczny. Rodzi to pytanie, czy odzwierciedlają wyłącznie
              najnowszą wiedzę medyczną, czy także oczekiwania sponsorów. Podniesienie wytycznych do roli
              granicy legalności oznaczałoby, że o tym, co wolno, decyduje de facto dokument branżowy, a
              terapia z dowodami, lecz jeszcze poza wytyczną, mogłaby zostać uznana za bezprawną.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card className="card-accent-teal border border-border rounded-xl shadow-sm">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center mb-3">
                  <ShieldCheck className="h-5 w-5 text-teal" />
                </div>
                <h2 className="font-semibold text-navy mb-2">Istnieją, są nadzorowane i opiniowane</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Świadczenia wspomagające są stosowane w wielu krajach Europy (Niemcy, Austria, Szwajcaria,
                  Francja, Belgia, Holandia, Wielka Brytania) w ramach kwalifikacji i rejestrów, a towarzystwa
                  naukowe (m.in. ASCO/SIO, ESMO, MASCC, DEGRO) wydają wytyczne onkologii wspomagającej i coraz częściej uwzględniają takie metody w swoich rekomendacjach.
                  To także element aktualnej wiedzy medycznej — nie margines poza nią.
                </p>
              </CardContent>
            </Card>
            <Card className="card-accent-teal border border-border rounded-xl shadow-sm">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center mb-3">
                  <Layers className="h-5 w-5 text-teal" />
                </div>
                <h2 className="font-semibold text-navy mb-2">„Aktualna wiedza medyczna" to gradacja</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dowody naukowe mają poziomy — od opinii i serii przypadków po randomizowane badania
                  i metaanalizy. „Brak dużego badania" nie jest dowodem nieskuteczności — ale nie jest też dowodem skuteczności. Prawo nie może działać
                  zero-jedynkowo „medycyna kontra pseudomedycyna"; musi stosować gradację dowodów, ryzyka,
                  celu świadczenia i informacji dla pacjenta. Co istotne, sama medycyna oparta na dowodach (EBM) to
                  z definicji nie tylko badania — łączy najlepsze dowody naukowe, doświadczenie kliniczne lekarza oraz
                  wartości i decyzję pacjenta (Sackett, BMJ 1996). Ze świadczeń wspomagających korzysta przy tym znaczna
                  część pacjentów onkologicznych — także w Polsce: w badaniu przekrojowym w ośrodku onkologicznym (n=208) korzystanie z metod komplementarnych deklarowało aż 85% chorych (Ann Agric Environ Med).
                </p>
              </CardContent>
            </Card>
            <Card className="card-accent-red border border-border rounded-xl shadow-sm">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-red-orange/10 rounded-lg flex items-center justify-center mb-3">
                  <Scale className="h-5 w-5 text-red-orange" />
                </div>
                <h2 className="font-semibold text-navy mb-2">Podwójny standard dowodów</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ta sama miara, stosowana uczciwie, obejmuje też leczenie konwencjonalne: spośród
                  onkologicznych dopuszczeń Europejskiej Agencji Leków z lat 2009–2013 około 57% wskazań
                  weszło na rynek na podstawie punktów surogatowych, bez dowodu wydłużenia życia
                  (Davis i wsp., BMJ 2017). Wśród leków z przyspieszonej ścieżki FDA tylko 43% wykazało
                  korzyść kliniczną po ponad pięciu latach (JAMA 2024).
                </p>
              </CardContent>
            </Card>
            <Card className="card-accent-red border border-border rounded-xl shadow-sm">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-red-orange/10 rounded-lg flex items-center justify-center mb-3">
                  <Coins className="h-5 w-5 text-red-orange" />
                </div>
                <h2 className="font-semibold text-navy mb-2">Luka finansowania, nie luka skuteczności</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dużych badań nad substancjami niepatentowalnymi często brakuje nie dlatego, że nie działają,
                  lecz dlatego, że nie ma komercyjnego sponsora gotowego sfinansować kosztowne badania III fazy.
                  Brak dowodów bywa luką w finansowaniu nauki, a nie dowodem szkodliwości — i państwo powinno
                  takie badania wspierać, a nie karać za samo ich prowadzenie czy informowanie o nich.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Users className="h-6 w-6 text-navy" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-navy mb-4">
            Czego się domagamy
          </h2>
          <p className="text-navy/80 leading-relaxed mb-4">
            Cywilizowanego wprowadzenia świadczeń wspomagających do polskiego systemu: uregulowania przez
            kwalifikacje i rejestr, jawnej i niezależnej oceny eksperckiej z gradacją dowodów, świadomej
            zgody pacjenta oraz ciągłości opieki. To rozwiązania na wzór europejski — zamiast blankietowego
            zakazu opartego na hasłach.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            Materiał ma charakter informacyjny i edukacyjny. Nie stanowi porady medycznej, nie zastępuje
            konsultacji z lekarzem i nie zachęca do rezygnacji z diagnostyki ani z leczenia prowadzonego
            zgodnie z aktualną wiedzą medyczną.
          </p>
          <Link href="/petycja-ud207">
            <Button size="lg" className="bg-red-orange text-background font-semibold hover:bg-red-orange/90 px-8">
              Wyślij apel ws. UD207
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
