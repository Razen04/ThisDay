import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ThisDay/",
  plugins: [react()],
  optimizeDeps: {
    include: ['swiper/react', 'swiper'],
  },
})
