import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env':process.env
  },
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/users': 'http://localhost:3001',
      '/purchases': 'http://localhost:3001',
      '/items': 'http://localhost:3001'
    }
  }
})

