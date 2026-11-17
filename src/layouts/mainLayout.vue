
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <header class="border-b">
      <nav class="mx-auto flex max-w-6xl items-center justify-between p-4">
        <RouterLink to="/" class="text-lg font-bold">'Passions Reals'</RouterLink>

        <div class="flex gap-4 text-sm">
          <RouterLink to="/galeria" class="hover:underline">Galería</RouterLink>
          <RouterLink to="/artista" class="hover:underline">Rafael Ballester Duet</RouterLink>
          <RouterLink to="/exposicion" class="hover:underline">La exposición</RouterLink>
        </div>
      </nav>
    </header>

    <main class="flex-1">
      <RouterView />
    </main>

    <footer class="border-t p-4 text-center text-sm text-muted-foreground">
      Créditos y datos de contacto
    </footer>
  </div>
</template>