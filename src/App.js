import "./App.css"; // Importa o arquivo de estilo CSS para o componente App
import Video from "./pages/Video"; // Importa o componente Video do arquivo "Video.js"

function App() {
  // Define o componente App
  return (
    <div className="App">
      <div className="app_videos">
        <Video // Cria um componente Video com várias propriedades
          likes={100}
          messages={200}
          shares={300}
          name="José"
          description="Gato goleiro"
          musica="Música épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4" // Define a URL do arquivo de vídeo
        />
        <Video // Cria outro componente Video com várias propriedades
          likes={101}
          messages={202}
          shares={303}
          name="Maria"
          description="Gato goleiro 2"
          musica="Música épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4" // Define a URL do arquivo de vídeo
        />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App; // Exporta o componente App como padrão
