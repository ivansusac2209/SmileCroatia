<template>
  <section id="partner-clinics" class="scroll-mt-24 border-t border-line bg-[#fbfaf7] py-12 lg:py-16" aria-labelledby="clinics-title">
    <div class="container-page">
      <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p class="text-xs font-semibold tracking-[0.15em] text-sky-700">YOUR CARE, CLEARLY PLANNED</p>
          <h2 id="clinics-title" class="mt-2 text-3xl text-navy-900 lg:text-4xl">Feel confident about your care — and look forward to Croatia.</h2>
          <p class="mt-3 leading-7 text-muted">A dental trip should feel clear from the start. We coordinate the practical details with you and the dental provider, so you can review the plan before making travel commitments.</p>
          <ul class="mt-4 space-y-3 text-sm leading-6 text-navy-900">
            <li class="flex gap-3"><span class="font-semibold text-sky-700" aria-hidden="true">✓</span><span><strong>Your clinic and care plan:</strong> the provider involved and the proposed next steps, subject to clinical assessment.</span></li>
            <li class="flex gap-3"><span class="font-semibold text-sky-700" aria-hidden="true">✓</span><span><strong>Your package:</strong> the estimated total cost and a clear list of included and excluded services.</span></li>
            <li class="flex gap-3"><span class="font-semibold text-sky-700" aria-hidden="true">✓</span><span><strong>Your stay:</strong> accommodation and local transfers coordinated around your planned appointments.</span></li>
          </ul>
          <p class="mt-4 text-sm leading-6 text-muted">When your treatment schedule allows, you can also enjoy Croatia’s coastal towns, seaside atmosphere and local culture. Sightseeing and leisure activities are separate unless specifically listed in your proposal.</p>
          <p class="mt-3 text-sm leading-6 text-muted">Clinical recommendations and final treatment costs must be confirmed by a qualified dental professional. You decide whether to proceed after reviewing the proposal.</p>
          <RouterLink :to="{ name: 'contact-details' }" class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-navy-700">Discuss your plans <span aria-hidden="true">↗</span></RouterLink>
        </div>
        <div class="grid grid-cols-2 gap-3 sm:gap-4">
          <figure class="overflow-hidden rounded-md bg-white">
            <img src="https://images.pexels.com/photos/6502030/pexels-photo-6502030.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Patient and dentist discussing dental care in a bright clinic" class="aspect-[4/3] w-full object-cover" loading="lazy" />
            <figcaption class="px-3 py-3 text-sm text-navy-900">Discuss your dental needs</figcaption>
          </figure>
          <figure class="overflow-hidden rounded-md bg-white">
            <img src="https://images.pexels.com/photos/5355704/pexels-photo-5355704.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Dentist showing a patient dental X-ray results during a consultation" class="aspect-[4/3] w-full object-cover" loading="lazy" />
            <figcaption class="px-3 py-3 text-sm text-navy-900">Understand your treatment plan</figcaption>
          </figure>
          <figure class="col-span-2 overflow-hidden rounded-md bg-white">
            <img src="https://images.pexels.com/photos/8430512/pexels-photo-8430512.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Aerial view of Rovinj’s old town and Saint Euphemia Church beside the Adriatic Sea" class="aspect-[2.5/1] w-full object-cover" loading="lazy" />
            <figcaption class="flex flex-col gap-1 px-3 py-3 sm:flex-row sm:items-center sm:justify-between">
              <span class="text-sm text-navy-900">Make time for the beauty of the Adriatic</span>
              <span class="text-xs text-muted">Your free time depends on your treatment schedule</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
