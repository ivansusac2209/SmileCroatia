<script setup lang="ts">
import { ArrowRight, CirclePlay, Star } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
import { trustBadges } from '@/data/home'
</script>

<template>
  <section class="relative overflow-hidden bg-surface">
    <!-- Photo: stacked on top for mobile, right-hand backdrop from lg up -->
    <div class="relative h-64 sm:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[58%]">
      <img src="/images/hero.svg" alt="Smiling woman on a terrace above the Dubrovnik coast" class="h-full w-full object-cover" fetchpriority="high" />
      <div class="absolute inset-0 hidden bg-gradient-to-r from-surface via-surface/40 to-transparent lg:block" />
      <div class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent lg:hidden" />
    </div>

    <div class="container-page relative pt-8 pb-12 sm:pt-10 lg:py-24">
      <div class="max-w-xl lg:max-w-[34rem]">
        <p class="text-xs font-medium tracking-[0.14em] text-muted">HIGH-QUALITY DENTAL CARE IN CROATIA</p>
        <h1 class="mt-4 text-4xl leading-[1.1] text-navy-900 sm:text-5xl lg:max-w-[30rem] lg:text-[3.5rem]">
          A Healthier Smile in a More Beautiful Place
        </h1>
        <p class="mt-6 text-base leading-relaxed text-muted sm:text-lg">
          World-class dental treatment, personalized travel support, and a seamless experience from start to finish.
          Discover expert care and the beauty of Croatia — all in one trip.
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <BaseButton :to="{ name: 'contact-details' }">
            Get a Free Treatment Plan <ArrowRight class="size-4" />
          </BaseButton>
          <BaseButton :to="{ path: '/', hash: '#how-it-works' }" variant="outline">
            How It Works <CirclePlay class="size-5" />
          </BaseButton>
        </div>
      </div>

      <ul class="mt-10 grid grid-cols-2 gap-x-4 gap-y-4 text-xs text-muted sm:flex sm:flex-wrap sm:gap-x-8 lg:mt-14">
        <li v-for="badge in trustBadges" :key="badge.title" class="flex items-center gap-2">
          <component :is="badge.icon" class="size-5 shrink-0 text-navy-800" stroke-width="1.5" />
          {{ badge.title }}
        </li>
      </ul>

      <figure
        class="mt-8 w-full max-w-xs rounded-xl bg-white/95 p-5 shadow-lg shadow-navy-900/10 lg:absolute lg:right-8 lg:bottom-16 lg:mt-0 lg:w-60"
      >
        <blockquote class="font-serif text-lg leading-snug text-navy-900">“Same treatment, a better experience.”</blockquote>
        <figcaption class="mt-2 text-xs text-muted">— Sarah, from California</figcaption>
        <div class="mt-3 flex gap-0.5 text-star" aria-label="5 out of 5 stars">
          <Star v-for="n in 5" :key="n" class="size-4 fill-current" />
        </div>
      </figure>
    </div>
  </section>
</template>
