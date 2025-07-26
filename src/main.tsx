// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

// Verifica que el contenedor #root exista en el DOM antes de renderizar
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('❌ No se encontró el elemento raíz con id="root" en index.html');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
