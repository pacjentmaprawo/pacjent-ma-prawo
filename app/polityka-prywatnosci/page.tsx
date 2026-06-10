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
          <p className="text-lg text-muted-foreground">Ostatnia aktualizacja: 10 czerwca 2026 r.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">1. Administrator danych</h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Administratorem danych osobowych przetwarzanych w związku z korzystaniem z platformy
            pacjentmaprawo.pl jest <strong>inicjatywa obywatelska Pacjent Ma Prawo</strong>.
            Kontakt z administratorem: <a href="mailto:kontakt@pacjentmaprawo.pl" className="text-teal underline">kontakt@pacjentmaprawo.pl</a>.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">2. Jakie dane zbieramy</h2>
          <p className="text-navy/80 leading-relaxed mb-2">Przetwarzamy wyłącznie dane, które dobrowolnie podasz:</p>
          <ul className="list-disc pl-6 text-navy/80 mb-6 space-y-1">
            <li>Formularz kontaktowy: imię (opcjonalne), adres e-mail (wymagany), treść wiadomości.</li>
            <li>
              Narzędzie „Wyślij apel ws. UD207”: <strong>co do zasady nie zbieramy żadnych danych</strong> —
              pisma powstają w Twojej przeglądarce, a wiadomość wysyłasz samodzielnie z własnego programu
              pocztowego. Wyjątkiem jest dobrowolna, domyślnie wyłączona opcja przesłania nam kopii (BCC) —
              opisana w sekcji „Narzędzie »Wyślij apel«” poniżej.
            </li>
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
            — wyłącznie w celu udokumentowania poparcia apelu, na podstawie zgody (art. 6 ust. 1 lit. a RODO).
          </p>

          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">5. Odbiorcy danych</h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Dane mogą być przetwarzane przez dostawców usług technicznych niezbędnych do działania platformy,
            komunikacji i obsługi petycji — w szczególności dostawcę hostingu (Vercel), poczty elektronicznej
            (dostawca szyfrowanej poczty na terenie UE) oraz platformy petycyjnej. Dane nie są sprzedawane ani udostępniane
            komercyjnie.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
            Narzędzie „Wyślij apel ws. UD207” — szczegóły
          </h2>
          <p className="text-navy/80 leading-relaxed mb-2">
            Narzędzie na stronie <em>/petycja-ud207</em> przygotowuje gotowe pisma i otwiera je w Twoim
            programie pocztowym. Działa w całości w przeglądarce: nie zakładamy konta, nie zapisujemy
            adresatów, treści ani Twoich danych na naszych serwerach, nie wysyłamy niczego w Twoim imieniu.
          </p>
          <p className="text-navy/80 leading-relaxed mb-2">
            <strong>Dobrowolna kopia do nas (opcja BCC).</strong> Jeżeli — i tylko jeżeli — zaznaczysz
            opcję „Prześlij nam też kopię”, adres <a href="mailto:pacjentmaprawo@proton.me" className="text-teal underline">pacjentmaprawo@proton.me</a>{' '}
            zostanie dodany do ukrytej kopii (BCC) wysyłanej przez Ciebie wiadomości. W takim przypadku:
          </p>
          <ul className="list-disc pl-6 text-navy/80 mb-3 space-y-1">
            <li><strong>Cel:</strong> wyłącznie statystyka i koordynacja kampanii obywatelskiej ws. UD207.</li>
            <li><strong>Zakres danych:</strong> Twój adres e-mail (jako nadawcy) oraz treść wysłanej wiadomości.</li>
            <li><strong>Podstawa prawna:</strong> Twoja zgoda wyrażona zaznaczeniem opcji (art. 6 ust. 1 lit. a RODO).</li>
            <li><strong>Okres przechowywania:</strong> do zakończenia procesu legislacyjnego nad UD207, nie dłużej niż 12 miesięcy,