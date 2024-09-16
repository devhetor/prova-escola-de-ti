import { CreatePerifericoDto } from './dto/create-periferico.dto';
import { UpdatePerifericoDto } from './dto/update-periferico.dto';
export declare class PerifericoService {
    create(createPerifericoDto: CreatePerifericoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePerifericoDto: UpdatePerifericoDto): string;
    remove(id: number): string;
}
