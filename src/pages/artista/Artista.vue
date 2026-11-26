<script setup lang="ts">
import { artista } from '@/data/artista'
import { obras } from '@/data/Obras'

// Cambia los ids por las obras que quieras mostrar
const destacadas = obras.filter((o) => [1, 4].includes(o.id))
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-10">
    <h1 class="text-2xl font-bold md:text-4xl">{{ artista.nombre }}</h1>
    <p class="mt-1 text-muted-foreground md:text-lg">{{ artista.lema }}</p>

    <div class="mt-6 grid gap-8 md:mt-8 lg:grid-cols-5 lg:gap-12">
      <div class="flex flex-col gap-4 md:gap-6 lg:col-span-3">
        <p v-for="(parrafo, i) in artista.biografia" :key="i" class="leading-relaxed">
          {{ parrafo }}
        </p>
      </div>

      <div class="grid grid-cols-2 gap-4 lg:sticky lg:top-6 lg:col-span-2 lg:grid-cols-1 lg:self-start">
    <div v-for="obra in destacadas" :key="obra.id">
      <img
        :src="obra.imagen"
        :alt="obra.titulo"
        class="w-full rounded-lg bg-muted object-contain"
      />
      <p class="mt-1 text-xs text-muted-foreground">
        {{ obra.titulo }}
      </p>
    </div>
  </div>
    </div>
  </section>
</template>