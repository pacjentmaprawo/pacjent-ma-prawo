import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Polityka prywatności',
  description: 'Polityka prywatności platformy Pacjent Ma Prawo — informacje o przetwarzaniu danych osobowych.',
}

export default function PolitykaPrywatnosciPage() {
  return (
    <div>
      <section className="hero-gradient py-12 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-amber tracking-wider uppercase mb-3">RODO i prywatność</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-4">Polityka prywatności</h1>
          <p className="text-lg text-muted-foreground">Ostatnia aktualizacja: 18 maja 2026 r.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">1. Administrator danych</h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Administratorem danych osobowych przetwarzanych w związku z korzystaniem z platformy
            pacjentmaprawo.pl jest <strong>inicjatywa obywatelska Pacjent Ma Prawo</strong>.
            Kontakt z administratorem: <a href="mailto:pacjentmaprawo@proton.me" className="text-teal underline">pacjentmaprawo@proton.me</a>.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">2. Jakie dane zbieramy</h2>
          <p className="text-navy/80 leading-relaxed mb-2">Przetwarzamy wyłącznie dane, które dobrowolnie podasz:</p>
          <ul className="list-disc pl-6 text-navy/80 mb-6 space-y-1">
            <li>Formularz kontaktowy: imię (opcjonalne), adres e-mail (wymagany), treść wiadomości.</li>
            <li>Formularz petycji (gdy zostanie zintegrowany z OpenPetition.pl): imię i nazwisko, e-mail, miejscowość (opcjonalna).</li>
          </ul>

          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">3. Cel i podstawa prawna przetwarzania</h2>
          <p className="text-navy/80 leading-relaxed mb-2">Dane przetwarzamy na podstawie art. 6 ust. 1 lit. a RODO (zgoda) oraz art. 6 ust. 1 lit. f (uzasadniony interes — odpowiedź na zapytanie). Cel:</p>
          <ul className="list-disc pl-6 text-navy/80 mb-6 space-y-1">
            <li>Odpowiedź na zapytanie przesłane formularzem kontaktowym.</li>
            <li>Rejestracja podpisu pod apelem obywatelskim (po integracji z platformą petycyjną).</li>
          </ul>

          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">4. Okres przechowywania danych</h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Wiadomości z formularza kontaktowego przechowujemy przez okres niezbędny do udzielenia odpowiedzi
            i przez 12 miesięcy później (dla ewentualnych pytań uzupełniających). Dane z petycji
            — zgodnie z polityką platformy OpenPetition.pl.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">5. Odbiorcy danych</h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Dane mogą być przetwarzane przez dostawców usług technicznych niezbędnych do działania platformy,
            komunikacji i obsługi petycji — w szczególności dostawcę hostingu (Vercel), poczty elektronicznej
            (ProtonMail) oraz planowanej platformy petycyjnej. Dane nie są sprzedawane ani udostępniane
            komercyjnie.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">6. Twoje prawa</h2>
          <p className="text-navy/80 leading-relaxed mb-2">Masz prawo do:</p>
          <ul className="list-disc pl-6 text-navy/80 mb-6 space-y-1">
            <li>dostępu do swoich danych (art. 15 RODO)</li>
            <li>sprostowania danych (art. 16 RODO)</li>
            <li>usunięcia danych — „prawo do bycia zapomnianym" (art. 17 RODO)</li>
            <li>ograniczenia przetwarzania (art. 18 RODO)</li>
            <li>przenoszenia danych (art. 20 RODO)</li>
            <li>sprzeciwu wobec przetwarzania (art. 21 RODO)</li>
            <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO, ul. Stawki 2, 00-193 Warszawa)</li>
          </ul>
          <p className="text-navy/80 leading-relaxed mb-6">
            Aby zrealizować dowolne z tych praw, wyślij wiadomość na <a href="mailto:pacjentmaprawo@proton.me" className="text-teal underline">pacjentmaprawo@proton.me</a>.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">7. Cookies i analytics</h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Platforma korzysta z usług hostingowych Vercel. Vercel może zbierać podstawowe metryki techniczne
            (czas ładowania strony, błędy). Nie używamy plików cookies do śledzenia użytkowników ani narzędzi
            analitycznych typu Google Analytics, Meta Pixel itp.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">8. Zmiany polityki</h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Zastrzegamy sobie prawo do aktualizacji niniejszej polityki. Aktualna wersja jest zawsze dostępna na tej stronie. Data ostatniej aktualizacji widnieje u góry dokumentu.
          </p>
        </div>
      </section>
    </div>
  )
}
