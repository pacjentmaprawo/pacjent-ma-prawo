'use client'

import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { X } from 'lucide-react'
import { SELF_INTRO_FORMULAS } from '@/lib/petycja/variants'

const MAX_LEN = 600

interface SelfIntroductionProps {
  value: string
  onChange: (value: string) => void
}

export function SelfIntroduction({ value, onChange }: SelfIntroductionProps) {
  const insertFormula = (text: string) => {
    // Zastępuje treść wybraną formułką (użytkownik może ją potem dowolnie zmienić).
    onChange(text.slice(0, MAX_LEN))
  }

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Krótkie przybliżenie własnej sytuacji (1–3 zdania) zwiększa wagę pisma. Sekcja jest
          w pełni dobrowolna. Kliknij gotową formułkę, aby ją wstawić — możesz ją następnie
          dowolnie zmienić.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {SELF_INTRO_FORMULAS.map((f) => (
          <Button
            key={f.id}
            type="button"
            variant="outline"
            size="sm"
            className="h-auto py-1.5 text-xs border-teal/40 text-teal hover:bg-teal/5 hover:text-teal"
            onClick={() => insertFormula(f.text)}
          >
            {f.label}
          </Button>
        ))}
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="self-intro" className="text-navy">
            Twoje przedstawienie się (opcjonalne)
          </Label>
          {value.length > 0 && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-6 px-2 text-xs text-muted-foreground"
              onClick={() => onChange('')}
            >
              <X className="h-3 w-3 mr-1" />
              Wyczyść
            </Button>
          )}
        </div>
        <Textarea
          id="self-intro"
          value={value}
          onChange={(e) => onChange(e.target.value.slice(0, MAX_LEN))}
          placeholder="Np. Jestem pacjentem onkologicznym pod stałą opieką w systemie publicznym…"
          rows={4}
          className="border-border focus:ring-amber resize-y"
        />
        <p className="text-right text-xs text-muted-foreground tabular-nums">
          {value.length}/{MAX_LEN} znaków
        </p>
      </div>

      <p className="rounded-lg bg-secondary px-3 py-2 text-xs text-muted-foreground leading-relaxed">
        <strong className="text-navy">Prywatność:</strong> tę treść wpisujesz bezpośrednio
        w wiadomości e-mail wysyłanej z Twojego programu pocztowego. Strona pacjentmaprawo.pl
        nie zbiera ani nie przechowuje tych informacji.
      </p>
    </div>
  )
}
