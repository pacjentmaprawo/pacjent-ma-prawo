import type { Metadata } from 'next'
import Link from 'next/link'
import { EvidenceTypeBadge, ClinicalStatusBadge, GradeBadge } from '@/components/terapie-wspomagajace/badges'

export const metadata: Metadata = {
  title: 'Jak czytać dowody EBM w bazie terapii wspomagających',
  description: 'GRADE, najwyższy typ danych (A/B/C/P), status kliniczny, kontekst dowodowy — jak rozumieć system oceny dowodów dla orphan supplements i substancji nieopatentowanych.',
}

export default function JakCzytacDowodyPage() {
  return (
    <article className="space-y-12">
      {/* HERO */}
      <header className="space-y-6">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">
          Metodologia • Wariant B+ • Wytyczne redakcyjne
        </p>
        <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
          Jak czytać dowody w tej bazie
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Nie pokazujemy tylko jednego badge'a „GRADE: low". Pokazujemy pięć warstw dowodowych —
          aby ograniczona baza badań nie była automatycznie utożsamiana z brakiem efektu — zwłaszcza gdy metoda nigdy nie miała finansowania na badanie fazy III. Każda metoda ma profil dowodowy złożony z: <strong>sygnału efektu</strong>,
          <strong> pewności dowodów (GRADE)</strong>, <strong>najwyższego typu danych klinicznych</strong>,
          <strong> statusu zastosowania</strong> oraz <strong>głównej luki dowodowej</strong>.
        </p>
      </header>

      {/* TŁO STRATEGICZNE */}
      <section className="rounded-lg border border-primary/30 bg-primary/5 p-6">
        <h2 className="mb-3 font-serif text-xl font-semibold">Dlaczego nie wystarczy sam GRADE</h2>
        <p className="text-sm text-muted-foreground">
          GRADE (Grading of Recommendations Assessment, Development and Evaluation) jest międzynarodowym
          standardem oceny dowodów. Ale dla <strong>laika</strong> nazwy „low/very-low certainty"
          intuicyjnie brzmią jak ocena szkolna („słaba"). Faktyczne znaczenie GRADE jest inne:
          mierzy <strong>pewność oszacowania efektu</strong> — nie istnienie efektu. Substancja
          z silnym mechanizmem biologicznym, pilotażowym RCT i długą tradycją kliniczną może
          mieć „GRADE low" wyłącznie z powodu <strong>strukturalnego braku finansowania</strong>{' '}
          dużych badań — co dotyczy wszystkich substancji nieopatentowanych.
        </p>
      </section>

      {/* 1 — GRADE */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold">1. GRADE — co mierzy (i czego NIE mierzy)</h2>
        <div className="flex flex-wrap gap-2">
          <GradeBadge grade="high" />
          <GradeBadge grade="moderate" />
          <GradeBadge grade="low" />
          <GradeBadge grade="very-low" />
        </div>
        <p className="text-muted-foreground">
          GRADE ocenia <strong>pewność, że nasze oszacowanie efektu jest bliskie prawdziwemu efektowi</strong>.
          „Niska pewność" oznacza: dostępne badania są ograniczone — rzeczywisty efekt może się różnić
          od obecnego oszacowania w dowolnym kierunku. <strong>Nie oznacza to automatycznie, że efektu nie ma.</strong>
        </p>
        <div className="rounded-lg border bg-card p-5 text-sm">
          <p className="font-semibold mb-2">Oficjalna definicja GRADE Working Group (2020)</p>
          <p className="text-muted-foreground">
            GRADE ocenia <em>certainty of evidence</em> — pewność, że prawdziwy efekt jest zbliżony do oszacowanego.
            Źródło: GRADE Working Group, <em>GRADE guidelines 26: informative statements to communicate the findings</em>,
            J Clin Epidemiol 2020 (PMID 31682879).
          </p>
        </div>
      </section>

      {/* 2 — PROBLEM FINANSOWANIA */}
      <section className="space-y-4 rounded-lg border-2 border-primary/40 bg-primary/5 p-6">
        <h2 className="font-serif text-2xl font-semibold">
          2. Problem finansowania — dlaczego skuteczne metody mogą mieć GRADE „niska"
        </h2>
        <p className="text-muted-foreground">
          Badania kliniczne fazy III kosztują od <strong>50 do 500 mln USD</strong>. Substancje
          <strong> nieopatentowane</strong> — witaminy, zioła, leki weterynaryjne z potencjałem
          onkologicznym, naturalne metabolity, leki repurposed — nie pozwalają na zwrot tej inwestycji.
          <strong> Finansowanie dużych badań fazy III bywa dla nich trudne do pozyskania</strong> — brak oczywistego modelu zwrotu inwestycji.
        </p>
        <p className="text-muted-foreground">
          To jest <strong>strukturalna luka w systemie dowodów</strong>, nie problem skuteczności.
          Polska literatura akademicka EBM (GUMed, dr hab. Hering, <em>poradnik-naukowy.gumed.edu.pl</em>)
          wprost zauważa: badania randomizowane <em>„mogą dotyczyć jedynie wybranych zagadnień, które
          pozostają w kręgu zainteresowania sponsora"</em>. To samo dokumentuje literatura naukowa
          o drug repurposing (PMC 2025; <em>Br J Cancer</em> 2023, DOI 10.1038/s41416-023-02502-9).
        </p>
        <div className="rounded-lg border bg-card p-5 text-sm">
          <p className="font-semibold mb-2">Konsekwencja dla bazy wiedzy</p>
          <p className="text-muted-foreground">
            Substancja z GRADE „low" może być w jednej z dwóch sytuacji:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-muted-foreground">
            <li><strong>Realnie mało skuteczna</strong> — brak sygnału w istniejących badaniach</li>
            <li><strong>Niedofinansowana</strong> — istnieje sygnał kliniczny, mechanizm i tradycja stosowania, ale brak RCT III z powodu braku finansowania</li>
          </ul>
          <p className="mt-2 text-muted-foreground">
            Dlatego pokazujemy obok GRADE dodatkowe wymiary — żeby pacjent mógł rozpoznać różnicę.
          </p>
        </div>
      </section>

      {/* 3 — TYP DANYCH KLINICZNYCH */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold">3. Najwyższy typ danych klinicznych (A/B/C/P)</h2>
        <p className="text-muted-foreground">
          Pomocnicza klasyfikacja oparta na poziomach dowodów NCI PDQ (
          <a className="underline" href="https://www.cancer.gov/publications/pdq/levels-evidence/cam" target="_blank" rel="noopener noreferrer">cancer.gov/publications/pdq/levels-evidence/cam</a>) i polskich skalach ESH/ESC (GUMed).
          Pokazuje <strong>typ najsilniejszego dostępnego badania</strong> — niezależnie od GRADE:
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-4 text-sm space-y-2">
            <div className="flex items-center gap-2"><EvidenceTypeBadge type="A" /></div>
            <p className="text-muted-foreground">Wiele RCT lub metaanaliza RCT. Standard wytycznych klinicznych — najsilniejszy typ dowodów dostępny w medycynie.</p>
          </div>
          <div className="rounded-lg border bg-card p-4 text-sm space-y-2">
            <div className="flex items-center gap-2"><EvidenceTypeBadge type="B" /></div>
            <p className="text-muted-foreground">Pojedyncze RCT z istotnym wynikiem klinicznym lub duże badania nierandomizowane (kohortowe, rejestry pacjentów). Bezpieczna baza decyzyjna.</p>
          </div>
          <div className="rounded-lg border bg-card p-4 text-sm space-y-2">
            <div className="flex items-center gap-2"><EvidenceTypeBadge type="C" /></div>
            <p className="text-muted-foreground">Małe badania kliniczne (pilotaż, mała próba), rejestry pacjentów, opinie ekspertów. Sygnał obserwacyjny — wymaga dalszego potwierdzenia.</p>
          </div>
          <div className="rounded-lg border bg-card p-4 text-sm space-y-2">
            <div className="flex items-center gap-2"><EvidenceTypeBadge type="P" /></div>
            <p className="text-muted-foreground">Dane przedkliniczne (in vitro, modele zwierzęce) lub mechanistyczne. Bez dojrzałych badań klinicznych — substancja w obszarze eksperymentalnym.</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          <strong>Przykład interpretacji łącznej:</strong> substancja z GRADE „low" + typem danych „A" (np. wiele RCT,
          ale o ograniczonej pewności z powodu heterogeniczności protokołów) jest zupełnie inną sytuacją niż
          GRADE „very-low" + typ „P" (tylko dane przedkliniczne).
        </p>
      </section>

      {/* 4 — STATUS KLINICZNY */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold">4. Status zastosowania klinicznego</h2>
        <p className="text-muted-foreground">
          Trzeci wymiar — gdzie metoda faktycznie znajduje się w praktyce medycznej:
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-4 text-sm space-y-2">
            <ClinicalStatusBadge status="guideline-supported" />
            <p className="text-muted-foreground">Rekomendowana wprost w wytycznych klinicznych (ASCO/SIO, NCCN, ESMO, MASCC/ISOO, DEGRO).</p>
          </div>
          <div className="rounded-lg border bg-card p-4 text-sm space-y-2">
            <ClinicalStatusBadge status="supportive-care" />
            <p className="text-muted-foreground">Wsparcie standardowego leczenia onkologicznego — sygnał korzyści w supportive care (QoL, redukcja toksyczności, immunostymulacja).</p>
          </div>
          <div className="rounded-lg border bg-card p-4 text-sm space-y-2">
            <ClinicalStatusBadge status="off-label-adjunct" />
            <p className="text-muted-foreground">Stosowanie off-label jako adjunkt — lek/substancja zarejestrowana dla innego wskazania, używana w onkologii poza wskazaniami rejestracyjnymi.</p>
          </div>
          <div className="rounded-lg border bg-card p-4 text-sm space-y-2">
            <ClinicalStatusBadge status="experimental" />
            <p className="text-muted-foreground">Obszar eksperymentalny — w fazie badań klinicznych I/II lub przedklinicznej; wymaga ścieżki badania klinicznego lub indywidualnej decyzji.</p>
          </div>
          <div className="rounded-lg border bg-card p-4 text-sm space-y-2 md:col-span-2">
            <ClinicalStatusBadge status="not-recommended" />
            <p className="text-muted-foreground">Brak rekomendacji w wytycznych klinicznych dla danego wskazania (np. parenteralna glutamina w HSCT — rekomendacja PRZECIWKO wg MASCC/ISOO 2020).</p>
          </div>
        </div>
      </section>

      {/* 5 — KONTEKST DOWODOWY */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold">5. Kontekst dowodowy i luka dowodowa</h2>
        <p className="text-muted-foreground">
          Dwa pola opisowe dla każdej metody:
        </p>
        <div className="space-y-3">
          <div className="rounded-lg border bg-card p-5 text-sm">
            <p className="font-semibold mb-2">Sygnał efektu</p>
            <p className="text-muted-foreground">Co konkretnie pokazują dostępne badania — wynik liczbowy, kierunek, typ punktu końcowego. Czytane z bazy RCT, metaanaliz i wytycznych.</p>
          </div>
          <div className="rounded-lg border bg-card p-5 text-sm">
            <p className="font-semibold mb-2">Główna luka dowodowa</p>
            <p className="text-muted-foreground">Czego brakuje w istniejących badaniach — RCT III, jednolita populacja, długoterminowy follow-up, standaryzacja preparatów, niezależne potwierdzenie.</p>
          </div>
          <div className="rounded-lg border bg-card p-5 text-sm">
            <p className="font-semibold mb-2">Kontekst dowodowy</p>
            <p className="text-muted-foreground">
              <strong>Dlaczego</strong> ta luka istnieje — najczęściej: brak sponsora dla substancji nieopatentowanej,
              populacja niszowa (rzadki nowotwór), zakres regulacyjny (substancja weterynaryjna),
              fakt że metoda jest naturalnym metabolitem niemożliwym do opatentowania.
            </p>
          </div>
        </div>
      </section>

      {/* 6 — JAK CZYTAĆ ŁĄCZNIE */}
      <section className="space-y-4 rounded-lg border-2 border-amber-400 bg-amber-50 p-6 dark:border-amber-700 dark:bg-amber-900/20">
        <h2 className="font-serif text-2xl font-semibold">6. Jak czytać profil dowodowy łącznie — 4 pytania</h2>
        <p className="text-muted-foreground">
          Przy każdej metodzie warto zadać sobie te 4 pytania zamiast patrzeć tylko na GRADE:
        </p>
        <ol className="list-decimal space-y-2 pl-5 text-muted-foreground">
          <li><strong>Jaki jest sygnał efektu?</strong> Czy istnieje wynik kliniczny, jaka jest jego skala?</li>
          <li><strong>Jaki jest najwyższy typ danych?</strong> A (wiele RCT) / B (jedno RCT) / C (małe badania) / P (przedkliniczne)?</li>
          <li><strong>Jaki jest status zastosowania?</strong> Wytyczne / supportive / off-label / eksperymentalne / nie rekomendowane?</li>
          <li><strong>Dlaczego dowody są ograniczone?</strong> Brak sponsora? Populacja niszowa? Status regulacyjny? Substancja niemożliwa do opatentowania?</li>
        </ol>
        <p className="text-sm text-muted-foreground italic">
          Dopiero łącząc te 4 odpowiedzi można sensownie ocenić wartość kliniczną metody —
          niezależnie od tego, czy GRADE pokazuje „high" czy „very-low".
        </p>
      </section>

      {/* 7 — CZEGO STRONA NIE ROBI */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold">7. Czego ta strona NIE robi</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>❌ <strong>Nie chowamy GRADE</strong> — pokazujemy go zawsze, bo to standard międzynarodowy.</li>
          <li>❌ <strong>Nie wymyślamy własnej skali „praktycznej użyteczności"</strong> z gwiazdkami — to byłoby ucieczka od EBM.</li>
          <li>❌ <strong>Nie podbijamy ocen metod nieopatentowanych</strong> — pokazujemy je w pełnym kontekście, łącznie z lukami.</li>
          <li>✅ <strong>Pokazujemy 5 warstw dowodowych</strong> — żeby pacjent miał pełny obraz, nie redukowany do jednej oceny.</li>
          <li>✅ <strong>Wyjaśniamy strukturalne ograniczenia systemu</strong> — bo brak RCT III nie zawsze oznacza brak skuteczności.</li>
        </ul>
      </section>

      {/* ŹRÓDŁA */}
      <section className="rounded-lg border bg-muted p-6 text-sm">
        <h2 className="mb-3 font-serif text-lg font-semibold">Źródła metodologiczne</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>GRADE Working Group, <em>GRADE guidelines 26: informative statements</em>, J Clin Epidemiol 2020 — PMID 31682879</li>
          <li>GRADE Working Group, <em>GRADE guidelines 5: rating the quality of evidence — publication bias</em>, J Clin Epidemiol 2011 — PMID 21802904</li>
          <li>Pollock A et al., <em>Implementing GRADE in complex reviews</em>, J Clin Epidemiol 2017 — PMID 28720511</li>
          <li>NCI PDQ Levels of Evidence for CAM — <a className="underline" href="https://www.cancer.gov/publications/pdq/levels-evidence/cam" target="_blank" rel="noopener noreferrer">cancer.gov/publications/pdq/levels-evidence/cam</a></li>
          <li>NCI PDQ Levels of Evidence for Supportive and Palliative Care — <a className="underline" href="https://www.ncbi.nlm.nih.gov/books/NBK65976/" target="_blank" rel="noopener noreferrer">NBK65976</a></li>
          <li>Drug repurposing — barriers (PMC 2025): <a className="underline" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12592109/" target="_blank" rel="noopener noreferrer">Overcoming barriers to off-patent drug repurposing</a></li>
          <li>Br J Cancer 2023 — <a className="underline" href="https://www.nature.com/articles/s41416-023-02502-9" target="_blank" rel="noopener noreferrer">advancements in repurposing drugs for cancer</a></li>
          <li>GUMed Poradnik Naukowy — Podstawy Evidence-Based Medicine (dr hab. D. Hering)</li>
          <li>SIO Practice Guidelines — <a className="underline" href="https://integrativeonc.org/integrative-oncology-guidelines/" target="_blank" rel="noopener noreferrer">integrativeonc.org/integrative-oncology-guidelines/</a></li>
          <li>MSKCC About Herbs — <a className="underline" href="https://www.mskcc.org/cancer-care/diagnosis-treatment/symptom-management/integrative-medicine/herbs" target="_blank" rel="noopener noreferrer">mskcc.org/integrative-medicine/herbs</a></li>
        </ul>
      </section>

      {/* CTA POWRÓT */}
      <section className="rounded-lg border bg-muted p-6 text-center">
        <Link
          href="/terapie-wspomagajace"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
        >
          ← Wróć do bazy metod wspomagających
        </Link>
      </section>
    </article>
  )
}
