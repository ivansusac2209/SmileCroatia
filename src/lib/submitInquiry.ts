import type { InquiryDetails } from '@/stores/inquiry'
import { countries } from '@/lib/countries'

export interface InquiryPayload {
  details: InquiryDetails
  needs: string
  files: File[]
}

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT?.trim() || 'https://formsubmit.co/ajax/ivan.susac35@gmail.com'

export const isDemoMode = !ENDPOINT

function countryName(code: string): string {
  return countries.find((c) => c.code === code)?.name ?? code
}

/**
 * Sends an inquiry as multipart/form-data to the configured hosted form endpoint.
 * The response is checked so an HTTP 200 with a service-level error is not shown as success.
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
  // FormSubmit options: disable its captcha and use a table-formatted email.
  form.append('_captcha', 'false')
  form.append('_template', 'table')
  // FormSubmit expects attachments under the _attachment field.
  files.forEach((file) => form.append('_attachment', file, file.name))

  if (isDemoMode) {
    console.warn('[SmileCroatia] VITE_FORM_ENDPOINT is not set. Inquiry was not sent (demo mode).')
    await new Promise((resolve) => setTimeout(resolve, 600))
    return
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    body: form,
    headers: { Accept: 'application/json' },
  })

  if (!res.ok) throw new Error(`Form service responded with ${res.status}`)

  const contentType = res.headers.get('content-type') ?? ''
  if (!contentType.includes('application/json')) {
    throw new Error('The form service returned an unexpected response. The inquiry could not be confirmed.')
  }

  const result: unknown = await res.json()
  if (
    typeof result === 'object' &&
    result !== null &&
    'success' in result &&
    (result.success === false || result.success === 'false')
  ) {
    const message = 'message' in result && typeof result.message === 'string'
      ? result.message
      : 'The form service rejected the inquiry.'
    throw new Error(message)
  }
}
