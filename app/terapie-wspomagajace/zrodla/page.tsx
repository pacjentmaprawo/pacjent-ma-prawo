import type { Metadata } from 'next'
import { METHODS } from '@/lib/terapie-wspomagajace/methods'
import { PMIDLink, CategoryBadge } from '@/components/terapie-wspomagajace/badges'

export const metadata: Metadata = {
  title: 'Wszystkie źródła',
  description: 'Pełna lista publikacji peer-reviewed cytowanych na stronie — wszystkie pozycje PMID/DOI.',
}

export default function ZrodlaPage() {
  // Zbierz wszystkie keySources z wszystkich metod
  const allSources = METHODS.flatMap((m) =>
    m.keySources.map((s) => ({ ...s, methodSlug: m.slug, methodName: m.shortName, category: m.category }))
  )

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">Wszystkie źródła</h1>
        <p className="text-lg text-muted-foreground">
          Lista publikacji peer-reviewed cytowanych na stronach metod. Łącznie {allSources.length} pozycji.
        </p>
      </header>

      <ol className="space-y-3">
        {allSources.map((s, i) => (
          <li key={i} className="rounded-lg border bg-card p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-semibold">{s.cite}</p>
              <CategoryBadge category={s.category} />
            </div>
            {s.title && <p className="mt-1 text-sm">{s.title}</p>}
            <p className="mt-1 text-sm italic text-muted-foreground">{s.journal ?? ''} {s.type ? `· ${s.type}` : ''}</p>
            {s.finding && <p className="mt-2 text-sm">{s.finding}</p>}
            <p className="mt-3 flex flex-wrap items-center gap-3 text-sm">
              {(s.pmid || s.doi) && (
                <PMIDLink pmid={s.pmid} doi={s.doi}>
                  {s.pmid ? `PMID ${s.pmid}` : `DOI ${s.doi}`}
                </PMIDLink>
              )}
              <a
                href={`/terapie-wspomagajace/metody/${s.methodSlug}`}
                className="text-xs text-muted-foreground underline"
              >
                → {s.methodName}
              </a>
            </p>
          </li>
        ))}
      </ol>

      <aside className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm dark:border-amber-700 dark:bg-amber-900/20">
        <p>
          <strong>Uwaga:</strong> powyższa lista zawiera kluczowe źródła (3-5 dla każdej metody). Pełna
          bibliografia z dodatkowymi referencjami będzie sukcesywnie rozszerzana wraz z aktualizacjami
          podstron metod.
        </p>
      </aside>
    </div>
  )
}
