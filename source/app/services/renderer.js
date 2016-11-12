import { ipcRenderer } from 'electron';
import { WeatherService } from './weather';
import { NotificationService } from './notification';

console.log("renderer");

ipcRenderer.on('tray-click', (e,args)=> {
    console.log(args.city);
});