import type { Metadata } from 'next'
import { MethodPage } from '@/components/terapie-wspomagajace/method-page'
import { getMethodBySlug } from '@/lib/terapie-wspomagajace/methods'
import { PMIDLink } from '@/components/terapie-wspomagajace/badges'

const method = getMethodBySlug('salinomycyna')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function SalinomycynaPage() {
  return (
    <MethodPage
      method={method}
      what={
        <>
          <p>
            <strong>Salinomycyna</strong> to antybiotyk z grupy jonoforów polieterowych, izolowany ze szczepu
            <em> Streptomyces albus</em>. W weterynarii stosowana od dekad jako <strong>kokcydiostatyk</strong>
            u drobiu i bydła (preparaty SACOX-60, Bio-Cox-60).
          </p>
          <p>
            <strong>Status regulacyjny:</strong> Salinomycyna <strong>nie ma rejestracji jako produkt
            leczniczy dla ludzi</strong> w EMA, FDA ani URPL. Jest jednak stosowana klinicznie w wybranych
            ośrodkach onkologii integracyjnej w Europie (m.in. Niemcy, Szwajcaria) oraz w Polsce —
            w oparciu o <strong>różne podstawy prawne</strong>:
          </p>
          <ul>
            <li><strong>badania kliniczne</strong> z protokołem zatwierdzonym przez URPL i Komisję Bioetyczną</li>
            <li><strong>compassionate use</strong> — art. 83 rozporządzenia 726/2004 (dla pacjentów bez alternatyw terapeutycznych)</li>
            <li><strong>named patient program</strong> — indywidualne sprowadzenie dla konkretnego pacjenta</li>
            <li><strong>indywidualne sprowadzenie z zagranicy</strong> — art. 4 ust. 7–9 Prawa farmaceutycznego</li>
          </ul>
          <p>
            Decyzja o włączeniu salinomycyny do leczenia pozostaje w gestii <strong>kwalifikowanego klinicysty</strong>
            oraz pacjenta <strong>po pełnej świadomej zgodzie</strong>. Wymaga monitorowania toksyczności systemowej
            (neurologicznej, kardiologicznej).
          </p>
          <p>
            <strong>Dlaczego o niej piszemy:</strong> mimo braku rejestracji dla ludzi, salinomycyna
            ma <strong>realną bazę dowodów przedklinicznych</strong> (in vitro, modele zwierzęce)
            wskazujących aktywność wobec <strong>nowotworowych komórek macierzystych (CSC)</strong>.
            Substancja figuruje na <strong>liście Stanowiska NRL Nr 2/21/VIII</strong> jako „bez
            podstaw naukowych w onkologii" — co jest stanowiskiem wymagającym konfrontacji ze stanem
            wiedzy biomedycznej.
          </p>
        </>
      }
      howItWorks={
        <>
          <p>
            Salinomycyna jest <strong>jonoforem polieterowym</strong> — transportuje jony (głównie K⁺, Na⁺)
            przez błony biologiczne, zakłócając gradient elektrochemiczny.
          </p>
          <p>
            <strong>Kluczowe odkrycie 2009</strong> — zespół Roberta Weinberga w MIT (Gupta et al.,{' '}
            <PMIDLink pmid="19682730">Cell, PMID 19682730</PMIDLink>) zidentyfikował salinomycynę
            jako substancję o silnym działaniu wobec komórek macierzystych raka piersi w warunkach
            laboratoryjnych (<em>in vitro</em>) — w tym modelu skuteczniejszą od paklitakselu w eliminowaniu
            tych komórek. <strong>Są to wyłącznie dane przedkliniczne (in vitro); nie istnieją dojrzałe
            badania kliniczne potwierdzające skuteczność u pacjentów.</strong> CSCs są uznawane za jedną
            z przyczyn oporności na chemioterapię i nawrotów choroby.
          </p>
          <p>
            <strong>Mechanizmy molekularne</strong> opisane w późniejszych pracach (Naujokat & Steinhart 2012,{' '}
            <PMIDLink pmid="23251084">PMID 23251084</PMIDLink>):
          </p>
          <ul>
            <li>Zakłócenie gradientu Na⁺/K⁺ w błonach komórek nowotworowych</li>
            <li>Hamowanie szlaku Wnt/β-katenina (krytycznego dla CSC)</li>
            <li>Aktywacja kaspaz i indukcja apoptozy</li>
            <li>Hamowanie NF-κB</li>
            <li>Najnowsze dane (2025-2026): indukcja <strong>ferroptozy</strong> w raku żołądka
            (Nature Cell Death &amp; Disease 2026, doi: 10.1038/s41420-026-03058-2)</li>
          </ul>
          <p>
            <strong>Polski wkład naukowy:</strong> grupa Bogdana Brzezińskiego, Adama Huczyńskiego
            i Michała Antoszczaka z <strong>Uniwersytetu im. Adama Mickiewicza w Poznaniu</strong>
            prowadzi syntezę pochodnych salinomycyny o lepszej selektywności i niższej toksyczności
            systemowej. To wczesne badania, nie kliniczne — ale stanowią ważne źródło polskie
            w literaturze przedklinicznej.
          </p>
        </>
      }
      indications={
        <>
          <p>
            <strong>UWAGA:</strong> żadne z poniższych wskazań nie jest oficjalnym wskazaniem rejestracyjnym
            dla ludzi. Są to wskazania <strong>badane</strong> w modelach przedklinicznych i nielicznych
            pilotażowych badaniach klinicznych:
          </p>
          <ul>
            <li>Rak jajnika (dane in vitro + xenograft + pilotażowe kliniczne)</li>
            <li>Rak piersi (in vitro Weinberg 2009; targetowanie CSC)</li>
            <li>Rak jelita grubego (xenograft, PLOS One 2019)</li>
            <li>Rak prostaty (in vitro)</li>
            <li>Rak trzustki (in vitro + modele zwierzęce)</li>
            <li>Rak żołądka (Cell Death &amp; Disease 2026 — ferroptoza)</li>
            <li>Glejak (in vitro)</li>
            <li>Heavily pretreated cancers (kilka pilotażowych badań klinicznych z indukcją częściowej
            regresji — dane ograniczone, małe próby)</li>
          </ul>
          <p>
            <strong>Brak badań fazy III.</strong> Salinomycyna NIE jest leczeniem standardowym ani
            off-label rutynowym. Wszelkie zastosowanie u ludzi to obszar badawczy.
          </p>
        </>
      }
      contraindications={
        <>
          <p>
            <strong>Uwagi regulacyjne:</strong> salinomycyna nie ma rejestracji jako produkt leczniczy
            dla ludzi (EMA, FDA, URPL). Nie wchodzi w zakres art. 5 ust. 1 dyrektywy 2001/83/WE (off-label),
            bo ta podstawa dotyczy leków zarejestrowanych dla ludzi. Możliwe ścieżki stosowania klinicznego
            opisano w sekcji <em>Co to jest</em> powyżej (badanie kliniczne, compassionate use, named patient
            program, indywidualne sprowadzenie z zagranicy).
          </p>
          <p>
            <strong>Bezwzględne przeciwwskazania medyczne:</strong>
          </p>
          <ul>
            <li>Ciąża i karmienie piersią (brak danych bezpieczeństwa)</li>
            <li>Ciężka niewydolność serca (kardiotoksyczność)</li>
            <li>Czynna polineuropatia (neurotoksyczność)</li>
            <li>Ciężka niewydolność wątroby/nerek</li>
            <li>Choroby autoimmunologiczne aktywne (immunomodulacja niejasna)</li>
          </ul>
          <p>
            <strong>Interakcje lekowe:</strong> brak systematycznie udokumentowanych danych klinicznych
            o interakcjach z chemioterapeutykami u ludzi. Wymaga ścisłej oceny <em>case-by-case</em>.
          </p>
        </>
      }
      safety={
        <>
          <p>
            <strong>Toksyczność systemowa</strong> jest głównym ograniczeniem klinicznego zastosowania
            salinomycyny — to fakt powtarzany w każdej publikacji przedklinicznej i pilotażowej.
          </p>
          <ul>
            <li>
              <strong>Neurotoksyczność</strong> — najbardziej dokumentowane działanie niepożądane.
              W weterynarii: konie są wyjątkowo wrażliwe (śmiertelne zatrucia po przypadkowym
              spożyciu). U ludzi: udokumentowane przypadki zatruć (kazuistyka), w tym śmiertelne.
            </li>
            <li>
              <strong>Kardiotoksyczność</strong> — zaburzenia rytmu serca, arytmie, w skrajnych
              przypadkach niewydolność krążenia.
            </li>
            <li>
              <strong>Toksyczność mięśniowa</strong> — rabdomyoliza, podwyższenie CK.
            </li>
            <li>
              <strong>Toksyczność nerkowa</strong> — wtórna do rabdomyolizy lub bezpośrednia.
            </li>
          </ul>
          <p>
            <strong>Margines terapeutyczny</strong> jest wąski — pochodne syntetyczne (Antoszczak,
            Huczyński, UAM Poznań) próbują go poszerzyć przez chemiczne modyfikacje cząsteczki
            zwiększające selektywność wobec komórek nowotworowych przy zmniejszeniu toksyczności
            ogólnoustrojowej.
          </p>
          <p>
            <strong>Monitorowanie (gdyby substancja kiedykolwiek weszła do klinicznego zastosowania):</strong>
            EKG, CK, troponiny, kreatynina, elektrolity, ocena neurologiczna.
          </p>
        </>
      }
      howToTalkToDoctor={
        <>
          <p>
            <strong>Salinomycyna nie ma rejestracji jako produkt leczniczy dla ludzi.</strong>
            Decyzja o jej zastosowaniu należy do kwalifikowanego klinicysty oraz pacjenta po pełnej
            świadomej zgodzie — w ramach jednej z dostępnych ścieżek prawnych (badanie kliniczne,
            compassionate use, named patient program, indywidualne sprowadzenie z zagranicy).
          </p>
          <p>
            <strong>Pytania do onkologa:</strong>
          </p>
          <ol>
            <li>Czy istnieje aktualne badanie kliniczne salinomycyny w moim typie nowotworu, do którego
            mógłbym/mogłabym się kwalifikować? (rejestr: clinicaltrials.gov)</li>
            <li>Czy w polskim ośrodku akademickim (np. UAM Poznań, gdzie pracują twórcy pochodnych
            salinomycyny) jest dostępny eksperymentalny protokół?</li>
            <li>Czy w moim wskazaniu istnieją bardziej zaawansowane (faza II/III) terapie skierowane
            na komórki macierzyste raka (CSC) z lepszą bazą EBM?</li>
            <li>Na jakiej podstawie prawnej można by zastosować salinomycynę w mojej sytuacji (badanie kliniczne, compassionate use, named patient program, indywidualne sprowadzenie)?</li>
            <li>Jakie monitorowanie toksyczności (EKG, parametry neurologiczne, kardiologiczne) będzie potrzebne i jak często?</li>
          </ol>
          <p>
            <strong>Jeśli rozważasz włączenie salinomycyny:</strong>
          </p>
          <ul>
            <li>Wybierz klinicystę z doświadczeniem w onkologii integracyjnej i ścieżkach off-registration (compassionate use, named patient)</li>
            <li>Upewnij się że substancja pochodzi ze źródła medycznego, nie weterynaryjnego (preparaty SACOX-60/Bio-Cox-60 nie są przeznaczone dla ludzi)</li>
            <li>Wymóg jasnej dokumentacji: pisemna świadoma zgoda, opis monitorowania, plan reagowania na działania niepożądane</li>
            <li>Skonsultuj z lekarzem prowadzącym chemio/RT — monitoring interakcji z głównym leczeniem onkologicznym</li>
          </ul>
          <p>
            <strong>Paradoks NRL:</strong> Stanowisko NRL Nr 2/21/VIII (z 12.03.2021) wymienia salinomycynę
            jako jedną z 11 substancji „bez podstaw naukowych w onkologii". Tymczasem fundamentalna
            publikacja Gupta et al. 2009 w <em>Cell</em> (zespół Weinberga MIT) i seria kolejnych prac
            mechanistycznych — w tym z polskimi nazwiskami z UAM Poznań — pokazują realną aktywność
            wobec CSC w warunkach przedklinicznych. To pokazuje, że klasyfikacja NRL <strong>nie odpowiada
            stanowi wiedzy biomedycznej</strong> — i jest jednym z kluczowych argumentów obywatelskich
            wobec projektu UD207.
          </p>
        </>
      }
      additionalSources={
        <>
          <p>
            Dodatkowe źródła do salinomycyny — podstawa naukowa i ścieżki legalnego stosowania:
          </p>
          <ul>
            <li>Gupta et al. 2009, <em>Cell</em> (PMID 19682730) — identyfikacja aktywności wobec
            nowotworowych komórek macierzystych (dane przedkliniczne, in vitro)</li>
            <li>Naujokat &amp; Steinhart 2012 (PMID 23251084) — przegląd mechanizmów
            przeciwnowotworowych salinomycyny</li>
            <li>Pochodne salinomycyny — prace zespołu UAM Poznań (Antoszczak, Huczyński): kierunek
            zwiększania selektywności i obniżania toksyczności (badania wczesne, nie kliniczne)</li>
            <li>Rejestr badań klinicznych <strong>clinicaltrials.gov</strong> — weryfikacja
            aktualnych protokołów, do których pacjent mógłby się kwalifikować</li>
            <li>Ścieżki prawne stosowania u ludzi: badanie kliniczne, <strong>eksperyment leczniczy</strong>
            (art. 21 i nast. ustawy o zawodach lekarza, za zgodą komisji bioetycznej), compassionate
            use, named patient program, indywidualne sprowadzenie z zagranicy</li>
            <li>Stanowisko NRL Nr 2/21/VIII (12.03.2021) — wymienia salinomycynę; w pakiecie
            obywatelskim zestawiane z aktualnym stanem wiedzy biomedycznej („paradoks NRL")</li>
          </ul>
        </>
      }
    />
  )
}
