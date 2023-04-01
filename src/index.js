// Importa as bibliotecas necessárias para renderizar a aplicação
import React from "react";
import ReactDOM from "react-dom/client";

// Importa o arquivo CSS que contém a estilização da aplicação
import "./index.css";

// Importa o componente principal da aplicação
import App from "./App";

// Cria um elemento raiz onde a aplicação será renderizada
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderiza o componente App na página HTML dentro do elemento raiz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
