'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, Scale, Heart, ChevronDown } from 'lucide-react'
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
      { href: '/ebm', label: 'EBM — aktualna wiedza medyczna' },
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
    </header>
  )
}
