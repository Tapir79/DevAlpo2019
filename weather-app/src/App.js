import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ApiController } from './controllers/ApiController';

/* Main Component of our weather-application */
class App extends Component {
  state: {};

  /* React's lifecycle method: executed when the component is mounted in the DOM tree */
  componentDidMount() {
    ApiController.getTreCoordinates().then((res, err) => {
      if (!err) {
        res.json().then((json, err) => {
          if (json && json.features) {
            const treCenter = json.features[0].center;
            console.log(`Tampere coordinates: ${treCenter}`);
          }
        });
      }
    });
  };

  /* React's render method: defines what the component should render on the UI */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
