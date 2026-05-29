import type { EvidenceGrade, MethodCategory, Method } from '@/lib/onkologia-integracyjna/types'
import { GRADE_LABELS, CATEGORY_LABELS, EVIDENCE_TYPE_LABELS, CLINICAL_STATUS_LABELS } from '@/lib/onkologia-integracyjna/types'

/**
 * Badge poziomu dowodów GRADE.
 * Kolory: high=zielony, moderate=niebieski, low=żółty, very-low=szary.
 */
export function GradeBadge({ grade, className = '' }: { grade: EvidenceGrade; className?: string }) {
  const colors: Record<EvidenceGrade, string> = {
    'high': 'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-700',
    'moderate': 'bg-sky-100 text-sky-900 border-sky-300 dark:bg-sky-900/30 dark:text-sky-200 dark:border-sky-700',
    'low': 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-900/30 dark:text-amber-200 dark:border-amber-700',
    'very-low': 'bg-zinc-100 text-zinc-700 border-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-600',
  }
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded border ${colors[grade]} ${className}`}
      title={`GRADE: ${GRADE_LABELS[grade]}`}
    >
      <span className="font-mono uppercase tracking-tight">GRADE</span>
      <span>{GRADE_LABELS[grade]}</span>
    </span>
  )
}

/**
 * Badge kategorii metody (A/B/C/D).
 */
export function CategoryBadge({ category, className = '' }: { category: MethodCategory; className?: string }) {
  const colors: Record<MethodCategory, string> = {
    A: 'bg-purple-100 text-purple-900 border-purple-300 dark:bg-purple-900/30 dark:text-purple-200 dark:border-purple-700',
    B: 'bg-cyan-100 text-cyan-900 border-cyan-300 dark:bg-cyan-900/30 dark:text-cyan-200 dark:border-cyan-700',
    C: 'bg-rose-100 text-rose-900 border-rose-300 dark:bg-rose-900/30 dark:text-rose-200 dark:border-rose-700',
    D: 'bg-orange-100 text-orange-900 border-orange-300 dark:bg-orange-900/30 dark:text-orange-200 dark:border-orange-700',
  }
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded border ${colors[category]} ${className}`}
      title={CATEGORY_LABELS[category]}
    >
      <span className="font-mono font-bold">{category}</span>
      <span className="hidden sm:inline">{CATEGORY_LABELS[category]}</span>
    </span>
  )
}

/**
 * Link do publikacji w PubMed (po PMID) lub DOI.
 * Otwiera w nowej karcie, oznacza rel="noopener noreferrer".
 */
export function PMIDLink({
  pmid,
  doi,
  children,
  className = '',
}: {
  pmid?: string
  doi?: string
  children?: React.ReactNode
  className?: string
}) {
  const url = pmid
    ? `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`
    : doi
    ? `https://doi.org/${doi}`
    : null
  if (!url) {
    return <>{children ?? pmid ?? doi}</>
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-primary underline underline-offset-2 hover:text-primary/80 ${className}`}
      title={pmid ? `PubMed PMID: ${pmid}` : `DOI: ${doi}`}
    >
      {children ?? `PMID ${pmid ?? doi}`}
    </a>
  )
}


/**
 * Badge typu najsilniejszych danych klinicznych (A/B/C/P).
 * A=wiele RCT/metaanaliza, B=jedno RCT/duże nierandom., C=małe/rejestry, P=przedkliniczne.
 * Kolory: A=zielony (najmocniejsze), B=niebieski, C=żółty, P=fioletowy (eksperymentalne, nie negatywne).
 */
export function EvidenceTypeBadge({
  type,
  className = '',
  compact = false,
}: {
  type: NonNullable<Method['highestEvidenceType']>
  className?: string
  /** Kompaktowa wersja — tylko litera, bez etykiety (do sidebar / wąskich kontekstów). */
  compact?: boolean
}) {
  const colors: Record<NonNullable<Method['highestEvidenceType']>, string> = {
    A: 'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-700',
    B: 'bg-sky-100 text-sky-900 border-sky-300 dark:bg-sky-900/30 dark:text-sky-200 dark:border-sky-700',
    C: 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-900/30 dark:text-amber-200 dark:border-amber-700',
    P: 'bg-violet-100 text-violet-900 border-violet-300 dark:bg-violet-900/30 dark:text-violet-200 dark:border-violet-700',
  }
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded border ${colors[type]} ${className}`}
      title={`Najwyższy typ danych klinicznych: ${EVIDENCE_TYPE_LABELS[type]}`}
    >
      <span className="font-mono font-bold">{type}</span>
      {!compact && <span className="hidden 2xl:inline">{EVIDENCE_TYPE_LABELS[type]}</span>}
    </span>
  )
}

/**
 * Badge statusu klinicznego (rekomendowana / supportive / off-label / experimental / not-recommended).
 */
export function ClinicalStatusBadge({
  status,
  className = '',
  compact = false,
}: {
  status: NonNullable<Method['clinicalStatus']>
  className?: string
  /** Kompaktowa wersja — tylko ikona/skrót, bez pełnej etykiety. */
  compact?: boolean
}) {
  const colors: Record<NonNullable<Method['clinicalStatus']>, string> = {
    'guideline-supported': 'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-700',
    'supportive-care': 'bg-teal-100 text-teal-900 border-teal-300 dark:bg-teal-900/30 dark:text-teal-200 dark:border-teal-700',
    'off-label-adjunct': 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-900/30 dark:text-amber-200 dark:border-amber-700',
    'experimental': 'bg-violet-100 text-violet-900 border-violet-300 dark:bg-violet-900/30 dark:text-violet-200 dark:border-violet-700',
    'not-recommended': 'bg-rose-100 text-rose-900 border-rose-300 dark:bg-rose-900/30 dark:text-rose-200 dark:border-rose-700',
  }
  const shortLabels: Record<NonNullable<Method['clinicalStatus']>, string> = {
    'guideline-supported': 'wytyczne',
    'supportive-care': 'supportive',
    'off-label-adjunct': 'off-label',
    'experimental': 'eksperym.',
    'not-recommended': 'nie rekom.',
  }
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded border ${colors[status]} ${className}`}
      title={CLINICAL_STATUS_LABELS[status]}
    >
      {compact ? shortLabels[status] : CLINICAL_STATUS_LABELS[status]}
    </span>
  )
}
