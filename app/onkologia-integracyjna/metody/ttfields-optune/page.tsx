import type { Metadata } from 'next'
import { MethodPage } from '@/components/onkologia-integracyjna/method-page'
import { getMethodBySlug } from '@/lib/onkologia-integracyjna/methods'

const method = getMethodBySlug('ttfields-optune')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function MethodPageRoute() {
  return (
    <MethodPage
      method={method}
      what={<><p>System <strong>Optune</strong> generuje naprzemienne pole elektryczne o niskiej intensywności i częstotliwości ~200 kHz. Pole zakłóca podział komórek nowotworowych przez interferencję z mikrotubulami i kompleksem wrzeciona mitotycznego. Aplikacja przez 4 zestawy elektrod (transducer arrays) umieszczanych na ogolonej skórze głowy.</p></>}
      howItWorks={<><p>Pacjent nosi urządzenie <strong>min. 18 godzin na dobę</strong> przez wiele miesięcy. Mechanizm fizyczny (nie chemiczny) — nie wchodzi w interakcje lekowe z chemioterapią.</p></>}
      indications={<><ul><li><strong>Glejak wielopostaciowy (GBM) nowo zdiagnozowany</strong> — w połączeniu z temozolomidem; EF-14 RCT wykazał OS 20,9 vs 16,0 mies. (HR 0,63)</li><li>GBM nawrotowy (FDA approval 2011)</li><li>Międzybłoniak opłucnej nieoperacyjny (FDA approval 2019)</li><li>Badania w toku: rak płuca, rak trzustki, wątroby</li></ul></>}
      contraindications={<><ul><li>Implanty czaszkowe (np. głębokie elektrody, klipsy, shunty)</li><li>Aktywne implanty elektroniczne w obszarze pola (rozrusznik, ICD)</li><li>Wrażliwość na żele przewodzące</li><li>Otwarte rany skóry głowy uniemożliwiające aplikację elektrod</li></ul></>}
      safety={<><ul><li><strong>Typowe (50-60%): podrażnienia skóry pod elektrodami</strong> (zaczerwienienie, świąd) — wymaga rotacji miejsc aplikacji</li><li>Niezbyt częste: ciepło, mrowienie pod elektrodami</li><li>Rzadkie: konwulsje (w przypadku GBM raczej skutek choroby niż urządzenia)</li><li>W PL dostępne komercyjnie (Novocure), <strong>nie refundowane przez NFZ</strong> — koszt ok. 20 000 EUR/miesiąc</li><li>W Niemczech refundacja przez wybrane Krankenkassen</li></ul></>}
      howToTalkToDoctor={<><ul><li>Czy moja diagnoza (GBM, mezothelioma) kwalifikuje mnie do TTFields?</li><li>Czy mogę uzyskać dostęp do urządzenia w Polsce (Novocure)?</li><li>Czy są dostępne programy wsparcia finansowego dla pacjentów?</li><li>Jakie są realistyczne oczekiwania co do efektu w moim przypadku?</li></ul></>}
    />
  )
}
