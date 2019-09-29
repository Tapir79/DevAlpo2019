import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import { accessToken } from '../mapbox.config.js';

/* Component wrapping the mapbox map */
class Map extends Component {
  state = {
    mapConfigs: {
      width: window.innerWidth,
      height: window.innerHeight,
      zoom: 3
    }
  };

  render() {
    /* Set configurations to ReactMapGL's viewport */
    const coordinates = this.props.coordinates;
    const viewPort = {...this.state.mapConfigs, longitude: coordinates[0], latitude: coordinates[1] };
    
    return (
      <ReactMapGL
        { ...viewPort }
        onViewPortChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={accessToken}/>
    );
  }
};

export default Map;
