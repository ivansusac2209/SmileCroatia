import type { InquiryDetails } from '@/stores/inquiry'
import { countries } from '@/lib/countries'

export interface InquiryPayload {
  details: InquiryDetails
  needs: string
  files: File[]
}

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT?.trim() ?? ''

export const isDemoMode = !ENDPOINT

function countryName(code: string): string {
  return countries.find((c) => c.code === code)?.name ?? code
}

/**
 * Sends the inquiry as multipart/form-data to the form service configured in VITE_FORM_ENDPOINT.
 * Most hosted form services (Formspree, Basin, Getform…) accept this shape and email it with attachments.
 * With no endpoint configured the submission is simulated so the flow can be demoed.
 */
export async function submitInquiry({ details, needs, files }: InquiryPayload): Promise<void> {
  const dial = countries.find((c) => c.code === details.phoneCountry)?.dialCode ?? ''
  const form = new FormData()
  form.append('name', details.fullName)
  form.append('email', details.email)
  form.append('phone', `${dial} ${details.phone}`.trim())
  form.append('country', countryName(details.country))
  form.append('preferred_contact', details.contactMethod)
  form.append('message', details.message)
  form.append('dental_needs', needs)
  form.append('_subject', `New inquiry from ${details.fullName}`)
  // FormSubmit options: skip its captcha page, send a table-formatted email
  form.append('_captcha', 'false')
  form.append('_template', 'table')
  files.forEach((file) => form.append('attachments', file, file.name))

  if (isDemoMode) {
    console.warn('[SmileCroatia] VITE_FORM_ENDPOINT is not set. Inquiry was not sent (demo mode).', Object.fromEntries(form))
    await new Promise((resolve) => setTimeout(resolve, 600))
    return
  }

  const res = await fetch(ENDPOINT, { method: 'POST', body: form, headers: { Accept: 'application/json' } })
  if (!res.ok) throw new Error(`Form service responded with ${res.status}`)
}
