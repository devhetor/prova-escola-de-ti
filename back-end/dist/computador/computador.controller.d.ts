import { ComputadorService } from './computador.service';
import { CreateComputadorDto } from './dto/create-computador.dto';
import { UpdateComputadorDto } from './dto/update-computador.dto';
import { Computador } from './schema/computador.shcema';
export declare class ComputadorController {
    private readonly computadorService;
    constructor(computadorService: ComputadorService);
    create(createComputadorDto: CreateComputadorDto): Promise<Computador>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Computador> & Computador & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(nome: string): Promise<Computador>;
    update(nome: string, updateComputadorDto: UpdateComputadorDto): Promise<Computador>;
    remove(name: string): Promise<import("mongoose").Document<unknown, {}, Computador> & Computador & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
