<script setup lang="ts">
import PackageCard from '@/components/home/PackageCard.vue'
import { packages } from '@/data/home'
</script>

<template>
  <section class="py-14 lg:py-20" aria-labelledby="packages-title">
    <div class="container-page">
      <h2 id="packages-title" class="text-3xl text-navy-900 lg:text-4xl">Dental Treatment Packages in Croatia</h2>
      <p class="mt-2 text-muted">Explore options for crowns, dental implants, and full smile makeovers, with travel support tailored to your needs.</p>
      <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PackageCard v-for="pkg in packages" :key="pkg.title" :pkg="pkg" />
      </div>
    </div>
  </section>
</template>
