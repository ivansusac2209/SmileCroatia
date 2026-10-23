<script setup lang="ts">
import { stats } from '@/data/home'
</script>

<template>
  <section id="why-smilecroatia" class="scroll-mt-24 border-y border-line bg-surface py-10" aria-label="Why choose SmileCroatia">
    <div class="container-page">
      <div class="mx-auto mb-8 max-w-2xl text-center">
        <h2 class="text-2xl text-navy-900 lg:text-3xl">Dental care in Croatia, made easier</h2>
        <p class="mt-2 leading-relaxed text-muted">Compare treatment options with practical support for planning your trip, from your first enquiry to clinic appointments.</p>
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
    </div>
  </section>
</template>
