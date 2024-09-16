import { ComputadorService } from './computador.service';
import { CreateComputadorDto } from './dto/create-computador.dto';
import { UpdateComputadorDto } from './dto/update-computador.dto';
import { Computador } from './schema/computador.shcema';
export declare class ComputadorController {
    private readonly computadorService;
    constructor(computadorService: ComputadorService);
    create(createComputadorDto: CreateComputadorDto): Promise<Computador>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateComputadorDto: UpdateComputadorDto): string;
    remove(id: string): string;
}
