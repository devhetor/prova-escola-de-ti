import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComputadorModule } from './computador/computador.module';
import { PerifericoModule } from './periferico/periferico.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [ComputadorModule, PerifericoModule, MongooseModule.forRoot('mongodb://localhost:27017/computador')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
