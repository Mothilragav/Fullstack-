import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeather().subscribe(data => {
      this.weatherData = data;
    });
  }
}
