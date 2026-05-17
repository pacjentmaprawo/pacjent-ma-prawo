import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ExternalLink, Scale, Shield, Gavel } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Co zmienia projekt Lex Szarlatan?',
  description: 'Faktografia projektu ustawy Lex Szarlatan (oficjalnie UD207). Analiza nowych kompetencji Rzecznika Praw Pacjenta i ryzyk konstytucyjnych.',
}

const accordionItems = [
  {
    id: 'ostrzezenia',
    title: 'Ostrzeżenia publiczne',
    content: 'Projekt umożliwia Rzecznikowi Praw Pacjenta wydawanie publicznych ostrzeżeń wobec konkretnych podmiotów leczniczych jeszcze przed prawomocnym zakończeniem postępowania.'
  },
  {
    id: 'decyzje',
    title: 'Decyzje tymczasowe',
    content: 'RPP otrzymuje uprawnienie do wydawania decyzji o charakterze tymczasowym, których skutki mogą rozpocząć działanie przed pełnym rozpatrzeniem sprawy.'
  },
  {
    id: 'kary',
    title: 'Kary finansowe do 1 mln zł',
    content: 'Projekt podnosi maksymalny pułap kar administracyjnych do jednego miliona złotych. Dla wielu praktyk i mniejszych ośrodków oznacza to ryzyko egzystencjalne.'
  },
  {
    id: 'publikacja',
    title: 'Publikacja decyzji',
    content: 'Decyzje RPP mogą być publikowane na stronie urzędu, również przed prawomocnym zakończeniem postępowania. Stwarza to ryzyko nieodwracalnej szkody reputacyjnej.'
  },
  {
    id: 'osr',
    title: 'Brak danych ilościowych w OSR',
    content: 'Ocena Skutków Regulacji projektu nie zawiera danych ilościowych o skali zjawiska, które ustawa ma regulować, ani prognozy kosztów wprowadzenia nowych narzędzi.'
  },
]

const timelineSteps = [
  { step: 1, label: 'Zgłoszenie' },
  { step: 2, label: 'Postępowanie RPP' },
  { step: 3, label: 'Możliwe ostrzeżenie publiczne' },
  { step: 4, label: 'Możliwa decyzja tymczasowa' },
  { step: 5, label: 'Możliwa kara' },
  { step: 6, label: 'Skutek dla pacjenta, lekarza, placówki' },
]

const constitutionalCards = [
  {
    icon: Scale,
    article: 'Art. 2 Konstytucji RP (lex certa)',
    content: 'Norma karna i administracyjna musi być precyzyjna. Pojęcie "aktualnej wiedzy medycznej" jako kryterium kary wymaga doprecyzowania.'
  },
  {
    icon: Shield,
    article: 'Art. 42 ust. 2 Konstytucji RP (prawo do obrony)',
    content: 'Każdy, wobec kogo prowadzone jest postępowanie sankcyjne, ma prawo do obrony. Decyzje tymczasowe muszą uwzględniać to prawo.'
  },
  {
    icon: Gavel,
    article: 'Art. 45 Konstytucji RP (prawo do sądu)',
    content: 'Sankcje administracyjne wymagają realnej ścieżki kontroli sądowej. Sama formalna możliwość odwołania nie wystarczy.'
  },
]

export default function ProjektPage() {
  return (
    <div>
      {/* Header */}
      <section className="hero-gradient py-12 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-amber tracking-wider uppercase mb-3">
            Faktografia
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-4 text-balance">
          Co zmienia projekt Lex Szarlatan?
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Faktografia projektu ustawy (oficjalna nazwa: UD207)
        </p>
        <p className="text-navy/80 leading-relaxed">
          Projekt ustawy określany jako Lex Szarlatan (oficjalna nazwa: UD207) jest nowelizacją ustawy o prawach pacjenta i Rzeczniku Praw Pacjenta. 
          Został przyjęty przez Radę Ministrów 12 maja 2026 roku i obecnie zmierza do Sejmu. 
          Celem projektu jest ochrona pacjentów przed praktykami o niepotwierdzonej skuteczności. 
          Ten cel jest słuszny. Nasz sprzeciw dotyczy nie celu, lecz zakresu, precyzji i proporcjonalności 
          proponowanych narzędzi.
        </p>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-navy mb-8">
          Nowe kompetencje Rzecznika Praw Pacjenta
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {accordionItems.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-border">
              <AccordionTrigger className="text-left font-semibold text-navy hover:text-navy/80 hover:no-underline py-4">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Timeline Section */}
      <section className="bg-secondary py-16 lg:py-20 mb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-navy mb-12 text-center">
            Wizualna ścieżka procedury
          </h2>
          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              <div className="flex items-center justify-between relative">
                {/* Connecting Line */}
                <div className="absolute top-6 left-0 right-0 h-0.5 bg-border" />
                
                {timelineSteps.map((item) => (
                  <div key={item.step} className="relative flex flex-col items-center z-10">
                    <div className="w-12 h-12 rounded-full bg-navy text-background flex items-center justify-center font-semibold mb-3">
                      {item.step}
                    </div>
                    <p className="text-sm text-navy text-center max-w-[120px] leading-tight">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-4">
              {timelineSteps.map((item, index) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-navy text-background flex items-center justify-center font-semibold text-sm">
                      {item.step}
                    </div>
                    {index < timelineSteps.length - 1 && (
                      <div className="w-0.5 h-8 bg-border mt-2" />
                    )}
                  </div>
                  <p className="text-sm text-navy pt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Constitutional Cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-navy mb-8 text-center">
          Co mówią zasady konstytucyjne
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {constitutionalCards.map((card, index) => (
            <Card key={index} className="border border-border rounded-xl shadow-sm">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <card.icon className="h-5 w-5 text-navy" />
                </div>
                <h3 className="font-semibold text-navy mb-2 text-sm">
                  {card.article}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* External Link */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <a
            href="https://legislacja.rcl.gov.pl/projekt/12389401"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="border-2 border-navy text-navy hover:bg-navy/5">
              <ExternalLink className="h-4 w-4 mr-2" />
              Przeczytaj pełny tekst projektu na rcl.gov.pl
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
