import { accessToken } from '../mapbox.config.js';
const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Tampere.json?access_token=${accessToken}`;

/* Controller for creating HTTP requests to REST APIs */
export const ApiController = {
  /* Function for getting Tampere coordinates from MapBox */
  getTreCoordinates() {
    const request = new Request(mapBoxUrl, {
      method: 'GET',
      headers: new Headers({
        'Content-type': 'application/json'
      })
    });

    return fetch(request);
  }
};
