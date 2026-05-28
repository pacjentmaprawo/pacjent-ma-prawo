import { AlertTriangle } from 'lucide-react'

/**
 * Disclaimer prawny i zdrowotny — wyświetlany na każdej podstronie metody
 * oraz na stronie głównej sekcji. Wersja "compact" — pełna na /disclaimer.
 */
export function SectionDisclaimer({ variant = 'compact' }: { variant?: 'compact' | 'full' }) {
  if (variant === 'compact') {
    return (
      <aside className="my-8 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm dark:border-amber-700 dark:bg-amber-900/20">
        <div className="flex gap-3">
          <AlertTriangle className="size-5 shrink-0 text-amber-700 dark:text-amber-300" aria-hidden />
          <div className="space-y-2">
            <p className="font-semibold text-amber-900 dark:text-amber-100">Ważne informacje prawne i zdrowotne</p>
            <p className="text-amber-900/90 dark:text-amber-100/90">
              Strona ma charakter <strong>wyłącznie edukacyjny</strong>. Nie zastępuje konsultacji
              z lekarzem. Każda decyzja terapeutyczna wymaga konsultacji ze specjalistą. Terapie
              integracyjne stosuje się <strong>wyłącznie pod nadzorem lekarza</strong> z pełnymi
              kwalifikacjami zawodowymi. Strona <strong>nie zachęca do rezygnacji</strong> z leczenia
              konwencjonalnego.{' '}
              <a href="/onkologia-integracyjna/disclaimer" className="font-medium underline">
                Pełny disclaimer →
              </a>
            </p>
          </div>
        </div>
      </aside>
    )
  }

  // variant === 'full'
  return (
    <div className="prose prose-sm prose-stone max-w-none dark:prose-invert">
      <h2 className="text-xl font-semibold">Disclaimer prawny i zdrowotny</h2>
      <ol className="list-decimal space-y-3 pl-5">
        <li>
          Strona ma charakter <strong>wyłącznie edukacyjny</strong>. Nie stanowi porady medycznej.
          Nie zastępuje konsultacji z lekarzem.
        </li>
        <li>
          Każda decyzja terapeutyczna wymaga konsultacji z lekarzem specjalistą. Terapie integracyjne
          stosuje się <strong>wyłącznie pod nadzorem lekarza z pełnymi kwalifikacjami zawodowymi</strong>.
        </li>
        <li>
          Strona <strong>nie zachęca do rezygnacji z leczenia konwencjonalnego</strong>{' '}
          (chemioterapii, radioterapii, immunoterapii, chirurgii). Terapie integracyjne
          uzupełniają standardowe leczenie, nie zastępują go.
        </li>
        <li>
          Każda metoda ma swoje wskazania i przeciwwskazania. Stosowanie metody poza wskazaniami
          może prowadzić do interakcji lekowych lub działań niepożądanych. Konsultacja z lekarzem
          jest obowiązkowa.
        </li>
        <li>
          Informacje opierają się na publikacjach peer-reviewed (PMID, DOI), wytycznych klinicznych
          oraz dokumentach instytucjonalnych (NCCN, ESMO, ASCO/SIO, MASCC/ISOO, EMA, FDA, URPL, BAG, G-BA).
          Tam, gdzie dane mają charakter wstępny, mechanistyczny lub eksperymentalny, jest to wyraźnie
          oznaczone. Stan wiedzy medycznej zmienia się — strona aktualizowana jest okresowo.
        </li>
        <li>
          Redakcja nie przyjmuje finansowania od firm farmaceutycznych, producentów suplementów,
          klinik świadczących usługi CAM ani organizacji pacjenckich finansowanych przez te podmioty.
        </li>
      </ol>
    </div>
  )
}
