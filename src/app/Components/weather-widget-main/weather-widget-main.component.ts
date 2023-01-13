import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FetchdataServiceService } from 'src/app/fetchdata-service.service';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.scss'],
})
export class WeatherWidgetMainComponent {
  WeatherData: any;
  // DATA = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={acf38c079b941e7c1bbb5f9b3334611e}';
  //Weather API
  Url =
    'https://api.open-meteo.com/v1/forecast?latitude=48.21&longitude=16.37&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin';

  constructor(private service: FetchdataServiceService) {}

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData(): void {
    this.service.getData(this.Url).subscribe((data) => console.log(data));
  }

  setWeatherData(data: any) {
    this.WeatherData = data;
  }
}
