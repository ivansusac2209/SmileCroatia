<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
import type { Package } from '@/data/home'

defineProps<{ pkg: Package }>()
</script>

<template>
  <article class="group flex flex-col overflow-hidden border border-line/80 bg-white transition-colors duration-300 hover:border-navy-700/40">
    <div class="relative overflow-hidden bg-surface">
      <img :src="pkg.image" :alt="pkg.alt" class="aspect-[1.45/1] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" loading="lazy" />
      <span v-if="pkg.badge" class="absolute bottom-3 left-3 bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-navy-900">
        {{ pkg.badge }}
      </span>
    </div>
    <div class="flex flex-1 flex-col p-5">
      <h3 class="font-serif text-xl text-navy-900">{{ pkg.title }}</h3>
      <p class="mt-2 min-h-10 text-sm leading-5 text-muted">{{ pkg.features[0] }}</p>
      <BaseButton :to="{ name: 'contact-details' }" variant="outline" size="sm" class="mt-4 w-full">
        Learn more <ArrowRight class="size-4" />
      </BaseButton>
    </div>
  </article>
</template>
