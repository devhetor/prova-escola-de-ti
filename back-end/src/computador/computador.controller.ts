import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComputadorService } from './computador.service';
import { CreateComputadorDto } from './dto/create-computador.dto';
import { UpdateComputadorDto } from './dto/update-computador.dto';
import { Computador } from './schema/computador.shcema';

@Controller('computador')
export class ComputadorController {
  constructor(private readonly computadorService: ComputadorService) { }

  @Post()
  async create(@Body() createComputadorDto: CreateComputadorDto) {
    console.log("GET: " + new Date())
    return await this.computadorService.create(createComputadorDto)
  }

  @Get()
  async findAll() {
    console.log("GET: " + new Date())
    return await this.computadorService.findAll();
  }

  @Get(':nome')
  findOne(@Param('nome') nome: string) {
    console.log("GET: " + new Date())
    return this.computadorService.findOne(nome);
  }

  @Patch(':nome')
  update(@Param('nome') nome: string, @Body() updateComputadorDto: UpdateComputadorDto) {
    console.log("GET: " + new Date())
    return this.computadorService.update(nome, updateComputadorDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    console.log("GET: " + new Date())
    return this.computadorService.remove(name)
  }
}
