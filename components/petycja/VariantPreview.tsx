'use client'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { VARIANTS, VARIANT_ORDER, composeMessage } from '@/lib/petycja/variants'

export function VariantPreview() {
  return (
    <Accordion type="single" collapsible defaultValue={VARIANT_ORDER[0]} className="w-full">
      {VARIANT_ORDER.map((id) => {
        const variant = VARIANTS[id]
        const msg = composeMessage(variant)
        return (
          <AccordionItem key={id} value={id} className="border-border">
            <AccordionTrigger className="text-navy hover:no-underline">
              <span className="text-left">{variant.label}</span>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Temat
              </p>
              <p className="mb-4 text-sm text-navy">{msg.subject}</p>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Treść
              </p>
              <pre className="whitespace-pre-wrap font-sans text-sm text-muted-foreground leading-relaxed">
                {variant.body}
              </pre>
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
