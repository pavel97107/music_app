import React from "react";
//import style
import './styles/app.scss'
//adding component
import { Player, Song } from "./components";
//import data(music)
import data from './util'

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
  