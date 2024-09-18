import { PerifericoService } from './periferico.service';
import { CreatePerifericoDto } from './dto/create-periferico.dto';
import { UpdatePerifericoDto } from './dto/update-periferico.dto';
export declare class PerifericoController {
    private readonly perifericoService;
    constructor(perifericoService: PerifericoService);
    create(createPerifericoDto: CreatePerifericoDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/periferico.schema").Periferico> & import("./schema/periferico.schema").Periferico & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<import("./schema/periferico.schema").Periferico[]>;
    findOne(nome: string): Promise<import("./schema/periferico.schema").Periferico>;
    update(nome: string, updatePerifericoDto: UpdatePerifericoDto): Promise<import("./schema/periferico.schema").Periferico>;
    remove(nome: string): Promise<import("./schema/periferico.schema").Periferico>;
}
