<template>
  <section id="real-results" class="scroll-mt-24 bg-white py-6 sm:py-8" aria-labelledby="results-title">
    <div class="container-page">
      <div class="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <div>
          <h2 id="results-title" class="text-3xl text-navy-900 lg:text-4xl">Real Results</h2>
          <p class="mt-1 text-sm text-muted sm:text-base">See the transformations shared in our before-and-after gallery.</p>
        </div>
        <a href="/images/before-after-gallery.png" target="_blank" rel="noopener noreferrer" class="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-sky-700 hover:text-navy-900">
          View full gallery <span aria-hidden="true">↗</span>
        </a>
      </div>
      <figure class="mt-4 overflow-hidden rounded-lg border border-line bg-white shadow-sm">
        <img
          src="/images/before-after-gallery.png"
          alt="Dental before-and-after case gallery showing smile transformations"
          class="block h-auto w-full"
          loading="lazy"
        />
        <figcaption class="border-t border-line px-3 py-2 text-xs leading-5 text-muted sm:px-4">
          Before-and-after examples are illustrative of individual treatment outcomes. Results vary; suitability and outcomes depend on clinical assessment.
        </figcaption>
      </figure>
    </div>
  </section>
</template>
