import type { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, X, Download, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dla mediów',
  description: 'Materiały prasowe, dane kontaktowe i kluczowe tezy platformy Pacjent Ma Prawo dla dziennikarzy i mediów.',
}

const claims = [
  'Projekt UD207 („lex szarlatan") wymaga precyzyjnych definicji',
  'Pacjent ma prawo do informacji i świadomej decyzji',
  'Regulacja musi być proporcjonalna do celu',
  'Medycyna integracyjna nie jest tożsama z pseudomedycyną',
  'Proces legislacyjny powinien być transparentny',
  'Polska — jako państwo członkowskie WHO i UE — uczestniczyła 26.05.2025 w przyjęciu Strategii WHO TCIM 2025–2034',
]

const notClaims = [
  'NIE twierdzimy, że każda terapia komplementarna jest skuteczna',
  'NIE bronimy oszustw medycznych',
  'NIE formułujemy personalnych zarzutów bez dokumentów źródłowych',
  'NIE zachęcamy do rezygnacji z leczenia zgodnego z aktualną wiedzą medyczną',
]

const downloads = [
  {
    title: 'Brief medialny publiczny v1 — UD207',
    format: 'PDF, ok. 8 stron',
    url: '/dokumenty/Brief_Medialny_Publiczny_v1.pdf',
  },
  {
    title: 'Memorandum prawne UD207 v2.0',
    format: 'PDF, ok. 18 stron',
    url: '/dokumenty/Memorandum_prawne_UD207_v2.0.pdf',
  },
  {
    title: 'Sekcja Konstytucyjna v3.0 — 14 niezgodności',
    format: 'PDF, ok. 22 strony',
    url: '/dokumenty/Sekcja_Konstytucyjna_v3.0_do_Zalacznik_1_v1.10.pdf',
  },
  {
    title: 'Memo Ekonomiczne — UD207 w cieniu kryzysu NFZ',
    format: 'PDF, ok. 14 stron',
    url: '/dokumenty/Memo_Ekonomiczne_NFZ_v1.pdf',
  },
  {
    title: 'Załącznik 1 — Policy Paper EBM v1.10',
    format: 'PDF, ok. 50 stron',
    url: '/dokumenty/Zalacznik_1_Policy_Paper_EBM_v1.10.pdf',
  },
  {
    title: 'MEMO_DECYZYJNE v3.11 — dokument-centrum pakietu',
    format: 'PDF, ok. 24 strony',
    url: '/dokumenty/MEMO_DECYZYJNE_v3.11_dokument_centrum.pdf',
  },
]

export default function DlaMediaPage() {
  return (
    <div>
      <section className="hero-gradient py-12 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-3">
            Materiały prasowe
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-4">
            Dla dziennikarzy i mediów
          </h1>
          <p className="text-navy/80 leading-relaxed">
            Pacjent Ma Prawo to obywatelska platforma informacyjna. Poniżej znajdują się
            materiały gotowe do publikacji, dane kontaktowe i kluczowe tezy.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 my-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border border-border rounded-xl">
            <CardContent className="p-6 lg:p-8">
              <h2 className="font-serif text-xl font-semibold text-navy mb-6">Co twierdzimy</h2>
              <ul className="space-y-3">
                {claims.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-teal" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border border-border rounded-xl">
            <CardContent className="p-6 lg:p-8">
              <h2 className="font-serif text-xl font-semibold text-navy mb-6">Czego NIE twierdzimy</h2>
              <ul className="space-y-3">
                {notClaims.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-red-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-3 w-3 text-red-orange" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="font-serif text-2xl font-semibold text-navy mb-8">Materiały do pobrania</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloads.map((item, index) => (
            <Card key={index} className="border border-border rounded-xl card-lift">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-orange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Download className="h-6 w-6 text-amber" />
                </div>
                <h3 className="font-semibold text-navy mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground mb-4">{item.format}</p>
                <a href={item.url} download>
                  <Button variant="outline" size="sm" className="w-full border-navy text-navy hover:bg-navy/5">
                    <Download className="h-3 w-3 mr-2" />
                    Pobierz PDF
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-navy mb-8 text-center">Kontakt dla mediów</h2>
          <Card className="border border-border rounded-xl bg-background">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-5 w-5 text-navy" />
                <span className="font-semibold text-navy">pacjentmaprawo@proton.me</span>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Poczta:</strong> ProtonMail (bezpieczna komunikacja). Nie przesyłaj danych medycznych przez e-mail.</p>
                <p><strong>Czas odpowiedzi:</strong> zwykle 2–3 dni robocze</p>
                <p className="pt-2">
                  Możemy zorganizować rozmowę z prawnikiem konstytucyjnym lub ekspertem
                  medycyny integracyjnej współpracującym z platformą.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
