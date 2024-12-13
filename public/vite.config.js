import { defineConfig } from 'vite';

export default defineConfig({
  base: './ArlLima', // Configuração de base URL para arquivos estáticos no Netlify
  build: {
    outDir: 'dist', // Diretório de saída para build (geralmente 'dist')
  },
});
