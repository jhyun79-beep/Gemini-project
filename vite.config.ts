import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '', // Empty string ensures assets are linked relatively (e.g. "assets/...")
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});