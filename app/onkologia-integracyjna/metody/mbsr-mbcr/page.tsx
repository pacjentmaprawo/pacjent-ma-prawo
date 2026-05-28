import type { Metadata } from 'next'
import { MethodPage } from '@/components/onkologia-integracyjna/method-page'
import { getMethodBySlug } from '@/lib/onkologia-integracyjna/methods'

const method = getMethodBySlug('mbsr-mbcr')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function MethodPageRoute() {
  return (
    <MethodPage
      method={method}
      what={<><p><strong>MBSR (Mindfulness-Based Stress Reduction)</strong> — 8-tygodniowy program treningu uważności rozwinięty w 1979 r. przez Jona Kabat-Zinna (University of Massachusetts). Składa się z medytacji, jogi, body-scan i edukacji o stresie.</p><p><strong>MBCR (Mindfulness-Based Cancer Recovery)</strong> — adaptacja MBSR dla pacjentów onkologicznych, opracowana przez Linda Carlson (University of Calgary). Standard psychoonkologii w wielu krajach.</p></>}
      howItWorks={<><p>Mechanizm: <strong>regulacja osi HPA</strong> (obniżenie kortyzolu), aktywacja przywspółczulnego układu nerwowego (vagal tone), <strong>zmiany strukturalne w mózgu</strong> (większa istota szara w hipokampie i korze przedczołowej), poprawa funkcji immunologicznych. Carlson 2014 — wpływ na długość telomerów u pacjentek po raku piersi.</p></>}
      indications={<><ul><li><strong>Lęk i depresja związane z onkologią</strong> — ASCO/SIO Anxiety Guidelines 2023, rekomendacja silna</li><li>Bezsenność i zaburzenia snu</li><li>Zmęczenie związane z nowotworem (CRF)</li><li>Strach przed nawrotem choroby (FCR)</li><li>Wsparcie partnerów/opiekunów pacjentów</li><li>Redukcja chronicznego stresu</li></ul></>}
      contraindications={<><ul><li>Względne: aktywna psychoza, ciężka depresja z myślami samobójczymi (najpierw stabilizacja farmakologiczna)</li><li>Względne: ostre PTSD nieleczone (możliwe wyzwolenie traumatycznych wspomnień)</li><li>Względne: pacjent w hospicjum przedterminalny — preferowane krótsze interwencje</li></ul></>}
      safety={<><ul><li>Bardzo bezpieczna interwencja niefarmakologiczna</li><li>Niezbyt częste: czasowe zaostrzenie objawów lękowych na początku (proces "wpływu początkowego")</li><li>Wymaga regularnej praktyki — krytyczne dla efektu (min. 20-30 min dziennie)</li><li>Programy w PL: certyfikowani instruktorzy MBSR (Polskie Centrum Mindfulness)</li><li>Aplikacje wspierające: Insight Timer, Headspace (darmowe + płatne)</li></ul></>}
      howToTalkToDoctor={<><ul><li>Czy mogę otrzymać skierowanie do psychoonkologa?</li><li>Czy są w mojej okolicy programy MBSR/MBCR (NFZ lub komercyjne)?</li><li>Czy lokalna grupa wsparcia pacjentów oferuje element mindfulness?</li><li>Jak łączyć MBSR z moim leczeniem farmakologicznym (np. lekiem przeciwlękowym)?</li></ul></>}
    />
  )
}
