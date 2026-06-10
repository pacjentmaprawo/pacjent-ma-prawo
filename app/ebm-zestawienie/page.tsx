import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { FileText, AlertTriangle, Scale, BookOpen, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Substancje wskazywane przez RPP/NRL jako pseudomedycyna — co mówi nauka',
  description:
    'Zestawienie 15 substancji publicznie wskazanych przez RPP, NRL i orzeczenia WSA z dostępnymi dowodami EBM. Wszystkie sygnatury i PMID zweryfikowane w bazach pierwotnych.',
}

type Substance = {
  no: number
  name: string
  source: string
  ocebm: string
  grade: string
  regulatory: string
}

const substances: Substance[] = [
  {
    no: 1,
    name: 'Artesunat',
    source: 'NRL Nr 2/21/VIII pkt 1',
    ocebm: '3–4',
    grade: 'Low–moderate',
    regulatory: 'Lek przeciwmalaryczny FDA/EMA; off-label onko możliwy',
  },
  {
    no: 2,
    name: 'Witamina C dożylna (IVC)',
    source: 'NRL pkt 2 + wywiad RPP 21.01.2025',
    ocebm: '2b',
    grade: 'Moderate',
    regulatory: 'Pascorbin® (DE) na niedobór; brak rejestracji onko',
  },
  {
    no: 3,
    name: 'Resweratrol',
    source: 'NRL Nr 2/21/VIII pkt 3',
    ocebm: '4–5',
    grade: 'Low',
    regulatory: 'Suplement diety',
  },
  {
    no: 4,
    name: 'DMSO (dimetylosulfotlenek)',
    source: 'NRL pkt 4 + wywiad RPP 21.01.2025',
    ocebm: '5',
    grade: 'Very low',
    regulatory: 'FDA: tylko śródmiąższowe zapalenie pęcherza',
  },
  {
    no: 5,
    name: 'Salinomycyna',
    source: 'NRL Nr 2/21/VIII pkt 5',
    ocebm: '5 (+ 3–4 obs.)',
    grade: 'Very low',
    regulatory: 'LEK WETERYNARYJNY; brak rejestracji dla ludzi',
  },
  {
    no: 6,
    name: 'Kurkumina',
    source: 'NRL pkt 6 + wywiad RPP',
    ocebm: '3–4',
    grade: 'Low',
    regulatory: 'Suplement diety',
  },
  {
    no: 7,
    name: 'Tlenoterapia dożylna / ozonoterapia',
    source: 'NRL pkt 7 + wywiad RPP 21.01.2025',
    ocebm: '5',
    grade: 'Very low',
    regulatory: 'Brak rejestracji onko',
  },
  {
    no: 8,
    name: 'Naświetlanie laserowe krwi (ILIB)',
    source: 'NRL Nr 2/21/VIII pkt 8',
    ocebm: '5',
    grade: 'Very low',
    regulatory: 'Brak rejestracji onko',
  },
  {
    no: 9,
    name: 'Akupunktura laserowa',
    source: 'NRL Nr 2/21/VIII pkt 9',
    ocebm: '3–4',
    grade: 'Low',
    regulatory: 'ASCO/SIO 2022: rekomendują klasyczną (nie laserową) w CIPN',
  },
  {
    no: 10,
    name: 'Galwanoterapia / bioelektroterapia',
    source: 'NRL pkt 10 + wywiad RPP („laptop")',
    ocebm: '5',
    grade: 'Very low',
    regulatory: 'Heterogeniczna kategoria; ≠ TTFields/Optune (FDA-approved GBM)',
  },
  {
    no: 11,
    name: 'Hipertermia ogólnoustrojowa (WBH)',
    source: 'NRL Nr 2/21/VIII pkt 11',
    ocebm: '4–5',
    grade: 'Low',
    regulatory: 'WBH: brak rejestracji; ≠ RHT lokoregionalna (DEGRO/ESMO)',
  },
  {
    no: 12,
    name: 'Ozonoterapia w nowotworach',
    source: 'wywiad RPP 21.01.2025 (= NRL pkt 7)',
    ocebm: '5',
    grade: 'Very low',
    regulatory: 'Brak rejestracji onko',
  },
  {
    no: 13,
    name: 'Bioelektroterapia',
    source: 'NRL Nr 2/21/VIII pkt 10',
    ocebm: '5',
    grade: 'Very low',
    regulatory: 'Generyczna kategoria; ≠ TTFields/Optune',
  },
  {
    no: 14,
    name: 'Protokoły ILADS w boreliozie',
    source: 'WSA V SA/Wa 767/24 z 23.10.2024',
    ocebm: '3–4',
    grade: 'Low',
    regulatory: 'Konflikt ILADS vs IDSA; w PL brak akceptacji KK',
  },
  {
    no: 15,
    name: 'Suplementy w leczeniu boreliozy',
    source: 'WSA V SA/Wa 767/24 z 23.10.2024',
    ocebm: '5',
    grade: 'Very low',
    regulatory: 'Suplementy diety; brak rejestracji jako lek',
  },
]

const paradoxes = [
  {
    cam: {
      title: 'Witamina C dożylna (IVC) w raku trzustki',
      evidence:
        'Bodeker et al. 2024 (PACMAN 2.1), Redox Biology, PMID 39369582 — RCT fazy 2, n=34, OS 16,0 vs 8,3 mies. (HR=0,46; p=0,030)',
      ocebm: 'OCEBM 2b',
      pl: '„Pseudomedycyna" wg stanowiska RPP/NRL; w obecnym stanie prawnym możliwe sankcje administracyjne, a wg projektu UD207 — do 1 mln zł',
    },
    drug: {
      title: 'Bewacizumab (Avastin) w nawrotowym GBM',
      evidence:
        'FDA accelerated approval 2009 na ORR (surrogate); RTOG 0825 i AVAglio: brak korzyści w OS (HR=1,13; p=0,42)',
      ocebm: 'NCCN 2B (niski poziom dowodów, niejednomyślny konsensus)',
      pl: 'NFZ Program Lekowy B.56 — refundowany',
    },
    note: 'Substancja z RCT fazy 2 wykazującą istotne wydłużenie OS jest kwalifikowana jako „pseudomedycyna". Lek z trzema fazami 3 niewykazującymi korzyści w OS jest refundowany przez NFZ.',
  },
  {
    cam: {
      title: 'Iscador / preparaty z jemioły (Viscum album)',
      evidence:
        'Melzer et al. 2009 — przegląd systematyczny n>6800; pozytywne dla QoL, niespójne OS',
      ocebm: 'OCEBM 3',
      pl: 'Poza systemem refundacji; NRL Nr 2/21/VIII NIE wymienia (Test Koniunkcji)',
    },
    drug: {
      title: 'Olaratumab (Lartruvo) w mięsakach',
      evidence:
        'EMA Conditional Marketing Authorisation 2016 — faza Ib/II, n=133, surrogate PFS; ANNOUNCE faza III: NEGATYWNY (HR OS=1,05)',
      ocebm: 'OCEBM 1b (CMA) → 1b NEG',
      pl: 'RDTL 2016–2019; EMA wycofała 25.04.2019',
    },
    note: 'Substancja refundowana w Szwajcarii (art. 118a Konstytucji) i Niemczech. W Polsce poza systemem. Lek konwencjonalny z fazy Ib/II (n=133) został zarejestrowany warunkowo przez EMA — wycofany po negatywnej fazie 3.',
  },
  {
    cam: {
      title: 'FDA Project Confirm — fakt systemowy',
      evidence:
        '30+ wycofanych accelerated approvals w onkologii: Xpovio, Trodelvy, Exkivity, Pepaxto, Aliqopa, Gavreto, Imbruvica, Blenrep, Tecentriq...',
      ocebm: '—',
      pl: 'Lista FDA: fda.gov/drugs/.../withdrawn-cancer-accelerated-approvals',
    },
    drug: {
      title: 'Standard mainstream onkologii',
      evidence:
        'Accelerated approval na surrogate endpoints (ORR/PFS); ok. 1/3 nie potwierdza się w fazie 3',
      ocebm: '—',
      pl: 'Refundowane podczas funkcjonowania na rynku',
    },
    note: 'Mainstream onkologia w USA i UE rutynowo rejestruje leki na surrogate endpoints. Standard dowodowy identyczny z tym, który UD207 kwalifikuje jako „pseudomedycyna" w obszarze medycyny komplementarnej.',
  },
]

export default function EBMZestawieniePage() {
  return (
    <div>
      <section className="hero-gradient py-12 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-3">
            Załącznik 3 do Policy Paper EBM
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-4">
            Substancje wskazywane jako „pseudomedycyna" — co mówi nauka
          </h1>
          <p className="text-lg text-navy/80 leading-relaxed">
            Dla 15 substancji publicznie wskazanych przez Naczelną Radę Lekarską
            (Stanowisko Nr 2/21/VIII z 12.03.2021) oraz Rzecznika Praw Pacjenta
            (wywiad Termedia z 21.01.2025) — zebraliśmy najwyższe dostępne dowody EBM.
            Wszystkie daty i PMID/DOI zweryfikowane w bazach pierwotnych.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 my-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border border-border rounded-xl">
            <CardContent className="p-5">
              <FileText className="h-6 w-6 text-red-orange mb-2" />
              <h3 className="font-semibold text-navy mb-1">15 substancji</h3>
              <p className="text-sm text-muted-foreground">
                Pełna lista wskazana przez NRL, RPP i orzeczenia WSA
              </p>
            </CardContent>
          </Card>
          <Card className="border border-border rounded-xl">
            <CardContent className="p-5">
              <Scale className="h-6 w-6 text-teal mb-2" />
              <h3 className="font-semibold text-navy mb-1">3 pary paradoksu</h3>
              <p className="text-sm text-muted-foreground">
                Porównanie z lekami konwencjonalnymi refundowanymi w NFZ
              </p>
            </CardContent>
          </Card>
          <Card className="border border-border rounded-xl">
            <CardContent className="p-5">
              <BookOpen className="h-6 w-6 text-navy mb-2" />
              <h3 className="font-semibold text-navy mb-1">62 referencje</h3>
              <p className="text-sm text-muted-foreground">
                PMID, DOI, sygnatury — zweryfikowane w bazach pierwotnych
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-navy mb-6">
          Lista 15 substancji ze źródłem i klasyfikacją EBM
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-secondary text-navy">
                <th className="text-left p-3 border-b border-border font-semibold">#</th>
                <th className="text-left p-3 border-b border-border font-semibold">
                  Substancja / metoda
                </th>
                <th className="text-left p-3 border-b border-border font-semibold">
                  Wskazana przez
                </th>
                <th className="text-left p-3 border-b border-border font-semibold">OCEBM</th>
                <th className="text-left p-3 border-b border-border font-semibold">GRADE</th>
                <th className="text-left p-3 border-b border-border font-semibold">
                  Status regulacyjny
                </th>
              </tr>
            </thead>
            <tbody>
              {substances.map((s) => (
                <tr key={s.no} className="border-b border-border hover:bg-secondary/40">
                  <td className="p-3 text-muted-foreground">{s.no}</td>
                  <td className="p-3 font-medium text-navy">{s.name}</td>
                  <td className="p-3 text-muted-foreground">{s.source}</td>
                  <td className="p-3 text-navy/80">{s.ocebm}</td>
                  <td className="p-3 text-navy/80">{s.grade}</td>
                  <td className="p-3 text-muted-foreground">{s.regulatory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-navy mb-3">
          Paradoks refundacyjny — 3 reprezentatywne pary
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Pakiet nie kwestionuje decyzji refundacyjnych regulatora wobec leków konwencjonalnych —
          wskazuje natomiast na asymetrię standardu dowodowego stosowanego wobec medycyny
          komplementarnej i konwencjonalnej.
        </p>
        <div className="space-y-6">
          {paradoxes.map((p, idx) => (
            <Card
              key={idx}
              className="card-accent-red border border-border rounded-xl shadow-sm overflow-hidden"
            >
              <CardContent className="p-6 lg:p-8">
                <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-3">
                  Para {idx + 1}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                      {p.cam.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                      {p.cam.evidence}
                    </p>
                    <p className="text-sm text-navy/80">
                      <span className="font-semibold">Poziom dowodu:</span> {p.cam.ocebm}
                    </p>
                    <p className="text-sm text-red-orange mt-1">
                      <span className="font-semibold">PL:</span> {p.cam.pl}
                    </p>
                  </div>
                  <div className="md:border-l md:border-border md:pl-6">
                    <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                      {p.drug.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                      {p.drug.evidence}
                    </p>
                    <p className="text-sm text-navy/80">
                      <span className="font-semibold">Poziom dowodu:</span> {p.drug.ocebm}
                    </p>
                    <p className="text-sm text-teal mt-1">
                      <span className="font-semibold">PL:</span> {p.drug.pl}
                    </p>
                  </div>
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <p className="text-sm text-navy leading-relaxed">
                    <span className="font-semibold">Paradoks:</span> {p.note}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="border border-border rounded-xl">
            <CardContent className="p-6 lg:p-8">
              <AlertTriangle className="h-7 w-7 text-red-orange mb-3" />
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-navy mb-3">
                Co proponujemy w miejsce dychotomii „zgodne / niezgodne"
              </h2>
              <p className="text-navy/80 leading-relaxed mb-5">
                Pakiet postuluje klauzulę świadomej zgody pacjenta jako ustawowe wyłączenie spod
                sankcji administracyjnej. Pacjent po pełnej pisemnej informacji o stanie dowodów,
                alternatywach konwencjonalnych i ryzyku może wybrać terapię wspomagającą /
                eksperymentalną — bez narażania lekarza na karę 1 mln zł i bez ryzyka oszustwa
                (sankcja karna art. 286 k.k. zachowana).
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/co-proponujemy"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-orange text-background font-medium rounded-lg hover:bg-red-orange/90 transition-colors"
                >
                  Pełen model klauzuli
                </Link>
                <Link
                  href="/dokumenty"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-navy font-medium rounded-lg hover:bg-background transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Pobierz Załącznik 3 (PDF)
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
                                                                                                                                          