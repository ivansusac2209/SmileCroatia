<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import BeforeAfterGallery from '@/components/home/BeforeAfterGallery.vue'
import FeaturedPackages from '@/components/home/FeaturedPackages.vue'
import PackageIncludes from '@/components/home/PackageIncludes.vue'
import HowItWorks from '@/components/home/HowItWorks.vue'
import StatsStrip from '@/components/home/StatsStrip.vue'
import PartnerClinics from '@/components/home/PartnerClinics.vue'

const faqs = [
  { question: 'How do I get started?', answer: 'Tell us about your dental goals and share any relevant records or scans you already have. Our team will help coordinate an initial review with a dental professional.' },
  { question: 'How is my treatment package priced?', answer: 'Your proposal is individual and depends on your clinical needs and the treatment recommended by the dental professional. We explain the proposed services and payment terms before you decide.' },
  { question: 'When do I pay?', answer: 'A deposit and the remaining balance are handled according to the terms agreed with you in advance. Your proposal should clearly explain due dates, inclusions and any exclusions.' },
  { question: 'Who helps me during my stay in Croatia?', answer: 'Your SmileCroatia coordinator helps organize the agreed travel and stay arrangements and supports you with coordination throughout your visit. Clinical care is provided by qualified dental professionals.' },
  { question: 'Can my treatment be completed in one trip?', answer: 'Not always. Some treatments, including certain implant procedures, may require healing time and a later visit. The treating dental professional will explain the expected stages before travel is booked.' },
]
</script>

<template>
  <HeroSection />
  <BeforeAfterGallery />
  <FeaturedPackages />
  <PackageIncludes />
  <HowItWorks />
  <StatsStrip />
  <PartnerClinics />
  <section id="faq" class="scroll-mt-24 border-t border-line bg-white py-10 lg:py-14" aria-labelledby="faq-title">
    <div class="container-page grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
      <div>
        <p class="text-xs font-semibold tracking-[0.15em] text-muted">GOOD TO KNOW</p>
        <h2 id="faq-title" class="mt-2 text-3xl text-navy-900 lg:text-4xl">Frequently Asked Questions</h2>
        <p class="mt-3 max-w-sm text-sm leading-6 text-muted">Clear answers before you plan your dental trip.</p>
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
