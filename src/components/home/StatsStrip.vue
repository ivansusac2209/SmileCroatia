<script setup lang="ts">
import { stats } from '@/data/home'
</script>

<template>
  <section class="border-y border-line bg-surface py-10" aria-label="Why SmileCroatia">
    <ul class="container-page grid grid-cols-2 gap-y-8 md:grid-cols-4">
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
  </section>
</template>
