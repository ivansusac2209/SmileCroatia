<script setup lang="ts">
import { ArrowRight, Users, Plane, Stethoscope } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <section class="relative isolate overflow-hidden bg-[#f5f8fa]">
    <div class="absolute inset-0 -z-10 lg:left-[34%]">
      <img src="/images/Nasmejana%20putnica%20iznad%20Jadrana.png" alt="A traveler enjoying Croatia's Adriatic coast" class="h-full w-full object-cover object-center" fetchpriority="high" />
      <div class="absolute inset-0 bg-gradient-to-r from-[#f5f8fa] via-[#f5f8fa]/90 to-[#f5f8fa]/10 lg:via-[#f5f8fa]/55 lg:to-transparent" />
    </div>
    <div class="container-page relative flex min-h-[540px] items-center py-12 sm:py-16 lg:min-h-[500px] lg:py-20">
      <div class="max-w-2xl">
        <p class="text-[11px] font-semibold tracking-[0.16em] text-navy-900">PERSONALIZED DENTAL CARE IN CROATIA</p>
        <h1 class="mt-4 max-w-2xl text-4xl leading-[1.02] text-navy-900 sm:text-5xl lg:text-[3.65rem] xl:text-[4rem]">
          Your dental care journey,<br class="hidden sm:block" /> thoughtfully supported.
        </h1>
        <p class="mt-5 max-w-xl text-base leading-7 text-navy-800 sm:text-lg">
          Explore dental treatment options in Croatia with an individual proposal and help coordinating your agreed stay, local transfers and appointments.
        </p>
        <div class="mt-7 flex flex-col gap-3 sm:flex-row">
          <BaseButton :to="{ name: 'contact-details' }">Get My Treatment Plan <ArrowRight class="size-4" /></BaseButton>
          <BaseButton :to="{ path: '/', hash: '#dental-treatments' }" variant="outline">Explore Treatments</BaseButton>
        </div>
        <ul class="mt-9 grid max-w-lg grid-cols-3 gap-3 text-xs font-medium leading-5 text-navy-900 sm:gap-5">
          <li class="flex items-center gap-2"><Stethoscope class="size-7 shrink-0" stroke-width="1.5" /><span>Individual<br />care proposal</span></li>
          <li class="flex items-center gap-2"><Users class="size-7 shrink-0" stroke-width="1.5" /><span>Personal<br />coordination</span></li>
          <li class="flex items-center gap-2"><Plane class="size-7 shrink-0" stroke-width="1.5" /><span>Help with<br />travel planning</span></li>
        </ul>
      </div>
    </div>
  </section>
</template>
