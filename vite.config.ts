import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react/', // GitHub Pages에서 사용될 경로
  plugins: [react()],
})
