<script setup lang="ts">
import { Check, FileSearch, ClipboardList, Headset } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useInquiryStore } from '@/stores/inquiry'

const store = useInquiryStore()

const nextSteps = [
  { icon: FileSearch, title: '1. We review your request', text: 'We review your goals, available dental records and travel preferences.' },
  { icon: ClipboardList, title: '2. Your proposal in 1–3 business days', text: 'We aim to reply with an individual proposal outlining estimated costs, what is included and the next steps. A dental professional confirms clinical recommendations.' },
  { icon: Headset, title: '3. You decide what happens next', text: 'There is no need to book flights yet. If you accept the proposal, your coordinator will help arrange the agreed appointments and travel details.' },
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
        Thank you{{ store.firstName ? `, ${store.firstName}` : '' }}! We’ve received your inquiry. We aim to contact you within 1–3 business days with a personalized proposal based on the information you shared.
        Final treatment recommendations and costs depend on review by a dental professional.
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

      <p class="mx-auto mt-5 max-w-xl text-xs leading-5 text-muted">
        Keep an eye on your inbox, including your spam or junk folder. You do not need to book flights until you have reviewed the proposal and agreed on the next steps.
      </p>

      <BaseButton to="/" class="mt-8">Back to Homepage</BaseButton>
    </div>
  </section>
</template>
