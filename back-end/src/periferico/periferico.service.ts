import { Injectable } from '@nestjs/common';
import { CreatePerifericoDto } from './dto/create-periferico.dto';
import { UpdatePerifericoDto } from './dto/update-periferico.dto';
import { Periferico } from './schema/periferico.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PerifericoService {

  constructor(@InjectModel(Periferico.name) private perifericoModel: Model<Periferico>) { }

  create(createPerifericoDto: CreatePerifericoDto) {
    const createPeriferico = new this.perifericoModel(createPerifericoDto);
    return createPeriferico.save()
  }

  findAll(): Promise<Periferico[]> {
    return this.perifericoModel.find().exec()
  }

  findOne(nome: string): Promise<Periferico> {
    return this.perifericoModel.findOne({ nome: nome })
  }

  async update(nome: string, updatePerifericoDto: UpdatePerifericoDto): Promise<Periferico> {
    return await this.perifericoModel.findByIdAndUpdate({ nome: nome }, Periferico, { new: true })
  }

  async remove(nome: string): Promise<Periferico> {
    return await this.perifericoModel.findOneAndDelete({ nome: nome })
  }
}
