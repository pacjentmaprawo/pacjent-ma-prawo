import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ 
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const lora = Lora({ 
  subsets: ['latin', 'latin-ext'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Pacjent Ma Prawo — Wiedzieć. Pytać. Decydować.',
    template: '%s | Pacjent Ma Prawo',
  },
  description: 'Obywatelska platforma informacyjna o prawach pacjenta, legalnych terapiach wspomagających i skutkach projektu określanego jako "lex szarlatan". Treści oparte na źródłach publicznych.',
  keywords: ['prawa pacjenta', 'terapie wspomagające', 'onkologia', 'lex szarlatan', 'UD207', 'RPP', 'WHO TCIM', 'świadoma zgoda', 'autonomia pacjenta'],
  authors: [{ name: 'Pacjent Ma Prawo' }],
  openGraph: {
    title: 'Pacjent Ma Prawo — Wiedzieć. Pytać. Decydować.',
    description: 'Obywatelska platforma informacyjna o prawach pacjenta, legalnych terapiach wspomagających i skutkach projektu określanego jako "lex szarlatan".',
    url: 'https://pacjentmaprawo.pl',
    siteName: 'Pacjent Ma Prawo',
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pacjent Ma Prawo — Wiedzieć. Pytać. Decydować.',
    description: 'Obywatelska platforma informacyjna o prawach pacjenta, legalnych terapiach wspomagających i skutkach projektu określanego jako "lex szarlatan".',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${lora.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <a href="#main-content" className="skip-to-content">
          Przejdź do treści
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster position="bottom-right" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
