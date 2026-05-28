import type { Metadata } from 'next'
import { MethodPage } from '@/components/onkologia-integracyjna/method-page'
import { getMethodBySlug } from '@/lib/onkologia-integracyjna/methods'
import { PMIDLink } from '@/components/onkologia-integracyjna/badges'

const method = getMethodBySlug('inhalacje-wodorowe-h2')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function H2InhalacjePage() {
  return (
    <MethodPage
      method={method}
      what={
        <>
          <p>
            <strong>Inhalacje wodorowe (H₂ Gas Inhalation)</strong> to terapia polegająca na wdychaniu mieszanki gazów
            zawierającej cząsteczkowy wodór — najczęściej <strong>66% H₂ + 33% O₂</strong> (oxyhydrogen) lub
            2-3% H₂ w powietrzu. Mechanizm: H₂ jako <strong>selektywny scavenger toksycznych ROS</strong>
            (•OH, ONOO⁻) — odkryty przez Ohno et al. 2007 (<em>Nature Medicine</em>).
          </p>
          <p>
            W onkologii integracyjnej badania kliniczne ostatnich 5 lat wskazują na <strong>redukcję toksyczności
            radioterapii</strong> i chemioterapii, przy <strong>braku interferencji z efektem antynowotworowym</strong>
            (RECIST bez różnicy w RCT).
          </p>
        </>
      }
      howItWorks={
        <>
          <p><strong>Mechanizmy działania:</strong></p>
          <ul>
            <li><strong>Selektywna neutralizacja •OH i ONOO⁻</strong> — najbardziej destrukcyjnych rodników</li>
            <li><strong>Zachowanie ROS sygnalizacyjnych</strong> potrzebnych do działania immunologicznego</li>
            <li>Modulacja szlaków <strong>NF-κB, PI3K/Akt, MAPK</strong></li>
            <li>Działanie <strong>przeciwzapalne, antyoksydacyjne</strong>; potencjalnie pro-apoptotyczne wobec komórek nowotworowych</li>
            <li>Gaz inhalowany osiąga stężenie terapeutyczne we krwi w 2h — <strong>100× skuteczniej niż woda wodorowa</strong></li>
          </ul>
          <p>
            Kluczowy paradoks rozwiązany przez Liu 2025 (<PMIDLink pmid="41020280">PMID 41020280</PMIDLink>)
            i Chitapanarux 2024 (<PMIDLink pmid="39493677">PMID 39493677</PMIDLink>): mimo że radioterapia
            zabija komórki nowotworowe przez ROS, H₂ neutralizuje selektywnie najbardziej toksyczne rodniki
            (•OH, ONOO⁻) — i w obu RCT <strong>nie wykazał interferencji z efektem antynowotworowym</strong>
            (RECIST bez różnicy między grupą H₂ a kontrolą).
          </p>
        </>
      }
      indications={
        <>
          <p><strong>Najsilniejsze wskazania kliniczne (GRADE: low):</strong></p>
          <ul>
            <li><strong>Redukcja toksyczności radioterapii</strong> — zapalenie jelit (Liu 2025), mucositis i ototoksyczność
            (Chitapanarux 2024)</li>
            <li><strong>Zmęczenie onkologiczne (CRF)</strong> podczas chemio/immunoterapii (Chen 2020, NSCLC)</li>
            <li><strong>Ochrona narządów</strong> (nerki, wątroba, serce) podczas chemio</li>
          </ul>
          <p>
            <strong>Najwyższy status regulacyjny na świecie:</strong> Japonia, <strong>Advanced Medical Care B</strong>
            (Klasa 2B) od grudnia 2016 — zatwierdzony przez MHLW (jRCTs031180352).
          </p>
        </>
      }
      contraindications={
        <>
          <p><strong>Ostrożność:</strong></p>
          <ul>
            <li><strong>POChP / ciężka obturacja</strong> — ostrożność z przepływem gazu przez kaniulę</li>
            <li><strong>Brak danych w ciąży</strong></li>
            <li><strong>Stężenia powyżej 4% H₂ są łatwopalne</strong> — urządzenia medyczne stosują bezpieczne &lt;3%; ryzyko tylko przy nieszczelnościach</li>
          </ul>
          <p><strong>WAŻNE — paradoks pro/anty oksydacja:</strong></p>
          <ul>
            <li>H₂ to <strong>klasyczny antyoksydant</strong> w fazach regeneracji</li>
            <li>NIE łączyć w tym samym dniu z fazami pro-ROS w protokołach integracyjnych (artesunat IV, witC IV wysokie dawki) jeśli celem jest indukcja ferroptozy</li>
            <li>Selektywność H₂ (•OH, ONOO⁻) — w RCT brak interferencji z RT/chemio, ale w protokołach z artesunatem mechanizm pożądany jest właśnie peroksydacja lipidów Fe²⁺-zależna</li>
          </ul>
        </>
      }
      safety={
        <>
          <p>
            <strong>Najlepszy profil bezpieczeństwa spośród wszystkich metod na tej stronie.</strong>
            We wszystkich opublikowanych badaniach klinicznych: brak poważnych zdarzeń niepożądanych związanych z H₂.
            Chitapanarux 2024: 100% compliance, 330 sesji bez NZD. Liu 2025: ↓ CRP, NLR, IL-6, łagodniejsze zapalenie jelit.
          </p>
          <p><strong>Jakość urządzenia krytyczna:</strong></p>
          <ul>
            <li>Wymóg: <strong>CE jako wyrób medyczny klasy I lub IIa</strong>, nie "wellness"</li>
            <li>Stężenie: ≥66% H₂ + 33% O₂ (oxyhydrogen) lub 2-3% H₂ w powietrzu</li>
            <li>Przepływ: 250–3000 mL/min — duże różnice między urządzeniami domowymi a klinicznymi</li>
            <li>Czas sesji: 2-4h dziennie według protokołów RCT</li>
          </ul>
          <p>
            <strong>Interakcje z lekami:</strong> brak udokumentowanych interakcji CYP450.
            Brak interakcji z immunoterapią — w Chen 2020 (NSCLC) H₂ działał synergistycznie z immunoterapią.
          </p>
        </>
      }
      howToTalkToDoctor={
        <>
          <p>
            Inhalacje wodorowe mogą być rozważone jako <strong>wsparcie supportive care podczas radioterapii</strong>
            (zwłaszcza w guzach głowy/szyi, raku szyjki macicy). Argumenty do rozmowy z onkologiem/radioterapeutą:
          </p>
          <ul>
            <li>RCT Liu 2025 (<PMIDLink pmid="41020280">PMID 41020280</PMIDLink>) — rak szyjki + CCRT, n=58</li>
            <li>Pilot RCT Chitapanarux 2024 (<PMIDLink pmid="39493677">PMID 39493677</PMIDLink>) — LAHNC, n=10</li>
            <li>Systematic review Zufayri Mohd Noor 2023 (<PMIDLink pmid="36708550">PMID 36708550</PMIDLink>) — 27 badań</li>
            <li>Precedens regulacyjny: Japonia MHLW Advanced Medical Care B 2016</li>
            <li>W obu RCT — brak interferencji z efektem antynowotworowym RT (RECIST bez różnicy)</li>
          </ul>
          <p>
            <strong>Uwaga w debacie publicznej:</strong> „tlenoterapia dożylna" z listy NRL Nr 2/21/VIII to inna metoda
            (gaz dożylny, nie inhalowany) — nie myllić z inhalacjami H₂, które nie figurują na liście NRL.
          </p>
        </>
      }
    />
  )
}
