<script setup lang="ts">
import { ArrowRight, MapPin } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
import { trustBadges } from '@/data/home'
</script>

<template>
  <section class="relative isolate overflow-hidden bg-surface">
    <div class="relative h-64 sm:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[58%]">
      <img src="/images/hero.jpg" alt="Croatia’s Adriatic coast, a destination for your dental care journey" class="h-full w-full object-cover" fetchpriority="high" />
      <div class="absolute inset-0 hidden bg-gradient-to-r from-surface via-surface/35 to-transparent lg:block" />
      <div class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-surface to-transparent lg:hidden" />
      <div class="absolute bottom-5 right-5 hidden items-center gap-2 border border-white/60 bg-white/90 px-4 py-2 text-xs font-medium text-navy-900 shadow-sm backdrop-blur sm:flex lg:bottom-8 lg:right-8">
        <MapPin class="size-4" /> Dental care in Croatia
      </div>
    </div>

    <div class="container-page relative pt-7 pb-12 sm:pt-10 lg:py-24 xl:py-28">
      <div class="max-w-xl lg:max-w-[35rem]">
        <p class="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] text-navy-700">
          <span class="h-px w-7 bg-navy-700" /> DENTAL TOURISM · CROATIA
        </p>
        <h1 class="mt-5 text-4xl leading-[1.08] text-navy-900 sm:text-5xl lg:max-w-[31rem] lg:text-[3.75rem] xl:text-[4rem]">
          Dental care, with Croatia as your destination.
        </h1>
        <p class="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
          Explore dental implants, crowns, bridges, veneers and complete smile makeovers. We help you understand your options and coordinate the next steps with a dental clinic in Croatia.
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <BaseButton :to="{ name: 'contact-details' }">
            Discuss your treatment <ArrowRight class="size-4" />
          </BaseButton>
          <BaseButton :to="{ path: '/', hash: '#dental-treatments' }" variant="outline">
            Explore treatments <ArrowRight class="size-4" />
          </BaseButton>
        </div>
      </div>

      <ul class="mt-10 grid grid-cols-2 gap-x-4 gap-y-4 text-xs text-muted sm:flex sm:flex-wrap sm:gap-x-7 lg:mt-14">
        <li v-for="badge in trustBadges" :key="badge.title" class="flex items-center gap-2">
          <component :is="badge.icon" class="size-5 shrink-0 text-navy-800" stroke-width="1.5" />
          {{ badge.title }}
        </li>
      </ul>
    </div>
  </section>
</template>
