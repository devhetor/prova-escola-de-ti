import { PerifericoService } from './periferico.service';
import { CreatePerifericoDto } from './dto/create-periferico.dto';
import { UpdatePerifericoDto } from './dto/update-periferico.dto';
export declare class PerifericoController {
    private readonly perifericoService;
    constructor(perifericoService: PerifericoService);
    create(createPerifericoDto: CreatePerifericoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePerifericoDto: UpdatePerifericoDto): string;
    remove(id: string): string;
}
