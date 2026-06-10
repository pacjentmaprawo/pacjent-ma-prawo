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
      'Składam niniejsze pismo (apel obywatelski) jako obywatel Rzeczypospolitej Polskiej w sprawie projektu ustawy o zmianie ustawy o prawach pacjenta i Rzeczniku Praw Pacjenta oraz ustawy o systemie powiadamiania ratunkowego (UD207, druk sejmowy nr 2598), którego pierwsze czytanie odbyło się w Sejmowej Komisji Zdrowia 9 czerwca 2026 r.',
      'Popieram cel projektu w zakresie ścigania świadczeniodawców działających w złej wierze, oferujących nieskuteczne i niebezpieczne pseudoterapie pacjentom w trudnej sytuacji życiowej. Wnoszę natomiast o wprowadzenie do projektu konkretnych poprawek sanacyjnych, które zapewnią zgodność regulacji z Konstytucją RP, prawem międzynarodowym oraz autonomią pacjenta.',
      'A. Poprawki kluczowe — modelowanie zakresu sankcji',
      '1. Klauzula świadomej zgody pacjenta jako ustawowe wyłączenie (nowy art. 67zj ust. 3). Świadczenie zdrowotne nie powinno stanowić „praktyki pseudomedycznej” w rozumieniu UD207, jeżeli pacjent łącznie spełnił pięć warunków: (1.1) otrzymał na piśmie informację o poziomie dowodów naukowych (OCEBM lub GRADE), alternatywach konwencjonalnych, ryzyku, działaniach niepożądanych, braku gwarancji skuteczności i statusie rejestracyjnym substancji; (1.2) potwierdził pisemnie świadomą zgodę zgodnie z art. 16–17 ustawy o prawach pacjenta i art. 5 Konwencji z Oviedo; (1.3) nie był odwodzony od leczenia zgodnego z aktualną wiedzą medyczną i nie obiecywano mu wyleczenia; (1.4) świadczenie wykonano w podmiocie wpisanym do rejestru podmiotów wykonujących działalność leczniczą, z dokumentacją zgodną z rozdziałem 7 ustawy o prawach pacjenta; (1.5) metoda nie zastępuje leczenia o udokumentowanej skuteczności, gdy jest ono dostępne i medycznie wskazane — chyba że pacjent po pełnej informacji odmawia takiego leczenia zgodnie z przysługującym mu prawem. Ocena uwzględnia preferencje i wartości pacjenta jako trzeci — obok dowodów naukowych i doświadczenia klinicznego — element medycyny opartej na dowodach (EBM).',
      'Cel klauzuli. Klauzula chroni pacjenta nieświadomego (przez warunki 1.1–1.5) i jednocześnie gwarantuje pacjentowi świadomemu prawo do informowanego wyboru świadczeń wspomagających — m.in. wlewów dożylnych preparatów zarejestrowanych, terapii substancjami stosowanymi off-label na podstawie art. 5 dyrektywy 2001/83/WE, świadczeń integracyjnych o gradacji dowodów B–C w skali OCEBM lub GRADE — z których część jest dostępna i refundowana w innych państwach UE i objęta wytycznymi międzynarodowych towarzystw naukowych (ASCO/SIO, ESMO). Świadoma zgoda nie legalizuje oszustwa, ukrywania ryzyka, braku kwalifikacji, fałszywych obietnic wyleczenia ani zastępowania leczenia o udokumentowanej skuteczności — te czyny pozostają w zakresie istniejących reżimów odpowiedzialności (art. 286 k.k., art. 58 ustawy o zawodach lekarza, odpowiedzialność zawodowa samorządu, UOKiK, prawo farmaceutyczne, prawo prasowe).',
      '2. Gradacja dowodów zamiast pojęcia blankietowego. Pojęcie „aktualnej wiedzy medycznej” jako element znamion sankcjonowanego czynu wymaga ustawowego odesłania do systemu oceny poziomu dowodów (OCEBM lub GRADE). Rozróżnienie „zgodne / niezgodne z aktualną wiedzą medyczną” bez gradacji nie odpowiada praktyce evidence-based medicine i jest niezgodne z zasadą określoności prawa (art. 2 Konstytucji RP).',
      '3. Wyłączenie spod sankcji wolności wypowiedzi i debaty naukowej. Sankcja powinna dotyczyć czynu — oferowania pseudoterapii w złej wierze — a nie wypowiedzi o leczeniu. Penalizacja debaty naukowej, informowania o legalnych terapiach wspomagających oraz relacji pacjenta o własnym doświadczeniu narusza wolność wypowiedzi i wolność badań naukowych (art. 54 i art. 73 Konstytucji RP, art. 10 EKPC).',
      '4. Ciągłość opieki — obowiązek wskazania podmiotu przejmującego. Każda decyzja Rzecznika Praw Pacjenta wyłączająca świadczeniodawcę z możliwości udzielania świadczeń powinna zawierać obowiązek wskazania konkretnego podmiotu w systemie NFZ przejmującego dotychczasowych pacjentów — z zachowaniem harmonogramu leczenia. Bez tego elementu sankcja administracyjna oznacza pozostawienie pacjentów bez opieki.',
      '5. Usunięcie funkcjonalnego odwrócenia ciężaru dowodu z art. 67zl ust. 4. W postępowaniu administracyjnym ciężar dowodu powinien spoczywać na organie (art. 7, art. 77 k.p.a.). Obecne brzmienie projektu, przerzucające ciężar wykazania zgodności świadczenia z „aktualną wiedzą medyczną” na świadczeniodawcę, w warunkach pojęcia niedookreślonego rodzi poważne ryzyko nierównowagi proceduralnej.',
      'B. Poprawki proceduralne i okresowe',
      '6. Wyłączenia dla świadczeń realizowanych w legalnych trybach przewidzianych prawem: badania klinicznego zatwierdzonego przez URPL i właściwą komisję bioetyczną; eksperymentu leczniczego w rozumieniu art. 21 i nast. ustawy o zawodach lekarza i lekarza dentysty, prowadzonego za zgodą komisji bioetycznej i na podstawie świadomej zgody pacjenta; programów compassionate use (art. 83 rozp. 726/2004/WE); named patient program; indywidualnego sprowadzenia produktu leczniczego (art. 4 ust. 7–9 Prawa farmaceutycznego); świadczeń legalnie stosowanych lub refundowanych w innych państwach UE/EOG. Tryb eksperymentu leczniczego oraz badania klinicznego jest jedyną legalną drogą dla substancji nieposiadających rejestracji dla ludzi — wyłączenie usuwa wobec nich ryzyko nakładania dodatkowej sankcji „pseudomedycznej”.',
      '7. Niezależna kontrola sądowa i rozdział funkcji. Decyzja tymczasowa oraz publikacja rozstrzygnięcia Rzecznika Praw Pacjenta powinny podlegać kontroli sądu, a wniesienie odwołania powinno wstrzymywać ich wykonanie do czasu rozstrzygnięcia. Połączenie w jednym organie funkcji prowadzenia postępowania, nakładania sankcji, publikacji rozstrzygnięcia i kontroli jego wykonania — bez niezależnej kontroli sądowej na wczesnym etapie — narusza prawo do sądu i gwarancje rzetelnego postępowania (art. 45 Konstytucji RP, art. 6 EKPC).',
      '8. Vacatio legis 12 miesięcy zamiast 3. Trybunał Konstytucyjny w wyroku K 47/14 wskazał, że regulacje penalizujące obszary dotychczas legalnej działalności wymagają rozszerzonego okresu dostosowawczego. Trzymiesięczna vacatio legis nie spełnia tego standardu.',
      '9. Konsultacje z reprezentatywnymi organizacjami pacjentów wszystkich grup chorobowych. Obowiązek przeprowadzenia, w okresie vacatio legis, publicznych i udokumentowanych konsultacji z reprezentatywnymi organizacjami pacjentów — nie tylko onkologicznymi, ale obejmującymi również pacjentów kardiologicznych, autoimmunologicznych, metabolicznych, neurologicznych i z chorobami rzadkimi. Konsultacje powinny obejmować ujawnienie konfliktów interesów podmiotów opiniujących projekt.',
      '10. Zakaz publikacji nieprawomocnych decyzji RPP. Publikowanie nieprawomocnych decyzji administracyjnych RPP narusza domniemanie niewinności (art. 42 ust. 3 Konstytucji RP) i prowadzi do nieodwracalnych skutków reputacyjnych przed rozstrzygnięciem sprawy. Publikacja powinna następować dopiero po prawomocnym (lub ostatecznym) rozstrzygnięciu w postępowaniu sądowoadministracyjnym.',
      'C. Postulat systemowy i klauzula bezpieczeństwa',
      '11. Równoległe uregulowanie ciągłości opieki w NFZ. W tym samym pakiecie legislacyjnym wnoszę o wprowadzenie regulacji eliminujących strukturalną lukę systemową w opiece publicznej (kolejki, limity, brak refundacji terapii skojarzonych w onkologii i chorobach przewlekłych), która stanowi pierwotną przyczynę zjawiska, na które ustawa ma odpowiadać.',
      '12. Klauzula bezpieczeństwa. W przypadku uchwalenia ustawy bez wprowadzenia poprawek wskazanych w pkt 1–11 wnoszę o odmowę podpisania ustawy przez Prezydenta RP w trybie art. 122 ust. 5 Konstytucji RP (weto) lub o skierowanie ustawy do Trybunału Konstytucyjnego w trybie art. 122 ust. 3 Konstytucji RP.',
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
      'Pakiet obywatelski przedstawia konkretną alternatywę opartą na trzech filarach: (1) klauzula świadomej zgody pacjenta jako ustawowe wyłączenie z sankcji administracyjnej; (2) gradacja dowodów (OCEBM lub GRADE) zamiast pojęcia blankietowego; (3) ciągłość opieki w NFZ jako obowiązek każdej decyzji RPP wyłączającej świadczeniodawcę.',
      'Hierarchia oczekiwań wobec procesu legislacyjnego: (1) Sejm (Komisja Zdrowia, pełna izba) — wprowadzenie poprawek sanacyjnych z pkt 1–11; (2) Senat — równoległy tor sanacyjny lub odrzucenie projektu w razie braku poprawek; (3) Prezydent RP — odmowa podpisu (art. 122 ust. 5) lub skierowanie do TK (art. 122 ust. 3) wyłącznie w razie uchwalenia ustawy bez poprawek; (4) Rzecznik Praw Obywatelskich — równolegle, ocena konstytucyjności i ewentualne wystąpienie do TK (art. 191 ust. 1 pkt 1 Konstytucji RP).',
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
