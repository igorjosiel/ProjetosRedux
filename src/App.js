import logo from './logo.svg';
import React from 'react';
import './App.css';

import Media from './Components/Media';
import Soma from './Components/Soma';
import Sortear from './Components/Sorteio';
import Intervalo from './Components/Intervalo';

function App() {

  return (
    <div className="App">
      <h1>Exercício React - Redux</h1>

      <div className="linha">
        <Intervalo></Intervalo>
      </div>

      <div className="linha">
        <Media></Media>
        <Soma></Soma>
        <Sortear></Sortear>
      </div>
    </div>
  );
}

export default App;
