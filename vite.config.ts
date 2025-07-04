import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: 'https://github.com/Henriquelss/consulta-veicular-fipe',
  plugins: [
    tailwindcss(),
  ],
})