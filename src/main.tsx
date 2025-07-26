// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importa tu archivo global de estilos (ajusta ruta si necesario)
import './App.css'; 

// Inicializa Sentry (monitoreo de errores)
import './sentry';

// Busca el elemento raíz donde montaremos React
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('❌ Elemento raíz con id="root" no encontrado en index.html');
}

// Crea la raíz React y renderiza la app dentro de <React.StrictMode>
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
