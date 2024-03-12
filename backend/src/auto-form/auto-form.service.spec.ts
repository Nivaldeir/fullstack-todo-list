import { Test, TestingModule } from '@nestjs/testing';
import { AutoFormService } from './auto-form.service';

describe('AutoFormService', () => {
  let service: AutoFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutoFormService],
    }).compile();

    service = module.get<AutoFormService>(AutoFormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
