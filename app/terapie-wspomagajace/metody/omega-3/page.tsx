import type { Metadata } from 'next'
import { MethodPage } from '@/components/terapie-wspomagajace/method-page'
import { getMethodBySlug } from '@/lib/terapie-wspomagajace/methods'

const method = getMethodBySlug('omega-3')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function MethodPageRoute() {
  return (
    <MethodPage
      method={method}
      what={<><p>Wielonienasycone kwasy tłuszczowe omega-3: <strong>EPA</strong> (eikozapentaenowy) i <strong>DHA</strong> (dokozaheksaenowy). W onkologii — głównie ze względu na działanie przeciwzapalne, wsparcie funkcji błon komórkowych i zachowanie masy mięśniowej w kacheksji.</p></>}
      howItWorks={<><p>Modulacja produkcji <strong>prostaglandyn i leukotrienów</strong> — redukcja przewlekłego stanu zapalnego (TNF-α, IL-6, CRP). Wpływ na resolwiny i protektyny — mediatory rozwiązania stanu zapalnego.</p></>}
      indications={<><ul><li>Kacheksja nowotworowa — Mocellin et al. 2016 metaanaliza wykazała stabilizację masy ciała</li><li>NSCLC — utrzymanie masy mięśniowej podczas chemioterapii (Werner 2017)</li><li>Redukcja CRP i IL-6 (markery zapalenia)</li><li>Wsparcie funkcji poznawczych (chemobrain)</li></ul></>}
      contraindications={<><ul><li>Antykoagulanty (warfaryna, NOAC) — wydłużenie czasu krwawienia</li><li>Podwyższone trójglicerydy (paradoksalnie u niektórych pacjentów)</li><li>Alergia na ryby/skorupiaki (zależnie od źródła)</li><li>Operacja planowana — odstawić 7 dni wcześniej</li></ul></>}
      safety={<><ul><li>Typowe: posmak rybi, odbijanie, lekkie biegunki przy wysokich dawkach (&gt; 3 g/d)</li><li>Wybór preparatu: <strong>oczyszczone z metali ciężkich</strong> (rtęć, PCB) — certyfikat IFOS lub GOED</li><li>Optymalne dawki w onkologii: 2-3 g EPA+DHA dziennie</li><li>Najlepiej z posiłkiem (tłuszcze poprawiają wchłanianie)</li></ul></>}
      howToTalkToDoctor={<><ul><li>Jaka dawka EPA+DHA w moim przypadku?</li><li>Czy mam podwyższone CRP — czy to wskazanie do większej dawki?</li><li>Czy moje leki przeciwzakrzepowe wykluczają omega-3?</li><li>Jakie preparaty Pan/Pani poleca (jakość, certyfikaty)?</li></ul></>}
    />
  )
}
