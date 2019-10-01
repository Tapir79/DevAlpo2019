import React, { Component } from 'react';
import './App.css';
import Container from './components/Container';

/* Main Component of our weather-application */
class App extends Component {
  state = {
    mapCoords: [-40.0, 40.0], // coordinates default to Atlantic
  };


  /* React's render method: defines what the component should render on the UI */
  render() {
    return (
      <div className="App">
      <Container />
      </div>
    );
  }
}

export default App;