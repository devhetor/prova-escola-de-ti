import { Injectable } from '@nestjs/common';
import { CreatePerifericoDto } from './dto/create-periferico.dto';
import { UpdatePerifericoDto } from './dto/update-periferico.dto';

@Injectable()
export class PerifericoService {
  create(createPerifericoDto: CreatePerifericoDto) {
    return 'This action adds a new periferico';
  }

  findAll() {
    return `This action returns all periferico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} periferico`;
  }

  update(id: number, updatePerifericoDto: UpdatePerifericoDto) {
    return `This action updates a #${id} periferico`;
  }

  remove(id: number) {
    return `This action removes a #${id} periferico`;
  }
}
