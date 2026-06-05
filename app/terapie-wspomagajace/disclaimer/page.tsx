import type { Metadata } from 'next'
import { SectionDisclaimer } from '@/components/terapie-wspomagajace/disclaimer'

export const metadata: Metadata = {
  title: 'Disclaimer prawny i zdrowotny',
  description: 'Pełny disclaimer prawny i zdrowotny strony o terapiach wspomagających.',
}

export default function DisclaimerPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">Disclaimer prawny i zdrowotny</h1>
      <p className="text-lg text-muted-foreground">Ważne informacje o charakterze tej strony i ograniczeniach prawnych.</p>
      <SectionDisclaimer variant="full" />
    </div>
  )
}
