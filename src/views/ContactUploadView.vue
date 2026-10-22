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
    error.value = 'Sorry, we could not send your inquiry. Please check your connection and try again.'
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
                placeholder="E.g. I have a treatment plan for 6 crowns and 2 implants. I'd like to know your price and how many visits are needed."
              />
            </FormField>

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
