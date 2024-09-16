import { HydratedDocument } from "mongoose";
import { Periferico } from "src/periferico/schema/periferico.schema";
export type UserDocument = HydratedDocument<Computador>;
export declare class Computador {
    nome: string;
    cor: string;
    dataFabricacao: number;
    periferico: [Periferico];
}
export declare const ComputadorSchema: import("mongoose").Schema<Computador, import("mongoose").Model<Computador, any, any, any, import("mongoose").Document<unknown, any, Computador> & Computador & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Computador, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Computador>> & import("mongoose").FlatRecord<Computador> & {
    _id: import("mongoose").Types.ObjectId;
}>;
