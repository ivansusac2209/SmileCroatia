<script setup lang="ts">
defineProps<{ id: string; label: string; required?: boolean; optional?: boolean; error?: string | null }>()
</script>

<template>
  <div>
    <label :for="id" class="mb-1.5 block text-sm text-navy-900">
      {{ label }}<span v-if="required" class="text-danger" aria-hidden="true"> *</span>
      <span v-if="optional" class="text-muted"> (optional)</span>
    </label>
    <slot />
    <p v-if="error" :id="`${id}-error`" class="mt-1 text-xs text-danger" role="alert">{{ error }}</p>
  </div>
</template>
