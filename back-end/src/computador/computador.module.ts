import { Module } from '@nestjs/common';
import { ComputadorService } from './computador.service';
import { ComputadorController } from './computador.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature()],
  controllers: [ComputadorController],
  providers: [ComputadorService],
})
export class ComputadorModule { }
