'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Scale, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'

const navItems = [
  { href: '/', label: 'Start' },
  { href: '/projekt', label: 'Co zmienia projekt' },
  { href: '/medycyna-integracyjna', label: 'Medycyna integracyjna' },
  { href: '/ebm', label: 'EBM' },
  { href: '/prawa-pacjenta', label: 'Prawa pacjenta' },
  { href: '/dlaczego-sprzeciw', label: 'Dlaczego sprzeciw' },
  { href: '/dokumenty', label: 'Dokumenty' },
  { href: '/faq', label: 'FAQ' },
  { href: '/dla-mediow', label: 'Dla mediów' },
  { href: '/kontakt', label: 'Kontakt' },
]

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="flex items-center text-navy">
        <Scale className="h-5 w-5" strokeWidth={1.5} />
        <Heart className="h-4 w-4 -ml-1.5 mt-2" strokeWidth={1.5} />
      </div>
      <span className="font-serif text-lg font-semibold text-navy tracking-tight">
        Pacjent Ma Prawo
      </span>
    </Link>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Nawigacja główna">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-navy/80 hover:text-navy transition-colors rounded-md hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* CTA Button - Desktop */}
            <Link href="/petycja" className="hidden sm:block">
              <Button className="bg-amber text-navy font-semibold hover:bg-amber/90 hover:scale-[1.02] transition-all focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2">
                Podpisz apel
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" aria-label="Otwórz menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background">
                <SheetTitle className="sr-only">Menu nawigacyjne</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <Logo />
                  </div>
                  <nav className="flex flex-col gap-1" aria-label="Nawigacja mobilna">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="px-4 py-3 text-base font-medium text-navy hover:bg-secondary rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto pt-8 border-t border-border">
                    <Link href="/petycja" onClick={() => setOpen(false)}>
                      <Button className="w-full bg-amber text-navy font-semibold hover:bg-amber/90">
                        Podpisz apel
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
