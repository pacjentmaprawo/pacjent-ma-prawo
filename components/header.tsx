'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, Scale, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'

const navItems = [
  { href: '/', label: 'Start' },
  { href: '/projekt', label: 'Co zmienia projekt' },
  { href: '/dlaczego-sprzeciw', label: 'Dlaczego sprzeciw' },
  { href: '/co-proponujemy', label: 'Co proponujemy' },
  { href: '/co-z-pacjentami', label: 'Co z pacjentami' },
  { href: '/medycyna-integracyjna', label: 'Medycyna integracyjna' },
  { href: '/ebm', label: 'EBM' },
  { href: '/prawa-pacjenta', label: 'Prawa pacjenta' },
  { href: '/dokumenty', label: 'Dokumenty' },
  { href: '/faq', label: 'FAQ' },
  { href: '/dla-mediow', label: 'Dla mediów' },
  { href: '/kontakt', label: 'Kontakt' },
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
        <div className="flex h-16 items-center justify-between">
          <Logo dark={true} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Nawigacja główna">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-cream/80 hover:text-cream transition-colors rounded-md hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* CTA Button - Desktop */}
            <Link href="/petycja" className="hidden sm:block">
              <Button className="bg-red-orange text-background font-semibold hover:bg-red-orange/90 hover:scale-[1.02] transition-all focus-visible:ring-2 focus-visible:ring-red-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy">
                Podpisz apel
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" aria-label="Otwórz menu" className="text-cream hover:bg-white/10 hover:text-cream">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background">
                <SheetTitle className="sr-only">Menu nawigacyjne</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <Logo dark={false} />
                  </div>
                  <nav className="flex flex-col gap-1" aria-label="Nawigacja mobilna">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="px-4 py-3 text-base font-medium text-navy hover:bg-secondary rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-orange focus-visible:ring-offset-2"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto pt-8 border-t border-border">
                    <Link href="/petycja" onClick={() => setOpen(false)}>
                      <Button className="w-full bg-red-orange text-background font-semib