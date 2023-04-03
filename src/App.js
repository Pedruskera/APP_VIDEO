import React, { useEffect, useState } from "react";
import "./App.css"; // Importa o arquivo de estilo CSS para o componente App
import Video from "./pages/Video"; // Importa o componente Video do arquivo "Video.js"
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  let maxHeight;
  if (window.innerHeight <= 800) {
    maxHeight = window.innerHeight;
  }
  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosShots = await getDocs(videosCollection);
    const videosList = videosShots.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
    document.title = "App Video"; // Altera nome da aba
  }, []);

  return (
    <div className="App" style={{ maxHeight: maxHeight + "px" }}>
      <div className="app_videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App; // Exporta o componente App como padrão
