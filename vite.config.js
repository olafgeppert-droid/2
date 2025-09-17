import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components'),
      'styles': path.resolve(__dirname, './src/styles'),
    },
  },
  server: {
    port: 5173, // beliebiger Port, z.B. 5173
    open: true, // öffnet automatisch im Browser
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
