
import type { Obra } from '@/data/Obra'
import obra1 from '@/assets/obras/obra-1.jpg'
import obra2 from '@/assets/obras/obra-2.jpg'
const base = import.meta.env.BASE_URL

export const obras: Obra[] = [
  {
    id: 1,
    titulo: 'Oliveres',
    descripcion: 'Descripción de la obra 1.',
    imagen: `${base}fotos-obras/obra-110.jpg`,
    tecnica: 'Acuarela',
    anio: 2018,
  },
  {
    id: 2,
    titulo: 'Título de la obra 2',
    descripcion: 'Descripción de la obra 2.',
    imagen: `${base}fotos-obras/obra-113.jpg`,
    tecnica: 'Acuarela',
    anio: 2022,
  },
]