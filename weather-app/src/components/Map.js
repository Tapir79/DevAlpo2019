import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { accessToken } from "../mapbox.config.js";
import * as cafeData from "../data/cafe.json";
import * as cafeImage from "../images/cafe.png";
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
          {/* looping the cafeData */}
          {cafeData.features.map(cafe => (
            /* Marker Pin wrapper */
            <Marker
              key={cafe.properties.ID}
              latitude={cafe.geometry.coordinates[0]}
              longitude={cafe.geometry.coordinates[1]}
              offsetLeft={-15}
              offsetTop={-37}
            >
              <button
                onClick={event => {
                  event.preventDefault();
                  this.setState({ selectedCafe: cafe });
                }}
              >
                <img src={cafeImage} alt={`${cafe.properties.name}`} />
              </button>
            </Marker>
          ))}
        </ReactMapGL>
      </div>
    );
  }
}

export default Map;
