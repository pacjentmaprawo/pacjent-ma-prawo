import Link from 'next/link'
import { METHODS_BY_CATEGORY, METHODS, getMethodBySlug } from '@/lib/onkologia-integracyjna/methods'
import { CATEGORY_LABELS } from '@/lib/onkologia-integracyjna/types'
import { EvidenceTypeBadge, ClinicalStatusBadge, CategoryBadge } from '@/components/onkologia-integracyjna/badges'
import { SectionDisclaimer } from '@/components/onkologia-integracyjna/disclaimer'

const TOTAL_SOURCES = METHODS.reduce((sum, m) => sum + m.keySources.length, 0)
const TOTAL_METHODS = METHODS.length

export default function OnkologiaIntegracyjnaPage() {
  const featured = [
    getMethodBySlug('wlewy-dozylne-witaminy-c'),
    getMethodBySlug('hipertermia-lokoregionalna'),
    getMethodBySlug('aktywnosc-fizyczna-w-onkologii'),
  ].filter((m) => m !== undefined)

  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="space-y-6">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">
          Baza wiedzy EBM • Wersja robocza • 25.05.2026
        </p>
        <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
          Onkologia integracyjna. Dowody. Konkretnie.
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground md:text-xl">
          Niezależna baza wiedzy o terapiach uzupełniających standardowe leczenie onkologiczne oraz
          o wybranych konwencjonalnych technologiach i procedurach. Każda metoda opisana przez pryzmat
          publikacji peer-reviewed, wytycznych, poziomu dowodów (GRADE), bezpieczeństwa i statusu
          regulacyjnego. Poziom dowodów różni się znacząco między metodami — od interwencji
          guideline-supported po zastosowania eksperymentalne i off-label.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/onkologia-integracyjna/metody"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Zobacz wszystkie {TOTAL_METHODS} metod →
          </Link>
          <Link
            href="/onkologia-integracyjna/jak-czytac-ebm"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium transition hover:bg-muted"
          >
            Jak czytać dowody EBM →
          </Link>
          <Link
            href="/onkologia-integracyjna/bezpieczna-praktyka"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium transition hover:bg-muted"
          >
            Bezpieczna praktyka →
          </Link>
        </div>
      </section>

      {/* 3 KARTY ZAUFANIA */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <h2 className="mb-2 font-serif text-lg font-semibold">Co znajdziesz na stronie</h2>
          <p className="text-sm text-muted-foreground">
            {TOTAL_METHODS} podstron metod onkologii integracyjnej w 4 kategoriach. Każda metoda opisana w 9
            sekcjach: mechanizm, dowody EBM (PMID, GRADE), wskazania, przeciwwskazania,
            bezpieczeństwo, status w UE, jak rozmawiać o niej z lekarzem.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h2 className="mb-2 font-serif text-lg font-semibold">Standard rzetelności</h2>
          <p className="text-sm text-muted-foreground">
            Każde twierdzenie ma swoje źródło — publikacja peer-reviewed z PubMed/Cochrane. Każda
            metoda ma poziom dowodów w skali GRADE. Strona nie obiecuje wyleczenia, nie reklamuje
            żadnego produktu, nie krytykuje leczenia konwencjonalnego.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h2 className="mb-2 font-serif text-lg font-semibold">Dla kogo</h2>
          <p className="text-sm text-muted-foreground">
            Dla pacjentów onkologicznych i ich rodzin, którzy chcą zrozumieć czym są terapie
            uzupełniające — żeby świadomie porozmawiać o nich z lekarzem prowadzącym. Dla lekarzy,
            którzy chcą zobaczyć stan dowodów EBM dla konkretnych metod.
          </p>
        </div>
      </section>

      {/* 4 KATEGORIE METOD */}
      <section className="space-y-6">
        <h2 className="font-serif text-3xl font-semibold">Kategorie metod</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {(['A', 'B', 'C', 'D'] as const).map((cat) => {
            const methods = METHODS_BY_CATEGORY[cat]
            return (
              <div key={cat} className="rounded-lg border bg-card p-6">
                <div className="mb-3 flex items-center gap-3">
                  <CategoryBadge category={cat} />
                  <span className="text-sm text-muted-foreground">{methods.length} metod</span>
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold">{CATEGORY_LABELS[cat]}</h3>
                <ul className="mb-4 space-y-1 text-sm text-muted-foreground">
                  {methods.slice(0, 4).map((m) => (
                    <li key={m.slug}>• {m.shortName}</li>
                  ))}
                  {methods.length > 4 && <li>… i {methods.length - 4} kolejnych</li>}
                </ul>
                <Link
                  href="/onkologia-integracyjna/metody"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Zobacz wszystkie z kategorii {cat} →
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* NAJWAŻNIEJSZE METODY */}
      <section className="space-y-6">
        <h2 className="font-serif text-3xl font-semibold">Wybrane metody z najmocniejszymi dowodami</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((m) => (
            <Link
              key={m!.slug}
              href={`/onkologia-integracyjna/metody/${m!.slug}`}
              className="group rounded-lg border bg-card p-6 transition hover:border-primary/50 hover:shadow-md"
            >
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <CategoryBadge category={m!.category} />
                {m!.highestEvidenceType && <EvidenceTypeBadge type={m!.highestEvidenceType} />}
                {m!.clinicalStatus && <ClinicalStatusBadge status={m!.clinicalStatus} />}
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold group-hover:text-primary">
                {m!.name}
              </h3>
              <p className="text-sm text-muted-foreground">{m!.shortDesc}</p>
              <p className="mt-4 text-sm font-medium text-primary group-hover:underline">
                Pełne dowody EBM →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* STATYSTYKI */}
      <section className="rounded-lg border bg-muted/30 p-8">
        <h2 className="mb-6 font-serif text-2xl font-semibold">W liczbach</h2>
        <dl className="grid gap-6 md:grid-cols-5">
          {[
            { value: METHODS.length, label: 'Metod i procedur opisanych' },
            { value: '60+', label: 'Publikacji peer-reviewed i wytycznych' },
            { value: '4', label: 'Wytyczne ASCO/SIO (Pain, Anxiety, Fatigue, Cannabis)' },
            { value: '7', label: 'Krajów UE w porównaniu' },
            { value: '0', label: 'Reklam i sponsorów pharma' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <dt className="font-serif text-3xl font-bold text-primary">{s.value}</dt>
              <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* LINK DO PACJENTMAPRAWO */}
      <section className="rounded-lg border border-primary/30 bg-primary/5 p-6">
        <h2 className="mb-2 font-serif text-lg font-semibold">Powiązana strona</h2>
        <p className="text-sm text-muted-foreground">
          Ta sekcja jest częścią rodziny stron <strong>pacjentmaprawo.pl</strong>, która zajmuje się
          także prawami pacjenta w kontekście projektu ustawy UD207 („Lex Szarlatan").{' '}
          <Link href="/" className="font-medium text-primary underline">
            Strona główna pacjentmaprawo.pl →
          </Link>
        </p>
      </section>

      <SectionDisclaimer variant="compact" />
    </div>
  )
}
