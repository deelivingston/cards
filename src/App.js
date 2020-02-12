import React from 'react';
import './App.css';

class SearchBar extends React.Component {
  render(){
    return (
        <div> Placeholder </div>
    );
  }
}

function Card() {
  return (
      <div>card 1</div>
  );
}

class CardTable extends React.Component {
  render() {
    return (
        <div>
        <div> Select from these beauties:</div>
        <Card />
        </div>
    );
  }
}

const CARDS = [
  {
    "id": 100,
    "name": "Red Logo",
    "artist": "Debra",
    "thumbnail": "redlogo192.png"
  },
  {
    "id": 101,
    "name": "Blue Logo",
    "artist": "Debra",
    "thumbnail": "logo192.png"
  }
];

class App extends React.Component {
  render() {
    return (
        <div>
          <SearchBar />
          <CardTable cards={CARDS}/>
        </div>
    );
  }
}

export default App;
