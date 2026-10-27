<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import PackageCard from '@/components/home/PackageCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { packages } from '@/data/home'
</script>

<template>
  <section id="dental-treatments" class="scroll-mt-24 py-14 lg:py-20" aria-labelledby="packages-title">
    <div class="container-page">
      <p class="text-xs font-medium tracking-[0.14em] text-muted">DENTISTRY, EXPLAINED CLEARLY</p>
      <h2 id="packages-title" class="mt-2 text-3xl text-navy-900 lg:text-4xl">Explore dental treatments</h2>
      <p class="mt-3 max-w-2xl leading-relaxed text-muted">
        From replacing missing teeth to restoring damaged ones or refining your smile, explore common prosthetic and cosmetic dentistry options. Your dentist will advise which treatment is appropriate for your needs.
      </p>
      <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <PackageCard v-for="pkg in packages" :key="pkg.title" :pkg="pkg" />
      </div>
      <div class="mt-10 flex flex-col items-start justify-between gap-4 border border-line/80 bg-white p-6 sm:flex-row sm:items-center lg:p-8">
        <div>
          <h3 class="text-xl text-navy-900">Not sure where to start?</h3>
          <p class="mt-1 max-w-xl text-sm leading-relaxed text-muted">Tell us what you would like to improve. We’ll help you understand the next steps and what to discuss with a dental professional.</p>
        </div>
        <BaseButton :to="{ name: 'contact-details' }" class="shrink-0">
          Discuss your options <ArrowRight class="size-4" />
        </BaseButton>
      </div>
    </div>
  </section>
</template>
