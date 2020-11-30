import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

//styles
import "./styles/_player.scss";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  songs,
  currentSong,
  setCurrentSong,
  timeUpdateHandler,
  songInfo,
  setSongInfo,
  audioRef,
  isPlaying,
  setIsPlaying,
}) => {
  //state

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
        audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[(currentSongX - 1) % songs.length]);
      audioRef.current.play();
    } else if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentSongX + 1) % songs.length]);
      audioRef.current.play();
    }
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{getTime(songInfo.duration)}</p>
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
      ></audio>
    </div>
  );
};
