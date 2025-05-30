import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/NUCAI2025/', // Cambia esto si tu repo tiene otro nombre
  plugins: [react()],
});
