import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Regulamin',
  description: 'Regulamin korzystania z platformy Pacjent Ma Prawo.',
}

export default function RegulaminPage() {
  return (
    <div>
      <section className="hero-gradient py-12 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-amber tracking-wider uppercase mb-3">Zasady korzystania</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-4">Regulamin</h1>
          <p className="text-lg text-muted-foreground">Ostatnia aktualizacja: 18 maja 2026 r.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">§1. Postanowienia ogólne</h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Platforma pacjentmaprawo.pl jest niekomercyjną inicjatywą obywatelską prowadzoną w celu informowania
            opinii publicznej o projekcie ustawy UD207 (potocznie określanym jako „lex szarlatan"), prawach pacjenta
            i medycynie integracyjnej. Korzystanie z platformy jest bezpłatne.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">§2. Charakter informacyjny</h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Wszystkie materiały na platformie mają wyłącznie charakter informacyjny. <strong>Nie stanowią
            porady medycznej ani prawnej.</strong> W sprawach zdrowotnych skonsultuj się z lekarzem,
            w sprawach prawnych z profesjonalnym pełnomocnikiem.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">§3. Prawa autorskie i licencje</h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Własne opracowania pakietu obywatelskiego (analizy konstytucyjne, memoranda, brief medialny)
            są dostępne na licencji <strong>CC-BY 4.0</strong> — można je kopiować, udostępniać i adaptować
            pod warunkiem podania źródła. Dokumenty osób trzecich (orzeczenia, dokumenty WHO/UE, opracowania naukowe)
            podlegają swoim własnym licencjom — sprawdź każdy dokument przed dalszą dystrybucją.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">§4. Odpowiedzialność</h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Dokładamy starań, aby informacje na platformie były rzetelne i aktualne, jednak nie ponosimy
            odpowiedzialności za skutki ich wykorzystania. Platforma nie reprezentuje stanowiska żadnej
            partii politycznej ani organizacji komercyjnej.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">§5. Korzystanie z formularzy</h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Wypełniając formularz kontaktowy lub petycyjny, zobowiązujesz się do podawania prawdziwych
            danych. Zabronione jest przesyłanie treści naruszających prawo, nawołujących do nienawiści
            lub naruszających dobra osobiste osób trzecich.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">§6. Kontakt</h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Pytania i uwagi dotyczące regulaminu prosimy kierować na adres:
            <a href="mailto:pacjentmaprawo@proton.me" className="text-teal underline ml-1">pacjentmaprawo@proton.me</a>.
          </p>
        </div>
      </section>
    </div>
  )
}
