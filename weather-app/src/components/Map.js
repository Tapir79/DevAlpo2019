import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { accessToken } from "../mapbox.config.js";
//import * as cafeData from '../data/cafe.json';
//import * as cafeImage from '../images/cafe.png';
import { ApiController } from "../controllers/ApiController";

/* Component wrapping the mapbox map */
class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      zoom: 14,
      latitude: -40,
      longitude: 40
    }
  };

  /* React's lifecycle method: executed when the component is mounted in the DOM tree */
  componentDidMount() {
    ApiController.getTreCoordinates().then((res, err) => {
      if (!err) {
        res.json().then((json, err) => {
          if (json && json.features) {
            const treCenter = json.features[0].center;
            this.setState({
              viewport: {
                width: window.innerWidth,
                height: window.innerHeight,
                zoom: 14,
                latitude: treCenter[1],
                longitude: treCenter[0]
              }
            });
          }
        });
      }
    });
  }

  render() {
    /* Set configurations to ReactMapGL's viewport */
    const viewport = { ...this.state.viewport };
    return (
      <div>
        <ReactMapGL
          mapStyle={this.props.mapStyleUrl}
          {...viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={accessToken}
        >
          <Marker
            key={0}
            latitude={61.4990956}
            longitude={23.7571622}
            offsetLeft={-15}
            offsetTop={-15}
          >
            <div>Hello Marker World</div>
          </Marker>
          {/* TODO 2. add multiple markers from cafeData */}
        </ReactMapGL>
      </div>
    );
  }
}

export default Map;
