
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex min-h-screen flex-col font-['Poppins',sans-serif]">
    <header class="sticky top-0 z-50 bg-stone-900 shadow-md">
      <nav 
      class="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8"
      >
        <RouterLink to="/" class="text-xl font-bold tracking-wide text-white transition hover:text-amber-300 md:text-2xl">
        Passions Reals
        </RouterLink>

        <div class="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm md:gap-x-8 md:text-base">
          <RouterLink to="/galeria" 
          active-class="text-amber-300 underline underline-offset-8"
            class="text-white transition hover:text-amber-300"
          >Galeria d'obres</RouterLink>
          <RouterLink to="/artista" 
          active-class="text-amber-300 underline underline-offset-8"
            class="text-white transition hover:text-amber-300"
          >Rafael Ballester Duet</RouterLink>
          <RouterLink to="/exposicion" 
          active-class="text-amber-300 underline underline-offset-8"
            class="text-white transition hover:text-amber-300"
          >Exposició</RouterLink>
        </div>
      </nav>
    </header>

    <main class="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 md:py-10 lg:px-8 lg:py-12">
      <RouterView />
    </main>

    <footer class="bg-neutral-900 text-neutral-100">
  <div
    class="mx-auto grid max-w-6xl gap-4 px-4 py-6 md:grid-cols-2 md:items-center md:gap-8"
  >
    <div class="flex flex-col gap-1">
      <h2 class="text-base font-bold">Explora</h2>
      <RouterLink to="/galeria" class="text-sm hover:underline">Galería</RouterLink>
      <RouterLink to="/artista" class="text-sm hover:underline">Rafael Ballester Duet</RouterLink>
      <RouterLink to="/exposicion" class="text-sm hover:underline">La exposición</RouterLink>
    </div>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.144525746046!2d-0.5231381234899832!3d38.98919777170495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd61a206ec1dc509%3A0x996acc0e8301c4e2!2sCasa%20de%20Cultura%20de%20Xàtiva!5e0!3m2!1ses!2ses!4v1794925261513!5m2!1ses!2ses"
      class="h-32 w-full rounded-lg border-0 md:h-36 hidden md:block"
      loading="lazy"
      title="Mapa de la Casa de Cultura de Xàtiva"

      
    ></iframe>
  </div>

  <div class="border-t border-neutral-700 py-2 text-center text-xs text-neutral-400">
    Projecte TFG de Mireia Juan Villa
  </div>
</footer>
  </div>
</template>