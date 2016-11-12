import { ipcRenderer } from 'electron';
import { LocationService } from './location';
import WeatherService from 'WeatherService';

ipcRenderer.on('tray-click', (e,args)=> {
    console.log(args);
    WeatherService.getWeather(args.city)
        .then(res => { NotificationService.NotifyTemp('Your local Temp', res.data.main.temp); })
        .catch(err=> console.log(err));
});

export default class NotificationService 
{
    static NotifyTemp(city, temp) {
        let notiication = new Notification(city, {
            body: temp + ' F'
        });
    }
}