import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'app/weather.service';
import { CityWeather } from 'app/city-weather.interface';

@Component({
  selector: 'app-city-cards',
  templateUrl: './city-cards.component.html',
  styleUrls: ['./city-cards.component.css']
})
export class CityCardsComponent implements OnInit {

  cityWeathers: CityWeather[] = [];

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.weatherService.getWeathers().subscribe(
      (response) => {
        console.log('Data updated at: ' + new Date());
        this.cityWeathers = response;
      }
    );
  }

}
