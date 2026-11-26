import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/home/Home.vue'
import MainLayout from '@/layouts/mainLayout.vue'
import Artista from '@/pages/artista/Artista.vue'
import ObraDetalle from '@/pages/galeria/ObraDetalle.vue'
import Galeria from '@/pages/galeria/Galeria.vue'
import Expo from '@/pages/exposicion/Expo.vue'


export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        { path: '', name: 'home', component: Home },
        {
          path: 'galeria',
          name: 'galeria',
          component: Galeria,
          children: [
            { path: ':id', name: 'obra', component: ObraDetalle, props: true },
          ],
        },
        { path: 'artista', name: 'artista', component: Artista },
        { path: 'exposicion', name: 'exposicion', component: Expo },
      ],
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})