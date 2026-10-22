<script setup lang="ts">
import { reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowRight, ChevronDown } from 'lucide-vue-next'
import InquiryStepper from '@/components/contact/InquiryStepper.vue'
import PhoneInput from '@/components/contact/PhoneInput.vue'
import FormField from '@/components/ui/FormField.vue'
import TextareaCounter from '@/components/ui/TextareaCounter.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { inputClasses } from '@/components/ui/inputClasses'
import { useInquiryStore, type ContactMethod } from '@/stores/inquiry'
import { countries } from '@/lib/countries'
import * as v from '@/lib/validation'

const store = useInquiryStore()
const router = useRouter()
const d = store.details

const errors = reactive<Record<'fullName' | 'email' | 'phone', string | null>>({ fullName: null, email: null, phone: null })

const contactMethods: { value: ContactMethod; label: string }[] = [
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone' },
  { value: 'whatsapp', label: 'WhatsApp' },
]

watch(() => store.details, () => store.persist(), { deep: true })

function validate() {
  errors.fullName = v.required(d.fullName, 'Full name')
  errors.email = v.email(d.email)
  errors.phone = v.phone(d.phone, d.phoneCountry)
  return !errors.fullName && !errors.email && !errors.phone
}

// Once a field shows an error, re-check it as the user corrects it
watch(() => d.fullName, () => errors.fullName && (errors.fullName = v.required(d.fullName, 'Full name')))
watch(() => d.email, () => errors.email && (errors.email = v.email(d.email)))
watch([() => d.phone, () => d.phoneCountry], () => errors.phone && (errors.phone = v.phone(d.phone, d.phoneCountry)))

function onSubmit() {
  if (!validate()) {
    document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
    return
  }
  store.detailsComplete = true
  store.persist()
  router.push({ name: 'contact-upload' })
}
</script>

<template>
  <section class="container-page py-10 lg:py-14">
    <InquiryStepper :current="1" />

    <div class="mx-auto mt-10 max-w-4xl">
      <header class="text-center">
        <h1 class="text-3xl text-navy-900 sm:text-4xl">Your Details</h1>
        <p class="mt-3 text-sm text-muted">Let us know a bit about yourself so we can prepare your personalized plan.</p>
      </header>

      <form class="mt-10" novalidate @submit.prevent="onSubmit">
        <div class="grid gap-x-8 gap-y-5 md:grid-cols-2">
          <div class="space-y-5">
            <FormField id="fullName" label="Full name" required :error="errors.fullName">
              <input
                id="fullName"
                v-model="d.fullName"
                type="text"
                autocomplete="name"
                placeholder="John Smith"
                :class="inputClasses(errors.fullName)"
                :aria-invalid="!!errors.fullName"
                aria-describedby="fullName-error"
              />
            </FormField>

            <FormField id="email" label="Email address" required :error="errors.email">
              <input
                id="email"
                v-model="d.email"
                type="email"
                autocomplete="email"
                placeholder="john@email.com"
                :class="inputClasses(errors.email)"
                :aria-invalid="!!errors.email"
                aria-describedby="email-error"
              />
            </FormField>

            <FormField id="phone" label="Phone number" required :error="errors.phone">
              <PhoneInput id="phone" v-model="d.phone" v-model:country="d.phoneCountry" :error="errors.phone" />
            </FormField>

            <FormField id="country" label="Country of residence">
              <div class="relative">
                <select id="country" v-model="d.country" autocomplete="country" :class="inputClasses()" class="appearance-none pr-9">
                  <option v-for="c in countries" :key="c.code" :value="c.code">{{ c.name }}</option>
                </select>
                <ChevronDown class="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted" />
              </div>
            </FormField>
          </div>

          <div class="space-y-5">
            <fieldset>
              <legend class="mb-2.5 text-sm text-navy-900">Preferred contact method</legend>
              <div class="flex flex-wrap gap-x-8 gap-y-2">
                <label v-for="m in contactMethods" :key="m.value" class="flex cursor-pointer items-center gap-2 text-sm text-muted">
                  <input v-model="d.contactMethod" type="radio" name="contactMethod" :value="m.value" class="size-4 accent-navy-800" />
                  {{ m.label }}
                </label>
              </div>
            </fieldset>

            <FormField id="message" label="Additional message" optional>
              <TextareaCounter
                id="message"
                v-model="d.message"
                :max="500"
                :rows="5"
                placeholder="Feel free to share any additional information, questions or preferences."
              />
            </FormField>
          </div>
        </div>

        <div class="mt-8 flex justify-end">
          <BaseButton type="submit" class="w-full sm:w-auto">Continue <ArrowRight class="size-4" /></BaseButton>
        </div>
      </form>
    </div>
  </section>
</template>
