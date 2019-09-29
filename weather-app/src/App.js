import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map';
import { ApiController } from './controllers/ApiController';

/* Main Component of our weather-application */
class App extends Component {
  state = {
    mapCoords: [-40.0, 40.0] // coordinates default to Atlantic
  };

  /* React's lifecycle method: executed when the component is mounted in the DOM tree */
  componentDidMount() {
    ApiController.getTreCoordinates().then((res, err) => {
      if (!err) {
        res.json().then((json, err) => {
          if (json && json.features) {
            const treCenter = json.features[0].center;
            console.log(`Tampere coordinates: ${treCenter}`);
            this.setState({ mapCoords: json.features[0].center })
          }
        });
      }
    });
  };

  /* React's render method: defines what the component should render on the UI */
  render() {
    return (
      <div className="App">
        <Map coordinates={this.state.mapCoords}></Map>
      </div>
    );
  }
}

export default App;
