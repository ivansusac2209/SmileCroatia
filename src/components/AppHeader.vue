<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'
import AppLogo from '@/components/AppLogo.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const route = useRoute()
const open = ref(false)

const links = [
  { label: 'Dental treatments', to: { path: '/', hash: '#dental-treatments' } },
  { label: 'How it works', to: { path: '/', hash: '#how-it-works' } },
  { label: 'Why SmileCroatia', to: { path: '/', hash: '#why-smilecroatia' } },
]

watch(() => route.fullPath, () => (open.value = false))
watch(open, (isOpen) => document.body.classList.toggle('overflow-hidden', isOpen))

function isActive(link: (typeof links)[number]) {
  return route.path === '/' && route.hash === link.to.hash
}
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
    <div class="container-page flex h-16 items-center justify-between gap-6 lg:h-20">
      <AppLogo />

      <nav class="hidden items-center gap-6 lg:flex" aria-label="Main">
        <RouterLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          class="border-b-2 py-1 text-sm transition-colors"
          :class="isActive(link) ? 'border-navy-800 text-navy-800' : 'border-transparent text-muted hover:text-navy-800'"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="hidden md:block">
        <BaseButton :to="{ name: 'contact-details' }" size="sm">Get a Free Treatment Plan</BaseButton>
      </div>

      <button
        type="button"
        class="-mr-2 rounded-md p-2 text-navy-800 lg:hidden"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        :aria-label="open ? 'Close menu' : 'Open menu'"
        @click="open = !open"
      >
        <X v-if="open" class="size-6" />
        <Menu v-else class="size-6" />
      </button>
    </div>

    <div v-if="open" id="mobile-menu" class="fixed inset-x-0 top-16 bottom-0 z-40 bg-white lg:hidden">
      <nav class="container-page flex flex-col gap-1 py-6" aria-label="Mobile">
        <RouterLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          class="rounded-md px-2 py-3 text-lg text-navy-800 hover:bg-surface"
          :class="{ 'bg-surface font-medium': isActive(link) }"
        >
          {{ link.label }}
        </RouterLink>
        <BaseButton :to="{ name: 'contact-details' }" class="mt-4 w-full">Get a Free Treatment Plan</BaseButton>
      </nav>
    </div>
  </header>
</template>
