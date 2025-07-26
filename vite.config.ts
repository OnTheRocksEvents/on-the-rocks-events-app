import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],

  build: {
    outDir: 'dist',
    sourcemap: false,          // Evitar exposición de código fuente en producción
    target: 'esnext',          // Para browsers modernos, reduce tamaño de bundle
    minify: 'esbuild',         // Minificador rápido y eficiente
    chunkSizeWarningLimit: 500,
    cssCodeSplit: true,        // Optimiza separación CSS por componente
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor'; // Separar vendor bundle
        }
      }
    }
  },

  server: {
    port: 3000,
    open: true,
    strictPort: true,          // Error si puerto ocupado, evita abrir otro aleatorio
    cors: true,               // Para desarrollo con APIs externas sin problemas
  },

  resolve: {
    alias: {
      '@': '/src',
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
  },
});
