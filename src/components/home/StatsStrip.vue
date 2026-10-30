<script setup lang="ts">
import { stats } from '@/data/home'
</script>

<template>
  <section id="why-smilecroatia" class="scroll-mt-24 border-y border-line bg-[#f7f8f8] py-10 sm:py-12" aria-labelledby="why-title">
    <div class="container-page">
      <div class="mx-auto mb-8 max-w-3xl text-center">
        <p class="text-xs font-semibold tracking-[0.16em] text-sky-700">WHY CROATIA</p>
        <h2 id="why-title" class="mt-3 text-3xl text-navy-900 lg:text-4xl">A dental trip, thoughtfully coordinated</h2>
        <p class="mt-3 text-sm leading-6 text-muted sm:text-base">Croatia gives international patients the opportunity to explore dental treatment abroad while experiencing a different destination. Depending on the procedure and provider, comparable dental treatment may cost around 30–70% less than in the US or UK. SmileCroatia brings the practical details together by coordinating clinic communication, appointments, accommodation and local transfers.</p>
      </div>
      <ul class="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4">
        <li
          v-for="(stat, i) in stats"
          :key="stat.title"
          class="flex flex-col items-center px-3 text-center"
          :class="{ 'md:border-l md:border-line': i > 0 }"
        >
          <component :is="stat.icon" class="size-8 text-navy-800" stroke-width="1.25" />
          <p class="mt-3 font-serif text-xl text-navy-900 lg:text-2xl">{{ stat.title }}</p>
          <p class="mt-1 text-sm text-muted">{{ stat.text }}</p>
        </li>
      </ul>
      <p class="mx-auto mt-7 max-w-3xl text-center text-xs leading-5 text-muted">The 30–70% figure is an indicative comparison of dental treatment costs only, not a guaranteed saving on the full trip. Actual prices and savings vary by procedure, clinical needs and provider. Flights are booked separately; your personalized proposal outlines the treatment estimate and the accommodation and local transfers included in your arrangements.</p>
    </div>
  </section>
</template>
