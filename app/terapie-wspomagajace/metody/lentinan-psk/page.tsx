import type { Metadata } from 'next'
import { MethodPage } from '@/components/terapie-wspomagajace/method-page'
import { getMethodBySlug } from '@/lib/terapie-wspomagajace/methods'

const method = getMethodBySlug('lentinan-psk')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function MethodPageRoute() {
  return (
    <MethodPage
      method={method}
      what={<><p><strong>Lentinan</strong> — polisacharyd β-D-glukan z grzyba Shiitake (Lentinula edodes). <strong>PSK (Krestin)</strong> — białko-polisacharyd z Trametes versicolor (turkey tail). W Japonii — refundowane jako leki uzupełniające do chemioterapii w wybranych nowotworach od lat 80.</p></>}
      howItWorks={<><p>Mechanizm immunomodulacyjny: <strong>aktywacja receptorów Dectin-1 i CR3</strong> na makrofagach, pobudzenie limfocytów T helper, zwiększenie aktywności komórek NK, modulacja cytokin (IL-2, IFN-γ). Działanie głównie pośrednie — przez układ odpornościowy, nie bezpośrednio cytotoksyczne.</p></>}
      indications={<><ul><li><strong>Rak żołądka w Japonii</strong> — PSK jako adjuvant chemio (Oba 2009 metaanaliza wykazała wydłużenie OS)</li><li>Rak jelita grubego (Japonia)</li><li>Wsparcie immunologiczne podczas chemioterapii</li><li>Eksperymentalnie: rak piersi, płuca</li></ul></>}
      contraindications={<><ul><li><strong>Choroby autoimmunologiczne</strong> aktywne (RZS, toczeń, MS)</li><li>Stan po przeszczepie narządu (immunosupresja)</li><li>Alergia na grzyby</li><li>Ciąża i karmienie piersią (brak danych)</li></ul></>}
      safety={<><ul><li>Typowe: lekkie dolegliwości żołądkowo-jelitowe (nudności, biegunka)</li><li>Niezbyt częste: reakcje alergiczne</li><li>Dawkowanie w badaniach klinicznych: PSK 3 g/dobę, Lentinan 2-4 mg podskórnie 1-2 razy/tydzień</li><li>W UE — głównie jako suplementy diety; w Japonii — leki refundowane</li><li>Jakość preparatów MOCNO ZRÓŻNICOWANA — wymaga ostrożnego wyboru</li></ul></>}
      howToTalkToDoctor={<><ul><li>Czy w moim typie nowotworu są dane EBM dla lentinan/PSK?</li><li>Czy moje leczenie immunoterapią koliduje z tą metodą?</li><li>Jaki preparat poleca Pan/Pani (jakość, certyfikat)?</li><li>Jak monitorować ewentualne korzyści?</li></ul></>}
    />
  )
}
