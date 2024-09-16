import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComputadorModule } from './computador/computador.module';
import { PerifericoModule } from './periferico/periferico.module';


@Module({
  imports: [ComputadorModule, PerifericoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
