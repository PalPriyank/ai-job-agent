import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server:  {
    proxy: {
      '/api': {
        target: 'https://jobs-job-api.mwwnextappdev-us.monster-next.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/jobs-job-api'),
      },
      '/apply': {
        target: 'https://job-applies-apply-service.mwwnextappdev-us.monster-next.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/apply/, '/job-applies-apply-service'),
      },
      '/my-api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/my-api/, '/api'),
      },
      '/ai-api': {
        target: 'https://ai-interviewer-livid.vercel.app',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/ai-api/, '/api'),
      }
      
    },
  },
});
