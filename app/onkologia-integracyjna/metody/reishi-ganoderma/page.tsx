import type { Metadata } from 'next'
import { MethodPage } from '@/components/onkologia-integracyjna/method-page'
import { getMethodBySlug } from '@/lib/onkologia-integracyjna/methods'
import { PMIDLink } from '@/components/onkologia-integracyjna/badges'

const method = getMethodBySlug('reishi-ganoderma')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function ReishiPage() {
  return (
    <MethodPage
      method={method}
      what={
        <>
          <p>
            <strong>Reishi</strong> (<em>Ganoderma lucidum</em>, chiński Lingzhi, japoński Reishi) to grzyb leczniczy
            stosowany w medycynie wschodnioazjatyckiej od ponad 2000 lat. W onkologii integracyjnej rozważany jako
            adjuwant immunostymulacyjny w skojarzeniu z chemio/RT.
          </p>
          <p>
            Aktywne związki: <strong>beta-glukany GLP</strong> (polisacharydy), <strong>triterpeny</strong>
            (kwasy ganodermowe), oraz frakcje GLP-1 z cytotoksycznymi działaniami in vitro.
          </p>
        </>
      }
      howItWorks={
        <>
          <p><strong>Mechanizmy działania:</strong></p>
          <ul>
            <li><strong>Beta-glukany</strong> — aktywują limfocyty Th1, makrofagi M1, komórki NK</li>
            <li><strong>Triterpeny (kwasy ganodermowe)</strong> — hamują NF-κB i proliferację komórek nowotworowych</li>
            <li><strong>Aktywność anti-CSC</strong> w modelach in vitro</li>
          </ul>
          <p>
            Cochrane Review 2016 (Jin et al., <PMIDLink pmid="27045603">PMID 27045603</PMIDLink>) zebrał
            5 RCT n=373: pacjenci z G. lucidum w skojarzeniu z chemio/RT mieli 1,50× częstsze odpowiedzi na leczenie
            (RR 1,50; 95% CI 0,90-2,51) oraz istotną poprawę CD3, CD4, CD8 i jakości życia. Brak danych na korzyść
            przeżycia długoterminowego; brak poważnych zdarzeń niepożądanych. Ograniczenia: mała próba, głównie
            populacja chińska.
          </p>
        </>
      }
      indications={
        <>
          <p><strong>Wskazania o sygnale dowodowym (GRADE: low):</strong></p>
          <ul>
            <li>Adjuwant immunostymulacyjny w skojarzeniu z chemio/RT</li>
            <li>Poprawa QoL podczas leczenia onkologicznego</li>
            <li>Wsparcie funkcji immunologicznej (CD3/CD4/CD8) podczas mielotoksycznych terapii</li>
          </ul>
          <p>
            <strong>Brak wpisu w NCCN, ASCO/SIO, ESMO, MASCC</strong> — nie jest formalnie rekomendowany jako adjuwant.
          </p>
        </>
      }
      contraindications={
        <>
          <p><strong>Bezwzględna ostrożność:</strong></p>
          <ul>
            <li><strong>Pacjenci po przeszczepie narządów</strong> — aktywacja NK i T-komórek może spowodować odrzucenie
            (brak danych klinicznych z jednoczesnym takrolimusem lub cyklosporyną)</li>
            <li><strong>Leczenie warfaryną</strong> — case reports trombocytopenii i potęgowania efektu antykoagulacyjnego</li>
            <li><strong>Hepatotoksyczność</strong> rzadko opisywana przy proszku z całych grzybów (nie ekstraktach)</li>
            <li><strong>Rak piersi ER+/PR+</strong> — niektóre frakcje wykazują aktywność estrogenową in vitro; wymaga dyskusji z onkologiem</li>
          </ul>
        </>
      }
      safety={
        <>
          <p>
            Ogólnie dobry profil bezpieczeństwa potwierdzony Cochrane. Standaryzacja preparatów krytyczna:
          </p>
          <ul>
            <li><strong>Ekstrakt wodny lub etanolowy</strong> — preferowany; standaryzacja na β-glukany lub triterpeny</li>
            <li><strong>Proszek surowy</strong> — gorsza biodostępność, ryzyko hepatotoksyczności</li>
            <li>W Polsce dostępne są suplementy zawierające standaryzowane ekstrakty Reishi (β-glukany i/lub triterpeny), jakość i zawartość deklarowana różnią się między produktami. Ta strona nie rekomenduje konkretnych marek ani preparatów.</li>
          </ul>
          <p>
            <strong>Interakcje CYP3A4:</strong> G. lucidum hamuje CYP3A4 in vitro, efekt kliniczny słabo udokumentowany —
            ostrożność przy lekach o wąskim indeksie terapeutycznym.
          </p>
        </>
      }
      howToTalkToDoctor={
        <>
          <p>
            Reishi może być rozważone jako wsparcie immunologiczne podczas chemio/RT. Materiały do rozmowy z onkologiem:
          </p>
          <ul>
            <li>Cochrane Review Jin 2016 (<PMIDLink pmid="27045603">PMID 27045603</PMIDLink>) — fundament dowodowy</li>
            <li>Standaryzowany ekstrakt (nie surowy proszek)</li>
            <li>Plan monitorowania: INR jeśli warfaryna, parametry wątrobowe</li>
            <li>Konsultacja z transplantologiem jeśli stan po przeszczepie</li>
          </ul>
        </>
      }
    />
  )
}
