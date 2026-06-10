import { NextResponse } from 'next/server'

// Anonimowy licznik wysłanych pism. Przechowuje WYŁĄCZNIE jedną liczbę całkowitą —
// żadnych danych osobowych. Backend: Vercel KV lub Upstash Redis (REST).
//
// Aby licznik zaczął działać, ustaw w projekcie zmienne środowiskowe (jedną z par):
//   KV_REST_API_URL + KV_REST_API_TOKEN            (Vercel KV — wstrzykiwane automatycznie)
//   UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN
// Opcjonalnie PETYCJA_COUNTER_OFFSET — wartość startowa doliczana do licznika.
//
// Bez tych zmiennych endpoint zwraca { configured: false }, a strona pokazuje
// wariant licznika bez liczby (nic się nie psuje).

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const KEY = 'petycja_ud207_count'

function getConfig() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN
  const offset = Number(process.env.PETYCJA_COUNTER_OFFSET || '0') || 0
  return { url, token, offset }
}

async function redisCommand(path: string): Promise<number | null> {
  const { url, token } = getConfig()
  if (!url || !token) return null
  const res = await fetch(`${url}/${path}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`KV error ${res.status}`)
  const data = (await res.json()) as { result: number | string | null }
  const n = data.result == null ? 0 : Number(data.result)
  return Number.isFinite(n) ? n : 0
}

export async function GET() {
  const { url, token, offset } = getConfig()
  if (!url || !token) return NextResponse.json({ configured: false, count: null })
  try {
    const n = await redisCommand(`get/${KEY}`)
    return NextResponse.json({ configured: true, count: (n ?? 0) + offset })
  } catch {
    return NextResponse.json({ configured: false, count: null })
  }
}

export async function POST() {
  const { url, token, offset } = getConfig()
  if (!url || !token) return NextResponse.json({ configured: false, count: null })
  try {
    const n = await redisCommand(`incr/${KEY}`)
    return NextResponse.json({ configured: true, count: (n ?? 0) + offset })
  } catch {
    return NextResponse.json({ configured: false, count: null })
  }
}
