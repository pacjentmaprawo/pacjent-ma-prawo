import { redirect } from 'next/navigation'

// Petycja została przeniesiona na /petycja-ud207 (formularz wysyłki pism).
// Zachowujemy starą ścieżkę jako przekierowanie, by nie psuć istniejących linków.
export default function PetycjaRedirect() {
  redirect('/petycja-ud207')
}
