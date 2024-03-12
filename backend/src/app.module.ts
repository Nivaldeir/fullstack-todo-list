import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskService } from './tasks/tasks.service';
import { TasksController } from './tasks/tasks.controller';
import { AutoFormService } from './auto-form/auto-form.service';
import { AutoFormController } from './auto-form/auto-form.controller';
import { WeatherForecastService } from './weather-forecast/weather-forecast.service';
import { WeatherForecastController } from './weather-forecast/weather-forecast.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AppController, TasksController, AutoFormController, WeatherForecastController],
  providers: [AppService, TaskService, AutoFormService, WeatherForecastService],
})
export class AppModule {}
