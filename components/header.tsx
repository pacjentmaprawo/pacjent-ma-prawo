'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, Scale, Heart, ChevronDown, Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

type NavLink = { href: string; label: string }
type NavGroup = { label: string; items: NavLink[] }

const startLink: NavLink = { href: '/', label: 'Start' }
const kontaktLink: NavLink = { href: '/kontakt', label: 'Kontakt' }
const programLink: NavLink = { href: '/program', label: 'Nasz program' }

const groups: NavGroup[] = [
  {
    label: 'Ustawa UD207',
    items: [
      { href: '/projekt', label: 'Co zmienia projekt' },
      { href: '/dlaczego-sprzeciw', label: 'Dlaczego sprzeciw' },
      { href: '/co-proponujemy', label: 'Co proponujemy' },
      { href: '/co-z-pacjentami', label: 'Co z pacjentami' },
      { href: '/petycja-ud207', label: 'Wyślij apel ws. UD207' },
    ],
  },
  {
    label: 'Wiedza i dowody',
    items: [
      { href: '/terapie-wspomagajace', label: 'Terapie wspomagające' },
      { href: '/medycyna-integracyjna', label: 'Na tle Europy' },
      
      { href: '/prawa-pacjenta', label: 'Prawa pacjenta' },
    ],
  },
  {
    label: 'Materiały',
    items: [
      { href: '/dokumenty', label: 'Dokumenty' },
      { href: '/faq', label: 'FAQ' },
      { href: '/dla-mediow', label: 'Dla mediów' },
    ],
  },
]

type SearchEntry = { href: string; label: string; desc: string; keywords: string }
const searchIndex: SearchEntry[] = [
  { href: '/', label: 'Start', desc: 'Strona główna', keywords: 'start strona główna pacjent ma prawo' },
  { href: '/program', label: 'Nasz program', desc: 'Założenia i postulaty', keywords: 'program założenia postulaty stowarzyszenie' },
  { href: '/projekt', label: 'Co zmienia projekt UD207', desc: 'Ustawa lex szarlatan', keywords: 'ud207 lex szarlatan projekt ustawa zmiany rpp kary' },
  { href: '/dlaczego-sprzeciw', label: 'Dlaczego sprzeciw', desc: 'Ryzyka i zastrzeżenia', keywords: 'dlaczego sprzeciw ryzyka zastrzeżenia konstytucja' },
  { href: '/co-proponujemy', label: 'Co proponujemy', desc: 'Postulaty i rozwiązania', keywords: 'co proponujemy postulaty świadoma zgoda gradacja nfz' },
  { href: '/co-z-pacjentami', label: 'Co z pacjentami', desc: 'Skutki dla pacjentów', keywords: 'co z pacjentami skutki odwołanie decyzja rpp ciągłość opieki' },
  { href: '/terapie-wspomagajace', label: 'Terapie wspomagające', desc: 'Aktualna wiedza medyczna, ESMO', keywords: 'terapie wspomagające aktualna wiedza medyczna esmo onkologia integracyjna off-label witamina c jemioła dowody ebm' },
  { href: '/medycyna-integracyjna', label: 'Na tle Europy', desc: 'Modele w Europie', keywords: 'europa niemcy austria szwajcaria cam medycyna integracyjna heilpraktiker' },
  { href: '/prawa-pacjenta', label: 'Prawa pacjenta', desc: 'Podstawy prawne', keywords: 'prawa pacjenta świadoma zgoda autonomia' },
  { href: '/petycja-ud207', label: 'Wyślij apel ws. UD207', desc: 'Wyślij apel mailem', keywords: 'apel petycja wyślij mail sejm senat prezydent rpp' },
  { href: '/dokumenty', label: 'Dokumenty', desc: 'Analizy i pisma', keywords: 'dokumenty memorandum sekcja konstytucyjna analizy pisma pdf' },
  { href: '/faq', label: 'FAQ', desc: 'Najczęstsze pytania', keywords: 'faq pytania odpowiedzi' },
  { href: '/dla-mediow', label: 'Dla mediów', desc: 'Materiały prasowe', keywords: 'media prasa dziennikarze kontakt' },
  { href: '/kontakt', label: 'Kontakt', desc: 'Napisz do nas', keywords: 'kontakt email napisz' },
]

function Logo({ dark = false }: { dark?: boolean }) {
  const textColor = dark ? 'text-cream' : 'text-navy'
  const iconColor = dark ? 'text-red-orange' : 'text-navy'
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className={`flex items-center ${iconColor}`}>
        <Scale className="h-5 w-5" strokeWidth={1.5} />
        <Heart className="h-4 w-4 -ml-1.5 mt-2" strokeWidth={1.5} />
      </div>
      <span className={`font-serif text-lg font-semibold ${textColor} tracking-tight whitespace-nowrap`}>
        Pacjent Ma Prawo
      </span>
    </Link>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [q, setQ] = useState('')
  const ql = q.trim().toLowerCase()
  const results = ql ? searchIndex.filter((i) => (i.label + ' ' + i.keywords).toLowerCase().includes(ql)).slice(0, 8) : []

  return (
    <header className="sticky top-0 z-50 w-full bg-navy shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-2">
          <Logo dark={true} />

          {/* Desktop Navigation — grupy tematyczne */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Nawigacja główna">
            <Link
              href={startLink.href}
              className="px-3 py-2 text-sm font-medium text-cream/80 hover:text-cream transition-colors rounded-md hover:bg-white/10 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              {startLink.label}
            </Link>

            <Link
              href={programLink.href}
              className="px-3 py-2 text-sm font-medium text-cream/80 hover:text-cream transition-colors rounded-md hover:bg-white/10 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              {programLink.label}
            </Link>

            {groups.map((group) => (
              <DropdownMenu key={group.label}>
                <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-cream/80 hover:text-cream transition-colors rounded-md hover:bg-white/10 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy">
                  {group.label}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-60">
                  {group.items.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href} className="cursor-pointer">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}

            <Link
              href={kontaktLink.href}
              className="px-3 py-2 text-sm font-medium text-cream/80 hover:text-cream transition-colors rounded-md hover:bg-white/10 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              {kontaktLink.label}
            </Link>
          </nav>

          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Wyszukiwarka */}
            <button
              type="button"
              aria-label="Szukaj na stronie"
              onClick={() => setSearchOpen(true)}
              className="text-cream/90 hover:text-cream hover:bg-white/10 rounded-md p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              <Search className="h-5 w-5" />
            </button>
            {/* CTA Button - Desktop */}
            <Link href="/petycja-ud207" className="hidden sm:block">
              <Button className="bg-red-orange text-background font-semibold hover:bg-red-orange/90 hover:scale-[1.02] transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-red-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy">
                Wyślij apel
              </Button>
            </Link>

            {/* Mobile Menu — grupy z nagłówkami */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" aria-label="Otwórz menu" className="text-cream hover:bg-white/10 hover:text-cream">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background overflow-y-auto">
                <SheetTitle className="sr-only">Menu nawigacyjne</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <Logo dark={false} />
                  </div>

                  <nav className="flex flex-col gap-1" aria-label="Nawigacja mobilna">
                    <Link
                      href={startLink.href}
                      onClick={() => setOpen(false)}
                      className="px-4 py-3 text-base font-semibold text-navy hover:bg-secondary rounded-lg transition-colors"
                    >
                      {startLink.label}
                    </Link>

                    <Link
                      href={programLink.href}
                      onClick={() => setOpen(false)}
                      className="px-4 py-3 text-base font-semibold text-navy hover:bg-secondary rounded-lg transition-colors"
                    >
                      {programLink.label}
                    </Link>

                    {groups.map((group) => (
                      <div key={group.label} className="mt-3">
                        <p className="px-4 pb-1 text-xs font-semibold uppercase tracking-wider text-red-orange">
                          {group.label}
                        </p>
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block px-4 py-2.5 text-[15px] font-medium text-navy/90 hover:bg-secondary rounded-lg transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ))}

                    <Link
                      href={kontaktLink.href}
                      onClick={() => setOpen(false)}
                      className="mt-3 px-4 py-3 text-base font-semibold text-navy hover:bg-secondary rounded-lg transition-colors"
                    >
                      {kontaktLink.label}
                    </Link>
                  </nav>

                  <div className="mt-auto pt-6 border-t border-border">
                    <Link href="/petycja-ud207" onClick={() => setOpen(false)}>
                      <Button className="w-full bg-red-orange text-background font-semibold hover:bg-red-orange/90">
                        Wyślij apel
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      {searchOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-24 bg-navy/60"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-background rounded-xl shadow-xl border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Escape') setSearchOpen(false) }}
                placeholder="Szukaj na stronie…"
                className="flex-1 bg-transparent outline-none text-navy placeholder:text-muted-foreground"
              />
              <button type="button" aria-label="Zamknij" onClick={() => setSearchOpen(false)} className="text-muted-foreground hover:text-navy">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto py-2">
              {ql.length === 0 ? (
                <p className="px-4 py-3 text-sm text-muted-foreground">Wpisz słowo, np. „terapie", „apel", „dokumenty"…</p>
              ) : results.length === 0 ? (
                <p className="px-4 py-3 text-sm text-muted-foreground">Brak wyników dla „{q}".</p>
              ) : (
                results.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    onClick={() => { setSearchOpen(false); setQ('') }}
                    className="block px-4 py-2.5 hover:bg-secondary transition-colors"
                  >
                    <span className="text-sm font-medium text-navy">{r.label}</span>
                    <span className="block text-xs text-muted-foreground">{r.desc}</span>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
