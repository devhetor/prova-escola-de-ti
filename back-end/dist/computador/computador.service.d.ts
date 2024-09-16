import { CreateComputadorDto } from './dto/create-computador.dto';
import { UpdateComputadorDto } from './dto/update-computador.dto';
import { Computador } from './schema/computador.shcema';
import { Model } from 'mongoose';
export declare class ComputadorService {
    private ComputadorModel;
    constructor(ComputadorModel: Model<Computador>);
    create(item: CreateComputadorDto): Promise<Computador>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateComputadorDto: UpdateComputadorDto): string;
    remove(id: number): string;
}
