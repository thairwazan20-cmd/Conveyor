import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Rutas relativas: el build funciona en la raíz del dominio o en una subcarpeta
  base: './',
  plugins: [react()],
});
