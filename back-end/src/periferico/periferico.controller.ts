import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PerifericoService } from './periferico.service';
import { CreatePerifericoDto } from './dto/create-periferico.dto';
import { UpdatePerifericoDto } from './dto/update-periferico.dto';

@Controller('periferico')
export class PerifericoController {
  constructor(private readonly perifericoService: PerifericoService) { }

  @Post()
  create(@Body() createPerifericoDto: CreatePerifericoDto) {
    return this.perifericoService.create(createPerifericoDto);
  }

  @Get()
  findAll() {
    return this.perifericoService.findAll();
  }

  @Get(':nome')
  findOne(@Param('nome') nome: string) {
    return this.perifericoService.findOne(nome);
  }

  @Patch(':nome')
  update(@Param('nome') nome: string, @Body() updatePerifericoDto: UpdatePerifericoDto) {
    return this.perifericoService.update(nome, updatePerifericoDto);
  }

  @Delete(':nome')
  remove(@Param('nome') nome: string) {
    return this.perifericoService.remove(nome)
  }
}
