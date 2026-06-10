// Konfiguracja adresatów formularza petycji UD207.
// Architektura: bez backendu — wysyłka przez mailto: generowane lokalnie w przeglądarce.
// Adresy zweryfikowane w bazach pierwotnych (sejm.gov.pl, senat.gov.pl, prezydent.pl, brpo.gov.pl).

export type AddresseeCategory =
  | 'sejm-prezydium'
  | 'sejm-czlonek'
  | 'senat-prezydium'
  | 'senat-czlonek'
  | 'prezydent'
  | 'rpo'
  | 'marszalek-sejmu'
  | 'marszalek-senatu'
  | 'mz'
  | 'rpp'
  | 'media-branzowe'
  | 'media-obywatelskie'
  | 'media-mainstream'
  | 'hfhr'
  | 'premier'
  | 'lokalny'

export type AddresseePriority = 'krytyczny' | 'wysoki' | 'sredni' | 'niski'

export type DeliveryMode = 'mailto' | 'external_form' | 'manual'

export type VariantId = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'

/** Grupa wyświetlana w interfejsie — porządkuje listę adresatów dla osoby wypełniającej. */
export type DisplayGroup =
  | 'sejm'
  | 'senat'
  | 'prezydent-kontrola'
  | 'rzad'
  | 'pomoc-media'
  | 'lokalny'

export interface Addressee {
  id: string
  label: string
  /** Krótki opis roli widoczny pod nazwą. */
  role?: string
  email: string
  category: AddresseeCategory
  displayGroup: DisplayGroup
  priority: AddresseePriority
  /** Czy zaznaczony domyślnie po wejściu na stronę. */
  defaultChecked: boolean
  deliveryMode: DeliveryMode
  /** Tylko dla deliveryMode === 'external_form'. */
  externalUrl?: string
  /** Sugerowany wariant pisma (można zmienić ręcznie). */
  variantSuggestion: VariantId
  note?: string
  /** Klub parlamentarny (dla posłów/senatorów) — wyświetlany jako znacznik. */
  klub?: string
  requiresVerification?: boolean
}

export const DISPLAY_GROUPS: { id: DisplayGroup; label: string; description: string }[] = [
  {
    id: 'sejm',
    label: 'Sejm — Komisja Zdrowia',
    description:
      'Priorytet kampanii. To tutaj toczą się prace nad poprawkami do projektu po pierwszym czytaniu.',
  },
  {
    id: 'senat',
    label: 'Senat — Komisja Zdrowia',
    description: 'Równoległy tor sanacyjny. Senat może wprowadzić poprawki lub odrzucić projekt.',
  },
  {
    id: 'prezydent-kontrola',
    label: 'Prezydent i instytucje kontroli',
    description: 'Prezydent (weto / Trybunał Konstytucyjny — warunkowo) oraz Rzecznik Praw Obywatelskich.',
  },
  {
    id: 'rzad',
    label: 'Rząd — wnioskodawca projektu',
    description:
      'Rada Ministrów wniosła projekt i może zgłosić autopoprawkę na etapie sejmowym. Adresat opcjonalny.',
  },
  {
    id: 'pomoc-media',
    label: 'Pomoc prawna i media',
    description: 'Helsińska Fundacja Praw Człowieka oraz redakcje opisujące projekt.',
  },
  {
    id: 'lokalny',
    label: 'Twój lokalny przedstawiciel',
    description: 'Możesz dopisać e-mail swojego posła lub posłanki — list od wyborcy z okręgu ma dużą wagę.',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// 20 ADRESATÓW PRIORYTETOWYCH — zaznaczeni domyślnie
// ─────────────────────────────────────────────────────────────────────────────

export const PRIORITY_ADDRESSEES: Addressee[] = [
  // — Sejm: prezydium Komisji Zdrowia —
  {
    id: 'golbik-przew-kz-sejm',
    label: 'Marta Golbik',
    role: 'Przewodnicząca Komisji Zdrowia Sejmu RP',
    email: 'marta.golbik@sejm.gov.pl',
    category: 'sejm-prezydium',
    displayGroup: 'sejm',
    priority: 'krytyczny',
    defaultChecked: true,
    deliveryMode: 'mailto',
    variantSuggestion: 'B',
    klub: 'KO',
  },
  {
    id: 'gelert-wiceprzew',
    label: 'Elżbieta Gelert',
    role: 'Wiceprzewodnicząca Komisji Zdrowia Sejmu',
    email: 'elzbieta.gelert@sejm.gov.pl',
    category: 'sejm-prezydium',
    displayGroup: 'sejm',
    priority: 'wysoki',
    defaultChecked: true,
    deliveryMode: 'mailto',
    variantSuggestion: 'B',
    klub: 'KO',
  },
  {
    id: 'hok-wiceprzew',
    label: 'Marek Hok',
    role: 'Wiceprzewodniczący Komisji Zdrowia Sejmu',
    email: 'marek.hok@sejm.gov.pl',
    category: 'sejm-prezydium',
    displayGroup: 'sejm',
    priority: 'wysoki',
    defaultChecked: true,
    deliveryMode: 'mailto',
    variantSuggestion: 'B',
    klub: 'KO',
  },
  {
    id: 'wicha-wiceprzew',
    label: 'Joanna Wicha',
    role: 'Wiceprzewodnicząca Komisji Zdrowia Sejmu',
    email: 'joanna.wicha@sejm.gov.pl',
    category: 'sejm-prezydium',
    displayGroup: 'sejm',
    priority: 'wysoki',
    defaultChecked: true,
    deliveryMode: 'mailto',
    variantSuggestion: 'B',
    klub: 'Lewica',
  },
  {
    id: 'tomczak-wiceprzew',
    label: 'Wioleta Tomczak',
    role: 'Wiceprzewodnicząca Komisji Zdrowia Sejmu',
    email: 'wioleta.tomczak@sejm.gov.pl',
    category: 'sejm-prezydium',
    displayGroup: 'sejm',
    priority: 'wysoki',
    defaultChecked: true,
    deliveryMode: 'mailto',
    variantSuggestion: 'B',
    klub: 'Polska 2050',
  },
  {
    id: 'sojka-wiceprzew',
    label: 'Katarzyna Sójka',
    role: 'Wiceprzewodnicząca Komisji Zdrowia Sejmu',
    email: 'katarzyna.sojka@sejm.gov.pl',
    category: 'sejm-prezydium',
    displayGroup: 'sejm',
    priority: 'wysoki',
    defaultChecked: true,
    deliveryMode: 'mailto',
    variantSuggestion: 'B',
    klub: 'PiS',
  },
  // — Sejm: wybrani członkowie —
  {
    id: 'piecha-kz-sejm',
    label: 'Bolesław Piecha',
    role: 'Członek Komisji Zdrowia Sejmu',
    email: 'boleslaw.piecha@sejm.gov.pl',
    category: 'sejm-czlonek',
    displayGroup: 'sejm',
    priority: 'sredni',
    defaultChecked: true,
    deliveryMode: 'mailto',
    variantSuggestion: 'B',
    klub: 'PiS',
  },
  {
    id: 'szczurek-zelazko-kz-sejm',
    label: 'Józefa Szczurek-Żelazko',
    role: 'Członkini Komisji Zdrowia Sejmu',
    email: 'jozefa.szczurek-zelazko@sejm.gov.pl',
    category: 'sejm-czlonek',
    displayGroup: 'sejm',
    priority: 'sredni',
    defaultChecked: true,
    deliveryMode: 'mailto',
    variantSuggestion: 'B',
    klub: 'PiS',
  },
  // — Sejm: Marszałek (kanał ogólny) —
  {
    id: 'czarzasty-marszalek-sejmu',
    label: 'Marszałek Sejmu (Włodzimierz Czarzasty)',
    role: 'Kanał ogólny Sejmu — z dopiskiem „Do Komisji Zdrowia / Marszałka”',
    email: 'listy@sejm.gov.pl',
    category: 'marszalek-sejmu',
    displayGroup: 'sejm',
    priority: 'sredni',
    defaultChecked: true,
    deliveryMode: 'mailto',
    variantSuggestion: 'B',
    klub: 'Lewica',
  },
  // — Senat: prezydium Komisji Zdrowia —
  {
    id: 'malecka-libera-przew-kz-senat',
    label: 'Beata Małecka-Libera',
    role: 'Przewodnicząca Komisji Zdrowia Senatu RP',
    email: 'beata.malecka-libera@senat.gov.pl',
    category: 'senat-prezydium',
    displayGroup: 'senat',
    priority: 'wysoki',
    defaultChecked: true,
    deliveryMode: 'mailto',
    variantSuggestion: 'C',
    klub: 'KO',
  },
  {
    id: 'kz-senat-sekretariat',
    label: 'Komisja Zdrowia Senatu (sekretariat)',
    role: 'Oficjalny adres sekretariatu komisji',
    email: 'kz@senat.gov.pl',
    category: 'senat-prezydium',
    displayGroup: 'senat',
    priority: 'wysoki',
    defaultChecked: true,
    deliveryMode: 'mailto',
    variantSuggestion: 'C',
  },
  {
    id: 'konieczny-senat',
    label: 'Wojciech Konieczny',
    role: 'Wiceprzewodniczący Komisji Zdrowia Senatu',
    email: 'wojciech.konieczny@senat.gov.pl',
    category: 'senat-prezydium',
    displayGroup: 'senat',
    priority: 'sredni',
    defaultChecked: true,
    deliveryMode: 'mailto',
    variantSuggestion: 'C',
    klub: 'Lewica',
  },
  {
    id: 'gorgon-komor-senat',
    label: 'Agnieszka Gorgoń-Komor',
    role: 'Członkini Komisji Zdrowia Senatu',
    email: 'agnieszka.gorgon-komor@senat.gov.pl',
    category: 'senat-czlonek',
    displayGroup: 'senat',
    priority: 'sredni',
    defaultChecked: true,
    deliveryMode: 'mailto',
    variantSuggestion: 'C',
    klub: 'KO',
  },
  // — Senat: Marszałek —
  {
    id: 'kidawa-blonska-marszalek-senatu',
    label: 'Marszałek Senatu (Małgorzata Kidawa-Błońska)',
    role: 'Gabinet Marszałka Senatu',
    email: 'gms@senat.gov.pl',
    category: 'marszalek-senatu',
    displayGroup: 'senat',
    priority: 'wysoki',
    defaultChecked: true,
    deliveryMode: 'mailto',
    variantSuggestion: 'C',
    klub: 'KO',
  },
  // — Prezydent i kontrola —
  {
    id: 'prezydent-nawrocki',
    label: 'Prezydent RP (Karol Nawrocki)',
    role: 'Apel warunkowy o weto / Trybunał Konstytucyjny — gdyby ustawa wpłynęła bez poprawek',
    email: 'listy@prezydent.pl',
    category: 'prezydent',
    displayGroup: 'prezydent-kontrola',
    priority: 'krytyczny',
    defaultChecked: true,
    deliveryMode: 'mailto',
    variantSuggestion: 'A',
  },
  {
    id: 'rpo-wiacek',
    label: 'Rzecznik Praw Obywatelskich (prof. Marcin Wiącek)',
    role: 'Wniosek o ocenę konstytucyjności — przez oficjalny formularz BRPO',
    email: '',
    category: 'rpo',
    displayGroup: 'prezydent-kontrola',
    priority: 'krytyczny',
    defaultChecked: true,
    deliveryMode: 'external_form',
    externalUrl: 'https://formularze.brpo.gov.pl/formularz_wniosek_ogolny',
    variantSuggestion: 'D',
    note: 'BRPO przyjmuje wnioski przez formularz internetowy. Krok po kroku: kliknij „Kopiuj treść wniosku” (wariant D), otwórz formularz BRPO i wklej skopiowaną treść w polu wiadomości.',
  },
  // — Pomoc prawna i media —
  {
    id: 'hfhr',
    label: 'Helsińska Fundacja Praw Człowieka',
    role: 'Prośba o konsultację prawną pro bono',
    email: 'listy@hfhr.pl',
    category: 'hfhr',
    displayGroup: 'pomoc-media',
    priority: 'wysoki',
    defaultChecked: true,
    deliveryMode: 'mailto',
    variantSuggestion: 'F',
  },
  {
    id: 'termedia',
    label: 'Termedia / „Menedżer Zdrowia”',
    role: 'Redakcja branżowa',
    email: 'termedia@termedia.pl',
    category: 'media-branzowe',
    displayGroup: 'pomoc-media',
    priority: 'wysoki',
    defaultChecked: true,
    deliveryMode: 'mailto',
    variantSuggestion: 'E',
  },
  {
    id: 'oko-press',
    label: 'OKO.press',
    role: 'Redakcja',
    email: 'redakcja@oko.press',
    category: 'media-obywatelskie',
    displayGroup: 'pomoc-media',
    priority: 'wysoki',
    defaultChecked: true,
    deliveryMode: 'mailto',
    variantSuggestion: 'E',
  },
  // — Lokalny przedstawiciel (wpisywany ręcznie) —
  {
    id: 'moj-posel',
    label: 'Mój poseł / moja posłanka',
    role: 'Wpisz e-mail swojego przedstawiciela (wyszukaj na sejm.gov.pl)',
    email: '',
    category: 'lokalny',
    displayGroup: 'lokalny',
    priority: 'wysoki',
    defaultChecked: false,
    deliveryMode: 'manual',
    externalUrl: 'https://www.sejm.gov.pl/Sejm10.nsf/poslowie.xsp?type=A',
    variantSuggestion: 'B',
    note: 'List od wyborcy z własnego okręgu jest często skuteczniejszy niż masowa korespondencja.',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// ADRESACI OPCJONALNI — domyślnie odznaczeni, w sekcji „Rozszerz listę”
// ─────────────────────────────────────────────────────────────────────────────

export const OPTIONAL_ADDRESSEES: Addressee[] = [
  // Rząd — wnioskodawca projektu (autopoprawka)
  {
    id: 'tusk-premier',
    label: 'Premier Donald Tusk (KPRM)',
    role: 'Wnioskodawca rządowy — apel o autopoprawkę do projektu',
    email: 'kontakt@kprm.gov.pl',
    category: 'premier',
    displayGroup: 'rzad',
    priority: 'sredni',
    defaultChecked: false,
    deliveryMode: 'mailto',
    variantSuggestion: 'G',
    note: 'Oficjalny adres KPRM dla obywateli (kontakt@kprm.gov.pl). Rada Ministrów jest wnioskodawcą projektu i może wnieść autopoprawkę na etapie sejmowym.',
  },
  // Pozostali senatorowie Komisji Zdrowia
  {
    id: 'matecka-senat',
    label: 'Ewa Matecka',
    role: 'Członkini Komisji Zdrowia Senatu',
    email: 'ewa.matecka@senat.gov.pl',
    category: 'senat-czlonek',
    displayGroup: 'senat',
    priority: 'niski',
    defaultChecked: false,
    deliveryMode: 'mailto',
    variantSuggestion: 'C',
    klub: 'KO',
  },
  {
    id: 'kraska-senat',
    label: 'Waldemar Kraska',
    role: 'Wiceprzewodniczący Komisji Zdrowia Senatu',
    email: 'waldemar.kraska@senat.gov.pl',
    category: 'senat-prezydium',
    displayGroup: 'senat',
    priority: 'niski',
    defaultChecked: false,
    deliveryMode: 'mailto',
    variantSuggestion: 'C',
    klub: 'PiS',
  },
  {
    id: 'kalata-senat',
    label: 'Andrzej Kalata',
    role: 'Członek Komisji Zdrowia Senatu',
    email: 'andrzej.kalata@senat.gov.pl',
    category: 'senat-czlonek',
    displayGroup: 'senat',
    priority: 'niski',
    defaultChecked: false,
    deliveryMode: 'mailto',
    variantSuggestion: 'C',
    klub: 'PiS',
  },
  // Media branżowe — dziennikarze imienni
  {
    id: 'lurka-termedia',
    label: 'Krystian Lurka („Menedżer Zdrowia”)',
    role: 'Dziennikarz branżowy',
    email: 'k.lurka@termedia.pl',
    category: 'media-branzowe',
    displayGroup: 'pomoc-media',
    priority: 'niski',
    defaultChecked: false,
    deliveryMode: 'mailto',
    variantSuggestion: 'E',
  },
  {
    id: 'michalak-termedia',
    label: 'Janusz Michalak („Menedżer Zdrowia”)',
    role: 'Dziennikarz branżowy',
    email: 'j.michalak@termedia.pl',
    category: 'media-branzowe',
    displayGroup: 'pomoc-media',
    priority: 'niski',
    defaultChecked: false,
    deliveryMode: 'mailto',
    variantSuggestion: 'E',
  },
  {
    id: 'puls-medycyny',
    label: 'Puls Medycyny',
    role: 'Redakcja branżowa',
    email: 'redakcja@pulsmedycyny.pl',
    category: 'media-branzowe',
    displayGroup: 'pomoc-media',
    priority: 'niski',
    defaultChecked: false,
    deliveryMode: 'mailto',
    variantSuggestion: 'E',
    requiresVerification: true,
  },
  {
    id: 'rynek-zdrowia',
    label: 'Rynek Zdrowia',
    role: 'Redakcja branżowa',
    email: 'redakcja@rynekzdrowia.pl',
    category: 'media-branzowe',
    displayGroup: 'pomoc-media',
    priority: 'niski',
    defaultChecked: false,
    deliveryMode: 'mailto',
    variantSuggestion: 'E',
    requiresVerification: true,
  },
  {
    id: 'demagog',
    label: 'Demagog.org.pl',
    role: 'Portal fact-checkingowy',
    email: 'redakcja@demagog.org.pl',
    category: 'media-obywatelskie',
    displayGroup: 'pomoc-media',
    priority: 'niski',
    defaultChecked: false,
    deliveryMode: 'mailto',
    variantSuggestion: 'E',
  },
  {
    id: 'rymanowski',
    label: 'red. Bogdan Rymanowski',
    role: 'Dziennikarz / publicysta — wpisz adres redakcyjny lub kontaktowy',
    email: '',
    category: 'media-mainstream',
    displayGroup: 'pomoc-media',
    priority: 'niski',
    defaultChecked: false,
    deliveryMode: 'manual',
    variantSuggestion: 'E',
    requiresVerification: true,
    note: 'Brak publicznie zweryfikowanego adresu redakcyjnego — wpisz kontakt, którym dysponujesz (np. przez kanał programu / media społecznościowe).',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// PEŁNY SKŁAD KOMISJI ZDROWIA SEJMU — opcjonalny pakiet zbiorczy (39 posłów)
// Schemat e-mail: imie.nazwisko@sejm.gov.pl (znaki diakrytyczne usuwane).
// Pakiet oznaczony jako wymagający weryfikacji — duża skala wysyłki.
// ─────────────────────────────────────────────────────────────────────────────

interface PoselSeed {
  imie: string
  nazwisko: string
  klub: string
}

const FULL_KZ_SEJM_SEED: PoselSeed[] = [
  { imie: 'Jacek', nazwisko: 'Bogucki', klub: 'PiS' },
  { imie: 'Krzysztof', nazwisko: 'Bojarski', klub: 'KO' },
  { imie: 'Tadeusz', nazwisko: 'Chrzan', klub: 'PiS' },
  { imie: 'Alicja', nazwisko: 'Chybicka', klub: 'KO' },
  { imie: 'Janusz', nazwisko: 'Cieszyński', klub: 'PiS' },
  { imie: 'Anna', nazwisko: 'Dąbrowska-Banaszek', klub: 'PiS' },
  { imie: 'Włodzisław', nazwisko: 'Giziński', klub: 'KO' },
  { imie: 'Czesław', nazwisko: 'Hoc', klub: 'PiS' },
  { imie: 'Fryderyk', nazwisko: 'Kapinos', klub: 'PiS' },
  { imie: 'Iwona', nazwisko: 'Karolewska', klub: 'KO' },
  { imie: 'Władysław', nazwisko: 'Kosiniak-Kamysz', klub: 'PSL-TD' },
  { imie: 'Iwona', nazwisko: 'Kozłowska', klub: 'KO' },
  { imie: 'Anna', nazwisko: 'Kwiecień', klub: 'PiS' },
  { imie: 'Ewa', nazwisko: 'Leniart', klub: 'PiS' },
  { imie: 'Grzegorz', nazwisko: 'Lorek', klub: 'PiS' },
  { imie: 'Radosław', nazwisko: 'Lubczyk', klub: 'PSL-TD' },
  { imie: 'Rajmund', nazwisko: 'Miller', klub: 'KO' },
  { imie: 'Joanna', nazwisko: 'Mucha', klub: 'Polska 2050' },
  { imie: 'Grzegorz', nazwisko: 'Napieralski', klub: 'KO' },
  { imie: 'Norbert', nazwisko: 'Pietrykowski', klub: 'Polska 2050' },
  { imie: 'Grzegorz', nazwisko: 'Płaczek', klub: 'Konfederacja' },
  { imie: 'Jerzy', nazwisko: 'Polaczek', klub: 'PiS' },
  { imie: 'Elżbieta', nazwisko: 'Polak', klub: 'KO' },
  { imie: 'Krystyna', nazwisko: 'Skowrońska', klub: 'KO' },
  { imie: 'Patryk', nazwisko: 'Wicher', klub: 'PiS' },
  { imie: 'Ryszard', nazwisko: 'Wilk', klub: 'Konfederacja' },
  { imie: 'Jolanta', nazwisko: 'Zięba-Gzik', klub: 'PSL-TD' },
]

/** Zamienia polskie znaki na łacińskie i buduje slug e-mailowy. */
function slugifyForEmail(value: string): string {
  const map: Record<string, string> = {
    ą: 'a', ć: 'c', ę: 'e', ł: 'l', ń: 'n', ó: 'o', ś: 's', ź: 'z', ż: 'z',
    Ą: 'a', Ć: 'c', Ę: 'e', Ł: 'l', Ń: 'n', Ó: 'o', Ś: 's', Ź: 'z', Ż: 'z',
  }
  return value
    .split('')
    .map((ch) => map[ch] ?? ch)
    .join('')
    .toLowerCase()
    .replace(/\s+/g, '-')
}

export const FULL_KZ_SEJM_ADDRESSEES: Addressee[] = FULL_KZ_SEJM_SEED.map((p) => {
  const id = `kz-sejm-${slugifyForEmail(p.imie)}-${slugifyForEmail(p.nazwisko)}`
  const email = `${slugifyForEmail(p.imie)}.${slugifyForEmail(p.nazwisko)}@sejm.gov.pl`
  return {
    id,
    label: `${p.imie} ${p.nazwisko}`,
    role: 'Członek Komisji Zdrowia Sejmu',
    email,
    category: 'sejm-czlonek',
    displayGroup: 'sejm',
    priority: 'niski',
    defaultChecked: false,
    deliveryMode: 'mailto',
    variantSuggestion: 'B',
    klub: p.klub,
    requiresVerification: true,
  } satisfies Addressee
})

/** Wszyscy adresaci znani aplikacji (priorytetowi + opcjonalni + pełna komisja). */
export const ALL_ADDRESSEES: Addressee[] = [
  ...PRIORITY_ADDRESSEES,
  ...OPTIONAL_ADDRESSEES,
  ...FULL_KZ_SEJM_ADDRESSEES,
]

export function getAddresseeById(id: string): Addressee | undefined {
  return ALL_ADDRESSEES.find((a) => a.id === id)
}

/** Adresaci zaznaczeni domyślnie — rdzeń strategiczny (9 osób). */
export const CORE_DEFAULT_IDS: string[] = [
  'golbik-przew-kz-sejm',
  'gelert-wiceprzew',
  'hok-wiceprzew',
  'wicha-wiceprzew',
  'tomczak-wiceprzew',
  'sojka-wiceprzew',
  'malecka-libera-przew-kz-senat',
  'prezydent-nawrocki',
  'rpo-wiacek',
]
