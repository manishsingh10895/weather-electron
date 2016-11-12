import config from 'config'; 
import axios from 'axios';

export class LocationService {
    static getLocation() {
        let options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        let success = (pos) => { console.log(pos); }
        let error = (err) => { console.log(err); }

       return new Promise((resolve, reject) => {
           let params = {
               key: config.GOOGLE_API_KEY
           };
           
           axios.get(config.GOOGLE_MAP_API_URL, { params: params })
                .then(res=> resolve(res))
                .catch(err => {console.log(err)});
       });
    }
}