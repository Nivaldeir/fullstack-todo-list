import { Body, Controller, Post } from '@nestjs/common';
import { AutoFormService } from './auto-form.service';

@Controller('auto-form')
export class AutoFormController {
  constructor(private readonly autoFormService: AutoFormService) { }
  @Post()
  async toFillIn(
    @Body('roleinCompany') roleinCompany: string,
    @Body('lastName') lastName: string,
    @Body('firstName') firstName: string,
    @Body('address') address: string,
    @Body('companyName') companyName: string,
    @Body('phoneNumber') phoneNumber: string,
    @Body('email') email: string,
  ) {
    return await this.autoFormService.toFillIn({
      roleinCompany,
      lastName,
      firstName,
      address,
      companyName,
      phoneNumber,
      email
    })
  }
}
