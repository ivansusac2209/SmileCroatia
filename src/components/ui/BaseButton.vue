<script setup lang="ts">
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
  defineProps<{
    to?: RouteLocationRaw
    variant?: 'primary' | 'outline'
    size?: 'sm' | 'md'
    type?: 'button' | 'submit'
    disabled?: boolean
  }>(),
  { variant: 'primary', size: 'md', type: 'button' },
)

const classes = computed(() => [
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700 disabled:cursor-not-allowed disabled:opacity-60',
  props.size === 'sm' ? 'px-4 py-2.5 text-sm' : 'px-5 py-3 text-[0.95rem]',
  props.variant === 'primary'
    ? 'bg-navy-800 text-white hover:bg-navy-700'
    : 'border border-navy-800 bg-white text-navy-800 hover:bg-surface',
])
</script>

<template>
  <RouterLink v-if="to" :to="to" :class="classes"><slot /></RouterLink>
  <button v-else :type="type" :disabled="disabled" :class="classes"><slot /></button>
</template>
