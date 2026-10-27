<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { steps } from '@/data/home'
</script>

<template>
  <section id="how-it-works" class="scroll-mt-24 overflow-hidden border-y border-line/70 bg-white" aria-labelledby="how-it-works-title">
    <div class="grid lg:min-h-[340px] lg:grid-cols-[0.8fr_1.2fr]">
      <div class="relative min-h-56 overflow-hidden lg:min-h-full">
        <img src="/images/step-travel.jpg" alt="Croatia’s Adriatic coast, where visitors can plan a dental care trip" class="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/80 lg:block" />
      </div>
      <div class="container-page py-10 lg:py-12 lg:pl-8">
        <p class="text-xs font-semibold tracking-[0.15em] text-muted">A CLEARER PATH FORWARD</p>
        <h2 id="how-it-works-title" class="mt-2 text-3xl text-navy-900 lg:text-4xl">How it works</h2>
        <p class="mt-2 max-w-xl leading-relaxed text-muted">A simple process to explore dental care in Croatia and plan your next steps.</p>
        <ol class="mt-8 grid gap-6 sm:grid-cols-3 sm:gap-4">
          <li v-for="(step, index) in steps" :key="step.title" class="relative">
            <div class="flex items-center gap-3">
              <span class="flex size-9 shrink-0 items-center justify-center rounded-full border border-navy-700 text-sm font-semibold text-navy-800">{{ index + 1 }}</span>
              <h3 class="text-base font-semibold text-navy-900">{{ ['Get in touch', 'Explore your plan', 'Plan your visit'][index] }}</h3>
            </div>
            <p class="mt-3 text-sm leading-6 text-muted">{{ step.text }}</p>
          </li>
        </ol>
        <a href="#dental-treatments" class="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-navy-700">Explore treatments <ArrowRight class="size-4" /></a>
      </div>
    </div>
  </section>
</template>
