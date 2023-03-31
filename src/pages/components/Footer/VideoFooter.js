import React from "react";
import "./videoFooter.css";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { MusicNoteOutlined } from "@mui/icons-material";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@Pedro Augusto</h3>
        <p>Descrição</p>
        <div className="videoFooter_music">
          <LibraryMusicIcon className="videoFooter_icon"/>
          <div className="videoFooterMusic_text">
          <p>Titulo da musica</p>
          </div>
          
        </div>
      </div>
      <img 
        className="videoFooter_disc"
        alt="Imagem de um disco girando" 
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"    
      />
    </div>
  );
}

export default VideoFooter;
