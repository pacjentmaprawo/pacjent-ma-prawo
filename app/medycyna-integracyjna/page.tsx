import type { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Check, X, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Medycyna integracyjna',
  description: 'Czym jest medycyna komplementarna i integracyjna? Wyjaśnienie pojęć według definicji WHO i międzynarodowych standardów medycznych.',
}

const tableData = [
  {
    term: 'Medycyna konwencjonalna',
    meaning: 'Diagnostyka i leczenie zgodne z aktualną wiedzą medyczną, oparte na evidence-based medicine, GRADE, OCEBM',
    notMeaning: 'Nie oznacza, że nie wolno badać metod wspomagających ani że jest jedyną formą medycyny',
    safety: 'Stała aktualizacja w oparciu o badania kliniczne'
  },
  {
    term: 'Medycyna komplementarna',
    meaning: 'Wsparcie OBOK leczenia głównego, integracja wybranych metod z udokumentowaną skutecznością w określonych wskazaniach (np. akupunktura w bólu przewlekłym)',
    notMeaning: 'Nie zastępuje onkologii, chirurgii, antybiotyków, immunoterapii',
    safety: 'Ocena dowodów, zgoda pacjenta, brak konfliktu z leczeniem głównym'
  },
  {
    term: 'Medycyna integracyjna',
    meaning: 'Model klinicznego łączenia leczenia konwencjonalnego z metodami komplementarnymi po ocenie dowodów, ryzyka, celu i zgody pacjenta. Definicja WHO TCIM 2025–2034',
    notMeaning: 'Nie oznacza dowolności, braku kontroli ani opozycji wobec evidence-based medicine',
    safety: 'Lekarz prowadzący, dokumentacja, świadoma zgoda, monitoring bezpieczeństwa'
  },
  {
    term: 'Medycyna alternatywna',
    meaning: 'Metody stosowane ZAMIAST leczenia konwencjonalnego',
    notMeaning: 'NIE jest tym samym co komplementarna ani integracyjna',
    safety: 'Wymaga ostrzeżenia o ryzyku rezygnacji z leczenia o udokumentowanej skuteczności'
  },
  {
    term: 'Pseudomedycyna / oszustwo',
    meaning: 'Fałszywe obietnice wyleczenia, zniechęcanie do skutecznego leczenia, ukrywanie ryzyka, reklamowanie terapii bez podstaw',
    notMeaning: 'Nie obejmuje terapii wspomagających prowadzonych odpowiedzialnie ani debaty naukowej',
    safety: 'Powinna być ścigana — ale na podstawie precyzyjnych definicji'
  },
]

const weDefend = [
  'Prawa pacjenta do informacji o wszystkich opcjach leczenia',
  'Prawa do rozmowy z lekarzem o terapiach wspomagających',
  'Prawa do drugiej opinii',
  'Prawa do świadomej zgody i autonomii decyzji',
  'Prawa do terapii wspomagających prowadzonych odpowiedzialnie',
  'Prawa do proporcjonalnej i precyzyjnej regulacji',
]

const weDoNotDefend = [
  'Fałszywych obietnic wyleczenia',
  'Zniechęcania pacjenta do skutecznego leczenia',
  'Ukrywania ryzyka i przeciwwskazań',
  'Reklamowania terapii bez podstaw klinicznych',
  'Wykorzystywania chorych i ich rodzin',
  'Praktyk zastępowania medycyny opartej na dowodach pseudomedycyną',
]

export default function MedycynaIntegracyjnaPage() {
  return (
    <div>
      {/* Header */}
      <section className="hero-gradient py-12 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-amber tracking-wider uppercase mb-3">
            Edukacja
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-4 text-balance">
          Komplementarna nie znaczy alternatywna
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Czym jest medycyna integracyjna i czym nie jest
        </p>
        <p className="text-navy/80 leading-relaxed">
          Pojęcia z obszaru medycyny komplementarnej i integracyjnej są często mylone — także 
          w debacie publicznej. Ta strona wyjaśnia, czym te terminy faktycznie oznaczają według 
          definicji Światowej Organizacji Zdrowia i międzynarodowych standardów medycznych.
        </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="overflow-x-auto rounded-xl border border-border">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary">
                <TableHead className="font-semibold text-navy min-w-[150px]">Pojęcie</TableHead>
                <TableHead className="font-semibold text-navy min-w-[250px]">Co oznacza</TableHead>
                <TableHead className="font-semibold text-navy min-w-[250px]">Czego NIE oznacza</TableHead>
                <TableHead className="font-semibold text-navy min-w-[200px]">Warunek bezpieczeństwa</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow key={index} className="hover:bg-secondary/50">
                  <TableCell className="font-semibold text-navy align-top">
                    {row.term}
                  </TableCell>
                  <TableCell className="text-muted-foreground align-top">
                    {row.meaning}
                  </TableCell>
                  <TableCell className="text-muted-foreground align-top">
                    {row.notMeaning}
                  </TableCell>
                  <TableCell className="text-muted-foreground align-top">
                    {row.safety}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Key Message Banner */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-16">
        <Card className="border-2 border-navy rounded-xl">
          <CardContent className="p-6 lg:p-8">
            <p className="text-navy leading-relaxed text-center font-medium">
              Medycyna integracyjna nie polega na zastępowaniu leczenia onkologicznego, chirurgicznego 
              ani antybiotykowego. Jej sens polega na odpowiedzialnym łączeniu metod wspomagających 
              z leczeniem głównym — przy ocenie dowodów, ryzyka, celu i świadomej zgody pacjenta.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Two Column Section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* What We Defend */}
          <Card className="border border-border rounded-xl">
            <CardContent className="p-6 lg:p-8">
              <h3 className="font-serif text-xl font-semibold text-navy mb-6">
                Czego BRONIMY:
              </h3>
              <ul className="space-y-3">
                {weDefend.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-teal" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* What We Do Not Defend */}
          <Card className="border border-border rounded-xl">
            <CardContent className="p-6 lg:p-8">
              <h3 className="font-serif text-xl font-semibold text-navy mb-6">
                Czego NIE bronimy:
              </h3>
              <ul className="space-y-3">
                {weDoNotDefend.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-red-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-3 w-3 text-red-orange" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WHO Section */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-navy mb-6">
            Co mówi WHO
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Według Globalnej Strategii Medycyny Tradycyjnej, Komplementarnej i Integracyjnej WHO 
            2025–2034 (rezolucja WHA78(14) z 27.05.2025), medycyna integracyjna powinna rozwijać się 
            w oparciu o cztery filary: wzmocnienie dowodów naukowych, bezpieczeństwo i regulacje, 
            integrację z systemami zdrowia oraz innowacje.
          </p>
          <a
            href="https://www.who.int/publications/i/item/9789240113176"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal hover:underline underline-offset-4"
          >
            <ExternalLink className="h-4 w-4" />
            WHO TCIM Strategy 2025–2034
          </a>
        </div>
      </section>
    </div>
  )
}
