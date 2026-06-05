import Link from 'next/link'
import { METHODS_BY_CATEGORY, METHODS, getMethodBySlug } from '@/lib/terapie-wspomagajace/methods'
import { CATEGORY_LABELS } from '@/lib/terapie-wspomagajace/types'
import { EvidenceTypeBadge, ClinicalStatusBadge, CategoryBadge } from '@/components/terapie-wspomagajace/badges'
import { SectionDisclaimer } from '@/components/terapie-wspomagajace/disclaimer'

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
          Baza wiedzy EBM
        </p>
        <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
          Terapie wspomagające. Dowody. Konkretnie.
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
            href="/terapie-wspomagajace/metody"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Zobacz wszystkie {TOTAL_METHODS} metod →
          </Link>
          <Link
            href="/terapie-wspomagajace/jak-czytac-ebm"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium transition hover:bg-muted"
          >
            Jak czytać dowody EBM →
          </Link>
          <Link
            href="/terapie-wspomagajace/bezpieczna-praktyka"
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
            {TOTAL_METHODS} podstron metod wspomagających w 4 kategoriach. Każda metoda opisana w 9
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
                  href="/terapie-wspomagajace/metody"
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
              href={`/terapie-wspomagajace/metody/${m!.slug}`}
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

      {/* OPIEKA WSPOMAGAJĄCA Z WYTYCZNYMI */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-serif text-3xl font-semibold">Opieka wspomagająca z wytycznymi</h2>
          <p className="max-w-3xl text-muted-foreground">
            To obszar o najmocniejszych dowodach. Poniższe metody łagodzenia objawów towarzyszących
            leczeniu onkologicznemu są <strong>rekomendowane w wytycznych towarzystw naukowych</strong>{' '}
            (ASCO–Society for Integrative Oncology). To kluczowe rozróżnienie: metoda z rekomendacją
            wytycznych nie jest pseudomedycyną.
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 text-left">
              <tr>
                <th className="p-3 font-semibold">Objaw</th>
                <th className="p-3 font-semibold">Metody rekomendowane</th>
                <th className="p-3 font-semibold">Wytyczna (źródło)</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-3 font-medium">Ból nowotworowy</td>
                <td className="p-3 text-muted-foreground">Akupunktura (ból stawów po inhibitorach aromatazy — najmocniejsza rekomendacja); akupresura, refleksologia, masaż, hipnoza — w wybranych rodzajach bólu</td>
                <td className="p-3 text-muted-foreground">SIO-ASCO 2022 (<a href="https://pubmed.ncbi.nlm.nih.gov/36122322/" target="_blank" rel="noopener noreferrer" className="text-primary underline">PMID 36122322</a>)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Lęk i depresja</td>
                <td className="p-3 text-muted-foreground">Programy uważności (MBSR/MBCR), joga, relaksacja, muzykoterapia; tai chi / qigong i akupunktura po zakończeniu leczenia</td>
                <td className="p-3 text-muted-foreground">SIO-ASCO 2023 (<a href="https://pubmed.ncbi.nlm.nih.gov/37582238/" target="_blank" rel="noopener noreferrer" className="text-primary underline">PMID 37582238</a>)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Zmęczenie (fatigue)</td>
                <td className="p-3 text-muted-foreground">Aktywność fizyczna, terapia poznawczo-behawioralna (CBT), programy uważności, tai chi / qigong</td>
                <td className="p-3 text-muted-foreground">ASCO-SIO 2024, 113 RCT (<a href="https://pubmed.ncbi.nlm.nih.gov/38754041/" target="_blank" rel="noopener noreferrer" className="text-primary underline">PMID 38754041</a>)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Nudności i wymioty (CINV)</td>
                <td className="p-3 text-muted-foreground">Kannabinoidy jako dodatek do standardowych leków przeciwwymiotnych w opornych nudnościach (nie jako leczenie przeciwnowotworowe)</td>
                <td className="p-3 text-muted-foreground">ASCO 2024 (<a href="https://pubmed.ncbi.nlm.nih.gov/38478773/" target="_blank" rel="noopener noreferrer" className="text-primary underline">PMID 38478773</a>)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          <strong>Dlaczego to ważne dla projektu UD207:</strong> powyższe metody mają rekomendacje
          wytycznych ASCO–SIO opartych na setkach badań klinicznych. Projekt ustawy nie wprowadza
          granicy między takimi metodami a oszustwem medycznym — co rodzi ryzyko, że legalne,
          oparte na dowodach wsparcie pacjenta zostanie potraktowane jak pseudomedycyna.
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
