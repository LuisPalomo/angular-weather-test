import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'app/services/weather.service';
import { CityWeather } from 'app/city-weather.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-city-cards',
  templateUrl: './city-cards.component.html',
  styleUrls: ['./city-cards.component.css']
})
export class CityCardsComponent implements OnInit {

  cityWeathers: CityWeather[] = [];

  constructor(
    private weatherService: WeatherService,
    private store: Store<any>
  ) {
    store.select('weather')
      .map(weather => weather as CityWeather[])
      .subscribe(weather => this.cityWeathers = weather);
  }

  ngOnInit() {
    this.weatherService.getWeathers().subscribe(
      (response) => {
        this.store.dispatch({ type: 'UPDATE_WEATHER', payload: response });
        this.store.dispatch({ type: 'ADD_TO_HISTORY', payload: response });
        console.log('Data updated at: ' + new Date());
      }
    );
  }

}
