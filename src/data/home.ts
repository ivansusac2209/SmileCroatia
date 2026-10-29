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
    image: 'https://images.pexels.com/photos/6502340/pexels-photo-6502340.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Close-up of a dental implant restoration on a dental model',
    badge: 'Replacing missing teeth',
    features: ['Options for replacing missing teeth', 'Assessment and treatment stages', 'An individual plan from a dental professional'],
  },
  {
    title: 'Crowns & Bridges',
    image: 'https://www.kuraraynoritake.eu/media/Header_Clinical_Case.jpg',
    alt: 'Clinical close-up of teeth prepared for ceramic crowns',
    badge: 'Restorative dentistry',
    features: ['Restore damaged or weakened teeth', 'Discuss suitable crown and bridge materials', 'Understand the appointments involved'],
  },
  {
    title: 'Dental Veneers',
    image: 'https://cdn.prod.website-files.com/691c7c9f71031c1a48dc3bd6/691c7c9f71031c1a48dc3f8f_Get%20Veneers%20in%20Coral%20Gables.jpg',
    alt: 'Dentist carefully applying a veneer to a patient’s tooth',
    badge: 'Cosmetic dentistry',
    features: ['Explore options for changing tooth shape or colour', 'Discuss suitability and alternatives', 'Set realistic expectations with your dentist'],
  },
  {
    title: 'Smile Makeover',
    image: 'https://www.humbledentist.com/thedentalsitecontent/1002014/gallery/medium_after2_202271716336_373.jpg',
    alt: 'Natural-looking dental implant crown restoration after treatment',
    features: ['Explore combined restorative and cosmetic options', 'Discuss your goals and dental health', 'Build a plan around your clinical needs'],
  },
]
