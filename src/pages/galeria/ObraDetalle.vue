
<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowLeft } from '@lucide/vue'
import { obras } from '@/data/Obras'
import { Button } from '@/components/ui/button'

const props = defineProps<{ id: string }>()

const obra = computed(() => obras.find((o) => o.id === Number(props.id)))
</script>

<template>
  <div v-if="obra" class="flex flex-col gap-6">
    <RouterLink to="/galeria">
      <Button variant="outline"><ArrowLeft /> Tornar a la galeria</Button>
    </RouterLink>

    <div class="grid gap-6 md:grid-cols-2 md:gap-10">
      <img :src="obra.imagen" :alt="obra.titulo" class="w-full rounded-lg bg-muted object-contain" />
      <div class="flex flex-col gap-3">
        <h1 class="text-2xl font-bold md:text-3xl">{{ obra.titulo }}</h1>
        <p class="text-sm text-muted-foreground">{{ obra.tecnica }} · {{ obra.anio }}</p>
        <p class="leading-relaxed">{{ obra.descripcion }}</p>
      </div>
    </div>
  </div>

  <p v-else>No s'ha trobat l'obra.</p>
</template>