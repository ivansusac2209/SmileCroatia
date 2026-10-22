<script setup lang="ts">
import { Check, FileSearch, ClipboardList, Headset } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useInquiryStore } from '@/stores/inquiry'

const store = useInquiryStore()

const nextSteps = [
  { icon: FileSearch, title: '1. Review', text: 'Our dental team reviews your documents.' },
  { icon: ClipboardList, title: '2. We prepare your plan', text: "You'll receive a detailed treatment plan and package options." },
  { icon: Headset, title: "3. We're here for you", text: 'Feel free to contact us if you have any questions.' },
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
        Thank you{{ store.firstName ? `, ${store.firstName}` : '' }}! We've received your information and our partner
        clinic will review your case. You can expect a personalized treatment plan and package options within 2–3
        business days.
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
