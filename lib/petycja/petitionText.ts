// Pełna treść apelu obywatelskiego ws. projektu UD207 (pkt I–VI).
// Używana do: (1) wyświetlenia pełnego dokumentu na stronie, (2) przycisku „Kopiuj pełną treść".

export const PETITION_TITLE =
  'Apel obywatelski ws. projektu ustawy UD207 (druk sejmowy nr 2598, tzw. „lex szarlatan”)'

/** Sekcje pełnego apelu — do renderowania na stronie. */
export interface PetitionSection {
  heading: string
  paragraphs: string[]
}

export const PETITION_SECTIONS: PetitionSection[] = [
  {
    heading: 'I. Przedmiot pisma',
    paragraphs: [
      'Składam niniejsze pismo (apel obywatelski) jako obywatelka/obywatel Rzeczypospolitej Polskiej w sprawie projektu ustawy o zmianie ustawy o prawach pacjenta i Rzeczniku Praw Pacjenta oraz ustawy o systemie powiadamiania ratunkowego (UD207, druk sejmowy nr 2598), którego pierwsze czytanie odbyło się w Sejmowej Komisji Zdrowia 9 czerwca 2026 r.',
      'My, pacjentki i pacjenci, nie zgadzamy się, by w demokratycznym państwie prawa jeden urzędnik — Rzecznik Praw Pacjenta, powoływany przez Prezesa Rady Ministrów, niebędący ani sądem, ani ciałem przedstawicielskim — jednostronnie i bez merytorycznej kontroli sądu kształtował rynek świadczeń zdrowotnych w Polsce i decydował, które metody leczenia są dla nas dostępne. Popieramy ściganie oszustów. Sprzeciwiamy się temu, by walka z oszustwem stała się pretekstem do odebrania pacjentom prawa wyboru i skupienia władzy nad medycyną w rękach jednego organu.',
      'Wnosimy o oparcie regulacji na następujących zasadach:',
      '1. Prawo pacjenta do wyboru terapii. O sposobie leczenia — w tym o terapiach komplementarnych i wspomagających — decyduje świadomy pacjent wspólnie z lekarzem, a nie urząd.',
      '2. Dostęp do terapii komplementarnych i alternatywnych. Państwo nie powinno blankietowo eliminować legalnych metod wspomagających, z których pacjenci dziś korzystają — w tym dostępnych legalnymi drogami: badania klinicznego oraz eksperymentu leczniczego za świadomą zgodą pacjenta (to jedyna legalna ścieżka dla substancji nieposiadających rejestracji dla ludzi).',
      '3. Mądra regulacja zamiast zakazu — na wzór Europy. Paramedycynę należy uregulować przez kwalifikacje i rejestr (model Heilpraktiker w Niemczech, dyplomy ÖÄK w Austrii, rozwiązania szwajcarskie), a nie przez penalizację całej dziedziny.',
      '4. Wolność debaty i wypowiedzi. Ustawa powinna ścigać czyn — oszustwo w złej wierze — a nie wypowiedź lekarza, naukowca czy pacjenta o leczeniu (art. 54 i art. 73 Konstytucji RP).',
      '5. Żaden urząd ponad sądem. Decyzje Rzecznika Praw Pacjenta muszą podlegać realnej, merytorycznej kontroli niezależnego sądu powszechnego — analogicznie do kontroli decyzji UOKiK przez Sąd Ochrony Konkurencji i Konsumentów — a nie wyłącznie ocenie ich legalności przez sąd administracyjny. Rygor natychmiastowej wykonalności powinien być dopuszczalny tylko wyjątkowo, z mocnym uzasadnieniem i szybką ścieżką odwoławczą.',
      '6. Domniemanie niewinności. Nieprawomocne decyzje nie mogą być publikowane ani wykonywane jak prawomocne wyroki, zanim potwierdzi je sąd (art. 42 ust. 3 Konstytucji RP).',
      '7. Nikt nie zostaje bez opieki. Wykluczenie świadczeniodawcy nie może oznaczać pozostawienia jego pacjentów bez ciągłości leczenia — decyzja powinna wskazywać podmiot przejmujący opiekę w ramach NFZ.',
      'Klauzula bezpieczeństwa. W razie uchwalenia ustawy bez uwzględnienia powyższych zasad wnosimy o odmowę podpisania ustawy przez Prezydenta RP (art. 122 ust. 5 Konstytucji RP) lub o skierowanie jej do Trybunału Konstytucyjnego (art. 122 ust. 3 Konstytucji RP). Szczegółowe uzasadnienie konstytucyjne oraz proponowane brzmienie przepisów zawiera Memorandum prawne dostępne na pacjentmaprawo.pl.',
    ],
  },
  {
    heading: 'II. Uzasadnienie konstytucyjne',
    paragraphs: [
      '1. Naruszenie zasady określoności prawa (art. 2 Konstytucji RP). Projekt UD207 wprowadza penalizację świadczeń niezgodnych z „aktualną wiedzą medyczną” bez precyzyjnego zdefiniowania tego pojęcia. W orzecznictwie Sądu Najwyższego (postanowienie z 5 czerwca 2019 r., III KK 212/18) wskazano, że ocena zgodności postępowania lekarza z „aktualną wiedzą medyczną” wymaga każdorazowo dowodu z opinii biegłych, a wątpliwości należy rozstrzygać in dubio pro reo (art. 5 § 2 k.p.k.). Wymóg ten wynika z zasady lex certa. Trybunał Konstytucyjny w wyroku P 29/13 wskazał, że krótka vacatio legis przy regulacji dotykającej praw majątkowych i osobistych pacjentów stanowi naruszenie zasady przyzwoitej legislacji.',
      '2. Naruszenie zasady proporcjonalności (art. 31 ust. 3 Konstytucji RP) — dwie strukturalne luki. Luka pierwsza — ciągłość opieki w NFZ: budżet NFZ w 2025 r. przekroczył 220 mld zł, ale Polska wydaje na ochronę zdrowia 8,1% PKB wobec średniej OECD 9,2%. System publiczny od lat nie zapewnia ciągłości opieki w onkologii, kardiologii, chorobach autoimmunologicznych, metabolicznych, neurologicznych i przewlekłych. Część pacjentów korzysta ze świadczeń poza NFZ właśnie z powodu tej niewydolności. Projekt zaostrza penalizację świadczeniodawców, nie usuwając pierwotnej przyczyny zjawiska — środek nie jest „niezbędny” w rozumieniu art. 31 ust. 3, skoro istnieje środek mniej dotkliwy. Luka druga — deficyt reprezentatywności: w aktach projektu i Ocenie Skutków Regulacji nie wskazano żadnej publicznej konsultacji ani ankiety wśród pacjentów ani ich reprezentatywnych organizacji obejmujących pełne spektrum chorób objętych regulacją. Organizacje pacjenckie cytowane jako „głos pacjentów” mają udokumentowane powiązania finansowe z przemysłem farmaceutycznym, co rodzi pytanie o reprezentatywność tego głosu.',
      '3. Naruszenie autonomii pacjenta (art. 47 Konstytucji RP + Konwencja z Oviedo). Konwencja z Oviedo (Rada Europy, 1997) gwarantuje pacjentowi prawo do świadomego wyboru świadczeń zdrowotnych. Wyrok ETPC Jehovah’s Witnesses of Moscow v. Russia (skarga 302/02, 10 czerwca 2010 r.) potwierdza, że prawo pacjenta do dokonywania własnych wyborów medycznych wynika z art. 8 EKPC. UD207 ogranicza tę autonomię w obszarze świadczeń uzupełniających, bez różnicowania między metodami zweryfikowanymi w badaniach klinicznych (np. terapia fotodynamiczna PDT — zarejestrowana przez FDA dla 6 wskazań onkologicznych; tlenoterapia hiperbaryczna HBOT — refundowana przez NFZ dla 14 wskazań) a praktykami niezweryfikowanymi.',
      '4. Funkcjonalne odwrócenie ciężaru dowodu (art. 67zl ust. 4 projektu). Projektowany przepis obarcza świadczeniodawcę obowiązkiem udowodnienia zgodności świadczenia z „aktualną wiedzą medyczną” w sytuacji, gdy granice pojęcia są nieostre, a ciężar dowodu w postępowaniu administracyjnym powinien spoczywać na organie (art. 7, art. 77 k.p.a.). Konstrukcja ta rodzi poważne ryzyko nierównowagi proceduralnej.',
      '5. Penalizacja na podstawie pojęcia niedookreślonego (art. 42 Konstytucji RP). Zasada nullum crimen sine lege certa wymaga precyzyjnego określenia znamion czynu zabronionego. Pojęcie „aktualnej wiedzy medycznej” jako element znamion przewinienia administracyjnego (a w konsekwencji penalnego) nie spełnia tego standardu.',
    ],
  },
  {
    heading: 'III. Strukturalne wady postępowań ws. odpowiedzialności zawodowej',
    paragraphs: [
      'W praktyce orzeczniczej Sądu Najwyższego pojawiły się już przypadki uchylania prawomocnych orzeczeń samorządu lekarskiego ws. odpowiedzialności zawodowej z powodu rażących naruszeń proceduralnych, obejmujących: naruszenie prawa do obrony (art. 6 EKPC, art. 45 Konstytucji RP), przedawnienie czynu w postępowaniu zawodowym oraz brak wymaganej opinii biegłych przy ocenie zgodności postępowania lekarza z pojęciem niedookreślonym, jakim jest „aktualna wiedza medyczna”.',
      'Wykazuje to, że już w obecnym stanie prawnym mechanizmy represji wobec lekarzy stosujących świadczenia uzupełniające produkują orzeczenia, które nie wytrzymują testu kasacyjnego. Projekt UD207 — wzmacniający uprawnienia Rzecznika Praw Pacjenta do publikacji nieprawomocnych decyzji oraz nakładania kar administracyjnych do 500 000 zł — rozszerza ten mechanizm, nie usuwając jego wad strukturalnych.',
    ],
  },
  {
    heading: 'IV. Kumulacja represji w obecnym stanie prawnym',
    paragraphs: [
      'W aktualnym porządku prawnym funkcjonują już mechanizmy kontroli świadczeniodawców działające równolegle w czterech torach: postępowanie zawodowe w samorządzie lekarskim (rzecznicy odpowiedzialności zawodowej, sądy lekarskie, kasacja w Sądzie Najwyższym — Izba Odpowiedzialności Zawodowej); postępowanie administracyjne przed Rzecznikiem Praw Pacjenta (kary administracyjne, decyzje rygorystyczne, kontrola sądowoadministracyjna w WSA i NSA); postępowanie karne (art. 160, art. 162 k.k. w przypadku narażenia pacjenta na niebezpieczeństwo; art. 58 ustawy o zawodach lekarza i lekarza dentysty); postępowanie cywilne (odpowiedzialność deliktowa, naruszenie praw pacjenta).',
      'Uzupełnienie ich uprawnieniami z UD207 (kary do 500 000 zł, publikacja nieprawomocnych decyzji, rozszerzone uprawnienia RPP) ma charakter kumulacji represji, a nie wypełnienia luki regulacyjnej. W teście Engela (ETPC, Engel v. Netherlands) oraz w doktrynie ne bis in idem (ETPC, Menci v. Italy) konstrukcja taka prowadzi do ryzyka naruszenia art. 4 Protokołu 7 EKPC. Trybunał Konstytucyjny w wyroku P 124/15 wskazał, że nakładanie sankcji administracyjnych równolegle z sankcjami karnymi za ten sam czyn wymaga restryktywnej oceny pod kątem proporcjonalności.',
    ],
  },
  {
    heading: 'V. Modele komparatystyczne — UD207 wbrew tendencji europejskiej',
    paragraphs: [
      'Stanowisko Polski w odniesieniu do medycyny uzupełniającej i integracyjnej różni się od kierunku obranego przez kraje członkowskie UE oraz przez WHO:',
      'Szwajcaria — art. 118a Konstytucji Federalnej + obowiązkowa refundacja 5 metod CAM (antropozofia, farmakoterapia tradycyjnej medycyny chińskiej, akupunktura, klasyczna homeopatia, fitoterapia) w ramach OKP od 2017 r.',
      'Niemcy — system Heilpraktiker (ok. 50 000 osób z licencją), preparaty z jemioły w opiece paliatywnej w ramach refundacji GKV (od 2007 r. akupunktura w przewlekłym bólu krzyża i kolana).',
      'Austria — § 11a Ärztegesetz 1998 dopuszcza wybrane metody CAM w ramach 14 dyplomów dodatkowych ÖÄK (w tym terapie wspomagające w onkologii).',
      'Włochy (Toskania) — Legge regionale 9/2007 — sieć ośrodków integracyjnej onkologii w publicznym systemie ochrony zdrowia.',
      'Belgia — Loi Colla (1999), z visa dla homeopatii potwierdzonym w 2024 r.',
      'WHO — rezolucja WHA78(14) z 27 maja 2025 r. (Siódme plenarne posiedzenie, punkt 13.8 porządku obrad) przyjmująca Strategię WHO Tradycyjnej, Komplementarnej i Integracyjnej Medycyny 2025–2034. Oświadczenie UE z 24 maja 2025 r. poparło integrację CAM warunkowaną bezpieczeństwem, jakością, skutecznością i evidence-based medicine, z zastrzeżeniem przeciwdziałania praktykom „harmful and/or ineffective”.',
      'Polski projekt UD207 idzie pod prąd tej tendencji — nie różnicując między metodami zweryfikowanymi a niezweryfikowanymi, kierując się formułą blankietowej penalizacji.',
    ],
  },
  {
    heading: 'VI. Stanowisko końcowe — mądra regulacja, nie blankietowa penalizacja',
    paragraphs: [
      'Składający apel popiera cel projektu w zakresie ochrony pacjentów przed świadczeniodawcami działającymi w złej wierze. Wskazuje natomiast, że obecny tekst UD207: nie spełnia konstytucyjnych standardów określoności prawa i proporcjonalności; nie wypełnia strukturalnej luki w systemie publicznej opieki zdrowotnej (NFZ); nie został poprzedzony rzetelnymi konsultacjami z reprezentatywnymi organizacjami pacjentów wszystkich grup chorobowych; powiela mechanizmy represyjne, których strukturalne wady wykazała już praktyka orzecznicza Sądu Najwyższego ws. odpowiedzialności zawodowej; ustawia Polskę poza głównym nurtem regulacyjnym UE i WHO.',
      'Pakiet obywatelski przedstawia konkretną alternatywę opartą na trzech filarach: (1) prawo pacjenta do świadomego wyboru terapii jako ustawowe wyłączenie z sankcji administracyjnej; (2) realna, merytoryczna kontrola decyzji RPP przez niezależny sąd powszechny (model UOKiK — Sąd Ochrony Konkurencji i Konsumentów) zamiast wyłącznie kontroli legalności; (3) ciągłość opieki w NFZ jako obowiązek każdej decyzji RPP wyłączającej świadczeniodawcę.',
      'Hierarchia oczekiwań wobec procesu legislacyjnego: (1) Sejm (Komisja Zdrowia, pełna izba) — wprowadzenie poprawek sanacyjnych zgodnych z powyższymi zasadami; (2) Senat — równoległy tor sanacyjny lub odrzucenie projektu w razie braku poprawek; (3) Prezydent RP — odmowa podpisu (art. 122 ust. 5) lub skierowanie do TK (art. 122 ust. 3) wyłącznie w razie uchwalenia ustawy bez poprawek; (4) Rzecznik Praw Obywatelskich — równolegle, ocena konstytucyjności i ewentualne wystąpienie do TK (art. 191 ust. 1 pkt 1 Konstytucji RP).',
      'Pełna dokumentacja konstytucyjna, prawna i empiryczna dostępna jest publicznie na stronie pacjentmaprawo.pl (sekcje: „Co proponujemy zamiast”, „Sekcja konstytucyjna”, „Memorandum prawne UD207”).',
    ],
  },
]

/** Pełny tekst apelu jako jeden ciąg — do skopiowania do schowka / wklejenia w e-mailu. */
export const FULL_PETITION_TEXT: string = [
  PETITION_TITLE,
  '',
  ...PETITION_SECTIONS.flatMap((s) => [s.heading, ...s.paragraphs, '']),
  'Pełna dokumentacja: pacjentmaprawo.pl',
]
  .join('\n')
  .trim()
