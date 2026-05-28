'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { METHODS_BY_CATEGORY, type MethodCategory } from '@/lib/onkologia-integracyjna/methods'
import { CATEGORY_LABELS } from '@/lib/onkologia-integracyjna/types'
import { GradeBadge } from './badges'

const CATEGORY_ORDER: MethodCategory[] = ['A', 'B', 'C', 'D']

/**
 * Boczna nawigacja sekcji "Onkologia integracyjna" z listą wszystkich metod
 * pogrupowanych w 4 kategorie (A/B/C/D). Aktywna podstrona jest podświetlona.
 */
export function MethodSidebar() {
  const pathname = usePathname()

  return (
    <nav aria-label="Spis metod onkologii integracyjnej" className="space-y-6 text-sm">
      <div className="space-y-1">
        <Link
          href="/onkologia-integracyjna"
          className={`block rounded px-2 py-1.5 font-medium transition ${
            pathname === '/onkologia-integracyjna'
              ? 'bg-primary/10 text-primary'
              : 'text-foreground hover:bg-muted'
          }`}
        >
          Strona główna sekcji
        </Link>
        <Link
          href="/onkologia-integracyjna/o-bazie"
          className={`block rounded px-2 py-1.5 transition ${
            pathname === '/onkologia-integracyjna/o-bazie'
              ? 'bg-primary/10 text-primary font-medium'
              : 'text-muted-foreground hover:bg-muted hover:text-foreground'
          }`}
        >
          O bazie
        </Link>
        <Link
          href="/onkologia-integracyjna/jak-czytac-ebm"
          className={`block rounded px-2 py-1.5 transition ${
            pathname === '/onkologia-integracyjna/jak-czytac-ebm'
              ? 'bg-primary/10 text-primary font-medium'
              : 'text-muted-foreground hover:bg-muted hover:text-foreground'
          }`}
        >
          Jak czytać EBM
        </Link>
        <Link
          href="/onkologia-integracyjna/slownik"
          className={`block rounded px-2 py-1.5 transition ${
            pathname === '/onkologia-integracyjna/slownik'
              ? 'bg-primary/10 text-primary font-medium'
              : 'text-muted-foreground hover:bg-muted hover:text-foreground'
          }`}
        >
          Słownik pojęć
        </Link>
      </div>

      <div className="space-y-4">
        <h2 className="px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Metody (19)
        </h2>
        {CATEGORY_ORDER.map((cat) => {
          const methods = METHODS_BY_CATEGORY[cat]
          if (methods.length === 0) return null
          return (
            <div key={cat} className="space-y-1">
              <h3 className="px-2 text-xs font-medium text-muted-foreground">
                <span className="mr-1 font-mono font-bold">{cat}.</span>
                {CATEGORY_LABELS[cat]}
              </h3>
              <ul className="space-y-0.5">
                {methods.map((m) => {
                  const href = `/onkologia-integracyjna/metody/${m.slug}`
                  const isActive = pathname === href
                  return (
                    <li key={m.slug}>
                      <Link
                        href={href}
                        className={`block rounded px-2 py-1 transition ${
                          isActive
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                      >
                        <span className="flex items-center justify-between gap-2">
                          <span className="truncate">{m.shortName}</span>
                          <GradeBadge grade={m.grade} className="hidden lg:inline-flex shrink-0" />
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>

      <div className="space-y-1 border-t pt-4">
        <h2 className="px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Materiały referencyjne
        </h2>
        <Link
          href="/onkologia-integracyjna/wytyczne-asco-sio"
          className="block rounded px-2 py-1 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          Wytyczne ASCO/SIO/NCCN
        </Link>
        <Link
          href="/onkologia-integracyjna/refundacja-w-ue"
          className="block rounded px-2 py-1 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          Refundacja w UE
        </Link>
        <Link
          href="/onkologia-integracyjna/dla-pacjentow"
          className="block rounded px-2 py-1 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          Dla pacjentów
        </Link>
        <Link
          href="/onkologia-integracyjna/dla-lekarzy"
          className="block rounded px-2 py-1 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          Dla lekarzy
        </Link>
        <Link
          href="/onkologia-integracyjna/zrodla"
          className="block rounded px-2 py-1 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          Wszystkie źródła
        </Link>
        <Link
          href="/onkologia-integracyjna/disclaimer"
          className="block rounded px-2 py-1 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          Disclaimer pełny
        </Link>
      </div>
    </nav>
  )
}
