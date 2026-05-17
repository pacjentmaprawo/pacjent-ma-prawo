import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nota prawna',
  description: 'Nota prawna platformy Pacjent Ma Prawo.',
}

export default function NotaPrawnaPage() {
  return (
    <div>
      <section className="hero-gradient py-12 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-amber tracking-wider uppercase mb-3">Disclaimer</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-4">Nota prawna</h1>
          <p className="text-lg text-muted-foreground">Ostatnia aktualizacja: 18 maja 2026 r.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">Charakter inicjatywy</h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Pacjent Ma Prawo to <strong>obywatelska inicjatywa informacyjna</strong>. Nie jest podmiotem
            leczniczym, kancelarią prawną ani organizacją polityczną. Inicjatywa nie pobiera opłat
            od użytkowników i nie świadczy odpłatnych usług.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">Brak porady medycznej</h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Żadna informacja na platformie nie stanowi porady medycznej. Nie zachęcamy do rezygnacji
            z leczenia zgodnego z aktualną wiedzą medyczną. W sprawach swojego zdrowia skonsultuj się
            z lekarzem.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">Brak porady prawnej</h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Analizy konstytucyjne i prawne na platformie mają charakter informacyjny i edukacyjny.
            Nie zastępują porady udzielonej przez profesjonalnego pełnomocnika (adwokata lub radcę prawnego).
          </p>

          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">Bezstronność polityczna</h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Platforma nie reprezentuje stanowiska żadnej partii politycznej. Krytyka projektu UD207
            ma charakter merytoryczny — dotyczy zakresu, precyzji i proporcjonalności proponowanych
            rozwiązań prawnych, a nie celu projektu (ochrona pacjentów przed oszustwem medycznym),
            który uznajemy za słuszny.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">Brak ataków personalnych</h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Nie formułujemy zarzutów personalnych wobec konkretnych osób bez oparcia w publicznych
            źródłach (oficjalne dokumenty, deklaracje konfliktów interesów w publikacjach naukowych,
            BIP, orzeczenia sądowe). Domagamy się jawności procesu legislacyjnego — nie wskazujemy
            winnych.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">Źródła</h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Wszystkie informacje na platformie pochodzą ze źródeł publicznych: oficjalnych dokumentów
            rządowych (rcl.gov.pl, gov.pl, sejm.gov.pl), orzecznictwa (sn.pl, orzeczenia.nsa.gov.pl),
            dokumentów międzynarodowych (apps.who.int, eeas.europa.eu), recenzowanych publikacji naukowych
            (PubMed, medRxiv). Pełna lista źródeł dostępna w sekcji <a href="/dokumenty" className="text-teal underline">/dokumenty</a>.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">Kontakt prawny</h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            W sprawach formalnych dotyczących treści platformy — np. zastrzeżeń, sprostowań, wniosków
            prasowych — prosimy o kontakt na <a href="mailto:pacjentmaprawo@proton.me" className="text-teal underline">pacjentmaprawo@proton.me</a>.
            Czas reakcji: do 7 dni roboczych.
          </p>
        </div>
      </section>
    </div>
  )
}
