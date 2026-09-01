// vite.config.js — replace the whole file
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 'shrimponi-website' must match your GitHub repo name exactly.
// If you rename the repo, update this to match.
export default defineConfig({
  plugins: [react()],
  base: '/shrimponi-website/',
})