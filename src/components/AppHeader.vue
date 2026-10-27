<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X, ArrowUpRight } from 'lucide-vue-next'
import AppLogo from '@/components/AppLogo.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const route = useRoute()
const open = ref(false)

const links = [
  { label: 'Treatments', to: { path: '/', hash: '#dental-treatments' } },
  { label: 'Our process', to: { path: '/', hash: '#how-it-works' } },
  { label: 'Why Croatia', to: { path: '/', hash: '#why-smilecroatia' } },
]

watch(() => route.fullPath, () => (open.value = false))
watch(open, (isOpen) => document.body.classList.toggle('overflow-hidden', isOpen))

function isActive(link: (typeof links)[number]) {
  return route.path === '/' && route.hash === link.to.hash
}
</script>

<template>
  <div class="hidden border-b border-white/10 bg-navy-900 text-white sm:block">
    <div class="container-page flex h-9 items-center justify-between text-[11px] tracking-wide text-white/80">
      <span>Thoughtful dental care. A beautiful place to recover.</span>
      <span class="inline-flex items-center gap-2">Your journey to a confident smile <ArrowUpRight class="size-3.5" /></span>
    </div>
  </div>
  <header class="sticky top-0 z-40 border-b border-line/80 bg-white/95 backdrop-blur-xl">
    <div class="container-page flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
      <AppLogo />

      <nav class="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
        <RouterLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          class="border-b py-2 text-[13px] font-medium transition-colors"
          :class="isActive(link) ? 'border-navy-800 text-navy-800' : 'border-transparent text-muted hover:text-navy-800'"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="hidden md:block">
        <BaseButton :to="{ name: 'contact-details' }" size="sm">Get a free treatment plan <ArrowUpRight class="size-4" /></BaseButton>
      </div>

      <button
        type="button"
        class="-mr-2 rounded-full p-2 text-navy-800 transition-colors hover:bg-surface lg:hidden"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        :aria-label="open ? 'Close menu' : 'Open menu'"
        @click="open = !open"
      >
        <X v-if="open" class="size-6" />
        <Menu v-else class="size-6" />
      </button>
    </div>

    <div v-if="open" id="mobile-menu" class="fixed inset-x-0 top-[4.5rem] bottom-0 z-40 bg-white lg:hidden">
      <nav class="container-page flex flex-col gap-1 py-6" aria-label="Mobile navigation">
        <RouterLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          class="rounded-xl px-3 py-4 text-lg text-navy-800 transition-colors hover:bg-surface"
          :class="{ 'bg-surface font-medium': isActive(link) }"
        >
          {{ link.label }}
        </RouterLink>
        <BaseButton :to="{ name: 'contact-details' }" class="mt-4 w-full">Get a free treatment plan <ArrowUpRight class="size-4" /></BaseButton>
      </nav>
    </div>
  </header>
</template>
