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

@Injectable()
export class WeatherService {

  constructor(
    private http: Http
  ) { }

  /**
   * Retrieves the weather of several cities
   * @param idList list of city ids to search for, by default it uses IDS constant
   */
  getWeathers(idList = IDS): Observable<CityWeather[]> {
    const params = new URLSearchParams();
    // Set the api key
    params.set('APPID', API_KEY);
    // Set the city id list to search for
    params.set('id', idList.join(','));
    params.set('units', 'metric');

    return this.http.get(URL + GET_TEMPERATURES_EP, { search: params })
      .map(response => response.json().list as CityWeather[]);
  }

}
