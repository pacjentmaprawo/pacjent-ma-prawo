import type { Metadata } from 'next'
import { MethodPage } from '@/components/terapie-wspomagajace/method-page'
import { getMethodBySlug } from '@/lib/terapie-wspomagajace/methods'

const method = getMethodBySlug('terapia-fotodynamiczna')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function MethodPageRoute() {
  return (
    <MethodPage
      method={method}
      what={<><p>Połączenie podanego <strong>fotouczulacza</strong> (najczęściej porfimer sodowy — Photofrin) z napromieniowaniem światłem laserowym o określonej długości fali. Fotouczulacz gromadzi się w komórkach nowotworowych, światło uruchamia reakcję cytotoksyczną.</p></>}
      howItWorks={<><p>Aktywowany światłem fotouczulacz generuje <strong>tlen singletowy</strong> i inne reaktywne formy tlenu (ROS), które uszkadzają komórki nowotworowe. Selektywność wynika z preferencyjnego pobierania fotouczulacza przez komórki nowotworowe oraz precyzyjnego naświetlania tylko obszaru zmiany.</p></>}
      indications={<><ul><li><strong>Wczesny rak przełyku</strong> (FDA approved)</li><li><strong>Przełyk Barretta z dysplazją wysokiego stopnia</strong> (eliminacja dysplazji)</li><li>Rak płaskonabłonkowy płuca (wczesny)</li><li>Rak podstawnokomórkowy skóry (powierzchowny)</li><li>Keratoza słoneczna</li><li>Chłoniak skórno-T-komórkowy (CTCL)</li></ul></>}
      contraindications={<><ul><li><strong>Porfiria</strong> i inne zaburzenia metabolizmu porfiryn (bezwzględne)</li><li>Nadwrażliwość na porfimer</li><li>Ciężkie zaburzenia czynności wątroby</li><li>Zaawansowane nowotwory naciekające duże naczynia</li></ul></>}
      safety={<><ul><li><strong>Nadwrażliwość na światło przez 4-6 tygodni</strong> po podaniu fotouczulacza — pacjent musi unikać silnego światła słonecznego i bezpośredniego oświetlenia</li><li>Typowe: kaszel, krótkotrwała duszność (po PDT płuc)</li><li>Niezbyt częste: zwężenia (np. przełyku) wymagające endoskopowego rozszerzenia</li><li>Procedura wykonywana w ośrodkach onkologicznych z doświadczeniem (kilka w PL)</li></ul></>}
      howToTalkToDoctor={<><ul><li>Czy moja zmiana nadaje się do PDT (lokalizacja, stadium)?</li><li>Gdzie najbliżej można uzyskać dostęp do PDT z porfimerem?</li><li>Jakie są alternatywy w moim przypadku (chirurgia, radioterapia)?</li><li>Jak długo będzie wymagana ochrona przed światłem po zabiegu?</li></ul></>}
    />
  )
}
