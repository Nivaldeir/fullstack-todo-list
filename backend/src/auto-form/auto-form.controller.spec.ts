import { Test, TestingModule } from '@nestjs/testing';
import { AutoFormController } from './auto-form.controller';

describe('AutoFormController', () => {
  let controller: AutoFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutoFormController],
    }).compile();

    controller = module.get<AutoFormController>(AutoFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
