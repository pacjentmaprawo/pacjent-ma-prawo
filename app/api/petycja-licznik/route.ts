import { NextResponse } from 'next/server'

// Anonimowy licznik wysłanych pism. Przechowuje WYŁĄCZNIE jedną liczbę całkowitą —
// żadnych danych osobowych. Backend: Vercel KV lub Upstash Redis (REST).
//
// Aby licznik zaczął działać, podłącz w Vercel bazę Upstash/Redis do projektu.
// Kod sam wykrywa właściwe zmienne środowiskowe — niezależnie od prefiksu nadanego
// przez integrację Vercel (np. KV_REST_API_URL, UPSTASH_REDIS_REST_URL,
// STORAGE_KV_REST_API_URL itd.). Działa to przez dopasowanie po końcówce nazwy zmiennej.
// Opcjonalnie PETYCJA_COUNTER_OFFSET — wartość startowa doliczana do licznika.
//
// Bez podłączonej bazy endpoint zwraca { configured: false }, a strona pokazuje
// wariant licznika bez liczby (nic się nie psuje).

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const KEY = 'petycja_ud207_count'

/**
 * Wykrywa parę URL + zapisywalny TOKEN Upstash REST z process.env, niezależnie od prefiksu.
 * Najpierw sprawdza znane nazwy, potem skanuje wszystkie zmienne po końcówce.
 */
function detectCredentials(): { url?: string; token?: string } {
  // 1) Znane, najczęstsze nazwy.
  const knownUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
  const knownToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN
  if (knownUrl && knownToken) return { url: knownUrl, token: knownToken }

  // 2) Skan po końcówce nazwy (obsługuje dowolny prefiks, np. STORAGE_).
  const env = process.env
  const urlKey = Object.keys(env).find((k) => k.endsWith('REST_API_URL') && env[k])
  if (!urlKey) return {}
  const prefix = urlKey.slice(0, urlKey.length - 'REST_API_URL'.length)
  // Token zapisywalny (NIE read-only) z tym samym prefiksem.
  const token =
    env[`${prefix}REST_API_TOKEN`] ||
    Object.entries(env).find(
      ([k, v]) => k.endsWith('REST_API_TOKEN') && !k.includes('READ_ONLY') && v,
    )?.[1]
  return { url: env[urlKey], token }
}

function getConfig() {
  const { url, token } = detectCredentials()
  const offset = Number(process.env.PETYCJA_COUNTER_OFFSET || '0') || 0
  return { url, token, offset }
}

async function redisCommand(path: string): Promise<number | null> {
  const { url, token } = getConfig()
  if (!url || !token) return null
  const res = awa