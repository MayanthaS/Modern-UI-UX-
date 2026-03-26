import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),          // ✅ React plugin (no babel override)
    tailwindcss(),    // ✅ Tailwind as Vite plugin
  ],
})
