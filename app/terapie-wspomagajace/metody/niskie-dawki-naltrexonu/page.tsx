import type { Metadata } from 'next'
import { MethodPage } from '@/components/terapie-wspomagajace/method-page'
import { getMethodBySlug } from '@/lib/terapie-wspomagajace/methods'

const method = getMethodBySlug('niskie-dawki-naltrexonu')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function MethodPageRoute() {
  return (
    <MethodPage
      method={method}
      what={<><p><strong>Naltrekson</strong> jest antagonist opioidowy zarejestrowany dla leczenia uzależnień (od opioidów i alkoholu) w dawkach 50-100 mg/dobę. <strong>Niskie dawki naltrekson (LDN)</strong> to stosowanie tego samego leku w dawkach 1,5-4,5 mg/dobę — wieczorem. W onkologii stosowane off-label, eksperymentalnie.</p></>}
      howItWorks={<><p>Mechanizm: krótka blokada receptorów opioidowych nocą <strong>indukuje paradoksalne podniesienie endogennej produkcji enkefalin i β-endorfin</strong> w ciągu dnia. Modulacja TLR-4 (Toll-Like Receptor 4) prowadzi do redukcji zapalenia. Wpływ na limfocyty T regulatorowe i komórki NK.</p></>}
      indications={<><ul><li>Badania eksperymentalne w różnych typach nowotworów</li><li>Wsparcie funkcji immunologicznej</li><li>Modulacja zapalenia w chorobach autoimmunologicznych (oddzielnie udokumentowane: MS, choroba Crohna, RZS)</li><li>Brak twardych dowodów III fazy w onkologii</li></ul></>}
      contraindications={<><ul><li><strong>Aktywne leczenie opioidami</strong> przeciwbólowymi (LDN znosi działanie opioidów)</li><li>Pacjenci po przeszczepie narządu (immunomodulacja)</li><li>Stosowanie agonistów opioidowych w jakiejkolwiek formie</li><li>Ciąża i karmienie piersią</li></ul></>}
      safety={<><ul><li>Typowe: bezsenność (paradoksalna, mimo dawki wieczornej), żywe sny, nudności</li><li>Niezbyt częste: bóle głowy, niepokój, biegunka</li><li>Dawkowanie: start od 1,5 mg, eskalacja co 1-2 tygodnie do max 4,5 mg/dobę wieczorem</li><li>Recepta na off-label — wybrane apteki recepturowe</li><li>Nie powinien być stosowany jako monoterapia onkologiczna</li></ul></>}
      howToTalkToDoctor={<><ul><li>Czy nie stosuję żadnych leków opioidowych (przeciwbólowych)?</li><li>Czy ma Pan/Pani doświadczenie z LDN?</li><li>Jakie są realistyczne oczekiwania (brak gwarancji efektu w onkologii)?</li><li>Czy istnieje apteka recepturowa, która przygotuje LDN?</li></ul></>}
    />
  )
}
