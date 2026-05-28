import type { Metadata } from 'next'
import { MethodPage } from '@/components/onkologia-integracyjna/method-page'
import { getMethodBySlug } from '@/lib/onkologia-integracyjna/methods'

const method = getMethodBySlug('melatonina')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function MethodPageRoute() {
  return (
    <MethodPage
      method={method}
      what={<><p>Hormon szyszynki regulujący cykl dobowy. W onkologii stosowana w dawkach <strong>3-20 mg/dobę wieczorem</strong>, znacznie wyższych niż "dawka snu" (1-3 mg). Działanie antyoksydacyjne, immunomodulacyjne i (potencjalnie) bezpośrednio cytotoksyczne.</p></>}
      howItWorks={<><p>Mechanizm wielokierunkowy: <strong>regulacja MT1/MT2</strong> (receptory melatoniny), modulacja apoptozy, hamowanie aromatazy (istotne w raku piersi ER+), wsparcie układu odpornościowego.</p><p>W kontekście onkologii integracyjnej — kluczowe znaczenie ma <strong>regulacja snu, redukcja lęku i fatigue</strong> związanych z nowotworem i jego leczeniem.</p></>}
      indications={<><ul><li>Zaburzenia snu i regulacja rytmu dobowego u pacjentów onkologicznych (główne wskazanie supportive)</li><li>Sleep-circadian adjunct podczas chemio/radioterapii</li><li>Redukcja toksyczności chemio — metaanaliza Seely 2012 i Wang 2012 (sygnał obserwacyjny)</li><li><strong>WAŻNE:</strong> melatonina NIE figuruje jako rekomendacja ASCO/SIO Anxiety and Depression Guidelines 2023 (Carlson et al.). Status: supportive / sleep-circadian adjunct, NIE leczenie lęku/depresji.</li></ul></>}
      contraindications={<><ul><li>Choroby autoimmunologiczne aktywne (melatonina nasila aktywność układu odpornościowego)</li><li>Stan po przeszczepie narządu (immunosupresja)</li><li>Padaczka (rzadkie doniesienia o obniżeniu progu drgawkowego)</li><li>Ciąża i karmienie piersią (brak danych bezpieczeństwa)</li></ul></>}
      safety={<><ul><li>Typowe: senność rano (przy zbyt dużej dawce), bóle głowy, żywe sny</li><li>Niezbyt częste: spadek ciśnienia, niepokój paradoksalny</li><li>Interakcje: leki immunosupresyjne, antykoagulanty, leki przeciwdrgawkowe</li><li>Najlepiej przyjmować <strong>30-60 min przed snem</strong>, przy zgaszonym świetle</li></ul></>}
      howToTalkToDoctor={<><ul><li>Czy melatonina jest bezpieczna w moim leczeniu onkologicznym?</li><li>Jaka dawka jest optymalna dla mojego problemu (sen / lęk / wsparcie chemio)?</li><li>O której godzinie przyjmować i jak długo?</li><li>Czy moje leki (sprawdź lista) wchodzą w interakcje?</li></ul></>}
    />
  )
}
