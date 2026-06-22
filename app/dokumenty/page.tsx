'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Download, FileText, Scale } from 'lucide-react'

type Category = 'all' | 'projekt' | 'who-ue' | 'analizy' | 'orzecznictwo' | 'stanowiska' | 'media'

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'Wszystkie' },
  { id: 'projekt', label: 'Projekt ustawy' },
  { id: 'who-ue', label: 'Dokumenty WHO/UE' },
  { id: 'analizy', label: 'Analizy prawne' },
  { id: 'orzecznictwo', label: 'Orzecznictwo' },
  { id: 'stanowiska', label: 'Stanowiska organizacji' },
  { id: 'media', label: 'Materiały dla mediów' },
]

type Doc = {
  id: number
  title: string
  description: string
  category: Category
  date: string
  sourceType: string
  sourceIcon: typeof FileText
  externalUrl?: string
  externalLabel?: string
  pdfUrl?: string
  searchHint?: string
}

const documents: Doc[] = [
  {
    id: 1,
    title: 'Projekt UD207 — pełny tekst (RCL)',
    description: 'Projekt nowelizacji ustawy o prawach pacjenta i Rzeczniku Praw Pacjenta przyjęty przez Radę Ministrów 12.05.2026. Numer projektu: UD207.',
    category: 'projekt',
    date: '13.05.2026',
    sourceType: 'Dokument rządowy',
    sourceIcon: FileText,
    externalUrl: 'https://legislacja.rcl.gov.pl/projekt/12398957',
    externalLabel: 'Karta projektu UD207 w RCL',
    searchHint: 'Bezpośredni link do karty projektu UD207 w Rządowym Centrum Legislacji (wraz z tekstem, OSR i opiniami z konsultacji).',
  },
  {
    id: 2,
    title: 'Ocena Skutków Regulacji UD207 (OSR)',
    description: 'Oficjalna OSR dołączona do projektu — z brakami danych ilościowych identyfikowanymi w pakiecie obywatelskim.',
    category: 'projekt',
    date: '13.05.2026',
    sourceType: 'Dokument rządowy',
    sourceIcon: FileText,
    externalUrl: 'https://www.gov.pl/web/premier/projekt-ustawy-o-zmianie-ustawy-o-prawach-pacjenta-i-rzeczniku-praw-pacjenta2',
    externalLabel: 'KPRM — karta projektu',
  },
  {
    id: 3,
    title: 'Rezolucja WHA78(14) — WHO TCIM Strategy 2025-2034',
    description: 'Globalna Strategia WHO ds. Medycyny Tradycyjnej, Komplementarnej i Integracyjnej (przyjęta konsensusem 27.05.2025).',
    category: 'who-ue',
    date: '27.05.2025',
    sourceType: 'Dokument WHO',
    sourceIcon: FileText,
    externalUrl: 'https://apps.who.int/gb/ebwha/pdf_files/WHA78/A78_(14)-en.pdf',
    externalLabel: 'Pobierz z apps.who.int',
  },
  {
    id: 4,
    title: 'Oświadczenie UE WHA78 pkt 13.8',
    description: 'Stanowisko UE (w imieniu 27 państw, w tym Polski) ws. strategii WHO TCIM — z zastrzeżeniami EBM, safety, cost-effectiveness.',
    category: 'who-ue',
    date: '24.05.2025',
    sourceType: 'Dokument UE',
    sourceIcon: FileText,
    externalUrl: 'https://www.eeas.europa.eu/delegations/un-geneva/eu-statement-wha78-item-138-%E2%80%93-draft-global-traditional-medicine-strategy-2025-2034_en',
    externalLabel: 'Otwórz na EEAS',
  },
  {
    id: 6,
    title: 'Postanowienie SN III KK 212/18',
    description: 'Sąd Najwyższy o ocenie zgodności z „aktualną wiedzą medyczną" — wymaga dowodu z opinii biegłych, in dubio pro reo (art. 5 § 2 k.p.k.).',
    category: 'orzecznictwo',
    date: '05.06.2019',
    sourceType: 'Orzeczenie',
    sourceIcon: Scale,
    externalUrl: 'http://www.sn.pl/sites/orzecznictwo/OrzeczeniaHTML/iii%20kk%20212-18.docx.html',
    externalLabel: 'Pełny tekst orzeczenia SN',
    searchHint: 'Bezpośredni link do tekstu postanowienia w bazie orzeczeń Sądu Najwyższego.',
  },
  {
    id: 7,
    title: 'Stanowisko 7 organizacji pracodawców ws. UD207',
    description: 'Wspólne stanowisko sektora zdrowia (Pracodawcy dla Zdrowia, Lewiatan, Pracodawcy RP, ZPP, ZPL, ZPF, OZPSU). Lipiec 2025.',
    category: 'stanowiska',
    date: '07.2025',
    sourceType: 'Stanowisko',
    sourceIcon: FileText,
    externalUrl: 'https://pracodawcydlazdrowia.pl/wp-content/uploads/2025/07/Stanowisko-ws.-nowelizacji-ustawy-o-RPP-UD-207_FINAL.pdf',
    externalLabel: 'Pobierz PDF stanowiska',
    searchHint: 'Bezpośredni link do PDF wspólnego stanowiska sektora. Strona macierzysta: pracodawcydlazdrowia.pl (sekcja Publikacje).',
  },
  {
    id: 16,
    title: 'Raport Stowarzyszenia Integralni w Zdrowiu — krytyka Stanowiska NRL Nr 2/21/VIII',
    description: 'Niezależna 121-stronicowa analiza merytoryczna wskazująca błędy w kwerendzie literatury Raportu Ekspertów NRL (2020), na którym oparte jest Stanowisko NRL Nr 2/21/VIII z 12.03.2021 — fundament intelektualny projektu UD207. Marzec 2022.',
    category: 'stanowiska',
    date: '23.03.2022',
    sourceType: 'Stanowisko organizacji',
    sourceIcon: FileText,
    pdfUrl: '/dokumenty/Raport_Integralni_NRL_2022.pdf',
    searchHint: 'Raport opracowany przez Stowarzyszenie Integralni w Zdrowiu — niezależna analiza krytyczna metodologii Raportu Ekspertów NRL z 2020 r. Publikacja dokumentu nie oznacza rekomendowania żadnej z wymienionych metod. Materiał służy analizie jakości argumentacji i kwerendy literatury w debacie publicznej.',
  },
  {
    id: 8,
    title: 'Memorandum prawne UD207',
    description: 'Analiza zgodności projektu z Konstytucją RP, EKPC i KPP UE — dokument dla BAS i kancelarii prawnych. Zawiera siedem zarzutów głównych, osiem zarzutów pomocniczych (w tym komparatystykę 7 modeli regulacyjnych UE/UK oraz polski kontekst regulacyjny CAM), dziesięć rekomendowanych poprawek oraz tabelę synoptyczną.',
    category: 'analizy',
    date: '18.05.2026',
    sourceType: 'Analiza pakietu',
    sourceIcon: FileText,
    pdfUrl: '/dokumenty/Memorandum_prawne_UD207_v2.3.pdf',
  },
  {
    id: 9,
    title: 'Memo Ekonomiczne — UD207 w cieniu kryzysu NFZ',
    description: 'Analiza skutków ekonomicznych regulacji + paradoks ekonomiczny + casus 2025 r. (§7) + wnioski dla Polski (§8) + Model Tor 2 jako alternatywa.',
    category: 'analizy',
    date: '18.05.2026',
    sourceType: 'Analiza pakietu',
    sourceIcon: FileText,
    pdfUrl: '/dokumenty/Memo_Ekonomiczne_NFZ_v1.1.pdf',
  },
  {
    id: 10,
    title: 'Sekcja Konstytucyjna — 14 niezgodności + klauzula świadomej zgody',
    description: 'Szczegółowa analiza 14 niezgodności konstytucyjnych UD207 z orzecznictwem TK/SN/ETPC/TSUE + §12a (casus 2025 r.) + Rek.16 (klauzula świadomej zgody).',
    category: 'analizy',
    date: '18.05.2026',
    sourceType: 'Analiza pakietu',
    sourceIcon: FileText,
    pdfUrl: '/dokumenty/Sekcja_Konstytucyjna_v3.2_do_Zalacznik_1_v1.11.pdf',
  },
  {
    id: 11,
    title: 'Załącznik 1 — Policy Paper EBM',
    description: 'Kompletny dokument referencyjny pakietu — EBM, OCEBM, GRADE, ESMO-MCBS, dowody dla CAM, paradoks accelerated approval.',
    category: 'analizy',
    date: '17.05.2026',
    sourceType: 'Analiza pakietu',
    sourceIcon: FileText,
    pdfUrl: '/dokumenty/Zalacznik_1_Policy_Paper_EBM_v1.11.pdf',
  },
  {
    id: 12,
    title: 'Brief medialny publiczny — UD207',
    description: 'Pakiet prasowy: fakty, problemy konstytucyjne, jawna procedura ekspercka, podwójny standard dowodów, propozycja klauzuli świadomej zgody. Wersja publiczna zaktualizowana po podkomisji z 17.06.2026.',
    category: 'media',
    date: '22.06.2026',
    sourceType: 'Materiał prasowy',
    sourceIcon: FileText,
    pdfUrl: '/dokumenty/Brief_Medialny_Publiczny_v1.2.pdf',
  },
  {
    id: 13,
    title: 'Apel do Prezydenta RP — wniosek o kontrolę TK',
    description: 'Apel obywatelski o skierowanie ustawy UD207 do Trybunału Konstytucyjnego (art. 122 ust. 3 Konstytucji RP) w razie uchwalenia bez poprawek. Zaktualizowany po podkomisji 17.06.2026 (cztery grupy, jawna procedura ekspercka, podwójny standard).',
    category: 'stanowiska',
    date: '22.06.2026',
    sourceType: 'Apel obywatelski',
    sourceIcon: FileText,
    pdfUrl: '/dokumenty/Apel_do_Prezydenta_Nawrockiego_v2.2.pdf',
  },
]

const categoryColors: Record<Category, string> = {
  all: 'bg-secondary text-secondary-foreground',
  projekt: 'bg-navy/10 text-navy',
  'who-ue': 'bg-teal/10 text-teal',
  analizy: 'bg-red-orange/10 text-amber',
  orzecznictwo: 'bg-red-orange/10 text-red-orange',
  stanowiska: 'bg-secondary text-secondary-foreground',
  media: 'bg-secondary text-secondary-foreground',
}

export default function DokumentyPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const filteredDocuments = activeCategory === 'all'
    ? documents
    : documents.filter(doc => doc.category === activeCategory)

  return (
    <div>
      <section className="hero-gradient py-12 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-3">Baza wiedzy</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-4">Baza dokumentów</h1>
          <p className="text-lg text-muted-foreground">Materiały źródłowe i opracowania — wszystkie ze źródeł publicznych lub własne analizy pakietu obywatelskiego</p>
        </div>
      </section>

      <section className="py-8 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
                className={activeCategory === cat.id ? 'bg-navy text-background hover:bg-navy/90' : 'border-border bg-background text-navy hover:bg-cream'}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments.map((doc) => (
              <Card key={doc.id} className="border border-border rounded-xl shadow-sm card-lift">
                <CardContent className="p-6">
                  <Badge className={`${categoryColors[doc.category]} mb-3`}>
                    {categories.find(c => c.id === doc.category)?.label}
                  </Badge>
                  <h3 className="font-semibold text-navy mb-2 line-clamp-3">{doc.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{doc.description}</p>
                  {doc.searchHint && (
                    <p className="text-xs text-teal italic mb-3">💡 {doc.searchHint}</p>
                  )}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <doc.sourceIcon className="h-3 w-3" />
                    <span>{doc.sourceType}</span>
                    <span className="mx-1">•</span>
                    <span>{doc.date}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {doc.externalUrl && (
                      <a href={doc.externalUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="text-xs">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          {doc.externalLabel || 'Otwórz źródło'}
                        </Button>
                      </a>
                    )}
                    {doc.pdfUrl && (
                      <a href={doc.pdfUrl} download>
                        <Button variant="outline" size="sm" className="text-xs border-navy text-navy hover:bg-navy/5">
                          <Download className="h-3 w-3 mr-1" />
                          Pobierz PDF
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground text-center leading-relaxed">
            Wszystkie dokumenty pochodzą ze źródeł publicznych (rcl.gov.pl, gov.pl, apps.who.int, eeas.europa.eu, sn.pl, orzeczenia.nsa.gov.pl, pracodawcydlazdrowia.pl, medRxiv, nil.org.pl, termedia.pl)
            lub stanowią własne opracowania pakietu obywatelskiego. Własne dokumenty są dostępne do bezpłatnego pobrania w formacie PDF.
            Linki zewnętrzne prowadzą bezpośrednio do tekstów źródłowych. Wszystkie weryfikowane: czerwiec 2026.
          </p>
        </div>
      </section>
    </div>
  )
}
