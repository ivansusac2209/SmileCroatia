import { isValidPhoneNumber, type CountryCode } from 'libphonenumber-js'

export const MAX_FILE_BYTES = 20 * 1024 * 1024
export const ACCEPTED_EXTENSIONS = ['pdf', 'jpg', 'jpeg', 'png', 'dcm', 'dicom']

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function required(value: string, label: string): string | null {
  return value.trim() ? null : `${label} is required.`
}

export function email(value: string): string | null {
  if (!value.trim()) return 'Email address is required.'
  return EMAIL_RE.test(value.trim()) ? null : 'Please enter a valid email address.'
}

export function phone(value: string, country: CountryCode): string | null {
  if (!value.trim()) return 'Phone number is required.'
  return isValidPhoneNumber(value, country) ? null : 'Please enter a valid phone number.'
}

export function fileError(file: File): string | null {
  const ext = file.name.split('.').pop()?.toLowerCase() ?? ''
  if (!ACCEPTED_EXTENSIONS.includes(ext)) return `${file.name}: only PDF, JPG, PNG or DICOM files are allowed.`
  if (file.size > MAX_FILE_BYTES) return `${file.name} is larger than 20 MB.`
  return null
}
