import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CityWeather } from 'app/city-weather.interface';
import 'rxjs/add/operator/map';

/** OpenWeatherMap City IDs for Santiago, Buenos Aires, Lima and Sao Paulo */
const IDS: number[] = [3871336, 3435910, 3936456, 3448439];
/** OpenWeatherMap url */
const URL = 'http://api.openweathermap.org/data/2.5';
/** OpenWeatherMap get temperatures end point */
const GET_TEMPERATURES_EP = '/group';
/** OpenWeatherMap api key */
const API_KEY = 'd326ccdd0d82fef27af9588c13b12668';
/** 3 minutes (in miliseconds) */
const THREE_MINS = 180000;

@Injectable()
export class WeatherService {

  constructor(
    private http: Http
  ) { }

  /**
   * Retrieves the weather of several cities at every given time-interval
   * @param idList list of city ids to search for, by default it uses IDS constant
   * @param interval time in ms between calls
   */
  getWeathers(idList = IDS, interval = THREE_MINS): Observable<CityWeather[]> {
    const params = new URLSearchParams();
    // Set the api key
    params.set('APPID', API_KEY);
    // Set the city id list to search for
    params.set('id', idList.join(','));
    params.set('units', 'metric');

    return new Observable(observer => {
      // Function that retrieves the data from the api 
      // and triggers the next of the observable
      const func = () => {
        this.http.get(URL + GET_TEMPERATURES_EP, { search: params })
          .map(response => response.json().list as CityWeather[])
          .subscribe(cityWeather => observer.next(cityWeather));
      };
      // Initial call
      func();
      // Get the wheather every time interval
      setInterval(func, interval);
    });


  }

}
