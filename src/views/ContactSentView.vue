<script setup lang="ts">
import { Check, FileSearch, ClipboardList, Headset } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useInquiryStore } from '@/stores/inquiry'

const store = useInquiryStore()

const nextSteps = [
  { icon: FileSearch, title: '1. Initial review', text: 'We review the information and documents you shared.' },
  { icon: ClipboardList, title: '2. Discuss your options', text: 'If more information is needed, we will explain what is required before a proposal can be prepared.' },
  { icon: Headset, title: '3. Plan the next step', text: 'Your coordinator can help with agreed travel arrangements once you decide how to proceed.' },
]
</script>

<template>
  <section class="container-page py-14 lg:py-20">
    <div class="mx-auto max-w-3xl text-center">
      <div class="mx-auto flex size-16 items-center justify-center rounded-full bg-success-soft">
        <Check class="size-8 text-success" stroke-width="2.5" />
      </div>
      <h1 class="mt-6 text-3xl text-navy-900 sm:text-4xl">Your Inquiry Has Been Sent!</h1>
      <p class="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted">
        Thank you{{ store.firstName ? `, ${store.firstName}` : '' }}! Your inquiry has been submitted. We'll review
        the information provided and follow up using your preferred contact method about the next steps.
        Any treatment recommendation, timing and cost will depend on a clinical review.
      </p>

      <div class="mt-10 rounded-lg bg-surface p-6 text-left">
        <h2 class="font-sans text-sm font-medium text-navy-900">What happens next?</h2>
        <ul class="mt-5 grid gap-6 md:grid-cols-3">
          <li v-for="step in nextSteps" :key="step.title" class="flex gap-3">
            <component :is="step.icon" class="size-7 shrink-0 text-navy-800" stroke-width="1.5" />
            <div>
              <p class="text-sm font-medium text-navy-900">{{ step.title }}</p>
              <p class="mt-1 text-xs leading-relaxed text-muted">{{ step.text }}</p>
            </div>
          </li>
        </ul>
      </div>

      <BaseButton to="/" class="mt-10">Back to Homepage</BaseButton>
    </div>
  </section>
</template>
