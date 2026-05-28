import type { Metadata } from 'next'
import { MethodPage } from '@/components/onkologia-integracyjna/method-page'
import { getMethodBySlug } from '@/lib/onkologia-integracyjna/methods'

const method = getMethodBySlug('witamina-d')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function MethodPageRoute() {
  return (
    <MethodPage
      method={method}
      what={<><p>Witamina rozpuszczalna w tłuszczach, syntetyzowana w skórze pod wpływem UV-B. <strong>Niedobór (25-OH-D &lt; 30 ng/ml)</strong> jest powszechny w Polsce, szczególnie u pacjentów onkologicznych i koreluje z gorszym rokowaniem w wielu typach nowotworów.</p><p>W onkologii integracyjnej kluczowe jest <strong>wyrównanie niedoboru</strong> (cel: 30-60 ng/ml 25-OH-D) — nie megadawki.</p></>}
      howItWorks={<><p>Witamina D działa jako <strong>hormon steroidowy</strong>: VDR (Vitamin D Receptor) jest obecny w większości komórek organizmu, w tym nowotworowych. Modulacja proliferacji, apoptozy, różnicowania komórek. Wpływ na odpowiedź immunologiczną (limfocyty T regulatorowe).</p></>}
      indications={<><ul><li>Suplementacja przy niedoborze 25-OH-D &lt; 30 ng/ml (standardowo)</li><li>VITAL Trial — redukcja śmiertelności onkologicznej w grupie z BMI normalnym</li><li>Keum et al. metaanaliza — redukcja śmiertelności o 13%</li><li>Wsparcie kości u pacjentek z rakiem piersi na hormonoterapii</li></ul></>}
      contraindications={<><ul><li>Hiperkalcemia (szczególnie w nowotworach z metastazami kostnymi)</li><li>Sarkoidoza, gruźlica (zwiększona konwersja do aktywnej formy)</li><li>Kamica nerkowa wapniowa</li><li>Pierwotna nadczynność przytarczyc</li></ul></>}
      safety={<><p>Bardzo dobry profil bezpieczeństwa przy dawkach do <strong>4000 IU/dobę</strong> (górny limit bezpieczny wg EFSA).</p><ul><li>Monitorowanie: 25-OH-D oraz wapń (Ca) co 3-6 miesięcy przy suplementacji wysokimi dawkami</li><li>Hiperkalcemia objawowa: osłabienie, polidypsja, polyuria, zaparcia, zaburzenia rytmu serca</li><li>Forma D3 (cholekalcyferol) lepiej wchłaniana niż D2</li><li>Najlepiej przyjmować z posiłkiem zawierającym tłuszcze</li></ul></>}
      howToTalkToDoctor={<><ul><li>Jaki jest mój aktualny poziom 25-OH-D?</li><li>Jaka dawka suplementacji w moim przypadku (zwykle 2000-5000 IU/dobę)?</li><li>Co kiedy mam metastazy kostne — czy nie ma ryzyka hiperkalcemii?</li><li>Czy łączyć z witaminą K2 (synergiczne wsparcie kości)?</li></ul></>}
    />
  )
}
