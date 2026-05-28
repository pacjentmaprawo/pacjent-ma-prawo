import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dla pacjentów',
  description: 'Praktyczny przewodnik dla pacjentów onkologicznych: jak rozmawiać z lekarzem o onkologii integracyjnej, świadoma zgoda, kalkulator kosztów.',
}

export default function DlaPacjentowPage() {
  return (
    <div className="prose prose-stone max-w-none dark:prose-invert space-y-6">
      <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">Dla pacjentów</h1>
      <p className="text-lg text-muted-foreground">Praktyczny przewodnik: jak rozmawiać z lekarzem o terapiach uzupełniających.</p>

      <h2>1. Przygotowanie do rozmowy z onkologiem</h2>
      <ol>
        <li><strong>Wydrukuj abstraktów publikacji EBM</strong> dotyczących metody którą rozważasz (każda metoda na tej stronie ma listę PMID — kliknij i pobierz)</li>
        <li><strong>Zapisz wszystkie leki</strong> które przyjmujesz — w tym suplementy, zioła, OTC</li>
        <li><strong>Sprawdź wyniki badań</strong> które mogą być potrzebne (np. G6PD przed IVC, 25-OH-D dla witaminy D, ferrytyna dla artesunatu)</li>
        <li>Przygotuj <strong>3-5 konkretnych pytań</strong> — nie ogólnych „czy mogę"</li>
        <li><strong>Idź z osobą towarzyszącą</strong> — pomoże zapamiętać odpowiedzi</li>
      </ol>

      <h2>2. Wzór pytań do lekarza</h2>
      <p>Konkretne pytania (lepsze niż ogólne):</p>
      <ul>
        <li>„Czy moja diagnoza i obecne leczenie wykluczają stosowanie [konkretna metoda]?"</li>
        <li>„Czy widzi Pan/Pani potencjalne interakcje z moim aktualnym leczeniem?"</li>
        <li>„Jakie badania powinienem wykonać przed rozpoczęciem?"</li>
        <li>„Jak będziemy monitorować ewentualne efekty i bezpieczeństwo?"</li>
        <li>„Czy zna Pan/Pani specjalistę z doświadczeniem w tej metodzie, do którego mógłby/mogłaby Pan/Pani mnie skierować?"</li>
      </ul>

      <h2>3. Świadoma zgoda — co powinno być w dokumencie</h2>
      <p>Każda terapia uzupełniająca powinna być poprzedzona <strong>pisemną świadomą zgodą</strong> zawierającą:</p>
      <ol>
        <li>Cel terapii (UZUPEŁNIAJĄCA, nie zastępująca)</li>
        <li>Stan dowodów EBM (np. GRADE moderate)</li>
        <li>Brak gwarancji efektu klinicznego</li>
        <li>Wszystkie działania niepożądane i ich częstość</li>
        <li>Koszty (jeśli pozarefundowane)</li>
        <li>Możliwość wycofania zgody w każdym momencie</li>
      </ol>

      <h2>4. Kiedy NIE warto stosować terapii uzupełniającej</h2>
      <ul>
        <li>Gdy lekarz wyraźnie wskazuje interakcję (np. bortezomib + IVC)</li>
        <li>Gdy chcesz ZASTĄPIĆ leczenie konwencjonalne (CAM jest uzupełnieniem, NIE zastępstwem)</li>
        <li>Gdy klinika obiecuje „wyleczenie" (rzetelni lekarze nigdy nie obiecują wyleczenia)</li>
        <li>Gdy nie ma dokumentacji (badania krwi, dawki, monitorowania)</li>
        <li>Gdy lekarz nie ujawnia konfliktów interesów</li>
      </ul>

      <h2>5. Kalkulator kosztów leczenia zagranicznego</h2>
      <p>Jeśli rozważasz leczenie integracyjne za granicą (Niemcy, Szwajcaria, Austria), typowe koszty roczne:</p>
      <table>
        <thead><tr><th>Pozycja</th><th>Koszt roczny</th></tr></thead>
        <tbody>
          <tr><td>Wlewy IVC (24 sesje/rok)</td><td>15 500 – 31 000 zł</td></tr>
          <tr><td>Konsultacje lekarza CAM (4-6/rok)</td><td>5 000 – 9 000 zł</td></tr>
          <tr><td>Transport (8 podróży)</td><td>4 000 – 12 000 zł</td></tr>
          <tr><td>Zakwaterowanie</td><td>5 000 – 10 000 zł</td></tr>
          <tr><td>Tłumacz medyczny + dokumenty</td><td>1 500 – 3 000 zł</td></tr>
          <tr><td>Utracone zarobki (4-8 dni urlopu)</td><td>5 000 – 15 000 zł</td></tr>
          <tr><td><strong>RAZEM rocznie</strong></td><td><strong>36 000 – 80 000 zł</strong></td></tr>
        </tbody>
      </table>

      <h2>6. Pamiętaj</h2>
      <ul>
        <li>Onkologia integracyjna NIE zastępuje standardowego leczenia</li>
        <li>Każda metoda ma swoje wskazania i przeciwwskazania</li>
        <li>Lekarz prowadzący onkologię MUSI wiedzieć o wszystkim co stosujesz</li>
        <li>Rzetelni świadczeniodawcy chętnie odpowiadają na pytania o EBM i KOI</li>
        <li>Jeśli ktoś unika konkretnych odpowiedzi — to sygnał ostrzegawczy</li>
      </ul>
    </div>
  )
}
