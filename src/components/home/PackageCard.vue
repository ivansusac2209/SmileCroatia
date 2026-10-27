<script setup lang="ts">
import { ArrowRight, Check } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
import type { Package } from '@/data/home'

defineProps<{ pkg: Package }>()
</script>

<template>
  <article class="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-navy-700/30 hover:shadow-xl hover:shadow-navy-900/5">
    <div class="relative overflow-hidden">
      <img :src="pkg.image" :alt="pkg.alt" class="aspect-[1.55/1] w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" loading="lazy" />
      <span v-if="pkg.badge" class="absolute top-4 left-4 rounded-full border border-white/40 bg-white/95 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-navy-900 shadow-sm">
        {{ pkg.badge }}
      </span>
    </div>
    <div class="flex flex-1 flex-col p-6 lg:p-7">
      <h3 class="font-serif text-xl text-navy-900">{{ pkg.title }}</h3>
      <p class="mt-2 text-sm font-semibold text-navy-800">{{ pkg.price }}</p>
      <ul class="mt-5 flex-1 space-y-3 text-sm leading-relaxed text-muted">
        <li v-for="feature in pkg.features" :key="feature" class="flex gap-2.5">
          <Check class="mt-0.5 size-4 shrink-0 text-success" />
          {{ feature }}
        </li>
      </ul>
      <BaseButton :to="{ name: 'contact-details' }" size="sm" class="mt-7 w-full">
        Ask about this treatment <ArrowRight class="size-4" />
      </BaseButton>
    </div>
  </article>
</template>
