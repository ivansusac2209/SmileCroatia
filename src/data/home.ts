import type { Component } from 'vue'
import { ShieldCheck, Euro, UserRound, Plane, CircleCheck, Building2, MessagesSquare } from 'lucide-vue-next'

export interface IconText {
  icon: Component
  title: string
  text?: string
}

export const trustBadges: IconText[] = [
  { icon: ShieldCheck, title: 'Top-rated dental clinics' },
  { icon: Euro, title: 'Transparent pricing' },
  { icon: UserRound, title: 'Personalized support' },
  { icon: Plane, title: 'A memorable stay in Croatia' },
]

export const steps = [
  {
    image: '/images/step-upload.svg',
    alt: 'Dentist examining a smiling patient',
    title: '1. Upload Your Plan',
    text: 'Send us your dental plan or describe your needs. It only takes a few minutes.',
  },
  {
    image: '/images/step-offer.svg',
    alt: 'Dental X-ray shown on a laptop',
    title: '2. Get a Personalized Offer',
    text: 'Our partner clinic reviews your case and we send you a detailed treatment plan and package options.',
  },
  {
    image: '/images/step-travel.svg',
    alt: 'Couple looking over a Croatian old town by the sea',
    title: '3. Travel & Smile',
    text: 'We organize your stay, transfers and appointments — you just enjoy the experience.',
  },
]

export const stats: IconText[] = [
  { icon: CircleCheck, title: '40–70%', text: 'lower costs than in the US' },
  { icon: Building2, title: 'Modern clinics', text: 'with international standards' },
  { icon: MessagesSquare, title: 'English-speaking', text: 'team and full support' },
  { icon: Plane, title: 'Combine treatment', text: 'with a holiday in Croatia' },
]

export interface Package {
  title: string
  price: string
  image: string
  alt: string
  features: string[]
  badge?: string
}

export const packages: Package[] = [
  {
    title: 'Dental Crowns Package',
    price: 'From €2,800',
    image: '/images/package-crowns.svg',
    alt: 'Row of ceramic dental crowns',
    badge: 'Popular',
    features: ['High-quality ceramic crowns', 'Clinic appointments', 'Hotel accommodation (optional)', 'Local transfers'],
  },
  {
    title: 'Dental Implants Package',
    price: 'From €4,500',
    image: '/images/package-implants.svg',
    alt: 'Dental implant model',
    features: ['Implant placement and crown', '3–5 day stay (depending on plan)', 'Hotel accommodation (optional)', 'Local transfers'],
  },
  {
    title: 'Full Smile Makeover',
    price: 'Custom quote',
    image: '/images/package-makeover.svg',
    alt: 'Model of a full set of teeth',
    features: ['Individual treatment plan', 'Premium materials', 'Personalized travel support', 'Flexible stay options'],
  },
]
