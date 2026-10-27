<script setup lang="ts">
import { ArrowRight, MapPin, Users, Plane } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
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
        <p class="text-[11px] font-semibold tracking-[0.18em] text-navy-700">DENTAL TREATMENTS IN CROATIA</p>
        <h1 class="mt-5 text-4xl leading-[1.08] text-navy-900 sm:text-5xl lg:max-w-[31rem] lg:text-[3.75rem] xl:text-[4rem]">
          Expert dental care in a beautiful destination.
        </h1>
        <p class="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
          Explore dental treatments, modern clinics and the opportunity to combine your care with a stay in Croatia. We help you understand your options and coordinate your next steps.
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <BaseButton :to="{ name: 'contact-details' }">Book a consultation <ArrowRight class="size-4" /></BaseButton>
          <BaseButton :to="{ path: '/', hash: '#dental-treatments' }" variant="outline">Explore treatments <ArrowRight class="size-4" /></BaseButton>
        </div>
        <ul class="mt-10 grid grid-cols-3 gap-3 text-xs text-muted sm:gap-5 lg:mt-12">
          <li class="flex items-center gap-2"><MapPin class="size-5 shrink-0 text-navy-800" stroke-width="1.5" /><span>Care in<br />Croatia</span></li>
          <li class="flex items-center gap-2"><Users class="size-5 shrink-0 text-navy-800" stroke-width="1.5" /><span>Personal<br />support</span></li>
          <li class="flex items-center gap-2"><Plane class="size-5 shrink-0 text-navy-800" stroke-width="1.5" /><span>Help planning<br />your visit</span></li>
        </ul>
      </div>
    </div>
  </section>
</template>
