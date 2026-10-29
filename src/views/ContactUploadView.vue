<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowRight, Check, LoaderCircle } from 'lucide-vue-next'
import InquiryStepper from '@/components/contact/InquiryStepper.vue'
import FileDropzone from '@/components/contact/FileDropzone.vue'
import FormField from '@/components/ui/FormField.vue'
import TextareaCounter from '@/components/ui/TextareaCounter.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { inputClasses } from '@/components/ui/inputClasses'
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
        <p class="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted">
          Share your treatment plan, any dental records you have and your travel preferences. Our team will coordinate the next steps and aim to get back to you within 1–3 business days with a personalized proposal, including pricing and what is covered. Any treatment recommendation must be confirmed by a dental professional.
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
                 :rows="4"
                placeholder="E.g. I have a treatment plan for crowns and implants. I'd like to understand the estimated cost and how many visits may be needed."
              />
            </FormField>

            <div class="mt-7 border-t border-line pt-6">
              <h2 class="text-lg font-semibold text-navy-900">Your travel preferences</h2>
              <p class="mt-1 text-sm leading-6 text-muted">These dates are flexible preferences, not fixed commitments. If your dates are not decided yet, you can leave them blank.</p>
              <div class="mt-4 grid grid-cols-2 items-start gap-3 [&>div>label]:flex [&>div>label]:min-h-10 [&>div>label]:items-end">
                <FormField id="arrival" label="Preferred arrival" optional>
                  <input id="arrival" v-model="store.details.preferredArrival" type="date" :class="inputClasses()" />
                </FormField>
                <FormField id="departure" label="Preferred departure" optional>
                  <input id="departure" v-model="store.details.preferredDeparture" type="date" :min="store.details.preferredArrival || undefined" :class="inputClasses()" />
                </FormField>
                <FormField id="travelers" label="Number of travelers" optional>
                  <select id="travelers" v-model="store.details.travelers" :class="inputClasses()">
                    <option value="1">1 traveler</option>
                    <option value="2">2 travelers</option>
                    <option value="3">3 travelers</option>
                    <option value="4+">4 or more</option>
                  </select>
                </FormField>
                <div class="sm:col-span-2">
                  <FormField id="travelPreferences" label="Accommodation, transfers or other requests" optional>
                    <TextareaCounter id="travelPreferences" v-model="store.details.travelPreferences" :max="1000" :rows="2" placeholder="E.g. hotel preferences, airport pickup, mobility needs or flexible dates." />
                  </FormField>
                </div>
              </div>
            </div>

            <p class="mt-5 text-xs leading-relaxed text-muted">
              Your information will be used to respond to your inquiry and assess the next steps. Please do not upload
              identity documents or information that is not needed for an initial dental review.
            </p>

            <p v-if="error" class="mt-4 text-sm text-danger" role="alert">{{ error }}</p>


          </div>
        </div>
        <div class="sticky bottom-0 z-20 mt-5 flex justify-end border-t border-line bg-white/95 py-3 backdrop-blur sm:mt-6">
          <BaseButton type="submit" :disabled="sending" class="w-full sm:w-auto">
            <template v-if="sending"><LoaderCircle class="size-4 animate-spin" /> Sending…</template>
            <template v-else>Continue <ArrowRight class="size-4" /></template>
          </BaseButton>
        </div>
      </form>
    </div>
  </section>
</template>
