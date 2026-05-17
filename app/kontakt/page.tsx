'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Mail, HelpCircle, Newspaper, FileText, Users, Copy, Check } from 'lucide-react'
import { toast } from 'sonner'

const contactReasons = [
  { icon: HelpCircle, title: 'Pytania ogólne', desc: 'Pytania o platformę, o projekt UD207, o medycynę integracyjną.' },
  { icon: Newspaper, title: 'Media i wywiady', desc: 'Komentarze, wywiady, materiały prasowe. Możemy zorganizować rozmowę z ekspertem.' },
  { icon: FileText, title: 'Dokumenty i źródła', desc: 'Zgłoś dokument, który powinien znaleźć się w bazie. Wskaż brakujące źródło.' },
  { icon: Users, title: 'Współpraca i historie', desc: 'Jesteś pacjentem, lekarzem, prawnikiem, członkiem organizacji? Napisz, jak możemy współpracować.' },
]

export default function KontaktPage() {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    rodoConsent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const email = 'pacjentmaprawo@proton.me'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      toast.success('Adres email skopiowany')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error('Nie udało się skopiować')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.email || !formData.message || !formData.rodoConsent) {
      toast.error('Proszę wypełnić wymagane pola')
      return
    }

    setIsSubmitting(true)
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    toast.success('Wiadomość zostanie wysłana na pacjentmaprawo@proton.me')
    setFormData({ name: '', email: '', subject: '', message: '', rodoConsent: false })
  }

  return (
    <div>
      {/* Header */}
      <section className="hero-gradient py-12 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-amber tracking-wider uppercase mb-3">
            Skontaktuj się
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-4">
          Kontakt
        </h1>
        <p className="text-navy/80 leading-relaxed">
          Wszystkie zapytania kierujemy na jeden adres kontaktowy. 
          Odpowiadamy w ciągu 24 godzin w dni robocze.
        </p>
        </div>
      </section>

      {/* Email Card */}
      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 mb-16">
        <Card className="border-2 border-navy rounded-xl">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-navy" />
            </div>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
              {email}
            </h2>
            <Button
              onClick={handleCopy}
              variant="outline"
              className="border-navy text-navy hover:bg-navy/5"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Skopiowano
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-2" />
                  Skopiuj adres
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Contact Reasons */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="font-serif text-2xl font-semibold text-navy mb-8 text-center">
          W jakich sprawach pisać
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactReasons.map((reason, index) => (
            <Card key={index} className="border border-border rounded-xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="h-6 w-6 text-navy" />
                </div>
                <h3 className="font-semibold text-navy mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {reason.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mb-16">
        <Card className="border border-border rounded-xl bg-cream">
          <CardContent className="p-6">
            <h3 className="font-semibold text-navy mb-3">
              WAŻNE — bezpieczeństwo komunikacji:
            </h3>
            <ul className="space-y-2 text-sm text-navy/80">
              <li>• Używamy ProtonMail (Szwajcaria) z szyfrowaniem end-to-end.</li>
              <li>• Nie przesyłaj danych medycznych ani dokumentacji medycznej przez ten kanał.</li>
              <li>• Jeśli chcesz opisać swoją historię, zanonimizuj dane osobowe i dane placówek.</li>
              <li>• Twoje dane przetwarzamy wyłącznie w celu odpowiedzi na zapytanie, zgodnie z RODO. Nie udostępniamy ich podmiotom trzecim.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Contact Form */}
      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Card className="border border-border rounded-xl">
          <CardContent className="p-6 lg:p-8">
            <h3 className="font-serif text-xl font-semibold text-navy mb-6">
              Formularz kontaktowy
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-navy">
                  Twoje imię
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jan"
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
                <Label htmlFor="subject" className="text-navy">
                  Temat
                </Label>
                <Select
                  value={formData.subject}
                  onValueChange={(value) => setFormData({ ...formData, subject: value })}
                >
                  <SelectTrigger className="border-border">
                    <SelectValue placeholder="Wybierz temat" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ogolne">Pytanie ogólne</SelectItem>
                    <SelectItem value="wspolpraca">Współpraca</SelectItem>
                    <SelectItem value="media">Media</SelectItem>
                    <SelectItem value="dokumenty">Dokumenty</SelectItem>
                    <SelectItem value="inne">Inne</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-navy">
                  Wiadomość <span className="text-red-orange">*</span>
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Twoja wiadomość (max 2000 znaków)"
                  maxLength={2000}
                  rows={5}
                  required
                  className="border-border focus:ring-amber resize-none"
                />
                <p className="text-xs text-muted-foreground text-right">
                  {formData.message.length}/2000
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="rodo"
                  checked={formData.rodoConsent}
                  onCheckedChange={(checked) => setFormData({ ...formData, rodoConsent: checked as boolean })}
                  required
                />
                <Label htmlFor="rodo" className="text-sm text-muted-foreground font-normal cursor-pointer leading-relaxed">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z RODO w celu odpowiedzi na zapytanie <span className="text-red-orange">*</span>
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber text-navy font-semibold hover:bg-amber/90 py-6 text-base"
              >
                {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Wiadomość zostanie wysłana na pacjentmaprawo@proton.me. 
                Twój email jest używany wyłącznie jako adres zwrotny.
              </p>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
