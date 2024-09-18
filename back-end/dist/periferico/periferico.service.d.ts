import { CreatePerifericoDto } from './dto/create-periferico.dto';
import { UpdatePerifericoDto } from './dto/update-periferico.dto';
import { Periferico } from './schema/periferico.schema';
import { Model } from 'mongoose';
export declare class PerifericoService {
    private perifericoModel;
    constructor(perifericoModel: Model<Periferico>);
    create(createPerifericoDto: CreatePerifericoDto): Promise<import("mongoose").Document<unknown, {}, Periferico> & Periferico & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<Periferico[]>;
    findOne(nome: string): Promise<Periferico>;
    update(nome: string, updatePerifericoDto: UpdatePerifericoDto): Promise<Periferico>;
    remove(nome: string): Promise<Periferico>;
}
