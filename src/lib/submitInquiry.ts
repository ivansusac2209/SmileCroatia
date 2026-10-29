import type { InquiryDetails } from '@/stores/inquiry'
import { countries } from '@/lib/countries'

export interface InquiryPayload {
  details: InquiryDetails
  needs: string
  files: File[]
}

function countryName(code: string): string {
  return countries.find((c) => c.code === code)?.name ?? code
}

/**
 * Sends the inquiry and optional files to our same-origin Cloudflare Worker.
 * The Worker validates the payload and sends the email through Resend.
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
  files.forEach((file) => form.append('attachment', file, file.name))

  const response = await fetch('/api/inquiry', {
    method: 'POST',
    body: form,
    headers: { Accept: 'application/json' },
  })

  const result: unknown = await response.json().catch(() => null)
  if (!response.ok || typeof result !== 'object' || result === null || !('success' in result) || result.success !== true) {
    const message = typeof result === 'object' && result !== null && 'error' in result && typeof result.error === 'string'
      ? result.error
      : 'Sorry, we could not send your inquiry. Please try again later.'
    throw new Error(message)
  }
}
