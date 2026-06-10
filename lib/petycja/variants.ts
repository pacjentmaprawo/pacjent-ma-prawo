// Warianty pism petycji UD207 + formułki „przybliż siebie” + budowanie wiadomości mailto.
// Cała treść jest generowana lokalnie w przeglądarce — strona nie zbiera ani nie wysyła danych.

import type { VariantId } from './addressees'

export interface PetitionVariant {
  id: VariantId
  /** Nazwa wariantu widoczna dla użytkownika. */
  label: string
  /** Dla kogo jest ten wariant. */
  audience: string
  /** Temat wiadomości. */
  subject: string
  /** Treść listu (bez przedstawienia się i stopki — te dodawane są automatycznie). */
  body: string
}

const PETITION_URL = 'https://pacjentmaprawo.pl/petycja-ud207'
const PROPOSAL_URL = 'https://pacjentmaprawo.pl/co-proponujemy'

/** Skrócona lista postulatów obywatelskich — wspólna dla pism do parlamentu. */
const POSTULATY_SKROT = `Wnosimy o oparcie regulacji na następujących zasadach:

1. Prawo pacjenta do wyboru terapii — o sposobie leczenia, w tym o terapiach komplementarnych i wspomagających, decyduje świadomy pacjent wspólnie z lekarzem, nie urząd.
2. Dostęp do terapii komplementarnych i alternatywnych — bez blankietowej eliminacji legalnych metod, w tym dostępnych legalnymi drogami: badania klinicznego i eksperymentu leczniczego za świadomą zgodą pacjenta (jedyna legalna ścieżka dla substancji niezarejestrowanych dla ludzi).
3. Mądra regulacja zamiast zakazu, na wzór Europy — uregulowanie paramedycyny przez kwalifikacje i rejestr (Heilpraktiker w Niemczech, dyplomy ÖÄK w Austrii, model szwajcarski), nie penalizacja całej dziedziny.
4. Wolność debaty i wypowiedzi — ustawa ściga czyn (oszustwo w złej wierze), nie wypowiedź lekarza, naukowca czy pacjenta o leczeniu (art. 54 i art. 73 Konstytucji RP).
5. Żaden urząd ponad sądem — merytoryczna kontrola decyzji RPP przez niezależny sąd powszechny (model UOKiK — Sąd Ochrony Konkurencji i Konsumentów), nie tylko ocena legalności; rygor natychmiastowej wykonalności wyłącznie wyjątkowo, z szybką ścieżką odwoławczą.
6. Domniemanie niewinności — zakaz publikacji i wykonywania nieprawomocnych decyzji RPP, zanim potwierdzi je sąd (art. 42 ust. 3 Konstytucji RP).
7. Nikt nie zostaje bez opieki — obowiązek wskazania w decyzji RPP podmiotu NFZ przejmującego pacjentów wykluczonego świadczeniodawcy.`

export const VARIANTS: Record<VariantId, PetitionVariant> = {
  A: {
    id: 'A',
    label: 'Wariant A — Prezydent RP (apel warunkowy)',
    audience: 'Prezydent RP',
    subject: 'Apel obywatelski ws. projektu UD207 (druk 2598) — prośba o rozważenie weta / kontroli TK',
    body: `Szanowny Panie Prezydencie,

zwracam się z apelem obywatelskim w sprawie projektu ustawy o zmianie ustawy o prawach pacjenta i Rzeczniku Praw Pacjenta (UD207, druk sejmowy nr 2598), którego pierwsze czytanie odbyło się w Sejmowej Komisji Zdrowia 9 czerwca 2026 r.

Popieram cel projektu — ochronę pacjentów przed świadczeniodawcami działającymi w złej wierze. Sprzeciwiam się jednak technice regulacyjnej, która penalizuje na podstawie pojęcia niedookreślonego („aktualna wiedza medyczna”), odwraca ciężar dowodu w postępowaniu administracyjnym (art. 67zl ust. 4) i nie usuwa strukturalnej luki w ciągłości opieki NFZ.

Realna szansa na sanację projektu istnieje obecnie w toku prac parlamentarnych; apele równoległe kieruję do Sejmowej i Senackiej Komisji Zdrowia.

Gdyby jednak ustawa została uchwalona bez wprowadzenia poprawek sanacyjnych, zwracam się z prośbą o rozważenie — w terminie 21 dni od przedstawienia ustawy do podpisu (art. 122 ust. 2 Konstytucji RP) — odmowy jej podpisania i zwrotu do Sejmu (art. 122 ust. 5) lub skierowania ustawy do Trybunału Konstytucyjnego w trybie kontroli prewencyjnej (art. 122 ust. 3).

Pełna treść apelu i lista postulatów: ${PETITION_URL}`,
  },
  B: {
    id: 'B',
    label: 'Wariant B — Sejmowa Komisja Zdrowia (postulaty obywatelskie)',
    audience: 'Sejm — Komisja Zdrowia',
    subject: 'Apel obywatelski ws. projektu UD207 (druk 2598) — postulaty sanacyjne',
    body: `Szanowni Państwo Posłowie,

w nawiązaniu do pierwszego czytania projektu UD207 (druk sejmowy nr 2598) w Sejmowej Komisji Zdrowia w dniu 9 czerwca 2026 r. zwracam się z apelem obywatelskim o wprowadzenie w toku dalszych prac następujących poprawek sanacyjnych. Zachowują one cel projektu (ochrona pacjentów przed pseudoterapiami oferowanymi w złej wierze) i jednocześnie ograniczają poważne ryzyka konstytucyjne — w obszarze zasady określoności prawa (art. 2 Konstytucji RP), proporcjonalności (art. 31 ust. 3) oraz domniemania niewinności (art. 42 ust. 3).

${POSTULATY_SKROT}

Pełna analiza prawna i proponowane brzmienie poszczególnych przepisów (m.in. art. 67zj ust. 3) są dostępne publicznie: ${PROPOSAL_URL} oraz ${PETITION_URL}`,
  },
  C: {
    id: 'C',
    label: 'Wariant C — Senat RP (tor równoległy)',
    audience: 'Senat — Komisja Zdrowia',
    subject: 'Apel obywatelski ws. projektu UD207 (druk 2598) — do Senatu RP',
    body: `Szanowni Państwo Senatorowie,

zwracam się do Senatu RP z apelem obywatelskim o wprowadzenie postulatów sanacyjnych do projektu UD207 (druk sejmowy nr 2598), gdyby wpłynął on do Senatu bez ich uwzględnienia w Sejmie. Jest to apel komplementarny do kierowanego równolegle do Sejmowej Komisji Zdrowia.

Rola Senatu w testowaniu projektów pod kątem konstytucyjności ma szczególne znaczenie wobec regulacji penalizujących obszary medyczne, w których brak jednoznacznej granicy między świadczeniami zweryfikowanymi a wspomagającymi.

${POSTULATY_SKROT}

W razie braku poprawek na poziomie Sejmu, Senat dysponuje narzędziami umożliwiającymi ich wprowadzenie w trybie art. 121 Konstytucji RP, łącznie z odrzuceniem ustawy.

Pełna treść apelu i analiza prawna: ${PETITION_URL} oraz ${PROPOSAL_URL}`,
  },
  D: {
    id: 'D',
    label: 'Wariant D — Rzecznik Praw Obywatelskich',
    audience: 'RPO',
    subject: 'Wniosek obywatelski ws. oceny konstytucyjności projektu UD207 (druk 2598)',
    body: `Szanowny Panie Rzeczniku,

wnoszę o podjęcie przez Rzecznika Praw Obywatelskich działań mających na celu zbadanie zgodności projektu ustawy UD207 (druk sejmowy nr 2598) z Konstytucją RP, w szczególności z art. 2 (określoność prawa), art. 31 ust. 3 (proporcjonalność), art. 42 (nullum crimen sine lege certa) oraz art. 47 (autonomia pacjenta).

W razie uchwalenia ustawy w obecnym kształcie, wnoszę o rozważenie wystąpienia przez Rzecznika z wnioskiem do Trybunału Konstytucyjnego w trybie art. 191 ust. 1 pkt 1 Konstytucji RP.

Zwracam też uwagę na strukturalną lukę w systemie ochrony pacjentów: deficyt ciągłości opieki w NFZ oraz brak konsultacji z reprezentatywnymi organizacjami pacjentów na etapie prac nad projektem.

Argumentacja prawna i dokumentacja: ${PETITION_URL}`,
  },
  E: {
    id: 'E',
    label: 'Wariant E — Redakcje i dziennikarze',
    audience: 'Media',
    subject: 'UD207 (druk 2598) — apel obywatelski i konstruktywna alternatywa',
    body: `Szanowna Redakcjo,

jako obywatel(ka) zainteresowany(a) losami projektu UD207 (druk sejmowy nr 2598, pierwsze czytanie 9 czerwca 2026 r.) chciał(a)bym zwrócić uwagę na aspekty dotychczas niedostatecznie obecne w przekazie publicznym:

1. Strukturalna luka w systemie NFZ — projekt zaostrza penalizację świadczeniodawców usług uzupełniających, nie usuwając pierwotnej przyczyny, dla której pacjenci z nich korzystają.
2. Strukturalne wady postępowań ws. odpowiedzialności zawodowej — Sąd Najwyższy uchylał już prawomocne orzeczenia samorządu lekarskiego z powodu rażących naruszeń proceduralnych.
3. Deficyt reprezentatywności — brak konsultacji z organizacjami pacjentów wszystkich grup chorobowych; organizacje cytowane jako „głos pacjentów” mają udokumentowane powiązania z przemysłem farmaceutycznym.
4. Rozjazd z tendencją europejską i WHO — rezolucja WHA78(14) z 27 maja 2025 r. oraz regulacje w Szwajcarii, Niemczech, Austrii, Włoszech i Belgii idą w kierunku integracji, nie blankietowej penalizacji.
5. Konstruktywna alternatywa — trzy filary: prawo pacjenta do świadomego wyboru terapii, realna kontrola sądowa decyzji RPP (model UOKiK — SOKiK) i obowiązek ciągłości opieki w NFZ.

Pełna dokumentacja konstytucyjna, prawna i empiryczna: ${PETITION_URL}`,
  },
  F: {
    id: 'F',
    label: 'Wariant F — Helsińska Fundacja Praw Człowieka',
    audience: 'HFHR',
    subject: 'Prośba o konsultację pro bono — projekt UD207 (druk 2598)',
    body: `Szanowni Państwo,

zwracam się z prośbą o rozważenie objęcia pakietu dokumentów obywatelskich dot. projektu UD207 (druk sejmowy nr 2598) konsultacją prawną pro bono Helsińskiej Fundacji Praw Człowieka.

Apel podnosi cztery główne zarzuty konstytucyjne: naruszenie zasady określoności prawa (art. 2 Konstytucji RP), proporcjonalności (art. 31 ust. 3) z dwiema strukturalnymi lukami testu, funkcjonalne odwrócenie ciężaru dowodu (art. 67zl ust. 4 projektu) oraz penalizację na podstawie pojęcia niedookreślonego (art. 42 Konstytucji RP).

Z uwagi na etap prac sejmowych (pierwsze czytanie 9 czerwca 2026 r.) prosimy o ewentualne przekazanie wstępnej oceny w trybie pilnym.

Pełna dokumentacja: ${PETITION_URL}`,
  },
  G: {
    id: 'G',
    label: 'Wariant G — Prezes Rady Ministrów (autopoprawka)',
    audience: 'Rząd — Prezes Rady Ministrów',
    subject: 'Apel obywatelski ws. projektu UD207 (druk 2598) — wniosek o autopoprawkę',
    body: `Szanowny Panie Premierze,

projekt UD207 (druk sejmowy nr 2598) został przyjęty przez Radę Ministrów i skierowany do Sejmu; jego pierwsze czytanie w Sejmowej Komisji Zdrowia odbyło się 9 czerwca 2026 r. Jako wnioskodawca rządowy Rada Ministrów dysponuje możliwością wniesienia autopoprawki w toku prac parlamentarnych.

Popieram cel projektu — ochronę pacjentów przed świadczeniodawcami działającymi w złej wierze. Zwracam się jednak z apelem obywatelskim o wprowadzenie autopoprawki obejmującej poniższe poprawki sanacyjne, które zachowują cel ustawy, a usuwają poważne ryzyka konstytucyjne (określoność prawa — art. 2 Konstytucji RP, proporcjonalność — art. 31 ust. 3, domniemanie niewinności — art. 42 ust. 3).

${POSTULATY_SKROT}

Pełna analiza prawna i proponowane brzmienie przepisów: ${PROPOSAL_URL} oraz ${PETITION_URL}`,
  },
}

// Kolejność wyświetlania i grupowania — alfabetyczna (A–F), aby etykieta wariantu
// zgadzała się z pozycją na liście (Wariant A pierwszy, Wariant B drugi itd.).
export const VARIANT_ORDER: VariantId[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

// ─────────────────────────────────────────────────────────────────────────────
// FORMUŁKI „PRZYBLIŻ SIEBIE” — wstawiane jednym kliknięciem do pola tekstowego
// ─────────────────────────────────────────────────────────────────────────────

export interface SelfIntroFormula {
  id: string
  label: string
  text: string
}

export const SELF_INTRO_FORMULAS: SelfIntroFormula[] = [
  {
    id: 'onkologiczny',
    label: 'Pacjent onkologiczny',
    text: 'Jestem pacjentem onkologicznym pozostającym pod stałą opieką w systemie publicznej ochrony zdrowia. Równolegle korzystam ze świadczeń uzupełniających, które wybieram w porozumieniu z lekarzem prowadzącym.',
  },
  {
    id: 'kardiologiczny',
    label: 'Pacjent kardiologiczny',
    text: 'Jestem pacjentem kardiologicznym pod stałą opieką lekarską. Korzystam ze świadczeń profilaktycznych i wspomagających, które mogą znaleźć się w zakresie planowanej regulacji.',
  },
  {
    id: 'autoimmunologiczny',
    label: 'Pacjent autoimmunologiczny',
    text: 'Jestem pacjentem z chorobą autoimmunologiczną pod opieką specjalistyczną. Wielu pacjentów w mojej sytuacji łączy leczenie standardowe ze świadczeniami uzupełniającymi — projekt UD207 może ograniczyć to prawo wyboru.',
  },
  {
    id: 'metaboliczny',
    label: 'Pacjent metaboliczny / cukrzyca / otyłość',
    text: 'Jestem pacjentem z chorobą metaboliczną (np. cukrzyca, otyłość) pod stałą opieką lekarską. Część dostępnych mi świadczeń mieści się w niedookreślonym obszarze ustawy UD207.',
  },
  {
    id: 'neurologiczny',
    label: 'Pacjent neurologiczny / przewlekły',
    text: 'Jestem pacjentem z przewlekłą chorobą neurologiczną pod opieką specjalistyczną. Charakter mojej choroby wymaga długoletniej, wielomodalnej opieki, w której świadczenia uzupełniające pełnią istotną rolę pomocniczą.',
  },
  {
    id: 'rzadka',
    label: 'Pacjent z chorobą rzadką',
    text: 'Jestem pacjentem z chorobą rzadką, w której dostęp do standardowych metod leczenia jest ograniczony, a część świadczeń wspomagających pozostaje poza systemem refundacji. Projekt UD207 grozi dodatkowym ograniczeniem opcji terapeutycznych.',
  },
  {
    id: 'opiekun',
    label: 'Opiekun pacjenta',
    text: 'Jestem opiekunem osoby chorej i znam z bliska realia systemu opieki zdrowotnej w Polsce. Projekt UD207 budzi moje obawy o ograniczenie dostępu pacjentów do świadczeń uzupełniających, z których obecnie legalnie korzystają.',
  },
  {
    id: 'lekarz',
    label: 'Lekarz / personel medyczny',
    text: 'Jestem osobą wykonującą zawód medyczny. Z perspektywy zawodowej dostrzegam ryzyko, że projekt UD207 — przez nieostrość pojęć i odwrócenie ciężaru dowodu — zagraża stabilności praktyki i ciągłości opieki nad pacjentem.',
  },
  {
    id: 'naukowiec',
    label: 'Naukowiec / akademik',
    text: 'Jestem pracownikiem naukowym. Sprawa dotyczy mnie zawodowo w kontekście oceny dowodów naukowych, na których opiera się rozróżnienie między metodami zweryfikowanymi a niezweryfikowanymi.',
  },
  {
    id: 'prawnik',
    label: 'Prawnik / ekspert prawa',
    text: 'Jestem prawnikiem. Niniejsze pismo zawiera argumentację konstytucyjną, którą popieram z perspektywy zawodowej — w szczególności zarzuty z art. 2, art. 31 ust. 3 i art. 42 Konstytucji RP.',
  },
  {
    id: 'obywatel',
    label: 'Obywatel zainteresowany sprawą',
    text: 'Jestem obywatelem RP, który zapoznał się z dokumentacją pakietu obywatelskiego dot. projektu UD207 i podziela wskazane w niej zastrzeżenia konstytucyjne. Sprawa dotyczy mnie jako użytkownika systemu ochrony zdrowia.',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// BUDOWANIE WIADOMOŚCI
// ─────────────────────────────────────────────────────────────────────────────

const FOOTER =
  'Pakiet obywatelski dot. projektu ustawy UD207. Pełna dokumentacja: pacjentmaprawo.pl.'

export interface ComposedMessage {
  subject: string
  body: string
}

/** Składa pełną treść listu: wariant + (opcjonalnie) przedstawienie się + stopka. */
export function composeMessage(variant: PetitionVariant, selfIntro?: string): ComposedMessage {
  const trimmedIntro = selfIntro?.trim()
  const parts = [variant.body]
  if (trimmedIntro) {
    parts.push(`O mnie:\n${trimmedIntro}`)
  }
  parts.push(`Z wyrazami szacunku,\n\n${FOOTER}`)
  return {
    subject: variant.subject,
    body: parts.join('\n\n'),
  }
}

export interface MailtoOptions {
  emails: string[]
  subject: string
  body: string
  bcc?: string
}

/** Buduje URL mailto: z wieloma odbiorcami i opcjonalnym BCC. */
export function buildMailtoUrl({ emails, subject, body, bcc }: MailtoOptions): string {
  const to = emails.join(',')
  const params = new URLSearchParams()
  params.set('subject', subject)
  params.set('body', body)
  if (bcc) params.set('bcc', bcc)
  // URLSearchParams koduje spacje jako '+', ale klienci poczty oczekują %20.
  const query = params.toString().replace(/\+/g, '%20')
  // Adresy e-mail zawierają wyłącznie znaki bezpieczne dla mailto (RFC 6068),
  // dlatego listy odbiorców nie kodujemy — uniknięcie problemów z %40 w klientach poczty.
  return `mailto:${to}?${query}`
}

export const CONTACT_BCC = 'pacjentmaprawo@proton.me'
