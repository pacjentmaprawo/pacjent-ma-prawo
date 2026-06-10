'use client'

import { useEffect, useState } from 'react'
import { Mail } from 'lucide-react'
import { fetchCount } from '@/lib/petycja/counter'

/**
 * Duży, anonimowy licznik wysłanych pism.
 * - pobiera stan przy montażu,
 * - aktualizuje się po zdarzeniu „petycja-counted” (emitowanym po otwarciu wiadomości),
 * - gdy backend licznika nie jest skonfigurowany, pokazuje wariant motywacyjny bez liczby.
 */
export function SubmissionCounter() {
  const [count, setCount] = useState<number | null>(null)
  const [configured, setConfigured] = useState(false)
  const [pop, setPop] = useState(false)

  useEffect(() => {
    let active = true
    fetchCount().then((r) => {
      if (!active) return
      setConfigured(r.configured)
      setCount(r.count)
    })
    const onCounted = (e: Event) => {
      const detail = (e as CustomEvent).detail
      if (typeof detail === 'number') {
        setConfigured(true)
        setCount(detail)
        setPop(true)
        setTimeout(() => setPop(false), 600)
      }
    }
    window.addEventListener('petycja-counted', onCounted)
    return () => {
      active = false
      window.removeEventListener('petycja-counted', onCounted)
    }
  }, [])

  const showNumber = configured && count != null
  const formatted = showNumber ? count!.toLocaleString('pl-PL') : null

  return (
    <section className="py-8 lg:py-10 bg-navy">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="flex items-center gap-2 text-amber">
            <Mail className="h-6 w-6" />
            <span className="text-sm font-medium uppercase tracking-wider">Licznik akcji obywatelskiej</span>
          </div>

          {showNumber ? (
            <>
              <span
                className={`font-serif font-semibold text-cream tabular-nums leading-none transition-transform duration-300 ${
                  pop ? 'scale-110' : 'scale-100'
                } text-6xl sm:text-7xl`}
              >
                {formatted}
              </span>
              <p className="text-cream/85 text-lg">
                osób wysłało już apel w sprawie projektu UD207
              </p>
              <p className="text-cream/60 text-sm">
                Dołącz do nich — Twój głos zwiększa presję na poprawę ustawy.
              </p>
            </>
          ) : (
            <>
              <span className="font-serif font-semibold text-cream leading-tight text-3xl sm:text-4xl">
                Dołącz do osób wysyłających apel
              </span>
              <p className="text-cream/75 text-base max-w-xl">
                Każde wysłane pismo zwiększa presję na poprawę projektu UD207. Wypełnij formularz
                poniżej i wyślij apel w kilka minut.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
