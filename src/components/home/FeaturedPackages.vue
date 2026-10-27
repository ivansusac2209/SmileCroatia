<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import PackageCard from '@/components/home/PackageCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { packages } from '@/data/home'
</script>

<template>
  <section id="dental-treatments" class="scroll-mt-24 bg-[#fbfaf7] py-8 lg:py-12" aria-labelledby="packages-title">
    <div class="container-page">
      <div class="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p class="text-xs font-semibold tracking-[0.15em] text-muted">DENTAL CARE IN CROATIA</p>
          <h2 id="packages-title" class="mt-2 text-3xl text-navy-900 lg:text-4xl">Our dental treatments</h2>
          <p class="mt-2 max-w-2xl leading-relaxed text-muted">Prosthetic and cosmetic dental options, explained clearly and tailored to your needs.</p>
        </div>
        <a href="#dental-treatments" class="inline-flex items-center gap-2 text-sm font-semibold text-navy-800">View treatments <ArrowRight class="size-4" /></a>
      </div>
      <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <PackageCard v-for="pkg in packages" :key="pkg.title" :pkg="pkg" />
      </div>
      <div class="mt-7 flex flex-col items-start justify-between gap-4 border border-line bg-white p-5 sm:flex-row sm:items-center">
        <div>
          <h3 class="text-lg text-navy-900">Not sure where to start?</h3>
          <p class="mt-1 text-sm leading-relaxed text-muted">Tell us what you would like to improve and get help understanding the next steps.</p>
        </div>
        <BaseButton :to="{ name: 'contact-details' }" class="shrink-0">Discuss your options <ArrowRight class="size-4" /></BaseButton>
      </div>
    </div>
  </section>
</template>
