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
    image: 'https://images.pexels.com/photos/8727478/pexels-photo-8727478.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Natural close-up of a smiling woman showing her teeth',
    badge: 'Replacing missing teeth',
    features: ['Options for replacing missing teeth', 'Assessment and treatment stages', 'An individual plan from a dental professional'],
  },
  {
    title: 'Crowns & Bridges',
    image: 'https://images.pexels.com/photos/18505360/pexels-photo-18505360.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Warm close-up portrait of a woman with a natural smile',
    badge: 'Restorative dentistry',
    features: ['Restore damaged or weakened teeth', 'Discuss suitable crown and bridge materials', 'Understand the appointments involved'],
  },
  {
    title: 'Dental Veneers',
    image: 'https://images.pexels.com/photos/16002544/pexels-photo-16002544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Close-up portrait of a smiling woman',
    badge: 'Cosmetic dentistry',
    features: ['Explore options for changing tooth shape or colour', 'Discuss suitability and alternatives', 'Set realistic expectations with your dentist'],
  },
  {
    title: 'Smile Makeover',
    image: 'https://images.pexels.com/photos/33801241/pexels-photo-33801241.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Woman smiling naturally outdoors in bright light',
    features: ['Explore combined restorative and cosmetic options', 'Discuss your goals and dental health', 'Build a plan around your clinical needs'],
  },
]
