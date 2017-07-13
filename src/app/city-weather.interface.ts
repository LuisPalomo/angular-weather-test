export interface CityWeather {
  coord: CityWeather.Coord;
  weather: CityWeather.Weather;
  base?: string;
  main: CityWeather.Main;
  wind?: CityWeather.Wind;
  clouds?: CityWeather.Clouds;
  rain?: CityWeather.Rain;
  snow?: CityWeather.Snow;
  dt: number;
  sys: CityWeather.Sys;
  id: number;
  name: string;
  cod?: number;
}

namespace CityWeather {
  export interface Coord {
    lon: number;
    lat: number;
  }
  export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  export interface Main {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    sea_level?: number;
    grnd_level?: number;
  }
  export interface Wind {
    speed: number;
    deg?: number;
  }
  export interface Clouds {
    all: number;
  }
  export interface Rain {
    '3h': number;
  }
  export interface Snow {
    '3h': number;
  }
  export interface Sys {
    type: number;
    id: number;
    message: string;
    country: string;
    sunrise: string;
    sunset: string;
  }
}
