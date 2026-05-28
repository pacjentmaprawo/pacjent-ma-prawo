import type { Metadata } from 'next'
import { MethodPage } from '@/components/onkologia-integracyjna/method-page'
import { getMethodBySlug } from '@/lib/onkologia-integracyjna/methods'

const method = getMethodBySlug('hipertermia-lokoregionalna')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function MethodPageRoute() {
  return (
    <MethodPage
      method={method}
      what={<><p>Podgrzewanie konkretnego obszaru ciała do <strong>40-43°C</strong> przez 60-90 minut, w połączeniu z radioterapią lub chemioterapią. Stosuje się ją w pojedynczych sesjach 1-2 razy w tygodniu. Standard postępowania w wybranych nowotworach w <strong>Niemczech (DEGRO), Holandii i Szwajcarii</strong>.</p></>}
      howItWorks={<><p>Mechanizm wielokierunkowy: hipertermia <strong>uwrażliwia komórki nowotworowe na radio/chemioterapię</strong> (sensybilizacja), zwiększa przepływ krwi w guzie (lepsza dostawa leków), niszczy komórki w fazie S (oporne na radioterapię), pobudza odpowiedź immunologiczną przez białka HSP.</p></>}
      indications={<><ul><li><strong>Mięsaki tkanek miękkich</strong> — RCT Issels 2018 wykazał poprawę kontroli miejscowej i przeżycia</li><li>Rak szyjki macicy zaawansowany — w połączeniu z radioterapią</li><li>Rak pęcherza moczowego (zwłaszcza naciekający)</li><li>Czerniak miejscowo zaawansowany</li><li>Wytyczne DEGRO/ESHO — szczegółowe wskazania</li></ul></>}
      contraindications={<><ul><li>Metalowe implanty w obszarze podgrzewania (rozrusznik, stenty, protezy)</li><li>Ciąża</li><li>Czynne zakażenie systemowe</li><li>Niestabilność krążeniowa</li></ul></>}
      safety={<><ul><li>Typowe (10-20%): dyskomfort cieplny, lekkie oparzenia I stopnia skóry</li><li>Niezbyt częste: wzrost ciśnienia, tachykardia, omdlenie</li><li>Wymaga monitorowania temperatury przez sondę i parametrów życiowych</li><li>Wykonywana wyłącznie w ośrodku z odpowiednim sprzętem (np. BSD-2000)</li></ul></>}
      howToTalkToDoctor={<><ul><li>Czy w moim typie nowotworu hipertermia ma udokumentowane wskazania?</li><li>Gdzie najbliżej (w Polsce/Niemczech) mogę uzyskać dostęp do leczenia?</li><li>Jak hipertermia łączy się z moim aktualnym schematem leczenia?</li><li>Czy mogę otrzymać skierowanie/konsultację z ośrodkiem stosującym RHT?</li></ul></>}
    />
  )
}
