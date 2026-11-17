
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

      <footer class="bg-stone-900 text-stone-300">
      <div
        class="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8"
      >
        <!-- Columna de enlaces -->
        <div class="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
          <h2 class="text-lg font-semibold text-white">Explora</h2>
          <RouterLink to="/galeria" class="text-sm transition hover:text-amber-300">Galería</RouterLink>
          <RouterLink to="/artista" class="text-sm transition hover:text-amber-300">Rafael Ballester Duet</RouterLink>
          <RouterLink to="/exposicion" class="text-sm transition hover:text-amber-300">La exposición</RouterLink>
        </div>

        <!-- Mapa -->
        <div class="overflow-hidden rounded-xl shadow-lg lg:col-span-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.144525746046!2d-0.5231381234899832!3d38.98919777170495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd61a206ec1dc509%3A0x996acc0e8301c4e2!2sCasa%20de%20Cultura%20de%20Xàtiva!5e0!3m2!1ses!2ses!4v1794925261513!5m2!1ses!2ses"
            title="Ubicación de la exposición"
            class="h-64 w-full border-0 md:h-72 lg:h-80"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div class="border-t border-stone-700 px-4 py-4 text-center text-xs sm:text-sm">
        <p>Projecte TFG de Mireia Juan Villa</p>
      </div>
    </footer>
  </div>
</template>