<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowRight, Check, LoaderCircle } from 'lucide-vue-next'
import InquiryStepper from '@/components/contact/InquiryStepper.vue'
import FileDropzone from '@/components/contact/FileDropzone.vue'
import FormField from '@/components/ui/FormField.vue'
import TextareaCounter from '@/components/ui/TextareaCounter.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useInquiryStore } from '@/stores/inquiry'
import { submitInquiry } from '@/lib/submitInquiry'

const store = useInquiryStore()
const router = useRouter()
const sending = ref(false)
const error = ref('')

const examples = [
  'Treatment plan from your dentist',
  'X-rays or 3D scans (CBCT)',
  'Photos of your teeth',
  'Any other relevant documents',
]

watch(() => store.needs, () => store.persist())

async function onSubmit() {
  error.value = ''
  sending.value = true
  try {
    await submitInquiry({ details: store.details, needs: store.needs, files: store.files })
    store.markSubmitted()
    router.push({ name: 'contact-sent' })
  } catch (e) {
    console.error(e)
    error.value = e instanceof Error
      ? e.message
      : 'Sorry, we could not send your inquiry. Please try again later.'
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <section class="container-page py-10 lg:py-14">
    <InquiryStepper :current="2" />

    <div class="mx-auto mt-10 max-w-4xl">
      <header class="text-center">
        <h1 class="text-3xl text-navy-900 sm:text-4xl">Upload Your Dental Plan</h1>
        <p class="mx-auto mt-3 max-w-xl text-sm text-muted">
          Share your existing dental plan or any available documents, and tell us a bit about your needs. Our partner
          clinic will review everything and send you a personalized offer.
        </p>
      </header>

      <form class="mt-10" novalidate @submit.prevent="onSubmit">
        <div class="grid gap-8 md:grid-cols-2">
          <div>
            <FileDropzone v-model="store.files" />
            <div class="mt-5 rounded-lg border border-line bg-surface p-4">
            <p class="text-sm font-medium text-navy-900">A few helpful notes</p>
            <p class="mt-2 text-xs leading-relaxed text-muted">
              You can start with the information you have. If you do not have scans or an existing treatment plan yet,
              you can still describe what you need and ask a question.
            </p>
            <p class="mt-2 text-xs leading-relaxed text-muted">
              Dental documents may contain sensitive health information. Please share only files relevant to your inquiry
              and remove unrelated personal details where possible.
            </p>
          </div>
          <p class="mt-5 text-sm text-navy-900">Examples of files you can upload:</p>
            <ul class="mt-2 space-y-1 text-xs text-muted">
              <li v-for="item in examples" :key="item" class="flex items-center gap-2">
                <Check class="size-3.5 shrink-0 text-navy-800" /> {{ item }}
              </li>
            </ul>
          </div>

          <div class="flex flex-col">
            <FormField id="needs" label="Tell us about your dental needs" optional>
              <TextareaCounter
                id="needs"
                v-model="store.needs"
                :max="1000"
                :rows="6"
                placeholder="E.g. I have a treatment plan for crowns and implants. I'd like to understand the estimated cost and how many visits may be needed."
              />
            </FormField>

            <p class="mt-5 text-xs leading-relaxed text-muted">
              Your information will be used to respond to your inquiry and assess the next steps. Please do not upload
              identity documents or information that is not needed for an initial dental review.
            </p>

            <p v-if="error" class="mt-4 text-sm text-danger" role="alert">{{ error }}</p>

            <div class="mt-8 flex justify-end md:mt-auto md:pt-8">
              <BaseButton type="submit" :disabled="sending" class="w-full sm:w-auto">
                <template v-if="sending"><LoaderCircle class="size-4 animate-spin" /> Sending…</template>
                <template v-else>Continue <ArrowRight class="size-4" /></template>
              </BaseButton>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
