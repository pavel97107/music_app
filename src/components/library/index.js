import React from "react";
import LibrarySong from "./song";

//styles
import "./styles/_library.scss";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ songs, setSongs,isPlaying, audioRef, setCurrentSong }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
          isPlaying={isPlaying}
            setCurrentSong={setCurrentSong}
            songs={songs}
            active={song.active}
            song={song}
            key={song.id}
            setSongs={setSongs}
            audioRef={audioRef}
          />
        ))}
      </div>
    </div>
  );
};
