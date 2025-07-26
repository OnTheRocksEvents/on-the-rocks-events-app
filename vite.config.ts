import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],

  build: {
    outDir: 'dist',
    sourcemap: false,              // Evita exponer código fuente en producción
    target: 'esnext',              // Browser modernos, bundle más pequeño
    minify: 'esbuild',             // Minificador rápido y eficiente
    chunkSizeWarningLimit: 500,    // Alerta si algún chunk > 500 KB
    cssCodeSplit: true,            // Optimiza CSS por componente
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor'; // Bundle separado para dependencias externas
        },
        // Mantener nombres de chunks legibles para debugging y cache busting óptimo
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },

  server: {
    port: 3000,
    open: true,                   // Auto abrir navegador al iniciar dev server
    strictPort: true,             // Error si puerto ocupado, para evitar usar otro
    cors: true,                  // Habilita CORS para facilitar desarrollo con APIs externas
    fs: {
      strict: true,              // Permite servir solo archivos dentro del proyecto para seguridad
    }
  },

  resolve: {
    alias: {
      '@': '/src',               // Alias para importaciones limpias
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],  // Facilita resolver estas extensiones
  },

  optimizeDeps: {
    // Para acelerar arranque preconstruyendo estas dependencias
    include: ['react', 'react-dom']
  }
});
