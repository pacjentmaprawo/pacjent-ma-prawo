import type { Metadata } from 'next'
import { MethodPage } from '@/components/terapie-wspomagajace/method-page'
import { getMethodBySlug } from '@/lib/terapie-wspomagajace/methods'

const method = getMethodBySlug('artesunat-off-label')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function MethodPageRoute() {
  return (
    <MethodPage
      method={method}
      what={<><p>Lek przeciwmalaryczny zarejestrowany w UE i USA dla <strong>ciężkiej malarii</strong> (Plasmodium falciparum, postać dożylna). W onkologii stosowany <strong>off-label</strong> na podstawie art. 5 ust. 1 dyrektywy 2001/83/WE — w protokołach indywidualnej terapii pacjenta.</p></>}
      howItWorks={<><p>Mechanizm prooksydacyjny <strong>zależny od żelaza</strong>: artesunat reaguje z wewnątrzkomórkowym żelazem (które gromadzi się w komórkach nowotworowych) generując wolne rodniki, które uszkadzają komórki nowotworowe. Aktywność proporcjonalna do zawartości żelaza w komórce.</p></>}
      indications={<><ul><li>Eksperymentalnie: <strong>rak jelita grubego</strong> — Krishna et al. 2014 (pilot study, sygnał skuteczności)</li><li>Eksperymentalnie: rak piersi, prostaty (badania I/II fazy)</li><li>Nigdy nie powinien być stosowany jako MONOTERAPIA onkologiczna</li><li>Wymaga oceny gospodarki żelazem (ferrytyna, transferyna)</li></ul></>}
      contraindications={<><ul><li>Ciąża (możliwe efekty teratogenne)</li><li>Nadwrażliwość na artemizyniny</li><li>Bardzo niska ferrytyna (brak żelaza = brak efektu)</li><li>Hemochromatoza (nadmiar żelaza = ryzyko nadmiernej toksyczności)</li><li>Niewydolność wątroby średnio-ciężka</li></ul></>}
      safety={<><ul><li>Typowe: nudności, wymioty, bóle głowy, zwiększenie enzymów wątrobowych</li><li>Niezbyt częste: anemia hemolityczna opóźniona (po 1-2 tygodniach od podania)</li><li>Rzadkie: reakcje alergiczne</li><li>Wymaga monitorowania: morfologia, enzymy wątrobowe, ferrytyna</li><li>BRAK dowodów III fazy w onkologii — leczenie ZAWSZE eksperymentalne</li></ul></>}
      howToTalkToDoctor={<><ul><li>Czy są jakiekolwiek badania kliniczne artesunat w moim typie nowotworu, do których mogę dołączyć?</li><li>Jakie są realistyczne oczekiwania (brak gwarancji efektu)?</li><li>Jakie monitorowanie jest wymagane?</li><li>Czy zna Pan/Pani onkologa stosującego artesunat off-label w protokole indywidualnym?</li></ul></>}
    />
  )
}
