/**
 * Typy dla sekcji "Onkologia integracyjna" — baza wiedzy EBM
 *
 * Każda metoda ma swój wpis Method, używany w sidebar, na liście metod
 * i w pełnej podstronie. Wszystkie publikacje mają PMID (PubMed) i/lub DOI.
 */

export type EvidenceGrade = 'high' | 'moderate' | 'low' | 'very-low'

export type MethodCategory = 'A' | 'B' | 'C' | 'D'

export const CATEGORY_LABELS: Record<MethodCategory, string> = {
  A: 'Farmakologiczne uzupełniające',
  B: 'Konwencjonalne technologie/procedury (nie CAM)',
  C: 'Medycyna stylu życia (guideline-supported)',
  D: 'Modulacja immunologiczna i eksperymentalne',
}

export const GRADE_LABELS: Record<EvidenceGrade, string> = {
  'high': 'wysoka',
  'moderate': 'umiarkowana',
  'low': 'niska',
  'very-low': 'bardzo niska',
}

export const GRADE_DESCRIPTIONS: Record<EvidenceGrade, string> = {
  'high': 'Jesteśmy bardzo pewni, że prawdziwy efekt jest zbliżony do oszacowania.',
  'moderate': 'Jesteśmy umiarkowanie pewni — prawdziwy efekt prawdopodobnie jest zbliżony, ale różnica jest możliwa.',
  'low': 'Pewność jest ograniczona — prawdziwy efekt może istotnie różnić się od oszacowania.',
  'very-low': 'Bardzo mała pewność — prawdziwy efekt może być całkowicie inny.',
}

export interface Source {
  /** Autor + rok (np. "Vissers et al. 2025") */
  cite: string
  /** Pełny tytuł publikacji */
  title?: string
  /** Czasopismo */
  journal?: string
  /** PMID — identyfikator w bazie PubMed (preferowany) */
  pmid?: string
  /** DOI — gdy brak PMID lub jako uzupełnienie */
  doi?: string
  /** Typ publikacji (metaanaliza, RCT, review, mechanistyczne) */
  type?: 'metaanaliza' | 'RCT' | 'RCT-III' | 'RCT-II' | 'RCT-I' | 'review' | 'kohortowe' | 'mechanistyczne' | 'wytyczne'
  /** Skrótowy opis wniosku (zwięzły, do tabeli) */
  finding?: string
}

export interface RegulatoryStatus {
  country: 'PL' | 'DE' | 'CH' | 'AT' | 'USA' | 'FR' | 'BE' | 'NL' | 'IT' | 'UK' | 'JP'
  status: 'refundowane' | 'dopuszczone' | 'off-label' | 'eksperymentalne' | 'OTC' | 'rejestracja-jako-inne-wskazanie'
  note?: string
}

export interface Method {
  /** Slug w URL (np. "wlewy-dozylne-witaminy-c") */
  slug: string
  /** Pełna nazwa (np. "Wlewy dożylne witaminy C (IVC)") */
  name: string
  /** Krótka nazwa (do sidebar i list) */
  shortName: string
  /** Kategoria (A/B/C/D) */
  category: MethodCategory
  /** Numer w kategorii (A1, A2, B1, etc.) — porządek wyświetlania */
  categoryIndex: number
  /** Poziom dowodów GRADE — gdy mieszany, najwyższy dla głównego wskazania */
  grade: EvidenceGrade
  /** Krótki opis (1-2 zdania, na karcie i sidebar) */
  shortDesc: string
  /** Kluczowe wskazania kliniczne (lista pojedynczych słów/fraz) */
  mainIndications: string[]
  /** Status regulacyjny w krajach UE/USA */
  regulatory: RegulatoryStatus[]
  /** Kluczowe publikacje (3-5 najważniejszych — pełna lista w sekcji SOURCES podstrony) */
  keySources: Source[]
  /** Krótkie ostrzeżenie/przeciwwskazanie (do karty) */
  warning?: string
  /** Czy metoda została WYŁĄCZONA z scope (sygnalne dla redakcji, nie