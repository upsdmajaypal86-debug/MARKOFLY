import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom')) return 'vendor-react-dom'
            if (id.includes('react-router-dom') || id.includes('/react-router/')) return 'vendor-router'
            if (id.includes('framer-motion')) return 'vendor-framer-motion'
            if (id.includes('lucide-react')) return 'vendor-icons'
            if (id.includes('tailwind-merge')) return 'vendor-tailwind-merge'
            if (id.includes('react')) return 'vendor-react'
            return 'vendor'
          }
        }
      }
    }
  }
})
