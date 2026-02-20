import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Explicit relative path ensures assets work in subdirectories
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});