
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Obra } from '@/data/Obra'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

defineProps<{ obra: Obra }>()
</script>

<template>
  <RouterLink :to="{ name: 'obra', params: { id: obra.id } }">
    <Card class="overflow-hidden transition hover:shadow-lg">
      <img
        :src="obra.imagen"
        :alt="obra.titulo"
        class="h-64 w-full bg-muted object-contain p-2 sm:h-56 lg:h-64"
      />
      <div class="flex flex-col gap-2 p-4">
        <h2 class="text-lg font-semibold">{{ obra.titulo }}</h2>
        <Badge variant="secondary" class="w-fit">{{ obra.tecnica }}</Badge>
      </div>
    </Card>
  </RouterLink>
</template>