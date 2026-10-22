<script setup lang="ts">
import { inputClasses } from '@/components/ui/inputClasses'

defineProps<{ id: string; max: number; placeholder?: string; rows?: number }>()
const model = defineModel<string>({ required: true })
</script>

<template>
  <div class="relative">
    <textarea
      :id="id"
      v-model="model"
      :maxlength="max"
      :rows="rows ?? 4"
      :placeholder="placeholder"
      :class="inputClasses()"
      class="resize-y pb-6"
    />
    <span class="pointer-events-none absolute right-3 bottom-2 text-[0.7rem] text-subtle">{{ model.length }}/{{ max }}</span>
  </div>
</template>
