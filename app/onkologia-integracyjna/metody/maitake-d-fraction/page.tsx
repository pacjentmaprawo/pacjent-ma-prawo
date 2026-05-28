import type { Metadata } from 'next'
import { MethodPage } from '@/components/onkologia-integracyjna/method-page'
import { getMethodBySlug } from '@/lib/onkologia-integracyjna/methods'
import { PMIDLink } from '@/components/onkologia-integracyjna/badges'

const method = getMethodBySlug('maitake-d-fraction')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function MaitakePage() {
  return (
    <MethodPage
      method={method}
      what={
        <>
          <p>
            <strong>Maitake</strong> (<em>Grifola frondosa</em>) to grzyb leczniczy o tradycji medycznej w Japonii
            i Chinach. Aktywny składnik onkologiczny to <strong>D-fraction</strong> — specyficzny
            β-1,6/1,3-glukan opracowany przez prof. Hiroaki Nanba (Kobe Pharmaceutical University).
          </p>
          <p>
            D-fraction nie należy mylić z surowym proszkiem z maitake — to wystandaryzowany ekstrakt
            polisacharydowy z deklarowaną aktywnością immunomodulacyjną.
          </p>
        </>
      }
      howItWorks={
        <>
          <p><strong>Mechanizmy działania:</strong></p>
          <ul>
            <li><strong>Wiązanie Dectin-1</strong> na makrofagach, komórkach dendrytycznych i NK</li>
            <li><strong>ADCC</strong> (Antibody-Dependent Cell-mediated Cytotoxicity) — wzmocnienie odpowiedzi cytotoksycznej</li>
            <li><strong>Redukcja MDSCs</strong> (Myeloid-Derived Suppressor Cells) — hamowanie immunosupresyjnego
            mikrośrodowiska guza</li>
            <li><strong>MD-fraction</strong> — pochodna z dodatkowym sygnałem pro-apoptotycznym</li>
          </ul>
          <p>
            Pilotaż Kodama 2003 (<PMIDLink pmid="14977447">PMID 14977447</PMIDLink>, n=10) wykazał wzrost
            aktywności NK u wszystkich pacjentów oraz redukcję markerów nowotworowych. Faza I/II Deng 2009
            w raku piersi (PMC3751581, n=34) potwierdziła immunostymulację (CD3+↑) z paradoksalną redukcją CD25+.
          </p>
        </>
      }
      indications={
        <>
          <p><strong>Wskazania o sygnale dowodowym (GRADE: low):</strong></p>
          <ul>
            <li>Immunostymulacja podczas mielotoksycznej chemio</li>
            <li>Wsparcie aktywności NK podczas leczenia onkologicznego</li>
            <li>Badania fazy I/II w raku piersi (Deng 2009)</li>
          </ul>
          <p>
            <strong>Brak formalnych wytycznych</strong> NCCN/ASCO/SIO/ESMO/MASCC. Wśród beta-glukanów
            najsilniejszy sygnał kliniczny w onkologii ma <strong>PSK/lentinan</strong> (Japonia, refundowany dla raka żołądka),
            nie D-fraction maitake.
          </p>
        </>
      }
      contraindications={
        <>
          <p><strong>Ostrożność:</strong></p>
          <ul>
            <li><strong>Transplantacja narządów</strong> — analogicznie jak Reishi (aktywacja NK/T)</li>
            <li><strong>Choroby autoimmunologiczne</strong></li>
            <li><strong>Cukrzyca + chemio</strong> — potencjalne działanie hipoglikemiczne</li>
            <li><strong>Brak danych w ciąży</strong></li>
          </ul>
        </>
      }
      safety={
        <>
          <p>
            Profil bezpieczeństwa Maitake D-fraction w opublikowanych badaniach jest dobry,
            ale baza dowodowa znacznie skromniejsza niż dla Reishi.
          </p>
          <p><strong>Standaryzacja krytyczna:</strong></p>
          <ul>
            <li><strong>D-fraction</strong> (Nanba) / <strong>MD-fraction</strong> — wystandaryzowane ekstrakty
            z deklarowaną zawartością aktywnego β-glukanu</li>
            <li>Preparaty <strong>Nanba/Yukiguni Maitake</strong> — najbardziej referencyjne w literaturze</li>
            <li><strong>Surowy proszek z maitake ≠ D-fraction</strong> — efekt znacząco słabszy</li>
          </ul>
        </>
      }
      howToTalkToDoctor={
        <>
          <p>
            Maitake D-fraction można rozważyć jako wsparcie immunologiczne podczas chemio. Materiały do dyskusji z onkologiem:
          </p>
          <ul>
            <li>Kodama 2003 (<PMIDLink pmid="14977447">PMID 14977447</PMIDLink>) — pilotaż n=10</li>
            <li>Deng 2009 (PMC3751581) — faza I/II rak piersi n=34</li>
            <li>Synergia z witaminą C (PMC2840554) — dane in vitro/in vivo</li>
            <li>Konkretny preparat: D-fraction (Nanba) lub MD-fraction</li>
          </ul>
          <p>
            <strong>Nie traktuj jako terapii zastępczej</strong> — to wyłącznie wsparcie immunologiczne adjuwantowe.
          </p>
        </>
      }
    />
  )
}
