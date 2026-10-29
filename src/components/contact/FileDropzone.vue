<script setup lang="ts">
import { ref } from 'vue'
import { Upload, FileText, X } from 'lucide-vue-next'
import { fileError, MAX_FILES, MAX_TOTAL_FILE_BYTES } from '@/lib/validation'

const files = defineModel<File[]>({ required: true })
const dragging = ref(false)
const errors = ref<string[]>([])
const input = ref<HTMLInputElement>()

function addFiles(list: FileList | null) {
  if (!list) return
  errors.value = []
  for (const file of Array.from(list)) {
    if (files.value.some((f) => f.name === file.name && f.size === file.size)) continue
    const err = fileError(file)
    if (err) {
      errors.value.push(err)
      continue
    }
    if (files.value.length >= MAX_FILES) {
      errors.value.push('You can upload up to 5 files.')
      continue
    }
    const totalSize = [...files.value, file].reduce((sum, item) => sum + item.size, 0)
    if (totalSize > MAX_TOTAL_FILE_BYTES) {
      errors.value.push('The combined size of your files must be 8 MB or smaller.')
      continue
    }
    files.value = [...files.value, file]
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
      class="flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed px-4 py-8 text-center sm:px-6 sm:py-12 transition-colors focus-visible:outline-2 focus-visible:outline-navy-700"
      :class="dragging ? 'border-navy-700 bg-navy-800/5' : 'border-line bg-surface hover:border-subtle'"
      @click="input?.click()"
      @dragover.prevent="dragging = true"
      @dragleave.prevent="dragging = false"
      @drop.prevent="onDrop"
    >
      <Upload class="size-7 text-navy-800" stroke-width="1.5" />
      <span class="mt-3 text-sm font-medium text-navy-900 sm:mt-4">Upload your dental plan or files</span>
      <span class="mt-2 text-xs text-muted">Drag and drop files here, or click to browse</span>
      <span class="mt-1 text-xs text-muted">PDF, JPG, PNG, WEBP, DICOM · max 5 files, 8 MB total</span>
    </button>
    <input
      ref="input"
      type="file"
      multiple
      accept=".pdf,.jpg,.jpeg,.png,.webp,.dcm,.dicom,application/pdf,image/jpeg,image/png,image/webp,application/dicom"
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
