import axios from 'axios';
import config from 'config';

export default class WeatherService 
{
    static getWeather(city){
        let params = {
            q: city,
            appid: config.OPEN_WEATHER_API_KEY,
            units: 'imperial'
        };

        return new Promise((resolve, reject) => {
            axios.get(config.OPEN_WEATHER_URL, { params: params })
                .then((res) => resolve(res))
                .catch(err=> reject(err));
        });
    }

    static getWeatherByLocation(lat, lon) {
        let params = {
            lat: lat,
            lon: lon,
            appid: config.OPEN_WEATHER_API_KEY,
            units: 'imperial'
        };

        return new Promise((resolve, reject) => {
            axios.get(config.OPEN_WEATHER_URL, { params: params })
                .then((res) => resolve(res))
                .catch(err=> reject(err));
        });
    }    
}