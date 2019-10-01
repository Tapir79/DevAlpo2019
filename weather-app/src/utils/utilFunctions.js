// randomly generates the weather in celsius degrees between -30 and 30
export const randomWeather = () => {
    const isMinus = Math.floor((Math.random() * 10) + 1) > 5 ? 1 : -1 ;
    const randomWeather = (Math.floor((Math.random() * 30) + 1)) ;
    return randomWeather  * isMinus;    
}

// returns a summer like mapstyle if tempreature is above 0
// returns a winter like mapstyle if temperature is below or equal to 0
export const getMapStyle = (temperature) => {
  return temperature > 0 ? 'mapbox://styles/mapbox/streets-v9' : 'mapbox://styles/mapbox/light-v10'
}