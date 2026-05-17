import type { Metadata } from 'next'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Często zadawane pytania o projekcie UD207, medycynie integracyjnej i prawach pacjenta.',
}

const faqItems = [
  {
    id: 'q1',
    question: 'Czy jesteście przeciwko walce z oszustwami medycznymi?',
    answer: 'Nie. Popieramy każdą skuteczną walkę z oszustwami medycznymi — to słuszny cel projektu UD207. Sprzeciwiamy się natomiast nieprecyzyjnym narzędziom, które mogą objąć także odpowiedzialnych lekarzy i legalne terapie wspomagające.'
  },
  {
    id: 'q2',
    question: 'Czy medycyna komplementarna oznacza rezygnację z leczenia konwencjonalnego?',
    answer: 'Nie. To kluczowe rozróżnienie. Medycyna komplementarna stosowana jest OBOK leczenia głównego, nie zamiast niego. Termin "alternatywna" odnosi się do metod stosowanych ZAMIAST leczenia konwencjonalnego — i to jest zupełnie inna kategoria.'
  },
  {
    id: 'q3',
    question: 'Czym medycyna komplementarna różni się od integracyjnej?',
    answer: 'Medycyna komplementarna to konkretne metody wspomagające. Medycyna integracyjna to model kliniczny łączenia metod konwencjonalnych i komplementarnych, oparty na ocenie dowodów, ryzyka i zgody pacjenta. Te definicje przyjmuje WHO w Strategii TCIM 2025–2034.'
  },
  {
    id: 'q4',
    question: 'Dlaczego projekt Lex Szarlatan może być niebezpieczny?',
    answer: 'Z trzech głównych powodów: (1) nieprecyzyjne definicje mogą objąć legalne terapie; (2) decyzje administracyjne przed prawomocnym wyjaśnieniem mogą powodować nieodwracalne skutki; (3) wysokie kary tworzą efekt mrożący dla wolności rozmowy medycznej.'
  },
  {
    id: 'q5',
    question: 'Czy lekarz powinien móc rozmawiać z pacjentem o terapiach wspomagających?',
    answer: 'Tak — i jest to obowiązek prawny lekarza wynikający z prawa pacjenta do pełnej informacji. Rozmowa o opcjach leczenia, w tym terapiach wspomagających, jest częścią świadomej zgody, gwarantowanej art. 17 ustawy o prawach pacjenta.'
  },
  {
    id: 'q6',
    question: 'Czy pacjent może wybrać terapię, której państwo nie popiera?',
    answer: 'Pacjent ma prawo do świadomej decyzji o swoim leczeniu — w granicach prawa i z uwzględnieniem ryzyka. Państwo ma obowiązek chronić pacjenta przed oszustwem, ale nie może odbierać mu prawa do informowanej decyzji o własnym ciele i zdrowiu.'
  },
  {
    id: 'q7',
    question: 'Czy ta platforma oskarża konkretne osoby lub firmy?',
    answer: 'Nie. Nie formułujemy personalnych zarzutów bez dokumentów źródłowych. Domagamy się pełnej transparentności procesu legislacyjnego, ujawnienia konfliktów interesów osób opiniujących projekt oraz mapy interesariuszy — w oparciu o publiczne deklaracje i oficjalne dokumenty.'
  },
  {
    id: 'q8',
    question: 'Co oznacza "transparentność interesariuszy"?',
    answer: 'Oznacza obowiązek ujawnienia, kto brał udział w konsultacjach, czyje stanowiska zostały uwzględnione w projekcie, czyje odrzucone, oraz czy osoby opiniujące deklarowały konflikty interesów. Jest to standard ICMJE stosowany w nauce i powinien obowiązywać w stanowieniu prawa zdrowotnego.'
  },
  {
    id: 'q9',
    question: 'Jak można pomóc?',
    answer: 'Po pierwsze: podpisz apel obywatelski. Po drugie: udostępnij stronę pacjentmaprawo.pl swoim znajomym. Po trzecie: jeśli jesteś dziennikarzem, lekarzem, prawnikiem lub przedstawicielem organizacji — skontaktuj się z nami przez sekcję /kontakt.'
  },
  {
    id: 'q10',
    question: 'Gdzie znajdę dokumenty źródłowe?',
    answer: 'Wszystkie cytowane dokumenty są dostępne w sekcji /dokumenty — z linkami do oficjalnych źródeł (rcl.gov.pl, sejm.gov.pl, apps.who.int, eeas.europa.eu, sn.pl, orzeczenia.nsa.gov.pl) oraz własnymi opracowaniami do pobrania w formacie PDF.'
  },
]

export default function FAQPage() {
  return (
    <div>
      {/* Header */}
      <section className="hero-gradient py-12 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-amber tracking-wider uppercase mb-3">
            Pytania
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-4">
          Często zadawane pytania
        </h1>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item) => (
            <AccordionItem 
              key={item.id} 
              value={item.id} 
              className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary"
            >
              <AccordionTrigger className="text-left font-semibold text-navy hover:text-navy/80 hover:no-underline py-6">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
}
