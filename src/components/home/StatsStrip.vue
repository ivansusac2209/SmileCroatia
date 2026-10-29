<script setup lang="ts">
import { stats } from '@/data/home'
</script>

<template>
  <section id="why-smilecroatia" class="scroll-mt-24 border-y border-line bg-[#f7f8f8] py-10 sm:py-12" aria-labelledby="why-title">
    <div class="container-page">
      <div class="mx-auto mb-8 max-w-3xl text-center">
        <p class="text-xs font-semibold tracking-[0.16em] text-sky-700">WHY CROATIA</p>
        <h2 id="why-title" class="mt-3 text-3xl text-navy-900 lg:text-4xl">Dental care with the ease of a Croatian getaway.</h2>
        <p class="mt-3 text-sm leading-6 text-muted sm:text-base">Make your dental visit part of a well-organized stay in Croatia. Alongside coordinating your clinic and appointments, SmileCroatia arranges your accommodation and local transfers, giving you more time to focus on your care and enjoy your time here.</p>
      </div>
      <ul class="grid grid-cols-2 gap-y-8 md:grid-cols-4">
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
      <p class="mx-auto mt-7 max-w-3xl text-center text-xs leading-5 text-muted">Your flights are booked separately. Your personalized proposal explains your dental care, accommodation, local transfers and any other arrangements included in your trip.</p>
    </div>
  </section>
</template>
