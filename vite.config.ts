import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Ruta base para tu SPA en Vercel

  plugins: [react()],

  build: {
    outDir: 'dist',              // Carpeta de salida que Vercel espera
    sourcemap: false,            // No generar mapas para proteger código fuente
    target: 'esnext',            // Código moderno para browsers actuales
    minify: 'esbuild',           // Minificador rápido y eficiente
    chunkSizeWarningLimit: 500,  // Aviso si algún chunk es > 500 KB
    cssCodeSplit: true,          // Separar CSS para cada componente, mejora carga

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Separar dependencias en bundle vendor.js
          }
        },
        // Nombres con hash para mejor cache busting
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },

  server: {
    port: 3000,
    open: true,            // Abrir navegador automáticamente en dev
    strictPort: true,      // Fallar si el puerto está ocupado (evita confusión)
    cors: true,            // Permite peticiones cruzadas (útil en desarrollo)
    fs: {
      strict: true,        // Solo servir archivos dentro del proyecto (seguridad)
    }
  },

  resolve: {
    alias: {
      '@': '/src',          // Alias para importar carpetas con '@'
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'], // Extensiones reconocidas al importar
  },

  optimizeDeps: {
    include: ['react', 'react-dom'], // Preconstruir para acelerar arranque dev
  }
});
