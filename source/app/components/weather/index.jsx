import React from 'react';
import WeatherFormComponent from './weather-form';
import WeatherResultComponent from './weather-result';
import WeatherService from 'WeatherService';
import NotificationService from 'NotificationService';
import config from 'config';

export default class WeatherComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {city: '', temp: '', isLoading: false};
    }

    componentDidMount()
    {

    }

    componentWillUnmount()
    {
        // let windCanvasParent = document.getElementById('windCanvasParent');
        // console.log(windCanvasParent);
        // windCanvasParent.removeChild(windCanvasParent.firstChild);
    }

    onWeatherClick(city)
    {
        this.setState({ isLoading: true });
        WeatherService.getWeather(city)
            .then(res=> {
                let temp = res.data.main.temp;
                this.setState({ city: city, temp: temp, isLoading: false });
                // let weatherRecEvent = new CustomEvent('weather-received', { 'detail': {
                //      'city': city, 'temp': temp 
                // }});
                // document.dispatchEvent(weatherRecEvent);
                NotificationService.NotifyTemp(city, temp);
            })
            .catch(err=> {
                console.log(err)
                this.setState({ isLoading: false });
            });
    }

    render() {
        return (
            <div className="transparent">
                <h1>Get Weather</h1>
                <WeatherFormComponent onWeatherClick={this.onWeatherClick.bind(this)} />
                <br/><br/>
                { this.renderWeatherResult() }
                <div id="windCanvasParent" className="wind-canvas-parent"></div>
            </div> 
        )
    }

    renderWeatherResult() {
        let { city, temp, isLoading } = this.state;
        
        return isLoading ?  <div className="ui active inverted dimmer">
                                <div className="ui text loader">Loading</div>
                            </div> 
                            :
                             <WeatherResultComponent city={city} temp={temp}/> 
    }
}