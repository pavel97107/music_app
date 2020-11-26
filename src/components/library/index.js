import React from "react";
import LibrarySong from "./song";

//styles
import './styles/_library.scss'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ songs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong song={song} />
        ))}
      </div>
    </div>
  );
};
