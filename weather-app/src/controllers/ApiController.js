import { accessToken } from '../mapbox.config.js';
const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Tampere.json?access_token=${accessToken}`;

export const ApiController = {
  getMapCoordinates() {
    const request = new Request(mapBoxUrl, {
      method: 'GET',
      headers: new Headers({
        'Content-type': 'application/json'
      })
    });

    return fetch(request);
  }
};
