import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComputadorService } from './computador.service';
import { CreateComputadorDto } from './dto/create-computador.dto';
import { UpdateComputadorDto } from './dto/update-computador.dto';
import { Computador } from './schema/computador.shcema';

@Controller('computador')
export class ComputadorController {
  constructor(private readonly computadorService: ComputadorService) { }

  @Post()
  async create(@Body() createComputadorDto: CreateComputadorDto): Promise<Computador> {
    return await this.computadorService.create(createComputadorDto)
  }

  @Get()
  findAll() {
    return this.computadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.computadorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComputadorDto: UpdateComputadorDto) {
    return this.computadorService.update(+id, updateComputadorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.computadorService.remove(+id);
  }
}
