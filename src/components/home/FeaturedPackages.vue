<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import PackageCard from '@/components/home/PackageCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { packages } from '@/data/home'
</script>

<template>
  <section id="dental-treatments" class="scroll-mt-24 py-14 lg:py-20" aria-labelledby="packages-title">
    <div class="container-page">
      <p class="text-xs font-medium tracking-[0.14em] text-muted">EXPLORE YOUR OPTIONS</p>
      <h2 id="packages-title" class="mt-2 text-3xl text-navy-900 lg:text-4xl">Dental Treatment Packages in Croatia</h2>
      <p class="mt-3 max-w-2xl leading-relaxed text-muted">
        Compare options for dental crowns, implants, and full smile makeovers. We’ll help you understand the available packages and plan your visit to Croatia.
      </p>
      <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PackageCard v-for="pkg in packages" :key="pkg.title" :pkg="pkg" />
      </div>
      <div class="mt-10 flex flex-col items-start justify-between gap-4 rounded-xl bg-surface p-6 sm:flex-row sm:items-center lg:p-8">
        <div>
          <h3 class="text-xl text-navy-900">Not sure which treatment is right for you?</h3>
          <p class="mt-1 max-w-xl text-sm leading-relaxed text-muted">Tell us what you need and get a personalized starting point for discussing your options with a dental clinic.</p>
        </div>
        <BaseButton :to="{ name: 'contact-details' }" class="shrink-0">
          Request a Free Plan <ArrowRight class="size-4" />
        </BaseButton>
      </div>
    </div>
  </section>
</template>
