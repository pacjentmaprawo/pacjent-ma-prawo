import type { Metadata } from 'next'
import { MethodPage } from '@/components/onkologia-integracyjna/method-page'
import { getMethodBySlug } from '@/lib/onkologia-integracyjna/methods'
import { PMIDLink } from '@/components/onkologia-integracyjna/badges'

const method = getMethodBySlug('cordyceps')!

export const metadata: Metadata = {
  title: method.name,
  description: method.shortDesc,
}

export default function CordycepsPage() {
  return (
    <MethodPage
      method={method}
      what={
        <>
          <p>
            <strong>Cordyceps</strong> to grupa grzybów pasożytniczych z rodzaju <em>Cordyceps</em>, tradycyjnie używanych
            w medycynie chińskiej (Dongchongxiacao) od ponad 1300 lat. W onkologii integracyjnej najlepiej
            udokumentowane są dwa gatunki: <strong>Cordyceps sinensis</strong> (dziki, himalajski) oraz
            <strong> Cordyceps militaris</strong> (hodowlany — preparaty CS-4).
          </p>
          <p>
            Główne aktywne związki: <strong>cordycepina</strong> (3'-deoksyadenozyna), polisacharydy, ergosterol.
            Profil farmakologiczny: adaptogenny + immunomodulujący + anti-fatigue.
          </p>
        </>
      }
      howItWorks={
        <>
          <p><strong>Mechanizmy działania:</strong></p>
          <ul>
            <li><strong>Cordycepina</strong> — hamuje transkrypcję pro-onkogennych RNA (analog adenozyny)</li>
            <li><strong>Polisacharydy</strong> — aktywują komórki NK, limfocyty Th1 i makrofagi M1</li>
            <li><strong>Ergosterol</strong> — moduluje mitochondrialny szlak apoptozy</li>
            <li><strong>HHM-ATP</strong> — wspomaganie tolerancji wysiłkowej i redukcja zmęczenia</li>
          </ul>
          <p>
            Najsilniejszy sygnał kliniczny pochodzi z metaanalizy Liu 2024 (12 RCT, n=928,{' '}
            <PMIDLink doi="10.1016/j.jep.2024.118434">J Ethnopharmacology DOI 10.1016/j.jep.2024.118434</PMIDLink>) —
            Cordyceps jako adjuwant chemio/RT w raku płuca: wyższa odpowiedź na leczenie, lepsza QoL,
            poprawa funkcji immunologicznej i mniej radiopneumopatii.
          </p>
        </>
      }
      indications={
        <>
          <p><strong>Najlepiej udokumentowane wskazanie (GRADE: low):</strong></p>
          <ul>
            <li><strong>Adjuwant chemio/RT w raku płuca</strong> — najmocniejsze dowody (Liu 2024 metaanaliza)</li>
          </ul>
          <p><strong>Wskazania pomocnicze:</strong></p>
          <ul>
            <li>Zmęczenie onkologiczne (CRF) podczas chemio/immunoterapii</li>
            <li>Wsparcie funkcji immunologicznej podczas leczenia mielotoksycznego</li>
            <li>Pierwotny rak wątroby — anti-fatigue (Wang 2025, PMC12302630)</li>
          </ul>
        </>
      }
      contraindications={
        <>
          <p><strong>Ostrożność / przeciwwskazania:</strong></p>
          <ul>
            <li><strong>Transplantacja narządów</strong> — aktywacja NK i T-komórek może zwiększyć ryzyko odrzucenia</li>
            <li><strong>Choroby autoimmunologiczne</strong> — potencjalna aktywacja proceonu chorobowego</li>
            <li><strong>Brak danych w ciąży</strong> — nie stosować profilaktycznie</li>
            <li>Cordycepina <strong>może inhibować CYP3A4 in vitro</strong> — brak danych klinicznych w wielolekach</li>
          </ul>
        </>
      }
      safety={
        <>
          <p>
            W opublikowanych badaniach klinicznych Cordyceps wykazuje <strong>dobry profil bezpieczeństwa</strong>.
            Optymalna dawka według Liu 2024: 6 g/d przez 21 dni co 3-4 cykle.
          </p>
          <p><strong>Jakość preparatu krytyczna:</strong></p>
          <ul>
            <li><strong>Dziki C. sinensis</strong> (Himalaje) — drogi, problem zafałszowań rynkowych</li>
            <li><strong>CS-4 (hodowla C. militaris)</strong> — bardziej spójny profil, tańszy, szeroko dostępny w PL</li>
            <li>Standaryzacja: deklarowana zawartość cordycepiny i polisacharydów</li>
          </ul>
          <p>
            W Polsce dostępne są suplementy zawierające standaryzowane ekstrakty Cordyceps (głównie CS-4
            z hodowli C. militaris), jakość, skład i deklarowana zawartość aktywnych związków różnią się
            między produktami. Ta strona nie rekomenduje konkretnych marek ani preparatów.
          </p>
        </>
      }
      howToTalkToDoctor={
        <>
          <p>
            Cordyceps może być rozważony jako <strong>wsparcie podczas chemio/RT w raku płuca</strong>.
            Argumenty do rozmowy z onkologiem:
          </p>
          <ul>
            <li>Liu 2024 metaanaliza 12 RCT n=928 w raku płuca (DOI 10.1016/j.jep.2024.118434)</li>
            <li>Profil bezpieczeństwa potwierdzony w Frontiers 2026 (PMC13029327)</li>
            <li>Konkretny preparat: CS-4 standaryzowany na cordycepinę i polisacharydy</li>
            <li>Dawkowanie 6 g/d × 21 dni co 3-4 cykle chemio</li>
          </ul>
          <p>
            <strong>Nie stosuj samodzielnie</strong> jeśli jesteś po przeszczepie narządów lub leczeniu immunosupresyjnym.
          </p>
        </>
      }
    />
  )
}
