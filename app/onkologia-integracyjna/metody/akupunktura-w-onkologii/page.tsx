import type { Metadata } from 'next'
import { MethodPage } from '@/components/onkologia-integracyjna/method-page'
import { getMethodBySlug } from '@/lib/onkologia-integracyjna/methods'

const method = getMethodBySlug('akupunktura-w-onkologii')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function MethodPageRoute() {
  return (
    <MethodPage
      method={method}
      what={<><p><strong>Klasyczna akupunktura ciała</strong> (igły wprowadzane w wybrane punkty) lub <strong>elektroakupunktura</strong> (igły połączone z prądem niskiej częstotliwości). W onkologii — najlepiej udokumentowana w leczeniu bólu, nudności po chemio i zmęczenia.</p><p><strong>ASCO/SIO Pain Management Guidelines 2022</strong> rekomendują akupunkturę dla wielu wskazań onkologicznych.</p></>}
      howItWorks={<><p>Mechanizmy częściowo poznane: <strong>regulacja autonomicznego układu nerwowego</strong>, uwalnianie endogennych opioidów (β-endorfiny, enkefaliny), modulacja serotoniny i noradrenaliny, redukcja zapalenia, regulacja osi HPA (podwzgórze-przysadka-nadnercze).</p></>}
      indications={<><ul><li><strong>Ból związany z inhibitorami aromatazy</strong> (AIMSS — Aromatase Inhibitor-induced Musculoskeletal Syndrome) — ASCO/SIO 2022, rekomendacja silna</li><li><strong>Nudności i wymioty po chemioterapii (CINV)</strong> — szczególnie elektroakupunktura punktu PC6</li><li>Zmęczenie związane z nowotworem (CRF)</li><li>Neuropatia obwodowa indukowana chemioterapią (CIPN)</li><li>Suche oczy/usta po radioterapii głowy i szyi</li><li>Lęk i bezsenność</li></ul></>}
      contraindications={<><ul><li>Względne: trombocytopenia &lt; 50 tys. (ryzyko krwawienia z miejsc nakłucia)</li><li>Względne: ciężka neutropenia (ryzyko zakażenia)</li><li>Względne: obrzęk limfatyczny — unikanie nakłuwania w kończynie z obrzękiem</li><li>Względne: implanty (stymulator, rozrusznik) — ostrożność z elektroakupunkturą</li><li>Bezwzględne: czynne zakażenie skóry w miejscu nakłucia</li></ul></>}
      safety={<><ul><li>Bardzo dobry profil bezpieczeństwa wykonywany przez wykwalifikowanego lekarza akupunkturzystę</li><li>Typowe: lekki ból przy nakłuciu, drobne siniaczki</li><li>Niezbyt częste: omdlenie wazowagalne (głównie pierwsze sesje)</li><li>Bardzo rzadkie: odma opłucnowa (niekompetentne nakłucie klatki piersiowej)</li><li>WAŻNE: jednorazowe sterylne igły, lekarz z certyfikatem</li></ul></>}
      howToTalkToDoctor={<><ul><li>Czy moje objawy (ból AI, CINV, CIPN) kwalifikują się do akupunktury?</li><li>Czy poleca Pan/Pani konkretnego lekarza-akupunkturzystę z doświadczeniem onkologicznym?</li><li>Czy moje parametry (płytki, neutrofile) pozwalają na zabieg?</li><li>Ile sesji jest zwykle potrzebnych?</li></ul></>}
    />
  )
}
