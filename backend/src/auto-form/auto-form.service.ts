import { Injectable } from '@nestjs/common';
import { MyForm } from './my-form';
import { firefox } from 'playwright';

type Output = {
  error: boolean;
  message: string
}
@Injectable()
export class AutoFormService {
  async toFillIn(myForm: MyForm): Promise<Output> {
    const browser = await firefox.launch({
      headless: false
    })
    const page = await browser.newPage({})
    await page.goto("https://rpachallenge.com/")
    const inputFields = await page.$$(".ng-untouched .ng-pristine .ng-invalid")
    for (const inputField of inputFields) {
      const labelInput = await inputField.$('xpath=preceding-sibling::label')
      let label = await labelInput.textContent()
      label = label.charAt(0).toLowerCase() + label.slice(1).replaceAll(" ", "");
      if (myForm.hasOwnProperty(label)) {
        try {
          await inputField.fill(myForm[label]);
        } catch (error) {
          return {
            error: true,
            message: error.message
          }
        }
      }
    }
    await page.waitForTimeout(10000)
    browser.close()
    return {
      error: false,
      message: 'RPA Finalizado com sucesso'
    }
  }
}
