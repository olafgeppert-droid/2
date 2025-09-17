import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/paedagogische-fachkraft/', // wichtig für GitHub Pages
  build: {
    outDir: 'dist',
  },
})
