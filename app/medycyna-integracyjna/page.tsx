import type { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Check, X, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Medycyna integracyjna',
  description: 'Czym jest medycyna komplementarna i integracyjna? Wyjaśnienie pojęć według definicji WHO i międzynarodowych standardów medycznych.',
}

const tableData = [
  {
    term: 'Medycyna konwencjonalna',
    meaning: 'Diagnostyka i leczenie zgodne z aktualną wiedzą medyczną, oparte na evidence-based medicine, GRADE, OCEBM',
    notMeaning: 'Nie oznacza, że nie wolno badać metod wspomagających ani że jest jedyną formą medycyny',
    safety: 'Stała aktualizacja w oparciu o badania kliniczne'
  },
  {
    term: 'Medycyna komplementarna',
    meaning: 'Wsparcie OBOK leczenia głównego, integracja wybranych metod z udokumentowaną skutecznością w określonych wskazaniach (np. akupunktura w bólu przewlekłym)',
    notMeaning: 'Nie zastępuje onkologii, chirurgii, antybiotyków, immunoterapii',
    safety: 'Ocena dowodów, zgoda pacjenta, brak konfliktu z leczeniem głównym'
  },
  {
    term: 'Medycyna integracyjna',
    meaning: 'Model klinicznego łączenia leczenia konwencjonalnego z metodami komplementarnymi po ocenie dowodów, ryzyka, celu i zgody pacjenta. Definicja WHO TCIM 2025–2034',
    notMeaning: 'Nie oznacza dowolności, braku kontroli ani opozycji wobec evidence-based medicine',
    safety: 'Lekarz prowadzący, dokumentacja, świadoma zgoda, monitoring bezpieczeństwa'
  },
  {
    term: 'Medycyna alternatywna',
    meaning: 'Metody stosowane ZAMIAST leczenia konwencjonalnego',
    notMeaning: 'NIE jest tym samym co komplementarna ani integracyjna',
    safety: 'Wymaga ostrzeżenia o ryzyku rezygnacji z leczenia o udokumentowanej skuteczności'
  },
  {
    term: 'Pseudomedycyna / oszustwo',
    meaning: 'Fałszywe obietnice wyleczenia, zniechęcanie do skutecznego leczenia, ukrywanie ryzyka, reklamowanie terapii bez podstaw',
    notMeaning: 'Nie obejmuje terapii wspomagających prowadzonych odpowiedzialnie ani debaty naukowej',
    safety: 'Powinna być ścigana — ale na podstawie precyzyjnych definicji'
  },
]

const weDefend = [
  'Prawa pacjenta do informacji o wszystkich opcjach leczenia',
  'Prawa do rozmowy z lekarzem o terapiach wspomagających',
  'Prawa do drugiej opinii',
  'Prawa do świadomej zgody i autonomii decyzji',
  'Prawa do terapii wspomagających prowadzonych odpowiedzialnie',
  'Prawa do proporcjonalnej i precyzyjnej regulacji',
]

const weDoNotDefend = [
  'Fałszywych obietnic wyleczenia',
  'Zniechęcania pacjenta do skutecznego leczenia',
  'Ukrywania ryzyka i przeciwwskazań',
  'Reklamowania terapii bez podstaw klinicznych',
  'Wykorzystywania chorych i ich rodzin',
  'Praktyk zastępowania medycyny opartej na dowodach pseudomedycyną',
]

export default function MedycynaIntegracyjnaPage() {
  return (
    <div>
      {/* Header */}
      <section className="hero-gradient py-12 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-3">
            Edukacja
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-4 text-balance">
          Komplementarna nie znaczy alternatywna
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Czym jest medycyna integracyjna i czym nie jest
        </p>
        <p className="text-navy/80 leading-relaxed">
          Pojęcia z obszaru medycyny komplementarnej i integracyjnej są często mylone — także
          w debacie publicznej. Ta strona wyjaśnia, co te terminy faktycznie oznaczają według
          definicji Światowej Organizacji Zdrowia i międzynarodowych standardów medycznych.
        </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="overflow-x-auto rounded-xl border border-border">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary">
                <TableHead className="font-semibold text-navy min-w-[150px]">Pojęcie</TableHead>
                <TableHead className="font-semibold text-navy min-w-[250px]">Co oznacza</TableHead>
                <TableHead className="font-semibold text-navy min-w-[250px]">Czego NIE oznacza</TableHead>
                <TableHead className="font-semibold text-navy min-w-[200px]">Warunek bezpieczeństwa</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow key={index} className="hover:bg-secondary/50">
                  <TableCell className="font-semibold text-navy align-top">
                    {row.term}
                  </TableCell>
                  <TableCell className="text-muted-foreground align-top">
                    {row.meaning}
                  </TableCell>
                  <TableCell className="text-muted-foreground align-top">
                    {row.notMeaning}
                  </TableCell>
                  <TableCell className="text-muted-foreground align-top">
                    {row.safety}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Key Message Banner */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-16">
        <Card className="border-2 border-navy rounded-xl">
          <CardContent className="p-6 lg:p-8">
            <p className="text-navy leading-relaxed text-center font-medium">
              Medycyna integracyjna nie polega na zastępowaniu leczenia onkologicznego, chirurgicznego 
              ani antybiotykowego. Jej sens polega na odpowiedzialnym łączeniu metod wspomagających 
              z leczeniem głównym — przy ocenie dowodów, ryzyka, celu i świadomej zgody pacjenta.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Wzorzec języka — Macmillan — POZIOM B v3 */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-12">
        <Card className="border border-teal/30 rounded-xl bg-teal/5">
          <CardContent className="p-6 lg:p-8">
            <p className="text-sm font-medium text-teal tracking-wider uppercase mb-3">
              Wzorzec języka międzynarodowego
            </p>
            <h3 className="font-serif text-lg font-semibold text-navy mb-3">
              Cztery zasady — Macmillan Cancer Support (UK)
            </h3>
            <ul className="space-y-2 text-navy/80">
              <li className="flex items-start gap-3">
                <span className="text-teal font-bold">1.</span>
                <span>Komplementarne <strong>nie znaczy</strong> alternatywne.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal font-bold">2.</span>
                <span>Nigdy <strong>zamiast</strong> leczenia konwencjonalnego.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal font-bold">3.</span>
                <span>Bez obietnic <strong>wyleczenia</strong> raka.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal font-bold">4.</span>
                <span>Zawsze <strong>konsultacja</strong> z zespołem medycznym.</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4 italic">
              Źródło: Macmillan Cancer Support, „About complementary therapies"
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Two Column Section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* What We Defend */}
          <Card className="border border-border rounded-xl">
            <CardContent className="p-6 lg:p-8">
              <h3 className="font-serif text-xl font-semibold text-navy mb-6">
                Czego BRONIMY:
              </h3>
              <ul className="space-y-3">
                {weDefend.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-teal" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* What We Do Not Defend */}
          <Card className="border border-border rounded-xl">
            <CardContent className="p-6 lg:p-8">
              <h3 className="font-serif text-xl font-semibold text-navy mb-6">
                Czego NIE bronimy:
              </h3>
              <ul className="space-y-3">
                {weDoNotDefend.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-red-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-3 w-3 text-red-orange" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WHO Section */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-navy mb-6">
            Co mówi WHO
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Według Globalnej Strategii Medycyny Tradycyjnej, Komplementarnej i Integracyjnej WHO 
            2025–2034 (rezolucja WHA78(14) z 27.05.2025), medycyna integracyjna powinna rozwijać się
            w oparciu o cztery filary: wzmocnienie dowodów naukowych, bezpieczeństwo i regulacje, 
            integrację z systemami zdrowia oraz innowacje.
          </p>
          <a
            href="https://www.who.int/publications/i/item/9789240113176"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal hover:underline underline-offset-4"
          >
            <ExternalLink className="h-4 w-4" />
            WHO TCIM Strategy 2025–2034
          </a>
        </div>
      </section>

      {/* 7 modeli regulacyjnych UE/UK — POZIOM A v3 */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-3">
            Komparatystyka
          </p>
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-navy mb-4">
            Jak inne państwa UE/UK regulują medycynę komplementarną
          </h2>
          <p className="text-navy/80 leading-relaxed mb-8">
            Państwa europejskie nie stosują jednego blankietowego modelu „pseudomedycyny".
            Stosują różne modele gradacyjne, dostosowane do jakości dowodów, kwalifikacji
            osoby wykonującej i ryzyka dla pacjenta. Poniżej 7 modeli na tle UD207.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card className="border border-border rounded-xl">
              <CardContent className="p-5">
                <h3 className="font-semibold text-navy mb-2">
                  Wielka Brytania — selektywny model NICE
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  NICE NG193 (akupunktura w chronic primary pain, 2021), NG222
                  (mindfulness/MBCT w depresji, 2022), NG144 (nabilon w CINV opornych,
                  2019). NHS wycofał homeopatię w 2018 r. po negatywnej ocenie.
                  Evidence-based filtering, nie blankietowy zakaz.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border rounded-xl">
              <CardContent className="p-5">
                <h3 className="font-semibold text-navy mb-2">
                  Niemcy — model mieszany G-BA
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Akupunktura w GKV od 2007 r. dla chronic back/knee pain (kwalifikacja
                  140-200 h kursu). Jemioła (Iscador) — refundacja GKV obligatoryjna
                  w stadiach paliatywnych choroby nowotworowej. Cannabis medyczny GKV
                  od 2017 r.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border rounded-xl">
              <CardContent className="p-5">
                <h3 className="font-semibold text-navy mb-2">
                  Francja — twarda ocena HAS
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  HAS wycofała homeopatię z refundacji 1.01.2021 r. po negatywnej ocenie
                  skuteczności (koszt 126,8 mln EUR/rok przed wycofaniem). MIVILUDES —
                  nadzór nadużyć, nie zakaz metody. Akupunktura — tylko lekarska
                  (DU Acupuncture).
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border rounded-xl">
              <CardContent className="p-5">
                <h3 className="font-semibold text-navy mb-2">
                  Szwajcaria — model konstytucyjny
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Art. 118a Konstytucji Federalnej + 5 metod CAM refundowanych z
                  powszechnego ubezpieczenia (od 2017): medycyna antroposoficzna,
                  farmakoterapia TCM, akupunktura, klasyczna homeopatia, fitoterapia.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border rounded-xl">
              <CardContent className="p-5">
                <h3 className="font-semibold text-navy mb-2">
                  Włochy/Toskania — regionalna integracja
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ustawa regionalna 9/2007 — akupunktura, TCM, homeopatia, fitoterapia,
                  medycyna manualna w regionalnym systemie publicznym za ticket.
                  20 klinik onkologii integracyjnej od 2022 r. Emilia-Romagna:
                  akupunktura w LEA regionalnym.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border rounded-xl">
              <CardContent className="p-5">
                <h3 className="font-semibold text-navy mb-2">
                  Austria — model lekarski ÖÄK
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  14 dyplomów Österreichische Ärztekammer w obszarze CAM (Akupunktur
                  1991, Homöopathie 1994, Anthroposophische Medizin 2001, TCM 2005,
                  Begleitende Krebsbehandlungen — uzupełniające leczenie nowotworów —
                  od 2007).
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-navy rounded-xl bg-secondary/30 mt-8">
            <CardContent className="p-6 lg:p-8">
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                Wniosek konstytucyjny
              </h3>
              <p className="text-navy/80 leading-relaxed mb-4">
                <strong>Wspólna cecha 7 modeli</strong>: rozróżnienie metody, wskazania,
                kwalifikacji osoby wykonującej, statusu dowodowego i ryzyka dla
                pacjenta. <strong>UD207 nie stosuje żadnego z tych rozróżnień</strong> —
                operuje jednolitą definicją „praktyki pseudomedycznej" w art. 67zj.
              </p>
              <p className="text-navy/80 leading-relaxed">
                Komparatystyka nie dowodzi, że wszystkie metody CAM są skuteczne.
                Dowodzi, że nowoczesne systemy zdrowia stosują <strong>gradację</strong>,
                nie blankietowe etykiety. UD207 bez gradacji ryzykuje niezgodność
                z zasadą określoności prawa (art. 2 Konstytucji RP, <em>lex certa</em>)
                i proporcjonalności (art. 31 ust. 3 Konstytucji RP).
              </p>
              <div className="mt-4">
                <a
                  href="/dokumenty/Zalacznik_3_v2.2_Mapa_onkologii_integracyjnej_EBM.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal hover:underline underline-offset-4 font-medium"
                >
                  <ExternalLink className="h-4 w-4" />
                  Pełna analiza: Załącznik 3 v2.2 — Część V (komparatystyka 7 krajów)
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tabela zbiorcza refundacji — POZIOM C v3 */}
      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-navy mb-6 text-center">
            Status wybranych metod w 7 krajach UE/UK
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-white">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary">
                  <TableHead className="font-semibold text-navy">Metoda</TableHead>
                  <TableHead className="text-center font-semibold text-navy">DE</TableHead>
                  <TableHead className="text-center font-semibold text-navy">FR</TableHead>
                  <TableHead className="text-center font-semibold text-navy">UK</TableHead>
                  <TableHead className="text-center font-semibold text-navy">IT</TableHead>
                  <TableHead className="text-center font-semibold text-navy">AT</TableHead>
                  <TableHead className="text-center font-semibold text-navy">CH</TableHead>
                  <TableHead className="text-center font-semibold text-navy">NL</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Akupunktura igłowa</TableCell>
                  <TableCell className="text-center">GKV</TableCell>
                  <TableCell className="text-center">tylko lekarze</TableCell>
                  <TableCell className="text-center">NICE NG193</TableCell>
                  <TableCell className="text-center">Toskania / Emilia-Romagna</TableCell>
                  <TableCell className="text-center">ÖÄK Diplom</TableCell>
                  <TableCell className="text-center">Konstytucja</TableCell>
                  <TableCell className="text-center">dodatkowe</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Homeopatia</TableCell>
                  <TableCell className="text-center">sporne</TableCell>
                  <TableCell className="text-center">wycofana 2021</TableCell>
                  <TableCell className="text-center">wycofana 2018</TableCell>
                  <TableCell className="text-center">tylko lekarze</TableCell>
                  <TableCell className="text-center">ÖÄK Diplom</TableCell>
                  <TableCell className="text-center">Konstytucja</TableCell>
                  <TableCell className="text-center">dodatkowe</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jemioła (Iscador)</TableCell>
                  <TableCell className="text-center">paliatywne</TableCell>
                  <TableCell className="text-center">prywatnie</TableCell>
                  <TableCell className="text-center">prywatnie</TableCell>
                  <TableCell className="text-center">prywatnie</TableCell>
                  <TableCell className="text-center">prywatnie</TableCell>
                  <TableCell className="text-center">Konstytucja</TableCell>
                  <TableCell className="text-center">dodatkowe</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Cannabis medyczny</TableCell>
                  <TableCell className="text-center">GKV od 2017</TableCell>
                  <TableCell className="text-center">dostępny</TableCell>
                  <TableCell className="text-center">NICE NG144</TableCell>
                  <TableCell className="text-center">dostępny</TableCell>
                  <TableCell className="text-center">dostępny</TableCell>
                  <TableCell className="text-center">dostępny</TableCell>
                  <TableCell className="text-center">dostępny</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Mindfulness (MBCT)</TableCell>
                  <TableCell className="text-center">psychoterapia</TableCell>
                  <TableCell className="text-center">szpitale publ.</TableCell>
                  <TableCell className="text-center">NICE NG222</TableCell>
                  <TableCell className="text-center">częściowo</TableCell>
                  <TableCell className="text-center">psychoterapia</TableCell>
                  <TableCell className="text-center">prywatnie</TableCell>
                  <TableCell className="text-center">HDI</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Muzykoterapia</TableCell>
                  <TableCell className="text-center">prywatnie</TableCell>
                  <TableCell className="text-center">prywatnie</TableCell>
                  <TableCell className="text-center">HCPC + NHS</TableCell>
                  <TableCell className="text-center">prywatnie</TableCell>
                  <TableCell className="text-center">prywatnie</TableCell>
                  <TableCell className="text-center">prywatnie</TableCell>
                  <TableCell className="text-center">prywatnie</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Begleitende Krebsbehandlungen</TableCell>
                  <TableCell className="text-center">prywatnie</TableCell>
                  <TableCell className="text-center">—</TableCell>
                  <TableCell className="text-center">—</TableCell>
                  <TableCell className="text-center">—</TableCell>
                  <TableCell className="text-center">ÖÄK od 2007</TableCell>
                  <TableCell className="text-center">—</TableCell>
                  <TableCell className="text-center">—</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Legenda</strong>: wpisy w komórkach wskazują podstawę regulacyjną
            lub status. Pełna analiza w Załączniku 3 v2.2, Część V.
          </p>
        </div>
      </section>


    </div>
  )
}
