import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jak czytać dowody EBM',
  description: 'GRADE, RCT, metaanaliza, HR, NNT, OS — co znaczą skrótów które widzisz na stronach metod.',
}

export default function JakCzytacEbmPage() {
  return (
    <div className="prose prose-stone max-w-none dark:prose-invert space-y-6">
      <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">Jak czytać dowody EBM</h1>
      <p className="text-lg text-muted-foreground">Krótki przewodnik po skrótach i metodach naukowych, które widzisz na stronach metod.</p>

      <h2>Hierarchia dowodów</h2>
      <p>Od najmocniejszych do najsłabszych:</p>
      <ol>
        <li><strong>Metaanaliza RCT</strong> — analiza wielu randomizowanych badań kontrolowanych</li>
        <li><strong>RCT III fazy</strong> — duże, randomizowane badanie kliniczne (n &gt; 300)</li>
        <li><strong>RCT II fazy</strong> — wstępna ocena skuteczności (n 50-300)</li>
        <li><strong>RCT I fazy</strong> — bezpieczeństwo, dawkowanie (n &lt; 50)</li>
        <li><strong>Badania kohortowe</strong> — obserwacyjne, bez randomizacji</li>
        <li><strong>Case reports</strong> — opisy pojedynczych przypadków</li>
        <li><strong>Badania in vivo (na zwierzętach)</strong></li>
        <li><strong>Badania in vitro (w probówce)</strong></li>
      </ol>

      <h2>System GRADE</h2>
      <p>GRADE (Grading of Recommendations, Assessment, Development and Evaluations) to standardowy system oceny jakości dowodów stosowany przez ESMO, NCCN, ASCO, NICE, WHO. 4 poziomy:</p>
      <ul>
        <li><strong>HIGH (wysoki)</strong> — jesteśmy bardzo pewni, że prawdziwy efekt jest zbliżony do oszacowania</li>
        <li><strong>MODERATE (umiarkowany)</strong> — umiarkowana pewność, prawdziwy efekt prawdopodobnie zbliżony</li>
        <li><strong>LOW (niski)</strong> — pewność ograniczona, prawdziwy efekt może istotnie różnić się</li>
        <li><strong>VERY LOW (bardzo niski)</strong> — bardzo mała pewność, prawdziwy efekt może być całkowicie inny</li>
      </ul>
      <p><strong>Większość metod na tej stronie ma GRADE moderate lub low.</strong> To znaczy, że dowody są wiarygodne, ale wymagają potwierdzenia w większych badaniach.</p>

      <h2>Skróty statystyczne</h2>
      <ul>
        <li><strong>OS (Overall Survival)</strong> — całkowite przeżycie</li>
        <li><strong>PFS (Progression-Free Survival)</strong> — czas wolny od progresji choroby</li>
        <li><strong>DFS (Disease-Free Survival)</strong> — czas wolny od choroby</li>
        <li><strong>HR (Hazard Ratio)</strong> — ryzyko względne. HR=1,0 brak różnicy, HR=0,5 redukcja ryzyka o 50%</li>
        <li><strong>OR (Odds Ratio)</strong> — iloraz szans</li>
        <li><strong>RR (Relative Risk)</strong> — ryzyko względne</li>
        <li><strong>NNT (Number Needed to Treat)</strong> — ile osób trzeba leczyć by jednej pomóc</li>
        <li><strong>95% CI (Confidence Interval)</strong> — 95% przedział ufności, zakres w którym z 95% prawdopodobieństwem leży prawdziwa wartość</li>
        <li><strong>p &lt; 0,05</strong> — różnica istotna statystycznie</li>
        <li><strong>MSR (Median Survival Ratio)</strong> — stosunek median przeżycia (np. 1,83 = grupa leczona ma medianę 1,83× wyższą)</li>
      </ul>

      <h2>Bazy danych</h2>
      <ul>
        <li><strong>PubMed</strong> (pubmed.ncbi.nlm.nih.gov) — największa baza biomedyczna, darmowa</li>
        <li><strong>Cochrane Library</strong> (cochranelibrary.com) — metaanalizy najwyższej jakości</li>
        <li><strong>ClinicalTrials.gov</strong> — rejestr badań klinicznych</li>
        <li><strong>DOI (Digital Object Identifier)</strong> — uniwersalny identyfikator publikacji</li>
        <li><strong>PMID</strong> — identyfikator publikacji w PubMed</li>
      </ul>

      <h2>Jak rozróżnić publikację peer-reviewed od marketingowej</h2>
      <ul>
        <li>Czasopismo z impact factor (sprawdź w Web of Science lub Scimago)</li>
        <li>Recenzowane przez ekspertów (peer review)</li>
        <li>Posiada PMID lub DOI</li>
        <li>Sekcja Conflict of Interest ujawniona</li>
        <li>Pełna metodologia (jak prowadzono badanie)</li>
      </ul>
    </div>
  )
}
