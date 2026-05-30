import type { Metadata } from 'next'
import { MethodPage } from '@/components/onkologia-integracyjna/method-page'
import { getMethodBySlug } from '@/lib/onkologia-integracyjna/methods'
import { PMIDLink } from '@/components/onkologia-integracyjna/badges'

const method = getMethodBySlug('boswellia-serrata')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function BoswelliaPage() {
  return (
    <MethodPage
      method={method}
      what={
        <>
          <p>
            <strong>Boswellia serrata</strong> (kadzidłowiec indyjski) to drzewo rosnące w suchych regionach Indii i Bliskiego Wschodu.
            Aktywne związki to <strong>kwasy bosweliowe</strong> (BA), szczególnie <strong>AKBA</strong> (acetyl-11-keto-β-boswelic acid),
            które selektywnie hamują enzym 5-LOX (5-lipoksygenaza), kluczowy dla syntezy leukotrienów odpowiedzialnych za zapalenie i obrzęk.
          </p>
          <p>
            W onkologii Boswellia jest badana głównie jako wsparcie w sytuacjach, gdzie tradycyjne leki (deksametazon) mają istotne działania niepożądane.
            Najsilniejszy sygnał kliniczny dotyczy <strong>obrzęku mózgu po radioterapii</strong> u pacjentów z guzami mózgu i przerzutami.
          </p>
        </>
      }
      howItWorks={
        <>
          <p>
            <strong>Mechanizmy działania:</strong>
          </p>
          <ul>
            <li><strong>5-LOX inhibitor</strong> — blokuje syntezę leukotrienów (LTB4, LTC4) odpowiedzialnych za zapalenie i obrzęk naczyniopochodny</li>
            <li><strong>NF-κB inhibitor</strong> — hamuje transkrypcję genów prozapalnych (TNF-α, IL-1β, IL-6)</li>
            <li><strong>VEGF↓, MMP-9↓</strong> — potencjał antyangiogenny i hamowanie inwazji nowotworowej</li>
            <li><strong>Przenikanie bariery krew-mózg</strong> — unikatowa cecha pozwalająca działać w guzach OUN</li>
          </ul>
          <p>
            Przełomowe RCT Kirste 2011 (<PMIDLink doi="10.1002/cncr.26101">DOI 10.1002/cncr.26101</PMIDLink>) wykazało, że u pacjentów otrzymujących radioterapię mózgu
            Boswellia 4200 mg/d zmniejszyła obrzęk mózgu ≥75% u 60% pacjentów vs 26% w grupie placebo (p=0,023). Systematic review Dejonckheere 2025
            (PMC11904484) potwierdził te wyniki i wskazał na potencjał ograniczenia zależności pacjentów od deksametazonu.
          </p>
        </>
      }
      indications={
        <>
          <p><strong>Najlepiej udokumentowane wskazanie:</strong></p>
          <ul>
            <li><strong>Obrzęk mózgu po radioterapii</strong> u pacjentów z guzami mózgu (GBM) i przerzutami mózgowymi — GRADE: moderate</li>
          </ul>
          <p><strong>Wskazania o słabszych dowodach (GRADE: low):</strong></p>
          <ul>
            <li>Stany zapalne związane z leczeniem onkologicznym</li>
            <li>Wsparcie w przerzutach mózgowych — adjuwant przy dekompresji obrzęku</li>
            <li>Badanie fazy Ia (Morikawa 2024, <PMIDLink pmid="38194131">PMID 38194131</PMIDLink>) wykazało potencjał hamowania proliferacji w raku piersi (window-of-opportunity)</li>
          </ul>
        </>
      }
      contraindications={
        <>
          <p><strong>Przeciwwskazania bezwzględne:</strong></p>
          <ul>
            <li><strong>Koagulopatie i zaburzenia krzepnięcia</strong> — działanie antyagregacyjne</li>
            <li><strong>Aktywna zakrzepica (DVT, PE)</strong></li>
            <li><strong>Ciąża i laktacja</strong> — brak danych bezpieczeństwa</li>
          </ul>
          <p><strong>Ostrożność:</strong></p>
          <ul>
            <li><strong>Interakcje CYP3A4/CYP2C9</strong> — in vitro istotne, in vivo (SCHH) minimalne; zachować ostrożność przy wąskich indeksach terapeutycznych (warfaryna, cyklosporyna, takrolimus)</li>
            <li>Pacjenci po przeszczepie narządów — konsultacja z transplantologiem</li>
            <li>Operacje planowe — odstawić 7-14 dni przed</li>
          </ul>
        </>
      }
      safety={
        <>
          <p>
            Profil bezpieczeństwa Boswellii w opublikowanych RCT jest <strong>bardzo dobry</strong>. W badaniu Kirste 2011 (n=44) nie odnotowano
            ciężkich działań niepożądanych. Drobne dolegliwości żołądkowo-jelitowe występowały u &lt;10% pacjentów.
          </p>
          <p>
            <strong>Jakość preparatu jest krytyczna:</strong>
          </p>
          <ul>
            <li>Ekstrakty <strong>standaryzowane na zawartość AKBA</strong> (kwas acetylo-11-keto-beta-boswelliowy) — to one były przedmiotem badań klinicznych</li>
            <li>Preparaty z <strong>deklarowaną, powtarzalną zawartością aktywnych boswelliowych kwasów</strong></li>
          </ul>
          <p>
            <strong>Unikaj</strong> proszków ziołowych bez deklarowanej zawartości AKBA — efekt zależy od standaryzacji aktywnych związków.
            Strona nie rekomenduje żadnego konkretnego produktu ani marki; jakość, skład i dawka preparatów dostępnych na rynku mogą się różnić.
          </p>
          <div className="my-4 rounded-md border border-amber-300 bg-amber-50 p-4 text-sm">
            <p className="font-semibold mb-2">Paradoks medialny — argument „brak RCT III fazy = brak dowodów"</p>
            <p>
              Część krytyki Boswellii w mediach formułuje argument: <em>„nie ma RCT III fazy, więc nie ma
              dowodów EBM"</em>. To prawda dla większości wskazań Boswellii — ale ignoruje fakt, że dla
              konkretnego wskazania <strong>obrzęk mózgu po radioterapii</strong> istnieje <strong>RCT
              fazy II double-blind, placebo-controlled</strong> (Kirste 2011, DOI 10.1002/cncr.26101) z
              istotnym statystycznie wynikiem (60% vs 26% redukcji obrzęku ≥75%, p=0,023, n=44) — oraz
              <strong> systematic review 2025</strong> (Dejonckheere et al., PMC11904484) potwierdzający
              te dane. RCT II z istotnym wynikiem to <strong>NIE „brak dowodów"</strong> — to dowód
              kategorii GRADE moderate (dla tego konkretnego wskazania).
            </p>
            <p className="mt-2">
              Wymaganie RCT III fazy jako jedynego standardu dowodowego pomija to, że dla wielu
              wskazań niszowych (rzadkie nowotwory, supportive care, off-label) RCT III nigdy
              nie powstanie — bo nie ma finansowania (Boswellia nie jest opatentowana). To strukturalne
              ograniczenie systemu badań klinicznych, nie świadectwo „braku skuteczności".
            </p>
          </div>
        </>
      }
      howToTalkToDoctor={
        <>
          <p>
            Boswellia jest <strong>wzmiankowana w niektórych protokołach radioterapii guzów OUN</strong> jako alternatywa lub uzupełnienie deksametazonu.
            Jeśli rozważasz włączenie, warto przedstawić onkologowi/radioterapeucie:
          </p>
          <ul>
            <li>RCT Kirste 2011 (<em>Cancer</em>, DOI 10.1002/cncr.26101) — fundament dowodowy</li>
            <li>Systematic review Dejonckheere 2025 (Adv Radiat Oncol, PMC11904484) — aktualne podsumowanie</li>
            <li>Preparat standaryzowany na AKBA (z deklarowaną zawartością aktywnych związków)</li>
            <li>Plan monitorowania: parametry krzepnięcia, obraz MRI, dawka deksametazonu</li>
            <li>NCT03149081 (MUSC) — aktywny trial w USA</li>
          </ul>
          <p>
            <strong>Nie zastępuj</strong> standardowego leczenia (deksametazon, radioterapia, chemioterapia) Boswellią. To leczenie wspomagające, nie alternatywa.
          </p>
        </>
      }
    />
  )
}
