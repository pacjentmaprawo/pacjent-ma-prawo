import Link from 'next/link'
import type { Metadata } from 'next'
import { METHODS, METHODS_BY_CATEGORY, type MethodCategory } from '@/lib/onkologia-integracyjna/methods'
import { CATEGORY_LABELS } from '@/lib/onkologia-integracyjna/types'
import { GradeBadge, CategoryBadge } from '@/components/onkologia-integracyjna/badges'

export const metadata: Metadata = {
  title: 'Wszystkie metody',
  description: 'Pełna lista metod onkologii integracyjnej w 4 kategoriach z poziomem dowodów GRADE.',
}

const CATEGORY_ORDER: MethodCategory[] = ['A', 'B', 'C', 'D']

export default function MetodyPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3 border-b pb-6">
        <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
          Wszystkie metody onkologii integracyjnej
        </h1>
        <p className="text-lg text-muted-foreground">
          {METHODS.length} metod w 4 kategoriach. Każda metoda z poziomem dowodów GRADE i linkami do publikacji
          peer-reviewed.
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
                    href={`/onkologia-integracyjna/metody/${m.slug}`}
                    className="group block h-full rounded-lg border bg-card p-5 transition hover:border-primary/50 hover:shadow-md"
                  >
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <h3 className="font-serif text-lg font-semibold group-hover:text-primary">
                        {m.shortName}
                      </h3>
                      <GradeBadge grade={m.grade} className="shrink-0" />
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
