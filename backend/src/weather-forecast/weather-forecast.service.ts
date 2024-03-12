import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherForecastService {
  constructor(private httpService: HttpService) { }
  async get(input: Input) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${input.latitude}&longitude=${input.longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;
    const response = await this.httpService.get(url).toPromise() as any
    const output = response.data
    return output
  }
}

type Input = {
  latitude:string,
  longitude:string,
}