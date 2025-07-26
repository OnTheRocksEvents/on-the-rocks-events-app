import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; // Cambia a './styles/global.css' si prefieres centralizar estilos

const root = document.getElementById('root');

if (!root) {
  throw new Error('❌ Elemento raíz con id="root" no encontrado en index.html');
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
