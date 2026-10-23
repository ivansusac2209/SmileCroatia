<script setup lang="ts">
import { ArrowRight, Check } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
import type { Package } from '@/data/home'

defineProps<{ pkg: Package }>()
</script>

<template>
  <article class="flex flex-col overflow-hidden rounded-lg border border-line bg-white">
    <div class="relative">
      <img :src="pkg.image" :alt="pkg.alt" class="aspect-[2/1] w-full object-cover" loading="lazy" />
      <span v-if="pkg.badge" class="absolute top-3 right-3 rounded bg-navy-800 px-2.5 py-1 text-xs font-medium text-white">
        {{ pkg.badge }}
      </span>
    </div>
    <div class="flex flex-1 flex-col p-5">
      <h3 class="font-sans text-lg font-medium text-navy-900">{{ pkg.title }}</h3>
      <p class="mt-1 text-navy-900">{{ pkg.price }}</p>
      <ul class="mt-4 flex-1 space-y-1.5 text-sm text-muted">
        <li v-for="feature in pkg.features" :key="feature" class="flex gap-2">
          <Check class="mt-0.5 size-4 shrink-0 text-navy-800" />
          {{ feature }}
        </li>
      </ul>
      <BaseButton :to="{ name: 'contact-details' }" size="sm" class="mt-5 w-full">
        Ask About This Treatment <ArrowRight class="size-4" />
      </BaseButton>
    </div>
  </article>
</template>
