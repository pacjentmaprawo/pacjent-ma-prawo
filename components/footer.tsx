'use client'

import Link from 'next/link'
import { Scale, Heart, Mail, Facebook, Twitter } from 'lucide-react'
import { toast } from 'sonner'

const navLinks = [
  { href: '/', label: 'Start' },
  { href: '/projekt', label: 'Co zmienia projekt' },
  { href: '/medycyna-integracyjna', label: 'Medycyna integracyjna' },
  { href: '/onkologia-integracyjna', label: 'Onkologia integracyjna' },
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
    <div className="flex items-center gap-2">
      <div className="flex items-center text-amber">
        <Scale className="h-5 w-5" strokeWidth={1.5} />
        <Heart className="h-4 w-4 -ml-1.5 mt-2" strokeWidth={1.5} />
      </div>
      <span className="font-serif text-lg font-semibold text-background tracking-tight">
        Pacjent Ma Prawo
      </span>
    </div>
  )
}

function CopyEmailButton() {
  const email = 'pacjentmaprawo@proton.me'
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      toast.success('Adres email skopiowany')
    } catch {
      toast.error('Nie udało się skopiować')
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 text-amber hover:text-background transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 rounded"
      aria-label="Skopiuj adres email"
    >
      <Mail className="h-4 w-4" />
      <span className="group-hover:underline underline-offset-4">{email}</span>
    </button>
  )
}

export function Footer() {
  return (
    <footer className="section-navy">
      {/* Legal Disclaimer */}
      <div className="border-t border-background/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-xs text-background/60 text-center leading-relaxed">
            Strona ma charakter informacyjny i obywatelski. Nie stanowi porady medycznej ani prawnej. 
            W sprawach zdrowotnych skonsultuj się z lekarzem, w sprawach prawnych z profesjonalnym pełnomocnikiem. 
            Strona nie reprezentuje stanowiska żadnej partii politycznej.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-background/70">
              Obywatelska platforma o prawach pacjenta
            </p>
            <p className="font-serif text-sm text-amber italic">
              Wiedzieć. Pytać. Decydować.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-semibold text-background mb-4">Nawigacja</h3>
            <nav className="grid grid-cols-2 gap-2" aria-label="Stopka nawigacyjna">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/70 hover:text-amber transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 rounded"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-background mb-4">Kontakt</h3>
            <div className="space-y-3">
              <CopyEmailButton />
              <p className="text-xs text-background/60">
                Kontakt e-mail przez ProtonMail
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="#"
                  className="text-background/70 hover:text-amber transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-background/70 hover:text-amber transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-background/60">
            <p>© 2026 Pacjent Ma Prawo — inicjatywa obywatelska. Treści oparte na źródłach publicznych.</p>
            <div className="flex items-center gap-4">
              <Link href="/polityka-prywatnosci" className="hover:text-amber transition-colors">
                Polityka prywatności
              </Link>
              <span className="text-background/30">|</span>
              <Link href="/regulamin" className="hover:text-amber transition-colors">
                Regulamin
              </Link>
              <span className="text-border">|</span>
              <Link href="/nota-prawna" className="hover:text-amber transition-colors">
                Nota prawna
              </Link>
            