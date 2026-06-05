import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'O bazie',
  description: 'Misja, polityka redakcyjna i zasady tworzenia bazy wiedzy o terapiach wspomagających.',
}

export default function OBaziePage() {
  return (
    <div className="prose prose-stone max-w-none dark:prose-invert space-y-6">
      <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">O bazie</h1>
      <p className="text-lg text-muted-foreground">Misja, polityka redakcyjna i zasady tworzenia bazy wiedzy EBM o onkologii integracyjnej.</p>

      <h2>Misja</h2>
      <p>
        Strona dostarcza pacjentom onkologicznym i ich rodzinom <strong>rzetelnych, zweryfikowanych
        informacji EBM</strong> o metodach onkologii integracyjnej — terapiach uzupełniających
        standardowe leczenie onkologiczne (chemioterapię, radioterapię, immunoterapię, chirurgię).
      </p>
      <p>Strona nie obiecuje wyleczenia, nie zastępuje lekarza, nie kwestionuje medycyny konwencjonalnej — uzupełnia ją o informacje, których pacjentowi systematycznie brakuje w polskim systemie opieki.</p>

      <h2>Czym strona NIE jest</h2>
      <ul>
        <li>Reklamą żadnej kliniki, lekarza, suplementu, produktu</li>
        <li>Obietnicą wyleczenia jakiejkolwiek choroby</li>
        <li>Zachętą do rezygnacji z leczenia konwencjonalnego</li>
        <li>Bazą medycyny alternatywnej (homeopatia, biorezonans — nie są przedmiotem tej strony)</li>
      </ul>

      <h2>Polityka redakcyjna</h2>
      <p>Każda metoda opisana w 9-sekcyjnym standardzie:</p>
      <ol>
        <li><strong>Co to jest</strong> — opis dla pacjenta</li>
        <li><strong>Mechanizm działania</strong></li>
        <li><strong>Dowody naukowe (EBM)</strong> — z PMID, GRADE, typem badania</li>
        <li><strong>Wskazania kliniczne</strong></li>
        <li><strong>Przeciwwskazania i interakcje</strong></li>
        <li><strong>Profil bezpieczeństwa</strong></li>
        <li><strong>Status regulacyjny</strong> w wybranych krajach UE</li>
        <li><strong>Jak rozmawiać z lekarzem</strong></li>
        <li><strong>Wszystkie źródła</strong> — pełna bibliografia</li>
      </ol>

      <h2>Zakaz słów</h2>
      <p>W treści podstron NIE używa się słów: „leczy", „wyleczy", „pokona raka", „cudowny", „przełomowy", „rewolucyjny". Stosujemy: „wspomaga", „uzupełnia", „w wybranych wskazaniach".</p>

      <h2>Niezależność finansowa</h2>
      <p>Redakcja nie przyjmuje finansowania od firm farmaceutycznych, producentów suplementów, klinik świadczących usługi CAM ani organizacji pacjenckich finansowanych przez te podmioty.</p>

      <h2>Kontakt</h2>
      <p>Zgłoszenia błędów lub aktualizacji oraz pytania kierować na adres koordynacji projektu pacjentmaprawo.pl: <a href="/kontakt">kontakt</a>.</p>
    </div>
  )
}
