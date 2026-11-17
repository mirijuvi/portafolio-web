
import type { Obra } from '@/data/Obra'
import obra1 from '@/assets/obras/obra-1.jpg'
import obra2 from '@/assets/obras/obra-2.jpg'

export const obras: Obra[] = [
  {
    id: 1,
    titulo: 'Oliveres',
    imagen: obra1,
    tecnica: 'Acuarela',
    año: 2018
  },
  {
    id: 2,
    titulo: 'Título de la obra 2',
    descripcion: 'Descripción de la obra 2.',
    imagen: obra2,
    tecnica: 'Acuarela',
    año: 2022,
  },
]