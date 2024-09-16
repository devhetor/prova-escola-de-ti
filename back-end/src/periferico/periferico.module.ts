import { Module } from '@nestjs/common';
import { PerifericoService } from './periferico.service';
import { PerifericoController } from './periferico.controller';

@Module({
  controllers: [PerifericoController],
  providers: [PerifericoService],
})
export class PerifericoModule {}
