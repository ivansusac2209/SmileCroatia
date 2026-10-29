import { defineStore } from 'pinia'
import type { CountryCode } from 'libphonenumber-js'
import { DEFAULT_COUNTRY } from '@/lib/countries'

export type ContactMethod = 'email' | 'phone' | 'whatsapp'

export interface InquiryDetails {
  fullName: string
  email: string
  phoneCountry: CountryCode
  phone: string
  country: CountryCode
  contactMethod: ContactMethod
  message: string
  preferredArrival: string
  preferredDeparture: string
  travelers: string
  travelPreferences: string
}

const STORAGE_KEY = 'smilecroatia-inquiry'

function emptyDetails(): InquiryDetails {
  return {
    fullName: '',
    email: '',
    phoneCountry: DEFAULT_COUNTRY,
    phone: '',
    country: DEFAULT_COUNTRY,
    contactMethod: 'email',
    message: '',
    preferredArrival: '',
    preferredDeparture: '',
    travelers: '1',
    travelPreferences: '',
  }
}

// Text fields survive a page refresh via sessionStorage; selected files cannot be stored and are kept in memory only.
function loadSaved(): { details: InquiryDetails; needs: string; detailsComplete: boolean } {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (raw) {
      const saved = JSON.parse(raw)
      return { details: { ...emptyDetails(), ...saved.details }, needs: saved.needs ?? '', detailsComplete: !!saved.detailsComplete }
    }
  } catch {
    // storage unavailable or corrupt: start fresh
  }
  return { details: emptyDetails(), needs: '', detailsComplete: false }
}

export const useInquiryStore = defineStore('inquiry', {
  state: () => ({
    ...loadSaved(),
    files: [] as File[],
    submittedName: '',
  }),
  getters: {
    firstName: (state) => state.submittedName.split(' ')[0] ?? '',
  },
  actions: {
    persist() {
      try {
        sessionStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ details: this.details, needs: this.needs, detailsComplete: this.detailsComplete }),
        )
      } catch {
        // ignore: persistence is a convenience
      }
    },
    markSubmitted() {
      this.submittedName = this.details.fullName.trim()
      this.details = emptyDetails()
      this.needs = ''
      this.files = []
      this.detailsComplete = false
      try {
        sessionStorage.removeItem(STORAGE_KEY)
      } catch {
        // ignore
      }
    },
  },
})
