import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ApiController } from './controllers/ApiController';

class App extends Component {
  state: {};

  componentDidMount() {
    ApiController.getMapCoordinates().then((res, err) => {
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
