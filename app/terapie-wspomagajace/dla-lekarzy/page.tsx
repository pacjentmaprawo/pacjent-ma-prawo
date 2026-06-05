import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dla lekarzy',
  description: 'Zasady protokolarnego włączenia metod CAM w opiece onkologicznej: dokumentacja, KOI, świadoma zgoda, standardy ICMJE/EFPIA.',
}

export default function DlaLekarzyPage() {
  return (
    <div className="prose prose-stone max-w-none dark:prose-invert space-y-6">
      <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">Dla lekarzy</h1>
      <p className="text-lg text-muted-foreground">Zasady protokolarnego włączenia metod CAM w opiece onkologicznej.</p>

      <h2>1. Standardy międzynarodowe</h2>
      <ul>
        <li><strong>ASCO/SIO</strong> — Pain 2022 (Mao JJ et al.), Anxiety/Depression 2023 (Carlson LE et al.), Fatigue 2024 (Bower JE et al.)</li>
        <li><strong>ASCO</strong> — Cannabis and Cannabinoids in Adults With Cancer 2024 (Braun IM et al., PMID 38478773): klinicyści powinni odradzać stosowanie cannabis/kannabinoidów jako leczenia przeciwnowotworowego poza badaniem klinicznym</li>
        <li><strong>MASCC/ISOO</strong> — Mucositis 2020 (Elad S et al.)</li>
        <li><strong>ESMO</strong> — Clinical Practice Guidelines (supportive/survivorship, zależnie od wskazania)</li>
        <li><strong>NCCN</strong> — Distress Management / Survivorship / Supportive Care (zależnie od wersji)</li>
        <li><strong>ICMJE Recommendations</strong> — standardy ujawniania KOI (36 miesięcy)</li>
        <li><strong>EFPIA Code</strong> — Code of Practice on the Promotion of Prescription-Only Medicines</li>
        <li><strong>Sunshine Act</strong> (USA) — wzorzec transparentności płatności od pharma</li>
        <li><strong>NICE Guidelines</strong> — UK referencja dla terapii uzupełniających</li>
      </ul>

      <h2>2. Konflikt interesów (KOI)</h2>
      <p>Lekarz prowadzący terapie uzupełniające powinien ujawnić pacjentowi:</p>
      <ul>
        <li>Finansowanie pharmaceutyczne (granty, stypendia, doradztwo) z 36 miesięcy</li>
        <li>Powiązania z dostawcami suplementów lub sprzętu</li>
        <li>Udział w programach refundacyjnych</li>
        <li>Wynagrodzenia z konferencji branżowych</li>
      </ul>
      <p>Wzór deklaracji KOI: zob. <a href="https://www.icmje.org/disclosure-of-interest/" target="_blank" rel="noopener noreferrer">ICMJE Disclosure Form</a>.</p>

      <h2>3. Świadoma zgoda — wymagane elementy</h2>
      <ol>
        <li>Diagnoza i stadium choroby</li>
        <li>Cel terapii uzupełniającej (NIE zastępczy)</li>
        <li>Stan dowodów EBM (PMID, GRADE) — co najmniej 3 kluczowe publikacje</li>
        <li>Mechanizm działania</li>
        <li>Wszystkie działania niepożądane z częstością</li>
        <li>Interakcje z aktualnym leczeniem</li>
        <li>Monitorowanie (badania krwi, obrazowanie)</li>
        <li>Koszty (jeśli pozarefundowane)</li>
        <li>Alternatywy</li>
        <li>Prawo do wycofania zgody w każdym momencie</li>
      </ol>

      <h2>4. Dokumentacja</h2>
      <p>Pełna dokumentacja obejmuje:</p>
      <ul>
        <li>Pisemna świadoma zgoda (podpisana, datowana, 2 egzemplarze)</li>
        <li>Protokół leczenia (dawki, częstość, czas trwania)</li>
        <li>Wyniki badań przed włączeniem (G6PD dla IVC, ferrytyna dla artesunatu, 25-OH-D dla witaminy D)</li>
        <li>Lista wszystkich leków i suplementów pacjenta</li>
        <li>Karta monitorowania (wizyty, parametry, działania niepożądane)</li>
        <li>Komunikacja z onkologiem prowadzącym (zgoda na włączenie metody)</li>
      </ul>

      <h2>5. Wzorcowe wytyczne</h2>
      <ul>
        <li><strong>NICE Guidelines</strong> (UK) — <a href="https://www.nice.org.uk/guidance" target="_blank" rel="noopener noreferrer">nice.org.uk/guidance</a></li>
        <li><strong>HAS</strong> (Francja) — <a href="https://www.has-sante.fr/" target="_blank" rel="noopener noreferrer">has-sante.fr</a></li>
        <li><strong>G-BA</strong> (Niemcy) — <a href="https://www.g-ba.de/" target="_blank" rel="noopener noreferrer">g-ba.de</a></li>
        <li><strong>SIO</strong> (Society for Integrative Oncology) — <a href="https://integrativeonc.org/" target="_blank" rel="noopener noreferrer">integrativeonc.org</a></li>
      </ul>

      <h2>6. Konsultacja z onkologiem prowadzącym</h2>
      <p>Lekarz włączający terapię uzupełniającą powinien przed rozpoczęciem:</p>
      <ul>
        <li>Skonsultować się z onkologiem prowadzącym (mail, telekonferencja, dokumentacja)</li>
        <li>Uzyskać potwierdzenie braku interakcji z aktualnym schematem leczenia</li>
        <li>Zapewnić, że terapia uzupełniająca nie spowoduje opóźnienia/rezygnacji z leczenia konwencjonalnego</li>
        <li>Włączyć onkologa w plan monitorowania</li>
      </ul>
    </div>
  )
}
