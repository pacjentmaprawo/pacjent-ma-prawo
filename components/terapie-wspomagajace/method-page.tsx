import type { Method } from '@/lib/terapie-wspomagajace/types'
import { EVIDENCE_TYPE_LABELS, EVIDENCE_TYPE_DESCRIPTIONS, CLINICAL_STATUS_LABELS } from '@/lib/terapie-wspomagajace/types'
import Link from 'next/link'
import { CATEGORY_LABELS, GRADE_DESCRIPTIONS } from '@/lib/terapie-wspomagajace/types'
import { GradeBadge, CategoryBadge, PMIDLink, EvidenceTypeBadge, ClinicalStatusBadge } from './badges'
import { SectionDisclaimer } from './disclaimer'

/**
 * Wzorzec podstrony pojedynczej metody onkologii integracyjnej.
 * Dane przekazywane jako prop `method` z lib/terapie-wspomagajace/methods.ts.
 *
 * Struktura 9 sekcji:
 *  1. WHAT — co to jest
 *  2. HOW IT WORKS — mechanizm
 *  3. EBM — dowody (publikacje)
 *  4. INDICATIONS — wskazania
 *  5. CONTRAINDICATIONS — przeciwwskazania
 *  6. SAFETY — bezpieczeństwo
 *  7. REGULATORY — status w UE
 *  8. HOW TO TALK TO YOUR DOCTOR — przewodnik dla pacjenta
 *  9. SOURCES — wszystkie źródła
 *
 * Sekcje 1-6 i 8 — opcjonalnie przekazywane jako React children
 * (specyficzne dla każdej metody). Sekcje 3, 7, 9 — generowane automatycznie
 * z `method.keySources` i `method.regulatory`.
 */
export interface MethodPageProps {
  method: Method
  /** Pełny opis "Co to jest" (sekcja 1) */
  what: React.ReactNode
  /** Mechanizm działania (sekcja 2) */
  howItWorks: React.ReactNode
  /** Badane zastosowania — pełna lista z opisem (sekcja 4) */
  indications: React.ReactNode
  /** Przeciwwskazania i interakcje (sekcja 5) */
  contraindications: React.ReactNode
  /** Profil bezpieczeństwa (sekcja 6) */
  safety: React.ReactNode
  /** Jak rozmawiać z lekarzem (sekcja 8) */
  howToTalkToDoctor: React.ReactNode
  /** Dodatkowe źródła oprócz keySources (sekcja 9 - rozszerzenie) */
  additionalSources?: React.ReactNode
}

export function MethodPage({
  method,
  what,
  howItWorks,
  indications,
  contraindications,
  safety,
  howToTalkToDoctor,
  additionalSources,
}: MethodPageProps) {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <header className="space-y-4 border-b pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <CategoryBadge category={method.category} />
          <GradeBadge grade={method.grade} />
        </div>
        <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">{method.name}</h1>
        <p className="text-lg text-muted-foreground">{method.shortDesc}</p>
        {method.experimental && (
          <div className="rounded-md border border-amber-400 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-700 dark:bg-amber-900/20 dark:text-amber-100">
            <strong>Obszar eksperymentalny / wczesny.</strong> Dane głównie dotyczą tolerancji leczenia, objawów, markerów zapalenia lub mechanizmów biologicznych. NIE jako leczenie przeciwnowotworowe. Wszelkie zastosowanie wymaga konsultacji z onkologiem.
          </div>
        )}
        {method.warning && (
          <div className="rounded-md border border-rose-300 bg-rose-50 px-4 py-3 text-sm text-rose-900 dark:border-rose-700 dark:bg-rose-900/20 dark:text-rose-100">
            <strong>Ważne:</strong> {method.warning}
          </div>
        )}

        {/* Profil dowodowy */}
        {(method.highestEvidenceType || method.clinicalStatus || method.evidenceSignal || method.evidenceContext || method.evidenceGap) && (
          <div className="mt-4 rounded-lg border bg-card p-5 text-sm space-y-3">
            <div className="flex flex-wrap items-center gap-2 border-b pb-2">
              <h2 className="font-serif text-base font-semibold mr-1">Profil dowodowy</h2>
              {method.highestEvidenceType && <EvidenceTypeBadge type={method.highestEvidenceType} />}
              {method.clinicalStatus && <ClinicalStatusBadge status={method.clinicalStatus} />}
              <GradeBadge grade={method.grade} />
              <Link href="/terapie-wspomagajace/jak-czytac-dowody" className="ml-auto text-xs underline text-muted-foreground hover:text-foreground">Jak czytać te oznaczenia →</Link>
            </div>
            {method.evidenceSignal && (
              <div><strong className="text-foreground">Sygnał efektu:</strong>{' '}<span className="text-muted-foreground">{method.evidenceSignal}</span></div>
            )}
            {method.highestEvidenceType && (
              <div><strong className="text-foreground">Najwyższy typ danych klinicznych ({method.highestEvidenceType}):</strong>{' '}<span className="text-muted-foreground">{EVIDENCE_TYPE_DESCRIPTIONS[method.highestEvidenceType]}</span></div>
            )}
            {method.evidenceGap && (
              <div><strong className="text-foreground">Główna luka dowodowa:</strong>{' '}<span className="text-muted-foreground">{method.evidenceGap}</span></div>
            )}
            {method.evidenceContext && (
              <div className="rounded-md bg-muted/50 p-3"><strong className="text-foreground">Kontekst dowodowy:</strong>{' '}<span className="text-muted-foreground">{method.evidenceContext}</span></div>
            )}
            <div className="text-xs text-muted-foreground italic pt-1 border-t">
              GRADE mierzy pewność oszacowania efektu — nie sam efekt. „Niska pewność" nie oznacza „brak efektu". Substancje nieopatentowane strukturalnie nie dostają RCT III bo brak sponsora. Więcej: <Link href="/terapie-wspomagajace/jak-czytac-dowody" className="underline">Jak czytać dowody</Link>.
            </div>
          </div>
        )}
      </header>

      {/* 1. WHAT */}
      <section aria-labelledby="what">
        <h2 id="what" className="mb-4 font-serif text-2xl font-semibold">
          Co to jest
        </h2>
        <div className="prose prose-stone max-w-none dark:prose-invert">{what}</div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section aria-labelledby="how-it-works">
        <h2 id="how-it-works" className="mb-4 font-serif text-2xl font-semibold">
          Mechanizm działania
        </h2>
        <div className="prose prose-stone max-w-none dark:prose-invert">{howItWorks}</div>
      </section>

      {/* 3. EBM — kluczowe publikacje */}
      <section aria-labelledby="ebm">
        <h2 id="ebm" className="mb-2 font-serif text-2xl font-semibold">
          Dowody naukowe (EBM)
        </h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Poziom dowodów dla głównego wskazania:{' '}
          <GradeBadge grade={method.grade} className="ml-1" />
          <span className="ml-2">{GRADE_DESCRIPTIONS[method.grade]}</span>
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b text-left">
                <th className="py-2 pr-4 font-semibold">Publikacja</th>
                <th className="py-2 pr-4 font-semibold">Czasopismo</th>
                <th className="py-2 pr-4 font-semibold">Typ</th>
                <th className="py-2 pr-4 font-semibold">Główny wniosek</th>
                <th className="py-2 font-semibold">Źródło</th>
              </tr>
            </thead>
            <tbody>
              {method.keySources.map((s, i) => (
                <tr key={i} className="border-b align-top">
                  <td className="py-2 pr-4 font-medium">{s.cite}</td>
                  <td className="py-2 pr-4 italic text-muted-foreground">{s.journal ?? '—'}</td>
                  <td className="py-2 pr-4 text-xs uppercase tracking-wide text-muted-foreground">
                    {s.type ?? '—'}
                  </td>
                  <td className="py-2 pr-4">{s.finding ?? '—'}</td>
                  <td className="py-2">
                    {s.pmid || s.doi ? (
                      <PMIDLink pmid={s.pmid} doi={s.doi}>
                        {s.pmid ? `PMID ${s.pmid}` : `DOI ${s.doi}`}
                      </PMIDLink>
                    ) : (
                      '—'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. INDICATIONS */}
      <section aria-labelledby="indications">
        <h2 id="indications" className="mb-4 font-serif text-2xl font-semibold">
          Badane zastosowania
        </h2>
        <div className="prose prose-stone max-w-none dark:prose-invert">{indications}</div>
      </section>

      {/* 5. CONTRAINDICATIONS */}
      <section aria-labelledby="contraindications">
        <h2 id="contraindications" className="mb-4 font-serif text-2xl font-semibold">
          Przeciwwskazania i interakcje
        </h2>
        <div className="prose prose-stone max-w-none dark:prose-invert">{contraindications}</div>
      </section>

      {/* 6. SAFETY */}
      <section aria-labelledby="safety">
        <h2 id="safety" className="mb-4 font-serif text-2xl font-semibold">
          Profil bezpieczeństwa
        </h2>
        <div className="prose prose-stone max-w-none dark:prose-invert">{safety}</div>
      </section>

      {/* 7. REGULATORY */}
      <section aria-labelledby="regulatory">
        <h2 id="regulatory" className="mb-4 font-serif text-2xl font-semibold">
          Status regulacyjny w wybranych krajach
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b text-left">
                <th className="py-2 pr-4 font-semibold">Kraj</th>
                <th className="py-2 pr-4 font-semibold">Status</th>
                <th className="py-2 font-semibold">Uwagi</th>
              </tr>
            </thead>
            <tbody>
              {method.regulatory.map((r, i) => (
                <tr key={i} className="border-b align-top">
                  <td className="py-2 pr-4 font-mono font-semibold">{r.country}</td>
                  <td className="py-2 pr-4">{r.status}</td>
                  <td className="py-2 text-muted-foreground">{r.note ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Status regulacyjny zmienia się — informacje aktualne na dzień rewizji podstrony.
          Szczegółowe porównanie 7 krajów UE:{' '}
          <a href="/terapie-wspomagajace/refundacja-w-ue" className="text-primary underline">
            Refundacja w UE
          </a>
          .
        </p>
      </section>

      {/* 8. HOW TO TALK TO YOUR DOCTOR */}
      <section aria-labelledby="how-to-talk">
        <h2 id="how-to-talk" className="mb-4 font-serif text-2xl font-semibold">
          Jak rozmawiać z lekarzem
        </h2>
        <div className="prose prose-stone max-w-none dark:prose-invert">{howToTalkToDoctor}</div>
      </section>

      {/* 9. SOURCES — link do pełnej listy */}
      <section aria-labelledby="sources" className="border-t pt-8">
        <h2 id="sources" className="mb-4 font-serif text-2xl font-semibold">
          Wszystkie źródła
        </h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Powyżej w sekcji „Dowody naukowe" zaprezentowano kluczowe publikacje. Pełna lista
          wszystkich źródeł cytowanych na stronie:
        </p>
        <a
          href="/terapie-wspomagajace/zrodla"
          className="inline-block rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition hover:bg-muted"
        >
          Zobacz wszystkie źródła →
        </a>
        {additionalSources && (
          <div className="prose prose-sm prose-stone mt-8 max-w-none dark:prose-invert">
            <h3 className="text-lg font-semibold">Dodatkowe materiały dla tej metody</h3>
            {additionalSources}
          </div>
        )}
      </section>

      {/* DISCLAIMER */}
      <SectionDisclaimer variant="compact" />

      {/* META */}
      <div className="space-y-2 border-t pt-6 text-xs text-muted-foreground">
        <p>
          <strong>Kategoria:</strong> {method.category} — {CATEGORY_LABELS[method.category]}
        </p>
        <p>
          Strona aktualizowana okresowo. Zgłoszenia błędów lub aktualizacji:{' '}
          <a href="/kontakt" className="text-primary underline">
            kontakt
          </a>
          .
        </p>
      </div>
    </div>
  )
}
