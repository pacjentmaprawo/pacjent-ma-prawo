import { NextResponse } from 'next/server'

// Anonimowy licznik wysłanych pism. Przechowuje WYŁĄCZNIE jedną liczbę całkowitą.
// Kod sam wykrywa zmienne środowiskowe Upstash/Vercel KV niezależnie od prefiksu.
// Bez podłączonej bazy zwraca { configured: false } i nic się nie psuje.

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const KEY = 'petycja_ud207_count'

function detectCredentials(): { url?: string; token?: string } {
  const knownUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
  const knownToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN
  if (knownUrl && knownToken) return { url: knownUrl, token: knownToken }

  const env = process.env
  const urlKey = Object.keys(env).find((k) => k.endsWith('REST_API_URL') && env[k])
  if (!urlKey) return {}
  const prefix = urlKey.slice(0, urlKey.length - 'REST_API_URL'.length)
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
