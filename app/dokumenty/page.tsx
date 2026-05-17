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

const documents = [
  {
    id: 1,
    title: 'Projekt UD207 — pełny tekst',
    description: 'Pełny tekst projektu nowelizacji ustawy o prawach pacjenta',
    category: 'projekt' as Category,
    date: '13.05.2026',
    sourceType: 'Dokument rządowy',
    sourceIcon: FileText,
    url: 'https://legislacja.rcl.gov.pl/projekt/12389401',
  },
  {
    id: 2,
    title: 'Ocena Skutków Regulacji UD207',
    description: 'Oficjalna OSR dołączona do projektu ustawy',
    category: 'projekt' as Category,
    date: '13.05.2026',
    sourceType: 'Dokument rządowy',
    sourceIcon: FileText,
    url: 'https://legislacja.rcl.gov.pl/projekt/12389401',
  },
  {
    id: 3,
    title: 'Rezolucja WHA78(14) — WHO TCIM Strategy 2025-2034',
    description: 'Globalna Strategia WHO ds. Medycyny Tradycyjnej, Komplementarnej i Integracyjnej',
    category: 'who-ue' as Category,
    date: '27.05.2025',
    sourceType: 'Dokument WHO',
    sourceIcon: FileText,
    url: 'https://apps.who.int/gb/ebwha/pdf_files/WHA78/A78_(14)-en.pdf',
  },
  {
    id: 4,
    title: 'Oświadczenie UE WHA78 pkt 13.8',
    description: 'Stanowisko Unii Europejskiej ws. strategii WHO TCIM',
    category: 'who-ue' as Category,
    date: '24.05.2025',
    sourceType: 'Dokument UE',
    sourceIcon: FileText,
    url: 'https://www.eeas.europa.eu/delegations/un-geneva/eu-statement-wha78-item-138-%E2%80%93-draft-global-traditional-medicine-strategy-2025-2034_en',
  },
  {
    id: 5,
    title: 'Wyrok WSA V SA/Wa 2854/23',
    description: 'Orzeczenie Wojewódzkiego Sądu Administracyjnego',
    category: 'orzecznictwo' as Category,
    date: '29.10.2025',
    sourceType: 'Orzeczenie',
    sourceIcon: Scale,
    url: 'https://orzeczenia.nsa.gov.pl',
  },
  {
    id: 6,
    title: 'Postanowienie SN III KK 212/18',
    description: 'Postanowienie Sądu Najwyższego',
    category: 'orzecznictwo' as Category,
    date: '05.06.2019',
    sourceType: 'Orzeczenie',
    sourceIcon: Scale,
    url: 'https://www.sn.pl',
  },
  {
    id: 7,
    title: 'Stanowisko 7 organizacji pracodawców ws. UD207',
    description: 'Wspólne stanowisko organizacji sektora zdrowia',
    category: 'stanowiska' as Category,
    date: '07.2025',
    sourceType: 'Stanowisko',
    sourceIcon: FileText,
    url: '#',
  },
  {
    id: 8,
    title: 'Analiza konstytucyjna UD207 (Memorandum Prawne v2.0)',
    description: 'Analiza zgodności projektu z Konstytucją RP',
    category: 'analizy' as Category,
    date: '17.05.2026',
    sourceType: 'Analiza',
    sourceIcon: FileText,
    url: '#',
  },
  {
    id: 9,
    title: 'Memo Ekonomiczne — UD207 w cieniu kryzysu NFZ',
    description: 'Analiza ekonomicznych skutków regulacji',
    category: 'analizy' as Category,
    date: '17.05.2026',
    sourceType: 'Analiza',
    sourceIcon: FileText,
    url: '#',
  },
  {
    id: 10,
    title: 'Sekcja Konstytucyjna v3.0 — 14 niezgodności',
    description: 'Szczegółowa analiza potencjalnych niezgodności z Konstytucją',
    category: 'analizy' as Category,
    date: '17.05.2026',
    sourceType: 'Analiza',
    sourceIcon: FileText,
    url: '#',
  },
]

const categoryColors: Record<Category, string> = {
  all: 'bg-secondary text-secondary-foreground',
  projekt: 'bg-navy/10 text-navy',
  'who-ue': 'bg-teal/10 text-teal',
  analizy: 'bg-amber/10 text-amber',
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
      {/* Header */}
      <section className="hero-gradient py-12 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-amber tracking-wider uppercase mb-3">
            Baza wiedzy
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-4">
            Baza dokumentów
          </h1>
          <p className="text-lg text-muted-foreground">
            Materiały źródłowe i opracowania — wszystkie ze źródeł publicznych
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(cat.id)}
              className={activeCategory === cat.id 
                ? 'bg-navy text-background hover:bg-navy/90' 
                : 'border-border text-muted-foreground hover:bg-secondary'
              }
            >
              {cat.label}
            </Button>
          ))}
        </div>
      </section>

      {/* Document Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((doc) => (
            <Card key={doc.id} className="border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <Badge className={`${categoryColors[doc.category]} mb-3`}>
                  {categories.find(c => c.id === doc.category)?.label}
                </Badge>
                <h3 className="font-semibold text-navy mb-2 line-clamp-2">
                  {doc.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {doc.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <doc.sourceIcon className="h-3 w-3" />
                  <span>{doc.sourceType}</span>
                  <span className="mx-1">•</span>
                  <span>{doc.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <a href={doc.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="text-xs">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Otwórz
                    </Button>
                  </a>
                  <Button variant="outline" size="sm" className="text-xs">
                    <Download className="h-3 w-3 mr-1" />
                    Pobierz PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground text-center leading-relaxed">
          Wszystkie dokumenty pochodzą ze źródeł publicznych lub oficjalnych baz rządowych. 
          W przypadku własnych opracowań pakietu obywatelskiego — pochodzą one z analizy 
          źródeł publicznych i są dostępne do pobrania.
        </p>
      </section>
    </div>
  )
}
