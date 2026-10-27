<script setup lang="ts">
import { ArrowRight, BedDouble, CarFront, ClipboardCheck, Headset, Plane } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'

const included = [
  { icon: ClipboardCheck, title: 'Dental examination', text: 'An initial dental assessment and a personalized proposal based on your needs.' },
  { icon: BedDouble, title: 'Accommodation', text: 'Stay arrangements included in the package agreed with you in advance.' },
  { icon: CarFront, title: 'Local transfers', text: 'Coordinated transfers for the agreed parts of your visit.' },
  { icon: Headset, title: 'A dedicated coordinator', text: 'One point of contact to help organize your stay and appointments.' },
]
</script>

<template>
  <section id="package-includes" class="scroll-mt-24 border-y border-line bg-[#f7f8f8] py-12 sm:py-14 lg:py-16" aria-labelledby="package-includes-title">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-xs font-semibold tracking-[0.16em] text-sky-700">MORE THAN A DENTAL APPOINTMENT</p>
        <h2 id="package-includes-title" class="mt-3 text-3xl text-navy-900 sm:text-4xl">Your dental trip, thoughtfully organized.</h2>
        <p class="mt-3 text-sm leading-6 text-muted sm:text-base">You book your flights. We coordinate the agreed package and help take the stress out of planning your stay in Croatia.</p>
      </div>
      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article v-for="item in included" :key="item.title" class="border border-line bg-white p-5 sm:p-6">
          <component :is="item.icon" class="size-7 text-sky-700" stroke-width="1.5" />
          <h3 class="mt-4 font-serif text-xl text-navy-900">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-6 text-muted">{{ item.text }}</p>
        </article>
      </div>
      <div class="mt-6 flex flex-col items-start justify-between gap-4 border border-[#dce5eb] bg-white p-5 sm:flex-row sm:items-center sm:p-6">
        <div class="max-w-2xl">
          <h3 class="text-lg font-semibold text-navy-900">A plan made for you — not a one-size-fits-all package.</h3>
          <p class="mt-1 text-sm leading-6 text-muted">After reviewing your information, we explain the proposed care, what is included, and the agreed deposit and balance terms before you commit.</p>
        </div>
        <BaseButton :to="{ name: 'contact-details' }" class="shrink-0">Get My Treatment Plan <ArrowRight class="size-4" /></BaseButton>
      </div>
      <p class="mt-4 flex items-start justify-center gap-2 text-center text-xs leading-5 text-muted"><Plane class="mt-0.5 size-4 shrink-0" />Flights are booked separately by the patient. Treatment recommendations, timing and final costs depend on individual clinical assessment and the written proposal.</p>
    </div>
  </section>
</template>
