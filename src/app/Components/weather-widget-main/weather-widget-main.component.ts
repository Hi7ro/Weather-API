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
  Url: string =
    'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=acf38c079b941e7c1bbb5f9b3334611e';

  constructor(private service: FetchdataServiceService) {}

  ngOnInit() {
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData(): void {
    this.service.getData(this.Url).subscribe(data => {
      this.WeatherData = data;
      console.log(data);
    });
    
  }

  setWeatherData(data: any) {
    this.WeatherData = data;



  }
}
