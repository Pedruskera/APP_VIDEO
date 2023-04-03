// Importa o React, o useRef e o useState do módulo 'react'
import React, { useRef, useState } from "react";

// Importa o arquivo CSS 'video.css'
import "./Video.css";

// Importa os componentes VideoFooter e VideoSidebar dos respectivos arquivos
import VideoFooter from "./components/Footer/VideoFooter";
import VideoSidebar from "./components/Sidebar/VideoSidebar";

// Define o componente funcional Video, que recebe props de URL, likes, messages, shares, name, description e music
function Video({ url, likes, messages, shares, name, description, music }) {
  // Cria uma referência ao elemento de vídeo por meio do hook useRef
  const videoRef = useRef(null);

  // Cria um estado para controlar se o vídeo está tocando ou pausado, por meio do hook useState
  const [play, setPlay] = useState(false);

  // Define a função que será chamada ao clicar no vídeo, para alternar entre tocar e pausar o vídeo
  function handleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  // Retorna o JSX que representa o componente Video
  return (
    <div className="video">
      {/* Renderiza o elemento de vídeo e define as propriedades 'ref', 'onClick', 'loop' e 'src' */}
      <video
        className="video_player"
        ref={videoRef}
        onClick={handleStart}
        loop
        src={url}
      ></video>
      {/* Renderiza o componente VideoFooter e passa as props 'name', 'description' e 'music' */}
      <VideoFooter name={name} description={description} music={music} />
      {/* Renderiza o componente VideoSidebar e passa as props 'likes', 'messages' e 'shares' */}
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

// Exporta o componente Video como padrão
export default Video;
