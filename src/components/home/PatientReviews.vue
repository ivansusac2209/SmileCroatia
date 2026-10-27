<template>
  <section id="patient-reviews" class="scroll-mt-24 bg-white py-12 lg:py-16" aria-labelledby="reviews-title">
    <div class="container-page">
      <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p class="text-xs font-semibold tracking-[0.15em] text-muted">PATIENT EXPERIENCES</p>
          <h2 id="reviews-title" class="mt-2 text-3xl text-navy-900 lg:text-4xl">What our patients say</h2>
          <p class="mt-2 max-w-xl leading-relaxed text-muted">Choosing dental care abroad is personal. Explore original feedback at its source before deciding what is right for you.</p>
        </div>
        <a href="https://www.google.com/search?q=SmileCroatia+Google+reviews" target="_blank" rel="noopener noreferrer" class="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-navy-800 hover:text-navy-700">
          See reviews on Google <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div class="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <article v-for="item in ['Original feedback', 'Patient experiences', 'Treatment journey', 'Clinic experience', 'Travel experience']" :key="item" class="flex min-h-44 flex-col border border-line bg-white p-4">
          <div class="flex items-center gap-2">
            <span class="flex size-8 items-center justify-center rounded-full bg-surface text-sm font-semibold text-navy-800">G</span>
            <div>
              <h3 class="text-sm font-semibold text-navy-900">{{ item }}</h3>
              <p class="text-xs text-muted">Read the original source</p>
            </div>
          </div>
          <p class="mt-4 flex-1 text-sm leading-6 text-muted">We link to original reviews rather than publishing unverified quotes or ratings here.</p>
          <a href="https://www.google.com/search?q=SmileCroatia+Google+reviews" target="_blank" rel="noopener noreferrer" class="mt-3 text-xs font-semibold text-navy-800 underline underline-offset-4">View on Google ↗</a>
        </article>
      </div>
    </div>
  </section>
</template>
