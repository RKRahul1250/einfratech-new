import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './',  // Ensures correct file paths when deployed
  plugins: [
    react(),
    tailwindcss(),
  ],
})
