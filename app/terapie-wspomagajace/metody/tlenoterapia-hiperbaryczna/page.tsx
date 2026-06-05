import type { Metadata } from 'next'
import { MethodPage } from '@/components/terapie-wspomagajace/method-page'
import { getMethodBySlug } from '@/lib/terapie-wspomagajace/methods'

const method = getMethodBySlug('tlenoterapia-hiperbaryczna')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function MethodPageRoute() {
  return (
    <MethodPage
      method={method}
      what={<><p>Oddychanie <strong>100% tlenem pod ciśnieniem 2-3 ATA</strong> (atmosfer absolutnych) w komorze hiperbarycznej. Sesja trwa zwykle 60-120 minut, kuracja 20-40 sesji. W onkologii — leczenie <strong>późnych uszkodzeń popromiennych</strong>.</p></>}
      howItWorks={<><p>Podwyższone ciśnienie zwiększa rozpuszczalność tlenu w osoczu (efekt fizyczny). Wynikowa hiperoksja: <strong>stymulacja neowaskularyzacji</strong> (rozrost nowych naczyń krwionośnych), aktywacja fibroblastów, wzrost gradientu tlenowego do niedotlenionych tkanek po radioterapii.</p></>}
      indications={<><ul><li><strong>Osteoradionekroza szczęki/żuchwy</strong> po radioterapii głowy i szyi</li><li><strong>Krwiomocz popromieniowy</strong> (cystitis hemorrhagica) po radioterapii miednicy</li><li>Zapalenie odbytnicy popromienne (proctitis)</li><li>Martwica tkanek miękkich popromienna</li><li>UHMS — 14 wskazań klinicznych</li></ul></>}
      contraindications={<><ul><li><strong>Nieleczona odma opłucnowa</strong> (bezwzględne)</li><li>Doxorubicyna w ostatnich 24h (potencjalna kardiotoksyczność)</li><li>Bleomycyna kiedykolwiek w wywiadzie (ryzyko zwłóknienia płuc)</li><li>Cisplatyna w ostatnich 24h</li><li>Mafenide acetate (środek przeciwbakteryjny)</li><li>Ciężka klaustrofobia (komora jednostanowiskowa)</li></ul></>}
      safety={<><ul><li>Typowe (5-10%): barotrauma ucha środkowego (ból ucha podczas zmian ciśnienia)</li><li>Niezbyt częste: krótkowzroczność przejściowa, klaustrofobia</li><li>Rzadkie: konwulsje tlenowe (&lt; 0,01%)</li><li>NFZ refunduje w PL — wybrane wskazania</li><li>Komora wielostanowiskowa zwykle lepiej tolerowana niż jednostanowiskowa</li></ul></>}
      howToTalkToDoctor={<><ul><li>Czy moje uszkodzenia popromienne kwalifikują się do HBOT?</li><li>Czy ośrodek HBOT w mojej okolicy ma refundację NFZ?</li><li>Czy moje leki onkologiczne nie wykluczają HBOT (bleomycyna, doxorubicyna)?</li><li>Ile sesji przewiduje się w moim przypadku?</li></ul></>}
    />
  )
}
