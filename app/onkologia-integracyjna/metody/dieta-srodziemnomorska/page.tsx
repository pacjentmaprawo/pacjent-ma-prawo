import type { Metadata } from 'next'
import { MethodPage } from '@/components/onkologia-integracyjna/method-page'
import { getMethodBySlug } from '@/lib/onkologia-integracyjna/methods'

const method = getMethodBySlug('dieta-srodziemnomorska')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function MethodPageRoute() {
  return (
    <MethodPage
      method={method}
      what={<><p>Dieta oparta na <strong>warzywach, owocach, oliwie z oliwek extra virgin, rybach, orzechach, roślinach strączkowych</strong> i pełnoziarnistych zbożach. Ograniczona spożycie mięsa czerwonego i przetworzonego, cukrów dodanych. Najlepiej udokumentowany model żywieniowy w prewencji i onkologii.</p></>}
      howItWorks={<><p>Mechanizmy: <strong>niski indeks zapalny</strong> (high polyphenol content), wsparcie mikrobioty jelitowej (błonnik fermentowalny), regulacja insulinowrażliwości, redukcja stresu oksydacyjnego, dostarczanie kwasów omega-3 (ryby).</p></>}
      indications={<><ul><li><strong>Prewencja wtórna raka piersi</strong> — PREDIMED extension, Toledo 2015</li><li>Redukcja śmiertelności onkologicznej o 14% (Schwingshackl 2017 metaanaliza)</li><li>Wsparcie podczas chemioterapii (redukcja stanu zapalnego)</li><li>Zachowanie funkcji poznawczych</li><li>Synergia z aktywnością fizyczną</li></ul></>}
      contraindications={<><ul><li>Względne: zaburzenia połykania (modyfikacja konsystencji)</li><li>Względne: pacjent z neutropenią — ograniczenie surowych warzyw i owoców (dieta niskobakteryjna)</li><li>Względne: zespół jelita drażliwego (modyfikacja FODMAP)</li><li>Względne: alergie pokarmowe (orzechy, ryby)</li></ul></>}
      safety={<><ul><li>Bardzo dobry profil bezpieczeństwa — to model żywienia, nie suplementacja</li><li>Dostosowanie do indywidualnych potrzeb przez dietetyka klinicznego</li><li>Stopniowa zmiana nawyków (3-6 miesięcy)</li><li>Klucz: oliwa z oliwek EVO (1-2 łyżki dziennie), 5 porcji warzyw/owoców, 2-3 porcje ryb tygodniowo</li></ul></>}
      howToTalkToDoctor={<><ul><li>Czy mogę otrzymać skierowanie do dietetyka klinicznego z doświadczeniem w onkologii?</li><li>Jak dostosować dietę do mojego leczenia (chemio, hormono)?</li><li>Czy mam ograniczenia (neutropenia, zaburzenia połykania)?</li><li>Czy są jakieś składniki które powinienem ograniczyć (np. fitoestrogeny w raku ER+)?</li></ul></>}
    />
  )
}
