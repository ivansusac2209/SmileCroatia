<script setup lang="ts">
import { ref } from 'vue'
import { Upload, FileText, X } from 'lucide-vue-next'
import { fileError } from '@/lib/validation'

const files = defineModel<File[]>({ required: true })
const dragging = ref(false)
const errors = ref<string[]>([])
const input = ref<HTMLInputElement>()

function addFiles(list: FileList | null) {
  if (!list) return
  errors.value = []
  for (const file of Array.from(list)) {
    const err = fileError(file)
    if (err) errors.value.push(err)
    else if (!files.value.some((f) => f.name === file.name && f.size === file.size)) files.value = [...files.value, file]
  }
}

function onDrop(e: DragEvent) {
  dragging.value = false
  addFiles(e.dataTransfer?.files ?? null)
}

function onPick(e: Event) {
  const target = e.target as HTMLInputElement
  addFiles(target.files)
  target.value = ''
}

function remove(index: number) {
  files.value = files.value.filter((_, i) => i !== index)
}

function formatSize(bytes: number) {
  return bytes > 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.ceil(bytes / 1024)} KB`
}
</script>

<template>
  <div>
    <button
      type="button"
      class="flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed px-6 py-12 text-center transition-colors focus-visible:outline-2 focus-visible:outline-navy-700"
      :class="dragging ? 'border-navy-700 bg-navy-800/5' : 'border-line bg-surface hover:border-subtle'"
      @click="input?.click()"
      @dragover.prevent="dragging = true"
      @dragleave.prevent="dragging = false"
      @drop.prevent="onDrop"
    >
      <Upload class="size-7 text-navy-800" stroke-width="1.5" />
      <span class="mt-4 text-sm font-medium text-navy-900">Upload your dental plan or files</span>
      <span class="mt-2 text-xs text-muted">Drag and drop files here, or click to browse</span>
      <span class="mt-1 text-xs text-muted">PDF, JPG, PNG, DICOM (max 20 MB)</span>
    </button>
    <input
      ref="input"
      type="file"
      multiple
      accept=".pdf,.jpg,.jpeg,.png,.dcm,.dicom,application/pdf,image/jpeg,image/png,application/dicom"
      class="sr-only"
      tabindex="-1"
      aria-label="Upload your dental plan or files"
      @change="onPick"
    />

    <p v-for="err in errors" :key="err" class="mt-2 text-xs text-danger" role="alert">{{ err }}</p>

    <ul v-if="files.length" class="mt-3 space-y-2">
      <li v-for="(file, i) in files" :key="file.name + file.size" class="flex items-center gap-3 rounded-md border border-line px-3 py-2 text-sm">
        <FileText class="size-4 shrink-0 text-muted" />
        <span class="min-w-0 flex-1 truncate">{{ file.name }}</span>
        <span class="shrink-0 text-xs text-muted">{{ formatSize(file.size) }}</span>
        <button type="button" class="shrink-0 rounded p-1 text-muted hover:text-danger" :aria-label="`Remove ${file.name}`" @click="remove(i)">
          <X class="size-4" />
        </button>
      </li>
    </ul>
  </div>
</template>
