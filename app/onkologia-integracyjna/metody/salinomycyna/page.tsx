import type { Metadata } from 'next'
import { MethodPage } from '@/components/onkologia-integracyjna/method-page'
import { getMethodBySlug } from '@/lib/onkologia-integracyjna/methods'
import { PMIDLink } from '@/components/onkologia-integracyjna/badges'

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
            <strong>KRYTYCZNE OSTRZEŻENIE PRAWNE:</strong> Salinomycyna <strong>NIE jest zarejestrowana
            jako lek dla ludzi</strong> w żadnej jurysdykcji (EMA, FDA, URPL). Jakiekolwiek użycie
            u człowieka wymaga ścieżki badania klinicznego z protokołem zatwierdzonym przez URPL,
            zgody Komisji Bioetycznej oraz pełnej świadomej zgody pacjenta. Stosowanie poza tą ścieżką
            jest <strong>nielegalne</strong>.
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
            jako substancję <strong>100-krotnie skuteczniejszą</strong> od paklitakselu w eliminowaniu
            komórek macierzystych raka piersi (<em>in vitro</em>). To było przełomowe odkrycie, bo CSCs
            są uznawane za główną przyczynę oporności na chemioterapię i nawrotów choroby.
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
            <strong>Bezwzględne przeciwwskazania regulacyjno-prawne:</strong>
          </p>
          <ul>
            <li>
              <strong>Brak rejestracji dla ludzi</strong> — salinomycyna nie ma autoryzacji EMA, FDA, URPL.
              Stosowanie poza protokołem badania klinicznego jest <strong>nielegalne</strong>.
            </li>
            <li>
              Nie wchodzi w zakres <strong>art. 5 ust. 1 dyrektywy 2001/83/WE</strong> (off-label) — bo
              ta podstawa dotyczy leków zarejestrowanych dla ludzi, a salinomycyna jest zarejestrowana
              wyłącznie weterynaryjnie.
            </li>
            <li>
              Możliwa ścieżka prawna: <strong>compassionate use</strong> (art. 83 rozp. 726/2004) lub
              <strong> named-patient basis</strong> — wymaga indywidualnej decyzji regulatora.
            </li>
          </ul>
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
            <strong>WAŻNE:</strong> jeśli ktokolwiek oferuje Ci salinomycynę jako „leczenie nowotworu"
            poza ścieżką badania klinicznego — <strong>to jest nielegalne</strong>. Salinomycyna nie ma
            rejestracji dla ludzi w żadnej jurysdykcji.
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
          </ol>
          <p>
            <strong>Co zrobić jeśli zobaczysz ofertę salinomycyny w sieci:</strong>
          </p>
          <ul>
            <li>Sprawdź czy oferent ma prawo wykonywania zawodu lekarza</li>
            <li>Sprawdź czy posiada zatwierdzenie URPL i Komisji Bioetycznej dla protokołu badania klinicznego</li>
            <li>Sprawdź źródło substancji (preparaty weterynaryjne SACOX-60/Bio-Cox-60 NIE są przeznaczone
            do podania ludziom)</li>
            <li>Możliwość zgłoszenia nielegalnej oferty: Rzecznik Praw Pacjenta, Naczelna Izba Lekarska,
            URPL</li>
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
            Dodatkowe źródła do salinomycyny — paradoks NRL Nr 2/21/VIII i casus WSA V SA/Wa 2854/23:
          </p>
          <ul>
            <li>Stanowisko Naczelnej Rady Lekarskiej Nr 2/21/VIII z 12.03.2021 — lista 11 substancji
            (poz. 5: salinomycyna)</li>
            <li>Wyrok WSA Warszawa V SA/Wa 2854/23 z 29.10.2025 — kara administracyjna 245 000 zł
            dla podmiotu leczniczego stosującego m.in. salinomycynę</li>
            <li>Sygnatury orzeczeń NSL 9.01.2025 (zawieszenie lekarza) i SN II ZK 90/25 z 8.12.2025
            (uchylenie kasacyjne — orzeczenie samorządu uznane za wadliwe proceduralnie)</li>
          </ul>
        </>
      }
    />
  )
}
