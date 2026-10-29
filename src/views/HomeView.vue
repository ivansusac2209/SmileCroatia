<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import BeforeAfterGallery from '@/components/home/BeforeAfterGallery.vue'
import FeaturedPackages from '@/components/home/FeaturedPackages.vue'
import PackageIncludes from '@/components/home/PackageIncludes.vue'
import HowItWorks from '@/components/home/HowItWorks.vue'
import StatsStrip from '@/components/home/StatsStrip.vue'
import PartnerClinics from '@/components/home/PartnerClinics.vue'

const faqs = [
  { question: 'How do I get started?', answer: 'Send us your dental goals, any treatment plan or records you already have and your travel preferences. We coordinate the next steps and aim to reply within 1–3 business days.' },
  { question: 'How much does a dental trip cost?', answer: 'Every proposal is personalized. Within 1–3 business days, we aim to provide a tailored package outlining the estimated total cost, planned treatment, agreed travel arrangements and a clear breakdown of what is included and excluded. Final treatment recommendations and clinical costs depend on an assessment by a dental professional.' },
  { question: 'What does SmileCroatia organize?', answer: 'We coordinate communication with dental providers, appointment planning, your accommodation and local transfers as part of your dental trip. You book your own flights. Your personalized proposal explains the exact accommodation, transfer arrangements and any other services included in your package.' },
  { question: 'Do I need to book flights before I receive my proposal?', answer: 'No. Wait until you have reviewed the proposal, confirmed the treatment timeline with the dental provider and agreed on the practical arrangements. Any suggested dates are preferences, not confirmed bookings.' },
  { question: 'How does payment work?', answer: 'Your personalized proposal will clearly outline the package price, payment schedule and what is included or excluded. A deposit may be required after you accept the proposal. The amount, due dates, cancellation and refund terms will be provided in writing. Dental treatment payments may follow the clinic’s own terms, as explained in your proposal.' },
  { question: 'What happens if I need to cancel or change my dates?', answer: 'Cancellation and change terms depend on the services booked and the relevant providers’ policies. We will explain the applicable terms, including any non-refundable deposits or supplier costs, before you pay or confirm bookings.' },
  { question: 'How do I know the treatment is right for me?', answer: 'SmileCroatia helps coordinate communication and planning, but does not replace a dentist’s clinical judgment. A qualified dental professional must assess your case, confirm suitability and explain the risks, alternatives, treatment stages and expected results.' },
  { question: 'Can all dental treatment be completed in one trip?', answer: 'Not always. Some treatments, including certain implant procedures, may require healing time and a later visit. The treating dental professional will explain the likely stages before you make travel commitments.' },
  { question: 'Who supports me during my stay?', answer: 'Your personal coordinator is your point of contact for the arrangements agreed with SmileCroatia. Clinical care is provided by the dental clinic. The exact support and services included will be described in your proposal.' },
  { question: 'What if I do not have a treatment plan or X-rays yet?', answer: 'You can still contact us. Tell us about your goals and what you know so far. We will explain what information may be needed to coordinate an initial review; any diagnosis or treatment recommendation must come from a dental professional.' },
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
