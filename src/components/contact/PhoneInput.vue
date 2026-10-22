<script setup lang="ts">
import { computed } from 'vue'
import type { CountryCode } from 'libphonenumber-js'
import { ChevronDown } from 'lucide-vue-next'
import { countries } from '@/lib/countries'
import { inputClasses } from '@/components/ui/inputClasses'

defineProps<{ id: string; error?: string | null }>()
const number = defineModel<string>({ required: true })
const country = defineModel<CountryCode>('country', { required: true })

const selected = computed(() => countries.find((c) => c.code === country.value))
</script>

<template>
  <div class="flex gap-2">
    <div class="relative shrink-0">
      <!-- Native select keeps mobile pickers usable; the visible label shows flag + dial code like the design -->
      <select
        v-model="country"
        :aria-label="'Phone country code'"
        class="absolute inset-0 cursor-pointer opacity-0"
      >
        <option v-for="c in countries" :key="c.code" :value="c.code">{{ c.name }} ({{ c.dialCode }})</option>
      </select>
      <div :class="inputClasses()" class="pointer-events-none flex items-center gap-1.5 pr-2" aria-hidden="true">
        <span>{{ selected?.flag }}</span>
        <span class="text-sm">{{ selected?.dialCode }}</span>
        <ChevronDown class="size-4 text-muted" />
      </div>
    </div>
    <input
      :id="id"
      v-model="number"
      type="tel"
      autocomplete="tel-national"
      placeholder="(555) 123-4567"
      :class="inputClasses(error)"
      :aria-invalid="!!error"
      :aria-describedby="error ? `${id}-error` : undefined"
    />
  </div>
</template>
