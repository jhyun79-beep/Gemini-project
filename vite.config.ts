import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Using relative base path for better compatibility with preview and GH Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});