<script setup lang="ts">
import { ArrowRight, Users, Plane, Stethoscope } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <section class="relative isolate overflow-x-clip bg-[#f5f8fa]">
    <div class="absolute inset-0 -z-10 hidden lg:block lg:left-[34%]">
      <img src="/images/Osmijesi%20uz%20Jadran%20u%20ordinaciji.png" alt="A patient smiling with her dentist in a modern dental clinic overlooking Croatia’s Adriatic coast" class="h-full w-full object-cover object-center" fetchpriority="high" />
      <div class="absolute inset-0 bg-gradient-to-r from-[#f5f8fa] via-[#f5f8fa]/90 to-[#f5f8fa]/10 lg:via-[#f5f8fa]/55 lg:to-transparent" />
    </div>
    <div class="container-page relative flex min-h-[540px] w-full min-w-0 items-center py-8 sm:py-16 lg:min-h-[500px] lg:py-20">
      <div class="w-full min-w-0 max-w-2xl">
        <p class="text-[11px] font-semibold tracking-[0.16em] text-navy-900">DENTAL CARE & TRAVEL IN CROATIA</p>
        <h1 class="mt-4 w-full max-w-2xl text-[2.45rem] leading-[1.04] text-navy-900 sm:text-5xl lg:text-[3.65rem] xl:text-[4rem]">
          Your Smile, Our Priority
        </h1>
        <p class="mt-4 w-full min-w-0 max-w-xl text-[15px] leading-6 text-navy-800 sm:mt-5 sm:text-lg sm:leading-7">
          <span class="sm:hidden">Dental care and your stay in Croatia, coordinated through one point of contact. Your dentist guides treatment decisions; we help organize appointments, accommodation and local transfers.</span>
          <span class="hidden sm:inline">Plan your dental treatment and your stay in Croatia with one point of contact. We coordinate communication with dental providers, appointments, accommodation and local transfers, while your dentist guides all clinical decisions. You book your flights; we help organize the rest.</span>
        </p>
        <div class="mt-5 flex w-full min-w-0 flex-col gap-2.5 sm:mt-7 sm:flex-row sm:gap-3">
          <BaseButton :to="{ name: 'contact-details' }">Get My Personalized Proposal <ArrowRight class="size-4" /></BaseButton>
          <BaseButton :to="{ path: '/', hash: '#dental-treatments' }" variant="outline">Explore Treatments</BaseButton>
        </div>
        <img
          src="/images/Osmijesi%20uz%20Jadran%20u%20ordinaciji.png"
          alt="A woman seated in a dental clinic with her dentist"
          class="mt-5 block h-[220px] w-full max-w-full rounded-md object-cover object-center sm:mt-7 sm:h-auto sm:max-h-[360px] sm:object-contain lg:hidden"
          fetchpriority="high"
        />
        <ul class="-mx-5 mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 text-sm font-medium leading-5 text-navy-900 sm:mx-0 sm:mt-9 sm:grid sm:max-w-lg sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 sm:text-xs">
          <li class="flex w-[78%] shrink-0 snap-start items-center gap-3 rounded-lg border border-[#e1e8ed] bg-white/80 p-3 sm:w-auto sm:shrink sm:gap-2 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0"><Stethoscope class="size-7 shrink-0" stroke-width="1.5" /><span>Dentist-led<br />treatment decisions</span></li>
          <li class="flex w-[78%] shrink-0 snap-start items-center gap-3 rounded-lg border border-[#e1e8ed] bg-white/80 p-3 sm:w-auto sm:shrink sm:gap-2 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0"><Users class="size-7 shrink-0" stroke-width="1.5" /><span>Clinic & appointment<br />coordination</span></li>
          <li class="flex w-[78%] shrink-0 snap-start items-center gap-3 rounded-lg border border-[#e1e8ed] bg-white/80 p-3 sm:w-auto sm:shrink sm:gap-2 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0"><Plane class="size-7 shrink-0" stroke-width="1.5" /><span>Accommodation &<br />local transfers</span></li>
        </ul>
      </div>
    </div>
  </section>
</template>
