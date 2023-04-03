import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function VideoSidebar({ likes, messages, shares }) {
  // Define o estado "liked" como "true" e cria a função "handdleLike"
  const [liked, setLiked] = useState(true);

  function handdleLike() {
    // Inverte o estado "liked" com a função "setLiked"
    setLiked(!liked);
  }
  return (
    <div className="videoSidebar">
      {/* Botão "like" */}
      <div className="videoSidebar_options" onClick={handdleLike}>
        {/* Renderiza um ícone de coração vazio se "liked" for "false" e um ícone de coração preenchido se "liked" for "true" */}
        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
        {/* Exibe o número de curtidas. Se "liked" for "true", adiciona 1 à contagem de curtidas */}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      {/* Botão "chat" */}
      <div className="videoSidebar_options">
        <ChatIcon fontSize="large" />
        {/* Exibe o número de mensagens */}
        <p>{messages}</p>
      </div>
      {/* Botão "share" */}
      <div className="videoSidebar_options">
        <ShareIcon fontSize="large" />
        {/* Exibe o número de compartilhamentos */}
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
