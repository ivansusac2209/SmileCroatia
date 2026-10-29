<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X, ArrowUpRight, ChevronDown, Globe2 } from 'lucide-vue-next'
import AppLogo from '@/components/AppLogo.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const route = useRoute()
const open = ref(false)
const links = [
  { label: 'Dental Treatments', to: { path: '/', hash: '#dental-treatments' } },
  { label: 'How It Works', to: { path: '/', hash: '#how-it-works' } },
  { label: 'Why Croatia', to: { path: '/', hash: '#why-smilecroatia' } },
  { label: 'Before You Travel', to: { path: '/', hash: '#partner-clinics' } },
  { label: 'FAQ', to: { path: '/', hash: '#faq' } },
]
watch(() => route.fullPath, () => (open.value = false))
watch(open, (isOpen) => document.body.classList.toggle('overflow-hidden', isOpen))
function isActive(link: (typeof links)[number]) {
  return route.path === '/' && route.hash === link.to.hash
}
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-line/70 bg-white/95 backdrop-blur-xl">
    <div class="container-page flex h-[4.25rem] items-center justify-between gap-4 lg:h-[3.9rem]">
      <AppLogo />
      <nav class="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
        <RouterLink v-for="link in links" :key="link.label" :to="link.to" class="border-b py-2 text-[11px] font-medium transition-colors" :class="isActive(link) ? 'border-navy-800 text-navy-800' : 'border-transparent text-navy-800 hover:text-sky-700'">{{ link.label }}<ChevronDown v-if="link.label === 'Dental Treatments'" class="ml-1 inline size-3" /></RouterLink>
      </nav>
      <div class="hidden items-center gap-5 md:flex">
        <span class="inline-flex items-center gap-1.5 text-xs font-medium text-navy-900" aria-label="Site language: English"><Globe2 class="size-4" /> EN</span>
        <BaseButton :to="{ name: 'contact-details' }" size="sm">Get My Personalized Proposal <ArrowUpRight class="size-4" /></BaseButton>
      </div>
      <div class="flex items-center gap-2 xl:hidden">
        <BaseButton :to="{ name: 'contact-details' }" size="sm" class="px-3 text-xs sm:px-4">Get My Proposal <ArrowUpRight class="size-4" /></BaseButton>
        <button type="button" class="-mr-2 rounded-full p-2 text-navy-800 transition-colors hover:bg-surface" :aria-expanded="open" aria-controls="mobile-menu" :aria-label="open ? 'Close menu' : 'Open menu'" @click="open = !open">
        <X v-if="open" class="size-6" />
        <Menu v-else class="size-6" />
        </button>
      </div>
    </div>
    <div v-if="open" id="mobile-menu" class="fixed inset-x-0 top-[4.25rem] bottom-0 z-40 bg-white xl:hidden">
      <nav class="container-page flex flex-col gap-1 py-6" aria-label="Mobile navigation">
        <RouterLink v-for="link in links" :key="link.label" :to="link.to" class="rounded-xl px-3 py-4 text-lg text-navy-800 transition-colors hover:bg-surface" :class="{ 'bg-surface font-medium': isActive(link) }">{{ link.label }}</RouterLink>
        <BaseButton :to="{ name: 'contact-details' }" class="mt-4 w-full">Get My Personalized Proposal <ArrowUpRight class="size-4" /></BaseButton>
      </nav>
    </div>
  </header>
</template>
