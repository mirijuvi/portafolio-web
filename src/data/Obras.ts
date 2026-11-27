import type { Obra } from '@/data/Obra'

const base = import.meta.env.BASE_URL

export const obras: Obra[] = [
  
  {
    id: 1,
    titulo: 'Oliveres',
    descripcion: 'Descripción de la obra 1.',
    imagen:`${base}fotos-obras/obra-119.JPG`,
    tecnica: 'Acuarela',
  },
  {
    id: 2,
    titulo: 'Campanar',
    descripcion: 'Descripción de la obra 2.',
    imagen: `${base}fotos-obras/obra-113.JPG`,
    tecnica: 'Acuarela',
  },
  {
    id: 3,
    titulo: 'Casc Antic',
    descripcion: 'Descripción de la obra 3.',
    imagen:`${base}fotos-obras/obr-114.JPG`,
    tecnica: 'Acuarela',
  },
  {
    id: 4,
    titulo: 'Des de les Santes',
    descripcion: 'Descripción de la obra 3.',
    imagen:`${base}fotos-obras/obra-110.JPG`,
    tecnica: 'Acuarela',
  },
    {
    id: 5,
    titulo: 'Plaça del mercat',
    descripcion: 'Descripción de la obra 3.',
    imagen:`${base}fotos-obras/obra-118.JPG`,
    tecnica: 'Acuarela',
  },
  {
    id: 5,
    titulo: 'Plaça del mercat',
    descripcion: 'Descripción de la obra 3.',
    imagen:`${base}fotos-obras/obra-118.JPG`,
    tecnica: 'Acuarela',
  },
   {
    id: 6,
    titulo: 'Plaça del mercat',
    descripcion: 'Descripción de la obra 3.',
    imagen:`${base}fotos-obras/obra-118.JPG`,
    tecnica: 'Acuarela',
  },
]