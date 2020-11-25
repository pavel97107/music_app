import React, { useState } from "react";
//import style
import "./styles/app.scss";
//adding component
import { Player, Song } from "./components";
//import data(music)
import data from "./util";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
