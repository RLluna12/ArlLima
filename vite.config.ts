import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Escutando em todas as interfaces de rede
    port: 5173,        // A mesma porta usada no localhost
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
