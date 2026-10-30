<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardList, Clock3, Stethoscope } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'

const route = useRoute()

const treatments: Record<string, {
  title: string
  eyebrow: string
  intro: string
  image: string
  alt: string
  mayHelp: string[]
  planning: string[]
  note: string
}> = {
  'dental-implants': {
    title: 'Dental Implants',
    eyebrow: 'REPLACING MISSING TEETH',
    intro: 'Dental implants may be an option for replacing missing teeth. A dental professional needs to assess your oral health, bone conditions and overall suitability before recommending a treatment plan.',
    image: '/images/package-implants.jpg',
    alt: 'Dental implant model illustrating replacement of a missing tooth',
    mayHelp: ['Replacing one or more missing teeth', 'Discussing fixed replacement options', 'Understanding whether additional procedures may be needed'],
    planning: ['Share any existing treatment plan or recent dental imaging', 'Ask the clinic about treatment stages and healing time', 'Confirm how many visits may be needed before arranging travel'],
    note: 'Implant treatment often involves more than one stage and may require healing time between visits. Suitability, timing and outcomes vary by patient.',
  },
  'crowns-bridges': {
    title: 'Crowns & Bridges',
    eyebrow: 'RESTORATIVE DENTISTRY',
    intro: 'Crowns and bridges can be considered to restore or replace teeth in selected situations. The right option depends on the condition of the teeth, bite, gums and surrounding oral health.',
    image: '/images/package-crowns.jpg',
    alt: 'Ceramic crowns used in restorative dentistry',
    mayHelp: ['Restoring a damaged or weakened tooth', 'Replacing a missing tooth with a bridge in suitable cases', 'Discussing material choices and appearance'],
    planning: ['Share a dentist’s recommendation or relevant dental images', 'Discuss material options and what each option involves', 'Confirm the proposed number of appointments and written costs'],
    note: 'Not every tooth is suitable for a crown or bridge. A dentist should explain the benefits, limitations and alternatives for your case.',
  },
  'dental-veneers': {
    title: 'Dental Veneers',
    eyebrow: 'COSMETIC DENTISTRY',
    intro: 'Veneers are thin restorations that may change the visible shape, colour or proportions of selected teeth. They are not suitable for everyone, so a dentist should assess dental health and discuss alternatives first.',
    image: '/images/package-makeover.jpg',
    alt: 'Close-up of a natural-looking smile',
    mayHelp: ['Discussing changes to tooth shape or colour', 'Exploring options for visible front teeth', 'Comparing veneers with other cosmetic approaches'],
    planning: ['Describe what you would like to change about your smile', 'Ask about tooth preparation, maintenance and possible risks', 'Review realistic expectations and alternatives with a dentist'],
    note: 'Veneers may require irreversible changes to natural teeth. The dentist should explain the implications and alternatives before you decide.',
  },
  'smile-makeover': {
    title: 'Smile Makeover',
    eyebrow: 'A PERSONALIZED APPROACH',
    intro: 'A smile makeover may combine restorative and cosmetic treatments based on your goals and dental health. The plan should be designed around a clinical examination rather than a standard package.',
    image: '/images/step-upload.jpg',
    alt: 'Patient discussing dental care with a clinician',
    mayHelp: ['Bringing several smile concerns together', 'Understanding possible combinations of treatments', 'Planning priorities, stages and practical arrangements'],
    planning: ['Tell us what you would like to improve and share any available records', 'Ask the clinic to explain each recommended treatment and alternative', 'Agree the scope, timeline, costs and visit schedule before booking travel'],
    note: 'A smile makeover is not one standard procedure. The appropriate plan, number of visits and final result depend on individual clinical assessment.',
  },
}

const treatment = computed(() => treatments[String(route.params.slug)] ?? null)
</script>

<template>
  <section v-if="treatment" class="container-page py-10 lg:py-16">
    <RouterLink :to="{ path: '/', hash: '#dental-treatments' }" class="inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-navy-900">
      <ArrowLeft class="size-4" /> All treatments
    </RouterLink>

    <div class="mt-6 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
      <div>
        <p class="text-xs font-semibold tracking-[0.16em] text-sky-700">{{ treatment.eyebrow }}</p>
        <h1 class="mt-3 text-4xl leading-tight text-navy-900 sm:text-5xl">{{ treatment.title }}</h1>
        <p class="mt-5 text-base leading-7 text-muted">{{ treatment.intro }}</p>
        <div class="mt-7 flex flex-col gap-3 sm:flex-row">
          <BaseButton :to="{ name: 'contact-details' }">Get My Personalized Proposal <ArrowRight class="size-4" /></BaseButton>
        </div>
        <p class="mt-3 text-xs leading-5 text-muted">No fixed treatment price is quoted before your needs and clinical information have been reviewed.</p>
      </div>
      <img :src="treatment.image" :alt="treatment.alt" class="aspect-[4/3] w-full rounded-md object-cover" />
    </div>

    <div class="mt-12 grid gap-8 border-t border-line pt-9 md:grid-cols-2 lg:mt-16 lg:gap-14">
      <div>
        <div class="flex items-center gap-3">
          <Stethoscope class="size-6 text-sky-700" />
          <h2 class="text-2xl text-navy-900">What you can discuss</h2>
        </div>
        <ul class="mt-5 space-y-3">
          <li v-for="item in treatment.mayHelp" :key="item" class="flex items-start gap-3 text-sm leading-6 text-muted">
            <CheckCircle2 class="mt-1 size-4 shrink-0 text-sky-700" /> {{ item }}
          </li>
        </ul>
      </div>
      <div>
        <div class="flex items-center gap-3">
          <ClipboardList class="size-6 text-sky-700" />
          <h2 class="text-2xl text-navy-900">Planning your treatment</h2>
        </div>
        <ol class="mt-5 space-y-3">
          <li v-for="(item, index) in treatment.planning" :key="item" class="flex items-start gap-3 text-sm leading-6 text-muted">
            <span class="flex size-6 shrink-0 items-center justify-center rounded-full bg-surface text-xs font-semibold text-navy-900">{{ index + 1 }}</span> {{ item }}
          </li>
        </ol>
      </div>
    </div>

    <div class="mt-10 flex items-start gap-3 rounded-md border border-line bg-surface p-5">
      <Clock3 class="mt-0.5 size-5 shrink-0 text-navy-800" />
      <p class="text-sm leading-6 text-muted">{{ treatment.note }}</p>
    </div>

    <div class="mt-10 flex flex-col items-start justify-between gap-4 bg-[#f5f8fa] p-6 sm:flex-row sm:items-center sm:p-8">
      <div>
        <h2 class="text-2xl text-navy-900">Understand your options before you travel</h2>
        <p class="mt-2 max-w-2xl text-sm leading-6 text-muted">Send us your questions and any relevant documents. We can help coordinate the next steps with a partner clinic and explain the agreed travel arrangements.</p>
      </div>
      <BaseButton :to="{ name: 'contact-details' }" class="shrink-0">Get My Personalized Proposal <ArrowRight class="size-4" /></BaseButton>
    </div>
  </section>
  <section v-else class="container-page py-16 text-center">
    <h1 class="text-3xl text-navy-900">Treatment not found</h1>
    <RouterLink :to="{ path: '/', hash: '#dental-treatments' }" class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">Browse treatments <ArrowRight class="size-4" /></RouterLink>
  </section>
</template>
