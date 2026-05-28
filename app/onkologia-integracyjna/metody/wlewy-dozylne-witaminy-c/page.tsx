import type { Metadata } from 'next'
import { MethodPage } from '@/components/onkologia-integracyjna/method-page'
import { getMethodBySlug } from '@/lib/onkologia-integracyjna/methods'
import { PMIDLink } from '@/components/onkologia-integracyjna/badges'

const method = getMethodBySlug('wlewy-dozylne-witaminy-c')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function WlewyDozylneWitaminyC() {
  return (
    <MethodPage
      method={method}
      what={
        <>
          <p>
            Wlewy dożylnej witaminy C (IVC, z ang. <em>intravenous vitamin C</em>) to podawanie
            witaminy C bezpośrednio do żyły w dawkach wielokrotnie wyższych niż zalecane dzienne
            spożycie (RDA = 75–90 mg). Typowy wlew w onkologii integracyjnej zawiera{' '}
            <strong>25–100 gramów</strong> kwasu askorbinowego rozpuszczonego w soli fizjologicznej,
            podawanego przez 1–3 godziny.
          </p>
          <p>
            <strong>Kluczowa różnica między formą doustną a dożylną:</strong>
          </p>
          <ul>
            <li>
              <strong>Doustnie</strong> — organizm wchłania maksymalnie ~200 µmol/L w osoczu
              (mechanizm nasycenia transporterów SVCT)
            </li>
            <li>
              <strong>Dożylnie</strong> — wlew 50 g osiąga{' '}
              <strong>20 000–30 000 µmol/L (20–30 mmol/L)</strong>, czyli{' '}
              <strong>100–150 razy więcej</strong>
            </li>
          </ul>
          <p>
            Te dwie drogi podania to <strong>różne farmakologicznie metody</strong> — działają
            inaczej. Wlewy dożylne nie zastępują codziennej suplementacji ani nie są „dużą dawką
            tabletek".
          </p>
        </>
      }
      howItWorks={
        <>
          <p>
            W stężeniach milimolarnych (osiąganych tylko dożylnie) witamina C zmienia rolę
            z antyoksydanta na <strong>prooksydant</strong> — generuje nadtlenek wodoru (H₂O₂)
            selektywnie w komórkach nowotworowych.
          </p>
          <p>
            <strong>Dlaczego selektywnie:</strong> komórki nowotworowe mają obniżoną aktywność
            katalazy (enzymu rozkładającego H₂O₂) w porównaniu z komórkami zdrowymi. Wytworzony
            przez witaminę C nadtlenek wodoru gromadzi się w komórkach nowotworowych i uszkadza
            je, oszczędzając komórki zdrowe.
          </p>
          <p>
            <strong>Mutacje KRAS/BRAF:</strong> Yun et al. (<em>Science</em> 2015,{' '}
            <PMIDLink pmid="26541605">PMID 26541605</PMIDLink>) wykazali, że komórki nowotworowe
            z mutacjami KRAS lub BRAF są szczególnie wrażliwe na IVC. Zwiększona aktywność
            transportera glukozy GLUT1 powoduje, że pobierają one utlenioną formę witaminy C
            (kwas dehydroaskorbinowy), który uszkadza ich metabolizm.
          </p>
          <p>
            <strong>Najnowszy mechanizm — lysine vitcylation (2025):</strong> He et al. (
            <em>Cell</em> 2025, <PMIDLink pmid="40023152">PMID 40023152</PMIDLink>) opisali nowy
            mechanizm: witamina C może kowalencyjnie modyfikować białko STAT1 w komórkach układu
            odpornościowego, wzmacniając odpowiedź interferonową przeciwko nowotworom.
            Pierwszy autor: Xiadi He; senior author: Jean J. Zhao.
          </p>
        </>
      }
      indications={
        <>
          <p>Wskazania kliniczne udokumentowane w badaniach EBM:</p>
          <ul>
            <li>
              <strong>Rak trzustki</strong> — badanie PACMAN 2.1 (Bodeker et al. 2024) wykazało
              wydłużenie OS z 8,3 do 16,0 miesięcy w połączeniu z chemioterapią
            </li>
            <li>
              <strong>Rak jelita grubego z mutacją RAS</strong> — VITALITY (Wang et al. 2022)
              wykazało sygnał wydłużenia PFS w prespecified podgrupie
            </li>
            <li>Rak piersi (kilka mniejszych badań fazy II)</li>
            <li>Rak płuca niedrobnokomórkowy (Bodeker fazy I/II)</li>
            <li>Glejak (badania fazy I/II)</li>
            <li>Chłoniaki (badania fazy I)</li>
            <li>
              <strong>Wsparcie chemioterapii</strong> — poprawa jakości życia (QoL), redukcja
              zmęczenia, nudności, neuropatii
            </li>
          </ul>
          <p>
            <strong>IVC jako terapia uzupełniająca — kluczowa zasada:</strong> wszystkie cytowane
            badania stosowały IVC w połączeniu ze standardową chemioterapią, radioterapią lub
            immunoterapią, nie zamiast nich. <strong>Brak danych potwierdzających monoterapię
            IVC w żadnym typie nowotworu.</strong>
          </p>
        </>
      }
      contraindications={
        <>
          <p>
            <strong>Bezwzględne przeciwwskazania:</strong>
          </p>
          <ul>
            <li>
              <strong>Niedobór dehydrogenazy glukozo-6-fosforanowej (G6PD)</strong> — ryzyko
              hemolizy. <strong>Bezwzględnie wymagane badanie G6PD przed pierwszym wlewem.</strong>
            </li>
            <li>Zaawansowana niewydolność nerek (eGFR &lt; 30 ml/min) — ryzyko nefrotoksyczności (oksaluria)</li>
            <li>Hemochromatoza (witamina C zwiększa wchłanianie żelaza)</li>
            <li>Ciężka niewydolność serca z ograniczeniem płynów</li>
          </ul>
          <p>
            <strong>Względne przeciwwskazania:</strong> kamica nerkowa szczawianowa, słabo
            kontrolowana cukrzyca (interferencja z glukometrami), talasemia.
          </p>
          <p>
            <strong>Interakcje lekowe:</strong>
          </p>
          <ul>
            <li>
              <strong>Bortezomib</strong> (Velcade®) w szpiczaku mnogim — udokumentowane
              zmniejszenie skuteczności. <strong>Nie łączyć IVC z bortezomibem.</strong>
            </li>
            <li>
              <strong>Brak udokumentowanych istotnych klinicznie interakcji z:</strong>{' '}
              platynowcami (cisplatyna, oksaliplatyna), taksanami (paklitaksel, docetaksel),
              antracyklinami (doksorubicyna), fluoropyrymidynami (5-FU) — w niektórych badaniach
              wykazano nawet efekty addytywne lub synergistyczne (Klimant et al. 2018).
            </li>
          </ul>
        </>
      }
      safety={
        <>
          <p>Profil bezpieczeństwa IVC jest dobrze opisany od 30 lat. Główne działania niepożądane:</p>
          <ul>
            <li>
              <strong>Częste (&gt; 10%):</strong> nudności w trakcie wlewu (zwolnienie tempa
              rozwiązuje), uczucie pragnienia, częste oddawanie moczu
            </li>
            <li>
              <strong>Niezbyt częste (1–10%):</strong> bóle głowy (przy odwodnieniu), hipoglikemia
              (monitorowanie u cukrzyków)
            </li>
            <li>
              <strong>Rzadkie (&lt; 1%):</strong> hemoliza (tylko przy niedoborze G6PD — eliminowane
              testem przesiewowym), krystaluria szczawianowa (monitorowanie kreatyniny)
            </li>
          </ul>
          <p>
            <strong>Monitorowanie wymagane przed pierwszym wlewem:</strong> G6PD, kreatynina,
            mocznik, elektrolity, glikemia, morfologia.
          </p>
          <p>
            <strong>Riordan IVC Protocol:</strong> standardowy protokół postępowania, stosowany od
            1995 r. (Riordan Clinic, USA). Określa kwalifikację pacjenta, dawkowanie (eskalacja
            15→25→50→75→100 g), tempo wlewu (max 1 g/min), monitorowanie.
          </p>
        </>
      }
      howToTalkToDoctor={
        <>
          <p>
            <strong>Przed wizytą:</strong>
          </p>
          <ul>
            <li>
              Wydrukuj abstrakt metaanalizy Qu 2025 (
              <PMIDLink pmid="40613397">PMID 40613397</PMIDLink>)
            </li>
            <li>
              Jeśli masz raka trzustki — wydrukuj abstract PACMAN 2.1 (
              <PMIDLink pmid="39369582">PMID 39369582</PMIDLink>)
            </li>
            <li>
              Jeśli masz mCRC — wydrukuj VITALITY (
              <PMIDLink pmid="35929990">PMID 35929990</PMIDLink>)
            </li>
            <li>
              Sprawdź czy masz <strong>wynik badania G6PD</strong> — jeśli nie, poproś o jego
              zlecenie
            </li>
            <li>Przygotuj pełną listę leków, w tym suplementów (uwaga na bortezomib)</li>
          </ul>
          <p>
            <strong>Pytania do lekarza:</strong>
          </p>
          <ol>
            <li>Czy moja diagnoza i obecne leczenie wykluczają stosowanie wlewów dożylnej witaminy C?</li>
            <li>Czy zna Pan/Pani protokół Riordan IVC i czy może go Pan/Pani prowadzić?</li>
            <li>
              Czy jeśli nie prowadzi Pan/Pani IVC osobiście, może mnie Pan/Pani skierować do
              lekarza, który prowadzi tę terapię z protokolarną ostrożnością?
            </li>
            <li>Czy widzi Pan/Pani potencjalne interakcje z moim aktualnym leczeniem onkologicznym?</li>
            <li>Jak będziemy monitorować ewentualne efekty terapeutyczne i bezpieczeństwo?</li>
          </ol>
          <p>
            <strong>Świadoma zgoda</strong> powinna zawierać: cel terapii (uzupełniająca, nie
            zastępująca), stan dowodów EBM (GRADE moderate), brak gwarancji efektu klinicznego,
            działania niepożądane i ich częstość, koszty, możliwość wycofania zgody.
          </p>
        </>
      }
    />
  )
}
