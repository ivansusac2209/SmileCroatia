<template>
  <section id="partner-clinics" class="scroll-mt-24 border-t border-line bg-[#fbfaf7] py-12 lg:py-16" aria-labelledby="clinics-title">
    <div class="container-page">
      <div class="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p class="text-xs font-semibold tracking-[0.15em] text-muted">CLARITY BEFORE COMMITMENT</p>
          <h2 id="clinics-title" class="mt-2 text-3xl text-navy-900 lg:text-4xl">Know what to expect before you travel.</h2>
          <p class="mt-3 leading-7 text-muted">We coordinate the details with you and the dental provider so you can make an informed decision before committing to a trip. Before you pay or confirm arrangements, you should know:</p>
          <ul class="mt-4 space-y-3 text-sm leading-6 text-navy-900">
            <li class="flex gap-3"><span class="font-semibold text-sky-700" aria-hidden="true">✓</span><span><strong>Your clinic and care plan:</strong> the provider involved and the proposed next steps, subject to clinical assessment.</span></li>
            <li class="flex gap-3"><span class="font-semibold text-sky-700" aria-hidden="true">✓</span><span><strong>Your package:</strong> the estimated total cost and a clear list of included and excluded services.</span></li>
            <li class="flex gap-3"><span class="font-semibold text-sky-700" aria-hidden="true">✓</span><span><strong>Your arrangements:</strong> what is planned, what still needs confirmation and which cancellation terms apply.</span></li>
          </ul>
          <p class="mt-4 text-sm leading-6 text-muted">Clinical recommendations and final treatment costs must be confirmed by a qualified dental professional. You decide whether to proceed after reviewing the proposal.</p>
          <RouterLink :to="{ name: 'contact-details' }" class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-navy-700">Discuss your plans <span aria-hidden="true">↗</span></RouterLink>
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
