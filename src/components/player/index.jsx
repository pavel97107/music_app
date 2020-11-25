import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

//styles
import "./styles/_player.scss";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ currentSong, isPlaying, setIsPlaying }) => {
  //state
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  });

  const audioRef = useRef(null);

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

  const timeUpdateHandler = ({ target }) => {
    const current = getTime(target.currentTime);
    const duration = getTime(target.duration);
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{songInfo.currentTime}</p>
        <input type="range" />
        <p>{songInfo.duration}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          className="play"
          onClick={playSongHandler}
          size="2x"
          icon={faPlay}
        />
        <FontAwesomeIcon
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
