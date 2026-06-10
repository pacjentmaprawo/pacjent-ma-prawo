// Klient licznika wysłanych pism. Dedupe per przeglądarka (localStorage) — jeden głos na urządzenie.
// Brak danych osobowych; komunikacja wyłącznie z naszym endpointem /api/petycja-licznik.

const STORAGE_KEY = 'petycja_ud207_counted'
const API = '/api/petycja-licznik'

export interface CounterResult {
  configured: boolean
  count: number | null
}

export async function fetchCount(): Promise<CounterResult> {
  try {
    const r = await fetch(API, { cache: 'no-store' })
    if (!r.ok) return { configured: false, count: null }
    return (await r.json()) as CounterResult
  } catch {
    return { configured: false, count: null }
  }
}

export function hasCounted(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

/** Rejestruje wysłanie (raz na przeglądarkę). Zwraca nowy stan licznika lub null, jeśli już liczono. */
export async function registerSubmission(): Promise<CounterResult | null> {
  if (hasCounted()) return null
  try {
    localStorage.setItem(STORAGE_KEY, '1')
  } catch {
    /* tryb prywatny — pomijamy dedupe */
  }
  try {
    const r = await fetch(API, { method: 'POST' })
    if (!r.ok) return null
    return (await r.json()) as CounterResult
  } catch {
    return null
  }
}
