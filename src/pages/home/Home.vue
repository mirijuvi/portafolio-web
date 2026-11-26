<!-- src/pages/home/Home.vue -->
<script setup lang="ts">
import Galeria from '@/pages/galeria/Galeria.vue'
import Artista from '@/pages/artista/Artista.vue'
import Expo from '@/pages/exposicion/Expo.vue'
</script>

<template>
  
   <section id="artista">
      <Artista />
    </section>


  <div class="space-y-12">
    <section id="galeria">
      <Galeria />
    </section>

   
    <section id="exposicio">
      <Expo />
    </section>
  </div>
</template>