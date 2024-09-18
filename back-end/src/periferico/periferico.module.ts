import { Module } from '@nestjs/common';
import { PerifericoService } from './periferico.service';
import { PerifericoController } from './periferico.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Periferico, PerifericoSchema } from './schema/periferico.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Periferico.name, schema: PerifericoSchema }])],
  controllers: [PerifericoController],
  providers: [PerifericoService],
})
export class PerifericoModule { }
