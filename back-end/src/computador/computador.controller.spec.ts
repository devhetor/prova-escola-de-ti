import { Test, TestingModule } from '@nestjs/testing';
import { ComputadorController } from './computador.controller';
import { ComputadorService } from './computador.service';

describe('ComputadorController', () => {
  let controller: ComputadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComputadorController],
      providers: [ComputadorService],
    }).compile();

    controller = module.get<ComputadorController>(ComputadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
