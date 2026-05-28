import type { Metadata } from 'next'
import { MethodPage } from '@/components/onkologia-integracyjna/method-page'
import { getMethodBySlug } from '@/lib/onkologia-integracyjna/methods'

const method = getMethodBySlug('kurkumina')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function MethodPageRoute() {
  return (
    <MethodPage
      method={method}
      what={<><p>Polifenol z korzenia kurkumy długiej (Curcuma longa). W formie standardowej ma <strong>bardzo niską biodostępność doustną</strong> (&lt; 1%) — dlatego stosuje się formy <strong>liposomalne, fosfolipidowe (Meriva), nano-dyspersyjne</strong> lub w kombinacji z piperyną (BioPerine), które zwiększają wchłanianie 5-20-krotnie.</p></>}
      howItWorks={<><p>Działanie wielokierunkowe — modulacja szlaków: <strong>NF-κB</strong> (zapalenie), <strong>STAT3</strong> (proliferacja), <strong>Wnt/β-katenina</strong>, indukcja apoptozy przez kaspazy. Mechanizm potwierdzony w licznych badaniach in vitro i na modelach zwierzęcych. Wartość kliniczna — głównie wsparcie chemioterapii i redukcja zapalenia, nie samodzielna terapia onkologiczna.</p></>}
      indications={<><ul><li>Szpiczak mnogi — Vadhan-Raj et al. 2007 (RCT II) wykazał redukcję markerów (CRP, NF-κB)</li><li>Rak jelita grubego (mCRC) — Howells et al. 2019 — kurkumina + FOLFOX bezpieczna, sygnał skuteczności</li><li>Redukcja zapalenia w trakcie chemioterapii</li><li>Wsparcie funkcji wątroby (badania pomocnicze)</li></ul></>}
      contraindications={<><p><strong>Interakcje lekowe:</strong></p><ul><li>Antykoagulanty (warfaryna) — ryzyko krwawień</li><li>Inhibitory CYP3A4 i CYP2C9 — wpływ na metabolizm leków</li><li>Inhibitory pompy protonowej (kurkumina może modulować pH żołądka)</li><li>Antykoagulanty + NLPZ — kumulacja efektu przeciwzakrzepowego</li></ul><p>Bezwzględne przeciwwskazanie: <strong>kamica żółciowa z niedrożnością</strong> (kurkumina pobudza skurcz pęcherzyka).</p></>}
      safety={<><p>Profil bezpieczeństwa dobry, ale wymagana ostrożność przy łączeniu z chemioterapią.</p><ul><li>Typowe (5-10%): nudności, biegunka, zgaga przy wysokich dawkach</li><li>Niezbyt częste: skurcze brzucha, wzdęcia</li><li>Wymaga przerwy 2-3 dni przed planowaną operacją (efekt przeciwzakrzepowy)</li></ul></>}
      howToTalkToDoctor={<><ul><li>Czy moje leczenie onkologiczne wyklucza kurkuminę?</li><li>Jaką formę kurkuminy Pan/Pani poleca (liposomalna, Meriva, nano)?</li><li>Jakie dawkowanie i przez jak długo?</li><li>Czy moje leki (sprawdź lista) wchodzą w interakcje?</li></ul></>}
    />
  )
}
