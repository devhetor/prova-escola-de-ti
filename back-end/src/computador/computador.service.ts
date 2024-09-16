import { Injectable } from '@nestjs/common';
import { CreateComputadorDto } from './dto/create-computador.dto';
import { UpdateComputadorDto } from './dto/update-computador.dto';
import { Computador } from './schema/computador.shcema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ComputadorService {
  constructor(@InjectModel(Computador.name) private ComputadorModel: Model<Computador>) { }

  create(item: CreateComputadorDto): Promise<Computador> {
    const createComputador = new this.ComputadorModel(item)
    return createComputador.save();
  }

  findAll() {
    return `This action returns all computador`;
  }

  findOne(id: number) {
    return `This action returns a #${id} computador`;
  }

  update(id: number, updateComputadorDto: UpdateComputadorDto) {
    return `This action updates a #${id} computador`;
  }

  remove(id: number) {
    return `This action removes a #${id} computador`;
  }
}
