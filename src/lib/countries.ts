import { getCountries, getCountryCallingCode, type CountryCode } from 'libphonenumber-js'

export interface CountryOption {
  code: CountryCode
  name: string
  dialCode: string
  flag: string
}

const regionNames = new Intl.DisplayNames(['en'], { type: 'region' })

function flagEmoji(code: string): string {
  return String.fromCodePoint(...[...code].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65))
}

export const countries: CountryOption[] = getCountries()
  .map((code) => ({
    code,
    name: regionNames.of(code) ?? code,
    dialCode: `+${getCountryCallingCode(code)}`,
    flag: flagEmoji(code),
  }))
  .sort((a, b) => a.name.localeCompare(b.name))

export const DEFAULT_COUNTRY: CountryCode = 'US'
