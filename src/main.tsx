// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; // O usa './styles/global.css' si tienes centralizado

// Sentry para monitoreo de errores (debe estar inicializado antes de render)
import './sentry';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('❌ Elemento raíz con id="root" no encontrado en index.html');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
