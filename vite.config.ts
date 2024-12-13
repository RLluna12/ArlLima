import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/arllima/',  // Defina isso como o caminho correto no Netlify
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

