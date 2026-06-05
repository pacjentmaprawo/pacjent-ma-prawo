import Link from 'next/link'
import type { Metadata } from 'next'
import { METHODS, METHODS_BY_CATEGORY, type MethodCategory } from '@/lib/terapie-wspomagajace/methods'
import { CATEGORY_LABELS } from '@/lib/terapie-wspomagajace/types'
import { EvidenceTypeBadge, ClinicalStatusBadge, CategoryBadge } from '@/components/terapie-wspomagajace/badges'

export const metadata: Metadata = {
  title: 'Wszystkie metody',
  description: 'Pełna lista metod wspomagających leczenie onkologiczne w 4 kategoriach z profilem dowodowym (typ danych A/B/C/P, status kliniczny, GRADE, kontekst).',
}

const CATEGORY_ORDER: MethodCategory[] = ['A', 'B', 'C', 'D']

export default function MetodyPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3 border-b pb-6">
        <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
          Wszystkie metody wspomagające
        </h1>
        <p className="text-lg text-muted-foreground">
          {METHODS.length} metod w 4 kategoriach. Każda z pełnym profilem dowodowym: typ danych klinicznych
          (A/B/C/P), status zastosowania, pewność dowodów (GRADE) i kontekst dowodowy. Więcej:{' '}
          <a href="/terapie-wspomagajace/jak-czytac-dowody" className="underline text-primary">jak czytać te oznaczenia</a>.
        </p>
      </header>

      {CATEGORY_ORDER.map((cat) => {
        const methods = METHODS_BY_CATEGORY[cat]
        if (methods.length === 0) return null
        return (
          <section key={cat} className="space-y-4">
            <div className="flex items-center gap-3">
              <CategoryBadge category={cat} />
              <h2 className="font-serif text-2xl font-semibold">
                Kategoria {cat} — {CATEGORY_LABELS[cat]}
              </h2>
              <span className="text-sm text-muted-foreground">({methods.length} metod)</span>
            </div>
            <ul className="grid gap-4 md:grid-cols-2">
              {methods.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/terapie-wspomagajace/metody/${m.slug}`}
                    className="group block h-full rounded-lg border bg-card p-5 transition hover:border-primary/50 hover:shadow-md"
                  >
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <h3 className="font-serif text-lg font-semibold group-hover:text-primary">
                        {m.shortName}
                      </h3>
                      <div className="flex flex-col items-end gap-1 shrink-0 max-w-[140px]">
                        {m.highestEvidenceType && <EvidenceTypeBadge type={m.highestEvidenceType} />}
                        {m.clinicalStatus && <ClinicalStatusBadge status={m.clinicalStatus} compact className="text-[10px] whitespace-nowrap" />}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3">{m.shortDesc}</p>
                    <p className="mt-3 flex flex-wrap gap-1">
                      {m.mainIndications.slice(0, 2).map((ind) => (
                        <span
                          key={ind}
                          className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          {ind}
                        </span>
                      ))}
                      {m.mainIndications.length > 2 && (
                        <span className="text-xs text-muted-foreground">
                          +{m.mainIndications.length - 2}
                        </span>
                      )}
                    </p>
                    <p className="mt-3 text-sm font-medium text-primary group-hover:underline">
                      Zobacz pełne dowody EBM →
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </div>
  )
}
