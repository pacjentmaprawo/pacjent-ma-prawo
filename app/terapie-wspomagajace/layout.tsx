import type { Metadata } from 'next'
import { MethodSidebar } from '@/components/terapie-wspomagajace/method-sidebar'

export const metadata: Metadata = {
  title: {
    default: 'Terapie wspomagające — baza wiedzy EBM',
    template: '%s — Terapie wspomagające | Pacjent Ma Prawo',
  },
  description:
    'Niezależna baza wiedzy EBM o terapiach uzupełniających leczenie onkologiczne. Kilkadziesiąt metod, kilkadziesiąt publikacji peer-reviewed, GRADE, refundacja w UE.',
  keywords: [
    'onkologia integracyjna',
    'CAM',
    'EBM',
    'terapie uzupełniające',
    'GRADE',
    'wlewy witaminy C',
    'IVC',
    'jemioła Iscador',
    'hipertermia lokoregionalna',
    'kurkumina',
    'akupunktura w onkologii',
    'mindfulness onkologia',
  ],
}

export default function OnkologiaIntegracyjnaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-2">
          <MethodSidebar />
        </aside>
        <article className="min-w-0">{children}</article>
      </div>
    </div>
  )
}
