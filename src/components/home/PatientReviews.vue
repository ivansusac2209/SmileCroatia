<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const reviews = [
  {
    name: 'Jennifer M.',
    age: '2 months ago',
    initials: 'J',
    avatar: 'bg-[#9b8176]',
    text: 'Traveled from the US for implants and had a fantastic experience. The clinic is modern, the staff was so kind and everything was very well organized. Highly recommend!',
  },
  {
    name: 'Michael R.',
    age: '5 months ago',
    initials: 'M',
    avatar: 'bg-[#b7a18d]',
    text: 'Great experience from start to finish. Communication was easy, they helped with travel and the whole team made me feel comfortable. My new teeth look and feel amazing.',
  },
  {
    name: 'Sarah K.',
    age: '7 months ago',
    initials: 'S',
    avatar: 'bg-sky-400',
    text: 'I was a bit nervous at first, but everything went smoothly. The dentists are very professional and the results are better than I expected. Croatia is also a beautiful place to recover!',
  },
  {
    name: 'David L.',
    age: '8 months ago',
    initials: 'D',
    avatar: 'bg-[#8d7566]',
    text: 'Professional, honest and very friendly. The clinic is state of the art and the staff really cares. I would definitely come back if I need more work done.',
  },
  {
    name: 'Emily T.',
    age: '1 year ago',
    initials: 'E',
    avatar: 'bg-[#7b9a70]',
    text: 'Such a positive experience! Beautiful clinic, amazing team and a great way to combine dental treatment with a holiday. My smile looks so much better now.',
  },
]
</script>

<template>
  <section id="patient-reviews" class="scroll-mt-24 bg-white py-5 sm:py-7" aria-labelledby="reviews-title">
    <div class="container-page">
      <div class="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <div>
          <h2 id="reviews-title" class="text-3xl text-navy-900 lg:text-4xl">What Our Patients Say</h2>
          <p class="mt-1 text-sm text-muted sm:text-base">Real experiences from patients who chose SmileCroatia.</p>
        </div>
        <a href="https://www.google.com/search?q=SmileCroatia+Google+reviews" target="_blank" rel="noopener noreferrer" class="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-sky-700 hover:text-navy-900">
          <span class="text-base font-bold" aria-hidden="true">G</span> See all reviews on Google <ArrowRight class="size-3.5" />
        </a>
      </div>
      <div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <article v-for="review in reviews" :key="review.name" class="flex min-h-[190px] flex-col rounded-md border border-line bg-white p-3.5 shadow-sm shadow-navy-900/[0.025]">
          <div class="flex items-center gap-2.5">
            <span :class="['flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-medium text-white', review.avatar]">{{ review.initials }}</span>
            <div class="min-w-0">
              <h3 class="text-xs font-semibold text-navy-900">{{ review.name }}</h3>
              <p class="text-[10px] text-muted">{{ review.age }}</p>
            </div>
          </div>
          <div class="mt-1 text-base leading-5 tracking-[-0.04em] text-[#f5a900]" aria-label="5 out of 5 stars">★★★★★</div>
          <p class="mt-2 flex-1 text-xs leading-[1.45] text-[#5f6870]">{{ review.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
