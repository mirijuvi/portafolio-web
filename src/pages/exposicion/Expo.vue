<script setup lang="ts">
import { MapPin, Calendar, Clock } from '@lucide/vue'
import { exposicion } from '@/data/exposicion'
import { creditos } from '@/data/creditos'
import { Card } from '@/components/ui/card'
</script>

<template>
    <h1>Página de la exposición</h1>

     <section class="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-10">
    <h1 class="text-2xl font-bold md:text-4xl">{{ exposicion.titulo }}</h1>

    <div class="mt-6 grid gap-4 md:mt-8 md:grid-cols-3 md:gap-6">
      <Card class="flex gap-3 p-4">
        <MapPin class="size-6 shrink-0" />
        <div>
          <h2 class="font-semibold">{{ exposicion.lugar }}</h2>
          <p class="text-sm text-muted-foreground">{{ exposicion.direccion }}</p>
        </div>
      </Card>

      <Card class="flex gap-3 p-4">
        <Calendar class="size-6 shrink-0" />
        <div>
          <h2 class="font-semibold">Fechas</h2>
          <p class="text-sm text-muted-foreground">{{ exposicion.fechas }}</p>
        </div>
      </Card>

      <Card class="flex gap-3 p-4">
        <Clock class="size-6 shrink-0" />
        <div>
          <h2 class="font-semibold">Horario</h2>
          <p class="text-sm text-muted-foreground">{{ exposicion.horario }}</p>
        </div>
      </Card>
    </div>

    <h2 class="mt-10 text-xl font-bold md:text-2xl">Créditos</h2>
    <div class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="c in creditos" :key="c.rol" class="border-l-2 pl-3">
        <p class="text-sm text-muted-foreground">{{ c.rol }}</p>
        <p class="font-medium">{{ c.nombre }}</p>
      </div>
    </div>
  </section>

</template>