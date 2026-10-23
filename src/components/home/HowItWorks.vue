<script setup lang="ts">
import { steps } from '@/data/home'
</script>

<template>
  <section id="how-it-works" class="scroll-mt-24 py-14 lg:py-20" aria-labelledby="how-it-works-title">
    <div class="container-page">
      <div class="mb-8 max-w-2xl">
        <p class="text-xs font-medium tracking-[0.14em] text-muted">A SIMPLE, SUPPORTED PROCESS</p>
        <h2 id="how-it-works-title" class="mt-2 text-3xl text-navy-900 lg:text-4xl">Your dental trip to Croatia, step by step</h2>
        <p class="mt-3 leading-relaxed text-muted">Start by sharing what you need. We’ll help you explore a treatment offer and plan the practical details of your visit.</p>
      </div>
      <ol class="grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">
        <li v-for="step in steps" :key="step.title">
          <img :src="step.image" :alt="step.alt" class="aspect-[3/2] w-full rounded-lg object-cover" loading="lazy" />
          <h3 class="mt-5 text-2xl text-navy-900 md:text-xl lg:text-2xl">{{ step.title }}</h3>
          <p class="mt-3 leading-relaxed text-muted">{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
