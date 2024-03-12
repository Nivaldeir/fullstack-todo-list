import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherForecastService {
  constructor(private httpService: HttpService) { }
  async get(input: Input) {
    const url = `https://api.weatherbit.io/v2.0/current?city=${input.city}&state=${input.state}&country=${input.country}&key=${process.env.API_KEY_WEATHERBIT}&lang=pt`;
    const response = await this.httpService.get(url).toPromise() as any
    const output = response.data
    return {
      temp: output.data[0].app_temp,
      city: output.data[0].city_name,
      where: output.data[0].weather.description
    }
  }
}

type Input = {
  city: string
  state: string
  country: string
}