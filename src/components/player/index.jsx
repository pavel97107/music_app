import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

//styles
import "./styles/_player.scss";
import { playAudio } from "../../util";
import song from "../song";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  timeUpdateHandler,
  songInfo,
  setSongInfo,
  audioRef,
  isPlaying,
  setIsPlaying,
}) => {
  useEffect(() => {
    const newSongs = () => {
      return songs.map((newSong) => {
        if (newSong.id === currentSong.id) {
          newSong.active = true;
          return newSong;
        } else {
          newSong.active = false;
          return newSong;
        }
      });
    };
    setSongs(newSongs());
  }, [currentSong]);

  console.log('render player')

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = ({ target }) => {
    audioRef.current.currentTime = target.value;
    setSongInfo({ ...songInfo, currentTime: target.value });
  };

  const skipTrackHandler = async (direction) => {
    const currentSongX = songs.findIndex((song) => song.id === currentSong.id);

    if (direction === "skip-back") {
      if ((currentSongX - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        playAudio(isPlaying, audioRef);
        return;
      }
      await setCurrentSong(songs[(currentSongX - 1) % songs.length]);
    }
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentSongX + 1) % songs.length]);
    }

    setIsPlaying(true);
    playAudio(isPlaying, audioRef);
  };

  const stylesTrackAnim = {
    transform: `translateX(${songInfo.animationPercantage}%)`,
  };
  const stylesTrackGradient = {
    background: `linear-gradient(to right, ${currentSong.color[1]}, ${currentSong.color[0]})`,
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div className="track" style={stylesTrackGradient}>
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div style={stylesTrackAnim} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          className="play"
          onClick={playSongHandler}
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={() => skipTrackHandler("skip-forward")}
      ></audio>
    </div>
  );
};
