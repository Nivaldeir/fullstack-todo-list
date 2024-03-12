import { Controller, Get, Query } from '@nestjs/common';
import { WeatherForecastService } from './weather-forecast.service';

@Controller('weather-forecast')
export class WeatherForecastController {
  constructor(private readonly weatherService: WeatherForecastService) { }
  @Get()
  get(
    @Query('city') city: string,
    @Query('state') state: string,
    @Query('country') country: string,
  ) {
    return this.weatherService.get({
      city,
      country,
      state
    });
  }
}
