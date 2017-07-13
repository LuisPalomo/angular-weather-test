import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdToolbarModule, MdIconModule, } from '@angular/material';
import { CityCardsComponent } from './components/city-cards/city-cards.component';
import { HttpModule } from '@angular/http';
import { WeatherService } from 'app/services/weather.service';
import { StoreModule } from '@ngrx/store';
import { weatherReducer } from './reducers/weather.reducer';
import { historyReducer } from './reducers/history.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    StoreModule.provideStore({
      weather: weatherReducer,
      history: historyReducer
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  providers: [ WeatherService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
