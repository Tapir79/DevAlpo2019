// randomly generates the weather in celsius degrees between -30 and 30
export const randomWeather = () => {
    const isMinus = Math.floor((Math.random() * 10) + 1) > 5 ? 1 : -1 ;
        const randomWeather = (Math.floor((Math.random() * 30) + 1)) ;
        return randomWeather  * isMinus;    
}

export const getMapStyle = (weather) => {
    if(weather > 0){
       return 'mapbox://styles/mapbox/streets-v9'
    } else {
       return 'mapbox://styles/mapbox/light-v10'
    }
}

export const shouldGoForCoffee = (weather) => {
    return (weather < -10 || weather > 25) ?
        'Jää kotiin kahville' : 'No eiköhän mennä kahvilaan!'
}