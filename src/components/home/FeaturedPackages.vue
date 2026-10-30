<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import PackageCard from '@/components/home/PackageCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { packages } from '@/data/home'
</script>

<template>
  <section id="dental-treatments" class="scroll-mt-24 bg-[#fbfaf7] py-8 sm:py-10 lg:py-12" aria-labelledby="packages-title">
    <div class="container-page">
      <div class="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div class="max-w-3xl">
          <p class="text-xs font-semibold tracking-[0.15em] text-sky-700">TREATMENT OPTIONS</p>
          <h2 id="packages-title" class="mt-2 text-3xl text-navy-900 lg:text-4xl">Explore Our Dental Treatments</h2>
          <p class="mt-3 text-sm leading-relaxed text-muted sm:text-base">Tell us what you would like to improve, and we’ll help coordinate the next steps with a dental provider. Your personalized proposal can bring treatment planning, accommodation and local transfers together in one clear plan.</p>
        </div>
        <RouterLink :to="{ name: 'contact-details' }" class="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-sky-700 hover:text-navy-800">Get My Personalized Proposal <ArrowRight class="size-4" /></RouterLink>
      </div>
      <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <PackageCard v-for="pkg in packages" :key="pkg.title" :pkg="pkg" />
      </div>
      <p class="mt-4 text-xs leading-5 text-muted">All treatment options are subject to an individual assessment by a qualified dental professional. You book your flights separately; accommodation and local transfers are included as outlined in your personalized proposal.</p>
      <div class="mt-6 flex flex-col items-start justify-between gap-3 border border-line bg-white p-5 sm:flex-row sm:items-center">
        <div>
          <h3 class="text-lg text-navy-900">Not sure which treatment you need?</h3>
          <p class="mt-1 text-sm leading-relaxed text-muted">You don’t need to know the exact treatment. Tell us about your goals and we’ll help you understand the next steps.</p>
        </div>
        <BaseButton :to="{ name: 'contact-details' }" class="shrink-0">Get My Personalized Proposal <ArrowRight class="size-4" /></BaseButton>
      </div>
    </div>
  </section>
</template>
