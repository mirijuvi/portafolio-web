<script setup lang="ts">
import { artista } from '@/data/artista'
</script>


<template>
    <h1>Página del artista</h1>

      <section class="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-10">
    <h1 class="text-2xl font-bold md:text-4xl">{{ artista.nombre }}</h1>
    <p class="mt-1 text-muted-foreground md:text-lg">{{ artista.lema }}</p>

    <div class="mt-6 flex flex-col gap-4 md:mt-8 md:max-w-3xl md:gap-6">
      <p v-for="(parrafo, i) in artista.biografia" :key="i" class="leading-relaxed">
        {{ parrafo }}
      </p>
    </div>
  </section>

</template>