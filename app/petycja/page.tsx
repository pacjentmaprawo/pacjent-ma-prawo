'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Check } from 'lucide-react'
import { toast } from 'sonner'

const demands = [
  'Doprecyzowania definicji praktyk pseudomedycznych',
  'Wyraźnego odróżnienia pseudomedycyny od medycyny integracyjnej, terapii wspomagających, off-label i eksperymentu klinicznego',
  'Wprowadzenia zasady proporcjonalności do kar finansowych i decyzji tymczasowych',
  'Zabezpieczeń proceduralnych zgodnych z art. 42 ust. 2 Konstytucji RP (prawo do obrony)',
  'Realnej kontroli sądowej decyzji RPP, w tym ścieżki SOKiK',
  'Pełnej transparentności konsultacji publicznych i mapy interesariuszy',
  'Uzupełnienia OSR o dane ilościowe o skali zjawiska',
  'Wydłużenia vacatio legis do co najmniej 6 miesięcy (zgodnie z orzecznictwem TK)',
]

export default function PetycjaPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    role: '',
    rodoConsent: false,
    updatesConsent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.rodoConsent) {
      toast.error('Proszę wypełnić wymagane pola')
      return
    }

    setIsSubmitting(true)
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    toast.success('Dziękujemy za podpisanie apelu')
  }

  if (isSubmitted) {
    return (
      <div className="py-12 lg:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-teal" />
          </div>
          <h1 className="font-serif text-3xl font-semibold text-navy mb-4">
            Dziękujemy za Twój podpis
          </h1>
          <p className="text-muted-foreground mb-8">
            Twój głos został zarejestrowany. Razem możemy wpłynąć na kształt regulacji.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-navy text-navy"
          >
            Wróć do formularza
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      <section className="hero-gradient py-12 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-red-orange tracking-wider uppercase mb-3">
            Apel obywatelski
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-6 text-balance">
          Podpisz apel o poprawę projektu UD207
        </h1>
        <p className="text-navy/80 leading-relaxed">
          Wzywamy Sejm Rzeczypospolitej Polskiej do zatrzymania prac nad projektem ustawy 
          w obecnym brzmieniu i skierowania go do pogłębionych konsultacji publicznych 
          z udziałem pacjentów, lekarzy, prawników, ekspertów medycyny integracyjnej 
          i organizacji społecznych.
        </p>
        </div>
      </section>

      {/* Demands Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="font-serif text-xl font-semibold text-navy mb-6">
          Czego się domagamy
        </h2>
        <ul className="space-y-3">
          {demands.map((demand, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="h-3 w-3 text-teal" />
              </div>
              <span className="text-muted-foreground">{demand}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Form Section */}
      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 mb-12">
        <Card className="border border-border rounded-xl">
          <CardContent className="p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-navy">
                  Imię i nazwisko <span className="text-red-orange">*</span>
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jan Kowalski"
                  required
                  className="border-border focus:ring-amber"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-navy">
                  Adres e-mail <span className="text-red-orange">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jan@example.com"
                  required
                  className="border-border focus:ring-amber"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city" className="text-navy">
                  Miejscowość
                </Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="Warszawa"
                  className="border-border focus:ring-amber"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-navy">Jestem:</Label>
                <RadioGroup
                  value={formData.role}
                  onValueChange={(value) => setFormData({ ...formData, role: value })}
                  className="space-y-2"
                >
                  {['pacjentem', 'lekarzem', 'prawnikiem', 'przedstawicielem organizacji', 'inną osobą'].map((role) => (
                    <div key={role} className="flex items-center space-x-2">
                      <RadioGroupItem value={role} id={role} />
                      <Label htmlFor={role} className="font-normal text-muted-foreground cursor-pointer">
                        {role}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="rodo"
                    checked={formData.rodoConsent}
                    onCheckedChange={(checked) => setFormData({ ...formData, rodoConsent: checked as boolean })}
                    required
                  />
                  <Label htmlFor="rodo" className="text-sm text-muted-foreground font-normal cursor-pointer leading-relaxed">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z RODO w celu rejestracji podpisu pod apelem <span className="text-red-orange">*</span>
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="updates"
                    checked={formData.updatesConsent}
                    onCheckedChange={(checked) => setFormData({ ...formData, updatesConsent: checked as boolean })}
                  />
                  <Label htmlFor="updates" className="text-sm text-muted-foreground font-normal cursor-pointer leading-relaxed">
                    Chcę otrzymywać aktualizacje o postępie inicjatywy
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-orange text-background font-semibold hover:bg-red-orange/90 py-6 text-base"
              >
                {isSubmitting ? 'Wysyłanie...' : 'Podpisuję apel'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Counter */}
      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <p className="text-muted-foreground">
          <span className="font-semibold text-red-orange text-2xl">Formularz w przygotowaniu</span> — integracja z platformą petycyjną wkrótce
        </p>
      </section>

      {/* Note */}
      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Card className="border border-border rounded-xl bg-secondary">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Twoje dane są chronione zgodnie z RODO. Nie udostępniamy ich podmiotom trzecim. 
              Formularz jest obecnie makietą — integracja z platformą petycyjną (OpenPetition.pl) 
              zostanie dodana w najbliższym czasie.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
