import { Controller, Get, Query } from '@nestjs/common';
import { WeatherForecastService } from './weather-forecast.service';

@Controller('weather-forecast')
export class WeatherForecastController {
  constructor(private readonly weatherService: WeatherForecastService) { }
  @Get()
  get(
    @Query('lat') latitude: string,
    @Query('long') longitude: string,
  ) {
    return this.weatherService.get({
      latitude,
      longitude,
    });
  }
}
