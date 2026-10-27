<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import FeaturedPackages from '@/components/home/FeaturedPackages.vue'
import HowItWorks from '@/components/home/HowItWorks.vue'
import StatsStrip from '@/components/home/StatsStrip.vue'
import PatientReviews from '@/components/home/PatientReviews.vue'
import PartnerClinics from '@/components/home/PartnerClinics.vue'

const faqs = [
  { question: 'How do I get started?', answer: 'Contact our team and tell us about your dental needs. We can help you understand the next steps and what information a clinic may need.' },
  { question: 'Can I combine dental treatment with a visit to Croatia?', answer: 'Yes, many visitors plan their stay alongside dental appointments. The schedule depends on your individual treatment plan and should be confirmed with the treating clinic.' },
  { question: 'Will I receive a treatment plan before travelling?', answer: 'You can share relevant dental information for an initial review. Final recommendations and treatment decisions require assessment by a qualified dental professional.' },
]
</script>

<template>
  <HeroSection />
  <FeaturedPackages />
  <HowItWorks />
  <StatsStrip />
  <PatientReviews />
  <PartnerClinics />
  <section id="faq" class="scroll-mt-24 border-t border-line bg-white py-10 lg:py-14" aria-labelledby="faq-title">
    <div class="container-page grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
      <div>
        <p class="text-xs font-semibold tracking-[0.15em] text-muted">GOOD TO KNOW</p>
        <h2 id="faq-title" class="mt-2 text-3xl text-navy-900 lg:text-4xl">Frequently Asked Questions</h2>
      </div>
      <div class="divide-y divide-line border-y border-line">
        <details v-for="faq in faqs" :key="faq.question" class="group py-4">
          <summary class="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-navy-900">
            {{ faq.question }}
            <span class="text-lg text-sky-700 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <p class="mt-3 max-w-2xl text-sm leading-6 text-muted">{{ faq.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>
