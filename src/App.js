import React, { useState, useRef } from "react";
//import style
import "./styles/app.scss";
//adding component
import { Player, Song, Library, Nav } from "./components";
//import data(music)
import data from "./data";

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
    animationPercantage: 0,
  });

  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = ({ target }) => {
    const current = target.currentTime;
    const duration = target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animationPercantage = Math.round(
      (roundedCurrent / roundedDuration) * 100
    );
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animationPercantage: animationPercantage,
    });
  };

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        songs={songs}
        setSongs={setSongs}
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
        setIsPlaying={setIsPlaying}
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
