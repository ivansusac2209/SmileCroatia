<script setup lang="ts">
import { ArrowRight, ShieldCheck } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'

const galleryImage = '/images/Galerija%20transformacija%20osmijeha%20prije%20i%20poslije.png'
</script>

<template>
  <section id="real-results" class="scroll-mt-24 bg-white py-10 sm:py-14 lg:py-16" aria-labelledby="results-title">
    <div class="container-page">
      <div class="grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
        <div>
          <p class="text-xs font-semibold tracking-[0.17em] text-sky-700">SMILE TRANSFORMATIONS</p>
          <h2 id="results-title" class="mt-3 max-w-xl text-3xl leading-tight text-navy-900 sm:text-4xl lg:text-5xl">See what a new smile can look like.</h2>
        </div>
        <div class="lg:pb-1">
          <p class="max-w-2xl text-sm leading-6 text-muted sm:text-base">Explore examples of before-and-after dental transformations, then tell us what you would like to change. A dentist will assess your individual needs before any treatment plan is confirmed.</p>
          <a :href="galleryImage" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-navy-900">Open full-size gallery <ArrowRight class="size-4" /></a>
        </div>
      </div>

      <figure class="mt-7 overflow-hidden rounded-xl border border-line bg-[#f8f8f6] shadow-sm">
        <img
          :src="galleryImage"
          alt="Collage of dental before-and-after smile transformation examples"
          class="block h-auto w-full"
          loading="lazy"
          decoding="async"
        />
        <figcaption class="flex flex-col gap-2 border-t border-line bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <span class="text-xs leading-5 text-muted">Every treatment plan is individual. Results vary depending on oral health, clinical findings and the recommended treatment.</span>
          <span class="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-navy-800"><ShieldCheck class="size-4" /> Assessment by a dental professional</span>
        </figcaption>
      </figure>

      <div class="mt-6 flex flex-col gap-4 rounded-xl bg-[#f5f8fa] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <h3 class="text-lg font-semibold text-navy-900">Your smile. Your goals. A plan made for you.</h3>
          <p class="mt-1 max-w-2xl text-sm leading-6 text-muted">Share your dental records and goals. We will help coordinate an individual review and explain the next steps before you plan your trip.</p>
        </div>
        <BaseButton :to="{ name: 'contact-details' }" class="shrink-0">Get My Personalized Proposal <ArrowRight class="size-4" /></BaseButton>
      </div>
    </div>
  </section>
</template>
