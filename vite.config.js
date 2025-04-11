import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/onyxtech/', // Match your GitHub repo name
  build: {
    outDir: 'build', // This changes output directory to 'build'
  }
})