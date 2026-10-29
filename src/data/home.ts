import type { Component } from 'vue'
import { ShieldCheck, ClipboardCheck, UserRound, Plane, CircleCheck, Building2, MessagesSquare } from 'lucide-vue-next'

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
  { icon: CircleCheck, title: 'A plan built around you', text: 'Options based on your needs' },
  { icon: Building2, title: 'Partner clinics', text: 'Clinic details shared transparently' },
  { icon: MessagesSquare, title: 'English-language support', text: 'Help understanding each step' },
  { icon: Plane, title: 'Care in Croatia', text: 'Support planning your visit' },
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
    image: 'https://images.pexels.com/photos/6812429/pexels-photo-6812429.jpeg?auto=compress&dpr=1&h=750&w=1260',
    alt: 'Dentist discussing treatment options with a patient in a modern clinic',
    badge: 'Replacing missing teeth',
    features: ['Options for replacing missing teeth', 'Assessment and treatment stages', 'An individual plan from a dental professional'],
  },
  {
    title: 'Crowns & Bridges',
    image: 'https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&dpr=1&h=750&w=1260',
    alt: 'Dentist talking with a patient in a bright modern dental clinic',
    badge: 'Restorative dentistry',
    features: ['Restore damaged or weakened teeth', 'Discuss suitable crown and bridge materials', 'Understand the appointments involved'],
  },
  {
    title: 'Dental Veneers',
    image: 'https://images.pexels.com/photos/3845654/pexels-photo-3845654.jpeg?auto=compress&dpr=1&h=750&w=1260',
    alt: 'Dentist helping a patient review her smile during a check-up',
    badge: 'Cosmetic dentistry',
    features: ['Explore options for changing tooth shape or colour', 'Discuss suitability and alternatives', 'Set realistic expectations with your dentist'],
  },
  {
    title: 'Smile Makeover',
    image: 'https://images.pexels.com/photos/6627574/pexels-photo-6627574.jpeg?cs=srgb&dl=pexels-karola-g-6627574.jpg&fm=jpg',
    alt: 'Patient smiling and checking her teeth in a mirror after a dental visit',
    features: ['Explore combined restorative and cosmetic options', 'Discuss your goals and dental health', 'Build a plan around your clinical needs'],
  },
]
