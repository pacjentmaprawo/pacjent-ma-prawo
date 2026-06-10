// Generowanie kopii pisma jako PDF — w całości po stronie przeglądarki.
// Wykorzystuje natywny mechanizm druku („Zapisz jako PDF"), dzięki czemu polskie znaki
// renderują się poprawnie i nie potrzebujemy żadnej zewnętrznej biblioteki ani backendu.

import { PETITION_TITLE, PETITION_SECTIONS } from './petitionText'

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function todayPl(): string {
  return new Date().toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })
}

function openPrintWindow(title: string, innerHtml: string): boolean {
  const w = window.open('', '_blank')
  if (!w) return false
  w.document.write(`<!doctype html>
<html lang="pl"><head><meta charset="utf-8"><title>${escapeHtml(title)}</title>
<style>
  @page { margin: 22mm 20mm; }
  * { box-sizing: border-box; }
  body { font-family: Georgia, 'Times New Roman', serif; color: #14181f; line-height: 1.55; font-size: 12pt; }
  h1 { font-size: 15pt; margin: 0 0 4px; }
  h2 { font-size: 12.5pt; margin: 18px 0 6px; }
  .meta { color: #555; font-size: 10pt; margin-bottom: 18px; }
  p { margin: 0 0 10px; white-space: pre-wrap; word-wrap: break-word; }
  .sig { margin-top: 26px; color: #555; font-size: 10pt; border-top: 1px solid #ccc; padding-top: 10px; }
  @media print { .noprint { display: none; } }
</style></head>
<body>${innerHtml}
<script>window.onload=function(){window.focus();setTimeout(function(){window.print();},250);};</script>
</body></html>`)
  w.document.close()
  return true
}

export interface LetterPdfOptions {
  subject: string
  body: string
  recipients?: string
}

/** Otwiera okno druku z kopią pojedynczego pisma (wariant + przedstawienie się). */
export function downloadLetterPdf({ subject, body, recipients }: LetterPdfOptions): boolean {
  const paragraphs = body
    .split('\n\n')
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join('')
  const inner = `
    <h1>Kopia pisma — petycja ws. projektu UD207</h1>
    <div class="meta">
      Data sporządzenia kopii: ${escapeHtml(todayPl())}<br>
      Temat: ${escapeHtml(subject)}${recipients ? `<br>Adresaci: ${escapeHtml(recipients)}` : ''}
    </div>
    ${paragraphs}
    <div class="sig">Kopia wygenerowana lokalnie w przeglądarce na pacjentmaprawo.pl. Dokument stanowi kopię treści pisma dla nadawcy; nie jest potwierdzeniem wysłania wiadomości e-mail.</div>
  `
  return openPrintWindow('Kopia pisma — UD207', inner)
}

/** Otwiera okno druku z pełną treścią petycji (pkt I–VI). */
export function downloadPetitionPdf(): boolean {
  const sections = PETITION_SECTIONS.map(
    (s) =>
      `<h2>${escapeHtml(s.heading)}</h2>` +
      s.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join(''),
  ).join('')
  const inner = `
    <h1>${escapeHtml(PETITION_TITLE)}</h1>
    <div class="meta">Data: ${escapeHtml(todayPl())} &middot; pacjentmaprawo.pl</div>
    ${sections}
    <div class="sig">Pełna dokumentacja: pacjentmaprawo.pl</div>
  `
  return openPrintWindow('Petycja UD207 — pełna treść', inner)
}
