import React from "react";

//styles
import "./styles/_song.scss";

// eslint-disable-next-line import/no-anonymous-default-export
export default React.memo(({ currentSong, animationPercantage }) => {
  const rotateVariable = Math.round(animationPercantage * 3.6);

  return (
    <div className="song-container">
      <img
        style={{ transform: `rotate(${rotateVariable}deg)` }}
        src={currentSong.cover}
        alt={currentSong.name}
      />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
});
