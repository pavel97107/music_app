import React, { useState, useRef } from "react";
//import style
import "./styles/app.scss";
//adding component
import { Player, Song, Library, Nav } from "./components";
//import data(music)
import data from "./util";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  //audi elemement
  const audioRef = useRef(null);
  //meta data audio
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = ({ target }) => {
    const current = target.currentTime;
    const duration = target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        songs={songs}
        songInfo={songInfo}
        timeUpdateHandler={timeUpdateHandler}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <Library
        libraryStatus={libraryStatus}
        isPlaying={isPlaying}
        songs={songs}
        audioRef={audioRef}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
}

export default App;
