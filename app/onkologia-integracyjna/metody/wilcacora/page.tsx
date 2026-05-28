import type { Metadata } from 'next'
import { MethodPage } from '@/components/onkologia-integracyjna/method-page'
import { getMethodBySlug } from '@/lib/onkologia-integracyjna/methods'
import { PMIDLink } from '@/components/onkologia-integracyjna/badges'

const method = getMethodBySlug('wilcacora')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function WilcacoraPage() {
  return (
    <MethodPage
      method={method}
      what={
        <>
          <p>
            <strong>Wilcacora</strong> (<em>Uncaria tomentosa</em>, hiszp. „uña de gato", pol. „Koci Pazur") to
            peruwiańska pnącza z lasów amazońskich. Tradycja medyczna u plemienia Asháninka liczy
            ponad 2000 lat. W Polsce dostępna jako popularny suplement diety.
          </p>
          <p>
            Aktywne związki to dwie grupy alkaloidów: <strong>POA</strong> (Pentacyclic Oxindole Alkaloids) —
            immunostymulujące, oraz <strong>TOA</strong> (Tetracyclic Oxindole Alkaloids) — antagonistyczne wobec POA
            w działaniu na CNS. <strong>Tylko preparaty standaryzowane na POA-only mają udokumentowane działanie immunostymulacyjne.</strong>
          </p>
        </>
      }
      howItWorks={
        <>
          <p><strong>Mechanizmy działania:</strong></p>
          <ul>
            <li><strong>POA</strong> aktywują komórki dendrytyczne, makrofagi, modulują NF-κB</li>
            <li><strong>Anti-DNA damage</strong> — ochrona przed mutagennością chemioterapii</li>
            <li>Modulacja produkcji cytokin prozapalnych</li>
          </ul>
          <p>
            Kluczowe badanie kliniczne — Farias 2012 (<PMIDLink pmid="22811748">PMID 22811748</PMIDLink>, RCT n~50)
            u pacjentek z rakiem piersi (IDC stage II) otrzymujących chemioterapię FAC. <em>Uncaria tomentosa</em> 300 mg/d
            spowodowała znamienną redukcję neutropenii (p&lt;0,05), odbudowę naprawy uszkodzeń DNA oraz poprawę parametrów
            immunologicznych. Bez wzrostu toksyczności chemio.
          </p>
          <p>
            <strong>EMA HMPC Assessment Report 2015</strong> (Uncaria tomentosa) potwierdza tradycyjne
            zastosowanie immunostymulacyjne POA oraz przeciwstawny efekt frakcji POA vs TOA — stąd
            kluczowy wymóg standaryzacji preparatu POA-only.
          </p>
        </>
      }
      indications={
        <>
          <p><strong>Najlepiej udokumentowane wskazanie (GRADE: low):</strong></p>
          <ul>
            <li><strong>Redukcja neutropenii po chemioterapii</strong> (jedyne RCT — Farias 2012)</li>
          </ul>
          <p><strong>Wskazania pomocnicze:</strong></p>
          <ul>
            <li>Immunostymulacja podczas leczenia onkologicznego</li>
            <li>Odbudowa parametrów immunologicznych po cyklach chemio</li>
          </ul>
          <p>
            EMA HMPC 2015 sklasyfikowała <em>U. tomentosa</em> jako <strong>tradycyjne zastosowanie (TU)</strong>,
            nie well-established medical use — wymagane dalsze RCT dla potwierdzenia wskazań.
          </p>
        </>
      }
      contraindications={
        <>
          <p><strong>BEZWZGLĘDNE PRZECIWWSKAZANIA:</strong></p>
          <ul>
            <li><strong>Transplantacja narządów</strong> — silna immunostymulacja POA może spowodować odrzucenie przeszczepu</li>
            <li><strong>Leki immunosupresyjne</strong> (takrolimus, cyklosporyna, mykofenolan) — antagonizm farmakodynamiczny</li>
            <li><strong>CIĄŻA</strong> — <em>U. tomentosa</em> była tradycyjnie stosowana u Asháninka jako <strong>środek poronny</strong> (działanie na mięsień macicy)</li>
          </ul>
          <p><strong>Ostrożność:</strong></p>
          <ul>
            <li><strong>Raki hormonozależne ER+/PR+</strong> — dane zwierzęce sugerują słabe działanie estrogenne niektórych alkaloidów</li>
            <li>Pacjenci z chorobami autoimmunologicznymi</li>
            <li>Antykoagulanty — słabe dane, ale opisywane interakcje</li>
          </ul>
        </>
      }
      safety={
        <>
          <p>
            Profil bezpieczeństwa w RCT Farias 2012 dobry — brak wzrostu toksyczności chemio.
            Ale <strong>jakość preparatu absolutnie krytyczna</strong>:
          </p>
          <ul>
            <li><strong>POA-standaryzowane preparaty</strong> — jedyne z udokumentowanym efektem immunostymulującym</li>
            <li><strong>POA + TOA łącznie</strong> — efekty się znoszą, preparat bezużyteczny</li>
            <li>W Polsce: Vilcacora (Nefdespa), Koci Pazur ekstrakt — <strong>sprawdź deklarację POA-only na etykiecie</strong></li>
            <li>Tańsze preparaty mogą zawierać niespecyfikowaną mieszankę POA+TOA</li>
          </ul>
        </>
      }
      howToTalkToDoctor={
        <>
          <p>
            Wilcacora może być rozważona u pacjentek z rakiem piersi otrzymujących chemioterapię FAC
            (zgodnie z Farias 2012). Argumenty do rozmowy z onkologiem:
          </p>
          <ul>
            <li>RCT Farias 2012 (<PMIDLink pmid="22811748">PMID 22811748</PMIDLink>) — fundament dowodowy</li>
            <li>Konkretny preparat: POA-standaryzowany ekstrakt 300 mg/d</li>
            <li>Plan monitorowania: morfologia + neutrofile co cykl chemio</li>
            <li>ClinicalTrials NCT02045719 — aktywne badanie w Brazylii (zaawansowane guzy lite)</li>
          </ul>
          <p>
            <strong>NIE stosuj</strong> jeśli jesteś po przeszczepie narządów, na immunosupresji lub w ciąży.
            <strong>Skonsultuj z onkologiem</strong> jeśli leczysz raka hormonozależnego.
          </p>
        </>
      }
    />
  )
}
