import React from "react";

//import style
import './styles/app.scss'

//adding component
import { Player, Song } from "./components";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
  