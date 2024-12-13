import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://arllima.netlify.app/', // ou o caminho relativo onde o site será hospedado
})
