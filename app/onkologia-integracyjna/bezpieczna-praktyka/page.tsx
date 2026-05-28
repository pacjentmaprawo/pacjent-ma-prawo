import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bezpieczna praktyka — onkologia integracyjna',
  description:
    'Zasady ogólne bezpiecznego korzystania z metod onkologii integracyjnej: jakość preparatu, interakcje, pro- i antyoksydacja, przykłady błędów.',
}

export default function BezpiecznaPraktykaPage() {
  return (
    <article className="space-y-12">
      {/* HERO */}
      <header className="space-y-6">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">
          Edukacja pacjenta • Zasady bezpieczeństwa
        </p>
        <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
          Bezpieczna praktyka w onkologii integracyjnej
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Substancje i procedury opisane w tej bazie wiedzy — łącznie z tymi o najlepszym profilu bezpieczeństwa
          — wymagają świadomego podejścia. Tu zebraliśmy zasady ogólne, które dotyczą wszystkich metod CAM:
          jakości preparatu, sposobu podania, interakcji, oraz najważniejszego mechanistycznie aspektu —
          różnicy między fazami pro-oksydacyjnymi (ATAK) a antyoksydacyjnymi (REGENERACJA) w protokołach
          integracyjnych.
        </p>
      </header>

      {/* DLACZEGO TA STRONA */}
      <section className="rounded-lg border border-primary/30 bg-primary/5 p-6">
        <h2 className="mb-3 font-serif text-xl font-semibold">Dlaczego ta strona istnieje</h2>
        <p className="text-sm text-muted-foreground">
          Najczęstsze błędy pacjentów onkologicznych korzystających z metod komplementarnych nie wynikają
          z wyboru „złej" substancji. Wynikają z <strong>nieświadomego łączenia substancji o przeciwstawnych
          mechanizmach</strong>, ze <strong>złej jakości preparatu</strong>, lub z <strong>braku konsultacji</strong>
          {' '}z lekarzem znającym mechanizmy CAM. Ta strona nie zawiera listy „zakazanych ziół" — odpowiedzialność
          za bezpieczeństwo leży po stronie kwalifikowanego klinicysty oraz po stronie poinformowanego pacjenta,
          nie po stronie listy ministerialnej.
        </p>
      </section>

      {/* 1 — JAKOŚĆ PREPARATU */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold">1. Jakość preparatu</h2>
        <p className="text-muted-foreground">
          Te same ziele, ten sam grzyb, ta sama substancja — mogą mieć diametralnie różne działanie zależnie
          od standaryzacji i jakości produkcji. Przykłady z naszej bazy:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            <strong>Boswellia bez AKBA</strong> — zwykły proszek ziołowy bez deklarowanej zawartości
            acetyl-11-keto-β-boswelic acid jest bezużyteczny klinicznie. Wymóg: BSE-018 (Sabinsa, 30% AKBA),
            H15 lub Boswellin® Super z deklaracją.
          </li>
          <li>
            <strong>Wilcacora bez POA-only</strong> — preparaty mieszane POA+TOA znoszą się nawzajem
            (EMA HMPC Assessment Report 2015, Uncaria tomentosa). Wymóg: standaryzacja POA-only, zwykle deklarowane na etykiecie.
          </li>
          <li>
            <strong>Maitake bez D-fraction</strong> — surowy proszek z maitake nie zawiera wystandaryzowanej
            ilości aktywnego β-1,6/1,3-glukanu. Wymóg: preparaty Nanba/Yukiguni z deklaracją D-fraction.
          </li>
          <li>
            <strong>Reishi proszek vs ekstrakt</strong> — proszek z całych grzybów może powodować
            hepatotoksyczność opisaną w case reports. Ekstrakt wodny lub etanolowy z deklaracją β-glukanów
            i triterpenów jest bezpieczniejszy.
          </li>
          <li>
            <strong>Urządzenia do inhalacji H₂</strong> — wymóg CE jako wyrób medyczny klasy I lub IIa,
            nie „wellness". Stężenie ≥66% H₂ + 33% O₂.
          </li>
        </ul>
        <p className="text-muted-foreground">
          <strong>Praktyczna zasada:</strong> jeśli preparat nie ma na etykiecie deklarowanej zawartości
          aktywnego związku (np. „30% AKBA", „POA-standaryzowany", „CS-4", „D-fraction") — najprawdopodobniej
          nie zadziała tak jak preparat z RCT.
        </p>
      </section>

      {/* 2 — DAWKOWANIE I MONITOROWANIE */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold">2. Dawkowanie, sposób podania, monitorowanie</h2>
        <p className="text-muted-foreground">
          Każda metoda z naszej bazy ma <strong>w polu „warning"</strong> wskazane konkretne parametry monitorowania.
          Najważniejsze zasady ogólne:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            <strong>Wlewy dożylne (IVC, artesunat IV, glutation IV)</strong> — wymagają kwalifikowanego personelu
            medycznego, kontroli parametrów (G6PD przed IVC, funkcja nerek, jonogram).
          </li>
          <li>
            <strong>Witamina D</strong> — monitorowanie 25(OH)D i wapnia. Hiperkalcemia przy nadmiarze.
          </li>
          <li>
            <strong>Boswellia, Reishi przy warfarynie</strong> — kontrola INR.
          </li>
          <li>
            <strong>Wilcacora, Cordyceps, Reishi po przeszczepie narządów</strong> — konsultacja
            z transplantologiem, nigdy samodzielnie.
          </li>
          <li>
            <strong>Czas sesji H₂</strong> — 2-4h dziennie według protokołów RCT (Liu 2025, Chitapanarux 2024).
          </li>
        </ul>
      </section>

      {/* 3 — INTERAKCJE */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold">3. Interakcje — co naprawdę się sumuje i co się znosi</h2>
        <p className="text-muted-foreground">
          Trzy kategorie interakcji o których warto wiedzieć:
        </p>
        <div className="space-y-4">
          <div className="rounded-lg border bg-card p-5">
            <h3 className="mb-2 font-semibold">Interakcje lek-zioło (farmakokinetyczne)</h3>
            <p className="text-sm text-muted-foreground">
              Wiele substancji CAM modyfikuje aktywność enzymów wątrobowych: <strong>CYP3A4, CYP2D6, CYP2C9</strong>,
              <strong> UGT</strong> (glukuronidacja). Może to zmieniać stężenia chemioterapii i innych leków.
              Przykłady z naszej bazy: Boswellia (CYP3A4/CYP2C9), Reishi (CYP3A4), Kurkumina (CYP3A4),
              Cordycepina (CYP3A4 in vitro). Zawsze poinformuj onkologa o włączeniu suplementu.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <h3 className="mb-2 font-semibold">Interakcje zioło-zioło (antagonistyczne)</h3>
            <p className="text-sm text-muted-foreground">
              Najbardziej znany przykład w naszej bazie: <strong>Wilcacora POA vs TOA</strong> — Pentacyklowe
              i Tetracykliczne Oxindole Alkaloids mają przeciwstawne działanie na CNS, więc preparat zawierający
              obie frakcje jest bezużyteczny mimo deklarowanej zawartości „Uncaria tomentosa".
            </p>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <h3 className="mb-2 font-semibold">Interakcje farmakodynamiczne — paradoks immunostymulacji</h3>
            <p className="text-sm text-muted-foreground">
              Grzyby lecznicze (Reishi, Maitake, Cordyceps) i Wilcacora aktywują komórki NK i T.
              U pacjentów <strong>po przeszczepie narządów na lekach immunosupresyjnych</strong>
              {' '}(takrolimus, cyklosporyna, mykofenolan) — to <strong>antagonizm farmakodynamiczny</strong>
              {' '}który może spowodować odrzucenie przeszczepu. Bezwzględne przeciwwskazanie.
            </p>
          </div>
        </div>
      </section>

      {/* 4 — KLUCZOWE: PRO/ANTY OKSYDACJA */}
      <section className="space-y-4 rounded-lg border-2 border-primary/40 bg-primary/5 p-6">
        <h2 className="font-serif text-2xl font-semibold">
          4. Najczęściej pomijany aspekt — pro-oksydacja vs antyoksydacja
        </h2>
        <p className="text-muted-foreground">
          W onkologii integracyjnej istnieją dwie odrębne grupy substancji, których <strong>nigdy nie należy łączyć
          w tym samym dniu</strong> — bo działają mechanistycznie przeciwstawnie. Pacjenci często biorą substancje
          z obu grup równocześnie, nieświadomi, że <strong>znoszą się nawzajem</strong>.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h3 className="mb-3 font-semibold text-red-600">Faza ON — ATAK (pro-ROS)</h3>
            <p className="mb-3 text-sm text-muted-foreground">
              Substancje generujące reaktywne formy tlenu, indukujące peroksydację lipidów, ferroptozę,
              uszkodzenia DNA komórek nowotworowych:
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Artesunat IV (Fe²⁺-zależna peroksydacja)</li>
              <li>• Witamina C IV w wysokich dawkach (efekt Fentona via H₂O₂)</li>
              <li>• HBOT (tlenoterapia hiperbaryczna)</li>
              <li>• Radioterapia</li>
              <li>• Wybrane chemioterapeutyki (cisplatyna, doksorubicyna)</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h3 className="mb-3 font-semibold text-green-700">Faza OFF — REGENERACJA (anti-ROS)</h3>
            <p className="mb-3 text-sm text-muted-foreground">
              Substancje neutralizujące rodniki, chroniące komórki przed stresem oksydacyjnym, wspomagające
              regenerację:
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• NAC (N-acetylocysteina)</li>
              <li>• Glutation (oral, liposomalny, IV)</li>
              <li>• Mieszane tokoferole, CoQ10</li>
              <li>• <strong>Inhalacje wodorowe H₂</strong> (selektywny scavenger •OH i ONOO⁻)</li>
              <li>• Witamina C oral w niskich dawkach (&lt;1g/d)</li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-5">
          <h3 className="mb-2 font-semibold">Konkretne błędy pacjentów (przykłady)</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <strong>NAC po artesunacie IV</strong> — NAC neutralizuje pro-ROS efekt w ciągu 30 minut. Antagonizm.
            </li>
            <li>
              <strong>HBOT bezpośrednio po inhalacjach wodorowych</strong> — H₂ neutralizuje ROS generowane przez HBOT.
            </li>
            <li>
              <strong>Glutation IV w tym samym dniu co artesunat IV</strong> — mocna antyoksydacja blokuje ferroptozę.
            </li>
            <li>
              <strong>Wysokie dawki vit C oral w dzień wlewu IVC</strong> — konkurencja transportu SVCT2 (saturacja).
            </li>
          </ul>
          <p className="mt-3 text-sm text-muted-foreground">
            <strong>Zasada cyklów ON/OFF:</strong> w protokołach klinicznych pro-oksydanty (artesunat IV, witC IV,
            HBOT) są stosowane w wyznaczonych dniach „aktywnych", a antyoksydanty (NAC, H₂, glutation) w dniach
            „regeneracyjnych". Nie łączyć w tym samym 24-godzinnym oknie.
          </p>
        </div>
      </section>

      {/* 5 — KONSULTACJA Z LEKARZEM */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold">5. Konsultacja z lekarzem — informed consent w obie strony</h2>
        <p className="text-muted-foreground">
          Każda metoda z naszej bazy zawiera w polu „Jak rozmawiać z lekarzem" konkretne materiały do dyskusji
          z onkologiem prowadzącym. Ogólne zasady:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            <strong>Nigdy nie odstawiaj leczenia onkologicznego</strong> w celu zastąpienia go metodą CAM —
            metody na naszej stronie to <strong>wsparcie</strong>, nie alternatywa.
          </li>
          <li>
            <strong>Poinformuj onkologa</strong> o wszystkich włączanych substancjach przed rozpoczęciem.
            To pozwala na świadome monitorowanie parametrów i unikanie interakcji.
          </li>
          <li>
            <strong>Jeśli onkolog odmawia rozmowy o CAM</strong> — to nie jest dowód, że metoda jest szkodliwa.
            Możesz poprosić o konsultację u lekarza z doświadczeniem w onkologii integracyjnej. Lista ośrodków
            z taką praktyką dostępna na stronach{' '}
            <a
              className="underline hover:text-primary"
              href="https://integrativeonc.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Society for Integrative Oncology
            </a>{' '}
            (SIO).
          </li>
          <li>
            <strong>Dokumentuj</strong> swoje doświadczenia — pomaga to zarówno tobie, jak i przyszłym pacjentom
            oraz badaczom.
          </li>
        </ul>
      </section>

      {/* 6 — KONKRETNE OSTRZEŻENIA WYSZCZEGÓLNIONE */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold">6. Specyficzne sytuacje wymagające konsultacji</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li><strong>Po przeszczepie narządów / na lekach immunosupresyjnych</strong> — wykluczyć Wilcacorę,
          Reishi, Maitake, Cordyceps; ostrożność z jemiołą i Boswellią. Bezwzględna konsultacja z transplantologiem.</li>
          <li><strong>Ciąża i laktacja</strong> — większość substancji bez danych bezpieczeństwa. Wilcacora —
          bezwzględnie przeciwwskazana (historyczny środek poronny).</li>
          <li><strong>Choroby autoimmunologiczne</strong> — ostrożność z grzybami leczniczymi (Reishi, Maitake, Cordyceps),
          Wilcacorą, jemiołą.</li>
          <li><strong>Raki hormonozależne ER+/PR+</strong> — ostrożność z Reishi (estrogen-like in vitro), Wilcacorą
          (alkaloidy w danych zwierzęcych), genisteiną z soi.</li>
          <li><strong>Leczenie przeciwzakrzepowe (warfaryna, NOAC)</strong> — kontrola INR przy włączeniu Boswellii,
          Reishi, kurkuminy. Pełna informacja dla lekarza prowadzącego.</li>
          <li><strong>Niewydolność wątroby lub nerek</strong> — wszystkie substancje wymagają oceny metabolizmu
          i eliminacji.</li>
        </ul>
      </section>

      {/* CTA POWRÓT DO BAZY */}
      <section className="rounded-lg border bg-muted p-6 text-center">
        <h2 className="mb-2 font-serif text-xl font-semibold">Wróć do bazy wiedzy</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Każda metoda na naszej stronie ma własne wskazania, ostrzeżenia i listę interakcji.
          Sprawdź konkretne karty przed włączeniem jakiejkolwiek substancji.
        </p>
        <Link
          href="/onkologia-integracyjna"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
        >
          ← Wróć do listy 26 metod
        </Link>
      </section>
    </article>
  )
}
