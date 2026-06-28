'use client'

import { useState } from 'react'
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Mail,
  FileText,
  UserPlus,
  AlertTriangle,
} from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  DISPLAY_GROUPS,
  PRIORITY_ADDRESSEES,
  OPTIONAL_ADDRESSEES,
  FULL_KZ_SEJM_ADDRESSEES,
  type Addressee,
  type DisplayGroup,
} from '@/lib/petycja/addressees'

interface AddresseePickerProps {
  selectedIds: Set<string>
  onToggle: (id: string) => void
  onSetMany: (ids: string[], checked: boolean) => void
  manualEmails: Record<string, string>
  onManualEmailChange: (id: string, value: string) => void
}

function DeliveryIcon({ mode }: { mode: Addressee['deliveryMode'] }) {
  if (mode === 'external_form') {
    return <ExternalLink className="h-3.5 w-3.5 text-teal" aria-label="formularz internetowy" />
  }
  if (mode === 'manual') {
    return <UserPlus className="h-3.5 w-3.5 text-amber" aria-label="adres wpisywany ręcznie" />
  }
  return <Mail className="h-3.5 w-3.5 text-muted-foreground" aria-label="e-mail" />
}

function AddresseeRow({
  addressee,
  checked,
  onToggle,
  manualEmails,
  onManualEmailChange,
}: {
  addressee: Addressee
  checked: boolean
  onToggle: (id: string) => void
  manualEmails: Record<string, string>
  onManualEmailChange: (id: string, value: string) => void
}) {
  const isManual = addressee.deliveryMode === 'manual'
  return (
    <div className="rounded-lg px-3 py-2.5 hover:bg-secondary/60 transition-colors">
      <div className="flex items-start gap-3">
        <Checkbox
          id={`addr-${addressee.id}`}
          checked={checked}
          onCheckedChange={() => onToggle(addressee.id)}
          className="mt-0.5"
        />
        <Label htmlFor={`addr-${addressee.id}`} className="flex-1 cursor-pointer font-normal">
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-medium text-navy">{addressee.label}</span>
            {addressee.klub && (
              <Badge variant="secondary" className="text-[10px] font-normal">
                {addressee.klub}
              </Badge>
            )}
            <DeliveryIcon mode={addressee.deliveryMode} />
          </span>
          {addressee.role && (
            <span className="mt-0.5 block text-xs text-muted-foreground leading-snug">
              {addressee.role}
            </span>
          )}
        </Label>
      </div>
      {isManual && checked && (
        <div className="mt-2 pl-7 space-y-1.5">
          <Input
            type="email"
            inputMode="email"
            placeholder="adres e-mail adresata"
            value={manualEmails[addressee.id] ?? ''}
            onChange={(e) => onManualEmailChange(addressee.id, e.target.value)}
            className="border-border focus:ring-amber"
          />
          {addressee.note && (
            <p className="text-xs text-muted-foreground leading-snug">{addressee.note}</p>
          )}
        </div>
      )}
    </div>
  )
}

function GroupBlock({
  group,
  addressees,
  selectedIds,
  onToggle,
  onSetMany,
  manualEmails,
  onManualEmailChange,
}: {
  group: { id: DisplayGroup; label: string; description: string }
  addressees: Addressee[]
  selectedIds: Set<string>
  onToggle: (id: string) => void
  onSetMany: (ids: string[], checked: boolean) => void
  manualEmails: Record<string, string>
  onManualEmailChange: (id: string, value: string) => void
}) {
  const ids = addressees.map((a) => a.id)
  const selectedInGroup = addressees.filter((a) => selectedIds.has(a.id)).length
  const allSelected = selectedInGroup === addressees.length && addressees.length > 0

  if (addressees.length === 0) return null

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <div className="flex flex-wrap items-start justify-between gap-2 bg-secondary/50 px-4 py-3 border-b border-border">
        <div className="flex-1 min-w-[12rem]">
          <h3 className="font-serif text-base font-semibold text-navy">{group.label}</h3>
          <p className="mt-0.5 text-xs text-muted-foreground leading-snug">{group.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground tabular-nums">
            {selectedInGroup}/{addressees.length}
          </span>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="h-7 text-xs border-navy/30 text-navy"
            onClick={() => onSetMany(ids, !allSelected)}
          >
            {allSelected ? 'Odznacz wszystkie' : 'Zaznacz wszystkie'}
          </Button>
        </div>
      </div>
      <div className="divide-y divide-border/60 p-1">
        {addressees.map((a) => (
          <AddresseeRow
            key={a.id}
            addressee={a}
            checked={selectedIds.has(a.id)}
            onToggle={onToggle}
            manualEmails={manualEmails}
            onManualEmailChange={onManualEmailChange}
          />
        ))}
      </div>
    </div>
  )
}

export function AddresseePicker({
  selectedIds,
  onToggle,
  onSetMany,
  manualEmails,
  onManualEmailChange,
}: AddresseePickerProps) {
  const [optionalOpen, setOptionalOpen] = useState(false)

  const mojPosel = PRIORITY_ADDRESSEES.find((a) => a.id === 'moj-posel')
  const fullKzSelected = FULL_KZ_SEJM_ADDRESSEES.filter((a) => selectedIds.has(a.id)).length
  const allKzSelected = fullKzSelected === FULL_KZ_SEJM_ADDRESSEES.length

  return (
    <div className="space-y-4">
      {DISPLAY_GROUPS.map((group) => {
        if (group.id === 'lokalny') {
          return (
            <div key={group.id} className="rounded-xl border border-border overflow-hidden">
              <div className="bg-secondary/50 px-4 py-3 border-b border-border">
                <h3 className="font-serif text-base font-semibold text-navy">{group.label}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground leading-snug">
                  {group.description}
                </p>
              </div>
              <div className="p-4 space-y-3">
                {mojPosel && (
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id={`addr-${mojPosel.id}`}
                      checked={selectedIds.has(mojPosel.id)}
                      onCheckedChange={() => onToggle(mojPosel.id)}
                      className="mt-0.5"
                    />
                    <Label
                      htmlFor={`addr-${mojPosel.id}`}
                      className="cursor-pointer font-medium text-navy"
                    >
                      Chcę dopisać swojego posła / posłankę
                    </Label>
                  </div>
                )}
                {mojPosel && selectedIds.has(mojPosel.id) && (
                  <div className="space-y-2 pl-7">
                    <Input
                      type="email"
                      inputMode="email"
                      placeholder="imie.nazwisko@sejm.gov.pl"
                      value={manualEmails[mojPosel.id] ?? ''}
                      onChange={(e) => onManualEmailChange(mojPosel.id, e.target.value)}
                      className="border-border focus:ring-amber"
                    />
                    <a
                      href={mojPosel.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-teal hover:underline underline-offset-2"
                    >
                      Znajdź e-mail swojego posła na sejm.gov.pl
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          )
        }

        const groupAddressees = PRIORITY_ADDRESSEES.filter(
          (a) => a.displayGroup === group.id && a.deliveryMode !== 'manual',
        )
        return (
          <GroupBlock
            key={group.id}
            group={group}
            addressees={groupAddressees}
            selectedIds={selectedIds}
            onToggle={onToggle}
            onSetMany={onSetMany}
            manualEmails={manualEmails}
            onManualEmailChange={onManualEmailChange}
          />
        )
      })}

      {/* Sekcja rozszerzona — adresaci opcjonalni */}
      <Collapsible open={optionalOpen} onOpenChange={setOptionalOpen}>
        <CollapsibleTrigger asChild>
          <Button
            type="button"
            variant="outline"
            className="w-full justify-between border-navy/30 text-navy"
          >
            <span className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Rozszerz listę adresatów (opcjonalni — media, senatorowie, pełna komisja)
            </span>
            {optionalOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-4 pt-4">
          {DISPLAY_GROUPS.map((group) => {
            const opt = OPTIONAL_ADDRESSEES.filter((a) => a.displayGroup === group.id)
            if (opt.length === 0) return null
            return (
              <GroupBlock
                key={`opt-${group.id}`}
                group={{ ...group, label: `${group.label} — dodatkowi` }}
                addressees={opt}
                selectedIds={selectedIds}
                onToggle={onToggle}
                onSetMany={onSetMany}
                manualEmails={manualEmails}
                onManualEmailChange={onManualEmailChange}
              />
            )
          })}

          {/* Pełny skład Komisji Zdrowia Sejmu */}
          <div className="rounded-xl border border-amber/40 bg-amber/5 overflow-hidden">
            <div className="flex flex-wrap items-start justify-between gap-2 px-4 py-3 border-b border-amber/30">
              <div className="flex-1 min-w-[12rem]">
                <h3 className="font-serif text-base font-semibold text-navy">
                  Pełny skład Komisji Zdrowia Sejmu
                </h3>
                <p className="mt-1 flex items-start gap-1.5 text-xs text-amber-900 leading-snug">
                  <AlertTriangle className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-amber" />
                  Zaznaczenie doda {FULL_KZ_SEJM_ADDRESSEES.length} posłów do wysyłki (wariant B).
                  Duża skala — adresy generowane wg schematu i wymagają sprawdzenia.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground tabular-nums">
                  {fullKzSelected}/{FULL_KZ_SEJM_ADDRESSEES.length}
                </span>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="h-7 text-xs border-amber/50 text-amber-900"
                  onClick={() =>
                    onSetMany(
                      FULL_KZ_SEJM_ADDRESSEES.map((a) => a.id),
                      !allKzSelected,
                    )
                  }
                >
                  {allKzSelected ? 'Odznacz wszystkich' : `Dodaj wszystkich (${FULL_KZ_SEJM_ADDRESSEES.length})`}
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 p-1">
              {FULL_KZ_SEJM_ADDRESSEES.map((a) => (
                <AddresseeRow
                  key={a.id}
                  addressee={a}
                  checked={selectedIds.has(a.id)}
                  onToggle={onToggle}
                  manualEmails={manualEmails}
                  onManualEmailChange={onManualEmailChange}
                />
              ))}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
