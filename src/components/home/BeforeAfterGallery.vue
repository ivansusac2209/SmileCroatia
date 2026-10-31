<script setup lang="ts">
import { ArrowRight, ShieldCheck } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'

const galleryImage = '/images/Galerija%20transformacija%20osmijeha%20prije%20i%20poslije.png'

const transformations = [
  { title: 'Smile restoration', position: '0% 0%' },
  { title: 'Smile enhancement', position: '50% 0%' },
  { title: 'Full smile transformation', position: '100% 0%' },
]
</script>

<template>
  <section id="real-results" class="scroll-mt-24 bg-white py-10 sm:py-14 lg:py-16" aria-labelledby="results-title">
    <div class="container-page">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-xs font-semibold tracking-[0.17em] text-sky-700">SMILE TRANSFORMATIONS</p>
        <h2 id="results-title" class="mt-3 text-3xl leading-tight text-navy-900 sm:text-4xl lg:text-5xl">Real examples. Beautifully renewed smiles</h2>
        <p class="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-base">Explore examples of before-and-after dental transformations. Every smile and treatment plan is individual, and a qualified dental professional will assess what may be suitable for you.</p>
      </div>

      <div class="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:mx-auto sm:grid sm:max-w-5xl sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 lg:gap-6">
        <article
          v-for="(item, index) in transformations"
          :key="item.title"
          class="group w-[86%] shrink-0 snap-start overflow-hidden rounded-xl border border-line bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:w-auto sm:shrink"
        >
          <a
            :href="galleryImage"
            target="_blank"
            rel="noopener noreferrer"
            class="block overflow-hidden bg-[#f8f8f6]"
            :aria-label="`Open full before-and-after smile transformation gallery: ${item.title}`"
          >
            <div
              role="img"
              :aria-label="`Before-and-after dental transformation example ${index + 1}`"
              class="aspect-[1.16/1] w-full bg-no-repeat transition-transform duration-300 group-hover:scale-[1.02]"
              :style="{ backgroundImage: `url(${galleryImage})`, backgroundSize: '300% 200%', backgroundPosition: item.position }"
            />
          </a>
          <div class="flex items-center justify-between gap-3 px-4 py-3.5">
            <h3 class="text-sm font-semibold text-navy-900">{{ item.title }}</h3>
            <a :href="galleryImage" target="_blank" rel="noopener noreferrer" class="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-sky-700 hover:text-navy-900">
              View gallery <ArrowRight class="size-3.5" />
            </a>
          </div>
        </article>
      </div>

      <div class="mx-auto mt-5 flex max-w-5xl flex-col gap-2 rounded-lg border border-line bg-[#fafbfc] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <span class="text-xs leading-5 text-muted">Examples are for illustration. Individual results vary based on oral health, clinical findings and treatment recommendations.</span>
        <span class="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-navy-800"><ShieldCheck class="size-4" /> Dental assessment required</span>
      </div>

      <div class="mt-7 flex flex-col gap-4 rounded-xl bg-[#f5f8fa] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <h3 class="text-lg font-semibold text-navy-900">Your smile. Your goals. A plan made for you</h3>
          <p class="mt-1 max-w-2xl text-sm leading-6 text-muted">Share your dental records and goals. We will help coordinate an individual review and explain the next steps before you plan your trip.</p>
        </div>
        <BaseButton :to="{ name: 'contact-details' }" class="shrink-0">Get My Personalized Proposal <ArrowRight class="size-4" /></BaseButton>
      </div>
    </div>
  </section>
</template>
