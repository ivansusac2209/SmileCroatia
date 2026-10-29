<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import { steps } from '@/data/home'
</script>

<template>
  <section id="how-it-works" class="scroll-mt-24 overflow-hidden border-y border-line/70 bg-white" aria-labelledby="how-it-works-title">
    <div class="grid lg:min-h-[285px] lg:grid-cols-[0.76fr_1.24fr]">
      <div class="relative min-h-52 overflow-hidden lg:min-h-full">
        <img src="/images/step-travel.jpg" alt="Croatia’s Adriatic coast and historic waterfront" class="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-r from-transparent to-white/70" />
      </div>
      <div class="container-page py-8 lg:py-5 lg:pl-8">
        <h2 id="how-it-works-title" class="text-3xl text-navy-900 lg:text-4xl">How It Works</h2>
        <p class="mt-1 text-sm leading-relaxed text-muted sm:text-base">You book your flights. We coordinate your clinic appointments, accommodation and local transfers so your stay in Croatia is easier to plan.</p>
        <ol class="mt-6 grid gap-5 sm:grid-cols-3 sm:gap-4">
          <li v-for="(step, index) in steps" :key="step.title" class="relative">
            <div class="flex items-center gap-3">
              <span class="flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-sky-500 text-sm font-semibold text-sky-600">{{ index + 1 }}</span>
              <h3 class="text-sm font-semibold text-navy-900">{{ ['Tell Us What You Need', 'We Organize Your Plan', 'Arrive — We’ll Be Ready'][index] }}</h3>
              <ChevronRight v-if="index < 2" class="ml-auto hidden size-4 text-navy-800 sm:block" />
            </div>
            <p class="mt-2 pl-12 text-xs leading-[1.55] text-muted">{{ ['Tell us what you would like to improve and share any dental records you already have. We’ll coordinate the next steps with suitable dental professionals.', 'We coordinate your clinic communication, appointments, accommodation and local transfers. Your personalized proposal sets out the plan and costs before you commit.', 'Once you book your flights, your accommodation and local transfers are arranged alongside your appointments. Your coordinator remains your point of contact during your stay.'][index] }}</p>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
