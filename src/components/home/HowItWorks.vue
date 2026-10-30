<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import { steps } from '@/data/home'
</script>

<template>
  <section id="how-it-works" class="scroll-mt-24 overflow-hidden border-y border-line/70 bg-white" aria-labelledby="how-it-works-title">
    <div class="grid lg:min-h-[300px] lg:grid-cols-[0.76fr_1.24fr]">
      <div class="relative min-h-52 overflow-hidden lg:min-h-full">
        <img src="/images/step-travel.jpg" alt="Croatia’s Adriatic coast and historic waterfront" class="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-r from-transparent to-white/70" />
      </div>
      <div class="container-page py-8 lg:py-6 lg:pl-8">
        <p class="text-xs font-semibold tracking-[0.15em] text-sky-700">FROM FIRST MESSAGE TO ADRIATIC COAST</p>
        <h2 id="how-it-works-title" class="mt-2 text-3xl text-navy-900 lg:text-4xl">How It Works</h2>
        <p class="mt-2 text-sm leading-relaxed text-muted sm:text-base">We help bring your dental visit and your Croatian stay together in one well-organized plan. Alongside your appointments, you may have time to discover the beauty of the Adriatic coast, historic towns and local culture.</p>
        <ol class="mt-6 grid gap-5 sm:grid-cols-3 sm:gap-4">
          <li v-for="(step, index) in steps" :key="step.title" class="relative">
            <div class="flex items-center gap-3">
              <span class="flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-sky-500 text-sm font-semibold text-sky-600">{{ index + 1 }}</span>
              <h3 class="text-sm font-semibold text-navy-900">{{ ['Tell Us What You Need', 'Plan Your Dental Trip', 'Discover the Croatian Coast'][index] }}</h3>
              <ChevronRight v-if="index < 2" class="ml-auto hidden size-4 text-navy-800 sm:block" />
            </div>
            <p class="mt-2 pl-12 text-xs leading-[1.55] text-muted">{{ ['Tell us about your dental goals, travel dates and any treatment records you already have. We’ll coordinate the next steps with dental professionals.', 'We coordinate communication with the clinic, appointments, accommodation and local transfers. Your personalized proposal explains the arrangements and costs before you commit.', 'When your treatment schedule allows, enjoy time along Croatia’s beautiful Adriatic coast — from seaside promenades and historic old towns to local food and culture. You book your flights separately; we help organize the agreed stay.'][index] }}</p>
          </li>
        </ol>
        <p class="mt-5 text-xs leading-5 text-muted">Leisure activities and sightseeing are not automatically included in the package. Your free time depends on your treatment plan and appointment schedule.</p>
      </div>
    </div>
  </section>
</template>
