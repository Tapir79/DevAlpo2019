import React, { Component } from 'react';
import Header from './Header';
import Map from './Map';
import { randomWeather,getMapStyle } from '../utils/utilFunctions';



class Container extends Component {

    state = {
        weather: 0,
        mapStyleUrl: 'mapbox://styles/mapbox/streets-v9'
    }

    componentDidMount() {
        this.setState({
            weather: randomWeather()
        })       
    }

    render() {
        return (
            <div>
                <Header weather={this.state.weather}   />
                <Map mapStyleUrl={getMapStyle(this.state.weather)} />
            </div>
        )
    }
}

export default Container;



