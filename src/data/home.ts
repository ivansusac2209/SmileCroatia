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
    title: 'Dental Crowns',
    image: '/images/package-crowns.jpg',
    alt: 'Ceramic dental crowns on a model',
    badge: 'Restorative dentistry',
    features: ['Restore damaged or weakened teeth', 'Discuss suitable crown materials', 'Understand the appointments involved'],
  },
  {
    title: 'Dental Implants',
    image: '/images/package-implants.jpg',
    alt: 'Dentist demonstrating a dental implant on a model',
    features: ['Explore options for replacing missing teeth', 'Learn about assessment and treatment stages', 'Discuss your individual treatment plan'],
  },
  {
    title: 'Smile Makeover',
    image: '/images/package-makeover.jpg',
    alt: 'Dental model showing a full set of teeth',
    features: ['Explore cosmetic and restorative options', 'Consider materials and desired results', 'Build a plan around your dental needs'],
  },
]
