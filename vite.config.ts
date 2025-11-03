import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {ViteImageOptimizer} from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
         // Enable WebP generation for all images
         webp: {
           quality: 80, // Adjust as needed (0–100)
         },
         // Optionally convert other formats too
         jpg: {
           quality: 80,
         },
         jpeg: {
           quality: 80,
         },
         png: {
           quality: 80,
         },
       }),
  ],
})
