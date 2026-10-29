<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import type { Package } from '@/data/home'

defineProps<{ pkg: Package }>()
</script>

<template>
  <article class="group flex flex-col overflow-hidden rounded-md border border-line/80 bg-white transition-shadow duration-300 hover:shadow-lg hover:shadow-navy-900/5">
    <div class="overflow-hidden bg-surface">
      <img :src="pkg.image" :alt="pkg.alt" class="aspect-[1.75/1] w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" loading="lazy" />
    </div>
    <div class="flex flex-1 flex-col px-4 py-3">
      <h3 class="font-serif text-base font-semibold text-navy-900">{{ pkg.title === 'Dental Veneers' ? 'Veneers' : pkg.title }}</h3>
      <p class="mt-1 min-h-10 text-xs leading-[1.5] text-muted">{{ ({
        'Dental Implants': 'Explore options for replacing missing teeth.',
        'Crowns & Bridges': 'Explore options for restoring damaged or weakened teeth.',
        'Dental Veneers': 'Explore whether veneers may suit your teeth and goals.',
        'Smile Makeover': 'Explore treatment options tailored to your goals and oral health.',
      } as Record<string, string>)[pkg.title] }}</p>
      <RouterLink :to="{ name: 'treatment-detail', params: { slug: ({ 'Dental Implants': 'dental-implants', 'Crowns & Bridges': 'crowns-bridges', 'Dental Veneers': 'dental-veneers', 'Smile Makeover': 'smile-makeover' } as Record<string, string>)[pkg.title] } }" class="mt-2 inline-flex items-center gap-1 self-start text-xs font-semibold text-sky-700 hover:text-navy-900">Explore treatment <ArrowRight class="size-3.5" /></RouterLink>
    </div>
  </article>
</template>
