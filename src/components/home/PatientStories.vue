<script setup lang="ts">
import { MessageCircle, ArrowRight } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <section id="patient-stories" class="border-y border-line bg-[#f7f8f8] py-12 sm:py-16" aria-labelledby="patient-stories-title">
    <div class="container-page">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-xs font-semibold tracking-[0.16em] text-sky-700">PATIENT STORIES</p>
        <h2 id="patient-stories-title" class="mt-3 text-3xl leading-tight text-navy-900 sm:text-4xl">Real experiences, in their own words</h2>
        <p class="mt-4 text-sm leading-6 text-muted sm:text-base">
          Choosing dental care abroad is a personal decision. We believe it helps to hear directly from people who have experienced the journey, from their first conversation to their time in Croatia.
        </p>
      </div>

      <div class="mx-auto mt-8 flex max-w-3xl flex-col items-center rounded-xl border border-[#dce5eb] bg-white px-6 py-8 text-center sm:px-10 sm:py-10">
        <span class="flex size-12 items-center justify-center rounded-full bg-[#f1f5f7] text-navy-800">
          <MessageCircle class="size-6" stroke-width="1.5" />
        </span>
        <h3 class="mt-4 font-serif text-2xl text-navy-900">Our first patient video stories are coming soon</h3>
        <p class="mt-3 max-w-xl text-sm leading-6 text-muted">
          We’re preparing conversations with patients who have kindly agreed to share their own experiences. Their stories will appear here, without scripts or promises about individual treatment outcomes.
        </p>
        <BaseButton :to="{ name: 'contact-details' }" class="mt-6">
          Ask Us About Your Trip <ArrowRight class="size-4" />
        </BaseButton>
      </div>
    </div>
  </section>
</template>
