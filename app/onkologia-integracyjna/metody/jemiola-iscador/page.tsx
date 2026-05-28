import type { Metadata } from 'next'
import { MethodPage } from '@/components/onkologia-integracyjna/method-page'
import { getMethodBySlug } from '@/lib/onkologia-integracyjna/methods'

const method = getMethodBySlug('jemiola-iscador')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function MethodPageRoute() {
  return (
    <MethodPage
      method={method}
      what={<><p>Wyciągi z jemioły pospolitej (Viscum album) podawane podskórnie lub dożylnie. Najczęściej stosowane preparaty: Iscador (Weleda), Helixor, Abnoba viscum. Dostępne w różnych wariantach gospodarza (jabłoń, sosna, jodła, dąb) o nieco odmiennym profilu lecytyn.</p><p>Metoda <strong>refundowana w Szwajcarii</strong> (KVG od 2017) i <strong>w wybranych wskazaniach paliatywnych w Niemczech</strong> (GKV).</p></>}
      howItWorks={<><p>Lecytyny i wiskotoksyny z jemioły działają <strong>immunomodulacyjnie</strong> — pobudzają komórki NK, makrofagi, wydzielanie cytokin (IL-6, TNF-α). Część badań wykazuje też działanie cytotoksyczne in vitro w komórkach nowotworowych.</p><p>W kontekście klinicznym najlepiej udokumentowanym efektem jest <strong>poprawa jakości życia (QoL)</strong>, redukcja zmęczenia związanego z nowotworem (CRF) i działań niepożądanych chemioterapii.</p></>}
      indications={<><ul><li>Poprawa jakości życia w trakcie chemioterapii/radioterapii</li><li>Opieka paliatywna — redukcja zmęczenia, bólu, niepokoju</li><li>Wsparcie immunologiczne (kohortowe + RCT)</li><li>Rak trzustki — Tröger et al. 2014 wykazał wydłużenie OS w grupie Iscador</li></ul></>}
      contraindications={<><ul><li>Względne: choroby autoimmunologiczne aktywne</li><li>Względne: leczenie immunosupresyjne (np. przeszczep)</li><li>Aktywne infekcje, gorączka powyżej 38°C</li><li>Pierwsze wstrzyknięcie ZAWSZE w gabinecie lekarskim (test tolerancji)</li></ul></>}
      safety={<><p>Profil bezpieczeństwa bardzo dobry — Ostermann et al. 2020 wykazał niskie ryzyko poważnych działań niepożądanych.</p><ul><li>Typowe: lokalna reakcja w miejscu wstrzyknięcia (rumień, lekka gorączka) — <strong>jest to oczekiwany efekt fizjologiczny</strong>, nie alergia</li><li>Niezbyt częste: gorączka ogólna do 38,5°C (24-48h po dawce)</li><li>Rzadkie: reakcje alergiczne (anafilaksja &lt; 0,1%)</li></ul></>}
      howToTalkToDoctor={<><ul><li>Czy zna Pan/Pani protokoły iniekcji Iscador / Helixor / Abnoba?</li><li>Jakie dawkowanie i częstość poleca Pan/Pani w moim wskazaniu?</li><li>Czy współpracuje Pan/Pani z lekarzem antropozoficznym?</li><li>Czy istnieje ryzyko interakcji z moim leczeniem onkologicznym?</li></ul></>}
    />
  )
}
