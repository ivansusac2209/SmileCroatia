import type { Component } from 'vue'
import { ShieldCheck, ClipboardCheck, UserRound, Plane, CircleCheck, Building2, MessagesSquare, Percent } from 'lucide-vue-next'

export interface IconText {
  icon: Component
  title: string
  text?: string
}

export const trustBadges: IconText[] = [
  { icon: ShieldCheck, title: 'Care from selected clinics' },
  { icon: ClipboardCheck, title: 'Individual treatment plans' },
  { icon: UserRound, title: 'Personalized support' },
  { icon: Plane, title: 'Support planning your visit' },
]

export const steps = [
  {
    image: '/images/step-upload.jpg',
    alt: 'Dentist examining a smiling patient',
    title: '1. Tell Us What You Need',
    text: 'Share your dental concerns, existing treatment plan or the changes you would like to make.',
  },
  {
    image: '/images/step-offer.jpg',
    alt: 'Dental X-ray shown on a clinic monitor',
    title: '2. Review Your Treatment Options',
    text: 'We help you understand the proposed treatment, appointments and next steps with a partner clinic.',
  },
  {
    image: '/images/step-travel.jpg',
    alt: 'Travellers looking over an old town by the sea',
    title: '3. Plan Your Visit',
    text: 'Get help coordinating your appointments and practical details for your stay in Croatia.',
  },
]

export const stats: IconText[] = [
  { icon: UserRound, title: '75+ happy clients', text: 'People who have trusted us with their dental journey' },
  { icon: Percent, title: 'Save 30–70%', text: 'Potential savings on comparable dental treatments vs. the US and UK' },
  { icon: Building2, title: 'Accommodation included', text: 'Your stay is arranged as part of your dental trip' },
  { icon: Plane, title: 'Local transfers included', text: 'Help getting between your accommodation and appointments' },
]

export interface Package {
  title: string
  image: string
  alt: string
  features: string[]
  badge?: string
}

export const packages: Package[] = [
  {
    title: 'Dental Implants',
    image: '/images/1.png',
    alt: 'Dental implant treatment consultation',
    badge: 'Replacing missing teeth',
    features: ['Options for replacing missing teeth', 'Assessment and treatment stages', 'An individual plan from a dental professional'],
  },
  {
    title: 'Crowns & Bridges',
    image: '/images/2.png',
    alt: 'Dental crowns and bridges consultation',
    badge: 'Restorative dentistry',
    features: ['Restore damaged or weakened teeth', 'Discuss suitable crown and bridge materials', 'Understand the appointments involved'],
  },
  {
    title: 'Dental Veneers',
    image: '/images/3.png',
    alt: 'Dental veneers and cosmetic smile consultation',
    badge: 'Cosmetic dentistry',
    features: ['Explore options for changing tooth shape or colour', 'Discuss suitability and alternatives', 'Set realistic expectations with your dentist'],
  },
  {
    title: 'Smile Makeover',
    image: '/images/4.png',
    alt: 'Patient discussing a smile makeover with a dental professional',
    features: ['Explore combined restorative and cosmetic options', 'Discuss your goals and dental health', 'Build a plan around your clinical needs'],
  },
]
