import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Base public path when served in production ("/" is root)
  base: '/',

  plugins: [
    react(), // Soporte React con JSX y Fast Refresh
  ],

  build: {
    outDir: 'dist',           // Carpeta de salida para build
    sourcemap: false,         // No generar sourcemaps para producción
    target: 'esnext',         // Objetivo de JS moderno para navegadores recientes
    minify: 'esbuild',        // Minificar con esbuild (muy rápido)
    cssCodeSplit: true,       // Separar CSS por chunks
    chunkSizeWarningLimit: 500, // Warn si chunks > 500kb (puedes ajustar)

    rollupOptions: {
      output: {
        // Divide vendor chunks por paquete para caching eficiente
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        }
      }
    }
  }
});
