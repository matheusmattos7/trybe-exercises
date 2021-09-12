import React from 'react';
import './App.css';
import pokemons from './data';
import Header from './Components/Header';
import Pokedex from './Components/Pokedex';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Pokedex pokemons={pokemons}/>
      </div>
    );
  }

}

export default App;
