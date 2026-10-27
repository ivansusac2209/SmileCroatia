<template>
  <section id="partner-clinics" class="scroll-mt-24 border-t border-line bg-[#fbfaf7] py-12 lg:py-16" aria-labelledby="clinics-title">
    <div class="container-page">
      <div class="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p class="text-xs font-semibold tracking-[0.15em] text-muted">CARE WITH CLARITY</p>
          <h2 id="clinics-title" class="mt-2 text-3xl text-navy-900 lg:text-4xl">Find the right next step for your care.</h2>
          <p class="mt-3 leading-7 text-muted">We help you understand treatment options and the questions to ask a dental clinic before you make travel plans. Treatment recommendations should always be based on an individual clinical assessment.</p>
          <RouterLink :to="{ name: 'contact-details' }" class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-navy-700">Talk to our team <span aria-hidden="true">↗</span></RouterLink>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <figure class="overflow-hidden bg-white">
            <img src="/images/step-upload.jpg" alt="A patient discussing dental care with a clinician" class="aspect-[4/3] w-full object-cover" loading="lazy" />
            <figcaption class="p-3 text-sm text-navy-900">Discuss your dental needs</figcaption>
          </figure>
          <figure class="mt-7 overflow-hidden bg-white">
            <img src="/images/step-offer.jpg" alt="Dental imaging used when reviewing treatment options" class="aspect-[4/3] w-full object-cover" loading="lazy" />
            <figcaption class="p-3 text-sm text-navy-900">Understand your treatment plan</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
