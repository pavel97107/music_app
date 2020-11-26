import React from "react";

//styles
//import "./styles/_song.scss";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ song }) => {
  return (
    <div className="library-song">
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};
