'use client'

import { useMemo, useState } from 'react'
import { toast } from 'sonner'
import {
  Mail,
  Copy,
  ExternalLink,
  Send,
  Users,
  CheckCircle2,
  AlertTriangle,
  ArrowDown,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { AddresseePicker } from './AddresseePicker'
import { SelfIntroduction } from './SelfIntroduction'
import {
  ALL_ADDRESSEES,
  PRIORITY_ADDRESSEES,
  type Addressee,
  type VariantId,
} from '@/lib/petycja/addressees'
import {
  VARIANTS,
  VARIANT_ORDER,
  composeMessage,
  buildMailtoUrl,
  CONTACT_BCC,
} from '@/lib/petycja/variants'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function defaultSelected(): Set<string> {
  return new Set(PRIORITY_ADDRESSEES.filter((a) => a.defaultChecked).map((a) => a.id))
}

interface SendGroup {
  variant: VariantId
  addressees: Addressee[]
  emails: string[]
}

export function PetitionForm() {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(defaultSelected)
  const [manualEmail, setManualEmail] = useState('')
  const [selfIntro, setSelfIntro] = useState('')
  const [sendCopy, setSendCopy] = useState(false)
  const [showSend, setShowSend] = useState(false)

  const toggle = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const setMany = (ids: string[], checked: boolean) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      ids.forEach((id) => (checked ? next.add(id) : next.delete(id)))
      return next
    })
  }

  const selectAllPriority = () =>
    setSelectedIds(new Set(PRIORITY_ADDRESSEES.filter((a) => a.id !== 'moj-posel').map((a) => a.id)))
  const clearAll = () => setSelectedIds(new Set())

  const manualValid = EMAIL_RE.test(manualEmail.trim())

  // Adresat e-mailowy / formularzowy gotowy do wysyłki?
  const resolvedEmail = (a: Addressee): string | null => {
    if (a.deliveryMode === 'manual') return manualValid ? manualEmail.trim() : null
    if (a.deliveryMode === 'external_form') return null
    return a.email || null
  }

  const selectedAddressees = useMemo(
    () =>
      ALL_ADDRESSEES.filter((a) => selectedIds.has(a.id)).sort(
        (x, y) => VARIANT_ORDER.indexOf(x.variantSuggestion) - VARIANT_ORDER.indexOf(y.variantSuggestion),
      ),
    [selectedIds],
  )

  const mailtoGroups = useMemo<SendGroup[]>(() => {
    const map = new Map<VariantId, SendGroup>()
    for (const a of selectedAddressees) {
      if (a.deliveryMode === 'external_form') continue
      const email = resolvedEmail(a)
      if (!email) continue
      const g = map.get(a.variantSuggestion) ?? {
        variant: a.variantSuggestion,
        addressees: [],
        emails: [],
      }
      g.addressees.push(a)
      g.emails.push(email)
      map.set(a.variantSuggestion, g)
    }
    return VARIANT_ORDER.filter((v) => map.has(v)).map((v) => map.get(v)!)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAddressees, manualEmail, manualValid])

  const externalTargets = useMemo(
    () => selectedAddressees.filter((a) => a.deliveryMode === 'external_form'),
    [selectedAddressees],
  )

  const totalRecipients =
    mailtoGroups.reduce((sum, g) => sum + g.emails.length, 0) + externalTargets.length

  const manualSelectedButInvalid =
    selectedIds.has('moj-posel') && manualEmail.trim().length > 0 && !manualValid

  const handlePrepare = () => {
    if (totalRecipients === 0) {
      toast.error('Zaznacz przynajmniej jednego adresata.')
      return
    }
    setShowSend(true)
    try {
      // Lekki, anonimowy licznik zdarzeń (bez danych osobowych).
      ;(window as unknown as { va?: (e: string, n: string) => void }).va?.('event', 'petition_prepared')
    } catch {
      /* analytics opcjonalne */
    }
    requestAnimationFrame(() => {
      document.getElementById('sekcja-wyslij')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const copyMessage = async (variant: VariantId) => {
    const msg = composeMessage(VARIANTS[variant], selfIntro)
    try {
      await navigator.clipboard.writeText(`${msg.subject}\n\n${msg.body}`)
      toast.success('Treść skopiowana do schowka.')
    } catch {
      toast.error('Nie udało się skopiować. Zaznacz tekst ręcznie.')
    }
  }

  const mailtoForGroup = (group: SendGroup): string => {
    const msg = composeMessage(VARIANTS[group.variant], selfIntro)
    return buildMailtoUrl({
      emails: group.emails,
      subject: msg.subject,
      body: msg.body,
      bcc: sendCopy ? CONTACT_BCC : undefined,
    })
  }

  return (
    <div className="space-y-10">
      {/* KROK 1 — adresaci */}
      <section aria-labelledby="krok-1">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-background text-sm font-semibold">
            1
          </span>
          <h2 id="krok-1" className="font-serif text-2xl font-semibold text-navy">
            Wybierz adresatów
          </h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          Domyślnie zaznaczyliśmy {PRIORITY_ADDRESSEES.filter((a) => a.defaultChecked).length}{' '}
          najważniejszych adresatów. Możesz dowolnie odznaczać i zaznaczać kolejne osoby —
          każda otrzyma pismo dopasowane do swojej roli.
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="border-navy/30 text-navy"
            onClick={selectAllPriority}
          >
            Zaznacz wszystkich priorytetowych
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="text-muted-foreground"
            onClick={clearAll}
          >
            Wyczyść zaznaczenie
          </Button>
          <span className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-navy">
            <Users className="h-4 w-4" />
            Zaznaczono: {totalRecipients}
          </span>
        </div>

        <AddresseePicker
          selectedIds={selectedIds}
          onToggle={toggle}
          onSetMany={setMany}
          manualEmail={manualEmail}
          onManualEmailChange={setManualEmail}
        />

        {manualSelectedButInvalid && (
          <p className="mt-2 flex items-center gap-1.5 text-xs text-red-orange">
            <AlertTriangle className="h-3.5 w-3.5" />
            Adres e-mail Twojego posła wygląda na niepełny — sprawdź go przed wysyłką.
          </p>
        )}
      </section>

      <Separator />

      {/* KROK 2 — przedstaw się */}
      <section aria-labelledby="krok-2">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-background text-sm font-semibold">
            2
          </span>
          <h2 id="krok-2" className="font-serif text-2xl font-semibold text-navy">
            Przybliż siebie <span className="text-base font-normal text-muted-foreground">(opcjonalne)</span>
          </h2>
        </div>
        <SelfIntroduction value={selfIntro} onChange={setSelfIntro} />
      </section>

      <Separator />

      {/* KROK 3 — opcje i przygotowanie */}
      <section aria-labelledby="krok-3">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-background text-sm font-semibold">
            3
          </span>
          <h2 id="krok-3" className="font-serif text-2xl font-semibold text-navy">
            Przygotuj wiadomości
          </h2>
        </div>

        <div className="flex items-start gap-3 mb-6 rounded-lg bg-secondary px-4 py-3">
          <Checkbox
            id="send-copy"
            checked={sendCopy}
            onCheckedChange={(c) => setSendCopy(c as boolean)}
            className="mt-0.5"
          />
          <Label htmlFor="send-copy" className="cursor-pointer font-normal text-sm text-muted-foreground leading-relaxed">
            <span className="font-medium text-navy">Prześlij nam też kopię (opcjonalnie).</span>{' '}
            Adres {CONTACT_BCC} zostanie dodany do ukrytej kopii (BCC). Otrzymamy treść i Twój
            adres e-mail wyłącznie do statystyk kampanii. Pole odznaczone domyślnie.
          </Label>
        </div>

        <Button
          type="button"
          size="lg"
          onClick={handlePrepare}
          className="w-full sm:w-auto bg-red-orange text-background font-semibold hover:bg-red-orange/90 px-8 py-6 text-base"
        >
          <Send className="h-5 w-5 mr-2" />
          Przygotuj wiadomości do wysłania
        </Button>
        {totalRecipients === 0 && (
          <p className="mt-2 text-xs text-muted-foreground">
            Najpierw zaznacz przynajmniej jednego adresata w kroku 1.
          </p>
        )}
      </section>

      {/* SEKCJA WYSYŁKI */}
      {showSend && totalRecipients > 0 && (
        <section id="sekcja-wyslij" aria-labelledby="wyslij-naglowek" className="scroll-mt-24">
          <Separator className="mb-10" />
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle2 className="h-6 w-6 text-teal" />
            <h2 id="wyslij-naglowek" className="font-serif text-2xl font-semibold text-navy">
              Gotowe — wyślij wiadomości
            </h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Pogrupowaliśmy adresatów według rodzaju pisma. Kliknij „Otwórz wiadomość” przy każdej
            grupie — Twój program pocztowy otworzy gotowy e-mail z wpisanymi adresatami i treścią.
            Wystarczy go wysłać. Jeśli wolisz wkleić treść ręcznie, użyj „Kopiuj treść”.
          </p>

          <div className="space-y-4">
            {mailtoGroups.map((group) => {
              const variant = VARIANTS[group.variant]
              return (
                <Card key={group.variant} className="card-accent-teal border border-border rounded-xl">
                  <CardContent className="p-5 lg:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <p className="text-xs font-medium text-teal uppercase tracking-wider mb-1">
                          {variant.audience}
                        </p>
                        <h3 className="font-serif text-lg font-semibold text-navy">
                          {variant.label}
                        </h3>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {group.emails.length}{' '}
                        {group.emails.length === 1 ? 'adresat' : 'adresatów'}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {group.addressees.map((a) => (
                        <Badge
                          key={a.id}
                          variant="outline"
                          className="text-[11px] font-normal text-muted-foreground"
                        >
                          {a.label}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <a href={mailtoForGroup(group)}>
                        <Button
                          type="button"
                          className="bg-navy text-background font-medium hover:bg-navy/90"
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          Otwórz wiadomość
                        </Button>
                      </a>
                      <Button
                        type="button"
                        variant="outline"
                        className="border-navy/30 text-navy"
                        onClick={() => copyMessage(group.variant)}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Kopiuj treść
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            {/* Adresaci formularzowi (np. RPO) */}
            {externalTargets.map((a) => {
              const variant = VARIANTS[a.variantSuggestion]
              return (
                <Card key={a.id} className="card-accent-amber border border-border rounded-xl">
                  <CardContent className="p-5 lg:p-6">
                    <p className="text-xs font-medium text-amber uppercase tracking-wider mb-1">
                      Formularz internetowy
                    </p>
                    <h3 className="font-serif text-lg font-semibold text-navy mb-1">{a.label}</h3>
                    {a.note && <p className="text-sm text-muted-foreground mb-4">{a.note}</p>}
                    <div className="flex flex-wrap gap-2">
                      <a href={a.externalUrl} target="_blank" rel="noopener noreferrer">
                        <Button
                          type="button"
                          className="bg-navy text-background font-medium hover:bg-navy/90"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Otwórz formularz
                        </Button>
                      </a>
                      <Button
                        type="button"
                        variant="outline"
                        className="border-navy/30 text-navy"
                        onClick={() => copyMessage(a.variantSuggestion)}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Kopiuj treść wniosku
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {sendCopy && (
            <p className="mt-4 text-xs text-muted-foreground">
              Kopia do {CONTACT_BCC} zostanie dodana w polu BCC każdej wiadomości e-mail.
            </p>
          )}

          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <ArrowDown className="h-4 w-4" />
            Zmieniłeś zdanie? Wróć do kroku 1, zmień zaznaczenie i kliknij „Przygotuj” ponownie.
          </div>
        </section>
      )}
    </div>
  )
}
