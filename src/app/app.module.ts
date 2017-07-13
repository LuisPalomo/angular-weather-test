import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdToolbarModule, MdIconModule, } from '@angular/material';
import { CityCardsComponent } from './city-cards/city-cards.component';
import { HttpModule } from '@angular/http';
import { WeatherService } from 'app/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    CityCardsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    HttpModule,
  ],
  providers: [ WeatherService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
