import type { Metadata } from 'next'
import { MethodPage } from '@/components/terapie-wspomagajace/method-page'
import { getMethodBySlug } from '@/lib/terapie-wspomagajace/methods'

const method = getMethodBySlug('n-acetylocysteina')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function MethodPageRoute() {
  return (
    <MethodPage
      method={method}
      what={<><p>Pochodna aminokwasu cysteiny, <strong>prekursor glutationu</strong> (główny antyoksydant wewnątrzkomórkowy). W medycynie konwencjonalnej — mukolityk i odtrutka w zatruciu paracetamolem. W onkologii — wsparcie systemu antyoksydacyjnego i nefroprotekcja.</p></>}
      howItWorks={<><p>NAC podaje grupy SH dla syntezy glutationu (GSH). GSH chroni komórki przed nadmiarem reaktywnych form tlenu (ROS) generowanych przez chemioterapię. Szczególne znaczenie w nefroprotekcji przy cisplatynie i kardioprotekcji przy doksorubicynie.</p></>}
      indications={<><ul><li>Nefroprotekcja przy chemioterapii cisplatyną — Visacri 2014</li><li>Kardioprotekcja przy doksorubicynie (badania mieszane)</li><li>Mukolityk przy infekcjach dróg oddechowych u pacjentów onkologicznych</li><li>Wsparcie hepatoprotekcyjne przy hepatotoksycznych chemioterapeutykach</li></ul></>}
      contraindications={<><ul><li>Astma (możliwy skurcz oskrzeli przy inhalacji)</li><li>Choroba wrzodowa (nasilenie kwasowości żołądka)</li><li>Czynne krwawienie z przewodu pokarmowego</li><li><strong>KONTROWERSJA:</strong> niektóre badania sugerują, że NAC może osłabiać efekt chemioterapii opartej na ROS (cisplatyna, doksorubicyna, IVC) — KONSULTACJA Z ONKOLOGIEM OBOWIĄZKOWA</li></ul></>}
      safety={<><ul><li>Typowe: nudności, biegunka, nieprzyjemny zapach (siarkowy)</li><li>Niezbyt częste: reakcje alergiczne, świąd</li><li>Dawkowanie w onkologii: 600-1800 mg/dobę w 2-3 dawkach</li><li>Najlepiej z posiłkiem, dużą ilością wody</li></ul></>}
      howToTalkToDoctor={<><ul><li>Czy NAC jest bezpieczna z moim schematem chemioterapii?</li><li>Czy nie osłabia działania moich leków (cisplatyna, doksorubicyna)?</li><li>Czy mam wskazania do nefroprotekcji?</li><li>Jaka dawka i przez jak długo?</li></ul></>}
    />
  )
}
