import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',          // Carpeta estándar para producción
    sourcemap: false,        // Desactivar sourcemaps en producción para seguridad
    target: 'esnext',        // Compatibilidad con browsers modernos
    minify: 'esbuild',       // Minificación rápida y eficiente por defecto
    chunkSizeWarningLimit: 500, // Límite para advertencias sobre chunks grandes (KB)
  },
  server: {
    port: 3000,              // Puerto para desarrollo local
    open: true,              // Abrir navegador automáticamente en dev
  },
  resolve: {
    alias: {
      '@': '/src',           // Alias para importaciones limpias desde /src
    },
  },
});
