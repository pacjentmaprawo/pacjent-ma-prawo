import type { Metadata } from 'next'
import { MethodPage } from '@/components/onkologia-integracyjna/method-page'
import { getMethodBySlug } from '@/lib/onkologia-integracyjna/methods'

const method = getMethodBySlug('aktywnosc-fizyczna-w-onkologii')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function MethodPageRoute() {
  return (
    <MethodPage
      method={method}
      what={<><p>Regularny <strong>wysiłek aerobowy</strong> (chodzenie, pływanie, nordic walking) i <strong>trening oporowy</strong> (ćwiczenia z obciążeniem, gumami). Zalecenie ogólne: <strong>150-300 minut tygodniowo</strong> umiarkowanego wysiłku aerobowego + 2 sesje treningu oporowego.</p><p>Najmocniej udokumentowana metoda onkologii integracyjnej — <strong>GRADE high</strong> w wytycznych Bower JE et al. 2024 — Management of Fatigue in Adult Survivors of Cancer: ASCO–Society for Integrative Oncology Guideline Update (PMID 38754041).</p></>}
      howItWorks={<><p>Wielokierunkowe mechanizmy: <strong>redukcja przewlekłego zapalenia</strong> (CRP, IL-6), regulacja insulinowrażliwości (kluczowe w nowotworach hormonozależnych), wsparcie funkcji immunologicznej (komórki NK), poprawa zdrowia psychicznego, zachowanie masy mięśniowej.</p></>}
      indications={<><ul><li><strong>Zmęczenie związane z nowotworem (CRF)</strong> — najskuteczniejsza interwencja (Mustian metaanaliza)</li><li>Rak piersi po leczeniu — redukcja śmiertelności o 30-40% (Friedenreich 2020)</li><li>Rak jelita grubego — redukcja nawrotów</li><li>Redukcja lęku i depresji</li><li>Zachowanie masy mięśniowej w trakcie chemio/radio</li><li>Poprawa funkcji poznawczych ("chemobrain")</li></ul></>}
      contraindications={<><ul><li>Względne: niestabilność hemodynamiczna, ciężka anemia (Hb &lt; 8)</li><li>Względne: trombocytopenia &lt; 50 tys.</li><li>Względne: metastazy kostne z ryzykiem złamań patologicznych (modyfikacja typu ćwiczeń)</li><li>Względne: cewniki centralne (modyfikacja rodzaju ćwiczeń ramion)</li></ul></>}
      safety={<><ul><li>Bardzo dobry profil bezpieczeństwa — ryzyko mniejsze niż brak aktywności</li><li>Indywidualizacja intensywności (na początku małe dawki, eskalacja stopniowa)</li><li>Najlepiej z fizjoterapeutą onkologicznym lub instruktorem z certyfikatem CET (Cancer Exercise Trainer)</li><li>Regularność WAŻNIEJSZA niż intensywność</li><li>Programy w Polsce: "Aktywni w chorobie", "Onko-fizjoterapia"</li></ul></>}
      howToTalkToDoctor={<><ul><li>Jakie ćwiczenia są bezpieczne w moim stadium choroby?</li><li>Czy mogę otrzymać skierowanie do fizjoterapeuty onkologicznego?</li><li>Jakie są limity intensywności w moim przypadku?</li><li>Co kiedy mam metastazy kostne — jakich ruchów unikać?</li></ul></>}
    />
  )
}
