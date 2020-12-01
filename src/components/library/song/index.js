import React from "react";
import { playAudio } from "../../../util";

//styles
//import "./styles/_song.scss";

// eslint-disable-next-line import/no-anonymous-default-export
export default React.memo(
  ({
    song,
    songs,
    setSongs,
    isPlaying,
    setIsPlaying,
    audioRef,
    active,
    setCurrentSong,
  }) => {
    const songSelectHandler = async () => {
      await setCurrentSong(song);
      setIsPlaying(true);

      
      const newSongs = () => {
        return songs.map((newSong) => {
          if (newSong.id === song.id) {
            newSong.active = true;
            return newSong;
          } else {
            newSong.active = false;
            return newSong;
          }
        });
      };
      
      setSongs(newSongs());
      playAudio(isPlaying, audioRef);
    };

    console.log("render");

    return (
      <div
        className={`library-song ${active ? "selected" : ""}`}
        onClick={songSelectHandler}
      >
        <img src={song.cover} alt={song.name} />
        <div className="song-description">
          <h3>{song.name}</h3>
          <h4>{song.artist}</h4>
        </div>
      </div>
    );
  }
);
