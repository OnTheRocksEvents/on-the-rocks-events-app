import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Servir assets desde raíz

  build: {
    outDir: 'dist',                // Carpeta estándar producción
    sourcemap: false,              // Mejor seguridad en prod desactivando sourcemaps
    target: 'esnext',              // Compatibilidad con navegadores modernos
    minify: 'esbuild',             // Minificación rápida por defecto
    chunkSizeWarningLimit: 500,    // Aviso para chunks grandes (KB)
  },

  server: {
    port: 3000,                   // Puerto desarrollo local
    open: true,                   // Abrir navegador automáticamente
    strictPort: true,             // Error si puerto 3000 ocupado, para evitar abrir otro
  },

  resolve: {
    alias: {
      '@': '/src',                // Alias limpio para importar desde src
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'], // Opcional, mejora importaciones
  },
});
