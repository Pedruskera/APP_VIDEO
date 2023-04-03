import React from "react";
import "./VideoFooter.css"; // Importa o estilo do componente
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic"; // Importa o ícone de música

function VideoFooter({ name, description, music }) {
  // Define o componente VideoFooter com três propriedades: name, description e music
  return (
    <div className="videoFooter">
      {" "}
      {/* Cria um container com a classe "videoFooter"*/}
      <div className="videoFooter_text">
        {" "}
        {/* Cria um container para o texto com a classe "videoFooter_text"*/}
        <h3>@{name}</h3> {/*Cria um cabeçalho com o nome de usuário*/}
        <p>{description}</p> {/*Cria um parágrafo com a descrição do vídeo*/}
        <div className="videoFooter_music">
          {" "}
          {/*Cria um container para a música com a classe "videoFooter_music"*/}
          <LibraryMusicIcon className="videoFooter_icon" />{" "}
          {/*Adiciona o ícone de música*/}
          <div className="videoFooterMusic_text">
            {" "}
            {/*Cria um container para o texto da música com a classe "videoFooterMusic_text"*/}
            <p>{music}</p> {/*Cria um parágrafo com o nome da música*/}
          </div>
        </div>
      </div>
      <img
        className="videoFooter_disc" // Adiciona a classe "videoFooter_disc" à imagem
        alt="Imagem de um disco girando" // Adiciona um texto alternativo à imagem
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png" // Define a imagem a ser exibida
      />
    </div>
  );
}

export default VideoFooter; // Exporta o componente VideoFooter como padrão
