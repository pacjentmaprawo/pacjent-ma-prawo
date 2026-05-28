import type { Metadata } from 'next'
import { MethodPage } from '@/components/onkologia-integracyjna/method-page'
import { getMethodBySlug } from '@/lib/onkologia-integracyjna/methods'

const method = getMethodBySlug('glutamina')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function MethodPageRoute() {
  return (
    <MethodPage
      method={method}
      what={<><p>Aminokwas warunkowo niezbędny — najpowszechniejszy aminokwas w osoczu. Podstawowe paliwo dla <strong>enterocytów (komórek nabłonka jelita)</strong> i limfocytów. W onkologii — wsparcie błon śluzowych i regeneracja tkanek po chemio/radio.</p></>}
      howItWorks={<><p>Glutamina jest <strong>warunkowo niezbędna</strong> w stresie metabolicznym (chemioterapia, operacja, zakażenie). Wzrasta zapotrzebowanie, a synteza endogenna nie wystarcza. Bez suplementacji — atrofia kosmków jelitowych, immunosupresja, zwiększona przepuszczalność jelitowa ("leaky gut").</p></>}
      indications={<><div className="mb-4 rounded-md border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900"><strong>Ważne:</strong> Status glutaminy jest silnie zależny od populacji pacjentów, drogi podania (doustna vs parenteralna) i wskazania. Nie istnieje jedna ogólna rekomendacja „za glutaminą". Pacjenci HSCT (przeszczep komórek macierzystych) mają REKOMENDACJĘ PRZECIWKO parenteralnej glutaminie wg MASCC/ISOO 2020.</div><ul><li>Mucositis po chemioterapii (5-FU, doksorubicyna, metotreksat)</li><li>Mucositis po radioterapii głowy i szyi, miednicy</li><li>Biegunka popromienna</li><li>Redukcja neuropatii po oksaliplatynie (Vahdat 2001)</li><li>ASCO/MASCC/ISOO Mucositis Guidelines 2020 — rekomendacja warunkowa</li></ul></>}
      contraindications={<><ul><li>Niewydolność wątroby (encefalopatia wątrobowa)</li><li>Ciężka niewydolność nerek</li><li>Niektóre kontrowersje — czy glutamina nie "karmi" niektórych nowotworów (badania mieszane)</li></ul></>}
      safety={<><ul><li>Typowe: dobrze tolerowana, rzadko nudności</li><li>Dawkowanie: 10-30 g/dobę w 2-3 dawkach, najczęściej w postaci proszku rozpuszczanego w wodzie</li><li>L-glutamina (forma wolna) — lepsza biodostępność niż glutamina dipeptydowa</li><li>Przyjmować z 250-500 ml wody, na pusty żołądek</li></ul></>}
      howToTalkToDoctor={<><ul><li>Czy glutamina jest bezpieczna w moim typie nowotworu?</li><li>Jaka dawka w profilaktyce/leczeniu mucositis?</li><li>Kiedy zacząć (przed chemio czy po pojawieniu się objawów)?</li><li>Czy poleca Pan/Pani konkretny preparat?</li></ul></>}
    />
  )
}
