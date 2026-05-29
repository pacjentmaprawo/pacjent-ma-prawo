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
  /** Autor + rok (np. "Qu et al. 2025") */
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
  country: 'PL' | 'DE' | 'CH' | 'AT' | 'USA' | 'FR' | 'BE' | 'NL' | 'IT' | 'UK' | 'JP' | 'EU'
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
  /** Kluczowe publikacje (3-5 najważniejszych) */
  keySources: Source[]
  /** Krótkie ostrzeżenie/przeciwwskazanie (do karty) */
  warning?: string
  /** Czy metoda została WYŁĄCZONA z scope (sygnalne dla redakcji, nie wyświetlane) */
  excluded?: boolean
  /** Czy metoda jest eksperymentalna / wczesna baza dowodowa — pokazuje box ostrzegawczy w karcie */
  experimental?: boolean
  /** Krótki opis sygnału klinicznego / biologicznego z badań */
  evidenceSignal?: string
  /** Najwyższy typ danych klinicznych: A — wiele RCT/metaanaliz; B — jedno RCT/duże nierandom.; C — małe badania/rejestry; P — głównie przedkliniczne/mechanistyczne */
  highestEvidenceType?: 'A' | 'B' | 'C' | 'P'
  /** Status praktycznego zastosowania */
  clinicalStatus?: 'guideline-supported' | 'supportive-care' | 'off-label-adjunct' | 'experimental' | 'not-recommended'
  /** Główna luka dowodowa — czego brakuje w bazie badań */
  evidenceGap?: string
  /** Kontekst dowodowy — dlaczego dowody są ograniczone (np. brak sponsora, populacja niszowa, off-patent) */
  evidenceContext?: string
}

export const EVIDENCE_TYPE_LABELS: Record<NonNullable<Method['highestEvidenceType']>, string> = {
  A: 'Wiele RCT lub metaanaliza RCT',
  B: 'Jedno RCT lub duże badanie nierandomizowane',
  C: 'Małe badania / rejestry / retrospektywne / opinia ekspertów',
  P: 'Głównie dane przedkliniczne lub mechanistyczne',
}

export const EVIDENCE_TYPE_DESCRIPTIONS: Record<NonNullable<Method['highestEvidenceType']>, string> = {
  A: 'Najwyższy typ danych klinicznych: wiele niezależnych badań randomizowanych lub metaanaliza je integrująca. Standard wytycznych klinicznych.',
  B: 'Pojedyncze RCT z istotnym wynikiem klinicznym lub duże badania nierandomizowane (kohortowe, rejestry pacjentów). Bezpieczna baza decyzyjna.',
  C: 'Małe badania kliniczne (mała próba, pilotaż), rejestry pacjentów, opinie ekspertów. Sygnał obserwacyjny — wymaga dalszego potwierdzenia.',
  P: 'Dane przedkliniczne (in vitro, modele zwierzęce) lub mechanistyczne. Bez dojrzałych badań klinicznych — substancja w obszarze eksperymentalnym.',
}

export const CLINICAL_STATUS_LABELS: Record<NonNullable<Method['clinicalStatus']>, string> = {
  'guideline-supported': 'Rekomendowana w wytycznych klinicznych',
  'supportive-care': 'Supportive care — wsparcie standardowego leczenia',
  'off-label-adjunct': 'Stosowanie off-label jako adjunkt',
  'experimental': 'Obszar eksperymentalny — w fazie badań',
  'not-recommended': 'Brak rekomendacji w wytycznych klinicznych',
}
