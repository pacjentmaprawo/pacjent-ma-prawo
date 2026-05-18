import type { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import {
  Info,
  FileCheck,
  HeartHandshake,
  FileText,
  UserCheck,
  ShieldAlert,
  Scale
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prawa pacjenta',
  description: 'Prawa pacjenta i zasady, które powinny chronić pacjenta — w polskim i europejskim systemie prawnym. Konstytucja RP, ustawa o prawach pacjenta, EKPC, Konwencja z Oviedo.',
}

const rights = [
  {
    icon: Info,
    title: 'Prawo do informacji',
    content: 'Pacjent ma prawo do pełnej informacji o swoim stanie zdrowia, dostępnych metodach leczenia i ich konsekwencjach. Bez informacji świadoma decyzja jest niemożliwa.'
  },
  {
    icon: FileCheck,
    title: 'Prawo do świadomej zgody (informed consent)',
    content: 'Każda interwencja medyczna wymaga zgody pacjenta po uzyskaniu pełnej informacji (art. 16–17 u.p.p., art. 5 Konwencji z Oviedo). Zgoda musi być świadoma, dobrowolna i może być wycofana. Świadoma zgoda jest fundamentem europejskiego prawa medycznego — także dla terapii integracyjnych i eksperymentalnych. Pełen model: zob. „Co proponujemy".'
  },
  {
    icon: HeartHandshake,
    title: 'Prawo do poszanowania godności i autonomii',
    content: 'Pacjent ma prawo do decydowania o swoim ciele i leczeniu — w granicach prawa i swojej zdolności do oceny.'
  },
  {
    icon: FileText,
    title: 'Prawo do dokumentacji medycznej',
    content: 'Pacjent ma prawo dostępu do swojej dokumentacji medycznej, w formacie czytelnym i zrozumiałym.'
  },
  {
    icon: UserCheck,
    title: 'Prawo do drugiej opinii',
    content: 'Pacjent ma prawo skonsultować swoje leczenie z innym lekarzem, bez konsekwencji dla relacji z lekarzem prowadzącym.'
  },
  {
    icon: ShieldAlert,
    title: 'Prawo do ochrony przed oszustwem',
    content: 'Pacjent ma prawo być chronionym przed praktykami pseudomedycznymi, fałszywymi obietnicami i wykorzystaniem słabszej pozycji.'
  },
  {
    icon: Scale,
    title: 'Zasada ochrony pacjenta przed arbitralną decyzją administracyjną',
    content: 'Postulat konstytucyjny (art. 31 ust. 3 Konstytucji RP, art. 6 EKPC): przepisy chroniące pacjenta nie powinny odbierać mu jednocześnie prawa do świadomej decyzji o własnym leczeniu. Ochrona pacjenta nieświadomego nie wymaga eliminacji autonomii pacjenta świadomego.'
  },
]

export default function PrawaPacjentaPage() {
  return (
    <div>
      <section className="hero-gradient py-12 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-amber tracking-wider uppercase mb-3">Fundamenty</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-4 text-balance">
            Prawa pacjenta i zasady, które powinny go chronić
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Co przysługuje każdemu pacjentowi w polskim i europejskim systemie prawnym — i jakie zasady konstytucyjne powinny chronić go przed nadmierną ingerencją.
          </p>
          <p className="text-navy/80 leading-relaxed">
            Pacjent nie jest petentem systemu ochrony zdrowia. Pacjent jest osobą, której zdrowie,
            życie, godność i decyzje muszą być traktowane poważnie — zgodnie z Konstytucją RP,
            ustawą o prawach pacjenta i Konwencją o ochronie praw człowieka.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rights.map((right, index) => (
            <Card key={index} className="border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <right.icon className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">{right.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{right.content}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-navy font-medium leading-relaxed">
            Każde z tych praw wynika z Konstytucji RP, ustawy o prawach pacjenta
            lub europejskich standardów ochrony praw człowieka.
          </p>
        </div>
      </section>
    </div>
  )
}
