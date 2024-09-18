import { Injectable } from '@nestjs/common';
import { CreateComputadorDto } from './dto/create-computador.dto';
import { UpdateComputadorDto } from './dto/update-computador.dto';
import { Computador } from './schema/computador.shcema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ComputadorService {
  constructor(@InjectModel(Computador.name) private ComputadorModel: Model<Computador>) { }

  async create(computador: CreateComputadorDto): Promise<Computador> {
    const createComputador = new this.ComputadorModel(computador)
    return createComputador.save();
  }

  findAll() {
    return this.ComputadorModel.find().exec()
  }

  async findOne(nome: string): Promise<Computador> {
    return await this.ComputadorModel.findOne({ nome: nome })
  }

  async update(nome: string, computador: UpdateComputadorDto): Promise<Computador> {
    return await this.ComputadorModel.findOneAndUpdate({ nome: nome }, computador, { new: true })
  }

  async remove(nome: string) {
    return await this.ComputadorModel.findOneAndDelete({ nome: nome })
  }
}
