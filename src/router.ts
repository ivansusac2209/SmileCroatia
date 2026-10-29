import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TreatmentView from '@/views/TreatmentView.vue'
import { useInquiryStore } from '@/stores/inquiry'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Dental Tourism in Croatia | SmileCroatia',
        description: 'Explore dental tourism in Croatia with a personalized treatment proposal, transparent package details and support with clinic appointments, accommodation and local transfers.',
      },
    },
    {
      path: '/treatments/:slug',
      name: 'treatment-detail',
      component: TreatmentView,
      meta: {
        title: 'Dental Treatments in Croatia | SmileCroatia',
        description: 'Explore dental treatment options in Croatia with SmileCroatia. Request a personalized proposal and learn about the next steps before making travel plans.',
      },
    },
    { path: '/contact', redirect: { name: 'contact-details' } },
    {
      path: '/contact/details',
      name: 'contact-details',
      component: () => import('@/views/ContactDetailsView.vue'),
      meta: { title: 'Your Details | SmileCroatia', robots: 'noindex, nofollow' },
    },
    {
      path: '/contact/upload',
      name: 'contact-upload',
      component: () => import('@/views/ContactUploadView.vue'),
      meta: { title: 'Send Your Dental Inquiry | SmileCroatia', robots: 'noindex, nofollow', requiresDetails: true },
    },
    {
      path: '/contact/sent',
      name: 'contact-sent',
      component: () => import('@/views/ContactSentView.vue'),
      meta: { title: 'Inquiry Received | SmileCroatia', robots: 'noindex, nofollow', requiresSubmitted: true },
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, _from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, top: 80, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.beforeEach((to) => {
  const inquiry = useInquiryStore()
  if (to.meta.requiresDetails && !inquiry.detailsComplete) return { name: 'contact-details' }
  if (to.meta.requiresSubmitted && !inquiry.submittedName) return { name: 'contact-details' }
})

router.afterEach((to) => {
  const treatmentSeo: Record<string, { title: string; description: string }> = {
    'dental-implants': {
      title: 'Dental Implants in Croatia | SmileCroatia',
      description: 'Explore dental implant options in Croatia with SmileCroatia. Learn about treatment stages, healing time and the questions to discuss with a dental professional.',
    },
    'crowns-bridges': {
      title: 'Dental Crowns & Bridges in Croatia | SmileCroatia',
      description: 'Learn about dental crowns and bridges in Croatia. SmileCroatia helps you coordinate clinic communication and understand the proposed treatment and costs.',
    },
    'dental-veneers': {
      title: 'Dental Veneers in Croatia | SmileCroatia',
      description: 'Explore dental veneer options in Croatia and learn what to discuss with a dentist, including suitability, alternatives and treatment planning.',
    },
    'smile-makeover': {
      title: 'Smile Makeover in Croatia | SmileCroatia',
      description: 'Explore personalized smile makeover options in Croatia. Treatment recommendations depend on an individual assessment by a dental professional.',
    },
  }
  const slug = String(to.params.slug ?? '')
  const specificSeo = to.name === 'treatment-detail' ? treatmentSeo[slug] : undefined
  const title = specificSeo?.title ?? (to.meta.title as string) ?? 'SmileCroatia'
  document.title = title

  const setMeta = (selector: string, attribute: string, value: string) => {
    let element = document.head.querySelector<HTMLMetaElement>(selector)
    if (!element) {
      element = document.createElement('meta')
      if (selector.startsWith('meta[name=')) {
        element.name = selector.match(/meta\[name="([^"]+)"\]/)?.[1] ?? ''
      } else {
        element.setAttribute('property', selector.match(/meta\[property="([^"]+)"\]/)?.[1] ?? '')
      }
      document.head.appendChild(element)
    }
    element.setAttribute(attribute, value)
  }

  const description = specificSeo?.description ?? (to.meta.description as string) ?? 'Personalized dental care proposals in Croatia with SmileCroatia.'
  setMeta('meta[name="description"]', 'content', description)
  setMeta('meta[name="robots"]', 'content', (to.meta.robots as string) ?? 'index, follow')
  setMeta('meta[property="og:title"]', 'content', document.title)
  setMeta('meta[name="twitter:title"]', 'content', document.title)
  setMeta('meta[name="twitter:description"]', 'content', description)
  setMeta('meta[property="og:description"]', 'content', description)
  setMeta('meta[property="og:image"]', 'content', 'https://smilecroatia.com/images/hero.jpg')
  setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image')
  setMeta('meta[name="twitter:image"]', 'content', 'https://smilecroatia.com/images/hero.jpg')
  setMeta('meta[property="og:url"]', 'content', 'https://smilecroatia.com' + to.path)

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = 'https://smilecroatia.com' + to.path
})
