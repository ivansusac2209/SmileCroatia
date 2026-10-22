<script setup lang="ts">
import { Check } from 'lucide-vue-next'

defineProps<{ current: 1 | 2 | 3 }>()

const steps = ['Your Details', 'Upload & Describe', 'Submit']
</script>

<template>
  <nav aria-label="Inquiry progress" class="mx-auto max-w-2xl">
    <ol class="flex items-start">
      <li v-for="(label, i) in steps" :key="label" class="relative flex flex-1 flex-col items-center">
        <span
          v-if="i > 0"
          class="absolute top-3.5 right-1/2 h-px w-full -translate-y-1/2"
          :class="i < current ? 'bg-navy-800' : 'bg-line'"
          aria-hidden="true"
        />
        <span
          class="relative z-10 flex size-7 items-center justify-center rounded-full text-xs font-medium ring-4 ring-white"
          :class="i + 1 <= current ? 'bg-navy-800 text-white' : 'bg-line text-subtle'"
          :aria-current="i + 1 === current ? 'step' : undefined"
        >
          <Check v-if="i + 1 < current" class="size-3.5" />
          <template v-else>{{ i + 1 }}</template>
        </span>
        <span class="mt-2 text-center text-[0.7rem] sm:text-xs" :class="i + 1 <= current ? 'text-navy-900' : 'text-subtle'">
          {{ label }}
        </span>
      </li>
    </ol>
  </nav>
</template>
