
<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { obras } from '@/data/Obras'
import ObraCard from '@/components/ObraCard.vue'

const route = useRoute()
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-10">
    <RouterView v-if="route.params.id" />

    <div v-else>
      <h1 class="mb-6 text-2xl font-bold md:text-3xl">Galeria d'obres</h1>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ObraCard v-for="obra in obras" :key="obra.id" :obra="obra" />
      </div>
    </div>
  </section>
</template>