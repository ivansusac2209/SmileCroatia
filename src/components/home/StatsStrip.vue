<script setup lang="ts">
import { stats } from '@/data/home'
</script>

<template>
  <section id="why-smilecroatia" class="scroll-mt-24 border-y border-line bg-[#f7f8f8] py-8 sm:py-12" aria-labelledby="why-title">
    <div class="container-page">
      <div class="mx-auto mb-7 sm:mb-8 max-w-3xl px-1 text-center">
        <p class="text-xs font-semibold tracking-[0.16em] text-sky-700">WHY CROATIA</p>
        <h2 id="why-title" class="mt-2 sm:mt-3 text-[1.65rem] leading-[1.12] text-navy-900 sm:text-3xl lg:text-4xl">A dental trip, thoughtfully coordinated</h2>
        <p class="mt-3 text-[0.95rem] leading-[1.55] text-muted sm:text-base sm:leading-7">Croatia gives international patients the opportunity to explore dental treatment abroad while experiencing a different destination. Depending on the procedure and provider, comparable dental treatment may cost around 30–70% less than in the US or UK. SmileCroatia brings the practical details together by coordinating clinic communication, appointments, accommodation and local transfers.</p>
      </div>
      <ul class="grid grid-cols-2 gap-3 sm:gap-x-3 sm:gap-y-8 md:grid-cols-4">
        <li
          v-for="(stat, i) in stats"
          :key="stat.title"
          class="flex min-w-0 flex-col items-center rounded-xl border border-[#e1e8ed] bg-white/70 px-2 py-4 text-center sm:rounded-none sm:border-0 sm:bg-transparent sm:px-3 sm:py-0"
          :class="{ 'md:border-l md:border-line': i > 0 }"
        >
          <span class="mb-1 flex size-11 sm:size-14 items-center justify-center rounded-2xl border border-[#d9e6eb] bg-[#eaf1f4] text-sky-800 shadow-sm sm:size-16">
            <component :is="stat.icon" class="size-5 sm:size-8" stroke-width="1.8" />
          </span>
          <p class="mt-2 font-serif text-[1.2rem] leading-[1.2] text-navy-900 sm:mt-3 sm:text-xl lg:text-2xl">{{ stat.title }}</p>
          <p class="mt-1 text-[0.8rem] leading-[1.45] text-muted sm:text-sm sm:leading-5">{{ stat.text }}</p>
        </li>
      </ul>
      <p class="mx-auto mt-5 px-1 sm:mt-7 max-w-3xl text-center text-[0.7rem] leading-[1.5] text-muted sm:text-xs sm:leading-5">The 30–70% figure is an indicative comparison of dental treatment costs only, not a guaranteed saving on the full trip. Actual prices and savings vary by procedure, clinical needs and provider. Flights are booked separately; your personalized proposal outlines the treatment estimate and the accommodation and local transfers included in your arrangements.</p>
    </div>
  </section>
</template>
