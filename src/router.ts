import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useInquiryStore } from '@/stores/inquiry'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'SmileCroatia | Dental Care & Travel' } },
    { path: '/contact', redirect: { name: 'contact-details' } },
    {
      path: '/contact/details',
      name: 'contact-details',
      component: () => import('@/views/ContactDetailsView.vue'),
      meta: { title: 'Your Details | SmileCroatia' },
    },
    {
      path: '/contact/upload',
      name: 'contact-upload',
      component: () => import('@/views/ContactUploadView.vue'),
      meta: { title: 'Upload Your Dental Plan | SmileCroatia', requiresDetails: true },
    },
    {
      path: '/contact/sent',
      name: 'contact-sent',
      component: () => import('@/views/ContactSentView.vue'),
      meta: { title: 'Inquiry Sent | SmileCroatia', requiresSubmitted: true },
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
  document.title = (to.meta.title as string) ?? 'SmileCroatia'
})
