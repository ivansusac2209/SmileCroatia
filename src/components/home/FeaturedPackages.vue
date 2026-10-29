<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import PackageCard from '@/components/home/PackageCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { packages } from '@/data/home'
</script>

<template>
  <section id="dental-treatments" class="scroll-mt-24 bg-[#fbfaf7] py-5 sm:py-7 lg:py-8" aria-labelledby="packages-title">
    <div class="container-page">
      <div class="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <div>
          <h2 id="packages-title" class="text-3xl text-navy-900 lg:text-4xl">Our Dental Treatments</h2>
          <p class="mt-1 text-sm leading-relaxed text-muted sm:text-base">Treatment and travel costs are tailored to your needs. Send us your treatment plan and travel requests to receive a personalized proposal within 1–3 business days.</p>
        </div>
        <RouterLink :to="{ name: 'contact-details' }" class="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-navy-800">Find the right treatment <ArrowRight class="size-4" /></RouterLink>
      </div>
      <div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <PackageCard v-for="pkg in packages" :key="pkg.title" :pkg="pkg" />
      </div>
      <div class="mt-5 flex flex-col items-start justify-between gap-3 border border-line bg-white p-4 sm:flex-row sm:items-center">
        <div>
          <h3 class="text-lg text-navy-900">Not sure where to start?</h3>
          <p class="mt-1 text-sm leading-relaxed text-muted">Tell us what you would like to improve and get help understanding your next steps.</p>
        </div>
        <BaseButton :to="{ name: 'contact-details' }" class="shrink-0">Discuss your options <ArrowRight class="size-4" /></BaseButton>
      </div>
    </div>
  </section>
</template>
