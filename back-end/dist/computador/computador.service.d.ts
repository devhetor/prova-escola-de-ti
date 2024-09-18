import { CreateComputadorDto } from './dto/create-computador.dto';
import { UpdateComputadorDto } from './dto/update-computador.dto';
import { Computador } from './schema/computador.shcema';
import { Model } from 'mongoose';
export declare class ComputadorService {
    private ComputadorModel;
    constructor(ComputadorModel: Model<Computador>);
    create(computador: CreateComputadorDto): Promise<Computador>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Computador> & Computador & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(nome: string): Promise<Computador>;
    update(nome: string, computador: UpdateComputadorDto): Promise<Computador>;
    remove(nome: string): Promise<import("mongoose").Document<unknown, {}, Computador> & Computador & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
