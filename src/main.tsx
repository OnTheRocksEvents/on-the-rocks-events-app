// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Estilos globales
import './App.css'; // Puedes cambiar por './styles/global.css' si prefieres centralizarlo

// Punto de montaje
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('❌ No se encontró el elemento raíz con id="root" en index.html');
}

// Render de la App
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
